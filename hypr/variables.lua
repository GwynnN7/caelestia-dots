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

    -- Workspaces & Navigation
    kbFocus                    = "SUPER",
    kbMove                     = "SUPER + SHIFT",
    kbFocusWin                 = "SUPER + CTRL",
    kbMoveWin                  = "SUPER + SHIFT + CTRL",

    -- Window Action
    kbWindowFullscreen         = "SUPER + Return",
    kbWindowBorderedFullscreen = "SUPER + F",
    kbToggleWindowFloating     = "SUPER + G",
    kbCenter         		   = "SUPER + X",
    kbPinWindow				   = "SUPER + P",
    kbCloseWindow              = "SUPER + Q",

    -- Special workspaces toggles
    kbScratchpad               = "SUPER + Comma",
    kbSpecialWs                = "SUPER + C",
    kbSystemMonitorWs          = "CTRL + Escape",

    -- Apps
    kbTerminal                 = "SUPER + T",
    kbBrowser                  = "SUPER + R",
    kbFileExplorer             = "SUPER + E",
    kbYazi                     = "SUPER + Y",
    kbAudioSettings            = "SUPER + N",

    -- Misc
    kbShowClipboard            = "SUPER + V",
    kbShowEmoji                = "SUPER + Period",
    kbSession                  = "SUPER + Escape",
    kbShowAI                   = "SUPER + Z",
    kbShowSidebarAI            = "SUPER + ALT + Z",
    kbShowSidebar              = "SUPER + B",
    kbClearNotifs              = "SUPER + ALT + B",
    kbShowKeybinds             = "SUPER + K",
    kbShowWindows              = "SUPER + J",
    kbShowPanels               = "SUPER + H",
    kbLock                     = "SUPER + L",
    kbRestoreLock              = "SUPER + ALT + L",
}