/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  afterPatch,
  fakeRenderComponent,
  findInReactTree,
  findInTree,
  findModuleByExport,
  MenuItem,
  Navigation,
  Patch
} from '@decky/ui'
import useTranslations from '../hooks/useTranslations'

function ChangeMusicButton({ appId }: { appId: number }) {
  const t = useTranslations()
  return (
    <MenuItem
      key="game-theme-music-change-music"
      onSelected={() => {
        Navigation.Navigate(`/gamethememusic/${appId}`)
      }}
    >
      {t('changeThemeMusic')}...
    </MenuItem>
  )
}

// Always add before "Properties..."
const spliceChangeMusic = (children: any[], appid: number) => {
  if (!Array.isArray(children)) return

  const existingIdx = children.findIndex(
    (x: any) => x?.key === 'game-theme-music-change-music'
  )
  if (existingIdx !== -1) {
    children.splice(existingIdx, 1)
  }

  children.find((x: any) => x?.key === 'properties')
  const propertiesMenuItemIdx = children.findIndex((item) =>
    findInReactTree(
      item,
      (x) => x?.onSelected && x.onSelected.toString().includes('AppProperties')
    )
  )
  const insertIdx = propertiesMenuItemIdx >= 0 ? propertiesMenuItemIdx : children.length
  children.splice(
    insertIdx,
    0,
    <ChangeMusicButton key="game-theme-music-change-music" appId={appid} />
  )
}

const isOpeningAppContextMenu = (items: any[]) => {
  if (!items?.length) {
    return false
  }
  return !!findInReactTree(
    items,
    (x) => x?.props?.onSelected && x?.props?.onSelected.toString().includes('launchSource')
  )
}

const handleItemDupes = (items: any[]) => {
  const gtmIdx = items.findIndex((x: any) => x?.key === 'game-theme-music-change-music')
  if (gtmIdx !== -1) items.splice(gtmIdx, 1)
}

const patchMenuItems = (menuItems: any[], appid: number) => {
  if (!Array.isArray(menuItems)) {
    return
  }

  let updatedAppid = appid
  const parentOverview = menuItems.find(
    (x: any) =>
      x?._owner?.pendingProps?.overview?.appid &&
      x?._owner?.pendingProps?.overview?.appid !== appid
  )
  if (parentOverview) {
    updatedAppid = parentOverview?._owner?.pendingProps?.overview?.appid
  }

  if (updatedAppid === appid) {
    const foundApp = findInTree(menuItems, (x: any) => x?.app?.appid, {
      walkable: ['props', 'children']
    })
    if (foundApp) {
      updatedAppid = foundApp.app.appid
    }
  }

  spliceChangeMusic(menuItems, updatedAppid)
}

/**
 * Patches the game context menu.
 * @param LibraryContextMenu The game context menu.
 * @returns A patch to remove when the plugin dismounts.
 */
const contextMenuPatch = (LibraryContextMenu: any) => {
  const patches: {
    outer?: Patch
    inner?: Patch
    unpatch: () => void
  } = {
    unpatch: () => {
      return null
    }
  }
  if (!LibraryContextMenu?.prototype?.render) {
    return patches
  }
  patches.outer = afterPatch(
    LibraryContextMenu.prototype,
    'render',
    (_: Record<string, unknown>[], component: any) => {
      let appid = 1018880
      if (component?._owner?.pendingProps?.overview?.appid) {
        appid = component._owner.pendingProps.overview.appid
      } else {
        const foundApp = findInTree(
          component?.props?.children,
          (x: any) => x?.app?.appid,
          { walkable: ['props', 'children'] }
        )
        if (foundApp) {
          appid = foundApp.app.appid
        }
      }

      if (!patches.inner) {
        patches.inner = afterPatch(
          component,
          'type',
          (_: Record<string, unknown>[], ret: any) => {
            if (!ret?.type?.prototype) {
              return ret
            }

            afterPatch(ret.type.prototype, 'render', (_: Record<string, unknown>[], ret2: any) => {
              const menuItems = ret2?.props?.children?.[0]
              if (!isOpeningAppContextMenu(menuItems)) return ret2

              try {
                handleItemDupes(menuItems)
              } catch {
                return ret2
              }

              patchMenuItems(menuItems, appid)
              return ret2
            })

            afterPatch(ret.type.prototype, 'shouldComponentUpdate', ([nextProps]: any, shouldUpdate: any) => {
              try {
                if (!Array.isArray(nextProps?.children)) {
                  return shouldUpdate
                }
                handleItemDupes(nextProps.children)
              } catch {
                return shouldUpdate
              }

              if (shouldUpdate === true) {
                patchMenuItems(nextProps.children, appid)
              }
              return shouldUpdate
            })

            return ret
          }
        )
      } else {
        // no-op: inner patch handles insertion to avoid duplicate entries
      }

      return component
    }
  )
  patches.unpatch = () => {
    patches.outer?.unpatch()
    patches.inner?.unpatch()
  }
  return patches
}

/**
 * Game context menu component.
 */
export const LibraryContextMenu = (() => {
  const renderContextMenu = Object.values(
    findModuleByExport(
      (e: any) => e?.toString && e.toString().includes('().LibraryContextMenu')
    ) ?? {}
  ).find((sibling: any) => sibling?.toString().includes('navigator:'))

  if (typeof renderContextMenu !== 'function') {
    return undefined
  }

  return fakeRenderComponent(renderContextMenu)?.type
})()

export default contextMenuPatch
