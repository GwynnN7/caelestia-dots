import { useEffect, useState } from 'react'

import { getResolver } from '../actions/audio'

import { getCache, updateCache } from '../cache/musicCache'
import { useSettings } from '../hooks/useSettings'

const useThemeMusic = (appId: number) => {
  const { settings, isLoading: settingsLoading } = useSettings()
  const [audio, setAudio] = useState<{ videoId: string; audioUrl: string }>({
    videoId: '',
    audioUrl: ''
  })
  const appDetails = appStore.GetAppOverviewByGameID(appId)
  const appName = appDetails?.display_name?.replace(/(™|®|©)/g, '')

  useEffect(() => {
    let ignore = false
    async function getData() {
      const resolver = getResolver(settings.useYtDlp)
      async function getPlayableAudio(videoId: string, audioUrl: string) {
        let playableUrl = audioUrl
        if (settings.downloadAudio) {
          const downloaded = await resolver.downloadAudio({
            id: videoId,
            url: audioUrl
          })
          if (downloaded) {
            const localAudio = await resolver.getAudioUrlFromVideo({
              id: videoId
            })
            if (localAudio?.length) {
              playableUrl = localAudio
            }
          }
        }
        return playableUrl
      }

      const cache = await getCache(appId)
      if (cache?.videoId?.length == 0) {
        return setAudio({ videoId: '', audioUrl: '' })
      } else if (cache?.videoId?.length) {
        const newAudio = await resolver.getAudioUrlFromVideo({
          id: cache.videoId
        })
        if (newAudio?.length) {
          const playableAudio = await getPlayableAudio(cache.videoId, newAudio)
          if (ignore) {
            return
          }
          return setAudio({ videoId: cache.videoId, audioUrl: playableAudio })
        }
      } else if (settings.defaultMuted) {
        return setAudio({ videoId: '', audioUrl: '' })
      } else {
        const newAudio = await resolver.getAudio(appName as string)
        if (ignore) {
          return
        }
        if (!newAudio?.audioUrl?.length) {
          return setAudio({ videoId: '', audioUrl: '' })
        }
        const playableAudio = await getPlayableAudio(
          newAudio.videoId,
          newAudio.audioUrl
        )
        await updateCache(appId, newAudio)
        return setAudio({ ...newAudio, audioUrl: playableAudio })
      }
    }
    if (appName?.length && !settingsLoading) {
      getData()
    }
    return () => {
      ignore = true
    }
  }, [
    appId,
    appName,
    settingsLoading,
    settings.useYtDlp,
    settings.defaultMuted,
    settings.downloadAudio
  ])

  return {
    audio
  }
}

export default useThemeMusic
