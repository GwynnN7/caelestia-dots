local scheme = require("scheme.current")

return {
    ------------------
    ---- HYPRLAND ----
    ------------------

    -- Apps
    terminal                   = "foot",
    browser                    = "zen-browser",
    editor                     = "micro",
    fileExplorer               = "thunar",
    audioSettings              = "pavucontrol",

    -- Touchpad
    touchpadDisableTyping      = true,
    touchpadScrollFactor       = 0.3,

    -- Blur
    blurEnabled                = true,
    blurSpecialWs              = false,
    blurPopups                 = true,
    blurInputMethods           = true,
    blurSize                   = 8,
    blurPasses                 = 2,
    blurXray                   = true,

    -- Shadow
    shadowEnabled              = true,
    shadowRange                = 15,
    shadowRenderPower          = 4,
    shadowColour               = "rgba(" .. scheme.inversePrimary .. "10)",

    -- Gaps
    workspaceGaps              = 20,
    windowGapsIn               = 5,
    windowGapsOut              = 10,
    singleWindowGapsOut        = 20,

    -- Window styling
    windowOpacity              = 0.8,
    windowRounding             = 15,
    windowBorderSize           = 1,
    activeWindowBorderColour   = "rgba(" .. scheme.primary .. "e6)",
    inactiveWindowBorderColour = "rgba(" .. scheme.onSurfaceVariant .. "11)",

    -- Misc
    volumeStep                 = 10,
    volumeMax                  = 100,
    cursorTheme                = "sweet-cursors",
    cursorSize                 = 24,
    sleepGestureCmd            = "systemctl suspend",


    ------------------
    ---- KEYBINDS ----
    ------------------

    -- Launcher
    kbLauncher                 = "SUPER + SUPER_L",

    -- Misc
    kbSession                  = { "SUPER + Escape", "SUPER + F3" },
    kbShowSidebar              = "SUPER + B",
    kbClearNotifs              = "SUPER + ALT + B",
    kbShowPanels               = "SUPER + H",
    kbLock                     = "SUPER + L",

    -- Plugins
    kbOverview                 = "SUPER + Space",
    kbOverview2                = "ALT + Tab",

    -- Restore lock
    kbRestoreLock              = "SUPER + ALT + L",

    -- Kill/restart
    kbKillRestart              = "CTRL + ALT + Delete",

    -- Monitor
    kbFocus                    = "SUPER",
    kbMove                     = "SUPER + SHIFT",

    -- Workspace and Windows
    kbFocusWin                 = "SUPER + CTRL",
    kbMoveWin                  = "SUPER + SHIFT + CTRL",

    -- Special workspace toggles
    kbScratchpad               = "SUPER + Comma",
    kbSystemMonitorWs          = "CTRL + Escape",
    kbSpecialWs                = "SUPER + C",
    kbCloseWindow              = "SUPER + Q",

    -- Resize and drag
    kbResizeColShrink          = { "SUPER + Minus", "SUPER + ALT + A", "SUPER + ALT + left" },
    kbResizeColGrow            = { "SUPER + Equal", "SUPER + ALT + D", "SUPER + ALT + right" },
    kbResizeColShrinkConf      = "SUPER + SHIFT + Minus",
    kbResizeColGrowConf        = "SUPER + SHIFT + Equal",
    kbResizeWinShrink          = "SUPER + ALT + Minus",
    kbResizeWinGrow            = "SUPER + ALT + Equal",

    -- Window utility
    kbPinWindow                = "SUPER + P",
    kbFullscreen               = "SUPER + Return",
    kbBorderless               = "SUPER + F",
    kbFloating                 = "SUPER + G",
    kbCenter                   = "SUPER + X",

    -- Apps
    kbTerminal                 = "SUPER + T",
    kbBrowser                  = "SUPER + R",
    kbFileExplorer             = "SUPER + E",
    kbYazi                     = "SUPER + Y",
    kbAudioSettings            = "SUPER + N",

    -- Utilities
    kbScreenshot               = "Print",
    kbScreenshotFreeze         = "SUPER + Print",
    kbScreenshotRegion         = "SHIFT + ALT + S",
    kbRecord                   = "SUPER + SHIFT + R",
    kbRecordSound              = "SUPER + ALT + R",
    kbRecordRegion             = "SUPER + CTRL + R",
    kbColorPicker              = "SUPER + CTRL + C",

    -- Utils
    kbClipboard                = "SUPER + V",
    kbEmoji                    = "SUPER + Period",
    kbAI                       = "SUPER + Z",
    kbSidebarAI                = "SUPER + ALT + Z",
    kbKeybinds                 = "SUPER + K",
    kbWindows                  = "SUPER + J",
    kbWallpaper                = "SUPER + F4",

    -- Submaps
    kbSubmap                   = "SUPER + Home",
}