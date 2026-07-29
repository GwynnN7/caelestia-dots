// Decky Loader will pass this api in, it's versioned to allow for backwards compatibility.
// @ts-ignore

// Prevents it from being duplicated in output.
const manifest = {"name":"TabMaster","author":"Travis Lane (Tormak), Jesse Bofill, & Kernel Panic","flags":["debug"],"api_version":1,"publish":{"tags":["Customization","Library","Tabs"],"description":"Gives you full control over your Steam library! Support for customizing, adding, and hiding Library Tabs.","image":"https://raw.githubusercontent.com/Tormak9970/TabMaster/main/assets/thumbnail.png"}};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
// Initialize
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
// Version 1 throws on version mismatch so we have to account for that here.
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
// TODO these could use a lot of JSDoc
const call = api.call;
const routerHook = api.routerHook;
const toaster = api.toaster;
const openFilePicker = api.openFilePicker;
const definePlugin = (fn) => {
    return (...args) => {
        // TODO: Maybe wrap this
        return fn(...args);
    };
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && SP_REACT.createContext(DefaultContext);

var __assign = window && window.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = window && window.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return SP_REACT.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return SP_REACT.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return SP_REACT.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? SP_REACT.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function TbCalendarEvent (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","fill":"none","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}},{"tag":"path","attr":{"d":"M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}},{"tag":"path","attr":{"d":"M16 3l0 4"}},{"tag":"path","attr":{"d":"M8 3l0 4"}},{"tag":"path","attr":{"d":"M4 11l16 0"}},{"tag":"path","attr":{"d":"M8 15h2v2h-2z"}}]})(props);
}function TbLayoutNavbarExpand (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","fill":"none","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}},{"tag":"path","attr":{"d":"M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}},{"tag":"path","attr":{"d":"M4 9h16"}},{"tag":"path","attr":{"d":"M10 14l2 2l2 -2"}}]})(props);
}

const GamepadUIAudio = DFL.findModuleExport(modExport => {
    if (modExport?.GamepadUIAudio)
        return modExport;
}).GamepadUIAudio;

/**
 * Waits for a condition to be true.
 * @param retries The number of times to retry the condition.
 * @param delay The time (in ms) between retries.
 * @param check The condition to check.
 * @returns A promise resolving to true if the check was true on any attempt, or false if it failed each time.
 */
async function waitForCondition(retries, delay, check) {
    const waitImpl = async () => {
        try {
            let tries = retries + 1;
            while (tries-- !== 0) {
                if (await check()) {
                    return true;
                }
                if (tries > 0) {
                    await DFL.sleep(delay);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
        return false;
    };
    return await waitImpl();
}
/**
 * Gets a steam user id from two parts.
 * @param low The low part of the bigint.
 * @param high The high part of the bigint.
 * @returns The user's id as a bigint.
 */
function getSteamIdFromParts(low, high) {
    return (BigInt(high) << 32n) | BigInt(low);
}
/**
 * Gets a steam user id from two parts.
 * @param low The low part of the bigint.
 * @param high The high part of the bigint.
 * @returns The user's id as a number.
 */
function getNonBigIntUserId(low, high) {
    return Number(getSteamIdFromParts(low, high) - 76561197960265728n);
}
const defaultTabsSettings = {
    GreatOnDeck: {
        id: 'GreatOnDeck',
        title: 'Great On Deck',
        position: 0,
    },
    AllGames: {
        id: 'AllGames',
        title: 'All Games',
        position: 1,
    },
    Installed: {
        id: 'Installed',
        title: 'Installed',
        position: 2,
    },
    Favorites: {
        id: 'Favorites',
        title: 'Favorites',
        position: 3,
    },
    Collections: {
        id: 'Collections',
        title: 'Collections',
        position: 4,
    },
    DesktopApps: {
        id: 'DesktopApps',
        title: 'Non-Steam',
        position: 5,
    },
    Soundtracks: {
        id: 'Soundtracks',
        title: 'Soundtracks',
        position: 6,
    },
};
/**
 * Validates that the tabs adhere to the expected structure.
 * @param tabs The tabs to check.
 * @returns True if there were no issues.
 */
function validateTabStructure(tabs) {
    return Object.values(tabs).every((tab) => {
        if (tab.filters) {
            if (!Object.keys(tab).includes('filtersMode'))
                tab.filtersMode = 'and';
            return tab.filters.every((filter) => {
                return filter.type !== undefined;
            });
        }
        else {
            return tab.id === 'DeckGames' || Object.keys(defaultTabsSettings).includes(tab.id);
        }
    });
}
/**
 * Capitalizes the first letter of a word.
 * @param word The word to capitalize.
 * @returns The capitalized word.
 */
function capitalizeFirstLetter(word) {
    return word[0].toUpperCase().concat(word.substring(1));
}
/**
 * Capitalizes the first letter of each word.
 * @param words A string of words.
 * @returns The capitalized string of words.
 */
function capitalizeEachWord(words) {
    return words
        .split(' ')
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');
}
/**
 * Gets the current user's steam id.
 * @param useU64 Whether or not the id should be a u64.
 * @returns The user's steam id.
 */
function getCurrentUserId(useU64 = false) {
    if (useU64)
        return window.App.m_CurrentUser.strSteamID;
    return BigInt.asUintN(32, BigInt(window.App.m_CurrentUser.strSteamID)).toString();
}
/**
 * Bit defines for inlcudeable categories
 */
var IncludeCategories;
(function (IncludeCategories) {
    IncludeCategories[IncludeCategories["games"] = 1] = "games";
    IncludeCategories[IncludeCategories["software"] = 2] = "software";
    // tools = 4,
    // videos = 2048,
    IncludeCategories[IncludeCategories["music"] = 8192] = "music";
    IncludeCategories[IncludeCategories["hidden"] = 16] = "hidden";
})(IncludeCategories || (IncludeCategories = {}));
/**
 * Gets an updated bit field of categories to include
 * @param bitField The current bit field of categories to include
 * @param categoriesToInclude Object of categories whose bits are to be set
 * @returns A bit field of categories to include with desired bits updated
 */
function updateCategoriesToIncludeBitField(bitField, categoriesToInclude) {
    let onMask = 0;
    let offMask = 0;
    for (const key in categoriesToInclude) {
        const category = key;
        if (categoriesToInclude[category]) {
            onMask |= IncludeCategories[category];
        }
        else {
            offMask |= IncludeCategories[category];
        }
    }
    return (bitField | onMask) & ~offMask;
}
/**
 * Gets on object containing flags of which categories are set based on bit field of categories
 * @param bitField The bit field of categories to include
 * @returns An object of categories to include
 */
function getIncludedCategoriesFromBitField(bitField) {
    const includes = {
        games: false,
        music: false,
        software: false,
        // videos: false,
        // tools: false,
        hidden: false,
    };
    for (const key of Object.keys(IncludeCategories).filter(key => isNaN(Number(key)))) {
        includes[key] =
            (IncludeCategories[key] & bitField) !== 0;
    }
    return includes;
}
function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
        };
        const callNow = !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
/**
 * Recursive function that checks whether an array of TabFilterSettings contains any filters of a specified type.
 * @param filters The array of TabFilterSettings to check in.
 * @param filterTypes The filter types to check are included.
 * @returns Boolean
 */
function filtersHaveType(filters, ...filterTypes) {
    if (filters.find(filter => filterTypes.includes(filter.type)))
        return true;
    for (const filter of filters) {
        if (filter.type === 'merge') {
            if (filtersHaveType(filter.params.filters, ...filterTypes))
                return true;
        }
    }
    return false;
}
/**
 * Plays audio url while respecting whether user has ui sounds enabled/ disabled
 *  @param path Audio url
 */
function playUISound(path) {
    if (settingsStore?.m_ClientSettings?.enable_ui_sounds)
        GamepadUIAudio.AudioPlaybackManager.PlayAudioURL(path);
}
/**
 * Gets current timestamp in compact form
 * @returns String "YYMMDD-HHMM"
 */
function getCompactTimestamp() {
    const now = new Date();
    const year = String(now.getFullYear()).slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}${month}${day}-${hours}${minutes}`;
}
/**
 * Ensures to remove leftover patch instances before continuing to add patch
 */
function addPatch(route, patch) {
    //if you're decky team seeing this, it's necessary for leftover unremoved patches caused by decky spam loading the plugin when installing from store
    const existingPatches = [...(DeckyPluginLoader.routerHook.routerState._routePatches.get(route) ?? [])].filter(existingPatch => patch.toString() === existingPatch.toString());
    existingPatches.forEach(patch => routerHook.removePatch(route, patch));
    return routerHook.addPatch(route, patch);
}

const USER_BACKUP_NAME = 'tabmaster_settings_backup';
const AUTO_BACKUP_NAME = 'backup';
const GITHUB_URL = 'https://github.com/Tormak9970/TabMaster/issues';
const DISCORD_URL = 'https://discord.com/channels/960281551428522045/1049449185214206053';

/**
 * Class for frontend -> backend communication.
 */
class PythonInterop {
    static dismount() {
        PythonInterop.isDismounted = true;
    }
    /**
     * Gets the user's desktop path.
     * @returns The path.
     */
    static async getUserDesktopPath() {
        try {
            return await call('get_user_desktop');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets a folder chosen by the user.
     * @returns The choosen folder.
     */
    static async openFolder() {
        const startPath = await this.getUserDesktopPath();
        if (startPath instanceof Error) {
            return startPath;
        }
        const res = await openFilePicker(1 /* FileSelectionType.FOLDER */, startPath, false, true, undefined, undefined, false, false);
        return res.realpath;
    }
    /**
     * Backs up the plugin's settings to prevent them from being corrupted.
     * @param destPath The path to copy the settings to.
     */
    static async backupSettings(destPath) {
        try {
            return await call('backup_settings', `${destPath}/${USER_BACKUP_NAME}_${getCompactTimestamp()}.json`);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets a file chosen by the user.
     * @returns The choosen file.
     */
    static async openJSONFile() {
        const startPath = await this.getUserDesktopPath();
        if (startPath instanceof Error) {
            return startPath;
        }
        const res = await openFilePicker(0 /* FileSelectionType.FILE */, startPath, true, true, undefined, ['json'], false, false);
        return res.realpath;
    }
    /**
     * Restores the plugin's settings from a previous backup.
     * @param srcPath The path to the settings to restore.
     */
    static async restoreSettings(srcPath) {
        try {
            return await call('restore_settings', srcPath);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Backs up the plugin's settings to default settings dir.
     * @param name The name to give the file.
     */
    static async backupDefaultDir(name) {
        try {
            return await call('backup_default_dir', `${name}_${getCompactTimestamp()}`);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Logs a message to the plugin's log file and the frontend console.
     * @param message The message to log.
     */
    static async log(message) {
        await call('log_message', `[front-end]: ${message}`, 0);
    }
    /**
     * Logs a warning to the plugin's log file and the frontend console.
     * @param message The message to log.
     */
    static async warn(message) {
        await call('log_message', `[front-end]: ${message}`, 1);
    }
    /**
     * Logs an error to the plugin's log file and the frontend console.
     * @param message The message to log.
     */
    static async error(message) {
        await call('log_message', `[front-end]: ${message}`, 2);
    }
    /**
     * Gets the plugin's users dictionary.
     * @returns A promise resolving to the plugin's users dictionary.
     */
    static async getUsersDict() {
        try {
            return await call('get_users_dict');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Sends the active user's steamID to the backend.
     * @returns A promise resolving to the plugin's users dictionary.
     */
    static async setActiveSteamId(userId) {
        try {
            return await call('set_active_user_id', userId);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Removes any legacy settings fields that may be present in the settings file.
     */
    static async removeLegacySettings() {
        try {
            return await call('remove_legacy_settings');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Migrates a legacy user to use the new settings system.
     */
    static async migrateLegacySettings() {
        try {
            return await call('migrate_legacy_settings');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets the plugin's tabs.
     * @returns A promise resolving to the plugin's tabs or null when the tab structure fails validation
     */
    static async getTabs() {
        try {
            const result = await call('get_tabs');
            if (!validateTabStructure(result))
                return null;
            return result;
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets the shared tabs.
     * @returns A promise resolving to the shared tabs or null when the tab structure fails validation
     */
    static async getSharedTabs() {
        try {
            const result = await call('get_shared_tabs');
            if (Object.values(result).some(tabs => !validateTabStructure(tabs)))
                return null;
            return result;
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets the store tags.
     * @returns A promise resolving to the store tags.
     */
    static async getTags() {
        try {
            return await call('get_tags');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets the cached user friends.
     * @returns A promise resolving to the cached user friends.
     */
    static async getFriends() {
        try {
            return await call('get_friends');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets the cached friends games.
     * @returns A promise resolving to the cached friends games.
     */
    static async getFriendsGames() {
        try {
            const results = await call('get_friends_games');
            const adjustedGames = Object.entries(results).map(([id, ownedGames]) => {
                return [parseInt(id), ownedGames];
            });
            return new Map(adjustedGames);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Gets the user's tab profiles.
     * @returns A promise resolving the user's tab profiles.
     */
    static async getTabProfiles() {
        try {
            return await call('get_tab_profiles');
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Sets the plugin's tabs.
     * @param tabs The plugin's tabsDictionary.
     * @returns A promise resolving to whether or not the tabs were successfully set.
     */
    static async setTabs(tabs) {
        //* Verify the config
        if (!validateTabStructure(tabs)) {
            PythonInterop.error(`Tabs were corrupted when trying to set.`);
            PythonInterop.toast('Error', 'Config corrupted, please restart.');
            return;
        }
        try {
            return await call('set_tabs', tabs);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Sets the store tags.
     * @param tags The store tags.
     * @returns A promise resolving to whether or not the tags were successfully set.
     */
    static async setTags(tags) {
        try {
            return await call('set_tags', tags);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Sets the user's friends.
     * @param friends The user's friends.
     * @returns A promise resolving to whether or not the friends were successfully set.
     */
    static async setFriends(friends) {
        try {
            return await call('set_friends', friends);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Sets the user's friends' games.
     * @param friendsGames The user's friend's games.
     * @returns A promise resolving to whether or not the friends' games were successfully set.
     */
    static async setFriendGames(friendsGames) {
        const serializedGames = Object.fromEntries(Array.from(friendsGames.entries()).map(([id, gamesOwned]) => {
            return [id.toString(), gamesOwned];
        }));
        try {
            return await call('set_friends_games', serializedGames);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Sets the user's tab profiles.
     * @param tabProfiles The tab profiles.
     * @returns A promise resolving to whether or not the tab profiles were successfully set.
     */
    static async setTabProfiles(tabProfiles) {
        try {
            return await call('set_tab_profiles', tabProfiles);
        }
        catch (e) {
            return e;
        }
    }
    /**
     * Shows a toast message.
     * @param title The title of the toast.
     * @param message The message of the toast.
     */
    static toast(title, message) {
        setTimeout(() => {
            if (PythonInterop.isDismounted)
                return;
            try {
                toaster.toast({
                    title: title,
                    body: message,
                    duration: 8000,
                });
            }
            catch (e) {
                console.log('Toaster Error', e);
            }
        }, 200);
    }
}
PythonInterop.isDismounted = false;

const sleepManager = DFL.findModuleExport(modExport => {
    if (modExport?.RegisterForNotifyResumeFromSuspend)
        return modExport;
});

const errorToastLimit = 10;
class LogController {
    /**
     * Logs a message to the plugin's log file and the frontend console.
     * @param message The message to log.
     */
    static log(...args) {
        console.log(`%c TabMaster %c INFO %c`, 'background: #ff6d05; color: black;', 'background: #1abc9c; color: black;', 'background: transparent;', ...args);
        PythonInterop.log(args.join(' '));
    }
    /**
     * Logs a warning to the plugin's log file and the frontend console.
     */
    static warn(...args) {
        console.warn(`%c TabMaster %c WARNING %c`, 'background: #ff6d05; color: black;', 'background: #e3c907; color: black;', 'background: transparent;', ...args);
        PythonInterop.warn(args.join(' '));
    }
    /**
     * Logs an error to the plugin's log file and the frontend console.
     */
    static error(...args) {
        console.error(`%c TabMaster %c ERROR %c`, 'background: #ff6d05; color: black;', 'background: #c70808; color: black;', 'background: transparent;', ...args);
        PythonInterop.error(args.join(' '));
    }
    /**
     * Throws a new error and logs it to the plugin's log file.
     */
    static throw(...args) {
        PythonInterop.error(args.join(' '));
        throw new Error([
            `%c TabMaster %c ERROR %c`,
            'background: #ff6d05; color: black;',
            'background: #c70808; color: black;',
            'background: transparent;',
            ...args,
        ].join(' '));
    }
}
/**
 * Error flag to check for showing a problem has occured in the QAM.
 */
LogController.errorFlag = false;
/**
 * Counts of raised error massages
 */
LogController.errorCounts = {};
/**
 * Logs error to backend, frontend, and toasts the error and sets the error flag to show in QAM.
 *
 * intended for patching/ ui errors but may be useful for other cases in the future.
 */
LogController.raiseError = debounce((...args) => {
    const msg = args.join(' ');
    PythonInterop.error(msg);
    LogController.error(...args);
    if (!LogController.errorCounts[msg])
        LogController.errorCounts[msg] = 0;
    if (LogController.errorCounts[msg] <= errorToastLimit)
        PythonInterop.toast('TAB MASTER ERROR', msg);
    LogController.errorCounts[msg]++;
    LogController.errorFlag = true;
}, 5000);

/**
 * Wrapper class for the SteamClient interface.
 */
class SteamController {
    constructor() {
        this.hasLoggedIn = false;
        this.hasLoggedOut = false;
    }
    /**
     * Registers a hook for when the user's login state changes.
     * @param onLogin Function to run on login.
     * @param onLogout Function to run on logout.
     * @param once Whether the hook should run once.
     * @param waitForPasscode Whether the hook should only run once the passcode has been entered.
     * @returns A function to unregister the hook.
     */
    registerForAuthStateChange(onLogin, onLogout, once, waitForPasscode) {
        try {
            let isLoggedIn = null;
            const currentUsername = loginStore.m_strAccountName;
            return SteamClient.User.RegisterForLoginStateChange((username) => {
                if (username === '') {
                    if (isLoggedIn !== false && (once ? !this.hasLoggedOut : true)) {
                        if (onLogout)
                            onLogout(currentUsername);
                    }
                    isLoggedIn = false;
                }
                else {
                    if (isLoggedIn !== true && (once ? !this.hasLoggedIn : true)) {
                        if (onLogin) {
                            if (waitForPasscode && securitystore.IsLockScreenActive()) {
                                waitForCondition(100, 250, () => !securitystore.IsLockScreenActive()).then(() => {
                                    //* basically, wait up to 25 minutes for the user to enter their passcode, and at that point, if they have logged in, initialize regardless.
                                    onLogin(username);
                                });
                            }
                            else {
                                onLogin(username);
                            }
                        }
                    }
                    isLoggedIn = true;
                }
            });
        }
        catch (error) {
            LogController.log(`error with AuthStateChange hook. [DEBUG INFO] error: ${error};`);
            // @ts-ignore
            return () => { };
        }
    }
    /**
     * Waits until the services are initialized.
     * @returns A promise resolving to true if services were initialized on any attempt, or false if all attemps failed.
     */
    async waitForServicesToInitialize() {
        const servicesFound = await waitForCondition(20, 250, () => window.App?.WaitForServicesInitialized != null &&
            !!appAchievementProgressCache.m_achievementProgress);
        if (servicesFound) {
            LogController.log(`Services found.`);
        }
        else {
            LogController.log(`Couldn't find services.`);
        }
        return ((await window.App?.WaitForServicesInitialized?.().then((success) => {
            LogController.log(`Services initialized. Success: ${success}`);
            return success;
        })) ?? false);
    }
    /**
     * Register a function for when the Steamdeck resumes from sleep.
     * @param callback The callback to register.
     * @returns A function that unsubscribes the callback.
     */
    registerForOnResumeFromSuspend(callback) {
        const register = SteamClient.System.RegisterForOnResumeFromSuspend?.bind(SteamClient.System) ??
            sleepManager?.RegisterForNotifyResumeFromSuspend;
        if (!register) {
            LogController.raiseError("Couldn't find resume from suspend registerer");
            return { unregister: () => { } };
        }
        return register(callback);
    }
    /**
     * Gets the localized tags from a list of ids.
     * @param tags The list of tag ids.
     * @return A promise resolving to a list of localized tags.
     */
    async getLocalizedTags(tags) {
        return await SteamClient.Apps.GetStoreTagLocalization(tags);
    }
}

const DestructiveModal = ({ className, ...props }) => {
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement("style", null, `.tab-master-destructive-modal button.${DFL.gamepadDialogClasses.Button}.DialogButton.gpfocus.Primary {
        background: #de3618;
        color: #fff
      }`),
        window.SP_REACT.createElement(DFL.ConfirmModal, { className: 'tab-master-destructive-modal' + (className ? ` ${className}` : ''), ...props })));
};

function showMigrationModal(okCallback, cancelCallback) {
    DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strOKButtonText: 'Transfer', onOK: okCallback, strCancelButtonText: 'Discard', onCancel: async () => {
            showDiscardConfirm(cancelCallback, async () => showMigrationModal(okCallback, cancelCallback));
        }, strTitle: 'TabMaster: Legacy Settings Found' }, "TabMaster now saves settings and tabs for each user of the device. Would you like to transfer this device's previous settings to your account?"));
}
function showDiscardConfirm(okCallback, onCancel) {
    DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { strOKButtonText: 'Confirm', onOK: okCallback, strCancelButtonText: 'Back', onCancel: onCancel, strTitle: 'Are You Sure?' }, "Are you sure you want to discard the previous settings? This can't be undone."));
}
/**
 * Main controller class for the plugin.
 */
class PluginController {
    /**
     * Sets the plugin's serverAPI.
     * @param server The serverAPI to use.
     */
    static setup(tabMasterManager) {
        this.tabMasterManager = tabMasterManager;
        this.steamController = new SteamController();
    }
    /**
     * Sets the plugin to initialize once the user logs in.
     * @returns The unregister function for the login hook.
     */
    static initOnLogin(onMount) {
        return this.steamController.registerForAuthStateChange(async (username) => {
            LogController.log(`User logged in. [DEBUG] username: ${username}.`);
            if (await this.steamController.waitForServicesToInitialize()) {
                await PluginController.init();
                onMount();
            }
            else {
                PythonInterop.toast('Error', 'Failed to initialize, try restarting.');
            }
        }, async (username) => {
            LogController.log(`User logged out. [DEBUG] username: ${username}.`);
        }, true, true);
    }
    /**
     * Initializes the Plugin.
     */
    static async init() {
        LogController.log('PluginController initialized.');
        this.onWakeSub = this.steamController.registerForOnResumeFromSuspend(this.onWakeFromSleep.bind(this));
        // @ts-ignore
        return new Promise(async (resolve, reject) => {
            const hadLegacySettings = await PythonInterop.setActiveSteamId(getCurrentUserId());
            if (hadLegacySettings instanceof Error) {
                LogController.raiseError('TabMaster encountered a problem during initialization process.', `PythonInterop.setActiveSteamId returned error: "${hadLegacySettings.message}"`);
                resolve();
                return;
            }
            LogController.log(hadLegacySettings ? 'Detected Legacy Settings.' : 'No Legacy Settings found.');
            if (hadLegacySettings) {
                showMigrationModal(async () => {
                    LogController.log('Transfering Legacy Settings...');
                    await PythonInterop.migrateLegacySettings();
                    resolve();
                }, async () => {
                    LogController.log('Removing Legacy Settings...');
                    await PythonInterop.removeLegacySettings();
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
    /**
     * Get the ids of all the users friends who own a game.
     * @param appid The id of the game.
     * @return The list of friends.
     */
    static getFriendsWhoOwn(appid) {
        return this.tabMasterManager.getFriendsWhoOwn(appid);
    }
    /**
     * Function to run when resuming from sleep.
     */
    static onWakeFromSleep() {
        this.tabMasterManager.buildTimeBasedFilterTabs();
    }
    /**
     * Function to run when the plugin dismounts.
     */
    static dismount() {
        PythonInterop.dismount();
        if (this.onWakeSub)
            this.onWakeSub.unregister();
        this.tabMasterManager.disposeReactions();
        LogController.log('PluginController dismounted.');
    }
}

const TabMasterContext = SP_REACT.createContext(null);
const useTabMasterContext = () => SP_REACT.useContext(TabMasterContext);
const TabMasterContextProvider = ({ children, tabMasterManager }) => {
    const [publicState, setPublicState] = SP_REACT.useState({
        ...tabMasterManager.getTabs(),
        ...tabMasterManager.getFriendsAndTags(),
    });
    SP_REACT.useEffect(() => {
        function onUpdate() {
            setPublicState({ ...tabMasterManager.getTabs(), ...tabMasterManager.getFriendsAndTags() });
        }
        tabMasterManager.eventBus.addEventListener('stateUpdate', onUpdate);
        return () => {
            tabMasterManager.eventBus.removeEventListener('stateUpdate', onUpdate);
        };
    }, []);
    return (window.SP_REACT.createElement(TabMasterContext.Provider, { value: {
            ...publicState,
            tabMasterManager,
        } }, children));
};

var version$1 = "0.11.0-67f2353";

const microSDeckLibVersion = version$1;
var MicroSDeckInstallState;
(function (MicroSDeckInstallState) {
    MicroSDeckInstallState[MicroSDeckInstallState["NOT_INSTALLED"] = 0] = "NOT_INSTALLED";
    MicroSDeckInstallState[MicroSDeckInstallState["VERSION_TOO_LOW"] = 1] = "VERSION_TOO_LOW";
    MicroSDeckInstallState[MicroSDeckInstallState["VERSION_TOO_HIGH"] = 2] = "VERSION_TOO_HIGH";
    MicroSDeckInstallState[MicroSDeckInstallState["VERSION_UNKOWN"] = 3] = "VERSION_UNKOWN";
    MicroSDeckInstallState[MicroSDeckInstallState["VERSION_COMPATIBLE"] = 4] = "VERSION_COMPATIBLE";
})(MicroSDeckInstallState || (MicroSDeckInstallState = {}));
class MicroSDeckInterop {
    /**
     * Initializes event handlers.
     * @param handlers Event handler callbacks.
     */
    static initEventHandlers(handlers) {
        this.eventHandlers = { ...handlers };
        this.getInstallState();
    }
    /**
     * Adds event listeners to MicroSDeck event bus using the stored handler callbacks.
     */
    static subscribeToEvents() {
        for (let event in this.eventHandlers) {
            if (event)
                window.MicroSDeck.eventBus.addEventListener(event, this.eventHandlers[event]);
        }
    }
    /**
     * Waits some time for MicroSDeck plugin to load
     */
    static async waitForLoad() {
        LogController.log('Checking for installation of MicroSDeck...');
        //MicroSDeck is already loaded
        if (window.MicroSDeck) {
            LogController.log('MicroSDeck is installed');
            return true;
        }
        else {
            //MicroSDeck is in queue to be loaded, wait til it's removed (starts loading)
            while (!!DeckyPluginLoader.pluginReloadQueue.find(plugin => plugin.name === 'MicroSDeck')) {
                await DFL.sleep(200);
            }
            //MicroSDeck has either started loading or is not installed at all, wait a little longer to allow it to load.
            let tries = 0;
            while (!window.MicroSDeck) {
                tries++;
                if (tries > 10) {
                    LogController.log('Could not find MicroSDeck installation');
                    return false; // if MicroSDeck isn't found after number of attempts, give up
                }
                await DFL.sleep(100);
            }
            LogController.log('MicroSDeck is installed');
            return true;
        }
    }
    /**
     * Gets install state of MicroSDeck
     * @param runChangeHandlerIfNewInstance Whether or not the change event handler should be run in the case a new instance in MicroSDeck is detected (only necessary in library patch).
     * @returns MicroSDeckInstallState
     */
    static getInstallState(runChangeHandlerIfNewInstance) {
        if (!window.MicroSDeck) {
            return MicroSDeckInstallState.NOT_INSTALLED;
        }
        else {
            //MicroSDeck has been reinstalled or reloaded
            if (window.MicroSDeck !== this.ref) {
                this.ref = window.MicroSDeck;
                if (runChangeHandlerIfNewInstance)
                    this.eventHandlers.change?.();
                this.subscribeToEvents();
            }
            return this.checkVersion();
        }
    }
    /**
     * Gets whether or not MicroSDeck is installed and usable in TabMaster.
     * @param runChangeHandlerIfNewInstance Whether or not the change event handler should be run in the case a new instance in MicroSDeck is detected (only necessary in library patch).
     * @returns boolean
     */
    static isInstallOk(runChangeHandlerIfNewInstance) {
        return this.getInstallState(runChangeHandlerIfNewInstance) === MicroSDeckInstallState.VERSION_COMPATIBLE;
    }
    /**
     * Compares version of lib TabMaster is using against installed plugin version.
     * @returns MicroSDeckInstallState
     */
    static checkVersion() {
        if (window.MicroSDeck?.Version) {
            const [pluginVerMajor, pluginVerMinor, pluginVerPatch] = window
                .MicroSDeck.Version.split(/[.+-]/, 3)
                .map(str => +str);
            const [libVerMajor, libVerMinor, libVerPatch] = microSDeckLibVersion.split(/[.+-]/, 3).map(str => +str);
            if (isNaN(pluginVerMajor) ||
                isNaN(pluginVerMinor) ||
                isNaN(pluginVerPatch) ||
                isNaN(libVerMajor) ||
                isNaN(libVerMinor) ||
                isNaN(libVerPatch))
                return MicroSDeckInstallState.VERSION_UNKOWN;
            if (pluginVerMajor === 0 && libVerMajor === 0) {
                if (pluginVerMinor > libVerMinor)
                    return MicroSDeckInstallState.VERSION_TOO_HIGH;
                if (pluginVerMinor < libVerMinor)
                    return MicroSDeckInstallState.VERSION_TOO_LOW;
                return MicroSDeckInstallState.VERSION_COMPATIBLE;
            }
            if (pluginVerMajor > libVerMajor)
                return MicroSDeckInstallState.VERSION_TOO_HIGH;
            if (pluginVerMajor < libVerMajor)
                return MicroSDeckInstallState.VERSION_TOO_LOW;
            return MicroSDeckInstallState.VERSION_COMPATIBLE;
        }
        else {
            return MicroSDeckInstallState.VERSION_TOO_LOW; //* version is so old it doesn't have the Version prop.
        }
    }
}
MicroSDeckInterop.noticeHidden = false;

// THIS FILE IS AUTO GENERATED
function BiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"}}]})(props);
}function BiSolidDownArrow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"}}]})(props);
}function BiSolidHide (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"}}]})(props);
}function BiSolidUpArrow (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"}}]})(props);
}

/** Type of indicator to use when CustomButton is focused*/
var CustomButtonFocusMode;
(function (CustomButtonFocusMode) {
    CustomButtonFocusMode[CustomButtonFocusMode["highlight"] = 0] = "highlight";
    CustomButtonFocusMode[CustomButtonFocusMode["ring"] = 1] = "ring";
})(CustomButtonFocusMode || (CustomButtonFocusMode = {}));
/** CSS class names for CustomButton component */
var CustomButtonClasses;
(function (CustomButtonClasses) {
    CustomButtonClasses["buttonContainer"] = "custom-button-container";
    CustomButtonClasses["button"] = "custom-button";
})(CustomButtonClasses || (CustomButtonClasses = {}));
/** A button component with many customizable options */
const CustomButton = ({ audioSFX, noAudio, disabled, focusable, transparent, focusMode, onFocus, onBlur, onClick, style, className, containerStyle, containerClassName, focusClassName, onOKActionDescription, children, ...focusableProps }) => {
    const [focused, setFocused] = SP_REACT.useState(false);
    const focusStyle = focusMode ?? CustomButtonFocusMode.highlight;
    const audioPath = `/sounds/${audioSFX ?? 'deck_ui_default_activation.wav'}`;
    const onClicked = (e) => {
        if (!disabled) {
            !noAudio && playUISound(audioPath);
            onClick?.(e);
        }
    };
    return (window.SP_REACT.createElement(DFL.Focusable
    //@ts-ignore
    , { 
        //@ts-ignore
        onClick: onClicked, className: addClasses$3(CustomButtonClasses.buttonContainer, containerClassName), style: containerStyle, onActivate: (focusable ?? true) ? onClicked : undefined, onFocus: e => {
            setFocused(true);
            onFocus?.(e);
        }, onBlur: e => {
            setFocused(false);
            onBlur?.(e);
        }, noFocusRing: !(focusMode ?? false), onOKActionDescription: disabled ? '' : onOKActionDescription, ...focusableProps },
        window.SP_REACT.createElement(DFL.DialogButton, { className: addClasses$3(CustomButtonClasses.button, className, focusStyle === CustomButtonFocusMode.highlight && focused && 'gpfocus', focused && focusClassName), style: Object.assign(transparent && (focusStyle === CustomButtonFocusMode.ring || !focused)
                ? { background: 'transparent' }
                : {}, style ?? {}), focusable: false, disabled: disabled }, children)));
};
/** Utility function to join strings for CSS class names omitting invalid values */
function addClasses$3(...strings) {
    return strings.filter(string => string).join(' ');
}

// THIS FILE IS AUTO GENERATED
function BsClockHistory (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"}},{"tag":"path","attr":{"d":"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"}},{"tag":"path","attr":{"d":"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"}}]})(props);
}function BsRegex (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 1 1 .707.707Zm9.9-.707a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.314.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707ZM6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-6.5a.5.5 0 0 0-1 0v2.117L8.257 5.57a.5.5 0 0 0-.514.858L9.528 7.5 7.743 8.571a.5.5 0 1 0 .514.858L10 8.383V10.5a.5.5 0 1 0 1 0V8.383l1.743 1.046a.5.5 0 0 0 .514-.858L11.472 7.5l1.785-1.071a.5.5 0 1 0-.514-.858L11 6.617V4.5Z"}}]})(props);
}function BsThreeDots (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(props);
}function BsWindow (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}},{"tag":"path","attr":{"d":"M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"}}]})(props);
}

/** CSS class names for CustomDropdown component */
var CustomDropdownClasses;
(function (CustomDropdownClasses) {
    CustomDropdownClasses["topLevel"] = "custom-dropdown-container";
    CustomDropdownClasses["label"] = "custom-dropdown-label";
    CustomDropdownClasses["selectionChanged"] = "selection-changed";
})(CustomDropdownClasses || (CustomDropdownClasses = {}));
/** A dropdown component with many customizable options */
const CustomDropdown = ({ rgOptions, selectedOption: selectedOptionData, style, labelStyle, labelChangedStyle, containerClassName, labelOverride, strDefaultLabel, labelCenter, menuLabel, noDropdownIcon, customDropdownIcon, focusMode, transparent, onChange, useCustomModal: CustomModal, onMenuOpened, ...buttonProps }) => {
    const icon = customDropdownIcon ??
        (CustomModal ? (window.SP_REACT.createElement(BsThreeDots, { style: { margin: 'auto' } })) : (window.SP_REACT.createElement("svg", { style: { height: '1em', margin: 'auto' }, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 36 36', fill: 'none' },
            window.SP_REACT.createElement("path", { d: 'M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z', fill: 'currentColor' }))));
    const [selected, setSelected] = SP_REACT.useState(rgOptions?.find(option => option.data === selectedOptionData));
    const [changed, setChanged] = SP_REACT.useState(false);
    SP_REACT.useEffect(() => {
        if (changed) {
            setTimeout(() => setChanged(false), 15);
        }
    }, [changed]);
    SP_REACT.useEffect(() => {
        if (selected?.data !== selectedOptionData) {
            setChanged(true);
            setSelected(rgOptions?.find(option => option.data === selectedOptionData));
        }
    }, [selectedOptionData, rgOptions?.length]);
    const onSelect = (option) => {
        setChanged(true);
        setSelected(option);
        onChange?.(option);
    };
    const showDefaultMenu = () => {
        DFL.showContextMenu(window.SP_REACT.createElement(DFL.Menu, { label: menuLabel ?? '' }, rgOptions?.map(option => (window.SP_REACT.createElement(DFL.MenuItem, { selected: option === selected, onClick: () => onSelect(option) }, option.label)))));
        onMenuOpened?.();
    };
    return (window.SP_REACT.createElement(CustomButton, { containerClassName: addClasses$2(CustomDropdownClasses.topLevel, containerClassName), style: { padding: '10px 16px', ...style }, noAudio: true, focusMode: focusMode, transparent: transparent, onClick: () => {
            CustomModal
                ? DFL.showModal(window.SP_REACT.createElement(CustomModal, { onSelectOption: option => onSelect(option), selectedOption: selected?.data, rgOptions: rgOptions }))
                : rgOptions && showDefaultMenu();
        }, ...buttonProps },
        window.SP_REACT.createElement("div", { style: { display: 'flex', overflow: 'hidden' } },
            window.SP_REACT.createElement("div", { style: { overflow: 'hidden', flex: 'auto' } },
                window.SP_REACT.createElement("div", { style: Object.assign({ textAlign: labelCenter ? 'center' : 'left', minHeight: '20px' }, changed ? labelChangedStyle : labelStyle), className: addClasses$2(CustomDropdownClasses.label, changed && CustomDropdownClasses.selectionChanged) }, labelOverride ?? selected?.label ?? strDefaultLabel)),
            !noDropdownIcon && window.SP_REACT.createElement("div", { style: { display: 'flex', marginLeft: '1ch', flex: 'none' } }, icon))));
};
/** Utility function to join strings for CSS class names omitting invalid values */
function addClasses$2(...strings) {
    return strings.filter(string => string).join(' ');
}

const defaultSFX = 'deck_ui_tab_transition_01.wav';
const defaultInvalidSFX = 'deck_ui_bumper_end_02.wav';
const altSFX = 'deck_ui_misc_01.wav';
const altInvalidSFX = 'deck_ui_message_toast.wav';
/** Mode for which elements should have transparency in EnhancedSelector component*/
var EnhancedSelectorTransparencyMode;
(function (EnhancedSelectorTransparencyMode) {
    /** No elements have transparency*/
    EnhancedSelectorTransparencyMode[EnhancedSelectorTransparencyMode["none"] = 0] = "none";
    /** Selection box has transparency, buttons don't*/
    EnhancedSelectorTransparencyMode[EnhancedSelectorTransparencyMode["selection"] = 1] = "selection";
    /** All elements have transparency */
    EnhancedSelectorTransparencyMode[EnhancedSelectorTransparencyMode["all"] = 2] = "all";
    /** Buttons have transparency, selection box doesn't */
    EnhancedSelectorTransparencyMode[EnhancedSelectorTransparencyMode["buttons"] = 3] = "buttons";
})(EnhancedSelectorTransparencyMode || (EnhancedSelectorTransparencyMode = {}));
/** Mode for when to use focus ring vs highlight when focusing an element in EnhancedSelector component */
var EnhancedSelectorFocusRingMode;
(function (EnhancedSelectorFocusRingMode) {
    /** Always use highlight and not ring */
    EnhancedSelectorFocusRingMode[EnhancedSelectorFocusRingMode["never"] = 0] = "never";
    /** Use ring for transparent elements and highlight otherwise */
    EnhancedSelectorFocusRingMode[EnhancedSelectorFocusRingMode["transparentOnly"] = 1] = "transparentOnly";
    /** Always use ring and not highlight */
    EnhancedSelectorFocusRingMode[EnhancedSelectorFocusRingMode["always"] = 2] = "always";
})(EnhancedSelectorFocusRingMode || (EnhancedSelectorFocusRingMode = {}));
/** CSS class names for EnhanceSelector component */
var EnhancedSelectorClasses;
(function (EnhancedSelectorClasses) {
    EnhancedSelectorClasses["topLevel"] = "enhanced-selector";
    EnhancedSelectorClasses["dirIcon"] = "direction-icon";
    EnhancedSelectorClasses["dirButton"] = "direction-button";
    EnhancedSelectorClasses["right"] = "direction-right";
    EnhancedSelectorClasses["left"] = "direction-left";
})(EnhancedSelectorClasses || (EnhancedSelectorClasses = {}));
/** A configurable component that allows to select from a list of options by cycling with buttons or from a dropdown menu. */
const EnhancedSelector = ({ rgOptions, selectedOption: selectedOptionData, onChange, noWrapAround, showDropdownIcon, focusDropdown, transparencyMode, fullWidth, selectionBoxWidth, spacing, buttonWidth, focusRingMode, alternateSFX, sfxMain, sfxInvalid, animate, animationDuration, disabled, ...dropdownProps }) => {
    const noWrap = noWrapAround ?? false;
    const setWidth = selectionBoxWidth !== undefined;
    const transparency = transparencyMode ?? EnhancedSelectorTransparencyMode.none;
    const transparentButtons = transparency === EnhancedSelectorTransparencyMode.buttons ||
        transparency === EnhancedSelectorTransparencyMode.all;
    const transparentSelectionBox = transparency === EnhancedSelectorTransparencyMode.selection ||
        transparency === EnhancedSelectorTransparencyMode.all;
    const ringMode = focusRingMode ?? EnhancedSelectorFocusRingMode.never;
    const mainSfx = (sfxMain ?? alternateSFX) ? altSFX : defaultSFX;
    const invalidSfx = (sfxInvalid ?? alternateSFX) ? altInvalidSFX : defaultInvalidSFX;
    const getFocusRingMode = (transparent) => {
        switch (ringMode) {
            case EnhancedSelectorFocusRingMode.always:
                return CustomButtonFocusMode.ring;
            case EnhancedSelectorFocusRingMode.never:
                return CustomButtonFocusMode.highlight;
            case EnhancedSelectorFocusRingMode.transparentOnly:
                return transparent ? CustomButtonFocusMode.ring : CustomButtonFocusMode.highlight;
        }
    };
    const selectionBoxFocusMode = getFocusRingMode(transparentSelectionBox);
    const buttonFocusMode = getFocusRingMode(transparentButtons);
    const incomingIndex = SP_REACT.useMemo(() => {
        const index = rgOptions.findIndex(option => option.data === selectedOptionData);
        return index !== -1 ? index : 0;
    }, [selectedOptionData, rgOptions.length]);
    const [selectedIndex, setSelecetedIndex] = SP_REACT.useState(incomingIndex);
    const [animateLabelStart, setAnimateLabelStart] = SP_REACT.useState({});
    SP_REACT.useEffect(() => {
        if (selectedIndex !== incomingIndex)
            setSelecetedIndex(incomingIndex);
    }, [selectedOptionData, rgOptions.length]);
    const getSFX = (dir) => noWrap && ((selectedIndex === rgOptions.length - 1 && dir === 1) || (selectedIndex === 0 && dir === -1))
        ? invalidSfx
        : mainSfx;
    const getNewIndex = (current, dir) => {
        const max = rgOptions.length;
        if (dir > 0) {
            let newIndex = (current + 1) % max;
            return newIndex === 0 && noWrap ? max - 1 : newIndex;
        }
        else {
            let newIndex = current - 1;
            return newIndex < 0 ? (!noWrap ? max - 1 : 0) : newIndex;
        }
    };
    const shiftIndex = (dir) => {
        const newIndex = getNewIndex(selectedIndex, dir);
        if (newIndex !== selectedIndex) {
            setSelecetedIndex(newIndex);
            animate && setAnimateLabelStart({ transform: `translate(${100 * dir}%)` });
            onChange?.(rgOptions[newIndex]);
        }
    };
    const onDropdownSelect = (option) => {
        const index = rgOptions.indexOf(option);
        setSelecetedIndex(index);
        animate && setAnimateLabelStart({});
        onChange?.(rgOptions[index]);
    };
    const buttonMargin = spacing ? spacing : '12px';
    const buttonStyle = {
        width: buttonWidth ? buttonWidth : '40px',
        minHeight: '40px',
        minWidth: 'initial',
        padding: 'initial',
    };
    const buttonIconStyle = {
        height: '1.5em',
        width: '1.5em',
        display: 'block',
        margin: 'auto',
    };
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.Focusable, { className: `${EnhancedSelectorClasses.topLevel}`, style: { display: 'flex', justifyContent: 'center' } },
            window.SP_REACT.createElement(CustomButton, { audioSFX: getSFX(-1), onClick: () => shiftIndex(-1), className: addClasses$1(EnhancedSelectorClasses.dirButton, EnhancedSelectorClasses.left), containerStyle: { marginRight: buttonMargin }, transparent: transparentButtons, focusMode: buttonFocusMode, style: buttonStyle, disabled: disabled, focusable: !disabled },
                window.SP_REACT.createElement(BiChevronRight, { style: Object.assign({ transform: 'rotate(180deg)' }, buttonIconStyle), className: EnhancedSelectorClasses.dirIcon })),
            window.SP_REACT.createElement(CustomDropdown, { rgOptions: rgOptions, selectedOption: rgOptions?.[selectedIndex]?.data, focusable: focusDropdown === true && !disabled, onChange: onDropdownSelect, focusMode: selectionBoxFocusMode, transparent: transparentSelectionBox, noDropdownIcon: !showDropdownIcon, containerStyle: fullWidth && !setWidth ? { width: '100%' } : {}, style: setWidth ? { width: selectionBoxWidth, minWidth: selectionBoxWidth } : { minWidth: '100px' }, labelStyle: animate ? { transition: `transform ${animationDuration ?? 300}ms ease-out` } : {}, labelChangedStyle: animateLabelStart, disabled: disabled, ...dropdownProps }),
            window.SP_REACT.createElement(CustomButton, { audioSFX: getSFX(1), onClick: () => shiftIndex(1), className: addClasses$1(EnhancedSelectorClasses.dirButton, EnhancedSelectorClasses.right), containerStyle: { marginLeft: buttonMargin }, transparent: transparentButtons, focusMode: buttonFocusMode, style: buttonStyle, disabled: disabled, focusable: !disabled },
                window.SP_REACT.createElement(BiChevronRight, { style: buttonIconStyle, className: EnhancedSelectorClasses.dirIcon })))));
};
/** Utility function to join strings for CSS class names omitting invalid values */
function addClasses$1(...strings) {
    return strings.filter(string => string).join(' ');
}

/** Whether the date includes day/ month and year, month and year, or year only. */
var DateIncludes;
(function (DateIncludes) {
    DateIncludes[DateIncludes["yearOnly"] = 0] = "yearOnly";
    DateIncludes[DateIncludes["monthYear"] = 1] = "monthYear";
    DateIncludes[DateIncludes["dayMonthYear"] = 2] = "dayMonthYear";
})(DateIncludes || (DateIncludes = {}));
/** CSS class names for DatePicker component */
var DatePickerClasses;
(function (DatePickerClasses) {
    DatePickerClasses["topLevel"] = "date-picker";
})(DatePickerClasses || (DatePickerClasses = {}));
/** A highly configurable button component that pops up a modal to select a date and displays the captured result.  */
const DatePicker = ({ modalType, selectedDate, buttonLabelCenter, buttonIcon, noIcon, buttonStyle, buttonContainerStyle, strDefaultLabel, toLocaleStringOptions, dateIncludes, onChange, ...modalProps }) => {
    const DatePickerModal = modalType === 'pretty' ? PrettyDatePickerModal : SimpleDatePickerModal;
    const include = dateIncludes ?? DateIncludes.dayMonthYear;
    const [mounted, setMounted] = SP_REACT.useState(false);
    SP_REACT.useEffect(() => setMounted(true), []);
    const { day: incomingDay, month: incomingMonth, year: incomingYear } = selectedDate ?? {};
    const [day, setDay] = SP_REACT.useState(include === DateIncludes.dayMonthYear ? (incomingDay ?? 1) : undefined);
    const [month, setMonth] = SP_REACT.useState(include >= DateIncludes.monthYear ? (incomingMonth ?? 1) : undefined);
    const [year, setYear] = SP_REACT.useState(incomingYear);
    const valid = isValidDate(day, month, year);
    SP_REACT.useEffect(() => {
        if (mounted) {
            const { day, month, year } = selectedDate ?? {};
            const valid = selectedDate && isValidDate(day, month, year);
            if (valid) {
                setYear(year);
                setMonth(month);
                setDay(day);
            }
        }
    }, [incomingDay, incomingMonth, incomingYear]);
    const _date = { year: year };
    if (month)
        _date.month = month;
    if (day)
        _date.day = day;
    const date = SP_REACT.useMemo(() => (valid ? _date : undefined), [day, month, year, valid, include]);
    const options = SP_REACT.useMemo(() => valid
        ? [
            {
                label: dateToLabel(year, month, day, toLocaleStringOptions),
                data: date,
            },
        ]
        : undefined, [day, month, year, valid, include]);
    SP_REACT.useEffect(() => {
        if (valid && mounted) {
            const newDate = { ...options[0].data };
            switch (include) {
                case DateIncludes.dayMonthYear:
                    if (!newDate.day)
                        newDate.day = 1;
                    if (!newDate.month)
                        newDate.month = 1;
                    break;
                case DateIncludes.monthYear:
                    if (!newDate.month)
                        newDate.month = 1;
                    delete newDate.day;
                    break;
                case DateIncludes.yearOnly:
                    delete newDate.day;
                    delete newDate.month;
            }
            setYear(newDate.year);
            setMonth(newDate.month);
            setDay(newDate.day);
            onChange?.({
                label: dateToLabel(newDate.year, newDate.month, newDate.day, toLocaleStringOptions),
                data: newDate,
            });
        }
    }, [include]);
    return (window.SP_REACT.createElement(CustomDropdown, { onChange: onChange, selectedOption: date, rgOptions: options, strDefaultLabel: strDefaultLabel ?? 'Select Date...', labelCenter: buttonLabelCenter, customDropdownIcon: buttonIcon ?? window.SP_REACT.createElement(TbCalendarEvent, { style: { margin: 'auto' } }), noDropdownIcon: noIcon ?? false, style: buttonStyle, containerStyle: buttonContainerStyle, containerClassName: DatePickerClasses.topLevel, useCustomModal: ({ onSelectOption, selectedOption, closeModal }) => {
            return (window.SP_REACT.createElement(DatePickerModal, { onSelectDate: date => {
                    onSelectOption(date);
                    setYear(date.data.year);
                    setMonth(date.data.month);
                    setDay(date.data.day);
                }, selectedDate: selectedOption, dateIncludes: include, toLocaleStringOptions: toLocaleStringOptions, closeModal: closeModal, ...modalProps }));
        } }));
};
var DatePickerModalClasses;
(function (DatePickerModalClasses) {
    DatePickerModalClasses["topLevel"] = "date-picker-modal";
    DatePickerModalClasses["title"] = "date-picker-modal-title";
})(DatePickerModalClasses || (DatePickerModalClasses = {}));
/** A visually simple date picker modal that is configurable */
const SimpleDatePickerModal = ({ onSelectDate, selectedDate, toLocaleStringOptions, focusDropdowns, showDropdownIcons, centerSelectorLabels, startYear, endYear, dateIncludes, closeModal, ...selectorProps }) => {
    const thisYear = new Date().getUTCFullYear();
    const { day: incomingDay, month: incomingMonth, year: incomingYear } = selectedDate ?? {};
    const include = dateIncludes ?? DateIncludes.dayMonthYear;
    const [day, setDay] = SP_REACT.useState(include === DateIncludes.dayMonthYear ? (incomingDay ?? 1) : undefined);
    const [month, setMonth] = SP_REACT.useState(include >= DateIncludes.monthYear ? (incomingMonth ?? 1) : undefined);
    const [year, setYear] = SP_REACT.useState(incomingYear ?? thisYear);
    const start = startYear ?? 1970;
    const end = endYear ?? thisYear;
    const dayOptions = SP_REACT.useMemo(() => getDayOptions(), []);
    const monthOptions = SP_REACT.useMemo(() => getMonthOptions(), []);
    const yearOptions = SP_REACT.useMemo(() => getYearOptions(year < start ? year : start, year > end ? year : end), []);
    const onConfirm = () => {
        const label = dateToLabel(year, month, day, toLocaleStringOptions);
        const date = { year: year };
        if (day)
            date.day = day;
        if (month)
            date.month = month;
        onSelectDate?.({ label: label, data: date });
    };
    const daySelector = SP_REACT.useMemo(() => {
        if (!day)
            return;
        const daysInMonth = getDaysInMonth(month, year);
        let _day = day;
        if (day > daysInMonth) {
            _day = daysInMonth;
            setDay(daysInMonth);
        }
        return (window.SP_REACT.createElement(EnhancedSelector, { selectionBoxWidth: `${50 + (showDropdownIcons ? 25 : 0)}px`, onChange: option => setDay(option.data), focusDropdown: focusDropdowns ?? true, showDropdownIcon: showDropdownIcons, labelCenter: centerSelectorLabels ?? true, ...selectorProps, rgOptions: dayOptions.slice(0, daysInMonth), selectedOption: _day }));
    }, [month, year]);
    const monthSelector = SP_REACT.useMemo(() => {
        if (!month)
            return;
        return (window.SP_REACT.createElement(EnhancedSelector, { selectionBoxWidth: `${110 + (showDropdownIcons ? 25 : 0)}px`, onChange: option => setMonth(option.data), focusDropdown: focusDropdowns ?? true, showDropdownIcon: showDropdownIcons, labelCenter: centerSelectorLabels ?? true, ...selectorProps, rgOptions: monthOptions, selectedOption: month }));
    }, []);
    const yearSelector = SP_REACT.useMemo(() => {
        return (window.SP_REACT.createElement(EnhancedSelector, { selectionBoxWidth: `${72 + (showDropdownIcons ? 25 : 0)}px`, onChange: option => setYear(option.data), focusDropdown: focusDropdowns ?? true, showDropdownIcon: showDropdownIcons, labelCenter: centerSelectorLabels ?? true, ...selectorProps, rgOptions: yearOptions, selectedOption: year }));
    }, []);
    const titleStyle = { justifyContent: 'center' };
    const sectionStyle = day ? {} : { flex: '1' };
    const titleClass = addClasses(DFL.quickAccessMenuClasses.PanelSectionTitle, DatePickerModalClasses.title);
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement("style", null, `.${DatePickerModalClasses.topLevel} .DialogHeader { display: none !important; }`),
        window.SP_REACT.createElement(DFL.ConfirmModal, { className: DatePickerModalClasses.topLevel, closeModal: closeModal, onOK: onConfirm },
            window.SP_REACT.createElement(DFL.Focusable, { style: Object.assign({ display: 'flex' }, day ? { justifyContent: 'space-between' } : {}) },
                month && (window.SP_REACT.createElement("div", { style: sectionStyle },
                    window.SP_REACT.createElement("div", { style: titleStyle, className: titleClass }, "Month"),
                    monthSelector)),
                day && (window.SP_REACT.createElement("div", { style: sectionStyle },
                    window.SP_REACT.createElement("div", { style: titleStyle, className: titleClass }, "Day"),
                    daySelector)),
                window.SP_REACT.createElement("div", { style: sectionStyle },
                    window.SP_REACT.createElement("div", { style: titleStyle, className: titleClass }, "Year"),
                    yearSelector)))));
};
const PrettyDatePickerModal = ({}) => {
    return null;
};
const locales = window.LocalizationManager.m_rgLocalesToUse;
function getDayOptions() {
    const dayOptions = [];
    for (let i = 1; i <= 31; i++) {
        dayOptions.push({ label: i, data: i });
    }
    return dayOptions;
}
function getMonthOptions() {
    const monthOptions = [];
    for (let i = 1; i <= 12; i++) {
        monthOptions.push({ label: new Date(2000, i - 1).toLocaleDateString(locales, { month: 'long' }), data: i });
    }
    return monthOptions;
}
function getYearOptions(beginning, end) {
    const yearOptions = [];
    for (let i = beginning; i <= end; i++) {
        yearOptions.push({ label: i, data: i });
    }
    return yearOptions;
}
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
function dateToLabel(year, month, day, formatOptions) {
    const defaultOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    let _options;
    if (formatOptions?.dateStyle) {
        switch (formatOptions?.dateStyle) {
            case 'full':
                _options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long',
                };
                break;
            case 'long':
                _options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                };
                break;
            case 'medium':
                _options = {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                };
                break;
            case 'short':
                _options = {
                    year: '2-digit',
                    month: 'numeric',
                    day: 'numeric',
                };
                break;
            default:
                _options = defaultOptions;
        }
    }
    else {
        _options = formatOptions ?? defaultOptions;
    }
    if (month === undefined) {
        delete _options.month;
    }
    if (day === undefined) {
        delete _options.day;
        delete _options.weekday;
    }
    const date = new Date(year, (month ?? 1) - 1, day ?? 1).toLocaleDateString(locales, _options);
    return date;
}
function isValidDate(day, month, year) {
    if (year === undefined ||
        (day !== undefined && month === undefined) ||
        (month !== undefined && (month < 1 || month > 12)) ||
        (day !== undefined && (day < 1 || day > getDaysInMonth(month, year)))) {
        return false;
    }
    return true;
}
/** Utility function to join strings for CSS class names omitting invalid values */
function addClasses(...strings) {
    return strings.filter(string => string).join(' ');
}

// ? Module that does the rendering of these
// const StoreFeaturesModule = findModule((mod) => {
//   if (!mod) return undefined;
//   if (mod.RY && mod.V5) return mod;
// })
// StoreFeaturesModule.BA //* this links the k list to the corresponding store categories
// StoreFeaturesModule.V5 //* this links store category (type, category) to a string
// found via response from https://api.steampowered.com/IStoreBrowseService/GetStoreCategories/v1/?access_token=redacted&language=english
const STEAM_FEATURES_ID_MAP = {
    '28': {
        categoryid: 28,
        type: 3,
        internal_name: 'Full Controller Support',
        display_name: 'Full controller support',
        image_url: 'public/images/v6/ico/ico_controller.png',
        show_in_search: true,
    },
    '18': {
        categoryid: 18,
        type: 3,
        internal_name: 'Controller enabled',
        display_name: 'Partial Controller Support',
        image_url: 'public/images/v6/ico/ico_partial_controller.png',
        show_in_search: true,
    },
    '2': {
        categoryid: 2,
        type: 1,
        internal_name: 'Single-player',
        display_name: 'Single-player',
        image_url: 'public/images/v6/ico/ico_singlePlayer.png',
        show_in_search: true,
    },
    '1': {
        categoryid: 1,
        type: 1,
        internal_name: 'Multi-player',
        display_name: 'Multi-player',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
        show_in_search: true,
    },
    '20': {
        categoryid: 20,
        type: 1,
        internal_name: 'MMO',
        display_name: 'MMO',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
    },
    '49': {
        categoryid: 49,
        type: 1,
        internal_name: 'PvP',
        display_name: 'PvP',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
        show_in_search: true,
    },
    '36': {
        categoryid: 36,
        type: 1,
        internal_name: 'Online PvP',
        display_name: 'Online PvP',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
        show_in_search: true,
    },
    '47': {
        categoryid: 47,
        type: 1,
        internal_name: 'LAN PvP',
        display_name: 'LAN PvP',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
        show_in_search: true,
    },
    '3': {
        categoryid: 37,
        type: 1,
        internal_name: 'Shared/Split Screen PvP',
        display_name: 'Shared/Split Screen PvP',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
        show_in_search: true,
    },
    '9': {
        categoryid: 9,
        type: 1,
        internal_name: 'Co-op',
        display_name: 'Co-op',
        image_url: 'public/images/v6/ico/ico_coop.png',
        show_in_search: true,
    },
    '38': {
        categoryid: 38,
        type: 1,
        internal_name: 'Online Co-op',
        display_name: 'Online Co-op',
        image_url: 'public/images/v6/ico/ico_coop.png',
        show_in_search: true,
    },
    '48': {
        categoryid: 48,
        type: 1,
        internal_name: 'LAN Co-op',
        display_name: 'LAN Co-op',
        image_url: 'public/images/v6/ico/ico_coop.png',
        show_in_search: true,
    },
    '39': {
        categoryid: 39,
        type: 1,
        internal_name: 'Shared/Split Screen Co-op',
        display_name: 'Shared/Split Screen Co-op',
        image_url: 'public/images/v6/ico/ico_coop.png',
        show_in_search: true,
    },
    '24': {
        categoryid: 24,
        type: 1,
        internal_name: 'Shared/Split Screen',
        display_name: 'Shared/Split Screen',
        image_url: 'public/images/v6/ico/ico_coop.png',
        show_in_search: true,
    },
    '27': {
        categoryid: 27,
        type: 1,
        internal_name: 'Cross-Platform Multiplayer',
        display_name: 'Cross-Platform Multiplayer',
        image_url: 'public/images/v6/ico/ico_multiPlayer.png',
        show_in_search: true,
    },
    '22': {
        categoryid: 22,
        type: 2,
        internal_name: 'Steam Achievements',
        display_name: 'Steam Achievements',
        image_url: 'public/images/v6/ico/ico_achievements.png',
        show_in_search: true,
    },
    '52': {
        categoryid: 52,
        type: 2,
        internal_name: 'Tracked Motion Controller',
        display_name: 'Tracked Controller Support',
        image_url: 'public/images/v6/ico/ico_vr_input_motion.png',
        show_in_search: true,
    },
    '53': {
        categoryid: 53,
        type: 2,
        internal_name: 'VR Supported',
        display_name: 'VR Supported',
        image_url: 'public/images/v6/ico/ico_vr_support.png',
    },
    '54': {
        categoryid: 54,
        type: 2,
        internal_name: 'VR Only',
        display_name: 'VR Only',
        image_url: 'public/images/v6/ico/ico_vr_support.png',
    },
    '29': {
        categoryid: 29,
        type: 2,
        internal_name: 'Steam Trading Cards',
        display_name: 'Steam Trading Cards',
        image_url: 'public/images/v6/ico/ico_cards.png',
        show_in_search: true,
    },
    '31': {
        categoryid: 31,
        type: 2,
        internal_name: 'VR Support',
        display_name: 'VR Support',
        image_url: 'public/images/v6/ico/VRIcon.png',
        show_in_search: true,
    },
    '30': {
        categoryid: 30,
        type: 2,
        internal_name: 'Steam Workshop',
        display_name: 'Steam Workshop',
        image_url: 'public/images/v6/ico/ico_workshop.png',
        show_in_search: true,
    },
    '51': {
        categoryid: 51,
        type: 2,
        internal_name: 'Steam China Workshop',
        display_name: 'Steam Workshop',
        image_url: 'public/images/v6/ico/ico_workshop.png',
        show_in_search: true,
    },
    '40': {
        categoryid: 40,
        type: 2,
        internal_name: 'SteamVR Collectibles',
        display_name: 'SteamVR Collectibles',
        image_url: 'public/images/v6/ico/ico_collectibles.png',
        show_in_search: true,
    },
    '35': {
        categoryid: 35,
        type: 2,
        internal_name: 'In-App Purchases',
        display_name: 'In-App Purchases',
        image_url: 'public/images/v6/ico/ico_cart.png',
    },
    '23': {
        categoryid: 23,
        type: 2,
        internal_name: 'Steam Cloud',
        display_name: 'Steam Cloud',
        image_url: 'public/images/v6/ico/ico_cloud.png',
        show_in_search: true,
    },
    '8': {
        categoryid: 8,
        type: 2,
        internal_name: 'VAC Enabled',
        display_name: 'Valve Anti-Cheat enabled',
        image_url: 'public/images/v6/ico/ico_vac.png',
        show_in_search: true,
    },
    '25': {
        categoryid: 25,
        type: 2,
        internal_name: 'Steam Leaderboards',
        display_name: 'Steam Leaderboards',
        image_url: 'public/images/v6/ico/ico_leaderboards.png',
    },
    '32': {
        categoryid: 32,
        type: 2,
        internal_name: 'Async Game Notifications',
        display_name: 'Steam Turn Notifications',
        image_url: 'public/images/v6/ico/ico_turn_notifications.png',
    },
    '41': {
        categoryid: 41,
        type: 2,
        internal_name: 'Remote Play on Phone',
        display_name: 'Remote Play on Phone',
        image_url: 'public/images/v6/ico/ico_remote_play.png',
        show_in_search: true,
    },
    '42': {
        categoryid: 42,
        type: 2,
        internal_name: 'Remote Play on Tablet',
        display_name: 'Remote Play on Tablet',
        image_url: 'public/images/v6/ico/ico_remote_play.png',
        show_in_search: true,
    },
    '43': {
        categoryid: 43,
        type: 2,
        internal_name: 'Remote Play on TV',
        display_name: 'Remote Play on TV',
        image_url: 'public/images/v6/ico/ico_remote_play.png',
        show_in_search: true,
    },
    '44': {
        categoryid: 44,
        type: 2,
        internal_name: 'Remote Play Together',
        display_name: 'Remote Play Together',
        image_url: 'public/images/v6/ico/ico_remote_play_together.png',
        show_in_search: true,
    },
    '61': {
        categoryid: 61,
        type: 2,
        internal_name: 'HDR',
        display_name: 'HDR available',
        image_url: 'public/images/v6/ico/ico_hdr.png',
        show_in_search: true,
    },
};
// * gotten from looking at the source code for "StoreFeaturesModule.V5".
const STEAM_FEATURES_TO_RENDER = Object.keys(STEAM_FEATURES_ID_MAP).map(key => parseInt(key));

// THIS FILE IS AUTO GENERATED
function FaCheckCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(props);
}function FaEllipsisH (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}}]})(props);
}function FaHdd (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"}}]})(props);
}function FaQuestionCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"}}]})(props);
}function FaSdCard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 160h-48V64h48v96zm80 0h-48V64h48v96zm80 0h-48V64h48v96z"}}]})(props);
}function FaShoppingCart (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}}]})(props);
}function FaTimes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 352 512"},"child":[{"tag":"path","attr":{"d":"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(props);
}function FaTrophy (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"}}]})(props);
}function FaUserFriends (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function IoFilter (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M472 168H40a24 24 0 010-48h432a24 24 0 010 48zm-80 112H120a24 24 0 010-48h272a24 24 0 010 48zm-96 112h-80a24 24 0 010-48h80a24 24 0 010 48z"}}]})(props);
}function IoGameController (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"}}]})(props);
}function IoGrid (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function SiSteam (props) {
  return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"title","attr":{},"child":[]},{"tag":"path","attr":{"d":"M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"}}]})(props);
}function SiSteamdeck (props) {
  return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"title","attr":{},"child":[]},{"tag":"path","attr":{"d":"M8.999 0v4.309c4.242 0 7.694 3.45 7.694 7.691s-3.452 7.691-7.694 7.691V24c6.617 0 12-5.383 12-12s-5.383-12-12-12Zm0 6.011c-3.313 0-6 2.687-5.998 6a5.999 5.999 0 1 0 5.998-6z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function FaSlideshare (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M187.7 153.7c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7s61.7-26 61.7-57.7c0-32-27.7-57.7-61.7-57.7zm143.4 0c-34 0-61.7 25.7-61.7 57.7 0 31.7 27.7 57.7 61.7 57.7 34.3 0 61.7-26 61.7-57.7.1-32-27.4-57.7-61.7-57.7zm156.6 90l-6 4.3V49.7c0-27.4-20.6-49.7-46-49.7H76.6c-25.4 0-46 22.3-46 49.7V248c-2-1.4-4.3-2.9-6.3-4.3-15.1-10.6-25.1 4-16 17.7 18.3 22.6 53.1 50.3 106.3 72C58.3 525.1 252 555.7 248.9 457.5c0-.7.3-56.6.3-96.6 5.1 1.1 9.4 2.3 13.7 3.1 0 39.7.3 92.8.3 93.5-3.1 98.3 190.6 67.7 134.3-124 53.1-21.7 88-49.4 106.3-72 9.1-13.8-.9-28.3-16.1-17.8zm-30.5 19.2c-68.9 37.4-128.3 31.1-160.6 29.7-23.7-.9-32.6 9.1-33.7 24.9-10.3-7.7-18.6-15.5-20.3-17.1-5.1-5.4-13.7-8-27.1-7.7-31.7 1.1-89.7 7.4-157.4-28V72.3c0-34.9 8.9-45.7 40.6-45.7h317.7c30.3 0 40.9 12.9 40.9 45.7v190.6z"}}]})(props);
}function FaSteam (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 496 512"},"child":[{"tag":"path","attr":{"d":"M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"}}]})(props);
}function FaArrowRightToBracket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"}}]})(props);
}function FaArrowUpFromBracket (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"}}]})(props);
}function FaAward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"}}]})(props);
}function FaBan (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"}}]})(props);
}function FaBook (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"}}]})(props);
}function FaBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"}}]})(props);
}function FaCalendarDays (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"}}]})(props);
}function FaCircleCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"}}]})(props);
}function FaCircleExclamation (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"}}]})(props);
}function FaCircleXmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"}}]})(props);
}function FaCloudArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"}}]})(props);
}function FaCompactDisc (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z"}}]})(props);
}function FaFolderPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"}}]})(props);
}function FaFolder (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"}}]})(props);
}function FaListCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"}}]})(props);
}function FaMagnifyingGlass (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"}}]})(props);
}function FaPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"}}]})(props);
}function FaStar (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"}}]})(props);
}function FaTag (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"}}]})(props);
}function FaTags (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"}}]})(props);
}function FaTrash (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"}}]})(props);
}function FaUserPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"}}]})(props);
}function FaUser (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"}}]})(props);
}function FaXmark (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"}}]})(props);
}function FaRegClock (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"}}]})(props);
}function FaRegWindowMaximize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function LuCombine (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"width":"8","height":"8","x":"2","y":"2","rx":"2"}},{"tag":"path","attr":{"d":"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}},{"tag":"path","attr":{"d":"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"}},{"tag":"path","attr":{"d":"M10 18H5c-1.7 0-3-1.3-3-3v-1"}},{"tag":"polyline","attr":{"points":"7 21 10 18 7 15"}},{"tag":"rect","attr":{"width":"8","height":"8","x":"14","y":"14","rx":"2"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function MdNewReleases (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}}]})(props);
}function MdNumbers (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20.5 10l.5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"}}]})(props);
}function MdApps (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}}]})(props);
}

function getSteamOSCompatCategory(app) {
    return (app.steam_hw_compat_category_packed >> 4) & 3 || 0;
}
var SdCardParamType;
(function (SdCardParamType) {
    SdCardParamType[SdCardParamType["INSTALLED"] = 0] = "INSTALLED";
    SdCardParamType[SdCardParamType["ANY"] = 1] = "ANY";
})(SdCardParamType || (SdCardParamType = {}));
/**
 * Define the deafult params for a filter type here
 * Checking and settings defaults in component is unnecessary
 */
const FilterDefaultParams = () => ({
    collection: { id: 'favorite', name: 'Favorites' },
    installed: { installed: true },
    regex: { regex: '' },
    friends: { friends: [], mode: 'and' },
    tags: { tags: [], mode: 'and' },
    whitelist: { games: [] },
    blacklist: { games: [] },
    merge: { filters: [], mode: 'and' },
    platform: { platform: 'steam' },
    'deck compatibility': { category: 3 },
    'steamos compatibility': { category: 2 },
    'review score': { scoreThreshold: 50, condition: 'above', type: 'metacritic' },
    'time played': { timeThreshold: 60, condition: 'above', units: 'minutes' },
    'size on disk': { gbThreshold: 10, condition: 'above' },
    'release date': { date: undefined, condition: 'above' },
    'purchase date': { date: undefined, condition: 'above' },
    'last played': { date: undefined, condition: 'above' },
    'family sharing': { isFamilyShared: true },
    demo: { isDemo: true },
    'coming soon': { isComingSoon: true },
    streamable: { isStreamable: true },
    'steam features': { features: [], mode: 'and' },
    achievements: { threshold: 10, thresholdType: 'percent', condition: 'above' },
    'sd card': { card: SdCardParamType.INSTALLED },
    'install folder': {
        driveName: installFolderStore?.AllInstallFolders?.find(folder => folder.bIsDefaultFolder)?.strDriveName ?? '',
    },
});
/**
 * Dictionary of descriptions for each filter.
 */
const FilterDescriptions = {
    collection: 'Selects apps that are in a certain Steam Collection.',
    installed: 'Selects apps that are installed/uninstalled.',
    regex: 'Selects apps whose titles match a regular expression.',
    friends: 'Selects apps that are also owned by friends.',
    tags: 'Selects apps that have specific community tags.',
    whitelist: 'Selects apps that are added to the list.',
    blacklist: 'Selects apps that are not added to the list.',
    merge: 'Selects apps that pass a subgroup of filters.',
    platform: 'Selects Steam or non-Steam apps.',
    'deck compatibility': 'Selects apps that have a specific Steam Deck compatibilty status.',
    'steamos compatibility': 'Selects apps that have a specific SteamOS compatibilty status.',
    'review score': 'Selects apps based on their metacritic/steam review score.',
    'time played': 'Selects apps based on your play time.',
    'size on disk': 'Selects apps based on their install size.',
    'release date': 'Selects apps based on their release date.',
    'purchase date': 'Selects apps based on when you purchased them.',
    'last played': 'Selects apps based on when they were last played.',
    'family sharing': "Selects apps that are/aren't shared from family members.",
    demo: "Selects apps that are/aren't demos.",
    'coming soon': "Selects apps that are/aren't soon to be released.",
    streamable: "Selects apps that can/can't be streamed from another computer.",
    achievements: 'Selects apps based on their completion percentage.',
    'steam features': 'Selects apps that support specific Steam Features.',
    'sd card': 'Selects apps that are present on the inserted/specific MicroSD Card.',
    'install folder': 'Selects apps that are installed in a specific Steam Install Folder.',
};
/**
 * Dictionary of icons for each filter.
 */
const FilterIcons = {
    collection: IoGrid,
    installed: FaPlay,
    regex: BsRegex,
    friends: FaUserFriends,
    tags: FaTags,
    whitelist: FaCheckCircle,
    blacklist: FaBan,
    merge: LuCombine,
    platform: FaSteam,
    'deck compatibility': SiSteamdeck,
    'steamos compatibility': SiSteam,
    'review score': FaAward,
    'time played': FaRegClock,
    'size on disk': FaHdd,
    'release date': FaCalendarDays,
    'purchase date': FaShoppingCart,
    'last played': BsClockHistory,
    'family sharing': FaUserPlus,
    demo: FaCompactDisc,
    'coming soon': MdNewReleases,
    streamable: FaCloudArrowDown,
    'steam features': FaListCheck,
    achievements: FaTrophy,
    'sd card': FaSdCard,
    'install folder': FaFolder,
};
/**
 * Whether the filter should have an invert option.
 * @param filter The filter to check.
 * @returns True if the filter can be inverted, false if not.
 */
function canBeInverted(filter) {
    switch (filter.type) {
        case 'regex':
        case 'collection':
        case 'friends':
        case 'tags':
        case 'merge':
        case 'deck compatibility':
        case 'steamos compatibility':
        case 'steam features':
        case 'achievements':
        case 'sd card':
        case 'install folder':
            return true;
        case 'platform':
        case 'installed':
        case 'whitelist':
        case 'blacklist':
        case 'review score':
        case 'time played':
        case 'size on disk':
        case 'release date':
        case 'purchase date':
        case 'last played':
        case 'demo':
        case 'coming soon':
        case 'family sharing':
        case 'streamable':
            return false;
    }
}
// * make sure the check is the inversion from before going forward
/**
 * Checks if a filter has valid params.
 * @param filter The filter to check.
 * @returns True if the filter has valid params.
 */
function isValidParams(filter) {
    switch (filter.type) {
        case 'regex':
            return filter.params.regex !== '';
        case 'collection':
            return (filter.params.id !== '' &&
                filter.params.name !== '');
        case 'friends':
            return filter.params.friends.length !== 0;
        case 'tags':
            return filter.params.tags.length !== 0;
        case 'whitelist':
        case 'blacklist':
            return filter.params.games.length !== 0;
        case 'merge':
            return filter.params.filters.length !== 0;
        case 'release date':
        case 'purchase date':
        case 'last played':
            return (filter.params.date !== undefined ||
                filter.params.daysAgo !== undefined);
        case 'steam features':
            return filter.params.features.length !== 0;
        case 'size on disk':
            return filter.params.gbThreshold !== 0;
        case 'installed':
        case 'platform':
        case 'deck compatibility':
        case 'steamos compatibility':
        case 'review score':
        case 'time played':
        case 'demo':
        case 'coming soon':
        case 'family sharing':
        case 'streamable':
        case 'achievements':
        case 'sd card':
        case 'install folder':
            return true;
    }
}
/**
 * Gets the label for a provided deck verified category.
 * @param category The category to get the label for.
 * @returns The label of the provided category.
 */
function compatCategoryToLabel(category) {
    switch (category) {
        case 0:
            return 'Unknown';
        case 1:
            return 'Unsupported';
        case 2:
            return 'Playable';
        case 3:
            return 'Verified';
        default:
            return '';
    }
}
/**
 * Gets the label for a provided SteamOS verified category.
 * @param category The category to get the label for.
 * @returns The label of the provided category.
 */
function steamOSCompatCategoryToLabel(category) {
    switch (category) {
        case 0:
            return 'Unknown';
        case 1:
            return 'Unsupported';
        case 2:
            return 'Compatible';
        default:
            return '';
    }
}
/**
 * Validates a filter to ensure it will function properly.
 * @param filter The filter to validate.
 * @returns Whether or not the filter passed, and if not, any errors it produced.
 */
function validateFilter(filter) {
    if (!Object.keys(filter).includes('inverted'))
        filter.inverted = false;
    switch (filter.type) {
        case 'collection': {
            let passed = true;
            const errors = [];
            const collectionFilter = filter;
            if (collectionFilter.params.collection) {
                collectionFilter.params.id = collectionFilter.params.collection;
                delete collectionFilter.params.collection;
            }
            //* Confirm the collection still exists
            const collectionFromStores = collectionStore.GetCollection(collectionFilter.params.id);
            if (!collectionFromStores) {
                //* try to find collection by name
                if (collectionFilter.params.name) {
                    const updatedIdCollection = collectionStore.userCollections.find(collection => collection.displayName === collectionFilter.params.name);
                    if (updatedIdCollection) {
                        collectionFilter.params.id = updatedIdCollection.id;
                    }
                    else {
                        errors.push(`Collection: ${collectionFilter.params.name} no longer exists`);
                        passed = false;
                    }
                    //* fallback to error on id if user has old config without name
                }
                else {
                    errors.push(`Collection with id: ${collectionFilter.params.id} no longer exists`);
                    passed = false;
                }
            }
            else if (!collectionFilter.params.name) {
                collectionFilter.params.name = collectionFromStores.displayName;
            }
            return {
                passed: passed,
                errors: errors,
            };
        }
        case 'merge': {
            let passed = true;
            const errors = [];
            const mergeErrorEntries = [];
            if (Object.keys(filter.params).includes('includesHidden'))
                //@ts-ignore delete property from old settings version
                delete filter.params.includesHidden;
            const mergeFilter = filter;
            for (let i = 0; i < mergeFilter.params.filters.length; i++) {
                const filter = mergeFilter.params.filters[i];
                const validated = validateFilter(filter);
                if (!validated.passed) {
                    passed = false;
                    errors.push(`Filter ${i + 1} - ${validated.errors.length} ${validated.errors.length === 1 ? 'error' : 'errors'}`);
                    let entry = {
                        filterIdx: i,
                        errors: validated.errors,
                    };
                    if (validated.mergeErrorEntries)
                        entry.mergeErrorEntries = validated.mergeErrorEntries;
                    mergeErrorEntries.push(entry);
                }
            }
            return {
                passed: passed,
                errors: errors,
                mergeErrorEntries: mergeErrorEntries,
            };
        }
        case 'sd card': {
            const cardFilter = filter;
            let passed = true;
            if (MicroSDeckInterop.isInstallOk() &&
                window.MicroSDeck.Enabled &&
                typeof cardFilter.params.card === 'string') {
                const cardsAndGames = window.MicroSDeck.CardsAndGames || [];
                if (!cardsAndGames.find(([card]) => cardFilter.params.card === card.uid)) {
                    passed = false;
                }
            }
            return {
                passed,
                errors: passed ? [] : ["Couldn't find the selected card in the list of known cards."],
            };
        }
        case 'achievements': {
            const achievementsFilter = filter;
            if (achievementsFilter.params.completionPercentage) {
                achievementsFilter.params.threshold = achievementsFilter.params.completionPercentage;
                achievementsFilter.params.thresholdType = 'percent';
                delete achievementsFilter.params.completionPercentage;
            }
            return {
                passed: true,
                errors: [],
            };
        }
        case 'size on disk':
        case 'regex':
        case 'friends':
        case 'tags':
        case 'installed':
        case 'whitelist':
        case 'blacklist':
        case 'platform':
        case 'deck compatibility':
        case 'steamos compatibility':
        case 'review score':
        case 'time played':
        case 'release date':
        case 'purchase date':
        case 'last played':
        case 'demo':
        case 'coming soon':
        case 'family sharing':
        case 'streamable':
        case 'steam features':
        case 'install folder':
        default:
            return {
                passed: true,
                errors: [],
            };
    }
}
/**
 * Utility class for filtering games.
 */
class Filter {
    /**
     * Removes filters that are of unknown types.
     * @param filters Array of tabs filters.
     * @returns
     */
    static removeUnknownTypes(filters) {
        if (!filters)
            return undefined;
        const knownFilterTypes = Object.keys(Filter.filterFunctions);
        return filters.flatMap(filter => {
            if (filter.type === 'merge') {
                const mergeFilter = { ...filter };
                mergeFilter.params.filters = this.removeUnknownTypes(mergeFilter.params.filters);
                return mergeFilter;
            }
            return knownFilterTypes.includes(filter.type) ? filter : [];
        });
    }
    /**
     * Checks if a game passes a given filter.
     * @param filterSettings The filter to run.
     * @param appOverview The app to check
     * @returns True if the app meets the filter criteria.
     */
    static run(filterSettings, appOverview) {
        const shouldInclude = this.filterFunctions[filterSettings.type](filterSettings.params, appOverview);
        return filterSettings.inverted ? !shouldInclude : shouldInclude;
    }
}
Filter.filterFunctions = {
    collection: (params, appOverview) => {
        return collectionStore.GetCollection(params.id).allApps.includes(appOverview);
    },
    installed: (params, appOverview) => {
        return params.installed ? appOverview.installed : !appOverview.installed;
    },
    regex: (params, appOverview) => {
        const regex = new RegExp(params.regex ?? '/^$/');
        return regex.test(appOverview.display_name);
    },
    friends: (params, appOverview) => {
        const friendsWhoOwn = PluginController.getFriendsWhoOwn(appOverview.appid);
        if (params.mode === 'and') {
            return params.friends.every(friend => friendsWhoOwn.includes(friend));
        }
        else {
            return params.friends.some(friend => friendsWhoOwn.includes(friend));
        }
    },
    tags: (params, appOverview) => {
        if (params.mode === 'and') {
            return params.tags.every((tag) => appOverview.store_tag.includes(tag));
        }
        else {
            return params.tags.some((tag) => appOverview.store_tag.includes(tag));
        }
    },
    whitelist: (params, appOverview) => {
        return params.games.includes(appOverview.appid);
    },
    blacklist: (params, appOverview) => {
        return !params.games.includes(appOverview.appid);
    },
    merge: (params, appOverview) => {
        if (params.mode === 'and') {
            return params.filters.every(filterSettings => Filter.run(filterSettings, appOverview));
        }
        else {
            return params.filters.some(filterSettings => Filter.run(filterSettings, appOverview));
        }
    },
    platform: (params, appOverview) => {
        if (params.platform === 'steam') {
            //make sure to exlcude tools: 4 and videos: 2048
            return (appOverview.app_type !== 1073741824 && appOverview.app_type !== 4 && appOverview.app_type !== 2048);
        }
        else if (params.platform === 'nonSteam') {
            return appOverview.app_type === 1073741824;
        }
        return false;
    },
    'deck compatibility': (params, appOverview) => {
        return appOverview.steam_deck_compat_category === params.category;
    },
    'steamos compatibility': (params, appOverview) => {
        return getSteamOSCompatCategory(appOverview) === params.category;
    },
    'review score': (params, appOverview) => {
        const score = params.type === 'metacritic' ? appOverview.metacritic_score : appOverview.review_percentage;
        return params.condition === 'above' ? score >= params.scoreThreshold : score <= params.scoreThreshold;
    },
    'time played': (params, appOverview) => {
        const minutesThreshold = params.units === 'minutes'
            ? params.timeThreshold
            : params.units === 'hours'
                ? params.timeThreshold * 60
                : params.timeThreshold * 1440;
        return params.condition === 'above'
            ? appOverview.minutes_playtime_forever >= minutesThreshold
            : appOverview.minutes_playtime_forever <= minutesThreshold;
    },
    'size on disk': (params, appOverview) => {
        return params.condition === 'above'
            ? Number(appOverview.size_on_disk) / 1024 ** 3 >= params.gbThreshold
            : Number(appOverview.size_on_disk) / 1024 ** 3 <= params.gbThreshold;
    },
    'release date': (params, appOverview) => {
        let releaseTimeMs;
        if (appOverview.rt_original_release_date)
            releaseTimeMs = appOverview.rt_original_release_date * 1000;
        else if (appOverview.rt_steam_release_date !== 0)
            releaseTimeMs = appOverview.rt_steam_release_date * 1000;
        else
            return false;
        //by date case
        if (params.date) {
            const { day, month, year } = params.date;
            if (params.condition === 'above') {
                return releaseTimeMs >= new Date(year, (month ?? 1) - 1, day ?? 1).getTime();
            }
            else {
                const dateIncludes = day === undefined
                    ? month === undefined
                        ? DateIncludes.yearOnly
                        : DateIncludes.monthYear
                    : DateIncludes.dayMonthYear;
                switch (dateIncludes) {
                    case DateIncludes.dayMonthYear:
                        return releaseTimeMs < new Date(year, month - 1, day + 1).getTime();
                    case DateIncludes.monthYear:
                        return releaseTimeMs < new Date(year, month, 1).getTime();
                    case DateIncludes.yearOnly:
                        return releaseTimeMs < new Date(year + 1, 0, 1).getTime();
                }
            }
            //by days ago case
        }
        else {
            const today = new Date();
            return params.condition === 'above'
                ? releaseTimeMs >=
                    new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - params.daysAgo).getTime()
                : releaseTimeMs <
                    new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + 1 - params.daysAgo).getTime();
        }
    },
    'purchase date': (params, appOverview) => {
        let purchaseTimeMs;
        if (appOverview.rt_purchased_time)
            purchaseTimeMs = appOverview.rt_purchased_time * 1000;
        else
            return false;
        //by date case
        if (params.date) {
            const { day, month, year } = params.date;
            if (params.condition === 'above') {
                return purchaseTimeMs >= new Date(year, (month ?? 1) - 1, day ?? 1).getTime();
            }
            else {
                const dateIncludes = day === undefined
                    ? month === undefined
                        ? DateIncludes.yearOnly
                        : DateIncludes.monthYear
                    : DateIncludes.dayMonthYear;
                switch (dateIncludes) {
                    case DateIncludes.dayMonthYear:
                        return purchaseTimeMs < new Date(year, month - 1, day + 1).getTime();
                    case DateIncludes.monthYear:
                        return purchaseTimeMs < new Date(year, month, 1).getTime();
                    case DateIncludes.yearOnly:
                        return purchaseTimeMs < new Date(year + 1, 0, 1).getTime();
                }
            }
            //by days ago case
        }
        else {
            const today = new Date();
            return params.condition === 'above'
                ? purchaseTimeMs >=
                    new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - params.daysAgo).getTime()
                : purchaseTimeMs <
                    new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + 1 - params.daysAgo).getTime();
        }
    },
    'last played': (params, appOverview) => {
        const lastPlayedTimeMs = appOverview.rt_last_time_played * 1000;
        if (lastPlayedTimeMs === 0)
            return false;
        //by date case
        if (params.date) {
            const { day, month, year } = params.date;
            if (params.condition === 'above') {
                return lastPlayedTimeMs >= new Date(year, (month ?? 1) - 1, day ?? 1).getTime();
            }
            else {
                const dateIncludes = day === undefined
                    ? month === undefined
                        ? DateIncludes.yearOnly
                        : DateIncludes.monthYear
                    : DateIncludes.dayMonthYear;
                switch (dateIncludes) {
                    case DateIncludes.dayMonthYear:
                        return lastPlayedTimeMs < new Date(year, month - 1, day + 1).getTime();
                    case DateIncludes.monthYear:
                        return lastPlayedTimeMs < new Date(year, month, 1).getTime();
                    case DateIncludes.yearOnly:
                        return lastPlayedTimeMs < new Date(year + 1, 0, 1).getTime();
                }
            }
            //by days ago case
        }
        else {
            const today = new Date();
            return params.condition === 'above'
                ? lastPlayedTimeMs >=
                    new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - params.daysAgo).getTime()
                : lastPlayedTimeMs <
                    new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + 1 - params.daysAgo).getTime();
        }
    },
    'family sharing': (params, appOverview) => {
        const isInSharedCollection = collectionStore.sharedLibrariesCollections.some(collection => {
            return collection.allApps.includes(appOverview);
        });
        return params.isFamilyShared ? isInSharedCollection : !isInSharedCollection;
    },
    demo: (params, appOverview) => {
        return params.isDemo ? appOverview.app_type === 8 : appOverview.app_type !== 8;
    },
    'coming soon': (params, appOverview) => {
        return params.isComingSoon ? appOverview.display_status === 13 : appOverview.display_status !== 13;
    },
    streamable: (params, appOverview) => {
        const isStreamable = appOverview.per_client_data.some(clientData => clientData.client_name !== 'This machine' && clientData.client_name !== '' && clientData.installed);
        return params.isStreamable ? isStreamable : !isStreamable;
    },
    'steam features': (params, appOverview) => {
        if (params.mode === 'and') {
            return params.features.every((feature) => appOverview.store_category.includes(feature));
        }
        else {
            return params.features.some((feature) => appOverview.store_category.includes(feature));
        }
    },
    achievements: (params, appOverview) => {
        const percentage = appAchievementProgressCache.GetAchievementProgress(appOverview.appid);
        if (params.thresholdType === 'percent') {
            return params.condition === 'above' ? percentage >= params.threshold : percentage <= params.threshold;
        }
        else {
            const entry = appAchievementProgressCache.m_achievementProgress.mapCache.get(appOverview.appid);
            if (entry) {
                const count = entry.unlocked;
                return params.condition === 'above' ? count >= params.threshold : count <= params.threshold;
            }
            else {
                LogController.error(`Unable to get achievements cache for ${appOverview.appid}`);
                return false;
            }
        }
    },
    'sd card': (params, appOverview) => {
        const isOnCard = (card) => !!card[1].find(game => +game.uid == appOverview.appid);
        let card;
        switch (params.card) {
            case SdCardParamType.ANY:
                return window.MicroSDeck?.CardsAndGames?.find(isOnCard);
            case SdCardParamType.INSTALLED:
            case undefined:
                card = window.MicroSDeck?.CurrentCardAndGames;
                break;
            default:
                card = window.MicroSDeck?.CardsAndGames?.find(([card]) => card.uid == params.card);
        }
        if (!card)
            return false;
        return isOnCard(card);
    },
    'install folder': (params, appOverview) => {
        const folder = installFolderStore.AllInstallFolders.find(folder => folder.strDriveName === params.driveName);
        if (!folder || !folder.bIsMounted) {
            return false;
        }
        return folder.vecApps.some(app => app.nAppID === appOverview.appid);
    },
};

/**
 * Gets the localized version of a sorting method
 */
function getESortByLabel(eSortBy) {
    const map = {
        1: '#Library_SortByAlphabetical',
        10: '#Library_SortByFriendsPlaying',
        2: '#Library_SortByPctAchievementsComplete',
        3: '#Library_SortByLastUpdated',
        4: '#Library_SortByHoursPlayed',
        5: '#Library_SortByLastPlayed',
        6: '#Library_SortByReleaseDate',
        7: '#Library_SortByAddedToLibrary',
        8: '#Library_SortBySizeOnDisk',
        9: '#Library_SortByMetacriticScore',
        11: '#Library_SortBySteamReview',
    };
    return LocalizationManager.LocalizeString(map[eSortBy]);
}
/**
 * Creates the array of sorting SingleDropdownOptions
 */
function getSortingMenuItems() {
    return [1, 10, 2, 4, 5, 6, 7, 8, 9, 11].map(e => ({
        data: e,
        label: getESortByLabel(e),
    }));
}
/**
 * Hook to use memoized sort options
 * @param deps Dependency array to determine when to recalculate
 */
const useSortingMenuItems = (deps) => SP_REACT.useMemo(() => [{ label: 'Default', data: -1 }].concat(getSortingMenuItems()), deps);

/**
 * The message modal to display when sort method is being overriden
 */
const SortOverrideMessage = ({ eSortBy, closeModal }) => {
    return (window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: `Sort By: ${getESortByLabel(eSortBy)}`, bAlertDialog: true, closeModal: closeModal }, "The sorting method is overridden by TabMaster for this tab. Set 'Sort apps by' to 'default' in this tabs settings if you would like it to use library sorting."));
};

/**
 * Wrapper for injecting custom tabs.
 */
class CustomTabContainer {
    /**
     * Creates a new CustomTabContainer.
     * @param id The id of the tab.
     * @param title The title of the tab.
     * @param position The position of the tab.
     * @param filterSettingsList The tab's filters.
     * @param filtersMode boolean operator for top level filters
     * @param categoriesToInclude A bit field of which categories should be included in the tab.
     * @param autoHide Whether or not the tab should automatically be hidden if it's collection is empty.
     * @param visibleToOthers Whether or not the tab can be added by other users.
     * @param sortByOverride The eSortBy number to force use for sorting. -1 ignores override.
     */
    constructor(id, title, position, filterSettingsList, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride) {
        this.id = id;
        this.title = title;
        this.position = position;
        this.filters = filterSettingsList;
        this.filtersMode = filtersMode;
        this.categoriesToInclude = categoriesToInclude;
        this.autoHide = autoHide;
        this.visibleToOthers = visibleToOthers;
        this.dependsOnMicroSDeck = false;
        this.sortByOverride = sortByOverride;
        //@ts-ignore
        this.collection = {
            AsDeletableCollection: () => null,
            AsDragDropCollection: () => null,
            AsEditableCollection: () => null,
            GetAppCountWithToolsFilter: appFilter => this.collection.visibleApps.filter(appOverview => appFilter.Matches(appOverview)).length,
            bAllowsDragAndDrop: false,
            bIsDeletable: false,
            bIsDynamic: false,
            bIsEditable: false,
            displayName: this.title,
            id: this.id,
        };
        if (this.position > -1) {
            this.buildCollection();
        }
        this.checkMicroSDeckDependency();
    }
    getActualTab(TabAppGrid, TabContext, sortingProps, footer = {}, collectionAppFilter, isMicroSDeckInstalled) {
        if (!isMicroSDeckInstalled && this.dependsOnMicroSDeck)
            return null;
        if (this.autoHide && this.collection.visibleApps.length === 0)
            return null;
        const showSortOverride = () => DFL.showModal(window.SP_REACT.createElement(SortOverrideMessage, { eSortBy: this.sortByOverride }));
        if (this.sortByOverride !== -1)
            footer.onOptionsButton = showSortOverride;
        const createContent = (inner) => !TabContext ? inner : window.SP_REACT.createElement(TabContext.Provider, { value: { label: this.title } }, inner);
        return {
            title: this.title,
            id: this.id,
            footer: footer,
            content: createContent(window.SP_REACT.createElement(TabAppGrid, { collection: this.collection, setSortBy: sortingProps.setSortBy, eSortBy: this.sortByOverride === -1 ? sortingProps.eSortBy : this.sortByOverride, showSortingContextMenu: this.sortByOverride === -1 ? sortingProps.showSortingContextMenu : showSortOverride })),
            renderTabAddon: () => {
                return (window.SP_REACT.createElement("span", { className: DFL.gamepadTabbedPageClasses.TabCount }, this.collection.GetAppCountWithToolsFilter(collectionAppFilter)));
            },
        };
    }
    /**
     * Builds the list of apps for this tab.
     */
    buildCollection() {
        const { hidden, ...catsToIncludeObj } = getIncludedCategoriesFromBitField(this.categoriesToInclude);
        const visibility = hidden ? 'allApps' : 'visibleApps';
        let listToFilter = [];
        for (const key in catsToIncludeObj) {
            const category = key;
            if (catsToIncludeObj[category])
                listToFilter = listToFilter.concat(collectionStore.appTypeCollectionMap.get(`type-${category}`)[visibility]);
        }
        const appsList = listToFilter.filter(appItem => {
            if (this.filtersMode === 'and') {
                return this.filters.every(filterSettings => Filter.run(filterSettings, appItem));
            }
            else {
                return this.filters.some(filterSettings => Filter.run(filterSettings, appItem));
            }
        });
        this.collection.allApps = appsList;
        this.collection.visibleApps = [...appsList];
        const appMap = new Map();
        appsList.forEach((appItem) => appMap.set(appItem.appid, appItem));
        this.collection.apps = appMap;
    }
    /**
     * Updates the tab with new settings.
     * @param updatedTabInfo The updated tab settings.
     */
    update(updatedTabInfo) {
        this.title = updatedTabInfo.title;
        this.filtersMode = updatedTabInfo.filtersMode;
        this.categoriesToInclude = updatedTabInfo.categoriesToInclude;
        this.filters = updatedTabInfo.filters;
        this.autoHide = updatedTabInfo.autoHide;
        this.visibleToOthers = updatedTabInfo.visibleToOthers;
        this.sortByOverride = updatedTabInfo.sortByOverride;
        this.buildCollection();
        this.checkMicroSDeckDependency();
    }
    /**
     * Checks and sets whether or not the tab has filters that depend on MicroSDeck plugin.
     */
    checkMicroSDeckDependency() {
        this.dependsOnMicroSDeck = this.containsFilterType('sd card');
    }
    /**
     * Checks if the tabs filters contain any specified filter types, including those nested within a merge filter.
     * @param filterTypes The filter types to check for.
     * @returns Boolean
     */
    containsFilterType(...filterTypes) {
        return filtersHaveType(this.filters, ...filterTypes);
    }
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  return unsafeStringify(rnds);
}

const presetDefines = {
    collection: (collectionId, collectionName) => {
        let include = IncludeCategories.games;
        if (collectionId === 'hidden')
            include |= IncludeCategories.music | IncludeCategories.software | IncludeCategories.hidden;
        return {
            filters: [{ type: 'collection', inverted: false, params: { id: collectionId, name: collectionName } }],
            filtersMode: 'and',
            categoriesToInclude: include,
        };
    },
    'all games': () => {
        return {
            filters: [
                { type: 'installed', inverted: false, params: { installed: true } },
                { type: 'installed', inverted: false, params: { installed: false } },
            ],
            filtersMode: 'or',
            categoriesToInclude: IncludeCategories.games,
        };
    },
    installation: (installed) => {
        return {
            filters: [{ type: 'installed', inverted: false, params: { installed: installed } }],
            filtersMode: 'and',
            categoriesToInclude: IncludeCategories.games,
        };
    },
    'deck compatibility': (compat) => {
        return {
            filters: [{ type: 'deck compatibility', inverted: false, params: { category: compat } }],
            filtersMode: 'and',
            categoriesToInclude: IncludeCategories.games,
        };
    },
    platform: (platform) => {
        return {
            filters: [{ type: 'platform', inverted: false, params: { platform: platform } }],
            filtersMode: 'and',
            categoriesToInclude: IncludeCategories.games,
        };
    },
    soundtracks: () => {
        return {
            filters: [
                { type: 'installed', inverted: false, params: { installed: true } },
                { type: 'installed', inverted: false, params: { installed: false } },
            ],
            filtersMode: 'or',
            categoriesToInclude: IncludeCategories.music,
        };
    },
    software: () => {
        return {
            filters: [
                { type: 'installed', inverted: false, params: { installed: true } },
                { type: 'installed', inverted: false, params: { installed: false } },
            ],
            filtersMode: 'or',
            categoriesToInclude: IncludeCategories.software,
        };
    },
    'micro sd card': (card) => {
        return {
            filters: [{ type: 'sd card', inverted: false, params: { card: card } }],
            filtersMode: 'or',
            categoriesToInclude: IncludeCategories.games,
        };
    },
};
const presetKeys = Object.keys(presetDefines);
function getPreset(presetName, ...presetOptions) {
    return presetDefines[presetName](...presetOptions);
}

const TabAccordionIcon = ({ index, tab, open, isDeleted, isPassing }) => {
    if (isDeleted) {
        return (window.SP_REACT.createElement("div", { className: 'check-cont' },
            window.SP_REACT.createElement(FaCircleXmark, { fill: 'red' }),
            "Deleting Tab ",
            index + 1,
            " - ",
            tab.title));
    }
    else {
        return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
            window.SP_REACT.createElement("div", { className: 'check-cont' },
                isPassing ? window.SP_REACT.createElement(FaCircleCheck, { fill: '#00f500' }) : window.SP_REACT.createElement(FaCircleExclamation, { fill: 'yellow' }),
                "Tab ",
                index + 1,
                " - ",
                tab.title),
            window.SP_REACT.createElement(BiSolidDownArrow, { style: {
                    animation: 'transform 0.2s ease-in-out',
                    transform: !open ? 'rotate(90deg)' : '',
                    fontSize: '0.8em',
                    marginLeft: '5px',
                } })));
    }
};
/**
 * Filter Section accordion component
 */
const TabErrorsAccordion = ({ index, isPassing, isDeleted, tab, isOpen, children, }) => {
    const [open, setOpen] = SP_REACT.useState(isOpen);
    function onClick(e) {
        e.stopPropagation();
        playUISound('/sounds/deck_ui_misc_01.wav');
        setOpen(!open);
    }
    return (window.SP_REACT.createElement(DFL.Focusable, { style: { width: '100%', padding: '0' } },
        window.SP_REACT.createElement(DFL.Focusable, { className: 'filter-start-cont tab-errors', focusClassName: 'start-focused', focusWithinClassName: 'start-focused' },
            window.SP_REACT.createElement(DFL.Button, { style: {
                    width: '100%',
                    padding: '5px 20px',
                    margin: '0',
                    background: 'transparent',
                    outline: 'none',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '16px',
                }, onOKButton: onClick, onClick: onClick },
                window.SP_REACT.createElement(TabAccordionIcon, { index: index, tab: tab, open: open, isDeleted: isDeleted, isPassing: isPassing }))),
        open && !isDeleted && children));
};

/**
 * Context for tab name in error panel
 */
const ErrorPanelTabNameContext = SP_REACT.createContext(null);

/**
 * All css styling for TabMaster's fix modals.
 */
const FixModalStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .tab-master-fix-modal-scope .${DFL.gamepadDialogClasses.GamepadDialogContent} .DialogHeader {
        margin-left: 15px;
      }

      .tab-master-fix-modal-scope .${DFL.gamepadDialogClasses.ModalPosition} > .${DFL.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }
      
      /* The button item */
      .tab-master-fix-modal-scope .styled-btn {
        padding: 0 !important;
      }
      .tab-master-fix-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-fix-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-fix-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: 100%;
      }

      /* The button item wrapper */
      .tab-master-fix-modal-scope .filter-entry .${DFL.gamepadDialogClasses.Field} {
        padding: 0;
        margin: 0;
      }
      /* The button item label */
      .tab-master-fix-modal-scope .filter-entry .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      /* The button item */
      .tab-master-fix-modal-scope .filter-entry .${DFL.gamepadDialogClasses.FieldChildrenInner} > button.${DFL.gamepadDialogClasses.Button}.DialogButton {
        padding: 10px;
        min-width: 45px;
      }

      .tab-master-fix-modal-scope .no-sep .${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after,
      .tab-master-fix-modal-scope .no-sep.${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none
      }

      /* Filter section start */
      .tab-master-fix-modal-scope .filter-start-cont {
        width: 114%;
        margin-left: -40px;
        padding: 0;

        font-size: 14px;
      }
      
      /* Focused styles */
      .tab-master-fix-modal-scope .filter-start-cont.start-focused,
      .tab-master-fix-modal-scope .filter-start-cont.tab-errors.start-focused {
        background-color: #3d4450 !important;
      }

      /* merge entries */
      .tab-master-fix-modal-scope .merge-filter-entries .merge-filter-entry {
        margin: 5px;
      }

      /* Error Accordion styles */
      .tab-master-fix-modal-scope .filter-start-cont.tab-errors {
        background-color: #23262e;
      }
      .tab-master-fix-modal-scope .filter-start-cont .check-cont {
        color: #a9a9a9;
      }
      .tab-master-fix-modal-scope .filter-start-cont > button > svg {
        fill: #a9a9a9;
      }
      
      /* Focused styles */
      .tab-master-fix-modal-scope .filter-start-cont.start-focused .check-cont {
        color: #f5f5f5;
      }
      .tab-master-fix-modal-scope .filter-start-cont.start-focused > button > svg {
        fill: #f5f5f5;
      }

      /* merge entries */
      .tab-master-fix-modal-scope .merge-filter-entries .merge-filter-entry {
        margin: 5px;
      }

      .tab-master-fix-modal-scope .check-cont {
        display: flex;
        align-items: center;
      }
    
      .tab-master-fix-modal-scope .check-cont svg {
        margin-left: -6px;
        margin-right: 10px;
      }
    `));
};

/**
 * Modal for fixing a Merge Filter.
 */
const FixMergeFilterModal = ({ mergeParams, mergeErrorEntries, isPassingOuter, setIsPassingOuter, saveMerge, closeModal, tabName, }) => {
    const [filters, setFilters] = SP_REACT.useState(mergeParams.filters);
    const [isPassing, setIsPassing] = SP_REACT.useState(isPassingOuter);
    function onChange(filters, messages) {
        setFilters(filters);
        const passing = messages.every(entry => entry.length === 0);
        setIsPassing(passing);
    }
    function onOkButton() {
        if (isPassing) {
            const newMergeParams = {
                filters: filters.flatMap(filter => filter),
                mode: mergeParams.mode,
            };
            setIsPassingOuter(true);
            saveMerge(newMergeParams);
            closeModal();
        }
        else {
            PythonInterop.toast('Error', 'All errors must be resolved before saving');
        }
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(FixModalStyles, null),
        window.SP_REACT.createElement("div", { className: 'tab-master-fix-modal-scope' },
            window.SP_REACT.createElement(DFL.ConfirmModal, { onOK: () => {
                    DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: onOkButton, strTitle: 'WARNING!' }, "Are you sure you want save these fixes to this merge group? This can't be can't be changed later."));
                }, bOKDisabled: !isPassing, strOKButtonText: 'Save Changes', onCancel: closeModal, strCancelButtonText: 'Discard Changes', strTitle: `Fix Merge Group in Tab ${tabName}` },
                isPassing && window.SP_REACT.createElement("div", null, "All errors have been resolved."),
                window.SP_REACT.createElement(ErrorPanelTabNameContext.Provider, { value: tabName },
                    window.SP_REACT.createElement(ErroredFiltersPanel, { isMergeGroup: true, filters: filters, errorEntries: mergeErrorEntries, onChange: onChange }))))));
};

const TrashButton = ({ onClick }) => {
    return (window.SP_REACT.createElement(DFL.DialogButton, { onClick: onClick, style: { minWidth: '45px', padding: '10px 16px', minHeight: '40px', display: 'flex' } },
        window.SP_REACT.createElement(FaTrash, { size: '.9em', style: { margin: 'auto', flex: 'auto' } })));
};

/**
 * The error options for a collection filter.
 */
const CollectionFilterErrorOptions = ({ isMergeGroup, numFilters, filter, onFilterUpdate, onFilterDelete, }) => {
    const collectionDropdownOptions = collectionStore.userCollections.map((collection) => {
        return { label: collection.displayName, data: collection.id };
    });
    function onChange(data) {
        const updatedFilter = { ...filter };
        updatedFilter.params.id = data.data;
        updatedFilter.params.name = data.label;
        onFilterUpdate(updatedFilter);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Collection', description: window.SP_REACT.createElement("div", { className: 'filter-entry' },
            window.SP_REACT.createElement(DFL.Focusable, { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                } },
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        width: 'calc(100% - 55px)',
                    } },
                    window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: collectionDropdownOptions, selectedOption: filter.params.id, onChange: onChange })),
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        marginLeft: '10px',
                        width: '45px',
                    } },
                    window.SP_REACT.createElement(TrashButton, { onClick: () => {
                            DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: onFilterDelete, strTitle: 'WARNING!' }, 'Are you sure you want to delete this filter? ' +
                                (numFilters === 1
                                    ? `There are no other filters in this ${isMergeGroup ? 'merge group' : 'tab'}. Deleting it will automatically delete the ${isMergeGroup ? 'merge filter' : 'tab'} as well. `
                                    : '') +
                                `This can't be undone.`));
                        } })))) }));
};
/**
 * The error options for a merge filter.
 */
const MergeFilterErrorOptions = ({ isMergeGroup, numFilters, filter, mergeErrorEntries, onFilterUpdate, onFilterDelete, }) => {
    const tabName = SP_REACT.useContext(ErrorPanelTabNameContext);
    const [isPassing, setIsPassing] = SP_REACT.useState(mergeErrorEntries.length === 0);
    const initialParams = {
        filters: [...filter.params.filters],
        mode: filter.params.mode,
    };
    const [mergeParams, setMergeParams] = SP_REACT.useState(initialParams);
    function saveMerge(mergeParams) {
        const updatedFilter = { ...filter };
        updatedFilter.params.filters = mergeParams.filters;
        updatedFilter.params.mode = mergeParams.mode;
        onFilterUpdate(mergeParams.filters.length === 0 ? [] : updatedFilter);
        setMergeParams({ ...mergeParams });
        //* this is necessary so that if the accordian remounts the merge filter it will rememember it's state
        mergeErrorEntries.length = 0;
    }
    function onClick() {
        const modal = { instance: null };
        modal.instance = DFL.showModal(window.SP_REACT.createElement(FixMergeFilterModal, { isPassingOuter: isPassing, setIsPassingOuter: setIsPassing, mergeParams: mergeParams, mergeErrorEntries: mergeErrorEntries, saveMerge: saveMerge, closeModal: () => modal.instance.Close(), tabName: tabName }));
    }
    return (window.SP_REACT.createElement(DFL.Field, { description: window.SP_REACT.createElement("div", { className: 'filter-entry' },
            window.SP_REACT.createElement(DFL.Focusable, { className: 'styled-btn', style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                } },
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        width: 'calc(100% - 55px)',
                    } },
                    window.SP_REACT.createElement(DFL.DialogButton, { onClick: onClick, disabled: isPassing, style: {
                            width: '100%',
                        } }, isPassing ? 'Resolved' : 'Fix Merge Group')),
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        marginLeft: '10px',
                        width: '45px',
                    } },
                    window.SP_REACT.createElement(TrashButton, { onClick: () => {
                            DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: onFilterDelete, strTitle: 'WARNING!' }, 'Are you sure you want to delete this filter? ' +
                                (numFilters === 1
                                    ? `There are no other filters in this ${isMergeGroup ? 'merge group' : 'tab'}. Deleting it will automatically delete the ${isMergeGroup ? 'merge filter' : 'tab'} as well. `
                                    : '') +
                                `This can't be undone.`));
                        } })))) }));
};
/**
 * The error options for an sd card filter.
 */
const SDCardFilterErrorOption = ({ isMergeGroup, numFilters, filter, onFilterUpdate, onFilterDelete, }) => {
    const cardsAndGames = window.MicroSDeck?.CardsAndGames || [];
    const dropdownOptions = [
        {
            label: 'Inserted Card',
            data: SdCardParamType.INSTALLED,
        },
        {
            label: 'Specific Card',
            options: cardsAndGames.map(([card]) => {
                return { label: card.name || card.uid, data: card.uid };
            }),
        },
        {
            label: 'Any Card',
            data: SdCardParamType.ANY,
        },
    ];
    function onChange({ data }) {
        const updatedFilter = { ...filter };
        updatedFilter.params.card = data;
        onFilterUpdate(updatedFilter);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Card', description: window.SP_REACT.createElement("div", { className: 'filter-entry' },
            window.SP_REACT.createElement(DFL.Focusable, { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                } },
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        width: 'calc(100% - 55px)',
                    } },
                    window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: dropdownOptions, selectedOption: filter.params.card ?? SdCardParamType.INSTALLED, onChange: onChange })),
                ' ',
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        marginLeft: '10px',
                        width: '45px',
                    } },
                    window.SP_REACT.createElement(TrashButton, { onClick: () => {
                            DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: onFilterDelete, strTitle: 'WARNING!' }, 'Are you sure you want to delete this filter? ' +
                                (numFilters === 1
                                    ? `There are no other filters in this ${isMergeGroup ? 'merge group' : 'tab'}. Deleting it will automatically delete the ${isMergeGroup ? 'merge filter' : 'tab'} as well. `
                                    : '') +
                                `This can't be undone.`));
                        } })))) }));
};
/**
 * The error options for an individual filter.
 */
const FilterErrorOptions = ({ isMergeGroup, numFilters, filter, mergeErrorEntries, onFilterUpdate, onFilterDelete, }) => {
    if (filter) {
        const filterCopy = { ...filter, params: { ...filter.params } };
        switch (filter.type) {
            case 'collection':
                return (window.SP_REACT.createElement(CollectionFilterErrorOptions, { isMergeGroup: isMergeGroup, numFilters: numFilters, filter: filterCopy, onFilterUpdate: onFilterUpdate, onFilterDelete: onFilterDelete }));
            case 'merge':
                return (window.SP_REACT.createElement(MergeFilterErrorOptions, { isMergeGroup: isMergeGroup, numFilters: numFilters, filter: filterCopy, mergeErrorEntries: mergeErrorEntries, onFilterUpdate: onFilterUpdate, onFilterDelete: onFilterDelete }));
            case 'sd card':
                return (window.SP_REACT.createElement(SDCardFilterErrorOption, { isMergeGroup: isMergeGroup, numFilters: numFilters, filter: filterCopy, onFilterUpdate: onFilterUpdate, onFilterDelete: onFilterDelete }));
            default:
                throw new Error(`FilterErrorOption for ${filter.type} not implemented!`);
        }
    }
    else {
        return window.SP_REACT.createElement(SP_REACT.Fragment, null);
    }
};

/**
 * Renders all errored filters.
 */
const ErroredFiltersPanel = ({ filters, errorEntries, onChange, isMergeGroup, }) => {
    const [errorMessages, setErrorMessages] = SP_REACT.useState(errorEntries.map((entry) => entry.errors));
    function handleFilterUpdate(filterListIdx, errorMessageIdx, filter) {
        const messages = [...errorMessages];
        messages[errorMessageIdx] = [];
        setErrorMessages(messages);
        const newFilters = [...filters];
        newFilters[filterListIdx] = filter;
        onChange(newFilters, messages);
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null, errorEntries.flatMap((erroredFilter, errorIdx) => {
        const filter = filters[erroredFilter.filterIdx];
        return Array.isArray(filter) ? ([]) : (window.SP_REACT.createElement("div", { className: 'filter-error-entry' },
            window.SP_REACT.createElement("div", { style: {
                    color: '#8b929a',
                    fontWeight: '600',
                    marginTop: '10px',
                } }, "Errors"),
            window.SP_REACT.createElement("div", { className: 'filter-error-messages' }, errorMessages[errorIdx].map((errorMsg) => (window.SP_REACT.createElement("div", { className: 'filter-error-msg' }, errorMsg)))),
            window.SP_REACT.createElement("div", { style: {
                    color: '#8b929a',
                    fontWeight: '600',
                    marginTop: '10px',
                } },
                "Filter Type - ",
                filter.type),
            window.SP_REACT.createElement(FilterErrorOptions, { isMergeGroup: isMergeGroup, numFilters: filters.flatMap(filter => filter).length, filter: filter, onFilterUpdate: filter => handleFilterUpdate(erroredFilter.filterIdx, errorIdx, filter), onFilterDelete: () => handleFilterUpdate(erroredFilter.filterIdx, errorIdx, []), mergeErrorEntries: errorEntries[errorIdx].mergeErrorEntries })));
    })));
};

/**
 * Panel for tab that needs changes
 */
const TabErrorsPanel = ({ index, tab, errorEntries, onTabStatusChange }) => {
    const [filters, setFilters] = SP_REACT.useState(tab.filters);
    const [isPassing, setIsPassing] = SP_REACT.useState(false);
    const [isDeleting, setIsDeleting] = SP_REACT.useState(false);
    function onChange(filters, messages) {
        const newTab = { ...tab };
        newTab.filters = [...filters];
        setFilters(filters);
        const passing = messages.every(entry => entry.length === 0);
        setIsPassing(passing);
        setIsDeleting(filters.flatMap(filter => filter).length === 0);
        onTabStatusChange(newTab, passing);
    }
    return (window.SP_REACT.createElement(TabErrorsAccordion, { index: index, tab: tab, isPassing: isPassing, isOpen: true, isDeleted: isDeleting },
        window.SP_REACT.createElement(ErrorPanelTabNameContext.Provider, { value: tab.title },
            window.SP_REACT.createElement(ErroredFiltersPanel, { filters: filters, errorEntries: errorEntries, onChange: onChange })),
        window.SP_REACT.createElement("div", { className: 'styled-btn no-sep' },
            window.SP_REACT.createElement(DFL.ButtonItem, { onClick: () => {
                    DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: () => onChange([], [[]]), strTitle: 'WARNING!' }, "Are you sure you want to delete this Tab? This can't be undone."));
                } }, "Delete Tab"))));
};

/**
 * Modal root for the Changes Needed modal.
 */
const FixTabErrorsModalRoot = ({ closeModal, onConfirm, tabs, erroredFiltersMap, tabMasterManager, }) => {
    return (window.SP_REACT.createElement("div", { className: 'tab-master-fix-modal-scope' },
        window.SP_REACT.createElement(FixModalStyles, null),
        window.SP_REACT.createElement(DFL.ModalRoot, { bAllowFullSize: true, onCancel: () => { } },
            window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
                window.SP_REACT.createElement(FixTabErrorsModal, { onConfirm: onConfirm, closeModal: closeModal, tabs: { ...tabs }, erroredFiltersMap: erroredFiltersMap })))));
};
/**
 * The modal for fixing tabs with filter errors.
 */
const FixTabErrorsModal = ({ onConfirm, closeModal, tabs, erroredFiltersMap }) => {
    const [changedTabs, setChangedTabs] = SP_REACT.useState(Object.fromEntries(Object.entries(tabs).filter(([id]) => erroredFiltersMap.has(id))));
    const [isPassingMap, setIsPassingMap] = SP_REACT.useState(Object.fromEntries(Array.from(erroredFiltersMap.keys(), tabId => [tabId, false])));
    const [canApply, setCanApply] = SP_REACT.useState(false);
    SP_REACT.useEffect(() => {
        setCanApply(Object.values(isPassingMap).every(isPassing => isPassing));
    }, [isPassingMap]);
    function updateTabStatus(tab, isPassing) {
        const passingMap = { ...isPassingMap };
        passingMap[tab.id] = isPassing;
        setIsPassingMap(passingMap);
        const fixedTabs = { ...changedTabs };
        fixedTabs[tab.id] = tab;
        setChangedTabs(fixedTabs);
    }
    function onApply() {
        if (canApply) {
            const updatedTabs = { ...tabs };
            for (const changedTab of Object.values(changedTabs)) {
                changedTab.filters = changedTab.filters.flatMap(filter => filter);
                updatedTabs[changedTab.id] = changedTab;
            }
            onConfirm(updatedTabs);
            closeModal();
        }
        else {
            PythonInterop.toast('Error', 'Please fix all tabs before saving');
        }
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.PanelSection, null,
            window.SP_REACT.createElement("h1", null, "Fixes Needed for One or More Tabs"),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                "TabMaster has found an issue with one or more of your tabs. Please take a moment to review the issue",
                erroredFiltersMap.size > 1 ? 's' : '',
                " below, and correct",
                ' ',
                erroredFiltersMap.size > 1 ? 'them' : 'it',
                ".")),
        window.SP_REACT.createElement(DFL.PanelSection, { title: 'Tabs With Errors' },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null, Object.values(changedTabs).map((tab, idx) => {
                return (window.SP_REACT.createElement(TabErrorsPanel, { index: idx, tab: tab, errorEntries: erroredFiltersMap.get(tab.id), onTabStatusChange: updateTabStatus }));
            }))),
        window.SP_REACT.createElement(DFL.PanelSection, null,
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.DialogButton, { onOKButton: onApply, onOKActionDescription: 'Apply Your Fixes', onClick: onApply, disabled: !canApply }, "Apply Fixes")))));
};

var _a;
/**
 * Hanldes the tab filter validation process.
 */
class TabErrorController {
    /**
     * Actually performs the validation/ error handling, and processes next items in queue when done.
     * @param validationSet List of tabs to be validated.
     * @param tabMasterManager TabMasterManager instance.
     */
    static validateInternal(validationSet, tabMasterManager) {
        this.validationLock = true;
        const tabsMap = tabMasterManager.getTabs().tabsMap;
        const tabsSettings = {};
        validationSet.forEach(item => {
            const tabContainer = tabsMap.get(item.tabId);
            if (tabContainer && tabContainer.filters) {
                if (!Object.keys(tabContainer))
                    tabContainer.visibleToOthers = false;
                tabsSettings[item.tabId] = tabContainer;
            }
        });
        const tabsToFix = this.checkForBrokenFilters(tabsSettings);
        Object.keys(tabsSettings).forEach(tabId => {
            if (!tabsToFix.has(tabId) &&
                validationSet.find(item => tabId === item.tabId && item.rebuildCollectionIfValid)) {
                tabsMap.get(tabId).buildCollection();
            }
        });
        if (tabsToFix.size > 0) {
            LogController.warn(`There were ${tabsToFix.size} tabs that failed validation!`);
            DFL.showModal(window.SP_REACT.createElement(FixTabErrorsModalRoot, { onConfirm: (editedTabSettings) => {
                    for (const tab of Object.values(editedTabSettings)) {
                        if (tabsToFix.has(tab.id)) {
                            if (tab.filters.length === 0) {
                                tabMasterManager.deleteTab(tab.id);
                            }
                            else {
                                tabMasterManager.updateCustomTab(tab.id, tab);
                            }
                        }
                    }
                    this.processQueue(tabMasterManager);
                }, tabs: tabsSettings, erroredFiltersMap: tabsToFix, tabMasterManager: tabMasterManager }));
        }
        else {
            this.processQueue(tabMasterManager);
        }
    }
    /**
     * Checks the provided tabs for broken filters.
     * @param tabsSettings Object of TabSettings/ TabContainer objects whose filters to check.
     * @returns A map of tabIds to broken filters.
     */
    static checkForBrokenFilters(tabsSettings) {
        const tabsToFix = new Map();
        for (const [id, tabSetting] of Object.entries(tabsSettings)) {
            if (tabSetting.filters) {
                const tabErroredFilters = [];
                for (let i = 0; i < tabSetting.filters.length; i++) {
                    const filter = tabSetting.filters[i];
                    const filterValidated = validateFilter(filter);
                    if (!filterValidated) {
                        tabErroredFilters.push({
                            filterIdx: i,
                            errors: [`Filter "${filter.type}" cannot be validated. It has likely been removed.`],
                        });
                    }
                    else if (!filterValidated.passed) {
                        let entry = {
                            filterIdx: i,
                            errors: filterValidated.errors,
                        };
                        if (filterValidated.mergeErrorEntries)
                            entry.mergeErrorEntries = filterValidated.mergeErrorEntries;
                        tabErroredFilters.push(entry);
                    }
                }
                if (tabErroredFilters.length > 0) {
                    tabsToFix.set(id, tabErroredFilters);
                }
            }
        }
        return tabsToFix;
    }
    /**
     * Checks that tab settings have valid filters.
     *
     * This is only meant to be used when loading tabs.
     * @param tabsSettings The tab settings object.
     * @param tabMasterManager TabMasterManager instance.
     * @param finishLoading The finish loading function to execute when validation/ error correction is complete.
     */
    static validateSettingsOnLoad(tabsSettings, tabMasterManager, finishLoading) {
        //Fix old Great On Deck Tab
        if (tabsSettings.DeckGames) {
            tabsSettings.GreatOnDeck = tabsSettings.DeckGames;
            tabsSettings.GreatOnDeck.id = 'GreatOnDeck';
            delete tabsSettings.DeckGames;
        }
        const tabsToFix = this.checkForBrokenFilters(tabsSettings);
        if (tabsToFix.size > 0) {
            LogController.warn(`There were ${tabsToFix.size} tabs that failed validation!`);
            DFL.showModal(window.SP_REACT.createElement(FixTabErrorsModalRoot, { onConfirm: (editedTabSettings) => {
                    const tabsToDelete = [];
                    for (const tab of Object.values(editedTabSettings)) {
                        if (tabsToFix.has(tab.id) && tab.filters.length === 0)
                            tabsToDelete.push(tab.id);
                    }
                    finishLoading(editedTabSettings);
                    tabsToDelete.forEach(tabId => tabMasterManager.deleteTab(tabId));
                    this.processQueue(tabMasterManager);
                }, tabs: tabsSettings, erroredFiltersMap: tabsToFix, tabMasterManager: tabMasterManager }));
        }
        else {
            finishLoading(tabsSettings);
            this.processQueue(tabMasterManager);
        }
    }
    /**
     * Checks that specified tab containers have valid filters.
     *
     * These validations get added to a queue to ensure only one validation/ error correction proccess happens at a time.
     * @param tabIdsToValidate An array of the tab ids to be validated
     * @param tabMasterManager TabMasterManger instance
     * @param rebuildValidTabCollections Whether or not to rebuild the collections of the tabs that pass validation.
     */
    static validateTabs(tabIdsToValidate, tabMasterManager, rebuildValidTabCollections) {
        tabIdsToValidate.forEach(tabToValidate => {
            const alreadyQueuedTab = this.validationQueue.find(queued => tabToValidate === queued.tabId);
            if (alreadyQueuedTab) {
                if (rebuildValidTabCollections)
                    alreadyQueuedTab.rebuildCollectionIfValid = true;
            }
            else {
                this.validationQueue.push({
                    tabId: tabToValidate,
                    rebuildCollectionIfValid: rebuildValidTabCollections,
                });
            }
        });
        if (this.validationLock)
            return;
        this.processQueue(tabMasterManager);
    }
}
_a = TabErrorController;
TabErrorController.validationLock = true;
TabErrorController.validationQueue = [];
/**
 * Processes the next set of tabs in the queue to be validated.
 * @param tabMasterManager TabMasterManager instance.
 */
TabErrorController.processQueue = (tabMasterManager) => {
    const validationSet = _a.validationQueue.splice(0, _a.validationQueue.length);
    if (validationSet.length > 0) {
        _a.validateInternal(validationSet, tabMasterManager);
    }
    else {
        _a.validationLock = false;
    }
};

class TabProfileManager {
    /**
     * Creates a new TabProfileManager.
     * @param tabProfiles The existing tab profiles the current user has.
     */
    constructor(tabProfiles) {
        Object.values(tabProfiles).forEach(tabs => tabs.forEach((tabId, index) => {
            if (tabId === 'DeckGames') {
                tabs[index] = 'GreatOnDeck';
            }
        }));
        this.tabProfiles = tabProfiles;
    }
    /**
     * Writes a tab profile.
     * @param tabProfileName The name of the tab profile to write.
     * @param tabIds The list of ids of the tabs that are included in this profile.
     */
    write(tabProfileName, tabIds) {
        this.tabProfiles[tabProfileName] = tabIds;
        this.save();
    }
    /**
     * Applies a tab profile.
     * @param tabProfileName The name of the tab profile to apply.
     * @param tabMasterManager The plugin manager.
     */
    apply(tabProfileName, tabMasterManager) {
        const { visibleTabsList, hiddenTabsList } = tabMasterManager.getTabs();
        hiddenTabsList.forEach(tabContainer => {
            if (tabContainer.filters && tabContainer.collection.allApps === undefined) {
                tabContainer.buildCollection();
            }
        });
        visibleTabsList.forEach(tabContainer => (tabContainer.position = -1));
        tabMasterManager.reorderTabs(this.tabProfiles[tabProfileName]);
    }
    delete(tabProfileName) {
        delete this.tabProfiles[tabProfileName];
        this.save();
    }
    /**
     * Removes tab from profiles when it has been deleted
     * @param deletedId The tab id that is being deleted
     */
    onDeleteTab(deletedId) {
        Object.values(this.tabProfiles).forEach(tabs => {
            const deletedIndex = tabs.findIndex(tabId => tabId === deletedId);
            if (deletedIndex > -1)
                tabs.splice(deletedIndex, 1);
        });
        this.save();
    }
    /**
     * Saves all changes made to the tab profiles.
     */
    save() {
        PythonInterop.setTabProfiles(this.tabProfiles);
    }
}

const mobxReactionFilter = (modExport) => {
    if (typeof modExport === 'function' &&
        modExport.length === 3 &&
        modExport.toString().includes('fireImmediately') &&
        modExport.toString().includes('requiresObservable')) {
        return modExport;
    }
};
const res = DFL.findModuleExport(mobxReactionFilter);
if (!res)
    LogController.raiseError('Could not find mobx.reaction');
const reaction = (res || (() => { }));

/**
 * Converts a list of filters into a 1D array.
 * @param filters The filters array to flatten.
 * @returns A 1D array of tab filters.
 */
function flattenFilters(filters) {
    const res = [];
    for (const filter of filters) {
        if (filter.type === 'merge') {
            const mergeFilters = flattenFilters(filter.params.filters);
            res.push(...mergeFilters);
        }
        else {
            res.push(filter);
        }
    }
    return res;
}
function isDepreciatedStoreMap(storeTagMap) {
    return storeTagMap.entries !== undefined;
}
/**
 * Class that handles TabMaster's core state.
 */
class TabMasterManager {
    /**
     * Creates a new TabMasterManager.
     */
    constructor() {
        this.visibleTabsList = [];
        this.hiddenTabsList = [];
        this.currentUsersFriends = [];
        this.friendsGameMap = new Map();
        this.allStoreTags = [];
        this.userHasVisibleFavorites = false;
        this.userHasVisibleSoundtracks = false;
        this.userCollectionIds = [];
        this.eventBus = new EventTarget();
        this.microSDeckInstalled = false;
        this.disposers = [];
        this.collectionDisposers = {};
        /**
         * Loads the user's tabs from the backend.
         */
        this.loadTabs = async () => {
            this.initReactions();
            let settings = await PythonInterop.getTabs();
            const profiles = await PythonInterop.getTabProfiles();
            this.asyncLoadOther();
            try {
                if (settings instanceof Error) {
                    throw new Error(`Error loading tab settings \n ${settings.message}`);
                }
                if (profiles instanceof Error) {
                    throw new Error(`Error loading tab profiles \n ${profiles.message}`);
                }
                if (!settings) {
                    PythonInterop.error(`Tabs were corrupted.`);
                    PythonInterop.toast("TabMaster Settings Couldn't Load", 'Tab settings did not follow the expected format and could not load');
                    this.invalidSettingsLoaded.isTrue = true;
                    await this.invalidSettingsLoaded.waitForResetConfirmation;
                    const res = await PythonInterop.backupDefaultDir(AUTO_BACKUP_NAME);
                    if (res !== true)
                        return LogController.raiseError("Couldn't backup settings");
                    settings = {};
                }
                this.tabProfileManager = new TabProfileManager(profiles);
                TabErrorController.validateSettingsOnLoad(Object.keys(settings).length > 0 ? settings : defaultTabsSettings, this, this.finishLoadingTabs.bind(this));
            }
            catch (e) {
                if (e instanceof Error) {
                    LogController.raiseError(`Encountered an error while loading \n ${e.message}`);
                }
            }
        };
        this.hasLoaded = false;
        this.tabsMap = new Map();
        this.invalidSettingsLoaded = {
            isTrue: false,
            waitForResetConfirmation: null,
            confirmReset: async () => { },
        };
        this.invalidSettingsLoaded.waitForResetConfirmation = new Promise(async (resolve) => (this.invalidSettingsLoaded.confirmReset = async () => {
            this.invalidSettingsLoaded.isTrue = false;
            resolve(0);
        }));
    }
    handleMicroSDeckChange() {
        if (!this.hasLoaded)
            return;
        const microSDeckTabs = [];
        for (let tab of this.tabsMap.values()) {
            if (tab.dependsOnMicroSDeck)
                microSDeckTabs.push(tab.id);
        }
        TabErrorController.validateTabs(microSDeckTabs, this, true);
    }
    initReactions() {
        // * subscribe to changes to all games
        this.addDisposer(reaction(() => collectionStore.GetCollection('type-games').allApps, this.rebuildCustomTabsOnCollectionChange.bind(this), { delay: 600 }));
        // * subscribe to when visible favorites change
        this.addDisposer(reaction(() => collectionStore.GetCollection('favorite').allApps.length, this.handleNumOfVisibleFavoritesChanged.bind(this)));
        // *subscribe to when visible soundtracks change
        this.addDisposer(reaction(() => collectionStore.GetCollection('type-music').visibleApps.length, this.handleNumOfVisibleSoundtracksChanged.bind(this)));
        // *subscribe to when installed games change
        this.addDisposer(reaction(() => collectionStore.GetCollection('local-install').allApps.length, this.rebuildCustomTabsOnCollectionChange.bind(this)));
        // * subscribe to game hide or show
        this.addDisposer(reaction(() => collectionStore.GetCollection('hidden').allApps.length, this.rebuildCustomTabsOnCollectionChange.bind(this), { delay: 50 }));
        // * subscribe to non-steam games if they exist
        if (collectionStore.GetCollection('desk-desktop-apps')) {
            this.addDisposer(reaction(() => collectionStore.GetCollection('desk-desktop-apps').allApps.length, this.rebuildCustomTabsOnCollectionChange.bind(this)));
        }
        // * subscribe for when collections are deleted
        this.addDisposer(reaction(() => collectionStore.userCollections.length, this.handleUserCollectionRemove.bind(this)));
        this.handleUserCollectionRemove(collectionStore.userCollections.length); // * this loads the collection ids for the first time.
        // * subscribe to user's friendlist updates
        this.addDisposer(reaction(() => friendStore.allFriends, this.handleFriendsReaction.bind(this), { delay: 50 }));
        // * subscribe to store tag list changes
        this.addDisposer(reaction(() => appStore.m_mapStoreTagLocalization, this.storeTagReaction.bind(this), { delay: 50 }));
        // * subscribe to achievement cache changes
        this.addDisposer(reaction(() => appAchievementProgressCache.m_achievementProgress.mapCache.size, this.handleAchievementsReaction.bind(this)));
        //* subscribe to app close for time played updates
        this.addDisposer(SteamClient.GameSessions.RegisterForAppLifetimeNotifications(e => !e.bRunning && // skip if game is running
            Array.from(this.tabsMap.values()).find(tabContainer => tabContainer.filters &&
                tabContainer.containsFilterType('time played')) && //skip if no time played filters exist
            setTimeout(() => {
                this.rebuildCustomTabs();
                this.update();
            }, 3500)).unregister); //add slight dealy because sometimes app playtime runs 1 min behind
        this.handleFriendsReaction(friendStore.allFriends);
        this.storeTagReaction(appStore.m_mapStoreTagLocalization);
        MicroSDeckInterop.initEventHandlers({ change: this.handleMicroSDeckChange.bind(this) });
        // Register for install folder changes
        this.addDisposer(SteamClient.InstallFolder.RegisterForInstallFolderChanges(() => {
            this.handleInstallFolderChanges();
        }).unregister);
    }
    /**
     * Handles the favorites reaction.
     * @param numOfVisibleFavorites The number of visible favorites.
     */
    handleNumOfVisibleFavoritesChanged(numOfVisibleFavorites) {
        if (!this.hasLoaded)
            return;
        const userHadVisibleFavorites = this.userHasVisibleFavorites;
        if (!userHadVisibleFavorites && numOfVisibleFavorites !== 0) {
            this.userHasVisibleFavorites = true;
            const favoriteTabContainer = { ...defaultTabsSettings.Favorites, position: this.visibleTabsList.length };
            this.visibleTabsList.push(this.addDefaultTabContainer(favoriteTabContainer));
            this.updateAndSave();
        }
        if (userHadVisibleFavorites && numOfVisibleFavorites === 0) {
            this.userHasVisibleFavorites = false;
            this.deleteTab('Favorites');
        }
    }
    /**
     * Handles the soundtrack reaction.
     * @param numOfVisibleSoundtracks The number of visible soundtracks.
     */
    handleNumOfVisibleSoundtracksChanged(numOfVisibleSoundtracks) {
        if (!this.hasLoaded)
            return;
        const userHadVisibleSoundtracks = this.userHasVisibleSoundtracks;
        if (!userHadVisibleSoundtracks && numOfVisibleSoundtracks !== 0) {
            this.userHasVisibleSoundtracks = true;
            const soundtrackTabContainer = { ...defaultTabsSettings.Soundtracks, position: this.visibleTabsList.length };
            this.visibleTabsList.push(this.addDefaultTabContainer(soundtrackTabContainer));
            this.updateAndSave();
        }
        if (userHadVisibleSoundtracks && numOfVisibleSoundtracks === 0) {
            this.userHasVisibleSoundtracks = false;
            this.deleteTab('Soundtracks');
        }
    }
    /**
     * Handles rebuilding tabs when a collection changes.
     */
    rebuildCustomTabsOnCollectionChange() {
        if (!this.hasLoaded)
            return;
        this.rebuildCustomTabs();
    }
    /**
     * Handles rebuilding tabs when a collection changes.
     */
    rebuildCustomTabs() {
        if (!this.hasLoaded)
            return;
        this.visibleTabsList.forEach(tabContainer => {
            if (tabContainer.filters && tabContainer.filters.length !== 0) {
                tabContainer.buildCollection();
            }
        });
    }
    /**
     * Handles when the user deletes one of their collections.
     * @param newLength The new length of the userCollections.
     */
    handleUserCollectionRemove(newLength) {
        const userCollections = collectionStore.userCollections;
        if (newLength < this.userCollectionIds.length && this.hasLoaded) {
            let validateTabs = false;
            const collectionsInUse = Object.keys(this.collectionDisposers);
            const currentUserCollectionIds = userCollections.map(collection => collection.id);
            this.userCollectionIds = this.userCollectionIds.filter(id => {
                const isIncluded = currentUserCollectionIds.includes(id);
                if (!isIncluded && collectionsInUse.includes(id)) {
                    validateTabs = true;
                    this.collectionDisposers[id]();
                    delete this.collectionDisposers[id];
                }
                return isIncluded;
            });
            if (validateTabs)
                TabErrorController.validateTabs(Array.from(this.tabsMap.keys()), this);
        }
        else {
            for (const userCollection of userCollections) {
                if (!this.userCollectionIds.includes(userCollection.id))
                    this.userCollectionIds.push(userCollection.id);
            }
        }
    }
    /**
     * Handles updating state when the store tag localization map changes.
     * @param storeTagLocalizationMap The store tag localization map.
     */
    storeTagReaction(storeTagLocalizationMap) {
        if (storeTagLocalizationMap) {
            if (isDepreciatedStoreMap(storeTagLocalizationMap)) {
                const tagEntriesArray = Array.from(storeTagLocalizationMap.entries());
                this.allStoreTags = tagEntriesArray.map(([_, entry]) => {
                    return {
                        tag: entry.tagid,
                        string: entry.name,
                    };
                });
            }
            else {
                const tagEntriesArray = Object.entries(storeTagLocalizationMap);
                this.allStoreTags = tagEntriesArray.map(([tag, string]) => {
                    return {
                        tag: parseInt(tag),
                        string,
                    };
                });
            }
            PythonInterop.setTags(this.allStoreTags);
        }
        else {
            LogController.error('Failed to get store tags. Both _data and data_ were undefined');
        }
    }
    /**
     * Handles updating state when the user's friends list changes.
     * @param friends An array of the user's friends.
     */
    handleFriendsReaction(friends) {
        // console.log("We reacted to friend store changes!");
        this.currentUsersFriends = friends.map((storeEntry) => {
            const entry = storeEntry;
            const userid = getNonBigIntUserId(entry.m_persona.m_steamid.m_ulSteamID.low, entry.m_persona.m_steamid.m_ulSteamID.high);
            return {
                steamid: userid,
                name: entry.m_strNickname && entry.m_strNickname !== ''
                    ? entry.m_strNickname
                    : entry.m_persona.m_strPlayerName,
            };
        });
        PythonInterop.setFriends(this.currentUsersFriends);
        Promise.all(this.currentUsersFriends.map((friend) => {
            //* pretty sure it returns undefined if friends account is set to private, not sure if we should handle this in the ui
            friendStore.FetchOwnedGames(friend.steamid).then(res => {
                this.friendsGameMap.set(friend.steamid, res ? Array.from(res.setApps) : []);
            });
        })).then(() => {
            PythonInterop.setFriendGames(this.friendsGameMap);
            if (!this.hasLoaded)
                return;
            const listOfBadFriends = new Set();
            const customTabsList = this.visibleTabsList.filter(tabContainer => tabContainer.filters && tabContainer.filters.length !== 0);
            //* splitting these loops up is technically more efficient, otherwise we end up with 3 or 4 nested loops
            customTabsList.forEach((tabContainer) => {
                const friendsFilters = tabContainer.filters.filter((filter) => filter.type === 'friends');
                const friendsIds2D = friendsFilters.map(collectionFilter => collectionFilter.params.friends);
                if (friendsIds2D.length > 0) {
                    //* cheap way to remove duplicates, so we only have to do one loop later
                    const friendsIds = [...new Set(friendsIds2D.flat())];
                    for (const id of friendsIds) {
                        const stillFriends = this.currentUsersFriends.find(friendEntry => friendEntry.steamid === id);
                        if (!stillFriends)
                            listOfBadFriends.add(id);
                    }
                }
            });
            customTabsList.forEach(tabContainer => {
                let shouldRebuildCollection = false;
                const friendsFilters = tabContainer.filters.filter((filter) => filter.type === 'friends');
                //* remove friend's id from filter
                friendsFilters.forEach((friendFilter) => {
                    for (const id of listOfBadFriends) {
                        const badFriendIdx = friendFilter.params.friends.indexOf(id);
                        if (badFriendIdx >= 0) {
                            shouldRebuildCollection = true;
                            friendFilter.params.friends.splice(badFriendIdx, 1);
                        }
                    }
                });
                if (shouldRebuildCollection) {
                    tabContainer.buildCollection();
                }
            });
        });
    }
    /**
     * Handles rebuilding tabs when install folders change.
     */
    handleInstallFolderChanges() {
        this.visibleTabsList.forEach(tabContainer => {
            if (tabContainer.filters) {
                const tab = tabContainer;
                if (tab.containsFilterType('install folder')) {
                    tab.buildCollection();
                }
            }
        });
    }
    /**
     * Handles updating state when the the achievement cache changes.
     * @param _size The size of the achievements map.
     */
    handleAchievementsReaction(_size) {
        this.visibleTabsList.forEach(tabContainer => {
            if (tabContainer.filters) {
                const tab = tabContainer;
                if (tab.containsFilterType('achievements')) {
                    tab.buildCollection();
                }
            }
        });
    }
    /**
     * Checks for tabs with filters that are based on time ago and rebuilds their collections.
     */
    buildTimeBasedFilterTabs() {
        this.visibleTabsList.forEach(tabContainer => {
            if (tabContainer.filters) {
                const tab = tabContainer;
                if (tab.containsFilterType('last played', 'release date')) {
                    if (!tab.containsFilterType('merge')) {
                        //@ts-ignore
                        if (tab.filters.find(filter => filter.params.daysAgo !== undefined)) {
                            tab.buildCollection();
                        }
                    }
                    else {
                        tab.buildCollection();
                    }
                }
            }
        });
    }
    /**
     * Push a callback function to be called on cleanup
     */
    addDisposer(disposer) {
        this.disposers.push(disposer);
    }
    /**
     * Handles cleaning up all reactions.
     */
    disposeReactions() {
        this.disposers.forEach(disposer => disposer());
        for (const disposer of Object.values(this.collectionDisposers)) {
            disposer();
        }
    }
    /**
     * Updates the settings for a custom tab.
     * @param customTabId The id of the custom tab.
     * @param updatedTabSettings The new settings for the tab.
     */
    updateCustomTab(customTabId, updatedTabSettings) {
        this.tabsMap.get(customTabId).update(updatedTabSettings);
        const filters = updatedTabSettings.filters;
        if (filters)
            this.addCollectionReactionsForFilters(flattenFilters(filters));
        this.updateAndSave();
    }
    /**
     * Reorders the tabs.
     * @param orederedTabIds The updated order of tabs.
     */
    reorderTabs(orederedTabIds) {
        for (let i = 0; i < orederedTabIds.length; i++) {
            this.tabsMap.get(orederedTabIds[i]).position = i;
        }
        this.rebuildTabLists();
        this.updateAndSave();
    }
    /**
     * Hides a tab from the library.
     * @param tabId The id of the tab to hide.
     */
    hideTab(tabId) {
        const tabContainer = this.tabsMap.get(tabId);
        this.hiddenTabsList.push(this.visibleTabsList.splice(tabContainer.position, 1)[0]);
        this.visibleTabsList.slice(tabContainer.position).forEach(tabContainer => tabContainer.position--);
        tabContainer.position = -1;
        this.updateAndSave();
    }
    /**
     * Unhides a hidden tab in the library.
     * @param tabId The id of the tab to show.
     */
    showTab(tabId) {
        const tabContainer = this.tabsMap.get(tabId);
        if (tabContainer.position > -1)
            return;
        const hiddenIndex = this.hiddenTabsList.findIndex(hiddenTabContainer => hiddenTabContainer === tabContainer);
        tabContainer.position = this.visibleTabsList.length;
        this.visibleTabsList.push(this.hiddenTabsList.splice(hiddenIndex, 1)[0]);
        if (tabContainer.filters && tabContainer.collection.allApps === undefined) {
            tabContainer.buildCollection();
        }
        this.updateAndSave();
    }
    /**
     * Deletes a tab.
     * @param tabId The id of the tab to delete.
     */
    deleteTab(tabId) {
        const tabContainer = this.tabsMap.get(tabId);
        let tabsArrayToRemoveFrom;
        let updateIndexes = false;
        let index;
        if (tabContainer.position > -1) {
            tabsArrayToRemoveFrom = this.visibleTabsList;
            index = tabContainer.position;
            updateIndexes = true;
        }
        else {
            tabsArrayToRemoveFrom = this.hiddenTabsList;
            index = this.hiddenTabsList.findIndex(hiddenTabContainer => hiddenTabContainer === tabContainer);
        }
        tabsArrayToRemoveFrom.splice(index, 1);
        if (updateIndexes) {
            for (let i = index; i < this.visibleTabsList.length; i++) {
                this.visibleTabsList[i].position--;
            }
        }
        this.tabsMap.delete(tabId);
        this.tabProfileManager?.onDeleteTab(tabId);
        if (!this.tabProfileManager)
            LogController.error('Attempted to delete a tab before TabProfileManager has been initialized.', 'This should not be possible.');
        this.updateAndSave();
    }
    /**
     * Creates a new custom tab.
     * @param title The title of the tab.
     * @param position The position of the tab.
     * @param filterSettingsList The list of filters for the tab.
     * @param filtersMode The logic mode for these filters.
     * @param categoriesToInclude A bit field of which categories should be included in the tab.
     * @param autoHide Whether or not the tab should automatically be hidden if it's collection is empty.
     * @param visibleToOthers Whether or not the tab can be copied by other users.
     * @param sortByOverride The eSortBy number to force use for sorting. -1 ignores override.
     */
    createCustomTab(title, position, filterSettingsList, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride) {
        const id = v4();
        this.addCollectionReactionsForFilters(flattenFilters(filterSettingsList));
        this.visibleTabsList.push(this.addCustomTabContainer(id, title, position, filterSettingsList, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride));
        this.updateAndSave();
    }
    createPresetTab(presetName, tabTitle, ...options) {
        const { filters, filtersMode, categoriesToInclude } = getPreset(presetName, ...options);
        this.createCustomTab(tabTitle, this.visibleTabsList.length, filters, filtersMode, categoriesToInclude, false, false, -1);
    }
    /**
     * Adds a reaction to collection lengths if they are not already registered.
     * @param filters The array of filters to check.
     */
    addCollectionReactionsForFilters(filters) {
        const collectionFilters = filters.filter((filter) => filter.type === 'collection');
        if (collectionFilters.length > 0) {
            for (const collectionFilter of collectionFilters) {
                const collectionId = collectionFilter.params.id;
                if (!this.collectionDisposers[collectionId]) {
                    //* subscribe to user collection updates
                    this.collectionDisposers[collectionId] = reaction(() => collectionStore.GetCollection(collectionId).allApps.length, () => {
                        this.rebuildCustomTabsOnCollectionChange();
                    });
                }
            }
        }
    }
    /**
     * Other async load calls that don't need to be waited for when starting the plugin
     */
    asyncLoadOther() {
        PythonInterop.getTags().then((res) => {
            if (res instanceof Error) {
                LogController.raiseError(`Error loading tags \n ${res.message}`);
            }
            else {
                if (this.allStoreTags.length === 0) {
                    this.allStoreTags = res;
                }
            }
        });
        PythonInterop.getFriends().then((res) => {
            if (res instanceof Error) {
                LogController.raiseError(`Error loading friends \n ${res.message}`);
            }
            else {
                if (this.currentUsersFriends.length === 0) {
                    this.currentUsersFriends = res;
                }
            }
        });
        PythonInterop.getFriendsGames().then((res) => {
            if (res instanceof Error) {
                LogController.raiseError(`Error loading friends games \n ${res.message}`);
            }
            else {
                if (this.friendsGameMap.size === 0) {
                    this.friendsGameMap = res;
                }
            }
        });
    }
    /**
     * Finishes the tab loading process.
     * @param tabsSettings The tabsSettings to finish loading.
     */
    finishLoadingTabs(tabsSettings) {
        const visibleTabContainers = [];
        const hiddenTabContainers = [];
        const existingPositions = [];
        const favoritesCollection = collectionStore.GetCollection('favorite');
        const soundtracksCollection = collectionStore.GetCollection('type-music');
        this.userHasVisibleFavorites = favoritesCollection && favoritesCollection.visibleApps.length > 0;
        this.userHasVisibleSoundtracks = soundtracksCollection && soundtracksCollection.visibleApps.length > 0;
        let favoritesOriginalIndex = null;
        let soundtracksOriginalIndex = null;
        if (tabsSettings.Favorites && !this.userHasVisibleFavorites) {
            favoritesOriginalIndex = tabsSettings.Favorites.position;
            delete tabsSettings['Favorites'];
        }
        if (tabsSettings.Soundtracks && !this.userHasVisibleSoundtracks) {
            soundtracksOriginalIndex = tabsSettings.Soundtracks.position;
            delete tabsSettings['Soundtracks'];
        }
        for (const keyId in tabsSettings) {
            const { id, title, filters: _filters, position, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride, } = tabsSettings[keyId];
            const filters = Filter.removeUnknownTypes(_filters);
            const tabContainer = filters
                ? this.addCustomTabContainer(id, title, position, filters, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride)
                : this.addDefaultTabContainer(tabsSettings[keyId]);
            if (favoritesOriginalIndex !== null &&
                favoritesOriginalIndex > -1 &&
                tabContainer.position > favoritesOriginalIndex) {
                tabContainer.position--;
            }
            if (soundtracksOriginalIndex !== null &&
                soundtracksOriginalIndex > -1 &&
                tabContainer.position > soundtracksOriginalIndex) {
                tabContainer.position--;
            }
            tabContainer.position > -1
                ? visibleTabContainers[tabContainer.position]
                    ? existingPositions.push(tabContainer)
                    : (visibleTabContainers[tabContainer.position] = tabContainer)
                : hiddenTabContainers.push(tabContainer);
            if (filters) {
                const flatFilters = flattenFilters(filters);
                this.addCollectionReactionsForFilters(flatFilters);
            }
        }
        existingPositions.forEach(tabContainer => visibleTabContainers.splice(tabContainer.position, 0, tabContainer));
        this.visibleTabsList = visibleTabContainers.filter(elt => elt);
        this.visibleTabsList.forEach((tabContainer, i) => (tabContainer.position = i));
        this.hiddenTabsList = hiddenTabContainers;
        this.hasLoaded = true;
        this.updateAndSave();
    }
    /**
     * Gets the user's tabs
     * @returns The visibleTabs, hiddenTabs and tabsMap.
     */
    getTabs() {
        return {
            visibleTabsList: this.visibleTabsList,
            hiddenTabsList: this.hiddenTabsList,
            tabsMap: this.tabsMap,
        };
    }
    /**
     * Gets the userFriends and store tags.
     * @returns The tags and userFriends currently in state.
     */
    getFriendsAndTags() {
        return {
            currentUsersFriends: this.currentUsersFriends,
            allStoreTags: this.allStoreTags,
        };
    }
    get hasSettingsLoaded() {
        return this.hasLoaded;
    }
    /**
     * Gets the list of the user's friends who own an app.
     * @param appid The id of the app.
     * @returns A list of ids of friends who own this app.
     */
    getFriendsWhoOwn(appid) {
        return Array.from(this.friendsGameMap.entries())
            .filter(([, ownedGames]) => ownedGames.includes(appid))
            .map(([friendId]) => friendId);
    }
    /**
     * Saves the tabs to the backend.
     */
    saveTabs() {
        LogController.log('Saving Tabs...');
        const allTabsSettings = {};
        this.tabsMap.forEach(tabContainer => {
            const tabSettings = tabContainer.filters
                ? {
                    id: tabContainer.id,
                    title: tabContainer.title,
                    position: tabContainer.position,
                    filters: tabContainer.filters,
                    filtersMode: tabContainer.filtersMode,
                    categoriesToInclude: tabContainer.categoriesToInclude,
                    autoHide: tabContainer.autoHide,
                    visibleToOthers: tabContainer.visibleToOthers,
                    sortByOverride: tabContainer.sortByOverride,
                }
                : tabContainer;
            allTabsSettings[tabContainer.id] = tabSettings;
        });
        PythonInterop.setTabs(allTabsSettings);
    }
    /**
     * Creates a new tab container from the provided tab data.
     * @param tabId The id of the tab.
     * @param title The title of the tab.
     * @param position The position of the tab.
     * @param filterSettingsList The tab's filters.
     * @param categoriesToInclude A bit field of which categories should be included in the tab.
     * @param autoHide Whether or not the tab should automatically be hidden if it's collection is empty.
     * @param visibleToOthers Whether or not the tab can be added by other users.
     * @param sortByOverride The eSortBy number to force use for sorting. -1 ignores override.
     * @returns A tab container for this tab.
     */
    addCustomTabContainer(tabId, title, position, filterSettingsList, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride = -1) {
        const tabContainer = new CustomTabContainer(tabId, title, position, filterSettingsList, filtersMode, categoriesToInclude, autoHide, visibleToOthers, sortByOverride);
        this.tabsMap.set(tabId, tabContainer);
        return tabContainer;
    }
    /**
     * Creates a new tab container for each of the default tabs.
     * @param defaultTabSettings The default tabs.
     * @returns Tab containers for all of the default tabs.
     */
    addDefaultTabContainer(defaultTabSettings) {
        this.tabsMap.set(defaultTabSettings.id, defaultTabSettings);
        return defaultTabSettings;
    }
    /**
     * Rebuilds the library tab list.
     */
    rebuildTabLists() {
        const visibleTabContainers = [];
        const hiddenTabContainers = [];
        this.tabsMap.forEach(tabContainer => {
            tabContainer.position > -1
                ? (visibleTabContainers[tabContainer.position] = tabContainer)
                : hiddenTabContainers.push(tabContainer);
        });
        this.visibleTabsList = visibleTabContainers;
        this.hiddenTabsList = hiddenTabContainers;
    }
    /**
     * Saves tab settings and dispatches event to update context provider
     */
    updateAndSave() {
        this.saveTabs();
        this.update();
    }
    /**
     * Dispatches event to update context provider and rerenders library component.
     */
    update() {
        this.eventBus.dispatchEvent(new Event('stateUpdate'));
        this.rerenderLibrary();
    }
    /**
     * Method that will be used to force library to rerender. Assigned later in the library patch.
     */
    rerenderLibrary() { }
    /**
     * Assigns the callback that will be used to rerender the library.
     * @param handler The callback that will cause the library to rerender.
     */
    registerRerenderLibraryHandler(handler) {
        this.rerenderLibrary = handler;
    }
}

const modalMargin = '16px + 2.8vw';
// New modal background should be "radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%)"
/**
 * All css styling for TabMaster's modals.
 */
const ModalStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .tab-master-modal-scope .${DFL.gamepadDialogClasses.GamepadDialogContent} .DialogHeader {
        margin-left: 15px;
      }

      .tab-master-modal-scope .${DFL.gamepadDialogClasses.ModalPosition} > .${DFL.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }
      
      /* The button item */
      .tab-master-modal-scope .styled-btn {
        padding: 0 !important;
      }
      .tab-master-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: 100%;
      }

      /* The button item wrapper */
      .tab-master-modal-scope .filter-entry .${DFL.gamepadDialogClasses.Field} {
        padding: 0;
        margin: 0;
      }
      /* The button item label */
      .tab-master-modal-scope .filter-entry .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      /* The button item */
      .tab-master-modal-scope .filter-entry .${DFL.gamepadDialogClasses.FieldChildrenInner} > button.${DFL.gamepadDialogClasses.Button}.DialogButton {
        padding: 10px;
        min-width: 45px;
      }
      .tab-master-modal-scope .name-field .${DFL.gamepadDialogClasses.Field} {
        padding-bottom: 16px;
        padding-top: 0px;
      }
      .tab-master-modal-scope .${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        left: 1vw;
        right: 1vw;
      }

      .tab-master-modal-scope .no-sep .${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after,
      .tab-master-modal-scope .no-sep.${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none
      }

      /* Filter section start */
      .tab-master-modal-scope .filter-start-cont {
        margin-left: calc((${modalMargin}) * -1);
        margin-right: calc((${modalMargin}) * -1);
        padding: 0;

        font-size: 14px;
      }
      .tab-master-modal-scope .filter-start-cont .filter-line {
        height: 2px;
        
        background: #23262e;
      }
      .tab-master-modal-scope .filter-start-cont .filter-accordion-arrow,
      .tab-master-modal-scope .filter-start-cont .filter-label {
        margin: 0px 5px;
        color: #343945;
      }
      
      /* Focused styles */
      .tab-master-modal-scope .start-focused {
        background-color: rgba(255, 255, 255, 0.15);
        animation-name: gamepaddialog_ItemFocusAnim-darkGrey_2zfa-;
      }
      .tab-master-modal-scope .highlight-on-focus {
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.45, 0.14, 0.83);
      }
      .tab-master-modal-scope .filter-start-cont.start-focused .filter-line {
        background: #a9a9a9;
      }
      .tab-master-modal-scope .filter-start-cont.start-focused .filter-accordion-arrow,
      .tab-master-modal-scope .filter-start-cont.start-focused .filter-label {
        color: #a9a9a9;
      }

      /* Filter Option styles */
      .tab-master-modal-scope .size-on-disk-row > div:first-child {
        flex-grow: 1;
      }

      .field-item-container .${DFL.gamepadDialogClasses.Field} {
        padding: 10px calc(28px + 1.4vw);
      }

      .field-item-container .${DFL.gamepadDialogClasses.FieldLabel} {
        color: #8b929a;
        font-size: 12px;
      }
    `));
};

/**
 * All css styling for TabMaster's filter selection.
 */
const FilterSelectStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .tab-master-filter-select {
        width: 100%;
        height: auto;
      }

      .tab-master-filter-select .${DFL.gamepadDialogClasses.ModalPosition} > .${DFL.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }

      .tab-master-filter-select .entry-label {
        font-size: 22px;
        text-align: initial;
      }

      .tab-master-filter-select .entry-disabled {
        color: #92939B;
        background-color: #20222996;
      }

      .tab-master-filter-select .entry-desc {
        font-size: 16px;
        text-align: initial;
      }
    `));
};

const FilterSelectModal = ({ rgOptions, selectedOption, onSelectOption, closeModal }) => {
    const [focusable, setFocusable] = SP_REACT.useState(false); //this is to briefly (on modal mount) disable focus on all selections except last selected so it is remebered
    SP_REACT.useEffect(() => {
        setTimeout(() => setFocusable(true), 10);
    }, []);
    function handleSelect(option) {
        onSelectOption(option);
        closeModal();
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(FilterSelectStyles, null),
        window.SP_REACT.createElement("div", { className: `tab-master-filter-select` },
            window.SP_REACT.createElement(DFL.ModalRoot, { onCancel: closeModal, onEscKeypress: closeModal },
                window.SP_REACT.createElement("h1", { style: {
                        marginBlockEnd: '10px',
                        marginBlockStart: '0px',
                        overflowX: 'hidden',
                        fontSize: '1.5em',
                        whiteSpace: 'nowrap',
                    } }, "Change Filter Type"),
                window.SP_REACT.createElement("div", { className: DFL.mainMenuAppRunningClasses.OverlayAchievements }, rgOptions?.map(option => (window.SP_REACT.createElement(FilterSelectElement, { filterType: option.data, onClick: () => handleSelect(option), focusable: focusable || selectedOption === option.data }))))))));
};
/**
 * Individual Filter in the filter selection Modal
 */
const FilterSelectElement = ({ filterType, focusable, onClick }) => {
    let disabled = false;
    let requiredMicroSDeckVer = '';
    if (filterType === 'sd card') {
        disabled = !MicroSDeckInterop.isInstallOk();
        const [major, minor, patch] = microSDeckLibVersion.split(/[.+-]/, 3);
        if (+major > 0)
            requiredMicroSDeckVer = major + '.x.x';
        if (+major === 0)
            requiredMicroSDeckVer = `0.${minor}.${patch}`;
    }
    const canFocus = focusable && !disabled;
    return (window.SP_REACT.createElement(DFL.Focusable, { focusWithinClassName: 'gpfocuswithin', style: { width: '100%', margin: 0, marginBottom: '10px', padding: 0 }, onActivate: canFocus ? onClick : undefined, onClick: canFocus ? onClick : undefined },
        window.SP_REACT.createElement("div", { className: `${DFL.achievementClasses.AchievementListItemBase} ${disabled && 'entry-disabled'}`, style: { display: 'flex', flexDirection: 'column', padding: '0.5em', height: '60px' } },
            window.SP_REACT.createElement("div", { className: 'entry-label', style: { display: 'flex', alignItems: 'baseline' } },
                window.SP_REACT.createElement("div", { style: { marginRight: '7px' } }, SP_REACT.createElement(FilterIcons[filterType], { size: '.8em' })),
                window.SP_REACT.createElement("div", null, capitalizeEachWord(filterType)),
                filterType === 'sd card' && (window.SP_REACT.createElement("small", { style: { fontSize: '0.5em' } }, `requires MicroSDeck ${requiredMicroSDeckVer}`))),
            window.SP_REACT.createElement("div", { className: 'entry-desc' }, FilterDescriptions[filterType]))));
};
/**
 * Component for handling filter selection.
 */
const FilterSelect = ({ selectedOption, onChange }) => {
    const filterTypeOptions = Object.keys(FilterDefaultParams()).map(filterType => ({
        label: capitalizeEachWord(filterType),
        data: filterType,
    }));
    return (window.SP_REACT.createElement(CustomDropdown, { useCustomModal: FilterSelectModal, customDropdownIcon: window.SP_REACT.createElement(IoFilter, { style: { margin: 'auto', height: '.9em' } }), onChange: option => option.data !== selectedOption && onChange(option.data), selectedOption: selectedOption, rgOptions: filterTypeOptions }));
};

/**
 * An individual filter for a tab.
 */
const FilterEntry = ({ index, filter, containingGroupFilters, setContainingGroupFilters, onFilterDelete, shouldFocus, }) => {
    const invertOptions = [
        {
            label: 'Default',
            data: false,
        },
        {
            label: 'Invert',
            data: true,
        },
    ];
    const [isInverted, setIsInverted] = SP_REACT.useState(filter.inverted);
    function onChange(selectedType) {
        const updatedFilter = {
            type: selectedType,
            inverted: false,
            params: { ...FilterDefaultParams()[selectedType] },
        };
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    function onInvertedChange(data) {
        const updatedFilter = { ...filter };
        updatedFilter.inverted = data.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setIsInverted(data.data);
        setContainingGroupFilters(updatedFilters);
    }
    function onDelete() {
        const updatedFilters = [...containingGroupFilters];
        updatedFilters.splice(index, 1);
        onFilterDelete(index);
        setContainingGroupFilters(updatedFilters);
    }
    if (filter) {
        const filterTypeDropdownElt = (window.SP_REACT.createElement(DFL.Focusable, { style: !canBeInverted(filter) ? { width: 'calc(100% - 55px)' } : { width: 'calc(100% - 185px)' } },
            window.SP_REACT.createElement(FilterSelect, { selectedOption: filter.type, onChange: onChange })));
        //single shot patch the filter type dropdown to get it's navNode and tell it to take focus on first render
        if (shouldFocus) {
            DFL.afterPatch(filterTypeDropdownElt.type, 'render', (_, ret) => {
                setTimeout(() => ret.props.value.BTakeFocus(3), 1);
                return ret;
            }, { singleShot: true });
        }
        return (window.SP_REACT.createElement("div", { className: 'filter-entry' },
            window.SP_REACT.createElement(DFL.Focusable, { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                } },
                !canBeInverted(filter) ? (filterTypeDropdownElt) : (window.SP_REACT.createElement(SP_REACT.Fragment, null,
                    filterTypeDropdownElt,
                    window.SP_REACT.createElement(DFL.Focusable, { style: {
                            marginLeft: '10px',
                            width: '120px',
                        } },
                        window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: invertOptions, selectedOption: isInverted, onChange: onInvertedChange })))),
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        marginLeft: '10px',
                        width: '45px',
                    } },
                    window.SP_REACT.createElement(TrashButton, { onClick: onDelete })))));
    }
    else {
        return window.SP_REACT.createElement(SP_REACT.Fragment, null);
    }
};

/**
 * All css styling for the TabMaster MultiSelect component.
 */
const MultiSelectStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      /* The button item wrapper */
      .tab-master-modal-scope .multi-select .${DFL.gamepadDialogClasses.Field} {
        padding: 0;
        margin: 0;
      }
      /* The button item label */
      .tab-master-modal-scope .multi-select .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      /* The button item */
      .tab-master-modal-scope .multi-select button.${DFL.gamepadDialogClasses.Button}.DialogButton {
        min-width: 45px;
      }
    `));
};

/**
 * A component for multi select dropdown options.
 */
const MultiSelectedOption = ({ option, fieldProps, onRemove }) => {
    return (window.SP_REACT.createElement(DFL.Field, { label: option.label, ...fieldProps },
        window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', width: '100%', position: 'relative' } },
            window.SP_REACT.createElement(DFL.DialogButton, { style: {
                    height: '40px',
                    minWidth: '40px',
                    width: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                }, onClick: () => onRemove(option), onOKButton: () => onRemove(option), onOKActionDescription: `Remove ${option.label}` },
                window.SP_REACT.createElement(FaTimes, null)))));
};

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.

function createListComponent(_ref) {
  var _class;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    _inheritsLoose(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoizeOne(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var _this$props2 = this.props,
          itemCount = _this$props2.itemCount,
          layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1)); // The scrollbar size should be considered when scrolling an item into view, to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.
      // This is an edge case for lists; normally they only scroll in the dominant direction.

      var scrollbarSize = 0;

      if (this._outerRef) {
        var outerRef = this._outerRef;

        if (layout === 'vertical') {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }

      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          initialScrollOffset = _this$props3.initialScrollOffset,
          layout = _this$props3.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props,
          direction = _this$props4.direction,
          layout = _this$props4.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          direction = _this$props5.direction,
          height = _this$props5.height,
          innerRef = _this$props5.innerRef,
          innerElementType = _this$props5.innerElementType,
          innerTagName = _this$props5.innerTagName,
          itemCount = _this$props5.itemCount,
          itemData = _this$props5.itemData,
          _this$props5$itemKey = _this$props5.itemKey,
          itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey,
          layout = _this$props5.layout,
          outerElementType = _this$props5.outerElementType,
          outerTagName = _this$props5.outerTagName,
          style = _this$props5.style,
          useIsScrolling = _this$props5.useIsScrolling,
          width = _this$props5.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(SP_REACT.createElement(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return SP_REACT.createElement(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, SP_REACT.createElement(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props,
          itemCount = _this$props6.itemCount,
          overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(SP_REACT.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.

var FixedSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize + scrollbarSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
  }
});

/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Use 'export' statement over 'module.exports' assignment
 **/

// Check `document` and `window` in case of server-side rendering
let windowObject;
if (typeof window !== "undefined") {
  windowObject = window;

  // eslint-disable-next-line no-restricted-globals
} else if (typeof self !== "undefined") {
  // eslint-disable-next-line no-restricted-globals
  windowObject = self;
} else {
  windowObject = global$1;
}
let cancelFrame = null;
let requestFrame = null;
const TIMEOUT_DURATION = 20;
const clearTimeoutFn = windowObject.clearTimeout;
const setTimeoutFn = windowObject.setTimeout;
const cancelAnimationFrameFn = windowObject.cancelAnimationFrame || windowObject.mozCancelAnimationFrame || windowObject.webkitCancelAnimationFrame;
const requestAnimationFrameFn = windowObject.requestAnimationFrame || windowObject.mozRequestAnimationFrame || windowObject.webkitRequestAnimationFrame;
if (cancelAnimationFrameFn == null || requestAnimationFrameFn == null) {
  // For environments that don't support animation frame,
  // fallback to a setTimeout based approach.
  cancelFrame = clearTimeoutFn;
  requestFrame = function requestAnimationFrameViaSetTimeout(callback) {
    return setTimeoutFn(callback, TIMEOUT_DURATION);
  };
} else {
  // Counter intuitively, environments that support animation frames can be trickier.
  // Chrome's "Throttle non-visible cross-origin iframes" flag can prevent rAFs from being called.
  // In this case, we should fallback to a setTimeout() implementation.
  cancelFrame = function cancelFrame([animationFrameID, timeoutID]) {
    cancelAnimationFrameFn(animationFrameID);
    clearTimeoutFn(timeoutID);
  };
  requestFrame = function requestAnimationFrameWithSetTimeoutFallback(callback) {
    const animationFrameID = requestAnimationFrameFn(function animationFrameCallback() {
      clearTimeoutFn(timeoutID);
      callback();
    });
    const timeoutID = setTimeoutFn(function timeoutCallback() {
      cancelAnimationFrameFn(animationFrameID);
      callback();
    }, TIMEOUT_DURATION);
    return [animationFrameID, timeoutID];
  };
}
function createDetectElementResize(nonce) {
  let animationKeyframes;
  let animationName;
  let animationStartEvent;
  let animationStyle;
  let checkTriggers;
  let resetTriggers;
  let scrollListener;
  const attachEvent = typeof document !== "undefined" && document.attachEvent;
  if (!attachEvent) {
    resetTriggers = function (element) {
      const triggers = element.__resizeTriggers__,
        expand = triggers.firstElementChild,
        contract = triggers.lastElementChild,
        expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    checkTriggers = function (element) {
      return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
    };
    scrollListener = function (e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      const element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function animationFrame() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function forEachResizeListener(fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    let animation = false;
    let keyframeprefix = "";
    animationStartEvent = "animationstart";
    const domPrefixes = "Webkit Moz O ms".split(" ");
    let startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    let pfx = "";
    {
      const elm = document.createElement("fakeelement");
      if (elm.style.animationName !== undefined) {
        animation = true;
      }
      if (animation === false) {
        for (let i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationStartEvent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    animationName = "resizeanim";
    animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  const createStyles = function (doc) {
    if (!doc.getElementById("detectElementResize")) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      const css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + "visibility: hidden; opacity: 0; } " + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = doc.head || doc.getElementsByTagName("head")[0],
        style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  const addResizeListener = function (element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        const doc = element.ownerDocument;
        const elementStyle = windowObject.getComputedStyle(element);
        if (elementStyle && elementStyle.position === "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        const expandTrigger = doc.createElement("div");
        expandTrigger.className = "expand-trigger";
        expandTrigger.appendChild(doc.createElement("div"));
        const contractTrigger = doc.createElement("div");
        contractTrigger.className = "contract-trigger";
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationStartEvent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName === animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  const removeResizeListener = function (element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}

class AutoSizer extends SP_REACT.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      height: this.props.defaultHeight || 0,
      width: this.props.defaultWidth || 0
    };
    this._autoSizer = null;
    this._detectElementResize = null;
    this._didLogDeprecationWarning = false;
    this._parentNode = null;
    this._resizeObserver = null;
    this._timeoutId = null;
    this._onResize = () => {
      this._timeoutId = null;
      const {
        disableHeight,
        disableWidth,
        onResize
      } = this.props;
      if (this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        const style = window.getComputedStyle(this._parentNode) || {};
        const paddingLeft = parseFloat(style.paddingLeft || "0");
        const paddingRight = parseFloat(style.paddingRight || "0");
        const paddingTop = parseFloat(style.paddingTop || "0");
        const paddingBottom = parseFloat(style.paddingBottom || "0");
        const rect = this._parentNode.getBoundingClientRect();
        const height = rect.height - paddingTop - paddingBottom;
        const width = rect.width - paddingLeft - paddingRight;
        if (!disableHeight && this.state.height !== height || !disableWidth && this.state.width !== width) {
          this.setState({
            height,
            width
          });
          const maybeLogDeprecationWarning = () => {
            if (!this._didLogDeprecationWarning) {
              this._didLogDeprecationWarning = true;
              console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead");
            }
          };
          if (typeof onResize === "function") {
            onResize({
              height,
              width,
              // TODO Remove these params in the next major release
              get scaledHeight() {
                maybeLogDeprecationWarning();
                return height;
              },
              get scaledWidth() {
                maybeLogDeprecationWarning();
                return width;
              }
            });
          }
        }
      }
    };
    this._setRef = autoSizer => {
      this._autoSizer = autoSizer;
    };
  }
  componentDidMount() {
    const {
      nonce
    } = this.props;
    const parentNode = this._autoSizer ? this._autoSizer.parentNode : null;
    if (parentNode != null && parentNode.ownerDocument && parentNode.ownerDocument.defaultView && parentNode instanceof parentNode.ownerDocument.defaultView.HTMLElement) {
      // Delay access of parentNode until mount.
      // This handles edge-cases where the component has already been unmounted before its ref has been set,
      // As well as libraries like react-lite which have a slightly different lifecycle.
      this._parentNode = parentNode;

      // Use ResizeObserver from the same context where parentNode (which we will observe) was defined
      // Using just global can result into onResize events not being emitted in cases with multiple realms
      const ResizeObserverInstance = parentNode.ownerDocument.defaultView.ResizeObserver;
      if (ResizeObserverInstance != null) {
        this._resizeObserver = new ResizeObserverInstance(() => {
          // Guard against "ResizeObserver loop limit exceeded" error;
          // could be triggered if the state update causes the ResizeObserver handler to run long.
          // See https://github.com/bvaughn/react-virtualized-auto-sizer/issues/55
          this._timeoutId = setTimeout(this._onResize, 0);
        });
        this._resizeObserver.observe(parentNode);
      } else {
        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(parentNode, this._onResize);
      }
      this._onResize();
    }
  }
  componentWillUnmount() {
    if (this._parentNode) {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
      if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId);
      }
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
      }
    }
  }
  render() {
    const {
      children,
      defaultHeight,
      defaultWidth,
      disableHeight = false,
      disableWidth = false,
      doNotBailOutOnEmptyChildren = false,
      nonce,
      onResize,
      style = {},
      tagName = "div",
      ...rest
    } = this.props;
    const {
      height,
      width
    } = this.state;

    // Outer div should not force width/height since that may prevent containers from shrinking.
    // Inner component should overflow and use calculated width/height.
    // See issue #68 for more information.
    const outerStyle = {
      overflow: "visible"
    };
    const childParams = {};

    // Avoid rendering children before the initial measurements have been collected.
    // At best this would just be wasting cycles.
    let bailoutOnChildren = false;
    if (!disableHeight) {
      if (height === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.height = 0;
      childParams.height = height;

      // TODO Remove this in the next major release
      childParams.scaledHeight = height;
    }
    if (!disableWidth) {
      if (width === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.width = 0;
      childParams.width = width;

      // TODO Remove this in the next major release
      childParams.scaledWidth = width;
    }
    if (doNotBailOutOnEmptyChildren) {
      bailoutOnChildren = false;
    }
    return SP_REACT.createElement(tagName, {
      ref: this._setRef,
      style: {
        ...outerStyle,
        ...style
      },
      ...rest
    }, !bailoutOnChildren && children(childParams));
  }
}

/**
 * All css styling for TabMaster's ListSearchModal.
 */
const ListSearchModalStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .tab-master-list-search-modal .${DFL.quickAccessControlsClasses.PanelSection} {
        margin: 0px;
        padding: 0px;
      }
      .tab-master-list-search-modal .${DFL.quickAccessControlsClasses.PanelSection}:first-of-type {
        margin: 0px;
      }

      .tab-master-list-search-modal .${DFL.gamepadDialogClasses.ModalPosition} > .${DFL.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }

      @keyframes tab-master-arrow-bounce-up {
        0% { transform: translateY(1px)  }
        50% { transform: translateY(-2px) }
        100% { transform: translateY(1px) }
      }

      @keyframes tab-master-arrow-bounce-down {
        0% { transform: translateY(-1px)  }
        50% { transform: translateY(2px) }
        100% { transform: translateY(-1px) }
      }
      
      .tab-master-list-search-modal .more-above-arrow {
        position: absolute;
        top: 14px;

        display: flex;
        justify-content: center;
        width: 100%;

        transition: visibility 0.2s ease-in-out;

        animation: tab-master-arrow-bounce-up 2.7s infinite ease-in-out;
      }

      .tab-master-list-search-modal .more-below-arrow {
        position: absolute;
        bottom: -16px;

        display: flex;
        justify-content: center;
        width: 100%;

        transition: visibility 0.2s ease-in-out;

        animation: tab-master-arrow-bounce-down 2.7s infinite ease-in-out;
      }
    `));
};

const iconStyles = {
    paddingRight: '10px',
    width: '1em',
};
const ListSearchModal = ({ rgOptions: list, entryLabel, determineEntryIcon, onSelectOption, closeModal, }) => {
    const [query, setQuery] = SP_REACT.useState('');
    const [filteredList, setFilteredList] = SP_REACT.useState(list);
    const [renderTopArrow, setRenderTopArrow] = SP_REACT.useState(false);
    const [renderBottomArrow, setRenderBottomArrow] = SP_REACT.useState(true);
    const searchRef = SP_REACT.useRef(null);
    const listRef = SP_REACT.useRef(null);
    SP_REACT.useEffect(() => {
        setFilteredList(list.filter(entry => entry.label.toLowerCase().includes(query.toLowerCase())));
    }, [query]);
    function onItemsRendered({ visibleStartIndex, visibleStopIndex, }) {
        if (!renderTopArrow && visibleStartIndex !== 0) {
            setRenderTopArrow(true);
        }
        else if (renderTopArrow && visibleStartIndex === 0) {
            setRenderTopArrow(false);
        }
        if (!renderBottomArrow && visibleStopIndex !== filteredList.length - 1) {
            setRenderBottomArrow(true);
        }
        else if (renderBottomArrow && visibleStopIndex === filteredList.length - 1) {
            setRenderBottomArrow(false);
        }
    }
    const ListEntry = SP_REACT.useMemo(() => ({ index, style }) => {
        const EntryIcon = determineEntryIcon(filteredList[index]);
        return (window.SP_REACT.createElement("div", { style: style, className: 'post' },
            window.SP_REACT.createElement(DFL.DialogButton, { key: `${filteredList[index].label}`, style: { borderRadius: 'unset', margin: '0', padding: '10px', scrollMarginTop: '0' }, onClick: () => {
                    onSelectOption(filteredList[index]);
                    closeModal();
                } },
                window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center' } },
                    window.SP_REACT.createElement(EntryIcon, { style: iconStyles }),
                    window.SP_REACT.createElement(DFL.Marquee, null, filteredList[index].label)))));
    }, [filteredList]);
    const actionButtonProps = {
        onButtonDown: (evt) => {
            if (evt.detail.button === DFL.GamepadButton.SELECT) {
                searchRef?.current?.Focus?.();
                searchRef?.current?.element?.click?.();
            }
        },
        actionDescriptionMap: { [DFL.GamepadButton.SELECT]: 'Search' },
    };
    return (window.SP_REACT.createElement("div", { className: 'tab-master-list-search-modal' },
        window.SP_REACT.createElement(ListSearchModalStyles, null),
        window.SP_REACT.createElement(DFL.ModalRoot, { onCancel: closeModal, onEscKeypress: closeModal },
            window.SP_REACT.createElement(DFL.DialogBody, null,
                window.SP_REACT.createElement(DFL.DialogControlsSection, null,
                    window.SP_REACT.createElement(DFL.Focusable, { "flow-children": 'right', style: { display: 'flex' }, ...actionButtonProps },
                        window.SP_REACT.createElement("div", { style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: 'unset',
                                width: '40px',
                                borderRadius: 'unset',
                                margin: '0',
                                padding: '10px',
                                paddingLeft: '0px',
                            } },
                            window.SP_REACT.createElement(FaMagnifyingGlass, null)),
                        window.SP_REACT.createElement("div", { style: { width: '100%' } },
                            window.SP_REACT.createElement(DFL.TextField, { value: query, placeholder: `Search ${entryLabel}...`, onChange: e => {
                                    listRef.current?.scrollToItem(0);
                                    setQuery(e.target.value);
                                }, style: { height: '100%' }, 
                                //@ts-ignore
                                ref: searchRef })))),
                window.SP_REACT.createElement(DFL.DialogControlsSection, { style: { marginTop: '1em' } },
                    window.SP_REACT.createElement("div", { style: { width: '100%', position: 'relative' } },
                        window.SP_REACT.createElement("div", { className: 'more-above-arrow' }, renderTopArrow && window.SP_REACT.createElement(BiSolidUpArrow, { style: { fontSize: '0.8em', color: '#343945' } })),
                        window.SP_REACT.createElement(DFL.PanelSection, { title: `${entryLabel} - ${filteredList.length}` },
                            window.SP_REACT.createElement(DFL.Focusable, { style: {
                                    display: 'flex',
                                    gap: '4px',
                                    flexDirection: 'column',
                                    height: '48.7vh',
                                    overflow: 'scroll',
                                }, key: filteredList.length, ...actionButtonProps },
                                window.SP_REACT.createElement(AutoSizer, null, ({ height, width }) => (window.SP_REACT.createElement(FixedSizeList, { width: width, height: height, itemCount: filteredList.length, itemSize: 44, onItemsRendered: onItemsRendered, overscanCount: 10, ref: listRef }, ListEntry))))),
                        window.SP_REACT.createElement("div", { className: 'more-below-arrow' }, renderBottomArrow && (window.SP_REACT.createElement(BiSolidDownArrow, { style: { fontSize: '0.8em', color: '#343945' } })))))))));
};
function ListSearchTrigger({ entryLabel, labelOverride, options, onChange, TriggerIcon, determineEntryIcon, disabled, }) {
    const ModalWrapper = ({ onSelectOption, rgOptions, closeModal }) => {
        return (window.SP_REACT.createElement(ListSearchModal, { entryLabel: entryLabel, rgOptions: rgOptions, onSelectOption: onSelectOption, determineEntryIcon: determineEntryIcon, closeModal: closeModal }));
    };
    return (window.SP_REACT.createElement(CustomDropdown, { rgOptions: options, labelOverride: labelOverride, customDropdownIcon: window.SP_REACT.createElement(TriggerIcon, { style: { margin: 'auto' } }), onChange: onChange, useCustomModal: ModalWrapper, disabled: disabled }));
}
function ListSearchDropdown({ entryLabel, rgOptions, selectedOption, onChange, TriggerIcon, determineEntryIcon, disabled, }) {
    const [selected, setSelected] = SP_REACT.useState(rgOptions.find((option) => option.data === selectedOption));
    function onChangeWrapper(data) {
        setSelected(data);
        onChange(data);
    }
    return (window.SP_REACT.createElement(ListSearchTrigger, { entryLabel: entryLabel, options: rgOptions, onChange: onChangeWrapper, labelOverride: selected.label, disabled: disabled ?? false, TriggerIcon: TriggerIcon, determineEntryIcon: determineEntryIcon }));
}

/**
 * A component for multi select dropdown menus that supports modes.
 */
const ModeMultiSelect = ({ options, selected, fieldLabel, dropdownLabel, mode = 'and', onChange = () => { }, maxOptions, fieldProps, entryLabel, determineEntryIcon, EntryIcon, TriggerIcon, }) => {
    const [sel, setSel] = SP_REACT.useState(selected);
    const [available, setAvailable] = SP_REACT.useState(options.filter(opt => !selected.includes(opt)));
    const [innerMode, setInnerMode] = SP_REACT.useState(mode);
    const [dropdownSelected, setDropdownSelected] = SP_REACT.useState({ label: dropdownLabel, data: '' });
    const modes = [
        { label: 'And', data: 'and' },
        { label: 'Or', data: 'or' },
    ];
    SP_REACT.useEffect(() => {
        const avail = options.filter(opt => !sel.some(selOpt => selOpt.data === opt.data));
        setAvailable(avail);
        setDropdownSelected({
            label: avail.length == 0
                ? 'All selected'
                : (!!maxOptions && sel.length == maxOptions ? 'Max selected' : dropdownLabel),
            data: '',
        });
        onChange(sel, innerMode);
    }, [sel]);
    const onRemove = (option) => {
        const ref = [...sel];
        ref.splice(sel.indexOf(option), 1);
        selected = ref;
        setSel(selected);
    };
    const onModeChange = (option) => {
        setInnerMode(option.data);
        onChange(sel, option.data);
    };
    const onSelectedChange = (option) => {
        selected = [...sel, option];
        setSel(selected);
    };
    return (window.SP_REACT.createElement(DFL.Focusable, null,
        window.SP_REACT.createElement(MultiSelectStyles, null),
        window.SP_REACT.createElement(DFL.Field, { label: fieldLabel, description: window.SP_REACT.createElement("div", { className: 'multi-select' },
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '5px',
                    } },
                    window.SP_REACT.createElement(DFL.Focusable, { style: {
                            width: 'calc(100% - 100px)',
                        } },
                        window.SP_REACT.createElement(ListSearchTrigger, { entryLabel: entryLabel, options: available, onChange: onSelectedChange, labelOverride: dropdownSelected.label, disabled: available.length == 0 || (!!maxOptions && selected.length == maxOptions), TriggerIcon: TriggerIcon, determineEntryIcon: entry => {
                                return (determineEntryIcon ? determineEntryIcon(entry) : EntryIcon);
                            } })),
                    window.SP_REACT.createElement(DFL.Focusable, { style: {
                            marginLeft: '10px',
                            width: '90px',
                        } },
                        window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: modes, selectedOption: innerMode, onChange: onModeChange, focusable: true, 
                            // @ts-ignore
                            onOKActionDescription: 'Change the filter mode' })))) }),
        window.SP_REACT.createElement("div", { style: { width: '100%', marginBottom: '14px' } }, sel.map(option => (window.SP_REACT.createElement(MultiSelectedOption, { option: option, onRemove: onRemove, fieldProps: fieldProps }))))));
};

/**
 * Modal for editing a Merge Filter.
 */
const EditMergeFilterModal = ({ closeModal, mergeParams, saveMerge, isEditing, }) => {
    const [groupFilters, setGroupFilters] = SP_REACT.useState(mergeParams.filters);
    const [groupLogicMode, setGroupLogicMode] = SP_REACT.useState(mergeParams.mode);
    const [canSave, setCanSave] = SP_REACT.useState(false);
    const [canAddFilter, setCanAddFilter] = SP_REACT.useState(true);
    const [shouldFocusAddButton, setShouldFocusAddButton] = SP_REACT.useState(true);
    SP_REACT.useEffect(() => {
        setShouldFocusAddButton(false);
    }, []);
    SP_REACT.useEffect(() => {
        setCanSave(groupFilters.length >= 2 && canAddFilter);
    }, [groupFilters, canAddFilter]);
    SP_REACT.useEffect(() => {
        setCanAddFilter(groupFilters.length == 0 || groupFilters.every(filter => isValidParams(filter)));
    }, [groupFilters]);
    function addFilterToGroup() {
        const updatedFilters = [...groupFilters];
        updatedFilters.push({
            type: 'collection',
            inverted: false,
            params: FilterDefaultParams().collection,
        });
        setGroupFilters(updatedFilters);
    }
    function onOkButton() {
        if (canSave) {
            const mergeParams = {
                filters: [...groupFilters],
                mode: groupLogicMode,
            };
            saveMerge(mergeParams);
            closeModal();
        }
        else {
            if (!canAddFilter)
                PythonInterop.toast('Cannot Save Merge Group', 'Some filters are incomplete');
            else
                PythonInterop.toast('Cannot Save Merge Group', 'A Merge group should have at least 2 filters');
        }
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(ModalStyles, null),
        window.SP_REACT.createElement("div", { className: 'tab-master-modal-scope' },
            window.SP_REACT.createElement(DFL.ConfirmModal, { onOK: onOkButton, onCancel: closeModal, strTitle: 'Merge Group', strOKButtonText: 'Save Group' },
                window.SP_REACT.createElement(FiltersPanel, { groupFilters: groupFilters, setGroupFilters: setGroupFilters, addFilter: addFilterToGroup, groupLogicMode: groupLogicMode, setGroupLogicMode: setGroupLogicMode, canAddFilter: canAddFilter, shouldFocusAddButton: shouldFocusAddButton, collapseFilters: isEditing })))));
};

/**
 * A component for multi select dropdown menus.
 */
const MultiSelect = ({ options, selected, fieldLabel, dropdownLabel, onChange = () => { }, maxOptions, fieldProps, entryLabel, determineEntryIcon, TriggerIcon, }) => {
    const [sel, setSel] = SP_REACT.useState(selected);
    const [available, setAvailable] = SP_REACT.useState(options.filter(opt => !selected.includes(opt)));
    const [dropdownSelected, setDropdownSelected] = SP_REACT.useState({ label: dropdownLabel, data: '' });
    SP_REACT.useEffect(() => {
        const avail = options.filter(opt => !sel.some(selOpt => JSON.stringify(selOpt.data) === JSON.stringify(opt.data)));
        setAvailable(avail);
        setDropdownSelected({
            label: avail.length == 0
                ? 'All selected'
                : (!!maxOptions && sel.length == maxOptions ? 'Max selected' : dropdownLabel),
            data: '',
        });
        onChange(sel);
    }, [sel]);
    const onRemove = (option) => {
        const ref = [...sel];
        ref.splice(sel.indexOf(option), 1);
        selected = ref;
        setSel(selected);
    };
    const onSelectedChange = (option) => {
        selected = [...sel, option];
        setSel(selected);
    };
    return (window.SP_REACT.createElement(DFL.Focusable, null,
        window.SP_REACT.createElement(MultiSelectStyles, null),
        window.SP_REACT.createElement(DFL.Field, { label: fieldLabel, description: window.SP_REACT.createElement("div", { className: 'multi-select' },
                window.SP_REACT.createElement(DFL.Focusable, { style: {
                        width: '100%',
                        marginBottom: '5px',
                    } },
                    window.SP_REACT.createElement(ListSearchTrigger, { entryLabel: entryLabel, options: available, onChange: onSelectedChange, labelOverride: dropdownSelected.label, disabled: available.length == 0 || (!!maxOptions && selected.length == maxOptions), TriggerIcon: TriggerIcon, determineEntryIcon: determineEntryIcon }))) }),
        window.SP_REACT.createElement("div", { style: { width: '100%', marginBottom: '14px' } }, sel.map(option => (window.SP_REACT.createElement(MultiSelectedOption, { option: option, onRemove: onRemove, fieldProps: fieldProps }))))));
};

const FilterPreviewGeneric = ({ filter, displayData, isInverted }) => {
    return (window.SP_REACT.createElement("div", { style: { display: 'flex' } },
        window.SP_REACT.createElement("div", { style: { marginRight: '7px' } }, SP_REACT.createElement(FilterIcons[filter.type], { size: '.8em' })),
        window.SP_REACT.createElement("div", null,
            window.SP_REACT.createElement("b", null, capitalizeEachWord(filter.type)),
            ' - ' + displayData + (isInverted ? ' (inverted)' : ''))));
};
const CollectionFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.name ?? filter.params.id, isInverted: filter.inverted }));
};
const InstalledFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.installed ? 'yes' : 'no' });
};
const RegexFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.regex, isInverted: filter.inverted });
};
const FriendsFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${filter.params.friends.length} ${filter.params.friends.length == 1 ? 'friend' : 'friends'}`, isInverted: filter.inverted }));
};
const TagsFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${filter.params.tags.length} ${filter.params.tags.length == 1 ? 'tag' : 'tags'}`, isInverted: filter.inverted }));
};
const WhitelistFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${filter.params.games.length} whitelisted` });
};
const BlackListFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${filter.params.games.length} blacklisted` });
};
const MergeFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${filter.params.filters.length} grouped filters`, isInverted: filter.inverted }));
};
const PlatformFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.platform === 'steam' ? 'Steam' : 'Non Steam' }));
};
const DeckCompatFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: compatCategoryToLabel(filter.params.category), isInverted: filter.inverted }));
};
const SteamOSCompatFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: steamOSCompatCategoryToLabel(filter.params.category), isInverted: filter.inverted }));
};
const ReviewScoreFilterPreview = ({ filter }) => {
    const { scoreThreshold, condition, type } = filter.params;
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: type === 'metacritic'
            ? `Metacritic of ${scoreThreshold} or ${condition === 'above' ? 'higher' : 'lower'}`
            : `At ${condition === 'above' ? 'least' : 'most'} ${scoreThreshold}% positive Steam reviews` }));
};
const TimePlayedFilterPreview = ({ filter }) => {
    const { timeThreshold, condition, units } = filter.params;
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${timeThreshold} ${timeThreshold === 1 ? units.slice(0, -1) : units} or ${condition === 'above' ? 'more' : 'less'}` }));
};
const SizeOnDiskFilterPreview = ({ filter }) => {
    const { gbThreshold, condition } = filter.params;
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${gbThreshold < 1 ? gbThreshold * 1000 : gbThreshold} ${gbThreshold < 1 ? 'MB' : 'GB'} or ${condition === 'above' ? 'more' : 'less'}` }));
};
const ReleaseDateFilterPreview = ({ filter }) => {
    let displayData;
    if (filter.params.date) {
        const { day, month, year } = filter.params.date;
        displayData = `${!day ? 'In' : 'On'} or ${filter.params.condition === 'above' ? 'after' : 'before'} ${dateToLabel(year, month, day, { dateStyle: 'long' })}`;
    }
    else {
        const daysAgo = filter.params.daysAgo;
        displayData = `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago or ${filter.params.condition === 'above' ? 'later' : 'earlier'}`;
    }
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: displayData });
};
const PurchaseDateFilterPreview = ({ filter }) => {
    let displayData;
    if (filter.params.date) {
        const { day, month, year } = filter.params.date;
        displayData = `${!day ? 'In' : 'On'} or ${filter.params.condition === 'above' ? 'after' : 'before'} ${dateToLabel(year, month, day, { dateStyle: 'long' })}`;
    }
    else {
        const daysAgo = filter.params.daysAgo;
        displayData = `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago or ${filter.params.condition === 'above' ? 'later' : 'earlier'}`;
    }
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: displayData });
};
const LastPlayedFilterPreview = ({ filter }) => {
    let displayData;
    if (filter.params.date) {
        const { day, month, year } = filter.params.date;
        displayData = `${!day ? 'In' : 'On'} or ${filter.params.condition === 'above' ? 'after' : 'before'} ${dateToLabel(year, month, day, { dateStyle: 'long' })}`;
    }
    else {
        const daysAgo = filter.params.daysAgo;
        displayData = `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago or ${filter.params.condition === 'above' ? 'later' : 'earlier'}`;
    }
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: displayData });
};
const FamilySharingFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.isFamilyShared ? 'yes' : 'no' });
};
const DemoFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.isDemo ? 'yes' : 'no' });
};
const ComingSoonFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.isComingSoon ? 'yes' : 'no' });
};
const StreamableFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.isStreamable ? 'yes' : 'no' });
};
const SteamFeaturesFilterPreview = ({ filter }) => {
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${filter.params.features.length} ${filter.params.features.length == 1 ? 'feature' : 'features'}`, isInverted: filter.inverted }));
};
const AchievementsFilterPreview = ({ filter }) => {
    const { threshold, thresholdType, condition } = filter.params;
    return (window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: `${threshold}${thresholdType === 'percent' ? '%' : ''} or ${condition === 'above' ? 'more' : 'less'} achievements completed` }));
};
const SDCardFilterPreview = ({ filter }) => {
    let label;
    switch (filter.params.card) {
        case SdCardParamType.ANY:
            label = 'Any';
            break;
        case SdCardParamType.INSTALLED:
        case undefined:
            label = 'Inserted';
            break;
        default:
            label =
                (MicroSDeckInterop.isInstallOk() &&
                    window.MicroSDeck?.CardsAndGames.find(([card]) => card.uid === filter.params.card)?.[0].name) ||
                    filter.params.card;
    }
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: label, isInverted: filter.inverted });
};
const InstallFolderFilterPreview = ({ filter }) => {
    return window.SP_REACT.createElement(FilterPreviewGeneric, { filter: filter, displayData: filter.params.driveName, isInverted: filter.inverted });
};
/**
 * Generates the preview data for filters in a merge group.
 */
const FilterPreview = ({ filter }) => {
    if (filter) {
        switch (filter.type) {
            case 'collection':
                return window.SP_REACT.createElement(CollectionFilterPreview, { filter: filter });
            case 'installed':
                return window.SP_REACT.createElement(InstalledFilterPreview, { filter: filter });
            case 'regex':
                return window.SP_REACT.createElement(RegexFilterPreview, { filter: filter });
            case 'friends':
                return window.SP_REACT.createElement(FriendsFilterPreview, { filter: filter });
            case 'tags':
                return window.SP_REACT.createElement(TagsFilterPreview, { filter: filter });
            case 'whitelist':
                return window.SP_REACT.createElement(WhitelistFilterPreview, { filter: filter });
            case 'blacklist':
                return window.SP_REACT.createElement(BlackListFilterPreview, { filter: filter });
            case 'merge':
                return window.SP_REACT.createElement(MergeFilterPreview, { filter: filter });
            case 'platform':
                return window.SP_REACT.createElement(PlatformFilterPreview, { filter: filter });
            case 'deck compatibility':
                return window.SP_REACT.createElement(DeckCompatFilterPreview, { filter: filter });
            case 'steamos compatibility':
                return window.SP_REACT.createElement(SteamOSCompatFilterPreview, { filter: filter });
            case 'review score':
                return window.SP_REACT.createElement(ReviewScoreFilterPreview, { filter: filter });
            case 'time played':
                return window.SP_REACT.createElement(TimePlayedFilterPreview, { filter: filter });
            case 'size on disk':
                return window.SP_REACT.createElement(SizeOnDiskFilterPreview, { filter: filter });
            case 'release date':
                return window.SP_REACT.createElement(ReleaseDateFilterPreview, { filter: filter });
            case 'purchase date':
                return window.SP_REACT.createElement(PurchaseDateFilterPreview, { filter: filter });
            case 'last played':
                return window.SP_REACT.createElement(LastPlayedFilterPreview, { filter: filter });
            case 'family sharing':
                return window.SP_REACT.createElement(FamilySharingFilterPreview, { filter: filter });
            case 'demo':
                return window.SP_REACT.createElement(DemoFilterPreview, { filter: filter });
            case 'coming soon':
                return window.SP_REACT.createElement(ComingSoonFilterPreview, { filter: filter });
            case 'streamable':
                return window.SP_REACT.createElement(StreamableFilterPreview, { filter: filter });
            case 'steam features':
                return window.SP_REACT.createElement(SteamFeaturesFilterPreview, { filter: filter });
            case 'achievements':
                return window.SP_REACT.createElement(AchievementsFilterPreview, { filter: filter });
            case 'sd card':
                return window.SP_REACT.createElement(SDCardFilterPreview, { filter: filter });
            case 'install folder':
                return window.SP_REACT.createElement(InstallFolderFilterPreview, { filter: filter });
            default:
                return window.SP_REACT.createElement(SP_REACT.Fragment, null);
        }
    }
    else {
        return window.SP_REACT.createElement(SP_REACT.Fragment, null);
    }
};

const highlightColor = '#bbc1c94a';
const sliderStyle = `
  .slider-container.highlight-slider .${DFL.gamepadDialogClasses.Field}.gpfocuswithin .${DFL.gamepadSliderClasses.SliderControl} {
    background-color: ${highlightColor};
    box-shadow: 0px 0px 8px 8px ${highlightColor};
    border-radius: 10px;
  }

  .slider-container .${DFL.gamepadDialogClasses.Field} {
    padding: 0;
    flex: auto;
    --field-negative-horizontal-margin: 0
  }

  .slider-container .${DFL.gamepadSliderClasses.SliderControl} {
    transition-property: background-color, box-shadow;
    transition-duration: .20s;
    height: 6px;
  }

  .slider-container .${DFL.gamepadSliderClasses.SliderHandle} {
    top: -8px;
  }

  .slider-container .${DFL.gamepadSliderClasses.SliderNotchTick} {
    height: 4px;
  }

  .slider-container .${DFL.gamepadSliderClasses.SliderNotchContainer} {
    margin-top: 4px;
  }
`;
const Slider = ({ highlightOnFocus, ...props }) => {
    return (window.SP_REACT.createElement("div", { className: `slider-container${(highlightOnFocus ?? true) ? ' highlight-slider' : ''}`, style: { minHeight: '40px', display: 'flex', alignItems: 'center', flex: 'auto' } },
        window.SP_REACT.createElement("style", null, sliderStyle),
        window.SP_REACT.createElement(DFL.SliderField, { ...props, highlightOnFocus: false })));
};

/**
 * Gets an entry icon for an app based on its type.
 * @param entry The app entry.
 * @returns The icon for the app.
 */
function getAppIconType(entry) {
    switch (entry.data.appType) {
        case IncludeCategories.games:
            return IoGameController;
        case IncludeCategories.music:
            return FaCompactDisc;
        case IncludeCategories.software:
            return BsWindow;
        default:
            return FaQuestionCircle;
    }
}
/**
 * Gets an entry icon for a collection based on if its user made.
 * @param entry The collection entry.
 * @returns The icon for the collection.
 */
function getCollectionIcon(entry) {
    const collection = collectionStore.userCollections.find((collection) => collection.id === entry.data);
    if (collection?.bIsEditable) {
        return FaUser;
    }
    else {
        return FaSteam;
    }
}
/**
 * The options for a collection filter.
 */
const CollectionFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const collectionDropdownOptions = collectionStore.userCollections
        .concat([{ displayName: 'Hidden', id: 'hidden' }])
        .map((collection) => {
        return {
            label: collection.displayName,
            data: collection.id,
        };
    });
    function onChange(data) {
        const updatedFilter = { ...filter };
        updatedFilter.params.id = data.data;
        updatedFilter.params.name = data.label;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Collection', description: window.SP_REACT.createElement(ListSearchDropdown, { entryLabel: 'Collections', rgOptions: collectionDropdownOptions, selectedOption: filter.params.id, onChange: onChange, TriggerIcon: IoGrid, determineEntryIcon: getCollectionIcon }) }));
};
/**
 * The options for an installed filter.
 */
const InstalledFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    function onChange(checked) {
        const updatedFilter = { ...filter };
        updatedFilter.params.installed = checked ?? false;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return window.SP_REACT.createElement(DFL.ToggleField, { label: 'Is installed?', checked: filter.params.installed, onChange: onChange });
};
/**
 * The options for a regex filter.
 */
const RegexFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    function onChange(e) {
        const updatedFilter = { ...filter };
        updatedFilter.params.regex = e?.target.value;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Regex', description: window.SP_REACT.createElement(DFL.TextField, { value: filter.params.regex, placeholder: 'Input a Regular Expression', onChange: onChange }) }));
};
/**
 * The options for a friends filter.
 */
const FriendsFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const { currentUsersFriends } = useTabMasterContext();
    const dropdownOptions = currentUsersFriends
        .sort((friendA, friendB) => friendA.name.localeCompare(friendB.name))
        .map((friend) => {
        return { label: friend.name, data: friend.steamid };
    });
    const selected = filter.params.friends.map((id) => {
        return {
            label: currentUsersFriends.find(friend => friend.steamid === id).name,
            data: id,
        };
    });
    const friendsMode = filter.params.mode;
    function onChange(selected, mode) {
        const updatedFilter = { ...filter };
        updatedFilter.params.friends = selected.map(friendEntry => friendEntry.data);
        updatedFilter.params.mode = mode;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(ModeMultiSelect, { fieldLabel: 'Selected Friends', dropdownLabel: 'Add a friend', mode: friendsMode, options: dropdownOptions, selected: selected, onChange: onChange, entryLabel: 'Friends', EntryIcon: FaUser, TriggerIcon: FaUserFriends }));
};
/**
 * The options for a tags filter.
 */
const TagsFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const { allStoreTags } = useTabMasterContext();
    const dropdownOptions = allStoreTags
        .sort((tagA, tagB) => tagA.string.localeCompare(tagB.string))
        .map((storeTag) => {
        return { label: storeTag.string, data: storeTag.tag };
    });
    const selected = filter.params.tags.map((tagNum) => {
        return {
            label: allStoreTags.find(tag => tag.tag === tagNum).string,
            data: tagNum,
        };
    });
    const tagsMode = filter.params.mode;
    function onChange(selected, mode) {
        const updatedFilter = { ...filter };
        updatedFilter.params.tags = selected.map(tagEntry => tagEntry.data);
        updatedFilter.params.mode = mode;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(ModeMultiSelect, { fieldLabel: 'Selected Tags', dropdownLabel: 'Add a tag', mode: tagsMode, options: dropdownOptions, selected: selected, onChange: onChange, entryLabel: 'Tags', EntryIcon: FaTag, TriggerIcon: FaTags }));
};
/**
 * The options for a whitelist filter.
 */
const WhitelistFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    let appsList = [];
    const selected = [];
    const types = ['games', 'music', 'software'];
    for (const type of types) {
        appsList = appsList.concat(collectionStore.appTypeCollectionMap.get(`type-${type}`).allApps);
    }
    for (const gameid of filter.params.games) {
        const game = appsList.find(game => game.appid === gameid);
        if (game)
            selected.push({ label: game.display_name, data: { appid: game.appid, appType: game.app_type } });
    }
    const dropdownOptions = appsList.map((game) => {
        return { label: game.display_name, data: { appid: game.appid, appType: game.app_type } };
    });
    function onChange(selected) {
        const updatedFilter = { ...filter };
        updatedFilter.params.games = selected.map(gameEntry => gameEntry.data.appid);
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(MultiSelect, { fieldLabel: 'Whitelisted Apps', dropdownLabel: 'Add an app', options: dropdownOptions, selected: selected, onChange: onChange, entryLabel: 'Your Apps', determineEntryIcon: getAppIconType, TriggerIcon: MdApps }));
};
/**
 * The options for a blacklist filter.
 */
const BlackListFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    let appsList = [];
    const selected = [];
    const types = ['games', 'music', 'software'];
    for (const type of types) {
        appsList = appsList.concat(collectionStore.appTypeCollectionMap.get(`type-${type}`).allApps);
    }
    for (const gameid of filter.params.games) {
        const game = appsList.find(game => game.appid === gameid);
        if (game)
            selected.push({ label: game.display_name, data: { appid: game.appid, appType: game.app_type } });
    }
    const dropdownOptions = appsList.map((game) => {
        return { label: game.display_name, data: { appid: game.appid, appType: game.app_type } };
    });
    function onChange(selected) {
        const updatedFilter = { ...filter };
        updatedFilter.params.games = selected.map(gameEntry => gameEntry.data.appid);
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(MultiSelect, { fieldLabel: 'Blacklisted Apps', dropdownLabel: 'Add an app', options: dropdownOptions, selected: selected, onChange: onChange, entryLabel: 'Your Apps', determineEntryIcon: getAppIconType, TriggerIcon: MdApps }));
};
/**
 * The options for a merge filter.
 */
const MergeFilterOptions = ({ index, filter, containingGroupFilters, setContainingGroupFilters, }) => {
    const tabMasterManager = useTabMasterContext().tabMasterManager;
    const initialParams = {
        filters: [...filter.params.filters],
        mode: filter.params.mode,
    };
    const [isEditing, setIsEditing] = SP_REACT.useState(filter.params.filters.length !== 0);
    const [mergeParams, setMergeParams] = SP_REACT.useState(initialParams);
    function saveMerge(mergeParams) {
        const updatedFilter = { ...filter };
        updatedFilter.params.filters = mergeParams.filters;
        updatedFilter.params.mode = mergeParams.mode;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setIsEditing(true);
        setMergeParams({ ...mergeParams });
        setContainingGroupFilters(updatedFilters);
    }
    function onClick() {
        //*this is necessary to close the modal
        const modal = { instance: null };
        modal.instance = DFL.showModal(window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
            window.SP_REACT.createElement(EditMergeFilterModal, { mergeParams: mergeParams, saveMerge: saveMerge, closeModal: () => modal.instance.Close(), isEditing: isEditing })));
    }
    return (window.SP_REACT.createElement(DFL.Focusable, { className: 'styled-btn' },
        window.SP_REACT.createElement(DFL.ButtonItem, { onClick: onClick }, (isEditing ? 'Edit' : 'Create') + ' Merge Group'),
        window.SP_REACT.createElement("div", { style: { marginTop: '7px' } },
            window.SP_REACT.createElement("b", null, "Merge Mode"),
            " - ",
            mergeParams.mode),
        window.SP_REACT.createElement("div", { style: { marginTop: '7px', fontWeight: 'bold' } }, "Filters:"),
        window.SP_REACT.createElement("div", { className: 'merge-filter-entries' }, mergeParams.filters.map(filter => (window.SP_REACT.createElement("div", { style: { marginTop: '3px' } },
            window.SP_REACT.createElement(FilterPreview, { filter: filter })))))));
};
/**
 * The options for a platform filter.
 */
const PlatformFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const dropdownOptions = [
        { label: 'Steam', data: 'steam' },
        { label: 'Non Steam', data: 'nonSteam' },
    ];
    function onChange(selected) {
        const updatedFilter = { ...filter };
        updatedFilter.params.platform = selected.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Platform', description: window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: dropdownOptions, selectedOption: filter.params.platform, onChange: onChange }) }));
};
/**
 * The options for a deck compatibility filter.
 */
const DeckCompatFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const dropdownOptions = [0, 1, 2, 3].map(level => {
        return { label: compatCategoryToLabel(level), data: level };
    });
    function onChange(selected) {
        const updatedFilter = { ...filter };
        updatedFilter.params.category = selected.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Compatibility', description: window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: dropdownOptions, selectedOption: filter.params.category, onChange: onChange }) }));
};
/**
 * The options for a deck compatibility filter.
 */
const SteamOSCompatFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const dropdownOptions = [0, 1, 2].map(level => {
        return { label: steamOSCompatCategoryToLabel(level), data: level };
    });
    function onChange(selected) {
        const updatedFilter = { ...filter };
        updatedFilter.params.category = selected.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Compatibility', description: window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: dropdownOptions, selectedOption: filter.params.category, onChange: onChange }) }));
};
/**
 * The options for a review score filter.
 */
const ReviewScoreFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [value, setValue] = SP_REACT.useState(filter.params.scoreThreshold);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.condition);
    const [reviewType, setReviewType] = SP_REACT.useState(filter.params.type);
    function updateFilter(threshold, threshType, scoreType) {
        const updatedFilter = { ...filter };
        updatedFilter.params.scoreThreshold = threshold;
        updatedFilter.params.condition = threshType;
        updatedFilter.params.type = scoreType;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    function onSliderChange(value) {
        updateFilter(value, thresholdType, reviewType);
        setValue(value);
    }
    function onThreshTypeChange({ data: threshType }) {
        updateFilter(value, threshType, reviewType);
        setThresholdType(threshType);
    }
    function onReviewTypeChange({ data: type }) {
        updateFilter(value, thresholdType, type);
        setReviewType(type);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: reviewType === 'metacritic'
            ? `Metacritic score of ${value} or ${thresholdType === 'above' ? 'higher' : 'lower'}`
            : `At ${thresholdType === 'above' ? 'least' : 'most'} ${value}% positive Steam reviews`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' } },
            window.SP_REACT.createElement(Slider, { value: value, min: 0, max: 100, onChange: onSliderChange }),
            window.SP_REACT.createElement("div", { style: { marginLeft: '12px', marginRight: '10px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'Metacritic', data: 'metacritic' },
                        { label: 'Steam ', data: 'steampercent' },
                    ], selectedOption: reviewType, onChange: onReviewTypeChange })),
            window.SP_REACT.createElement("div", null,
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'At least', data: 'above' },
                        { label: 'At most', data: 'below' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for a time played filter.
 */
const TimePlayedFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [time, setTime] = SP_REACT.useState(filter.params.timeThreshold);
    const [units, setUnits] = SP_REACT.useState(filter.params.units);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.condition);
    function updateFilter(threshold, threshType, units) {
        const updatedFilter = { ...filter };
        updatedFilter.params.timeThreshold = threshold;
        updatedFilter.params.condition = threshType;
        updatedFilter.params.units = units;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    function onSliderChange(value) {
        updateFilter(value, thresholdType, units);
        setTime(value);
    }
    function onUnitChange({ data: units }) {
        updateFilter(time, thresholdType, units);
        setUnits(units);
    }
    function onThreshTypeChange({ data: threshType }) {
        updateFilter(time, threshType, units);
        setThresholdType(threshType);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: `Played for ${time} ${time === 1 ? units.slice(0, -1) : units} or ${thresholdType === 'above' ? 'more' : 'less'}`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' } },
            window.SP_REACT.createElement(Slider, { value: time, min: 0, max: 300, onChange: onSliderChange }),
            window.SP_REACT.createElement("div", { style: { marginLeft: '12px', marginRight: '10px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'Minutes', data: 'minutes' },
                        { label: 'Hours', data: 'hours' },
                        { label: 'Days', data: 'days' },
                    ], selectedOption: units, onChange: onUnitChange })),
            window.SP_REACT.createElement("div", null,
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'At least', data: 'above' },
                        { label: 'At most', data: 'below' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for a size on disk filter.
 */
const SizeOnDiskFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [value, setValue] = SP_REACT.useState(filter.params.gbThreshold.toString());
    const [numericValue, setNumericValue] = SP_REACT.useState(filter.params.gbThreshold);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.condition);
    function updateFilter(threshold, threshType) {
        const updatedFilter = { ...filter };
        updatedFilter.params.gbThreshold = threshold;
        updatedFilter.params.condition = threshType;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    function onSliderChange(e) {
        let parsedValue = 0;
        if (e?.target.value !== '' && !isNaN(parseFloat(e?.target.value))) {
            parsedValue = parseFloat(e?.target.value);
        }
        updateFilter(parsedValue, thresholdType);
        setNumericValue(parsedValue);
        setValue(e?.target.value);
    }
    function onThreshTypeChange({ data: threshType }) {
        updateFilter(numericValue, threshType);
        setThresholdType(threshType);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: `${numericValue < 1 ? numericValue * 1000 : value} ${numericValue < 1 ? 'MB' : 'GB'} or ${thresholdType === 'above' ? 'more' : 'less'} on disk`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' }, className: 'size-on-disk-row' },
            window.SP_REACT.createElement(DFL.TextField, { value: value, onChange: onSliderChange }),
            window.SP_REACT.createElement("div", { style: { marginLeft: '12px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'At least', data: 'above' },
                        { label: 'At most', data: 'below' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for a release date filter.
 */
const ReleaseDateFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [date, setDate] = SP_REACT.useState(filter.params.date);
    const [dateIncludes, setDateIncludes] = SP_REACT.useState(filter.params.date
        ? filter.params.date.day === undefined
            ? filter.params.date.month === undefined
                ? DateIncludes.yearOnly
                : DateIncludes.monthYear
            : DateIncludes.dayMonthYear
        : DateIncludes.dayMonthYear);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.condition);
    const [byDaysAgo, setByDaysAgo] = SP_REACT.useState(filter.params.daysAgo !== undefined);
    const [daysAgo, setDaysAgo] = SP_REACT.useState(filter.params.daysAgo ?? 30);
    function onDateChange(dateSelection) {
        const updatedFilter = { ...filter };
        updatedFilter.params.date = dateSelection.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setDate(dateSelection.data);
    }
    function onThreshTypeChange({ data: threshType }) {
        const updatedFilter = { ...filter };
        updatedFilter.params.condition = threshType;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setThresholdType(threshType);
    }
    function onByDaysAgoChange(byDaysAgo) {
        const updatedFilter = { ...filter };
        if (byDaysAgo) {
            delete updatedFilter.params.date;
            updatedFilter.params.daysAgo = daysAgo;
        }
        else {
            delete updatedFilter.params.daysAgo;
            updatedFilter.params.date = date;
        }
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setByDaysAgo(byDaysAgo);
    }
    function onSliderChange(value) {
        const updatedFilter = { ...filter };
        updatedFilter.params.daysAgo = value;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setDaysAgo(value);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: `Released ${byDaysAgo ? `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago or ${thresholdType === 'above' ? 'later' : 'earlier'}` : `${dateIncludes === DateIncludes.dayMonthYear ? 'on' : 'in'} or ${thresholdType === 'above' ? 'after' : 'before'}...`}`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' } },
            byDaysAgo ? (window.SP_REACT.createElement(Slider, { value: daysAgo, min: 0, max: 3000, onChange: onSliderChange })) : (window.SP_REACT.createElement(DatePicker, { focusDropdowns: true, modalType: 'simple', buttonContainerStyle: { flex: 1 }, onChange: onDateChange, dateIncludes: dateIncludes, selectedDate: date, toLocaleStringOptions: { dateStyle: 'long' }, animate: true, transparencyMode: EnhancedSelectorTransparencyMode.selection, focusRingMode: EnhancedSelectorFocusRingMode.transparentOnly })),
            window.SP_REACT.createElement("div", { style: { margin: '0 10px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'By Day', data: DateIncludes.dayMonthYear },
                        { label: 'By Month', data: DateIncludes.monthYear },
                        { label: 'By Year', data: DateIncludes.yearOnly },
                        { label: 'By Days Ago', data: 'byDaysAgo' },
                    ], selectedOption: dateIncludes, onChange: option => {
                        if (option.data === 'byDaysAgo') {
                            onByDaysAgoChange(true);
                        }
                        else {
                            if (byDaysAgo)
                                onByDaysAgoChange(false);
                            setDateIncludes(option.data);
                        }
                    } })),
            window.SP_REACT.createElement("div", null,
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'Earliest', data: 'above' },
                        { label: 'Latest', data: 'below' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for a purchase date filter.
 */
const PurchaseDateFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [date, setDate] = SP_REACT.useState(filter.params.date);
    const [dateIncludes, setDateIncludes] = SP_REACT.useState(filter.params.date
        ? filter.params.date.day === undefined
            ? filter.params.date.month === undefined
                ? DateIncludes.yearOnly
                : DateIncludes.monthYear
            : DateIncludes.dayMonthYear
        : DateIncludes.dayMonthYear);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.condition);
    const [byDaysAgo, setByDaysAgo] = SP_REACT.useState(filter.params.daysAgo !== undefined);
    const [daysAgo, setDaysAgo] = SP_REACT.useState(filter.params.daysAgo ?? 30);
    function onDateChange(dateSelection) {
        const updatedFilter = { ...filter };
        updatedFilter.params.date = dateSelection.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setDate(dateSelection.data);
    }
    function onThreshTypeChange({ data: threshType }) {
        const updatedFilter = { ...filter };
        updatedFilter.params.condition = threshType;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setThresholdType(threshType);
    }
    function onByDaysAgoChange(byDaysAgo) {
        const updatedFilter = { ...filter };
        if (byDaysAgo) {
            delete updatedFilter.params.date;
            updatedFilter.params.daysAgo = daysAgo;
        }
        else {
            delete updatedFilter.params.daysAgo;
            updatedFilter.params.date = date;
        }
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setByDaysAgo(byDaysAgo);
    }
    function onSliderChange(value) {
        const updatedFilter = { ...filter };
        updatedFilter.params.daysAgo = value;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setDaysAgo(value);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: `Purchased ${byDaysAgo ? `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago or ${thresholdType === 'above' ? 'later' : 'earlier'}` : `${dateIncludes === DateIncludes.dayMonthYear ? 'on' : 'in'} or ${thresholdType === 'above' ? 'after' : 'before'}...`}`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' } },
            byDaysAgo ? (window.SP_REACT.createElement(Slider, { value: daysAgo, min: 0, max: 3000, onChange: onSliderChange })) : (window.SP_REACT.createElement(DatePicker, { focusDropdowns: true, modalType: 'simple', buttonContainerStyle: { flex: 1 }, onChange: onDateChange, dateIncludes: dateIncludes, selectedDate: date, toLocaleStringOptions: { dateStyle: 'long' }, animate: true, transparencyMode: EnhancedSelectorTransparencyMode.selection, focusRingMode: EnhancedSelectorFocusRingMode.transparentOnly })),
            window.SP_REACT.createElement("div", { style: { margin: '0 10px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'By Day', data: DateIncludes.dayMonthYear },
                        { label: 'By Month', data: DateIncludes.monthYear },
                        { label: 'By Year', data: DateIncludes.yearOnly },
                        { label: 'By Days Ago', data: 'byDaysAgo' },
                    ], selectedOption: dateIncludes, onChange: option => {
                        if (option.data === 'byDaysAgo') {
                            onByDaysAgoChange(true);
                        }
                        else {
                            if (byDaysAgo)
                                onByDaysAgoChange(false);
                            setDateIncludes(option.data);
                        }
                    } })),
            window.SP_REACT.createElement("div", null,
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'Earliest', data: 'above' },
                        { label: 'Latest', data: 'below' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for a last played filter.
 */
const LastPlayedFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [date, setDate] = SP_REACT.useState(filter.params.date);
    const [dateIncludes, setDateIncludes] = SP_REACT.useState(filter.params.date
        ? filter.params.date.day === undefined
            ? filter.params.date.month === undefined
                ? DateIncludes.yearOnly
                : DateIncludes.monthYear
            : DateIncludes.dayMonthYear
        : DateIncludes.dayMonthYear);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.condition);
    const [byDaysAgo, setByDaysAgo] = SP_REACT.useState(filter.params.daysAgo !== undefined);
    const [daysAgo, setDaysAgo] = SP_REACT.useState(filter.params.daysAgo ?? 30);
    function onDateChange(dateSelection) {
        const updatedFilter = { ...filter };
        updatedFilter.params.date = dateSelection.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setDate(dateSelection.data);
    }
    function onThreshTypeChange({ data: threshType }) {
        const updatedFilter = { ...filter };
        updatedFilter.params.condition = threshType;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setThresholdType(threshType);
    }
    function onByDaysAgoChange(byDaysAgo) {
        const updatedFilter = { ...filter };
        if (byDaysAgo) {
            delete updatedFilter.params.date;
            updatedFilter.params.daysAgo = daysAgo;
        }
        else {
            delete updatedFilter.params.daysAgo;
            updatedFilter.params.date = date;
        }
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setByDaysAgo(byDaysAgo);
    }
    function onSliderChange(value) {
        const updatedFilter = { ...filter };
        updatedFilter.params.daysAgo = value;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
        setDaysAgo(value);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: `Last played ${byDaysAgo ? `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago or ${thresholdType === 'above' ? 'later' : 'earlier'}` : `${dateIncludes === DateIncludes.dayMonthYear ? 'on' : 'in'} or ${thresholdType === 'above' ? 'after' : 'before'}...`}`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' } },
            byDaysAgo ? (window.SP_REACT.createElement(Slider, { value: daysAgo, min: 0, max: 3000, onChange: onSliderChange })) : (window.SP_REACT.createElement(DatePicker, { focusDropdowns: true, modalType: 'simple', buttonContainerStyle: { flex: 1 }, onChange: onDateChange, dateIncludes: dateIncludes, selectedDate: date, toLocaleStringOptions: { dateStyle: 'long' }, animate: true, transparencyMode: EnhancedSelectorTransparencyMode.selection, focusRingMode: EnhancedSelectorFocusRingMode.transparentOnly })),
            window.SP_REACT.createElement("div", { style: { margin: '0 10px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'By Day', data: DateIncludes.dayMonthYear },
                        { label: 'By Month', data: DateIncludes.monthYear },
                        { label: 'By Year', data: DateIncludes.yearOnly },
                        { label: 'By Days Ago', data: 'byDaysAgo' },
                    ], selectedOption: dateIncludes, onChange: option => {
                        if (option.data === 'byDaysAgo') {
                            onByDaysAgoChange(true);
                        }
                        else {
                            if (byDaysAgo)
                                onByDaysAgoChange(false);
                            setDateIncludes(option.data);
                        }
                    } })),
            window.SP_REACT.createElement("div", null,
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'Earliest', data: 'above' },
                        { label: 'Latest', data: 'below' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for a family sharing filter.
 */
const FamilySharingFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    function onChange(checked) {
        const updatedFilter = { ...filter };
        updatedFilter.params.isFamilyShared = checked ?? false;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return window.SP_REACT.createElement(DFL.ToggleField, { label: 'Is from a family member?', checked: filter.params.isFamilyShared, onChange: onChange });
};
/**
 * The options for a demo filter.
 */
const DemoFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    function onChange(checked) {
        const updatedFilter = { ...filter };
        updatedFilter.params.isDemo = checked ?? false;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return window.SP_REACT.createElement(DFL.ToggleField, { label: 'Is demo?', checked: filter.params.isDemo, onChange: onChange });
};
/**
 * The options for a coming soon filter.
 */
const ComingSoonFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    function onChange(checked) {
        const updatedFilter = { ...filter };
        updatedFilter.params.isComingSoon = checked ?? false;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return window.SP_REACT.createElement(DFL.ToggleField, { label: 'Is Coming Soon?', checked: filter.params.isComingSoon, onChange: onChange });
};
/**
 * The options for a streamable filter.
 */
const StreamableFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    function onChange(checked) {
        const updatedFilter = { ...filter };
        updatedFilter.params.isStreamable = checked ?? false;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return window.SP_REACT.createElement(DFL.ToggleField, { label: 'Is streamable?', checked: filter.params.isStreamable, onChange: onChange });
};
/**
 * The options for a cloud save filter.
 */
const SteamFeatureFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const dropdownOptions = STEAM_FEATURES_TO_RENDER.map((featureId) => {
        // @ts-ignore
        return { label: STEAM_FEATURES_ID_MAP[featureId.toString()].display_name, data: featureId };
    });
    const selected = filter.params.features.map((featureId) => {
        return {
            // @ts-ignore
            label: STEAM_FEATURES_ID_MAP[featureId.toString()].display_name,
            data: featureId,
        };
    });
    const featuresMode = filter.params.mode;
    function onChange(selected, mode) {
        const updatedFilter = { ...filter };
        updatedFilter.params.features = selected.map(featureEntry => featureEntry.data);
        updatedFilter.params.mode = mode;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(ModeMultiSelect, { fieldLabel: 'Selected Features', dropdownLabel: 'Add a feature', mode: featuresMode, options: dropdownOptions, selected: selected, onChange: onChange, entryLabel: 'Features', EntryIcon: FaSteam, TriggerIcon: FaListCheck }));
};
/**
 * The options for a achievements filter.
 */
const AchievementsFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const [value, setValue] = SP_REACT.useState(filter.params.threshold);
    const [thresholdType, setThresholdType] = SP_REACT.useState(filter.params.thresholdType);
    const [thresholdCondition, setThresholdCondition] = SP_REACT.useState(filter.params.condition);
    function updateFilter(threshold, threshCondition, threshType) {
        const updatedFilter = { ...filter };
        updatedFilter.params.threshold = threshold;
        updatedFilter.params.condition = threshCondition;
        updatedFilter.params.thresholdType = threshType;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    function onSliderChange(value) {
        updateFilter(value, thresholdCondition, thresholdType);
        setValue(value);
    }
    function onThreshConditionChange({ data: threshCondition }) {
        updateFilter(value, threshCondition, thresholdType);
        setThresholdCondition(threshCondition);
    }
    function onThreshTypeChange({ data: threshType }) {
        updateFilter(value, thresholdCondition, threshType);
        setThresholdType(threshType);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: `${value}${thresholdType === 'percent' ? '%' : ''} or ${thresholdCondition === 'above' ? 'more' : 'less'} achievements completed`, description: window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', flexDirection: 'row' } },
            window.SP_REACT.createElement(Slider, { value: value, min: 0, max: 100, onChange: onSliderChange }),
            window.SP_REACT.createElement("div", { style: { marginLeft: '12px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'At least', data: 'above' },
                        { label: 'At most', data: 'below' },
                    ], selectedOption: thresholdCondition, onChange: onThreshConditionChange })),
            window.SP_REACT.createElement("div", { style: { marginLeft: '12px' } },
                window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: [
                        { label: 'Count', data: 'count' },
                        { label: 'Percent', data: 'percent' },
                    ], selectedOption: thresholdType, onChange: onThreshTypeChange }))) }));
};
/**
 * The options for an sd card filter
 */
const SDCardFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const isMicroSDeckInstalled = SP_REACT.useMemo(() => MicroSDeckInterop.isInstallOk(), []);
    const cardsAndGames = window.MicroSDeck?.CardsAndGames || [];
    const dropdownOptions = [
        {
            label: 'Inserted Card',
            data: SdCardParamType.INSTALLED,
        },
        {
            label: 'Specific Card',
            options: cardsAndGames.map(([card]) => {
                return { label: card.name || card.uid, data: card.uid };
            }),
        },
        {
            label: 'Any Card',
            data: SdCardParamType.ANY,
        },
    ];
    function onChange({ data }) {
        const updatedFilter = { ...filter };
        updatedFilter.params.card = data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Micro SD Card', description: window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: dropdownOptions, selectedOption: filter.params.card ?? SdCardParamType.INSTALLED, onChange: onChange, disabled: !isMicroSDeckInstalled }) }) //^ back compat for undefined as installed card
    );
};
/**
 * The options for an installed folder filter.
 */
const InstallFolderFilterOptions = ({ index, setContainingGroupFilters, filter, containingGroupFilters, }) => {
    const collectionDropdownOptions = installFolderStore.AllInstallFolders.map(folder => {
        return {
            label: folder.strUserLabel || folder.strDriveName,
            data: folder.strDriveName,
        };
    });
    function onChange(data) {
        const updatedFilter = { ...filter };
        updatedFilter.params.driveName = data.data;
        const updatedFilters = [...containingGroupFilters];
        updatedFilters[index] = updatedFilter;
        setContainingGroupFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(DFL.Field, { label: 'Selected Install Folder', description: window.SP_REACT.createElement(ListSearchDropdown, { entryLabel: 'Install Folders', rgOptions: collectionDropdownOptions, selectedOption: filter.params.driveName, onChange: onChange, TriggerIcon: IoGrid, determineEntryIcon: entry => {
                if (entry.bIsDefaultFolder) {
                    return FaStar;
                }
                return FaFolder;
            } }) }));
};
/**
 * The options for an individual filter.
 */
const FilterOptions = ({ index, filter, containingGroupFilters, setContainingGroupFilters, }) => {
    if (filter) {
        const filterCopy = { ...filter, params: { ...filter.params } };
        switch (filter.type) {
            case 'collection':
                return (window.SP_REACT.createElement(CollectionFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'installed':
                return (window.SP_REACT.createElement(InstalledFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'regex':
                return (window.SP_REACT.createElement(RegexFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'friends':
                return (window.SP_REACT.createElement(FriendsFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'tags':
                return (window.SP_REACT.createElement(TagsFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'whitelist':
                return (window.SP_REACT.createElement(WhitelistFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'blacklist':
                return (window.SP_REACT.createElement(BlackListFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'merge':
                return (window.SP_REACT.createElement(MergeFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'platform':
                return (window.SP_REACT.createElement(PlatformFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'deck compatibility':
                return (window.SP_REACT.createElement(DeckCompatFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'steamos compatibility':
                return (window.SP_REACT.createElement(SteamOSCompatFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'review score':
                return (window.SP_REACT.createElement(ReviewScoreFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'time played':
                return (window.SP_REACT.createElement(TimePlayedFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'size on disk':
                return (window.SP_REACT.createElement(SizeOnDiskFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'release date':
                return (window.SP_REACT.createElement(ReleaseDateFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'purchase date':
                return (window.SP_REACT.createElement(PurchaseDateFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'last played':
                return (window.SP_REACT.createElement(LastPlayedFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'family sharing':
                return (window.SP_REACT.createElement(FamilySharingFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'demo':
                return (window.SP_REACT.createElement(DemoFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'coming soon':
                return (window.SP_REACT.createElement(ComingSoonFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'streamable':
                return (window.SP_REACT.createElement(StreamableFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'steam features':
                return (window.SP_REACT.createElement(SteamFeatureFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'achievements':
                return (window.SP_REACT.createElement(AchievementsFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'sd card':
                return (window.SP_REACT.createElement(SDCardFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            case 'install folder':
                return (window.SP_REACT.createElement(InstallFolderFilterOptions, { index: index, filter: filterCopy, containingGroupFilters: containingGroupFilters, setContainingGroupFilters: setContainingGroupFilters }));
            default:
                return window.SP_REACT.createElement(SP_REACT.Fragment, null);
        }
    }
    else {
        return window.SP_REACT.createElement(SP_REACT.Fragment, null);
    }
};

// THIS FILE IS AUTO GENERATED
function CgCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z","fill":"currentColor"}}]})(props);
}

/**
 * Filter Section accordion component
 */
const FilterSectionAccordion = ({ index, filter, isOpen, children }) => {
    const [open, setOpen] = SP_REACT.useState(isOpen);
    function onClick(e) {
        e.stopPropagation();
        playUISound('/sounds/deck_ui_misc_01.wav');
        setOpen(!open);
    }
    return (window.SP_REACT.createElement(DFL.Focusable, { style: { width: '100%', padding: '0' } },
        window.SP_REACT.createElement(DFL.Focusable, { className: 'filter-start-cont highlight-on-focus', focusClassName: 'start-focused', focusWithinClassName: 'start-focused' },
            window.SP_REACT.createElement(DFL.Button, { style: {
                    width: '100%',
                    padding: '0',
                    margin: '0',
                    background: 'transparent',
                    outline: 'none',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, onOKButton: onClick, onClick: onClick },
                window.SP_REACT.createElement("div", { className: 'filter-line', style: { width: `calc(${modalMargin} - 5px)` } }),
                window.SP_REACT.createElement("div", { className: 'filter-label', style: { display: 'flex', alignItems: 'center' } },
                    isValidParams(filter) ? (window.SP_REACT.createElement(CgCheck, { viewBox: '5 5 14 14', size: '0.9em', style: { marginRight: '3px', color: '#009e0eb3' } })) : (window.SP_REACT.createElement(FaXmark, { size: '0.9em', style: { marginRight: '3px' }, fill: '#ff0016a3' })),
                    "Filter ",
                    index + 1,
                    " - ",
                    capitalizeFirstLetter(filter.type),
                    filter.type === 'merge'
                        ? ` - mode: ${capitalizeFirstLetter(filter.params.mode)}`
                        : ''),
                window.SP_REACT.createElement("div", { className: 'filter-line', style: { flexGrow: '1' } }),
                window.SP_REACT.createElement(BiSolidDownArrow, { className: 'filter-accordion-arrow', style: {
                        transition: 'transform 0.2s ease-in-out',
                        transform: !open ? 'rotate(90deg)' : '',
                        fontSize: '0.8em',
                    } }),
                window.SP_REACT.createElement("div", { className: 'filter-line', style: { width: `calc(${modalMargin})` } }))),
        open && children));
};

const FiltersPanel = ({ groupFilters, groupLogicMode, setGroupFilters, setGroupLogicMode, addFilter, canAddFilter, shouldFocusAddButton, collapseFilters, }) => {
    const modeOptions = [
        { label: 'And', data: 'and' },
        { label: 'Or', data: 'or' },
    ];
    let newFilterWasAdded = SP_REACT.useRef(false);
    let deletedFilterIndex = SP_REACT.useRef(-1);
    function onAddFilter() {
        newFilterWasAdded.current = true;
        addFilter();
    }
    function onFilterDelete(index) {
        deletedFilterIndex.current = index;
    }
    SP_REACT.useEffect(() => {
        if (deletedFilterIndex.current !== -1)
            deletedFilterIndex.current = -1;
        if (newFilterWasAdded.current)
            newFilterWasAdded.current = false;
    });
    const element = (window.SP_REACT.createElement(DFL.Focusable, { style: { marginTop: '24px' } },
        window.SP_REACT.createElement(DFL.PanelSection, { title: 'Filters' },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement(DFL.Field, { label: 'Group Combination Logic', childrenLayout: 'inline', childrenContainerWidth: 'min', inlineWrap: 'keep-inline', className: 'no-sep' },
                    window.SP_REACT.createElement("div", { style: { width: '100px' } },
                        window.SP_REACT.createElement(DFL.Dropdown, { rgOptions: modeOptions, selectedOption: groupLogicMode, onChange: option => setGroupLogicMode(option.data), focusable: true })))),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null, groupFilters.map((filter, index) => {
                return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
                    window.SP_REACT.createElement(FilterSectionAccordion, { index: index, filter: filter, isOpen: (newFilterWasAdded.current
                            ? index === groupFilters.length - 1
                            : !collapseFilters) ||
                            (deletedFilterIndex.current !== -1 &&
                                (deletedFilterIndex.current !== groupFilters.length
                                    ? index === deletedFilterIndex.current
                                    : index === groupFilters.length - 1)) },
                        window.SP_REACT.createElement("div", { className: 'no-sep', key: `${filter.type}` },
                            window.SP_REACT.createElement("div", { className: 'no-sep' },
                                window.SP_REACT.createElement(DFL.Field, { label: 'Filter Type', description: window.SP_REACT.createElement(FilterEntry, { index: index, filter: filter, containingGroupFilters: groupFilters, setContainingGroupFilters: setGroupFilters, onFilterDelete: onFilterDelete, 
                                        // * if a new filter was just added, focus the last filter (the new one).
                                        // * or, if a filter was just deleted, if its the last filter, focus the new last one, otherwise focus the correct one.
                                        shouldFocus: (newFilterWasAdded.current &&
                                            index === groupFilters.length - 1) ||
                                            (deletedFilterIndex.current !== -1 &&
                                                (deletedFilterIndex.current !== groupFilters.length
                                                    ? index === deletedFilterIndex.current
                                                    : index === groupFilters.length - 1)) }) })),
                            window.SP_REACT.createElement("div", { className: 'no-sep' },
                                window.SP_REACT.createElement(FilterOptions, { index: index, filter: filter, containingGroupFilters: groupFilters, setContainingGroupFilters: setGroupFilters })))),
                    index == groupFilters.length - 1 ? (window.SP_REACT.createElement("div", { className: 'filter-start-cont', style: { marginTop: '8px' } },
                        window.SP_REACT.createElement("div", { className: 'filter-line' }))) : (window.SP_REACT.createElement(SP_REACT.Fragment, null))));
            })),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement("div", { className: 'styled-btn no-sep' },
                    !canAddFilter ? (window.SP_REACT.createElement("div", { style: { marginTop: '10px' } }, "Please finish the current filter before adding another")) : (window.SP_REACT.createElement(SP_REACT.Fragment, null)),
                    window.SP_REACT.createElement(DFL.ButtonItem, { onClick: onAddFilter, disabled: !canAddFilter }, "Add Filter"))))));
    if (shouldFocusAddButton) {
        // * wrap the whole panel in a focusable and one shot patch it to grab it's navNode and set focus to it's last child
        // * which is the add filter button
        DFL.afterPatch(element.type, 'render', (_, ret) => {
            setTimeout(() => ret.props.value.BFocusLastChild(3), 1);
            return ret;
        }, { singleShot: true });
    }
    return element;
};

/**
 * The modal for editing and creating custom tabs.
 */
const EditTabModal = ({ closeModal, onConfirm, tabId, tabTitle, tabFilters, tabMasterManager, filtersMode, categoriesToInclude, autoHide: _autoHide, visibleToOthers: _visibleToOthers, sortBy, }) => {
    const [name, setName] = SP_REACT.useState(tabTitle ?? '');
    const [topLevelFilters, setTopLevelFilters] = SP_REACT.useState(tabFilters);
    const [topLevelLogicMode, setTopLevelLogicMode] = SP_REACT.useState(filtersMode);
    const [catsToInclude, setCatsToInclude] = SP_REACT.useState(categoriesToInclude);
    const [canSave, setCanSave] = SP_REACT.useState(false);
    const [canAddFilter, setCanAddFilter] = SP_REACT.useState(true);
    const [patchInput, setPatchInput] = SP_REACT.useState(true);
    const [autoHide, setAutoHide] = SP_REACT.useState(_autoHide);
    const [visibleToOthers, setVisibleToOthers] = SP_REACT.useState(_visibleToOthers);
    const [sortByOverride, setSortByOverride] = SP_REACT.useState(sortBy);
    const sortOptions = useSortingMenuItems([]);
    const nameInputElement = window.SP_REACT.createElement(DFL.TextField, { value: name, placeholder: 'The title for this tab', onChange: onNameChange });
    //reference to input field class component instance, which has a focus method
    let inputComponentInstance;
    if (patchInput) {
        DFL.afterPatch(nameInputElement.type.prototype, 'render', function (_, ret) {
            //@ts-ignore     get reference to instance
            inputComponentInstance = this;
            return ret;
        }, { singleShot: true });
    }
    SP_REACT.useEffect(() => {
        inputComponentInstance.Focus();
        setPatchInput(false);
    }, []);
    SP_REACT.useEffect(() => {
        setCanSave(name != '' && topLevelFilters.length > 0 && canAddFilter);
    }, [name, topLevelFilters, canAddFilter]);
    SP_REACT.useEffect(() => {
        setCanAddFilter(topLevelFilters.length == 0 || topLevelFilters.every(filter => isValidParams(filter)));
    }, [topLevelFilters]);
    function onNameChange(e) {
        setName(e?.target.value);
    }
    function onSave() {
        if (canSave) {
            const updated = {
                title: name,
                filters: topLevelFilters,
                filtersMode: topLevelLogicMode,
                categoriesToInclude: catsToInclude,
                autoHide: autoHide,
                sortByOverride: sortByOverride,
                visibleToOthers: visibleToOthers,
            };
            onConfirm(tabId, updated);
            closeModal();
        }
        else {
            if (!canAddFilter)
                PythonInterop.toast('Cannot Save Tab', 'Some filters are incomplete');
            else
                PythonInterop.toast('Cannot Save Tab', 'Please add a name and at least 1 filter');
        }
    }
    function addFilter() {
        const updatedFilters = [...topLevelFilters];
        updatedFilters.push({
            type: 'collection',
            inverted: false,
            params: FilterDefaultParams().collection,
        });
        setTopLevelFilters(updatedFilters);
    }
    return (window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
        window.SP_REACT.createElement(ModalStyles, null),
        window.SP_REACT.createElement("div", { className: 'tab-master-modal-scope' },
            window.SP_REACT.createElement(DFL.ConfirmModal, { bAllowFullSize: true, onCancel: closeModal, onEscKeypress: closeModal, strTitle: tabTitle ? `Modifying: ${tabTitle}` : 'Create New Tab', onOK: onSave, strOKButtonText: 'Save' },
                window.SP_REACT.createElement(DFL.Focusable, { onMenuButton: onSave, onMenuActionDescription: 'Save' },
                    window.SP_REACT.createElement("div", { style: { padding: '4px 16px 1px' }, className: 'name-field' },
                        window.SP_REACT.createElement(DFL.Field, { description: window.SP_REACT.createElement(SP_REACT.Fragment, null,
                                window.SP_REACT.createElement("div", { style: { paddingBottom: '6px' }, className: DFL.quickAccessControlsClasses.PanelSectionTitle }, "Name"),
                                nameInputElement) })),
                    window.SP_REACT.createElement(IncludeCategoriesPanel, { categoriesToInclude: catsToInclude, setCategoriesToInclude: setCatsToInclude }),
                    window.SP_REACT.createElement("div", { className: 'field-item-container' },
                        window.SP_REACT.createElement(DFL.ToggleField, { label: 'Automatically hide tab if empty', checked: autoHide, onChange: checked => setAutoHide(checked), bottomSeparator: 'thick' }),
                        window.SP_REACT.createElement(DFL.ToggleField, { label: 'Other users can copy this tab', checked: visibleToOthers, onChange: checked => setVisibleToOthers(checked), bottomSeparator: 'thick' }),
                        window.SP_REACT.createElement(DFL.DropdownItem, { label: 'Sort apps by', rgOptions: sortOptions, selectedOption: sortByOverride, onChange: option => setSortByOverride(option.data), bottomSeparator: 'thick' })),
                    window.SP_REACT.createElement(FiltersPanel, { groupFilters: topLevelFilters, setGroupFilters: setTopLevelFilters, addFilter: addFilter, groupLogicMode: topLevelLogicMode, setGroupLogicMode: setTopLevelLogicMode, canAddFilter: canAddFilter, collapseFilters: !!tabTitle }))))));
};
/**
 * Section for selecting categories to include in tab
 */
const IncludeCategoriesPanel = ({ categoriesToInclude, setCategoriesToInclude }) => {
    const [isOpen, setIsOpen] = SP_REACT.useState(false);
    const catsToIncludeObj = getIncludedCategoriesFromBitField(categoriesToInclude);
    const showHiddenCat = Object.entries(catsToIncludeObj)
        .filter(([cat]) => cat !== 'hidden')
        .some(([_cat, checked]) => checked);
    const getCatLabel = (category) => (category === 'music' ? 'Soundtracks' : capitalizeFirstLetter(category));
    let catStrings = [];
    for (const cat in catsToIncludeObj) {
        const include = catsToIncludeObj[cat];
        include && (cat !== 'hidden' || showHiddenCat) && catStrings.push(getCatLabel(cat));
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement("div", null,
            window.SP_REACT.createElement(DFL.Focusable, { style: { margin: '0 calc(-12px - 1.4vw)' }, onActivate: () => {
                    playUISound('/sounds/deck_ui_misc_01.wav');
                    setIsOpen(isOpen => !isOpen);
                }, noFocusRing: true, className: 'highlight-on-focus', focusClassName: 'start-focused' },
                window.SP_REACT.createElement("div", { style: { margin: '0 calc(12px + 1.4vw)', padding: '0 16px' } },
                    window.SP_REACT.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        window.SP_REACT.createElement("div", { style: { padding: '12px 0', float: 'left' }, className: DFL.quickAccessControlsClasses.PanelSectionTitle }, "Include in tab"),
                        window.SP_REACT.createElement("div", { style: { padding: '12px 40px', flex: '1' } }, !isOpen && (window.SP_REACT.createElement("span", { style: { fontSize: '12px', lineHeight: '12px', color: '#8b929a' } }, catStrings.join(', ')))),
                        window.SP_REACT.createElement("div", { style: { paddingRight: '10px', display: 'flex', alignItems: 'center' } },
                            window.SP_REACT.createElement(BiSolidDownArrow, { style: {
                                    transform: !isOpen ? 'rotate(90deg)' : '',
                                    transition: 'transform 0.2s ease-in-out',
                                } }))))),
            isOpen && (window.SP_REACT.createElement("div", { style: { padding: '10px 18px' } }, Object.entries(catsToIncludeObj).map(([category, shouldInclude]) => {
                const label = getCatLabel(category);
                const onChange = (checked) => {
                    playUISound(checked
                        ? '/sounds/deck_ui_switch_toggle_on.wav'
                        : '/sounds/deck_ui_switch_toggle_off.wav');
                    setCategoriesToInclude(currentCatsBitField => updateCategoriesToIncludeBitField(currentCatsBitField, { [category]: checked }));
                };
                return category === 'hidden' && !showHiddenCat ? null : (window.SP_REACT.createElement(DFL.DialogCheckbox, { checked: shouldInclude, onChange: onChange, label: label }));
            })))),
        window.SP_REACT.createElement("div", { style: {
                position: 'relative',
                left: 'calc(16px - 1.8vw)',
                right: 'calc(16px - 1.8vw)',
                height: '1px',
                background: '#ffffff1a',
            } })));
};
/**
 * Function to show the EditTabModal when creating a new tab.
 * @param tabMasterManager TabMasterManager instance.
 */
function showModalNewTab(tabMasterManager) {
    DFL.showModal(window.SP_REACT.createElement(EditTabModal, { onConfirm: (_, tabSettings) => {
            tabMasterManager.createCustomTab(tabSettings.title, tabMasterManager.getTabs().visibleTabsList.length, tabSettings.filters, tabSettings.filtersMode, tabSettings.categoriesToInclude, tabSettings.autoHide, tabSettings.visibleToOthers, tabSettings.sortByOverride);
        }, tabFilters: [], tabMasterManager: tabMasterManager, filtersMode: 'and', categoriesToInclude: IncludeCategories.games, autoHide: false, visibleToOthers: false, sortBy: -1 }));
}
/**
 * Function to show the EditTabModal when duplicating a tab.
 * @param tabContainer CustomTabContainer to duplicate.
 * @param tabMasterManager TabMasterManager instance.
 */
function showModalDuplicateTab(tabContainer, tabMasterManager) {
    DFL.showModal(window.SP_REACT.createElement(EditTabModal, { onConfirm: (_, tabSettings) => {
            tabMasterManager.createCustomTab(tabSettings.title, tabMasterManager.getTabs().visibleTabsList.length, tabSettings.filters, tabSettings.filtersMode, tabSettings.categoriesToInclude, tabSettings.autoHide, tabSettings.visibleToOthers, tabSettings.sortByOverride);
        }, tabMasterManager: tabMasterManager, tabFilters: structuredClone(tabContainer.filters), filtersMode: tabContainer.filtersMode, categoriesToInclude: tabContainer.categoriesToInclude, autoHide: tabContainer.autoHide, visibleToOthers: tabContainer.visibleToOthers, sortBy: tabContainer.sortByOverride }));
}
/**
 * Function to show the EditTabModal when editing a tab.
 * @param tabContainer CustomTabContainer to edit.
 * @param tabMasterManager TabMasterManager instance.
 */
function showModalEditTab(tabContainer, tabMasterManager) {
    DFL.showModal(window.SP_REACT.createElement(EditTabModal, { onConfirm: (tabId, updatedTabSettings) => {
            tabMasterManager.updateCustomTab(tabId, updatedTabSettings);
        }, tabId: tabContainer.id, tabTitle: tabContainer.title, tabFilters: tabContainer.filters, tabMasterManager: tabMasterManager, filtersMode: tabContainer.filtersMode, categoriesToInclude: tabContainer.categoriesToInclude, autoHide: tabContainer.autoHide, visibleToOthers: tabContainer.visibleToOthers, sortBy: tabContainer.sortByOverride }));
}

/**
 * CSS styling for the Library Context Menu part of TabMaster.
 */
const LibraryMenuStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .${DFL.gamepadContextMenuClasses.BasicContextMenuHeader} {
        margin: 0;
      }

      .tab-master-library-menu-reorderable-group .tab-label-cont {
        display: flex;
        align-items: center;
        margin-left: 12px;
      }
      
      .tab-master-library-menu-reorderable-group .tab-label-cont .tab-label {
        margin-right: 5px;
      }
    `));
};

const PresetMenu = ({ tabMasterManager, isMicroSDeckInstalled }) => {
    return (window.SP_REACT.createElement(DFL.Menu, { label: 'Quick Tabs' },
        window.SP_REACT.createElement(PresetMenuItems, { tabMasterManager: tabMasterManager, isMicroSDeckInstalled: isMicroSDeckInstalled })));
};
const PresetMenuItems = ({ tabMasterManager, isMicroSDeckInstalled }) => {
    function getActionDescription(name) {
        return { onOKActionDescription: `Create Tab "${name}"` };
    }
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null, presetKeys.map(presetName => {
        switch (presetName) {
            case 'collection':
                return (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Collection' }, collectionStore.userCollections
                    .concat([{ displayName: 'Hidden', id: 'hidden' }])
                    .map(({ displayName, id }) => (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, displayName, id, displayName), ...getActionDescription(displayName) }, displayName)))));
            case 'installation':
                return (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Installation' }, ['Installed', 'Not Installed'].map(tabName => (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, tabName, tabName === 'Installed'), ...getActionDescription(tabName) }, tabName)))));
            case 'deck compatibility':
                return (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Deck Compatibility' }, [0, 1, 2, 3].map(level => {
                    const tabName = compatCategoryToLabel(level);
                    return (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, tabName, level), ...getActionDescription(tabName) }, tabName));
                })));
            case 'platform':
                return (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Platform' }, ['steam', 'nonSteam'].map(platform => {
                    const tabName = platform === 'nonSteam' ? 'Non Steam' : 'Steam';
                    return (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, tabName, platform), ...getActionDescription(tabName) }, tabName));
                })));
            case 'micro sd card':
                return (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Micro SD Card', disabled: !isMicroSDeckInstalled },
                    window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, 'Inserted Card'), ...getActionDescription('Inserted Card') }, "Inserted Card"),
                    window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Specific Card' }, window.MicroSDeck?.CardsAndGames.map(([card]) => {
                        const tabName = card.name || card.uid;
                        return (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, tabName, card.uid), ...getActionDescription(tabName) }, tabName));
                    }))));
            default:
                const tabName = capitalizeEachWord(presetName);
                return (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.createPresetTab(presetName, tabName), ...getActionDescription(tabName) }, tabName));
        }
    })));
};

/**
 * Tab name and associated icons, used where tabs are listed in QAM and Library menu.
 */
const TabListLabel = ({ tabContainer, microSDeckDisabled, style }) => {
    return (window.SP_REACT.createElement("div", { style: { display: 'flex', alignItems: 'center', width: '100%', ...style } },
        window.SP_REACT.createElement("div", { style: { marginRight: '5px' } }, tabContainer.title),
        tabContainer.filters ? (tabContainer.dependsOnMicroSDeck ? (window.SP_REACT.createElement(FaSdCard, { fill: microSDeckDisabled ? '#92939b61' : 'currentColor' })) : (window.SP_REACT.createElement(SP_REACT.Fragment, null))) : (window.SP_REACT.createElement(FaSteam, null)),
        tabContainer.position !== -1 &&
            tabContainer.autoHide &&
            tabContainer.collection.visibleApps.length === 0 && (window.SP_REACT.createElement(BiSolidHide, { style: { marginLeft: 'auto' } }))));
};

// New modal background should be "radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%)"
/**
 * CSS styling for TabMaster's Tab profile modals.
 */
const TabProfileModalStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .tab-master-tab-profile-modal-scope .${DFL.gamepadDialogClasses.GamepadDialogContent} .DialogHeader {
        margin-left: 15px;
      }

      .tab-master-tab-profile-modal-scope .${DFL.gamepadDialogClasses.ModalPosition} > .${DFL.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }
      
      /* The button item */
      .tab-master-tab-profile-modal-scope .styled-btn {
        padding: 0 !important;
      }
      .tab-master-tab-profile-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-tab-profile-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-tab-profile-modal-scope .styled-btn .${DFL.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: 100%;
      }

      /* The button item wrapper */
      .tab-master-tab-profile-modal-scope .name-field .${DFL.gamepadDialogClasses.Field} {
        padding-bottom: 16px;
        padding-top: 0px;
      }
      .tab-master-tab-profile-modal-scope .${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        left: 1vw;
        right: 1vw;
      }
      
      /* Focused styles */
      .tab-master-tab-profile-modal-scope .start-focused {
        background-color: rgba(255, 255, 255, 0.15);
        animation-name: gamepaddialog_ItemFocusAnim-darkGrey_2zfa-;
      }
      .tab-master-tab-profile-modal-scope .highlight-on-focus {
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.45, 0.14, 0.83);
      }
    `));
};

const ScrollableWindow = ({ height, fadeAmount, scrollBarWidth, alwaysFocus, noScrollDescription, children, actionDescriptionMap, ...focusableProps }) => {
    const fade = fadeAmount === undefined || fadeAmount === '' ? '10px' : fadeAmount;
    const barWidth = scrollBarWidth === undefined || scrollBarWidth === '' ? '4px' : scrollBarWidth;
    const [isOverflowing, setIsOverflowing] = SP_REACT.useState(false);
    const scrollPanelRef = SP_REACT.useRef();
    SP_REACT.useLayoutEffect(() => {
        const { current } = scrollPanelRef;
        const trigger = () => {
            if (current) {
                const hasOverflow = current.scrollHeight > current.clientHeight;
                setIsOverflowing(hasOverflow);
            }
        };
        if (current)
            trigger();
    }, [children, height]);
    const panel = (window.SP_REACT.createElement(DFL.ScrollPanelGroup
    //@ts-ignore
    , { 
        //@ts-ignore
        ref: scrollPanelRef, focusable: false, style: { flex: 1, minHeight: 0 } },
        window.SP_REACT.createElement(DFL.Focusable, { key: 'scrollable-window-focusable-element', noFocusRing: true, actionDescriptionMap: Object.assign(noScrollDescription
                ? {}
                : {
                    [DFL.GamepadButton.DIR_UP]: 'Scroll Up',
                    [DFL.GamepadButton.DIR_DOWN]: 'Scroll Down',
                }, actionDescriptionMap ?? {}), 
            //@ts-ignore
            focusable: alwaysFocus || isOverflowing, ...focusableProps }, children)));
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement("style", null, `.modal-position-container .${DFL.gamepadDialogClasses.ModalPosition} {
          top: 0;
          bottom: 0;
          padding: 0;
        }
        .modal-position-container .${DFL.scrollPanelClasses.ScrollPanel}::-webkit-scrollbar {
          display: initial !important;
          width: ${barWidth};
        }
        .modal-position-container .${DFL.scrollPanelClasses.ScrollPanel}::-webkit-scrollbar-thumb {
          border: 0;
        }
        .modal-position-container .${DFL.scrollPanelClasses.ScrollPanel}.gpfocuswithin::-webkit-scrollbar-thumb {
          background-color: currentColor;
        }`),
        window.SP_REACT.createElement("div", { className: 'modal-position-container', style: {
                position: 'relative',
                height: height,
                WebkitMask: `linear-gradient(to right , transparent, transparent calc(100% - ${barWidth}), white calc(100% - ${barWidth})), linear-gradient(to bottom, transparent, black ${fade}, black calc(100% - ${fade}), transparent 100%)`,
            } }, isOverflowing ? (window.SP_REACT.createElement(DFL.ModalPosition, { key: 'scrollable-window-modal-position' }, panel)) : (window.SP_REACT.createElement("div", { className: `${DFL.gamepadDialogClasses.ModalPosition} ${DFL.gamepadDialogClasses.WithStandardPadding} Panel`, key: 'modal-position' }, panel)))));
};

const CreateTabProfileModal = ({ tabMasterManager, closeModal }) => {
    const [name, setName] = SP_REACT.useState('');
    const visibleTabs = tabMasterManager.getTabs().visibleTabsList;
    function onNameChange(e) {
        setName(e?.target.value);
    }
    return (window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
        window.SP_REACT.createElement(TabProfileModalStyles, null),
        window.SP_REACT.createElement("div", { className: 'tab-master-tab-profile-modal-scope' },
            window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: 'Create New Tab Profile', onOK: () => {
                    tabMasterManager.tabProfileManager?.write(name, visibleTabs.map(tabContainer => tabContainer.id));
                    closeModal();
                }, onCancel: () => closeModal() },
                window.SP_REACT.createElement("div", { style: { padding: '4px 16px 1px' }, className: 'name-field' },
                    window.SP_REACT.createElement(DFL.Field, { description: window.SP_REACT.createElement(SP_REACT.Fragment, null,
                            window.SP_REACT.createElement("div", { style: { paddingBottom: '6px' }, className: DFL.quickAccessControlsClasses.PanelSectionTitle }, "Profile Name"),
                            window.SP_REACT.createElement(DFL.TextField, { value: name, placeholder: 'The name of this tab profile', onChange: onNameChange })) })),
                window.SP_REACT.createElement("div", { style: { marginRight: '-4px' } },
                    window.SP_REACT.createElement(ScrollableWindow, { height: '180px', fadeAmount: '12px', onCancel: () => closeModal() },
                        window.SP_REACT.createElement("div", { style: { padding: '0 20px' } }, visibleTabs.map(tabContainer => (window.SP_REACT.createElement(TabItem, null,
                            window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: false })))))))))));
};
const OverwriteTabProfileModal = ({ profileName, tabMasterManager, closeModal, }) => {
    const { visibleTabsList, tabsMap } = tabMasterManager.getTabs();
    const existingTabs = tabMasterManager.tabProfileManager.tabProfiles[profileName].map(tabId => tabsMap.get(tabId));
    return (window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
        window.SP_REACT.createElement(TabProfileModalStyles, null),
        window.SP_REACT.createElement("div", { className: 'tab-master-tab-profile-modal-scope' },
            window.SP_REACT.createElement(DestructiveModal, { strTitle: `Overwriting Profile: ${profileName}`, onOK: () => {
                    tabMasterManager.tabProfileManager?.write(profileName, visibleTabsList.map(tabContainer => tabContainer.id));
                    closeModal();
                }, onCancel: () => closeModal() },
                window.SP_REACT.createElement("div", null,
                    window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'row', padding: '0 20px', gap: '30px' } },
                        window.SP_REACT.createElement("div", { className: DFL.quickAccessControlsClasses.PanelSectionTitle, style: { flex: 1, paddingBottom: 0 } }, "New Tabs"),
                        window.SP_REACT.createElement("div", { className: DFL.quickAccessControlsClasses.PanelSectionTitle, style: { flex: 1, paddingBottom: 0 } }, "Existing Tabs")),
                    window.SP_REACT.createElement("div", { style: { height: '1.5px', background: '#ffffff1a' } }),
                    window.SP_REACT.createElement("div", { style: { marginRight: '-4px' } },
                        window.SP_REACT.createElement(ScrollableWindow, { height: '200px', fadeAmount: '12px', onCancel: () => closeModal() },
                            window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'row', padding: '0 20px', gap: '30px' } },
                                window.SP_REACT.createElement("div", { style: { flex: 1 } }, visibleTabsList.map(tabContainer => (window.SP_REACT.createElement(TabItem, null,
                                    window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: false }))))),
                                window.SP_REACT.createElement("div", { style: { flex: 1 } }, existingTabs.map(tabContainer => (window.SP_REACT.createElement(TabItem, null,
                                    window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: false })))))))))))));
};
const TabItem = ({ children }) => {
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement("div", { style: { padding: '0 15px', height: '28px', display: 'flex', fontSize: 'small' } }, children),
        window.SP_REACT.createElement("div", { style: { height: '.5px', background: '#ffffff1a' } })));
};

/**
 * Context menu for managing Tab Profiles.
 */
const TabProfilesMenu = ({ tabMasterManager }) => {
    return (window.SP_REACT.createElement(DFL.Menu, { label: 'Manage Tab Profiles' },
        window.SP_REACT.createElement(TabProfileMenuItems, { tabMasterManager: tabMasterManager })));
};
/**
 * Context menu sub-menu for managing Tab Profiles.
 */
const TabProfilesSubMenu = ({ tabMasterManager }) => {
    return (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Manage Tab Profiles' },
        window.SP_REACT.createElement(TabProfileMenuItems, { tabMasterManager: tabMasterManager })));
};
/**
 * Menu items for the Tab Profiles context menu.
 */
const TabProfileMenuItems = ({ tabMasterManager }) => {
    const [_refresh, setRefresh] = SP_REACT.useState(true);
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => DFL.showModal(window.SP_REACT.createElement(CreateTabProfileModal, { tabMasterManager: tabMasterManager })) }, "Create Profile"),
        window.SP_REACT.createElement("div", { className: DFL.gamepadContextMenuClasses.ContextMenuSeparator }),
        Object.keys(tabMasterManager.tabProfileManager?.tabProfiles ?? {}).map(profileName => {
            return (window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.tabProfileManager?.apply(profileName, tabMasterManager), actionDescriptionMap: {
                    [DFL.GamepadButton.OK]: 'Apply Profile',
                    [DFL.GamepadButton.SECONDARY]: 'Delete Profile', //X
                    [DFL.GamepadButton.OPTIONS]: 'Overwrite Profile', //Y
                }, onSecondaryButton: () => DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: () => {
                        tabMasterManager.tabProfileManager?.delete(profileName);
                        setRefresh(cur => !cur);
                    }, strTitle: `Deleting Profile: ${profileName}` }, "Are you sure you want to delete this profile?")), onOptionsButton: () => DFL.showModal(window.SP_REACT.createElement(OverwriteTabProfileModal, { profileName: profileName, tabMasterManager: tabMasterManager })) }, profileName));
        })));
};

const AddCollectionModal = DFL.findModuleExport(modExport => {
    if (modExport?.toString().includes('"#GameAction_NewCollectionDialogTitle"'))
        return modExport;
});
const showAddCollectionModal = (apps) => AddCollectionModal(window, apps, 'context-menu');

/**
 * The library context menu for configuring tab master.
 */
const LibraryMenu = ({ closeMenu, selectedTabId, tabMasterManager }) => {
    const isMicroSDeckInstalled = MicroSDeckInterop.isInstallOk();
    return (window.SP_REACT.createElement(DFL.Menu
    //@ts-ignore
    , { 
        //@ts-ignore
        label: window.SP_REACT.createElement("div", null,
            window.SP_REACT.createElement("h3", { style: { margin: 0 } }, "Tab Master"),
            window.SP_REACT.createElement("small", null, tabMasterManager.getTabs().tabsMap.get(selectedTabId)?.title)) },
        window.SP_REACT.createElement(LibraryMenuStyles, null),
        window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
            window.SP_REACT.createElement(LibraryMenuItems, { selectedTabId: selectedTabId, closeMenu: closeMenu, isMicroSDeckInstalled: isMicroSDeckInstalled }))));
};
/**
 * The menu items for the library context menu (in a separate component to manage state correctly)
 */
const LibraryMenuItems = ({ selectedTabId, closeMenu, isMicroSDeckInstalled }) => {
    const { tabsMap, visibleTabsList, hiddenTabsList, tabMasterManager } = useTabMasterContext();
    const tabTitle = tabMasterManager.getTabs().tabsMap.get(selectedTabId)?.title;
    const tabContainer = tabsMap.get(selectedTabId);
    const isCustomTab = !!tabContainer?.filters;
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.MenuItem
        //@ts-ignore
        , { 
            //@ts-ignore
            className: DFL.gamepadContextMenuClasses.Positive, onOKActionDescription: 'Add Tab', onClick: () => showModalNewTab(tabMasterManager) }, "Add Tab"),
        window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Quick Tabs' },
            window.SP_REACT.createElement(PresetMenuItems, { tabMasterManager: tabMasterManager, isMicroSDeckInstalled: isMicroSDeckInstalled })),
        window.SP_REACT.createElement("div", { className: DFL.gamepadContextMenuClasses.ContextMenuSeparator }),
        window.SP_REACT.createElement(TabProfilesSubMenu, { tabMasterManager: tabMasterManager }),
        window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Reorder Tabs' },
            window.SP_REACT.createElement(DFL.Focusable, { style: { width: '240px', background: '#23262e', margin: '0' }, className: 'tab-master-library-menu-reorderable-group', onOKActionDescription: '' },
                window.SP_REACT.createElement(DFL.ReorderableList, { entries: visibleTabsList.map(tabContainer => {
                        return {
                            label: (window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: !isMicroSDeckInstalled, style: { marginLeft: '12px' } })),
                            position: tabContainer.position,
                            data: { id: tabContainer.id },
                        };
                    }), onSave: (entries) => {
                        const currentOrder = visibleTabsList
                            .sort((a, b) => a.position - b.position)
                            .map(entry => entry.id);
                        const newOrder = entries.map(entry => entry.data.id);
                        if (JSON.stringify(currentOrder) !== JSON.stringify(newOrder))
                            tabMasterManager.reorderTabs(newOrder);
                    } }))),
        hiddenTabsList.length > 0 && (window.SP_REACT.createElement(DFL.MenuGroup, { label: 'Unhide Tabs', disabled: hiddenTabsList.length === 0 },
            window.SP_REACT.createElement(HiddenItems, { onSelectTab: id => tabMasterManager.showTab(id), hiddenTabsList: hiddenTabsList, isMicroSDeckInstalled: isMicroSDeckInstalled }))),
        window.SP_REACT.createElement("div", { className: DFL.gamepadContextMenuClasses.ContextMenuSeparator }),
        isCustomTab && (window.SP_REACT.createElement(DFL.MenuItem, { onOKActionDescription: `Edit "${tabTitle}"`, onClick: () => showModalEditTab(tabContainer, tabMasterManager) }, "Edit")),
        isCustomTab && (window.SP_REACT.createElement(DFL.MenuItem, { onOKActionDescription: `Duplicate "${tabTitle}"`, onClick: () => showModalDuplicateTab(tabContainer, tabMasterManager) }, "Duplicate")),
        isCustomTab && (window.SP_REACT.createElement(DFL.MenuItem, { onOKActionDescription: `Create a collection from this tab`, onClick: () => {
                const customTab = tabContainer;
                customTab.buildCollection();
                showAddCollectionModal(customTab.collection.allApps);
            } }, "Snapshot")),
        window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => tabMasterManager.hideTab(selectedTabId), onOKActionDescription: `Hide "${tabTitle}"` }, "Hide"),
        isCustomTab && (window.SP_REACT.createElement(DFL.MenuItem, { onOKActionDescription: `Delete "${tabTitle}"`, 
            //@ts-ignore
            className: DFL.gamepadContextMenuClasses.Destructive, onClick: () => {
                const closeModal = () => { };
                DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: () => {
                        tabMasterManager.deleteTab(selectedTabId);
                        closeMenu();
                    }, closeModal: closeModal, strTitle: 'WARNING!' }, "Are you sure you want to delete this Tab? This can't be undone."));
            } }, "Delete"))));
};
/**
 * The group of hidden tab menu items
 */
const HiddenItems = ({ hiddenTabsList, isMicroSDeckInstalled, onSelectTab }) => {
    const [_refresh, setRefresh] = SP_REACT.useState(true);
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null, hiddenTabsList.map(tabContainer => (window.SP_REACT.createElement(MenuItemNoClose, { onOKActionDescription: 'Unhide', onClick: () => {
            onSelectTab(tabContainer.id);
            setRefresh(refresh => !refresh);
        } },
        window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: !isMicroSDeckInstalled }))))));
};
/**
 * Menu items that won't automatically close the menu when clicking
 */
const MenuItemNoClose = ({ onClick, disabled, className, children, ...props }) => {
    return (window.SP_REACT.createElement(DFL.Focusable, { className: `${DFL.gamepadContextMenuClasses.contextMenuItem} contextMenuItem` +
            (className ? ` ${className}` : '') +
            (disabled ? ' disabled' : ''), focusClassName: DFL.gamepadContextMenuClasses.Focused, onActivate: disabled ? undefined : onClick, noFocusRing: true, ...props }, children));
};

let TabAppGridComponent;
/**
 * Patches the Steam library to allow the plugin to change the tabs.
 * @param serverAPI The plugin's serverAPI.
 * @param tabMasterManager The plugin's core state manager.
 * @returns A routepatch for the library.
 */
const patchLibrary = (tabMasterManager) => {
    return addPatch('/library', (props) => {
        DFL.afterPatch(props.children, 'type', (_, ret1) => {
            if (!ret1?.type) {
                LogController.raiseError('Failed to find outer library element to patch');
                return ret1;
            }
            const [refresh, setRefresh] = SP_REACT.useState(false);
            let innerPatch;
            let memoCache;
            SP_REACT.useEffect(() => {
                tabMasterManager.registerRerenderLibraryHandler(() => setRefresh(!refresh));
                return innerPatch.unpatch();
            });
            const isMicroSDeckInstalled = MicroSDeckInterop.isInstallOk(true);
            //* This patch always runs twice
            DFL.afterPatch(ret1, 'type', (_, ret2) => {
                if (!ret2?.type) {
                    LogController.raiseError('Failed to find inner library element to patch');
                    return ret2;
                }
                if (memoCache) {
                    ret2.type = memoCache;
                }
                else {
                    // @ts-ignore
                    const origMemoComponent = ret2.type.type;
                    // @ts-ignore
                    DFL.wrapReactType(ret2);
                    //* This runs once for every outer run
                    innerPatch = DFL.replacePatch(ret2.type, 'type', args => {
                        const hooks = window.SP_REACT?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                            ?.ReactCurrentDispatcher?.current ||
                            Object.values(window.SP_REACT
                                ?.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE).find((p) => p?.useEffect);
                        const realUseMemo = hooks.useMemo;
                        //* deps contains useful variables from within the orignal component that we otherwise wouldn't be able to get
                        const fakeUseMemo = (fn, deps) => {
                            return realUseMemo(() => {
                                let tabs = fn();
                                if (!Array.isArray(tabs)) {
                                    LogController.raiseError('No array returned when trying to retrieve default tabs');
                                    return tabs;
                                }
                                const [eSortBy, setSortBy, showSortingContextMenu] = deps;
                                const sortingProps = { eSortBy, setSortBy, showSortingContextMenu };
                                const collectionsAppFilterGamepad = deps[7];
                                let tabTemplate = tabs[0].find((tab) => tab?.id === 'AllGames');
                                if (tabTemplate === undefined) {
                                    LogController.raiseError(`Couldn't find default tab "AllGames" to copy from`);
                                    return tabs;
                                }
                                const TabAppGrid = TabAppGridComponent ??
                                    DFL.findInReactTree(tabTemplate.content, elt => elt.type && elt.type.toString?.().includes('Library_FilteredByHeader'))?.type;
                                if (TabAppGrid === undefined) {
                                    LogController.raiseError(`Couldn't find Tab component`);
                                    return tabs;
                                }
                                else {
                                    if (!TabAppGridComponent)
                                        TabAppGridComponent = TabAppGrid;
                                }
                                const TabContext = tabTemplate.content.type._context;
                                let pacthedTabs;
                                if (tabMasterManager.hasSettingsLoaded) {
                                    let tablist = tabMasterManager.getTabs().visibleTabsList;
                                    pacthedTabs = tablist.flatMap(tabContainer => {
                                        if (tabContainer.filters) {
                                            const footer = {
                                                ...(tabTemplate.footer ?? {}),
                                                onMenuButton: getShowMenu(tabContainer.id, tabMasterManager),
                                                onMenuActionDescription: 'Tab Master',
                                            };
                                            return (tabContainer.getActualTab(TabAppGrid, TabContext, sortingProps, footer, collectionsAppFilterGamepad, isMicroSDeckInstalled) || []);
                                        }
                                        else {
                                            return (tabs[0].find(actualTab => {
                                                if (actualTab.id === tabContainer.id) {
                                                    if (!actualTab.footer)
                                                        actualTab.footer = {};
                                                    actualTab.footer.onMenuActionDescription = 'Tab Master';
                                                    actualTab.footer.onMenuButton = getShowMenu(tabContainer.id, tabMasterManager);
                                                    return true;
                                                }
                                                return false;
                                            }) ?? []);
                                        }
                                    });
                                }
                                else {
                                    pacthedTabs = tabs[0];
                                }
                                return [pacthedTabs, tabs[1]];
                            }, deps);
                        };
                        hooks.useMemo = fakeUseMemo;
                        const res = origMemoComponent(...args);
                        hooks.useMemo = realUseMemo;
                        return res;
                    });
                    memoCache = ret2.type;
                }
                return ret2;
            });
            return ret1;
        });
        return props;
    });
};
/**
 * Get's the fn to show library menu for each tab.
 * @param id Tab container id.
 * @param tabMasterManager TabMasterManager instance.
 */
function getShowMenu(id, tabMasterManager) {
    return () => {
        let menu;
        const menuElement = (window.SP_REACT.createElement(LibraryMenu, { selectedTabId: id, tabMasterManager: tabMasterManager, closeMenu: () => menu.Hide() }));
        //@ts-ignore
        menu = DFL.showContextMenu(menuElement);
    };
}

const findHome = (root) => {
    const filter = (node) => node?.type?.toString?.().includes('#HomeSettings_ShowingLess');
    return DFL.findInTree(root, filter, { walkable: ['props', 'children', 'pages', 'content'] });
};
const patchSettings = (tabMasterManager) => {
    return addPatch('/settings', (props) => {
        DFL.afterPatch(props.children, 'type', (_, ret1) => {
            if (!ret1?.type) {
                LogController.raiseError('Failed to find settings element to patch');
                return ret1;
            }
            let firstCache;
            let secondCache;
            if (firstCache) {
                ret1.type = firstCache;
                return ret1;
            }
            DFL.afterPatch(ret1, 'type', (_, ret2) => {
                //try to get as close to the element using the known path
                const homePage = ret2?.props?.children?.props?.pages?.find((obj) => obj.route === '/settings/home');
                if (!homePage)
                    LogController.warn('Location of "home" page setting has changed'); //log so we know if valve changes it
                //if the known path has changed try searching from the top of this element
                const homeElement = findHome(homePage ?? ret2);
                if (!homeElement) {
                    LogController.raiseError("Couldn't find home element to patch in settings");
                    return ret2;
                }
                if (secondCache) {
                    homeElement.type = secondCache;
                    return ret2;
                }
                DFL.afterPatch(homeElement, 'type', (_, ret3) => {
                    const buttonElementContainer = DFL.findInReactTree(ret3, (elt) => {
                        return elt?.type?.toString?.().includes('HomeSettings');
                    });
                    if (buttonElementContainer === undefined) {
                        LogController.raiseError("Couldn't find manage button component to patch in settings");
                        return ret3;
                    }
                    DFL.afterPatch(buttonElementContainer, 'type', (_, ret4) => {
                        //* if ret exists but cannot find onClick then raise error because it is assumed valve has changed something
                        if (ret4 && !ret4.props?.onClick) {
                            LogController.raiseError("Couldn't patch button onClick fn in settings");
                            return ret4;
                        }
                        //* if ret is null then it is assumed that user has no hidden items so there is no button. do no raise error in this case
                        if (!ret4)
                            return ret4;
                        const origOnClick = ret4.props.onClick;
                        ret4.props.onClick = () => {
                            if (tabMasterManager.getTabs().tabsMap.get('Collections').position === -1) {
                                DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strOKButtonText: 'Unhide and Manage', onOK: () => {
                                        tabMasterManager.showTab('Collections');
                                        origOnClick();
                                    }, bDestructiveWarning: true, strTitle: 'Collections Tab is hidden by Tab Master!' }, "In order to manage hidden apps, Tab Master must unhide your Collections tab."));
                            }
                            else {
                                origOnClick();
                            }
                        };
                        return ret4;
                    });
                    return ret3;
                });
                secondCache = homeElement.type;
                return ret2;
            });
            firstCache = ret1.type;
            return ret1;
        });
        return props;
    });
};

// THIS FILE IS AUTO GENERATED
function PiListPlusBold (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 256 256","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm104,40H40a12,12,0,0,0,0,24H144a12,12,0,0,0,0-24Zm88,0H220V168a12,12,0,0,0-24,0v12H184a12,12,0,0,0,0,24h12v12a12,12,0,0,0,24,0V204h12a12,12,0,0,0,0-24Z"}}]})(props);
}

const deckyQamTabClass = 'tab_undefined';
/**
 * All css styling for the Quick Access Menu part of TabMaster.
 */
const QamStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .${deckyQamTabClass}.${DFL.scrollPanelClasses.ScrollPanel} {
        scroll-padding: 48px 0px 0px;
      }
        
      .tab-master-scope {
        width: inherit;
        height: inherit;

        flex: 1 1 1px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: stretch;
      }

      .tab-master-scope .${DFL.quickAccessControlsClasses.PanelSection} {
        padding: 0px;
      }
      .tab-master-scope .${DFL.quickAccessControlsClasses.PanelSectionTitle} {
        margin-top: 3px;
        margin-left: 5px;
      }

      .tab-master-scope .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        margin: 0px 16px;
      }
      .tab-master-scope .${DFL.gamepadDialogClasses.FieldLabel} {
        margin-left: 16px;
      }

      .tab-master-scope .add-tab-btn .${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none;
      }
      .tab-master-scope .add-tab-btn .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
      .tab-master-scope .add-tab-btn .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        width: calc(100% - 32px);
      }

      .tab-master-scope .seperator {
        width: 100%;
        height: 1px;
        background: #23262e;
      }

      .tab-master-scope .hidden-tab-btn button.${DFL.gamepadDialogClasses.Button}.DialogButton {
        min-width: 50px;
      }
      .tab-master-scope .hidden-tab-btn .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        min-width: 50px;
        margin-right: 8px;
      }


      .tab-master-scope .tab-label-cont {
        display: flex;
        align-items: center;
      }

      .tab-master-scope .tab-label-cont .tab-label {
        margin-right: 5px;
      }

      .tab-master-scope .no-sep .${DFL.gamepadDialogClasses.FieldLabel},
      .tab-master-scope .no-sep .${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after,
      .tab-master-scope .no-sep.${DFL.gamepadDialogClasses.Field}.${DFL.gamepadDialogClasses.WithBottomSeparatorStandard}::after {
        display: none
      }

      .tab-master-scope .no-sep .${DFL.gamepadDialogClasses.FieldChildrenInner} {
        width: 100%;
      }
      .tab-master-scope .no-sep .${DFL.gamepadDialogClasses.FieldChildrenWithIcon} {
        width: calc(100% - 10px);
      }

      .tab-master-scope .notice-field-cont .${DFL.gamepadDialogClasses.Field} {
        padding-top: 0;
      }
      .tab-master-scope .notice-field-cont .${DFL.gamepadDialogClasses.FieldLabel} {
        display: none;
      }
    `));
};

const MicroSDeckNotice = ({ intallState, pluginVersion, libVersion, style }) => {
    let problem = '';
    let recommendation = '';
    switch (intallState) {
        case MicroSDeckInstallState.VERSION_TOO_LOW:
        case MicroSDeckInstallState.VERSION_TOO_HIGH:
            problem = `a version mismatch was detected.
      TabMaster expects version ${libVersion}, but version ${pluginVersion} is installed.`;
            recommendation =
                intallState === MicroSDeckInstallState.VERSION_TOO_LOW
                    ? 'Please update MicroSDeck to specified version.'
                    : 'Please update TabMaster if available or install specified version of MicroSDeck.';
            break;
        case MicroSDeckInstallState.VERSION_UNKOWN:
            problem = `TabMaster couldn't correctly determine which version it expects or which version is installed.`;
            recommendation = 'Please try updating TabMaster or MicroSDeck.';
            break;
        case MicroSDeckInstallState.NOT_INSTALLED:
            problem = 'it is not installed.';
            recommendation = 'Please install MicroSDeck for these tabs to work.';
    }
    return (window.SP_REACT.createElement("div", { style: style },
        window.SP_REACT.createElement("div", null,
            "You have some tabs that rely on the MicroSDeck plugin, but ",
            problem),
        window.SP_REACT.createElement("div", null, recommendation),
        window.SP_REACT.createElement("div", null, "Until then, these tabs will not be displayed in the library.")));
};

const InvalidSettingsNotice = ({ onOk, children }) => {
    const confMsg = 'Reset';
    const onConfirm = () => {
        DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: onOk, strTitle: 'Reset Tabs' }, "Are you sure you want to reset tabs? A backup will be created in ~/homebrew/settings/TabMaster."));
    };
    return (window.SP_REACT.createElement("div", { className: 'notice-field-cont', style: { paddingBottom: '10px' } },
        window.SP_REACT.createElement(DFL.Field, { description: window.SP_REACT.createElement("div", { style: { margin: '8px', fontSize: '12px' } },
                window.SP_REACT.createElement("h3", null,
                    window.SP_REACT.createElement(FaCircleExclamation, { style: { height: '.8em', marginRight: '5px' }, fill: 'red' }),
                    "Cannot Load Settings"),
                window.SP_REACT.createElement("div", null, "The settings file does not adhere to the expected structure and could not be loaded. This could be due to various reasons such as a change in Steam or a bug in TabMaster. In order to continue the issue must be corrected or alternatively you can reset the tab settings to default. This will erase all settings, but a copy of the current settings will automatically be saved as a backup. A future TabMaster update may be able to correct the issue, however manually restoring the backup will still be necessary."),
                children,
                window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    window.SP_REACT.createElement(DFL.DialogButton, { style: { margin: '10px 8px 0px', width: 'auto' }, onClick: onConfirm, onOKActionDescription: confMsg }, confMsg))) })));
};

/**
 * The context menu for Tab Actions.
 */
const TabActionsContextMenu = ({ tabContainer, tabMasterManager }) => {
    const menuItems = [window.SP_REACT.createElement(DFL.MenuItem, { onSelected: () => tabMasterManager.hideTab(tabContainer.id) }, "Hide")];
    if (tabContainer.filters) {
        menuItems.unshift(window.SP_REACT.createElement(DFL.MenuItem, { onClick: () => {
                const customTab = tabContainer;
                customTab.buildCollection();
                showAddCollectionModal(customTab.collection.allApps);
            } }, "Snapshot"));
        menuItems.unshift(window.SP_REACT.createElement(DFL.MenuItem, { onSelected: () => showModalDuplicateTab(tabContainer, tabMasterManager) }, "Duplicate"));
        menuItems.unshift(window.SP_REACT.createElement(DFL.MenuItem, { onSelected: () => showModalEditTab(tabContainer, tabMasterManager) }, "Edit"));
        menuItems.push(window.SP_REACT.createElement(DFL.MenuItem, { onSelected: () => {
                if (tabContainer.filters) {
                    DFL.showModal(window.SP_REACT.createElement(DestructiveModal, { onOK: () => {
                            tabMasterManager.deleteTab(tabContainer.id);
                        }, strTitle: 'WARNING!' }, "Are you sure you want to delete this Tab? This can't be undone."));
                }
            } }, "Delete"));
    }
    return window.SP_REACT.createElement(DFL.Menu, { label: 'Actions' }, menuItems);
};
/**
 * The Tab Action button.
 */
const TabActionsButton = props => {
    const onClick = () => {
        DFL.showContextMenu(window.SP_REACT.createElement(TabActionsContextMenu, { ...props }));
    };
    return (window.SP_REACT.createElement(DFL.DialogButton, { style: {
            height: '40px',
            minWidth: '40px',
            width: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            marginRight: '8px',
        }, onClick: onClick, onOKButton: onClick, onOKActionDescription: 'Open tab options' },
        window.SP_REACT.createElement(FaEllipsisH, null)));
};

const TabsPanelSection = ({ isMicroSDeckInstalled }) => {
    const { visibleTabsList, hiddenTabsList, tabsMap, tabMasterManager } = useTabMasterContext();
    function TabEntryInteractables({ entry }) {
        const tabContainer = tabsMap.get(entry.data.id);
        return window.SP_REACT.createElement(TabActionsButton, { tabContainer, tabMasterManager });
    }
    const entries = visibleTabsList.map(tabContainer => {
        return {
            label: window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: !isMicroSDeckInstalled }),
            position: tabContainer.position,
            data: { id: tabContainer.id },
        };
    });
    return tabMasterManager.hasSettingsLoaded ? (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.PanelSection, { title: 'Tabs' },
            window.SP_REACT.createElement("div", { className: 'seperator' }),
            window.SP_REACT.createElement(DFL.ReorderableList, { entries: entries, interactables: TabEntryInteractables, onSave: (entries) => {
                    tabMasterManager.reorderTabs(entries.map(entry => entry.data.id));
                } })),
        window.SP_REACT.createElement(DFL.PanelSection, { title: 'Hidden Tabs' },
            window.SP_REACT.createElement("div", { className: 'seperator' }),
            hiddenTabsList.map(tabContainer => (window.SP_REACT.createElement("div", { className: 'hidden-tab-btn' },
                window.SP_REACT.createElement(DFL.ButtonItem, { label: window.SP_REACT.createElement(TabListLabel, { tabContainer: tabContainer, microSDeckDisabled: !isMicroSDeckInstalled }), onClick: () => tabMasterManager.showTab(tabContainer.id), 
                    // @ts-ignore
                    onOKActionDescription: 'Unhide tab' }, "Show"))))))) : (window.SP_REACT.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' } },
        window.SP_REACT.createElement("img", { alt: 'Loading...', src: '/images/steam_spinner.png', style: { width: '150px' } })));
};

const ErrorNotice = ({ onDismiss, children }) => {
    return (window.SP_REACT.createElement("div", { className: 'notice-field-cont', style: { paddingBottom: '10px' } },
        window.SP_REACT.createElement(DFL.Field, { description: window.SP_REACT.createElement("div", { style: { margin: '8px', fontSize: '12px' } },
                window.SP_REACT.createElement(DFL.Focusable, { onActivate: () => { }, onSecondaryButton: onDismiss, onSecondaryActionDescription: 'Clear Error' },
                    window.SP_REACT.createElement("h3", null,
                        window.SP_REACT.createElement(FaCircleExclamation, { style: { height: '.8em', marginRight: '5px' }, fill: 'red' }),
                        "Tab Master encountered an error"),
                    children)) })));
};

/**
 * All css styling for TabMaster's SharedTabsModal.
 */
const SharedTabsModalStyles = ({}) => {
    return (window.SP_REACT.createElement("style", null, `
      .tab-master-shared-tabs-modal .${DFL.quickAccessControlsClasses.PanelSection} {
        margin: 0px;
        padding: 0px;
      }
      .tab-master-shared-tabs-modal .${DFL.quickAccessControlsClasses.PanelSection}:first-of-type {
        margin: 0px;
      }

      .tab-master-shared-tabs-modal .${DFL.gamepadDialogClasses.ModalPosition} > .${DFL.gamepadDialogClasses.GamepadDialogContent} {
        background: radial-gradient(155.42% 100% at 0% 0%, #060a0e 0 0%, #0e141b 100%);
      }

      /* Filter section start */
      .tab-master-shared-tabs-modal .filter-start-cont {
        margin-left: -2.8vw;
        margin-right: -2.8vw;
        padding: 0;

        font-size: 14px;
      }
      .tab-master-shared-tabs-modal .filter-start-cont .filter-line {
        height: 2px;
        
        background: #23262e;
      }
      .tab-master-shared-tabs-modal .filter-start-cont .filter-accordion-arrow,
      .tab-master-shared-tabs-modal .filter-start-cont .filter-label {
        margin: 0px 5px;
        color: #343945;
      }
      
      /* Focused styles */
      .tab-master-shared-tabs-modal .start-focused {
        background-color: rgba(255, 255, 255, 0.15);
        animation-name: gamepaddialog_ItemFocusAnim-darkGrey_2zfa-;
      }
      .tab-master-shared-tabs-modal .highlight-on-focus {
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.17, 0.45, 0.14, 0.83);
      }
      .tab-master-shared-tabs-modal .filter-start-cont.start-focused .filter-line {
        background: #a9a9a9;
      }
      .tab-master-shared-tabs-modal .filter-start-cont.start-focused .filter-accordion-arrow,
      .tab-master-shared-tabs-modal .filter-start-cont.start-focused .filter-label {
        color: #a9a9a9;
      }

      .tab-master-shared-tabs-modal .spinnyboi {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: fixed;
        height: 100vh;
        top: 0;
        flex: 1;
        left: 0;
        right: 0;
        z-index: 6;
        background: #0E141B;
        transition: opacity ease-out 250ms, z-index 0s;
        will-change: opacity;
      }

      .tab-master-shared-tabs-modal .spinnyboi > img {
        transform: scale(0.75);
        transition: transform ease-out 300ms;
        will-change: transform;
        margin-top: calc(var(--basicui-header-height) * -1);
      }

      .tab-master-shared-tabs-modal .spinnyboi.loaded {
        z-index: -1;
        opacity: 0;
        transition-delay: 0ms, 300ms;
      }

      .tab-master-shared-tabs-modal .spinnyboi.loaded > img {
        transform: scale(0.6);
      }
    `));
};

/**
 * Shared Tab accordion component
 */
const SharedTabAccordion = ({ user, tabs, isOpen, children }) => {
    const [open, setOpen] = SP_REACT.useState(isOpen);
    const tabCount = tabs.length;
    function onClick(e) {
        e.stopPropagation();
        playUISound('/sounds/deck_ui_misc_01.wav');
        setOpen(!open);
    }
    return (window.SP_REACT.createElement(DFL.Focusable, { style: { width: '100%', padding: '0' } },
        window.SP_REACT.createElement(DFL.Focusable, { className: 'filter-start-cont highlight-on-focus', focusClassName: 'start-focused', focusWithinClassName: 'start-focused' },
            window.SP_REACT.createElement(DFL.Button, { style: {
                    width: '100%',
                    padding: '0',
                    margin: '0',
                    background: 'transparent',
                    outline: 'none',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, onOKButton: onClick, onClick: onClick },
                window.SP_REACT.createElement("div", { className: 'filter-line', style: { width: `calc(${modalMargin} - 5px)` } }),
                window.SP_REACT.createElement("div", { className: 'filter-label', style: { display: 'flex', alignItems: 'center' } },
                    window.SP_REACT.createElement(FaUser, { size: '0.9em', style: { marginRight: '3px', color: '#009e0eb3' } }),
                    user,
                    " - ",
                    tabCount,
                    " ",
                    tabCount === 1 ? 'Tab' : 'Tabs'),
                window.SP_REACT.createElement("div", { className: 'filter-line', style: { flexGrow: '1' } }),
                window.SP_REACT.createElement(BiSolidDownArrow, { className: 'filter-accordion-arrow', style: {
                        transition: 'transform 0.2s ease-in-out',
                        transform: !open ? 'rotate(90deg)' : '',
                        fontSize: '0.8em',
                    } }),
                window.SP_REACT.createElement("div", { className: 'filter-line', style: { width: `calc(${modalMargin})` } }))),
        open && children));
};

const UserTab = ({ tab, closeModal, onConfirm }) => {
    return (window.SP_REACT.createElement("div", { className: 'post' },
        window.SP_REACT.createElement(DFL.DialogButton, { style: { borderRadius: 'unset', margin: '0', padding: '10px', scrollMarginTop: '0' }, onClick: () => {
                onConfirm(tab);
                closeModal();
            } },
            window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center' } },
                window.SP_REACT.createElement(FaRegWindowMaximize, { style: {
                        paddingRight: '10px',
                        width: '1em',
                    } }),
                window.SP_REACT.createElement(DFL.Marquee, null,
                    tab.title,
                    " - ",
                    tab.filters?.length ?? 0,
                    " ",
                    tab.filters?.length === 1 ? 'Filter' : 'Filters')))));
};
const SharedTabsModal = ({ closeModal, onConfirm, tabMasterManager, }) => {
    const [loading, setLoading] = SP_REACT.useState(true);
    const [sharedTabs, setSharedTabs] = SP_REACT.useState({});
    const { currentUsersFriends } = SP_REACT.useMemo(() => tabMasterManager.getFriendsAndTags(), [tabMasterManager]);
    const tabsByUser = SP_REACT.useMemo(() => {
        if (loading)
            return [];
        return Array.from(Object.entries(sharedTabs).map(([userId, tabs]) => {
            return {
                user: currentUsersFriends.find(friend => friend.steamid.toString() === userId)?.name ?? userId,
                tabs: Array.from(Object.values(tabs)),
            };
        }));
    }, [sharedTabs, currentUsersFriends]);
    SP_REACT.useEffect(() => {
        PythonInterop.getSharedTabs().then(res => {
            if (res?.message || !res) {
                setSharedTabs({});
            }
            else {
                setSharedTabs(res);
            }
            setLoading(false);
        });
    }, []);
    return (window.SP_REACT.createElement("div", { className: 'tab-master-shared-tabs-modal' },
        window.SP_REACT.createElement(SharedTabsModalStyles, null),
        window.SP_REACT.createElement(DFL.ModalRoot, { onCancel: closeModal, onEscKeypress: closeModal, bDisableBackgroundDismiss: false, bHideCloseIcon: false },
            window.SP_REACT.createElement(DFL.DialogHeader, null, "Shared Tabs"),
            window.SP_REACT.createElement(DFL.DialogBody, null,
                window.SP_REACT.createElement(DFL.DialogControlsSection, null,
                    window.SP_REACT.createElement("div", { className: DFL.joinClassNames('spinnyboi', !loading ? 'loaded' : '') },
                        window.SP_REACT.createElement("img", { alt: 'Loading...', src: '/images/steam_spinner.png' })),
                    tabsByUser.map((userTabs, i) => (window.SP_REACT.createElement(SharedTabAccordion, { user: userTabs.user, tabs: userTabs.tabs, isOpen: true, key: i },
                        window.SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', gap: '4px', flexDirection: 'column', padding: '4px 0px' } }, userTabs.tabs.map(tab => (window.SP_REACT.createElement(UserTab, { tab: tab, onConfirm: onConfirm, closeModal: closeModal }))))))))))));
};
/**
 * Function to show the SharedTabsModal to copy tabs from other users.
 * @param tabMasterManager TabMasterManager instance.
 */
function showModalSharedTabs(tabMasterManager) {
    DFL.showModal(window.SP_REACT.createElement(SharedTabsModal, { onConfirm: (tabSettings) => {
            const container = new CustomTabContainer(v4(), '', tabSettings.position, tabSettings.filters, tabSettings.filtersMode ?? 'and', tabSettings.categoriesToInclude, tabSettings.autoHide ?? false, tabSettings.visibleToOthers ?? false, tabSettings.sortByOverride ?? -1);
            showModalDuplicateTab(container, tabMasterManager);
        }, tabMasterManager: tabMasterManager }));
}

const restartSteam = () => {
    SteamClient.System.RestartPC();
};
const showRestartConfirm = () => {
    DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { strTitle: 'Restart Steam?', strCancelButtonText: 'Later', strOKButtonText: 'Restart Now', strDescription: 'Your backup has been restored. TabMaster has been set to not save changes until you restart to avoid overwriting your restored settings. It is strongly recommend to restart as soon as possible', onOK: restartSteam }));
};
/**
 * The Quick Access Menu content for TabMaster.
 */
const QuickAccessContent = ({}) => {
    const [microSDeckNoticeHidden, setMicroSDeckNoticeHidden] = SP_REACT.useState(MicroSDeckInterop.noticeHidden);
    const [showError, setShowError] = SP_REACT.useState(LogController.errorFlag);
    const { visibleTabsList, tabMasterManager } = useTabMasterContext();
    const [showResetTabs, setShowResetTabs] = SP_REACT.useState(tabMasterManager.invalidSettingsLoaded.isTrue);
    const microSDeckInstallState = MicroSDeckInterop.getInstallState();
    const isMicroSDeckInstalled = microSDeckInstallState === MicroSDeckInstallState.VERSION_COMPATIBLE;
    const hasSdTabs = !!visibleTabsList.find(tabContainer => tabContainer.dependsOnMicroSDeck);
    const handleRestorePrompt = async () => {
        const path = await PythonInterop.openJSONFile();
        if (path instanceof Error) {
            LogController.raiseError('TabMaster encountered a problem opening the filepicker.', path.message);
            return;
        }
        await PythonInterop.restoreSettings(path);
        showRestartConfirm();
    };
    const handleBackupPrompt = async () => {
        const path = await PythonInterop.openFolder();
        if (path instanceof Error) {
            LogController.raiseError('TabMaster encountered a problem opening the filepicker.', path.message);
            return;
        }
        const success = await PythonInterop.backupSettings(path);
        if (success) {
            PythonInterop.toast('Success!', 'Settings backup finished.');
        }
        else {
            PythonInterop.toast('Error!', 'Settings backup failed.');
        }
    };
    const confirmTabReset = async () => {
        await tabMasterManager.invalidSettingsLoaded.confirmReset();
        setShowResetTabs(false);
    };
    const support = (window.SP_REACT.createElement("div", { style: { wordWrap: 'break-word' } },
        "Please reach out to",
        window.SP_REACT.createElement("br", null),
        window.SP_REACT.createElement("a", { href: GITHUB_URL }, GITHUB_URL),
        window.SP_REACT.createElement("br", null),
        "or",
        window.SP_REACT.createElement("br", null),
        window.SP_REACT.createElement("a", { href: DISCORD_URL }, DISCORD_URL),
        window.SP_REACT.createElement("br", null),
        "for support."));
    return (window.SP_REACT.createElement("div", { className: 'tab-master-scope' },
        showError && (window.SP_REACT.createElement(ErrorNotice, { onDismiss: () => setShowError((LogController.errorFlag = false)) }, support)),
        showResetTabs && window.SP_REACT.createElement(InvalidSettingsNotice, { onOk: confirmTabReset }, support),
        hasSdTabs && !isMicroSDeckInstalled && !microSDeckNoticeHidden && (window.SP_REACT.createElement("div", { className: 'notice-field-cont', style: { paddingBottom: '10px' } },
            window.SP_REACT.createElement(DFL.Field, null,
                window.SP_REACT.createElement(MicroSDeckNotice, { intallState: microSDeckInstallState, pluginVersion: window.MicroSDeck?.Version ?? '', libVersion: microSDeckLibVersion, style: { margin: '8px', fontSize: '11px' } }),
                window.SP_REACT.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    window.SP_REACT.createElement(DFL.DialogButton, { style: { margin: '10px 8px 0px', width: 'auto' }, onClick: () => {
                            MicroSDeckInterop.noticeHidden = true;
                            setMicroSDeckNoticeHidden(true);
                        } }, "Hide Notice"))))),
        window.SP_REACT.createElement(QamStyles, null),
        !showResetTabs && (window.SP_REACT.createElement(DFL.Focusable, null,
            window.SP_REACT.createElement("div", { style: { margin: '5px', marginTop: '0px' } }, "Here you can add, re-order, or remove tabs from the library."),
            window.SP_REACT.createElement(DFL.Field, { className: 'no-sep' },
                window.SP_REACT.createElement(DFL.Focusable, { style: { width: '100%', display: 'flex' } },
                    window.SP_REACT.createElement(DFL.Focusable, { className: 'add-tab-btn' },
                        window.SP_REACT.createElement(DFL.DialogButton, { disabled: !tabMasterManager.hasSettingsLoaded, style: {
                                height: '40px',
                                width: '42px',
                                minWidth: 0,
                                padding: '10px 12px',
                                marginLeft: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }, onClick: () => showModalNewTab(tabMasterManager), onOKActionDescription: 'Add Tab' },
                            window.SP_REACT.createElement(FaFolderPlus, { size: '1em' }))),
                    window.SP_REACT.createElement(DFL.Focusable, { className: 'add-tab-btn', style: { marginLeft: '10px' } },
                        window.SP_REACT.createElement(DFL.DialogButton, { disabled: !tabMasterManager.hasSettingsLoaded, style: {
                                height: '40px',
                                width: '42px',
                                minWidth: 0,
                                padding: '10px 12px',
                                marginLeft: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }, onOKActionDescription: 'Add Quick Tab', onClick: () => DFL.showContextMenu(window.SP_REACT.createElement(PresetMenu, { tabMasterManager: tabMasterManager, isMicroSDeckInstalled: isMicroSDeckInstalled })) },
                            window.SP_REACT.createElement(PiListPlusBold, { size: '1.4em' }))),
                    window.SP_REACT.createElement(DFL.Focusable, { className: 'add-tab-btn', style: { marginLeft: '10px' } },
                        window.SP_REACT.createElement(DFL.DialogButton, { disabled: !tabMasterManager.hasSettingsLoaded, style: {
                                height: '40px',
                                width: '42px',
                                minWidth: 0,
                                padding: '10px 12px',
                                marginLeft: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }, onOKActionDescription: 'View Shared Tabs', onClick: () => showModalSharedTabs(tabMasterManager) },
                            window.SP_REACT.createElement(FaSlideshare, { size: '1.4em' }))),
                    window.SP_REACT.createElement(DFL.Focusable, { className: 'add-tab-btn', style: { marginLeft: '10px' } },
                        window.SP_REACT.createElement(DFL.DialogButton, { disabled: !tabMasterManager.hasSettingsLoaded, style: {
                                height: '40px',
                                width: '42px',
                                minWidth: 0,
                                padding: '10px 12px',
                                marginLeft: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }, onOKActionDescription: 'Restore Settings', onClick: handleRestorePrompt },
                            window.SP_REACT.createElement(FaArrowRightToBracket, { size: '1em', rotate: 90 }))),
                    window.SP_REACT.createElement(DFL.Focusable, { className: 'add-tab-btn', style: { marginLeft: '10px' } },
                        window.SP_REACT.createElement(DFL.DialogButton, { disabled: !tabMasterManager.hasSettingsLoaded, style: {
                                height: '40px',
                                width: '42px',
                                minWidth: 0,
                                padding: '10px 12px',
                                marginLeft: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '8px',
                            }, onOKActionDescription: 'Backup Settings', onClick: handleBackupPrompt },
                            window.SP_REACT.createElement(FaArrowUpFromBracket, { size: '1em' }))))),
            window.SP_REACT.createElement(TabsPanelSection, { isMicroSDeckInstalled: isMicroSDeckInstalled }),
            hasSdTabs && !isMicroSDeckInstalled && microSDeckNoticeHidden && (window.SP_REACT.createElement(DFL.Focusable, { onActivate: () => { } },
                window.SP_REACT.createElement(MicroSDeckNotice, { intallState: microSDeckInstallState, pluginVersion: window.MicroSDeck?.Version ?? '', libVersion: microSDeckLibVersion, style: { margin: '8px', fontSize: '11px' } })))))));
};
const buttonStyle = {
    height: '28px',
    width: '40px',
    minWidth: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const QuickAccessTitleView = ({ title, tabMasterManager }) => {
    return (window.SP_REACT.createElement(DFL.Focusable, { style: {
            display: 'flex',
            padding: '0',
            flex: 'auto',
            boxShadow: 'none',
        }, className: DFL.quickAccessMenuClasses.Title },
        window.SP_REACT.createElement("div", { style: { marginRight: 'auto' } }, title),
        window.SP_REACT.createElement(DFL.DialogButton, { disabled: !tabMasterManager.hasSettingsLoaded, onOKActionDescription: 'Manage Tab Profiles', style: buttonStyle, onClick: () => DFL.showContextMenu(window.SP_REACT.createElement(TabProfilesMenu, { tabMasterManager: tabMasterManager })) },
            window.SP_REACT.createElement(FaBookmark, { size: '0.9em' })),
        window.SP_REACT.createElement(DFL.DialogButton, { onOKActionDescription: 'Open Docs', style: buttonStyle, onClick: () => {
                DFL.Navigation.CloseSideMenus();
                DFL.Navigation.Navigate('/tab-master-docs');
            } },
            window.SP_REACT.createElement(FaBook, { size: '0.9em' }))));
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var utils$1 = {};

var Aacute = "Á";
var aacute = "á";
var Abreve = "Ă";
var abreve = "ă";
var ac = "∾";
var acd = "∿";
var acE = "∾̳";
var Acirc = "Â";
var acirc = "â";
var acute = "´";
var Acy = "А";
var acy = "а";
var AElig = "Æ";
var aelig = "æ";
var af = "⁡";
var Afr = "𝔄";
var afr = "𝔞";
var Agrave = "À";
var agrave = "à";
var alefsym = "ℵ";
var aleph = "ℵ";
var Alpha = "Α";
var alpha = "α";
var Amacr = "Ā";
var amacr = "ā";
var amalg = "⨿";
var amp = "&";
var AMP = "&";
var andand = "⩕";
var And = "⩓";
var and = "∧";
var andd = "⩜";
var andslope = "⩘";
var andv = "⩚";
var ang = "∠";
var ange = "⦤";
var angle = "∠";
var angmsdaa = "⦨";
var angmsdab = "⦩";
var angmsdac = "⦪";
var angmsdad = "⦫";
var angmsdae = "⦬";
var angmsdaf = "⦭";
var angmsdag = "⦮";
var angmsdah = "⦯";
var angmsd = "∡";
var angrt = "∟";
var angrtvb = "⊾";
var angrtvbd = "⦝";
var angsph = "∢";
var angst = "Å";
var angzarr = "⍼";
var Aogon = "Ą";
var aogon = "ą";
var Aopf = "𝔸";
var aopf = "𝕒";
var apacir = "⩯";
var ap = "≈";
var apE = "⩰";
var ape = "≊";
var apid = "≋";
var apos = "'";
var ApplyFunction = "⁡";
var approx = "≈";
var approxeq = "≊";
var Aring = "Å";
var aring = "å";
var Ascr = "𝒜";
var ascr = "𝒶";
var Assign = "≔";
var ast = "*";
var asymp = "≈";
var asympeq = "≍";
var Atilde = "Ã";
var atilde = "ã";
var Auml = "Ä";
var auml = "ä";
var awconint = "∳";
var awint = "⨑";
var backcong = "≌";
var backepsilon = "϶";
var backprime = "‵";
var backsim = "∽";
var backsimeq = "⋍";
var Backslash = "∖";
var Barv = "⫧";
var barvee = "⊽";
var barwed = "⌅";
var Barwed = "⌆";
var barwedge = "⌅";
var bbrk = "⎵";
var bbrktbrk = "⎶";
var bcong = "≌";
var Bcy = "Б";
var bcy = "б";
var bdquo = "„";
var becaus = "∵";
var because = "∵";
var Because = "∵";
var bemptyv = "⦰";
var bepsi = "϶";
var bernou = "ℬ";
var Bernoullis = "ℬ";
var Beta = "Β";
var beta = "β";
var beth = "ℶ";
var between = "≬";
var Bfr = "𝔅";
var bfr = "𝔟";
var bigcap = "⋂";
var bigcirc = "◯";
var bigcup = "⋃";
var bigodot = "⨀";
var bigoplus = "⨁";
var bigotimes = "⨂";
var bigsqcup = "⨆";
var bigstar = "★";
var bigtriangledown = "▽";
var bigtriangleup = "△";
var biguplus = "⨄";
var bigvee = "⋁";
var bigwedge = "⋀";
var bkarow = "⤍";
var blacklozenge = "⧫";
var blacksquare = "▪";
var blacktriangle = "▴";
var blacktriangledown = "▾";
var blacktriangleleft = "◂";
var blacktriangleright = "▸";
var blank = "␣";
var blk12 = "▒";
var blk14 = "░";
var blk34 = "▓";
var block$1 = "█";
var bne = "=⃥";
var bnequiv = "≡⃥";
var bNot = "⫭";
var bnot = "⌐";
var Bopf = "𝔹";
var bopf = "𝕓";
var bot = "⊥";
var bottom = "⊥";
var bowtie = "⋈";
var boxbox = "⧉";
var boxdl = "┐";
var boxdL = "╕";
var boxDl = "╖";
var boxDL = "╗";
var boxdr = "┌";
var boxdR = "╒";
var boxDr = "╓";
var boxDR = "╔";
var boxh = "─";
var boxH = "═";
var boxhd = "┬";
var boxHd = "╤";
var boxhD = "╥";
var boxHD = "╦";
var boxhu = "┴";
var boxHu = "╧";
var boxhU = "╨";
var boxHU = "╩";
var boxminus = "⊟";
var boxplus = "⊞";
var boxtimes = "⊠";
var boxul = "┘";
var boxuL = "╛";
var boxUl = "╜";
var boxUL = "╝";
var boxur = "└";
var boxuR = "╘";
var boxUr = "╙";
var boxUR = "╚";
var boxv = "│";
var boxV = "║";
var boxvh = "┼";
var boxvH = "╪";
var boxVh = "╫";
var boxVH = "╬";
var boxvl = "┤";
var boxvL = "╡";
var boxVl = "╢";
var boxVL = "╣";
var boxvr = "├";
var boxvR = "╞";
var boxVr = "╟";
var boxVR = "╠";
var bprime = "‵";
var breve = "˘";
var Breve = "˘";
var brvbar = "¦";
var bscr = "𝒷";
var Bscr = "ℬ";
var bsemi = "⁏";
var bsim = "∽";
var bsime = "⋍";
var bsolb = "⧅";
var bsol = "\\";
var bsolhsub = "⟈";
var bull = "•";
var bullet = "•";
var bump = "≎";
var bumpE = "⪮";
var bumpe = "≏";
var Bumpeq = "≎";
var bumpeq = "≏";
var Cacute = "Ć";
var cacute = "ć";
var capand = "⩄";
var capbrcup = "⩉";
var capcap = "⩋";
var cap = "∩";
var Cap = "⋒";
var capcup = "⩇";
var capdot = "⩀";
var CapitalDifferentialD = "ⅅ";
var caps = "∩︀";
var caret = "⁁";
var caron = "ˇ";
var Cayleys = "ℭ";
var ccaps = "⩍";
var Ccaron = "Č";
var ccaron = "č";
var Ccedil = "Ç";
var ccedil = "ç";
var Ccirc = "Ĉ";
var ccirc = "ĉ";
var Cconint = "∰";
var ccups = "⩌";
var ccupssm = "⩐";
var Cdot = "Ċ";
var cdot = "ċ";
var cedil = "¸";
var Cedilla = "¸";
var cemptyv = "⦲";
var cent = "¢";
var centerdot = "·";
var CenterDot = "·";
var cfr = "𝔠";
var Cfr = "ℭ";
var CHcy = "Ч";
var chcy = "ч";
var check = "✓";
var checkmark = "✓";
var Chi = "Χ";
var chi = "χ";
var circ = "ˆ";
var circeq = "≗";
var circlearrowleft = "↺";
var circlearrowright = "↻";
var circledast = "⊛";
var circledcirc = "⊚";
var circleddash = "⊝";
var CircleDot = "⊙";
var circledR = "®";
var circledS = "Ⓢ";
var CircleMinus = "⊖";
var CirclePlus = "⊕";
var CircleTimes = "⊗";
var cir = "○";
var cirE = "⧃";
var cire = "≗";
var cirfnint = "⨐";
var cirmid = "⫯";
var cirscir = "⧂";
var ClockwiseContourIntegral = "∲";
var CloseCurlyDoubleQuote = "”";
var CloseCurlyQuote = "’";
var clubs = "♣";
var clubsuit = "♣";
var colon = ":";
var Colon = "∷";
var Colone = "⩴";
var colone = "≔";
var coloneq = "≔";
var comma = ",";
var commat = "@";
var comp = "∁";
var compfn = "∘";
var complement = "∁";
var complexes = "ℂ";
var cong = "≅";
var congdot = "⩭";
var Congruent = "≡";
var conint = "∮";
var Conint = "∯";
var ContourIntegral = "∮";
var copf = "𝕔";
var Copf = "ℂ";
var coprod = "∐";
var Coproduct = "∐";
var copy = "©";
var COPY = "©";
var copysr = "℗";
var CounterClockwiseContourIntegral = "∳";
var crarr = "↵";
var cross = "✗";
var Cross = "⨯";
var Cscr = "𝒞";
var cscr = "𝒸";
var csub = "⫏";
var csube = "⫑";
var csup = "⫐";
var csupe = "⫒";
var ctdot = "⋯";
var cudarrl = "⤸";
var cudarrr = "⤵";
var cuepr = "⋞";
var cuesc = "⋟";
var cularr = "↶";
var cularrp = "⤽";
var cupbrcap = "⩈";
var cupcap = "⩆";
var CupCap = "≍";
var cup = "∪";
var Cup = "⋓";
var cupcup = "⩊";
var cupdot = "⊍";
var cupor = "⩅";
var cups = "∪︀";
var curarr = "↷";
var curarrm = "⤼";
var curlyeqprec = "⋞";
var curlyeqsucc = "⋟";
var curlyvee = "⋎";
var curlywedge = "⋏";
var curren = "¤";
var curvearrowleft = "↶";
var curvearrowright = "↷";
var cuvee = "⋎";
var cuwed = "⋏";
var cwconint = "∲";
var cwint = "∱";
var cylcty = "⌭";
var dagger = "†";
var Dagger = "‡";
var daleth = "ℸ";
var darr = "↓";
var Darr = "↡";
var dArr = "⇓";
var dash = "‐";
var Dashv = "⫤";
var dashv = "⊣";
var dbkarow = "⤏";
var dblac = "˝";
var Dcaron = "Ď";
var dcaron = "ď";
var Dcy = "Д";
var dcy = "д";
var ddagger = "‡";
var ddarr = "⇊";
var DD = "ⅅ";
var dd = "ⅆ";
var DDotrahd = "⤑";
var ddotseq = "⩷";
var deg = "°";
var Del = "∇";
var Delta = "Δ";
var delta = "δ";
var demptyv = "⦱";
var dfisht = "⥿";
var Dfr = "𝔇";
var dfr = "𝔡";
var dHar = "⥥";
var dharl = "⇃";
var dharr = "⇂";
var DiacriticalAcute = "´";
var DiacriticalDot = "˙";
var DiacriticalDoubleAcute = "˝";
var DiacriticalGrave = "`";
var DiacriticalTilde = "˜";
var diam = "⋄";
var diamond = "⋄";
var Diamond = "⋄";
var diamondsuit = "♦";
var diams = "♦";
var die = "¨";
var DifferentialD = "ⅆ";
var digamma = "ϝ";
var disin = "⋲";
var div = "÷";
var divide = "÷";
var divideontimes = "⋇";
var divonx = "⋇";
var DJcy = "Ђ";
var djcy = "ђ";
var dlcorn = "⌞";
var dlcrop = "⌍";
var dollar = "$";
var Dopf = "𝔻";
var dopf = "𝕕";
var Dot = "¨";
var dot = "˙";
var DotDot = "⃜";
var doteq = "≐";
var doteqdot = "≑";
var DotEqual = "≐";
var dotminus = "∸";
var dotplus = "∔";
var dotsquare = "⊡";
var doublebarwedge = "⌆";
var DoubleContourIntegral = "∯";
var DoubleDot = "¨";
var DoubleDownArrow = "⇓";
var DoubleLeftArrow = "⇐";
var DoubleLeftRightArrow = "⇔";
var DoubleLeftTee = "⫤";
var DoubleLongLeftArrow = "⟸";
var DoubleLongLeftRightArrow = "⟺";
var DoubleLongRightArrow = "⟹";
var DoubleRightArrow = "⇒";
var DoubleRightTee = "⊨";
var DoubleUpArrow = "⇑";
var DoubleUpDownArrow = "⇕";
var DoubleVerticalBar = "∥";
var DownArrowBar = "⤓";
var downarrow = "↓";
var DownArrow = "↓";
var Downarrow = "⇓";
var DownArrowUpArrow = "⇵";
var DownBreve = "̑";
var downdownarrows = "⇊";
var downharpoonleft = "⇃";
var downharpoonright = "⇂";
var DownLeftRightVector = "⥐";
var DownLeftTeeVector = "⥞";
var DownLeftVectorBar = "⥖";
var DownLeftVector = "↽";
var DownRightTeeVector = "⥟";
var DownRightVectorBar = "⥗";
var DownRightVector = "⇁";
var DownTeeArrow = "↧";
var DownTee = "⊤";
var drbkarow = "⤐";
var drcorn = "⌟";
var drcrop = "⌌";
var Dscr = "𝒟";
var dscr = "𝒹";
var DScy = "Ѕ";
var dscy = "ѕ";
var dsol = "⧶";
var Dstrok = "Đ";
var dstrok = "đ";
var dtdot = "⋱";
var dtri = "▿";
var dtrif = "▾";
var duarr = "⇵";
var duhar = "⥯";
var dwangle = "⦦";
var DZcy = "Џ";
var dzcy = "џ";
var dzigrarr = "⟿";
var Eacute = "É";
var eacute = "é";
var easter = "⩮";
var Ecaron = "Ě";
var ecaron = "ě";
var Ecirc = "Ê";
var ecirc = "ê";
var ecir = "≖";
var ecolon = "≕";
var Ecy = "Э";
var ecy = "э";
var eDDot = "⩷";
var Edot = "Ė";
var edot = "ė";
var eDot = "≑";
var ee = "ⅇ";
var efDot = "≒";
var Efr = "𝔈";
var efr = "𝔢";
var eg = "⪚";
var Egrave = "È";
var egrave = "è";
var egs = "⪖";
var egsdot = "⪘";
var el = "⪙";
var Element = "∈";
var elinters = "⏧";
var ell = "ℓ";
var els = "⪕";
var elsdot = "⪗";
var Emacr = "Ē";
var emacr = "ē";
var empty = "∅";
var emptyset = "∅";
var EmptySmallSquare = "◻";
var emptyv = "∅";
var EmptyVerySmallSquare = "▫";
var emsp13 = " ";
var emsp14 = " ";
var emsp = " ";
var ENG = "Ŋ";
var eng = "ŋ";
var ensp = " ";
var Eogon = "Ę";
var eogon = "ę";
var Eopf = "𝔼";
var eopf = "𝕖";
var epar = "⋕";
var eparsl = "⧣";
var eplus = "⩱";
var epsi = "ε";
var Epsilon = "Ε";
var epsilon = "ε";
var epsiv = "ϵ";
var eqcirc = "≖";
var eqcolon = "≕";
var eqsim = "≂";
var eqslantgtr = "⪖";
var eqslantless = "⪕";
var Equal = "⩵";
var equals = "=";
var EqualTilde = "≂";
var equest = "≟";
var Equilibrium = "⇌";
var equiv = "≡";
var equivDD = "⩸";
var eqvparsl = "⧥";
var erarr = "⥱";
var erDot = "≓";
var escr = "ℯ";
var Escr = "ℰ";
var esdot = "≐";
var Esim = "⩳";
var esim = "≂";
var Eta = "Η";
var eta = "η";
var ETH = "Ð";
var eth = "ð";
var Euml = "Ë";
var euml = "ë";
var euro = "€";
var excl = "!";
var exist = "∃";
var Exists = "∃";
var expectation = "ℰ";
var exponentiale = "ⅇ";
var ExponentialE = "ⅇ";
var fallingdotseq = "≒";
var Fcy = "Ф";
var fcy = "ф";
var female = "♀";
var ffilig = "ﬃ";
var fflig = "ﬀ";
var ffllig = "ﬄ";
var Ffr = "𝔉";
var ffr = "𝔣";
var filig = "ﬁ";
var FilledSmallSquare = "◼";
var FilledVerySmallSquare = "▪";
var fjlig = "fj";
var flat = "♭";
var fllig = "ﬂ";
var fltns = "▱";
var fnof = "ƒ";
var Fopf = "𝔽";
var fopf = "𝕗";
var forall = "∀";
var ForAll = "∀";
var fork = "⋔";
var forkv = "⫙";
var Fouriertrf = "ℱ";
var fpartint = "⨍";
var frac12 = "½";
var frac13 = "⅓";
var frac14 = "¼";
var frac15 = "⅕";
var frac16 = "⅙";
var frac18 = "⅛";
var frac23 = "⅔";
var frac25 = "⅖";
var frac34 = "¾";
var frac35 = "⅗";
var frac38 = "⅜";
var frac45 = "⅘";
var frac56 = "⅚";
var frac58 = "⅝";
var frac78 = "⅞";
var frasl = "⁄";
var frown = "⌢";
var fscr = "𝒻";
var Fscr = "ℱ";
var gacute = "ǵ";
var Gamma = "Γ";
var gamma = "γ";
var Gammad = "Ϝ";
var gammad = "ϝ";
var gap = "⪆";
var Gbreve = "Ğ";
var gbreve = "ğ";
var Gcedil = "Ģ";
var Gcirc = "Ĝ";
var gcirc = "ĝ";
var Gcy = "Г";
var gcy = "г";
var Gdot = "Ġ";
var gdot = "ġ";
var ge = "≥";
var gE = "≧";
var gEl = "⪌";
var gel = "⋛";
var geq = "≥";
var geqq = "≧";
var geqslant = "⩾";
var gescc = "⪩";
var ges = "⩾";
var gesdot = "⪀";
var gesdoto = "⪂";
var gesdotol = "⪄";
var gesl = "⋛︀";
var gesles = "⪔";
var Gfr = "𝔊";
var gfr = "𝔤";
var gg = "≫";
var Gg = "⋙";
var ggg = "⋙";
var gimel = "ℷ";
var GJcy = "Ѓ";
var gjcy = "ѓ";
var gla = "⪥";
var gl = "≷";
var glE = "⪒";
var glj = "⪤";
var gnap = "⪊";
var gnapprox = "⪊";
var gne = "⪈";
var gnE = "≩";
var gneq = "⪈";
var gneqq = "≩";
var gnsim = "⋧";
var Gopf = "𝔾";
var gopf = "𝕘";
var grave = "`";
var GreaterEqual = "≥";
var GreaterEqualLess = "⋛";
var GreaterFullEqual = "≧";
var GreaterGreater = "⪢";
var GreaterLess = "≷";
var GreaterSlantEqual = "⩾";
var GreaterTilde = "≳";
var Gscr = "𝒢";
var gscr = "ℊ";
var gsim = "≳";
var gsime = "⪎";
var gsiml = "⪐";
var gtcc = "⪧";
var gtcir = "⩺";
var gt = ">";
var GT = ">";
var Gt = "≫";
var gtdot = "⋗";
var gtlPar = "⦕";
var gtquest = "⩼";
var gtrapprox = "⪆";
var gtrarr = "⥸";
var gtrdot = "⋗";
var gtreqless = "⋛";
var gtreqqless = "⪌";
var gtrless = "≷";
var gtrsim = "≳";
var gvertneqq = "≩︀";
var gvnE = "≩︀";
var Hacek = "ˇ";
var hairsp = " ";
var half = "½";
var hamilt = "ℋ";
var HARDcy = "Ъ";
var hardcy = "ъ";
var harrcir = "⥈";
var harr = "↔";
var hArr = "⇔";
var harrw = "↭";
var Hat = "^";
var hbar = "ℏ";
var Hcirc = "Ĥ";
var hcirc = "ĥ";
var hearts = "♥";
var heartsuit = "♥";
var hellip = "…";
var hercon = "⊹";
var hfr = "𝔥";
var Hfr = "ℌ";
var HilbertSpace = "ℋ";
var hksearow = "⤥";
var hkswarow = "⤦";
var hoarr = "⇿";
var homtht = "∻";
var hookleftarrow = "↩";
var hookrightarrow = "↪";
var hopf = "𝕙";
var Hopf = "ℍ";
var horbar = "―";
var HorizontalLine = "─";
var hscr = "𝒽";
var Hscr = "ℋ";
var hslash = "ℏ";
var Hstrok = "Ħ";
var hstrok = "ħ";
var HumpDownHump = "≎";
var HumpEqual = "≏";
var hybull = "⁃";
var hyphen = "‐";
var Iacute = "Í";
var iacute = "í";
var ic = "⁣";
var Icirc = "Î";
var icirc = "î";
var Icy = "И";
var icy = "и";
var Idot = "İ";
var IEcy = "Е";
var iecy = "е";
var iexcl = "¡";
var iff = "⇔";
var ifr = "𝔦";
var Ifr = "ℑ";
var Igrave = "Ì";
var igrave = "ì";
var ii = "ⅈ";
var iiiint = "⨌";
var iiint = "∭";
var iinfin = "⧜";
var iiota = "℩";
var IJlig = "Ĳ";
var ijlig = "ĳ";
var Imacr = "Ī";
var imacr = "ī";
var image$1 = "ℑ";
var ImaginaryI = "ⅈ";
var imagline = "ℐ";
var imagpart = "ℑ";
var imath = "ı";
var Im = "ℑ";
var imof = "⊷";
var imped = "Ƶ";
var Implies = "⇒";
var incare = "℅";
var infin = "∞";
var infintie = "⧝";
var inodot = "ı";
var intcal = "⊺";
var int = "∫";
var Int = "∬";
var integers = "ℤ";
var Integral = "∫";
var intercal = "⊺";
var Intersection = "⋂";
var intlarhk = "⨗";
var intprod = "⨼";
var InvisibleComma = "⁣";
var InvisibleTimes = "⁢";
var IOcy = "Ё";
var iocy = "ё";
var Iogon = "Į";
var iogon = "į";
var Iopf = "𝕀";
var iopf = "𝕚";
var Iota = "Ι";
var iota = "ι";
var iprod = "⨼";
var iquest = "¿";
var iscr = "𝒾";
var Iscr = "ℐ";
var isin = "∈";
var isindot = "⋵";
var isinE = "⋹";
var isins = "⋴";
var isinsv = "⋳";
var isinv = "∈";
var it = "⁢";
var Itilde = "Ĩ";
var itilde = "ĩ";
var Iukcy = "І";
var iukcy = "і";
var Iuml = "Ï";
var iuml = "ï";
var Jcirc = "Ĵ";
var jcirc = "ĵ";
var Jcy = "Й";
var jcy = "й";
var Jfr = "𝔍";
var jfr = "𝔧";
var jmath = "ȷ";
var Jopf = "𝕁";
var jopf = "𝕛";
var Jscr = "𝒥";
var jscr = "𝒿";
var Jsercy = "Ј";
var jsercy = "ј";
var Jukcy = "Є";
var jukcy = "є";
var Kappa = "Κ";
var kappa = "κ";
var kappav = "ϰ";
var Kcedil = "Ķ";
var kcedil = "ķ";
var Kcy = "К";
var kcy = "к";
var Kfr = "𝔎";
var kfr = "𝔨";
var kgreen = "ĸ";
var KHcy = "Х";
var khcy = "х";
var KJcy = "Ќ";
var kjcy = "ќ";
var Kopf = "𝕂";
var kopf = "𝕜";
var Kscr = "𝒦";
var kscr = "𝓀";
var lAarr = "⇚";
var Lacute = "Ĺ";
var lacute = "ĺ";
var laemptyv = "⦴";
var lagran = "ℒ";
var Lambda = "Λ";
var lambda = "λ";
var lang = "⟨";
var Lang = "⟪";
var langd = "⦑";
var langle = "⟨";
var lap = "⪅";
var Laplacetrf = "ℒ";
var laquo = "«";
var larrb = "⇤";
var larrbfs = "⤟";
var larr = "←";
var Larr = "↞";
var lArr = "⇐";
var larrfs = "⤝";
var larrhk = "↩";
var larrlp = "↫";
var larrpl = "⤹";
var larrsim = "⥳";
var larrtl = "↢";
var latail = "⤙";
var lAtail = "⤛";
var lat = "⪫";
var late = "⪭";
var lates = "⪭︀";
var lbarr = "⤌";
var lBarr = "⤎";
var lbbrk = "❲";
var lbrace = "{";
var lbrack = "[";
var lbrke = "⦋";
var lbrksld = "⦏";
var lbrkslu = "⦍";
var Lcaron = "Ľ";
var lcaron = "ľ";
var Lcedil = "Ļ";
var lcedil = "ļ";
var lceil = "⌈";
var lcub = "{";
var Lcy = "Л";
var lcy = "л";
var ldca = "⤶";
var ldquo = "“";
var ldquor = "„";
var ldrdhar = "⥧";
var ldrushar = "⥋";
var ldsh = "↲";
var le = "≤";
var lE = "≦";
var LeftAngleBracket = "⟨";
var LeftArrowBar = "⇤";
var leftarrow = "←";
var LeftArrow = "←";
var Leftarrow = "⇐";
var LeftArrowRightArrow = "⇆";
var leftarrowtail = "↢";
var LeftCeiling = "⌈";
var LeftDoubleBracket = "⟦";
var LeftDownTeeVector = "⥡";
var LeftDownVectorBar = "⥙";
var LeftDownVector = "⇃";
var LeftFloor = "⌊";
var leftharpoondown = "↽";
var leftharpoonup = "↼";
var leftleftarrows = "⇇";
var leftrightarrow = "↔";
var LeftRightArrow = "↔";
var Leftrightarrow = "⇔";
var leftrightarrows = "⇆";
var leftrightharpoons = "⇋";
var leftrightsquigarrow = "↭";
var LeftRightVector = "⥎";
var LeftTeeArrow = "↤";
var LeftTee = "⊣";
var LeftTeeVector = "⥚";
var leftthreetimes = "⋋";
var LeftTriangleBar = "⧏";
var LeftTriangle = "⊲";
var LeftTriangleEqual = "⊴";
var LeftUpDownVector = "⥑";
var LeftUpTeeVector = "⥠";
var LeftUpVectorBar = "⥘";
var LeftUpVector = "↿";
var LeftVectorBar = "⥒";
var LeftVector = "↼";
var lEg = "⪋";
var leg = "⋚";
var leq = "≤";
var leqq = "≦";
var leqslant = "⩽";
var lescc = "⪨";
var les = "⩽";
var lesdot = "⩿";
var lesdoto = "⪁";
var lesdotor = "⪃";
var lesg = "⋚︀";
var lesges = "⪓";
var lessapprox = "⪅";
var lessdot = "⋖";
var lesseqgtr = "⋚";
var lesseqqgtr = "⪋";
var LessEqualGreater = "⋚";
var LessFullEqual = "≦";
var LessGreater = "≶";
var lessgtr = "≶";
var LessLess = "⪡";
var lesssim = "≲";
var LessSlantEqual = "⩽";
var LessTilde = "≲";
var lfisht = "⥼";
var lfloor = "⌊";
var Lfr = "𝔏";
var lfr = "𝔩";
var lg = "≶";
var lgE = "⪑";
var lHar = "⥢";
var lhard = "↽";
var lharu = "↼";
var lharul = "⥪";
var lhblk = "▄";
var LJcy = "Љ";
var ljcy = "љ";
var llarr = "⇇";
var ll = "≪";
var Ll = "⋘";
var llcorner = "⌞";
var Lleftarrow = "⇚";
var llhard = "⥫";
var lltri = "◺";
var Lmidot = "Ŀ";
var lmidot = "ŀ";
var lmoustache = "⎰";
var lmoust = "⎰";
var lnap = "⪉";
var lnapprox = "⪉";
var lne = "⪇";
var lnE = "≨";
var lneq = "⪇";
var lneqq = "≨";
var lnsim = "⋦";
var loang = "⟬";
var loarr = "⇽";
var lobrk = "⟦";
var longleftarrow = "⟵";
var LongLeftArrow = "⟵";
var Longleftarrow = "⟸";
var longleftrightarrow = "⟷";
var LongLeftRightArrow = "⟷";
var Longleftrightarrow = "⟺";
var longmapsto = "⟼";
var longrightarrow = "⟶";
var LongRightArrow = "⟶";
var Longrightarrow = "⟹";
var looparrowleft = "↫";
var looparrowright = "↬";
var lopar = "⦅";
var Lopf = "𝕃";
var lopf = "𝕝";
var loplus = "⨭";
var lotimes = "⨴";
var lowast = "∗";
var lowbar = "_";
var LowerLeftArrow = "↙";
var LowerRightArrow = "↘";
var loz = "◊";
var lozenge = "◊";
var lozf = "⧫";
var lpar = "(";
var lparlt = "⦓";
var lrarr = "⇆";
var lrcorner = "⌟";
var lrhar = "⇋";
var lrhard = "⥭";
var lrm = "‎";
var lrtri = "⊿";
var lsaquo = "‹";
var lscr = "𝓁";
var Lscr = "ℒ";
var lsh = "↰";
var Lsh = "↰";
var lsim = "≲";
var lsime = "⪍";
var lsimg = "⪏";
var lsqb = "[";
var lsquo = "‘";
var lsquor = "‚";
var Lstrok = "Ł";
var lstrok = "ł";
var ltcc = "⪦";
var ltcir = "⩹";
var lt = "<";
var LT = "<";
var Lt = "≪";
var ltdot = "⋖";
var lthree = "⋋";
var ltimes = "⋉";
var ltlarr = "⥶";
var ltquest = "⩻";
var ltri = "◃";
var ltrie = "⊴";
var ltrif = "◂";
var ltrPar = "⦖";
var lurdshar = "⥊";
var luruhar = "⥦";
var lvertneqq = "≨︀";
var lvnE = "≨︀";
var macr = "¯";
var male = "♂";
var malt = "✠";
var maltese = "✠";
var map$1 = "↦";
var mapsto = "↦";
var mapstodown = "↧";
var mapstoleft = "↤";
var mapstoup = "↥";
var marker = "▮";
var mcomma = "⨩";
var Mcy = "М";
var mcy = "м";
var mdash = "—";
var mDDot = "∺";
var measuredangle = "∡";
var MediumSpace = " ";
var Mellintrf = "ℳ";
var Mfr = "𝔐";
var mfr = "𝔪";
var mho = "℧";
var micro = "µ";
var midast = "*";
var midcir = "⫰";
var mid = "∣";
var middot = "·";
var minusb = "⊟";
var minus = "−";
var minusd = "∸";
var minusdu = "⨪";
var MinusPlus = "∓";
var mlcp = "⫛";
var mldr = "…";
var mnplus = "∓";
var models = "⊧";
var Mopf = "𝕄";
var mopf = "𝕞";
var mp = "∓";
var mscr = "𝓂";
var Mscr = "ℳ";
var mstpos = "∾";
var Mu = "Μ";
var mu = "μ";
var multimap = "⊸";
var mumap = "⊸";
var nabla = "∇";
var Nacute = "Ń";
var nacute = "ń";
var nang = "∠⃒";
var nap = "≉";
var napE = "⩰̸";
var napid = "≋̸";
var napos = "ŉ";
var napprox = "≉";
var natural = "♮";
var naturals = "ℕ";
var natur = "♮";
var nbsp = " ";
var nbump = "≎̸";
var nbumpe = "≏̸";
var ncap = "⩃";
var Ncaron = "Ň";
var ncaron = "ň";
var Ncedil = "Ņ";
var ncedil = "ņ";
var ncong = "≇";
var ncongdot = "⩭̸";
var ncup = "⩂";
var Ncy = "Н";
var ncy = "н";
var ndash = "–";
var nearhk = "⤤";
var nearr = "↗";
var neArr = "⇗";
var nearrow = "↗";
var ne = "≠";
var nedot = "≐̸";
var NegativeMediumSpace = "​";
var NegativeThickSpace = "​";
var NegativeThinSpace = "​";
var NegativeVeryThinSpace = "​";
var nequiv = "≢";
var nesear = "⤨";
var nesim = "≂̸";
var NestedGreaterGreater = "≫";
var NestedLessLess = "≪";
var NewLine = "\n";
var nexist = "∄";
var nexists = "∄";
var Nfr = "𝔑";
var nfr = "𝔫";
var ngE = "≧̸";
var nge = "≱";
var ngeq = "≱";
var ngeqq = "≧̸";
var ngeqslant = "⩾̸";
var nges = "⩾̸";
var nGg = "⋙̸";
var ngsim = "≵";
var nGt = "≫⃒";
var ngt = "≯";
var ngtr = "≯";
var nGtv = "≫̸";
var nharr = "↮";
var nhArr = "⇎";
var nhpar = "⫲";
var ni = "∋";
var nis = "⋼";
var nisd = "⋺";
var niv = "∋";
var NJcy = "Њ";
var njcy = "њ";
var nlarr = "↚";
var nlArr = "⇍";
var nldr = "‥";
var nlE = "≦̸";
var nle = "≰";
var nleftarrow = "↚";
var nLeftarrow = "⇍";
var nleftrightarrow = "↮";
var nLeftrightarrow = "⇎";
var nleq = "≰";
var nleqq = "≦̸";
var nleqslant = "⩽̸";
var nles = "⩽̸";
var nless = "≮";
var nLl = "⋘̸";
var nlsim = "≴";
var nLt = "≪⃒";
var nlt = "≮";
var nltri = "⋪";
var nltrie = "⋬";
var nLtv = "≪̸";
var nmid = "∤";
var NoBreak = "⁠";
var NonBreakingSpace = " ";
var nopf = "𝕟";
var Nopf = "ℕ";
var Not = "⫬";
var not = "¬";
var NotCongruent = "≢";
var NotCupCap = "≭";
var NotDoubleVerticalBar = "∦";
var NotElement = "∉";
var NotEqual = "≠";
var NotEqualTilde = "≂̸";
var NotExists = "∄";
var NotGreater = "≯";
var NotGreaterEqual = "≱";
var NotGreaterFullEqual = "≧̸";
var NotGreaterGreater = "≫̸";
var NotGreaterLess = "≹";
var NotGreaterSlantEqual = "⩾̸";
var NotGreaterTilde = "≵";
var NotHumpDownHump = "≎̸";
var NotHumpEqual = "≏̸";
var notin = "∉";
var notindot = "⋵̸";
var notinE = "⋹̸";
var notinva = "∉";
var notinvb = "⋷";
var notinvc = "⋶";
var NotLeftTriangleBar = "⧏̸";
var NotLeftTriangle = "⋪";
var NotLeftTriangleEqual = "⋬";
var NotLess = "≮";
var NotLessEqual = "≰";
var NotLessGreater = "≸";
var NotLessLess = "≪̸";
var NotLessSlantEqual = "⩽̸";
var NotLessTilde = "≴";
var NotNestedGreaterGreater = "⪢̸";
var NotNestedLessLess = "⪡̸";
var notni = "∌";
var notniva = "∌";
var notnivb = "⋾";
var notnivc = "⋽";
var NotPrecedes = "⊀";
var NotPrecedesEqual = "⪯̸";
var NotPrecedesSlantEqual = "⋠";
var NotReverseElement = "∌";
var NotRightTriangleBar = "⧐̸";
var NotRightTriangle = "⋫";
var NotRightTriangleEqual = "⋭";
var NotSquareSubset = "⊏̸";
var NotSquareSubsetEqual = "⋢";
var NotSquareSuperset = "⊐̸";
var NotSquareSupersetEqual = "⋣";
var NotSubset = "⊂⃒";
var NotSubsetEqual = "⊈";
var NotSucceeds = "⊁";
var NotSucceedsEqual = "⪰̸";
var NotSucceedsSlantEqual = "⋡";
var NotSucceedsTilde = "≿̸";
var NotSuperset = "⊃⃒";
var NotSupersetEqual = "⊉";
var NotTilde = "≁";
var NotTildeEqual = "≄";
var NotTildeFullEqual = "≇";
var NotTildeTilde = "≉";
var NotVerticalBar = "∤";
var nparallel = "∦";
var npar = "∦";
var nparsl = "⫽⃥";
var npart = "∂̸";
var npolint = "⨔";
var npr = "⊀";
var nprcue = "⋠";
var nprec = "⊀";
var npreceq = "⪯̸";
var npre = "⪯̸";
var nrarrc = "⤳̸";
var nrarr = "↛";
var nrArr = "⇏";
var nrarrw = "↝̸";
var nrightarrow = "↛";
var nRightarrow = "⇏";
var nrtri = "⋫";
var nrtrie = "⋭";
var nsc = "⊁";
var nsccue = "⋡";
var nsce = "⪰̸";
var Nscr = "𝒩";
var nscr = "𝓃";
var nshortmid = "∤";
var nshortparallel = "∦";
var nsim = "≁";
var nsime = "≄";
var nsimeq = "≄";
var nsmid = "∤";
var nspar = "∦";
var nsqsube = "⋢";
var nsqsupe = "⋣";
var nsub = "⊄";
var nsubE = "⫅̸";
var nsube = "⊈";
var nsubset = "⊂⃒";
var nsubseteq = "⊈";
var nsubseteqq = "⫅̸";
var nsucc = "⊁";
var nsucceq = "⪰̸";
var nsup = "⊅";
var nsupE = "⫆̸";
var nsupe = "⊉";
var nsupset = "⊃⃒";
var nsupseteq = "⊉";
var nsupseteqq = "⫆̸";
var ntgl = "≹";
var Ntilde = "Ñ";
var ntilde = "ñ";
var ntlg = "≸";
var ntriangleleft = "⋪";
var ntrianglelefteq = "⋬";
var ntriangleright = "⋫";
var ntrianglerighteq = "⋭";
var Nu = "Ν";
var nu = "ν";
var num = "#";
var numero = "№";
var numsp = " ";
var nvap = "≍⃒";
var nvdash = "⊬";
var nvDash = "⊭";
var nVdash = "⊮";
var nVDash = "⊯";
var nvge = "≥⃒";
var nvgt = ">⃒";
var nvHarr = "⤄";
var nvinfin = "⧞";
var nvlArr = "⤂";
var nvle = "≤⃒";
var nvlt = "<⃒";
var nvltrie = "⊴⃒";
var nvrArr = "⤃";
var nvrtrie = "⊵⃒";
var nvsim = "∼⃒";
var nwarhk = "⤣";
var nwarr = "↖";
var nwArr = "⇖";
var nwarrow = "↖";
var nwnear = "⤧";
var Oacute = "Ó";
var oacute = "ó";
var oast = "⊛";
var Ocirc = "Ô";
var ocirc = "ô";
var ocir = "⊚";
var Ocy = "О";
var ocy = "о";
var odash = "⊝";
var Odblac = "Ő";
var odblac = "ő";
var odiv = "⨸";
var odot = "⊙";
var odsold = "⦼";
var OElig = "Œ";
var oelig = "œ";
var ofcir = "⦿";
var Ofr = "𝔒";
var ofr = "𝔬";
var ogon = "˛";
var Ograve = "Ò";
var ograve = "ò";
var ogt = "⧁";
var ohbar = "⦵";
var ohm = "Ω";
var oint = "∮";
var olarr = "↺";
var olcir = "⦾";
var olcross = "⦻";
var oline = "‾";
var olt = "⧀";
var Omacr = "Ō";
var omacr = "ō";
var Omega = "Ω";
var omega = "ω";
var Omicron = "Ο";
var omicron = "ο";
var omid = "⦶";
var ominus = "⊖";
var Oopf = "𝕆";
var oopf = "𝕠";
var opar = "⦷";
var OpenCurlyDoubleQuote = "“";
var OpenCurlyQuote = "‘";
var operp = "⦹";
var oplus = "⊕";
var orarr = "↻";
var Or = "⩔";
var or = "∨";
var ord = "⩝";
var order = "ℴ";
var orderof = "ℴ";
var ordf = "ª";
var ordm = "º";
var origof = "⊶";
var oror = "⩖";
var orslope = "⩗";
var orv = "⩛";
var oS = "Ⓢ";
var Oscr = "𝒪";
var oscr = "ℴ";
var Oslash = "Ø";
var oslash = "ø";
var osol = "⊘";
var Otilde = "Õ";
var otilde = "õ";
var otimesas = "⨶";
var Otimes = "⨷";
var otimes = "⊗";
var Ouml = "Ö";
var ouml = "ö";
var ovbar = "⌽";
var OverBar = "‾";
var OverBrace = "⏞";
var OverBracket = "⎴";
var OverParenthesis = "⏜";
var para = "¶";
var parallel = "∥";
var par = "∥";
var parsim = "⫳";
var parsl = "⫽";
var part = "∂";
var PartialD = "∂";
var Pcy = "П";
var pcy = "п";
var percnt = "%";
var period = ".";
var permil = "‰";
var perp = "⊥";
var pertenk = "‱";
var Pfr = "𝔓";
var pfr = "𝔭";
var Phi = "Φ";
var phi = "φ";
var phiv = "ϕ";
var phmmat = "ℳ";
var phone = "☎";
var Pi = "Π";
var pi = "π";
var pitchfork = "⋔";
var piv = "ϖ";
var planck = "ℏ";
var planckh = "ℎ";
var plankv = "ℏ";
var plusacir = "⨣";
var plusb = "⊞";
var pluscir = "⨢";
var plus = "+";
var plusdo = "∔";
var plusdu = "⨥";
var pluse = "⩲";
var PlusMinus = "±";
var plusmn = "±";
var plussim = "⨦";
var plustwo = "⨧";
var pm = "±";
var Poincareplane = "ℌ";
var pointint = "⨕";
var popf = "𝕡";
var Popf = "ℙ";
var pound = "£";
var prap = "⪷";
var Pr = "⪻";
var pr = "≺";
var prcue = "≼";
var precapprox = "⪷";
var prec = "≺";
var preccurlyeq = "≼";
var Precedes = "≺";
var PrecedesEqual = "⪯";
var PrecedesSlantEqual = "≼";
var PrecedesTilde = "≾";
var preceq = "⪯";
var precnapprox = "⪹";
var precneqq = "⪵";
var precnsim = "⋨";
var pre = "⪯";
var prE = "⪳";
var precsim = "≾";
var prime = "′";
var Prime = "″";
var primes = "ℙ";
var prnap = "⪹";
var prnE = "⪵";
var prnsim = "⋨";
var prod = "∏";
var Product = "∏";
var profalar = "⌮";
var profline = "⌒";
var profsurf = "⌓";
var prop = "∝";
var Proportional = "∝";
var Proportion = "∷";
var propto = "∝";
var prsim = "≾";
var prurel = "⊰";
var Pscr = "𝒫";
var pscr = "𝓅";
var Psi = "Ψ";
var psi = "ψ";
var puncsp = " ";
var Qfr = "𝔔";
var qfr = "𝔮";
var qint = "⨌";
var qopf = "𝕢";
var Qopf = "ℚ";
var qprime = "⁗";
var Qscr = "𝒬";
var qscr = "𝓆";
var quaternions = "ℍ";
var quatint = "⨖";
var quest = "?";
var questeq = "≟";
var quot = "\"";
var QUOT = "\"";
var rAarr = "⇛";
var race = "∽̱";
var Racute = "Ŕ";
var racute = "ŕ";
var radic = "√";
var raemptyv = "⦳";
var rang = "⟩";
var Rang = "⟫";
var rangd = "⦒";
var range = "⦥";
var rangle = "⟩";
var raquo = "»";
var rarrap = "⥵";
var rarrb = "⇥";
var rarrbfs = "⤠";
var rarrc = "⤳";
var rarr = "→";
var Rarr = "↠";
var rArr = "⇒";
var rarrfs = "⤞";
var rarrhk = "↪";
var rarrlp = "↬";
var rarrpl = "⥅";
var rarrsim = "⥴";
var Rarrtl = "⤖";
var rarrtl = "↣";
var rarrw = "↝";
var ratail = "⤚";
var rAtail = "⤜";
var ratio = "∶";
var rationals = "ℚ";
var rbarr = "⤍";
var rBarr = "⤏";
var RBarr = "⤐";
var rbbrk = "❳";
var rbrace = "}";
var rbrack = "]";
var rbrke = "⦌";
var rbrksld = "⦎";
var rbrkslu = "⦐";
var Rcaron = "Ř";
var rcaron = "ř";
var Rcedil = "Ŗ";
var rcedil = "ŗ";
var rceil = "⌉";
var rcub = "}";
var Rcy = "Р";
var rcy = "р";
var rdca = "⤷";
var rdldhar = "⥩";
var rdquo = "”";
var rdquor = "”";
var rdsh = "↳";
var real = "ℜ";
var realine = "ℛ";
var realpart = "ℜ";
var reals = "ℝ";
var Re = "ℜ";
var rect = "▭";
var reg = "®";
var REG = "®";
var ReverseElement = "∋";
var ReverseEquilibrium = "⇋";
var ReverseUpEquilibrium = "⥯";
var rfisht = "⥽";
var rfloor = "⌋";
var rfr = "𝔯";
var Rfr = "ℜ";
var rHar = "⥤";
var rhard = "⇁";
var rharu = "⇀";
var rharul = "⥬";
var Rho = "Ρ";
var rho = "ρ";
var rhov = "ϱ";
var RightAngleBracket = "⟩";
var RightArrowBar = "⇥";
var rightarrow = "→";
var RightArrow = "→";
var Rightarrow = "⇒";
var RightArrowLeftArrow = "⇄";
var rightarrowtail = "↣";
var RightCeiling = "⌉";
var RightDoubleBracket = "⟧";
var RightDownTeeVector = "⥝";
var RightDownVectorBar = "⥕";
var RightDownVector = "⇂";
var RightFloor = "⌋";
var rightharpoondown = "⇁";
var rightharpoonup = "⇀";
var rightleftarrows = "⇄";
var rightleftharpoons = "⇌";
var rightrightarrows = "⇉";
var rightsquigarrow = "↝";
var RightTeeArrow = "↦";
var RightTee = "⊢";
var RightTeeVector = "⥛";
var rightthreetimes = "⋌";
var RightTriangleBar = "⧐";
var RightTriangle = "⊳";
var RightTriangleEqual = "⊵";
var RightUpDownVector = "⥏";
var RightUpTeeVector = "⥜";
var RightUpVectorBar = "⥔";
var RightUpVector = "↾";
var RightVectorBar = "⥓";
var RightVector = "⇀";
var ring = "˚";
var risingdotseq = "≓";
var rlarr = "⇄";
var rlhar = "⇌";
var rlm = "‏";
var rmoustache = "⎱";
var rmoust = "⎱";
var rnmid = "⫮";
var roang = "⟭";
var roarr = "⇾";
var robrk = "⟧";
var ropar = "⦆";
var ropf = "𝕣";
var Ropf = "ℝ";
var roplus = "⨮";
var rotimes = "⨵";
var RoundImplies = "⥰";
var rpar = ")";
var rpargt = "⦔";
var rppolint = "⨒";
var rrarr = "⇉";
var Rrightarrow = "⇛";
var rsaquo = "›";
var rscr = "𝓇";
var Rscr = "ℛ";
var rsh = "↱";
var Rsh = "↱";
var rsqb = "]";
var rsquo = "’";
var rsquor = "’";
var rthree = "⋌";
var rtimes = "⋊";
var rtri = "▹";
var rtrie = "⊵";
var rtrif = "▸";
var rtriltri = "⧎";
var RuleDelayed = "⧴";
var ruluhar = "⥨";
var rx = "℞";
var Sacute = "Ś";
var sacute = "ś";
var sbquo = "‚";
var scap = "⪸";
var Scaron = "Š";
var scaron = "š";
var Sc = "⪼";
var sc = "≻";
var sccue = "≽";
var sce = "⪰";
var scE = "⪴";
var Scedil = "Ş";
var scedil = "ş";
var Scirc = "Ŝ";
var scirc = "ŝ";
var scnap = "⪺";
var scnE = "⪶";
var scnsim = "⋩";
var scpolint = "⨓";
var scsim = "≿";
var Scy = "С";
var scy = "с";
var sdotb = "⊡";
var sdot = "⋅";
var sdote = "⩦";
var searhk = "⤥";
var searr = "↘";
var seArr = "⇘";
var searrow = "↘";
var sect = "§";
var semi = ";";
var seswar = "⤩";
var setminus = "∖";
var setmn = "∖";
var sext = "✶";
var Sfr = "𝔖";
var sfr = "𝔰";
var sfrown = "⌢";
var sharp = "♯";
var SHCHcy = "Щ";
var shchcy = "щ";
var SHcy = "Ш";
var shcy = "ш";
var ShortDownArrow = "↓";
var ShortLeftArrow = "←";
var shortmid = "∣";
var shortparallel = "∥";
var ShortRightArrow = "→";
var ShortUpArrow = "↑";
var shy = "­";
var Sigma = "Σ";
var sigma = "σ";
var sigmaf = "ς";
var sigmav = "ς";
var sim = "∼";
var simdot = "⩪";
var sime = "≃";
var simeq = "≃";
var simg = "⪞";
var simgE = "⪠";
var siml = "⪝";
var simlE = "⪟";
var simne = "≆";
var simplus = "⨤";
var simrarr = "⥲";
var slarr = "←";
var SmallCircle = "∘";
var smallsetminus = "∖";
var smashp = "⨳";
var smeparsl = "⧤";
var smid = "∣";
var smile = "⌣";
var smt = "⪪";
var smte = "⪬";
var smtes = "⪬︀";
var SOFTcy = "Ь";
var softcy = "ь";
var solbar = "⌿";
var solb = "⧄";
var sol = "/";
var Sopf = "𝕊";
var sopf = "𝕤";
var spades = "♠";
var spadesuit = "♠";
var spar = "∥";
var sqcap = "⊓";
var sqcaps = "⊓︀";
var sqcup = "⊔";
var sqcups = "⊔︀";
var Sqrt = "√";
var sqsub = "⊏";
var sqsube = "⊑";
var sqsubset = "⊏";
var sqsubseteq = "⊑";
var sqsup = "⊐";
var sqsupe = "⊒";
var sqsupset = "⊐";
var sqsupseteq = "⊒";
var square = "□";
var Square = "□";
var SquareIntersection = "⊓";
var SquareSubset = "⊏";
var SquareSubsetEqual = "⊑";
var SquareSuperset = "⊐";
var SquareSupersetEqual = "⊒";
var SquareUnion = "⊔";
var squarf = "▪";
var squ = "□";
var squf = "▪";
var srarr = "→";
var Sscr = "𝒮";
var sscr = "𝓈";
var ssetmn = "∖";
var ssmile = "⌣";
var sstarf = "⋆";
var Star = "⋆";
var star = "☆";
var starf = "★";
var straightepsilon = "ϵ";
var straightphi = "ϕ";
var strns = "¯";
var sub = "⊂";
var Sub = "⋐";
var subdot = "⪽";
var subE = "⫅";
var sube = "⊆";
var subedot = "⫃";
var submult = "⫁";
var subnE = "⫋";
var subne = "⊊";
var subplus = "⪿";
var subrarr = "⥹";
var subset = "⊂";
var Subset = "⋐";
var subseteq = "⊆";
var subseteqq = "⫅";
var SubsetEqual = "⊆";
var subsetneq = "⊊";
var subsetneqq = "⫋";
var subsim = "⫇";
var subsub = "⫕";
var subsup = "⫓";
var succapprox = "⪸";
var succ = "≻";
var succcurlyeq = "≽";
var Succeeds = "≻";
var SucceedsEqual = "⪰";
var SucceedsSlantEqual = "≽";
var SucceedsTilde = "≿";
var succeq = "⪰";
var succnapprox = "⪺";
var succneqq = "⪶";
var succnsim = "⋩";
var succsim = "≿";
var SuchThat = "∋";
var sum = "∑";
var Sum = "∑";
var sung = "♪";
var sup1 = "¹";
var sup2 = "²";
var sup3 = "³";
var sup = "⊃";
var Sup = "⋑";
var supdot = "⪾";
var supdsub = "⫘";
var supE = "⫆";
var supe = "⊇";
var supedot = "⫄";
var Superset = "⊃";
var SupersetEqual = "⊇";
var suphsol = "⟉";
var suphsub = "⫗";
var suplarr = "⥻";
var supmult = "⫂";
var supnE = "⫌";
var supne = "⊋";
var supplus = "⫀";
var supset = "⊃";
var Supset = "⋑";
var supseteq = "⊇";
var supseteqq = "⫆";
var supsetneq = "⊋";
var supsetneqq = "⫌";
var supsim = "⫈";
var supsub = "⫔";
var supsup = "⫖";
var swarhk = "⤦";
var swarr = "↙";
var swArr = "⇙";
var swarrow = "↙";
var swnwar = "⤪";
var szlig = "ß";
var Tab = "\t";
var target = "⌖";
var Tau = "Τ";
var tau = "τ";
var tbrk = "⎴";
var Tcaron = "Ť";
var tcaron = "ť";
var Tcedil = "Ţ";
var tcedil = "ţ";
var Tcy = "Т";
var tcy = "т";
var tdot = "⃛";
var telrec = "⌕";
var Tfr = "𝔗";
var tfr = "𝔱";
var there4 = "∴";
var therefore = "∴";
var Therefore = "∴";
var Theta = "Θ";
var theta = "θ";
var thetasym = "ϑ";
var thetav = "ϑ";
var thickapprox = "≈";
var thicksim = "∼";
var ThickSpace = "  ";
var ThinSpace = " ";
var thinsp = " ";
var thkap = "≈";
var thksim = "∼";
var THORN = "Þ";
var thorn = "þ";
var tilde = "˜";
var Tilde = "∼";
var TildeEqual = "≃";
var TildeFullEqual = "≅";
var TildeTilde = "≈";
var timesbar = "⨱";
var timesb = "⊠";
var times = "×";
var timesd = "⨰";
var tint = "∭";
var toea = "⤨";
var topbot = "⌶";
var topcir = "⫱";
var top = "⊤";
var Topf = "𝕋";
var topf = "𝕥";
var topfork = "⫚";
var tosa = "⤩";
var tprime = "‴";
var trade = "™";
var TRADE = "™";
var triangle = "▵";
var triangledown = "▿";
var triangleleft = "◃";
var trianglelefteq = "⊴";
var triangleq = "≜";
var triangleright = "▹";
var trianglerighteq = "⊵";
var tridot = "◬";
var trie = "≜";
var triminus = "⨺";
var TripleDot = "⃛";
var triplus = "⨹";
var trisb = "⧍";
var tritime = "⨻";
var trpezium = "⏢";
var Tscr = "𝒯";
var tscr = "𝓉";
var TScy = "Ц";
var tscy = "ц";
var TSHcy = "Ћ";
var tshcy = "ћ";
var Tstrok = "Ŧ";
var tstrok = "ŧ";
var twixt = "≬";
var twoheadleftarrow = "↞";
var twoheadrightarrow = "↠";
var Uacute = "Ú";
var uacute = "ú";
var uarr = "↑";
var Uarr = "↟";
var uArr = "⇑";
var Uarrocir = "⥉";
var Ubrcy = "Ў";
var ubrcy = "ў";
var Ubreve = "Ŭ";
var ubreve = "ŭ";
var Ucirc = "Û";
var ucirc = "û";
var Ucy = "У";
var ucy = "у";
var udarr = "⇅";
var Udblac = "Ű";
var udblac = "ű";
var udhar = "⥮";
var ufisht = "⥾";
var Ufr = "𝔘";
var ufr = "𝔲";
var Ugrave = "Ù";
var ugrave = "ù";
var uHar = "⥣";
var uharl = "↿";
var uharr = "↾";
var uhblk = "▀";
var ulcorn = "⌜";
var ulcorner = "⌜";
var ulcrop = "⌏";
var ultri = "◸";
var Umacr = "Ū";
var umacr = "ū";
var uml = "¨";
var UnderBar = "_";
var UnderBrace = "⏟";
var UnderBracket = "⎵";
var UnderParenthesis = "⏝";
var Union = "⋃";
var UnionPlus = "⊎";
var Uogon = "Ų";
var uogon = "ų";
var Uopf = "𝕌";
var uopf = "𝕦";
var UpArrowBar = "⤒";
var uparrow = "↑";
var UpArrow = "↑";
var Uparrow = "⇑";
var UpArrowDownArrow = "⇅";
var updownarrow = "↕";
var UpDownArrow = "↕";
var Updownarrow = "⇕";
var UpEquilibrium = "⥮";
var upharpoonleft = "↿";
var upharpoonright = "↾";
var uplus = "⊎";
var UpperLeftArrow = "↖";
var UpperRightArrow = "↗";
var upsi = "υ";
var Upsi = "ϒ";
var upsih = "ϒ";
var Upsilon = "Υ";
var upsilon = "υ";
var UpTeeArrow = "↥";
var UpTee = "⊥";
var upuparrows = "⇈";
var urcorn = "⌝";
var urcorner = "⌝";
var urcrop = "⌎";
var Uring = "Ů";
var uring = "ů";
var urtri = "◹";
var Uscr = "𝒰";
var uscr = "𝓊";
var utdot = "⋰";
var Utilde = "Ũ";
var utilde = "ũ";
var utri = "▵";
var utrif = "▴";
var uuarr = "⇈";
var Uuml = "Ü";
var uuml = "ü";
var uwangle = "⦧";
var vangrt = "⦜";
var varepsilon = "ϵ";
var varkappa = "ϰ";
var varnothing = "∅";
var varphi = "ϕ";
var varpi = "ϖ";
var varpropto = "∝";
var varr = "↕";
var vArr = "⇕";
var varrho = "ϱ";
var varsigma = "ς";
var varsubsetneq = "⊊︀";
var varsubsetneqq = "⫋︀";
var varsupsetneq = "⊋︀";
var varsupsetneqq = "⫌︀";
var vartheta = "ϑ";
var vartriangleleft = "⊲";
var vartriangleright = "⊳";
var vBar = "⫨";
var Vbar = "⫫";
var vBarv = "⫩";
var Vcy = "В";
var vcy = "в";
var vdash = "⊢";
var vDash = "⊨";
var Vdash = "⊩";
var VDash = "⊫";
var Vdashl = "⫦";
var veebar = "⊻";
var vee = "∨";
var Vee = "⋁";
var veeeq = "≚";
var vellip = "⋮";
var verbar = "|";
var Verbar = "‖";
var vert = "|";
var Vert = "‖";
var VerticalBar = "∣";
var VerticalLine = "|";
var VerticalSeparator = "❘";
var VerticalTilde = "≀";
var VeryThinSpace = " ";
var Vfr = "𝔙";
var vfr = "𝔳";
var vltri = "⊲";
var vnsub = "⊂⃒";
var vnsup = "⊃⃒";
var Vopf = "𝕍";
var vopf = "𝕧";
var vprop = "∝";
var vrtri = "⊳";
var Vscr = "𝒱";
var vscr = "𝓋";
var vsubnE = "⫋︀";
var vsubne = "⊊︀";
var vsupnE = "⫌︀";
var vsupne = "⊋︀";
var Vvdash = "⊪";
var vzigzag = "⦚";
var Wcirc = "Ŵ";
var wcirc = "ŵ";
var wedbar = "⩟";
var wedge = "∧";
var Wedge = "⋀";
var wedgeq = "≙";
var weierp = "℘";
var Wfr = "𝔚";
var wfr = "𝔴";
var Wopf = "𝕎";
var wopf = "𝕨";
var wp = "℘";
var wr = "≀";
var wreath = "≀";
var Wscr = "𝒲";
var wscr = "𝓌";
var xcap = "⋂";
var xcirc = "◯";
var xcup = "⋃";
var xdtri = "▽";
var Xfr = "𝔛";
var xfr = "𝔵";
var xharr = "⟷";
var xhArr = "⟺";
var Xi = "Ξ";
var xi = "ξ";
var xlarr = "⟵";
var xlArr = "⟸";
var xmap = "⟼";
var xnis = "⋻";
var xodot = "⨀";
var Xopf = "𝕏";
var xopf = "𝕩";
var xoplus = "⨁";
var xotime = "⨂";
var xrarr = "⟶";
var xrArr = "⟹";
var Xscr = "𝒳";
var xscr = "𝓍";
var xsqcup = "⨆";
var xuplus = "⨄";
var xutri = "△";
var xvee = "⋁";
var xwedge = "⋀";
var Yacute = "Ý";
var yacute = "ý";
var YAcy = "Я";
var yacy = "я";
var Ycirc = "Ŷ";
var ycirc = "ŷ";
var Ycy = "Ы";
var ycy = "ы";
var yen = "¥";
var Yfr = "𝔜";
var yfr = "𝔶";
var YIcy = "Ї";
var yicy = "ї";
var Yopf = "𝕐";
var yopf = "𝕪";
var Yscr = "𝒴";
var yscr = "𝓎";
var YUcy = "Ю";
var yucy = "ю";
var yuml = "ÿ";
var Yuml = "Ÿ";
var Zacute = "Ź";
var zacute = "ź";
var Zcaron = "Ž";
var zcaron = "ž";
var Zcy = "З";
var zcy = "з";
var Zdot = "Ż";
var zdot = "ż";
var zeetrf = "ℨ";
var ZeroWidthSpace = "​";
var Zeta = "Ζ";
var zeta = "ζ";
var zfr = "𝔷";
var Zfr = "ℨ";
var ZHcy = "Ж";
var zhcy = "ж";
var zigrarr = "⇝";
var zopf = "𝕫";
var Zopf = "ℤ";
var Zscr = "𝒵";
var zscr = "𝓏";
var zwj = "‍";
var zwnj = "‌";
var require$$0 = {
	Aacute: Aacute,
	aacute: aacute,
	Abreve: Abreve,
	abreve: abreve,
	ac: ac,
	acd: acd,
	acE: acE,
	Acirc: Acirc,
	acirc: acirc,
	acute: acute,
	Acy: Acy,
	acy: acy,
	AElig: AElig,
	aelig: aelig,
	af: af,
	Afr: Afr,
	afr: afr,
	Agrave: Agrave,
	agrave: agrave,
	alefsym: alefsym,
	aleph: aleph,
	Alpha: Alpha,
	alpha: alpha,
	Amacr: Amacr,
	amacr: amacr,
	amalg: amalg,
	amp: amp,
	AMP: AMP,
	andand: andand,
	And: And,
	and: and,
	andd: andd,
	andslope: andslope,
	andv: andv,
	ang: ang,
	ange: ange,
	angle: angle,
	angmsdaa: angmsdaa,
	angmsdab: angmsdab,
	angmsdac: angmsdac,
	angmsdad: angmsdad,
	angmsdae: angmsdae,
	angmsdaf: angmsdaf,
	angmsdag: angmsdag,
	angmsdah: angmsdah,
	angmsd: angmsd,
	angrt: angrt,
	angrtvb: angrtvb,
	angrtvbd: angrtvbd,
	angsph: angsph,
	angst: angst,
	angzarr: angzarr,
	Aogon: Aogon,
	aogon: aogon,
	Aopf: Aopf,
	aopf: aopf,
	apacir: apacir,
	ap: ap,
	apE: apE,
	ape: ape,
	apid: apid,
	apos: apos,
	ApplyFunction: ApplyFunction,
	approx: approx,
	approxeq: approxeq,
	Aring: Aring,
	aring: aring,
	Ascr: Ascr,
	ascr: ascr,
	Assign: Assign,
	ast: ast,
	asymp: asymp,
	asympeq: asympeq,
	Atilde: Atilde,
	atilde: atilde,
	Auml: Auml,
	auml: auml,
	awconint: awconint,
	awint: awint,
	backcong: backcong,
	backepsilon: backepsilon,
	backprime: backprime,
	backsim: backsim,
	backsimeq: backsimeq,
	Backslash: Backslash,
	Barv: Barv,
	barvee: barvee,
	barwed: barwed,
	Barwed: Barwed,
	barwedge: barwedge,
	bbrk: bbrk,
	bbrktbrk: bbrktbrk,
	bcong: bcong,
	Bcy: Bcy,
	bcy: bcy,
	bdquo: bdquo,
	becaus: becaus,
	because: because,
	Because: Because,
	bemptyv: bemptyv,
	bepsi: bepsi,
	bernou: bernou,
	Bernoullis: Bernoullis,
	Beta: Beta,
	beta: beta,
	beth: beth,
	between: between,
	Bfr: Bfr,
	bfr: bfr,
	bigcap: bigcap,
	bigcirc: bigcirc,
	bigcup: bigcup,
	bigodot: bigodot,
	bigoplus: bigoplus,
	bigotimes: bigotimes,
	bigsqcup: bigsqcup,
	bigstar: bigstar,
	bigtriangledown: bigtriangledown,
	bigtriangleup: bigtriangleup,
	biguplus: biguplus,
	bigvee: bigvee,
	bigwedge: bigwedge,
	bkarow: bkarow,
	blacklozenge: blacklozenge,
	blacksquare: blacksquare,
	blacktriangle: blacktriangle,
	blacktriangledown: blacktriangledown,
	blacktriangleleft: blacktriangleleft,
	blacktriangleright: blacktriangleright,
	blank: blank,
	blk12: blk12,
	blk14: blk14,
	blk34: blk34,
	block: block$1,
	bne: bne,
	bnequiv: bnequiv,
	bNot: bNot,
	bnot: bnot,
	Bopf: Bopf,
	bopf: bopf,
	bot: bot,
	bottom: bottom,
	bowtie: bowtie,
	boxbox: boxbox,
	boxdl: boxdl,
	boxdL: boxdL,
	boxDl: boxDl,
	boxDL: boxDL,
	boxdr: boxdr,
	boxdR: boxdR,
	boxDr: boxDr,
	boxDR: boxDR,
	boxh: boxh,
	boxH: boxH,
	boxhd: boxhd,
	boxHd: boxHd,
	boxhD: boxhD,
	boxHD: boxHD,
	boxhu: boxhu,
	boxHu: boxHu,
	boxhU: boxhU,
	boxHU: boxHU,
	boxminus: boxminus,
	boxplus: boxplus,
	boxtimes: boxtimes,
	boxul: boxul,
	boxuL: boxuL,
	boxUl: boxUl,
	boxUL: boxUL,
	boxur: boxur,
	boxuR: boxuR,
	boxUr: boxUr,
	boxUR: boxUR,
	boxv: boxv,
	boxV: boxV,
	boxvh: boxvh,
	boxvH: boxvH,
	boxVh: boxVh,
	boxVH: boxVH,
	boxvl: boxvl,
	boxvL: boxvL,
	boxVl: boxVl,
	boxVL: boxVL,
	boxvr: boxvr,
	boxvR: boxvR,
	boxVr: boxVr,
	boxVR: boxVR,
	bprime: bprime,
	breve: breve,
	Breve: Breve,
	brvbar: brvbar,
	bscr: bscr,
	Bscr: Bscr,
	bsemi: bsemi,
	bsim: bsim,
	bsime: bsime,
	bsolb: bsolb,
	bsol: bsol,
	bsolhsub: bsolhsub,
	bull: bull,
	bullet: bullet,
	bump: bump,
	bumpE: bumpE,
	bumpe: bumpe,
	Bumpeq: Bumpeq,
	bumpeq: bumpeq,
	Cacute: Cacute,
	cacute: cacute,
	capand: capand,
	capbrcup: capbrcup,
	capcap: capcap,
	cap: cap,
	Cap: Cap,
	capcup: capcup,
	capdot: capdot,
	CapitalDifferentialD: CapitalDifferentialD,
	caps: caps,
	caret: caret,
	caron: caron,
	Cayleys: Cayleys,
	ccaps: ccaps,
	Ccaron: Ccaron,
	ccaron: ccaron,
	Ccedil: Ccedil,
	ccedil: ccedil,
	Ccirc: Ccirc,
	ccirc: ccirc,
	Cconint: Cconint,
	ccups: ccups,
	ccupssm: ccupssm,
	Cdot: Cdot,
	cdot: cdot,
	cedil: cedil,
	Cedilla: Cedilla,
	cemptyv: cemptyv,
	cent: cent,
	centerdot: centerdot,
	CenterDot: CenterDot,
	cfr: cfr,
	Cfr: Cfr,
	CHcy: CHcy,
	chcy: chcy,
	check: check,
	checkmark: checkmark,
	Chi: Chi,
	chi: chi,
	circ: circ,
	circeq: circeq,
	circlearrowleft: circlearrowleft,
	circlearrowright: circlearrowright,
	circledast: circledast,
	circledcirc: circledcirc,
	circleddash: circleddash,
	CircleDot: CircleDot,
	circledR: circledR,
	circledS: circledS,
	CircleMinus: CircleMinus,
	CirclePlus: CirclePlus,
	CircleTimes: CircleTimes,
	cir: cir,
	cirE: cirE,
	cire: cire,
	cirfnint: cirfnint,
	cirmid: cirmid,
	cirscir: cirscir,
	ClockwiseContourIntegral: ClockwiseContourIntegral,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
	CloseCurlyQuote: CloseCurlyQuote,
	clubs: clubs,
	clubsuit: clubsuit,
	colon: colon,
	Colon: Colon,
	Colone: Colone,
	colone: colone,
	coloneq: coloneq,
	comma: comma,
	commat: commat,
	comp: comp,
	compfn: compfn,
	complement: complement,
	complexes: complexes,
	cong: cong,
	congdot: congdot,
	Congruent: Congruent,
	conint: conint,
	Conint: Conint,
	ContourIntegral: ContourIntegral,
	copf: copf,
	Copf: Copf,
	coprod: coprod,
	Coproduct: Coproduct,
	copy: copy,
	COPY: COPY,
	copysr: copysr,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
	crarr: crarr,
	cross: cross,
	Cross: Cross,
	Cscr: Cscr,
	cscr: cscr,
	csub: csub,
	csube: csube,
	csup: csup,
	csupe: csupe,
	ctdot: ctdot,
	cudarrl: cudarrl,
	cudarrr: cudarrr,
	cuepr: cuepr,
	cuesc: cuesc,
	cularr: cularr,
	cularrp: cularrp,
	cupbrcap: cupbrcap,
	cupcap: cupcap,
	CupCap: CupCap,
	cup: cup,
	Cup: Cup,
	cupcup: cupcup,
	cupdot: cupdot,
	cupor: cupor,
	cups: cups,
	curarr: curarr,
	curarrm: curarrm,
	curlyeqprec: curlyeqprec,
	curlyeqsucc: curlyeqsucc,
	curlyvee: curlyvee,
	curlywedge: curlywedge,
	curren: curren,
	curvearrowleft: curvearrowleft,
	curvearrowright: curvearrowright,
	cuvee: cuvee,
	cuwed: cuwed,
	cwconint: cwconint,
	cwint: cwint,
	cylcty: cylcty,
	dagger: dagger,
	Dagger: Dagger,
	daleth: daleth,
	darr: darr,
	Darr: Darr,
	dArr: dArr,
	dash: dash,
	Dashv: Dashv,
	dashv: dashv,
	dbkarow: dbkarow,
	dblac: dblac,
	Dcaron: Dcaron,
	dcaron: dcaron,
	Dcy: Dcy,
	dcy: dcy,
	ddagger: ddagger,
	ddarr: ddarr,
	DD: DD,
	dd: dd,
	DDotrahd: DDotrahd,
	ddotseq: ddotseq,
	deg: deg,
	Del: Del,
	Delta: Delta,
	delta: delta,
	demptyv: demptyv,
	dfisht: dfisht,
	Dfr: Dfr,
	dfr: dfr,
	dHar: dHar,
	dharl: dharl,
	dharr: dharr,
	DiacriticalAcute: DiacriticalAcute,
	DiacriticalDot: DiacriticalDot,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
	DiacriticalGrave: DiacriticalGrave,
	DiacriticalTilde: DiacriticalTilde,
	diam: diam,
	diamond: diamond,
	Diamond: Diamond,
	diamondsuit: diamondsuit,
	diams: diams,
	die: die,
	DifferentialD: DifferentialD,
	digamma: digamma,
	disin: disin,
	div: div,
	divide: divide,
	divideontimes: divideontimes,
	divonx: divonx,
	DJcy: DJcy,
	djcy: djcy,
	dlcorn: dlcorn,
	dlcrop: dlcrop,
	dollar: dollar,
	Dopf: Dopf,
	dopf: dopf,
	Dot: Dot,
	dot: dot,
	DotDot: DotDot,
	doteq: doteq,
	doteqdot: doteqdot,
	DotEqual: DotEqual,
	dotminus: dotminus,
	dotplus: dotplus,
	dotsquare: dotsquare,
	doublebarwedge: doublebarwedge,
	DoubleContourIntegral: DoubleContourIntegral,
	DoubleDot: DoubleDot,
	DoubleDownArrow: DoubleDownArrow,
	DoubleLeftArrow: DoubleLeftArrow,
	DoubleLeftRightArrow: DoubleLeftRightArrow,
	DoubleLeftTee: DoubleLeftTee,
	DoubleLongLeftArrow: DoubleLongLeftArrow,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
	DoubleLongRightArrow: DoubleLongRightArrow,
	DoubleRightArrow: DoubleRightArrow,
	DoubleRightTee: DoubleRightTee,
	DoubleUpArrow: DoubleUpArrow,
	DoubleUpDownArrow: DoubleUpDownArrow,
	DoubleVerticalBar: DoubleVerticalBar,
	DownArrowBar: DownArrowBar,
	downarrow: downarrow,
	DownArrow: DownArrow,
	Downarrow: Downarrow,
	DownArrowUpArrow: DownArrowUpArrow,
	DownBreve: DownBreve,
	downdownarrows: downdownarrows,
	downharpoonleft: downharpoonleft,
	downharpoonright: downharpoonright,
	DownLeftRightVector: DownLeftRightVector,
	DownLeftTeeVector: DownLeftTeeVector,
	DownLeftVectorBar: DownLeftVectorBar,
	DownLeftVector: DownLeftVector,
	DownRightTeeVector: DownRightTeeVector,
	DownRightVectorBar: DownRightVectorBar,
	DownRightVector: DownRightVector,
	DownTeeArrow: DownTeeArrow,
	DownTee: DownTee,
	drbkarow: drbkarow,
	drcorn: drcorn,
	drcrop: drcrop,
	Dscr: Dscr,
	dscr: dscr,
	DScy: DScy,
	dscy: dscy,
	dsol: dsol,
	Dstrok: Dstrok,
	dstrok: dstrok,
	dtdot: dtdot,
	dtri: dtri,
	dtrif: dtrif,
	duarr: duarr,
	duhar: duhar,
	dwangle: dwangle,
	DZcy: DZcy,
	dzcy: dzcy,
	dzigrarr: dzigrarr,
	Eacute: Eacute,
	eacute: eacute,
	easter: easter,
	Ecaron: Ecaron,
	ecaron: ecaron,
	Ecirc: Ecirc,
	ecirc: ecirc,
	ecir: ecir,
	ecolon: ecolon,
	Ecy: Ecy,
	ecy: ecy,
	eDDot: eDDot,
	Edot: Edot,
	edot: edot,
	eDot: eDot,
	ee: ee,
	efDot: efDot,
	Efr: Efr,
	efr: efr,
	eg: eg,
	Egrave: Egrave,
	egrave: egrave,
	egs: egs,
	egsdot: egsdot,
	el: el,
	Element: Element,
	elinters: elinters,
	ell: ell,
	els: els,
	elsdot: elsdot,
	Emacr: Emacr,
	emacr: emacr,
	empty: empty,
	emptyset: emptyset,
	EmptySmallSquare: EmptySmallSquare,
	emptyv: emptyv,
	EmptyVerySmallSquare: EmptyVerySmallSquare,
	emsp13: emsp13,
	emsp14: emsp14,
	emsp: emsp,
	ENG: ENG,
	eng: eng,
	ensp: ensp,
	Eogon: Eogon,
	eogon: eogon,
	Eopf: Eopf,
	eopf: eopf,
	epar: epar,
	eparsl: eparsl,
	eplus: eplus,
	epsi: epsi,
	Epsilon: Epsilon,
	epsilon: epsilon,
	epsiv: epsiv,
	eqcirc: eqcirc,
	eqcolon: eqcolon,
	eqsim: eqsim,
	eqslantgtr: eqslantgtr,
	eqslantless: eqslantless,
	Equal: Equal,
	equals: equals,
	EqualTilde: EqualTilde,
	equest: equest,
	Equilibrium: Equilibrium,
	equiv: equiv,
	equivDD: equivDD,
	eqvparsl: eqvparsl,
	erarr: erarr,
	erDot: erDot,
	escr: escr,
	Escr: Escr,
	esdot: esdot,
	Esim: Esim,
	esim: esim,
	Eta: Eta,
	eta: eta,
	ETH: ETH,
	eth: eth,
	Euml: Euml,
	euml: euml,
	euro: euro,
	excl: excl,
	exist: exist,
	Exists: Exists,
	expectation: expectation,
	exponentiale: exponentiale,
	ExponentialE: ExponentialE,
	fallingdotseq: fallingdotseq,
	Fcy: Fcy,
	fcy: fcy,
	female: female,
	ffilig: ffilig,
	fflig: fflig,
	ffllig: ffllig,
	Ffr: Ffr,
	ffr: ffr,
	filig: filig,
	FilledSmallSquare: FilledSmallSquare,
	FilledVerySmallSquare: FilledVerySmallSquare,
	fjlig: fjlig,
	flat: flat,
	fllig: fllig,
	fltns: fltns,
	fnof: fnof,
	Fopf: Fopf,
	fopf: fopf,
	forall: forall,
	ForAll: ForAll,
	fork: fork,
	forkv: forkv,
	Fouriertrf: Fouriertrf,
	fpartint: fpartint,
	frac12: frac12,
	frac13: frac13,
	frac14: frac14,
	frac15: frac15,
	frac16: frac16,
	frac18: frac18,
	frac23: frac23,
	frac25: frac25,
	frac34: frac34,
	frac35: frac35,
	frac38: frac38,
	frac45: frac45,
	frac56: frac56,
	frac58: frac58,
	frac78: frac78,
	frasl: frasl,
	frown: frown,
	fscr: fscr,
	Fscr: Fscr,
	gacute: gacute,
	Gamma: Gamma,
	gamma: gamma,
	Gammad: Gammad,
	gammad: gammad,
	gap: gap,
	Gbreve: Gbreve,
	gbreve: gbreve,
	Gcedil: Gcedil,
	Gcirc: Gcirc,
	gcirc: gcirc,
	Gcy: Gcy,
	gcy: gcy,
	Gdot: Gdot,
	gdot: gdot,
	ge: ge,
	gE: gE,
	gEl: gEl,
	gel: gel,
	geq: geq,
	geqq: geqq,
	geqslant: geqslant,
	gescc: gescc,
	ges: ges,
	gesdot: gesdot,
	gesdoto: gesdoto,
	gesdotol: gesdotol,
	gesl: gesl,
	gesles: gesles,
	Gfr: Gfr,
	gfr: gfr,
	gg: gg,
	Gg: Gg,
	ggg: ggg,
	gimel: gimel,
	GJcy: GJcy,
	gjcy: gjcy,
	gla: gla,
	gl: gl,
	glE: glE,
	glj: glj,
	gnap: gnap,
	gnapprox: gnapprox,
	gne: gne,
	gnE: gnE,
	gneq: gneq,
	gneqq: gneqq,
	gnsim: gnsim,
	Gopf: Gopf,
	gopf: gopf,
	grave: grave,
	GreaterEqual: GreaterEqual,
	GreaterEqualLess: GreaterEqualLess,
	GreaterFullEqual: GreaterFullEqual,
	GreaterGreater: GreaterGreater,
	GreaterLess: GreaterLess,
	GreaterSlantEqual: GreaterSlantEqual,
	GreaterTilde: GreaterTilde,
	Gscr: Gscr,
	gscr: gscr,
	gsim: gsim,
	gsime: gsime,
	gsiml: gsiml,
	gtcc: gtcc,
	gtcir: gtcir,
	gt: gt,
	GT: GT,
	Gt: Gt,
	gtdot: gtdot,
	gtlPar: gtlPar,
	gtquest: gtquest,
	gtrapprox: gtrapprox,
	gtrarr: gtrarr,
	gtrdot: gtrdot,
	gtreqless: gtreqless,
	gtreqqless: gtreqqless,
	gtrless: gtrless,
	gtrsim: gtrsim,
	gvertneqq: gvertneqq,
	gvnE: gvnE,
	Hacek: Hacek,
	hairsp: hairsp,
	half: half,
	hamilt: hamilt,
	HARDcy: HARDcy,
	hardcy: hardcy,
	harrcir: harrcir,
	harr: harr,
	hArr: hArr,
	harrw: harrw,
	Hat: Hat,
	hbar: hbar,
	Hcirc: Hcirc,
	hcirc: hcirc,
	hearts: hearts,
	heartsuit: heartsuit,
	hellip: hellip,
	hercon: hercon,
	hfr: hfr,
	Hfr: Hfr,
	HilbertSpace: HilbertSpace,
	hksearow: hksearow,
	hkswarow: hkswarow,
	hoarr: hoarr,
	homtht: homtht,
	hookleftarrow: hookleftarrow,
	hookrightarrow: hookrightarrow,
	hopf: hopf,
	Hopf: Hopf,
	horbar: horbar,
	HorizontalLine: HorizontalLine,
	hscr: hscr,
	Hscr: Hscr,
	hslash: hslash,
	Hstrok: Hstrok,
	hstrok: hstrok,
	HumpDownHump: HumpDownHump,
	HumpEqual: HumpEqual,
	hybull: hybull,
	hyphen: hyphen,
	Iacute: Iacute,
	iacute: iacute,
	ic: ic,
	Icirc: Icirc,
	icirc: icirc,
	Icy: Icy,
	icy: icy,
	Idot: Idot,
	IEcy: IEcy,
	iecy: iecy,
	iexcl: iexcl,
	iff: iff,
	ifr: ifr,
	Ifr: Ifr,
	Igrave: Igrave,
	igrave: igrave,
	ii: ii,
	iiiint: iiiint,
	iiint: iiint,
	iinfin: iinfin,
	iiota: iiota,
	IJlig: IJlig,
	ijlig: ijlig,
	Imacr: Imacr,
	imacr: imacr,
	image: image$1,
	ImaginaryI: ImaginaryI,
	imagline: imagline,
	imagpart: imagpart,
	imath: imath,
	Im: Im,
	imof: imof,
	imped: imped,
	Implies: Implies,
	incare: incare,
	"in": "∈",
	infin: infin,
	infintie: infintie,
	inodot: inodot,
	intcal: intcal,
	int: int,
	Int: Int,
	integers: integers,
	Integral: Integral,
	intercal: intercal,
	Intersection: Intersection,
	intlarhk: intlarhk,
	intprod: intprod,
	InvisibleComma: InvisibleComma,
	InvisibleTimes: InvisibleTimes,
	IOcy: IOcy,
	iocy: iocy,
	Iogon: Iogon,
	iogon: iogon,
	Iopf: Iopf,
	iopf: iopf,
	Iota: Iota,
	iota: iota,
	iprod: iprod,
	iquest: iquest,
	iscr: iscr,
	Iscr: Iscr,
	isin: isin,
	isindot: isindot,
	isinE: isinE,
	isins: isins,
	isinsv: isinsv,
	isinv: isinv,
	it: it,
	Itilde: Itilde,
	itilde: itilde,
	Iukcy: Iukcy,
	iukcy: iukcy,
	Iuml: Iuml,
	iuml: iuml,
	Jcirc: Jcirc,
	jcirc: jcirc,
	Jcy: Jcy,
	jcy: jcy,
	Jfr: Jfr,
	jfr: jfr,
	jmath: jmath,
	Jopf: Jopf,
	jopf: jopf,
	Jscr: Jscr,
	jscr: jscr,
	Jsercy: Jsercy,
	jsercy: jsercy,
	Jukcy: Jukcy,
	jukcy: jukcy,
	Kappa: Kappa,
	kappa: kappa,
	kappav: kappav,
	Kcedil: Kcedil,
	kcedil: kcedil,
	Kcy: Kcy,
	kcy: kcy,
	Kfr: Kfr,
	kfr: kfr,
	kgreen: kgreen,
	KHcy: KHcy,
	khcy: khcy,
	KJcy: KJcy,
	kjcy: kjcy,
	Kopf: Kopf,
	kopf: kopf,
	Kscr: Kscr,
	kscr: kscr,
	lAarr: lAarr,
	Lacute: Lacute,
	lacute: lacute,
	laemptyv: laemptyv,
	lagran: lagran,
	Lambda: Lambda,
	lambda: lambda,
	lang: lang,
	Lang: Lang,
	langd: langd,
	langle: langle,
	lap: lap,
	Laplacetrf: Laplacetrf,
	laquo: laquo,
	larrb: larrb,
	larrbfs: larrbfs,
	larr: larr,
	Larr: Larr,
	lArr: lArr,
	larrfs: larrfs,
	larrhk: larrhk,
	larrlp: larrlp,
	larrpl: larrpl,
	larrsim: larrsim,
	larrtl: larrtl,
	latail: latail,
	lAtail: lAtail,
	lat: lat,
	late: late,
	lates: lates,
	lbarr: lbarr,
	lBarr: lBarr,
	lbbrk: lbbrk,
	lbrace: lbrace,
	lbrack: lbrack,
	lbrke: lbrke,
	lbrksld: lbrksld,
	lbrkslu: lbrkslu,
	Lcaron: Lcaron,
	lcaron: lcaron,
	Lcedil: Lcedil,
	lcedil: lcedil,
	lceil: lceil,
	lcub: lcub,
	Lcy: Lcy,
	lcy: lcy,
	ldca: ldca,
	ldquo: ldquo,
	ldquor: ldquor,
	ldrdhar: ldrdhar,
	ldrushar: ldrushar,
	ldsh: ldsh,
	le: le,
	lE: lE,
	LeftAngleBracket: LeftAngleBracket,
	LeftArrowBar: LeftArrowBar,
	leftarrow: leftarrow,
	LeftArrow: LeftArrow,
	Leftarrow: Leftarrow,
	LeftArrowRightArrow: LeftArrowRightArrow,
	leftarrowtail: leftarrowtail,
	LeftCeiling: LeftCeiling,
	LeftDoubleBracket: LeftDoubleBracket,
	LeftDownTeeVector: LeftDownTeeVector,
	LeftDownVectorBar: LeftDownVectorBar,
	LeftDownVector: LeftDownVector,
	LeftFloor: LeftFloor,
	leftharpoondown: leftharpoondown,
	leftharpoonup: leftharpoonup,
	leftleftarrows: leftleftarrows,
	leftrightarrow: leftrightarrow,
	LeftRightArrow: LeftRightArrow,
	Leftrightarrow: Leftrightarrow,
	leftrightarrows: leftrightarrows,
	leftrightharpoons: leftrightharpoons,
	leftrightsquigarrow: leftrightsquigarrow,
	LeftRightVector: LeftRightVector,
	LeftTeeArrow: LeftTeeArrow,
	LeftTee: LeftTee,
	LeftTeeVector: LeftTeeVector,
	leftthreetimes: leftthreetimes,
	LeftTriangleBar: LeftTriangleBar,
	LeftTriangle: LeftTriangle,
	LeftTriangleEqual: LeftTriangleEqual,
	LeftUpDownVector: LeftUpDownVector,
	LeftUpTeeVector: LeftUpTeeVector,
	LeftUpVectorBar: LeftUpVectorBar,
	LeftUpVector: LeftUpVector,
	LeftVectorBar: LeftVectorBar,
	LeftVector: LeftVector,
	lEg: lEg,
	leg: leg,
	leq: leq,
	leqq: leqq,
	leqslant: leqslant,
	lescc: lescc,
	les: les,
	lesdot: lesdot,
	lesdoto: lesdoto,
	lesdotor: lesdotor,
	lesg: lesg,
	lesges: lesges,
	lessapprox: lessapprox,
	lessdot: lessdot,
	lesseqgtr: lesseqgtr,
	lesseqqgtr: lesseqqgtr,
	LessEqualGreater: LessEqualGreater,
	LessFullEqual: LessFullEqual,
	LessGreater: LessGreater,
	lessgtr: lessgtr,
	LessLess: LessLess,
	lesssim: lesssim,
	LessSlantEqual: LessSlantEqual,
	LessTilde: LessTilde,
	lfisht: lfisht,
	lfloor: lfloor,
	Lfr: Lfr,
	lfr: lfr,
	lg: lg,
	lgE: lgE,
	lHar: lHar,
	lhard: lhard,
	lharu: lharu,
	lharul: lharul,
	lhblk: lhblk,
	LJcy: LJcy,
	ljcy: ljcy,
	llarr: llarr,
	ll: ll,
	Ll: Ll,
	llcorner: llcorner,
	Lleftarrow: Lleftarrow,
	llhard: llhard,
	lltri: lltri,
	Lmidot: Lmidot,
	lmidot: lmidot,
	lmoustache: lmoustache,
	lmoust: lmoust,
	lnap: lnap,
	lnapprox: lnapprox,
	lne: lne,
	lnE: lnE,
	lneq: lneq,
	lneqq: lneqq,
	lnsim: lnsim,
	loang: loang,
	loarr: loarr,
	lobrk: lobrk,
	longleftarrow: longleftarrow,
	LongLeftArrow: LongLeftArrow,
	Longleftarrow: Longleftarrow,
	longleftrightarrow: longleftrightarrow,
	LongLeftRightArrow: LongLeftRightArrow,
	Longleftrightarrow: Longleftrightarrow,
	longmapsto: longmapsto,
	longrightarrow: longrightarrow,
	LongRightArrow: LongRightArrow,
	Longrightarrow: Longrightarrow,
	looparrowleft: looparrowleft,
	looparrowright: looparrowright,
	lopar: lopar,
	Lopf: Lopf,
	lopf: lopf,
	loplus: loplus,
	lotimes: lotimes,
	lowast: lowast,
	lowbar: lowbar,
	LowerLeftArrow: LowerLeftArrow,
	LowerRightArrow: LowerRightArrow,
	loz: loz,
	lozenge: lozenge,
	lozf: lozf,
	lpar: lpar,
	lparlt: lparlt,
	lrarr: lrarr,
	lrcorner: lrcorner,
	lrhar: lrhar,
	lrhard: lrhard,
	lrm: lrm,
	lrtri: lrtri,
	lsaquo: lsaquo,
	lscr: lscr,
	Lscr: Lscr,
	lsh: lsh,
	Lsh: Lsh,
	lsim: lsim,
	lsime: lsime,
	lsimg: lsimg,
	lsqb: lsqb,
	lsquo: lsquo,
	lsquor: lsquor,
	Lstrok: Lstrok,
	lstrok: lstrok,
	ltcc: ltcc,
	ltcir: ltcir,
	lt: lt,
	LT: LT,
	Lt: Lt,
	ltdot: ltdot,
	lthree: lthree,
	ltimes: ltimes,
	ltlarr: ltlarr,
	ltquest: ltquest,
	ltri: ltri,
	ltrie: ltrie,
	ltrif: ltrif,
	ltrPar: ltrPar,
	lurdshar: lurdshar,
	luruhar: luruhar,
	lvertneqq: lvertneqq,
	lvnE: lvnE,
	macr: macr,
	male: male,
	malt: malt,
	maltese: maltese,
	"Map": "⤅",
	map: map$1,
	mapsto: mapsto,
	mapstodown: mapstodown,
	mapstoleft: mapstoleft,
	mapstoup: mapstoup,
	marker: marker,
	mcomma: mcomma,
	Mcy: Mcy,
	mcy: mcy,
	mdash: mdash,
	mDDot: mDDot,
	measuredangle: measuredangle,
	MediumSpace: MediumSpace,
	Mellintrf: Mellintrf,
	Mfr: Mfr,
	mfr: mfr,
	mho: mho,
	micro: micro,
	midast: midast,
	midcir: midcir,
	mid: mid,
	middot: middot,
	minusb: minusb,
	minus: minus,
	minusd: minusd,
	minusdu: minusdu,
	MinusPlus: MinusPlus,
	mlcp: mlcp,
	mldr: mldr,
	mnplus: mnplus,
	models: models,
	Mopf: Mopf,
	mopf: mopf,
	mp: mp,
	mscr: mscr,
	Mscr: Mscr,
	mstpos: mstpos,
	Mu: Mu,
	mu: mu,
	multimap: multimap,
	mumap: mumap,
	nabla: nabla,
	Nacute: Nacute,
	nacute: nacute,
	nang: nang,
	nap: nap,
	napE: napE,
	napid: napid,
	napos: napos,
	napprox: napprox,
	natural: natural,
	naturals: naturals,
	natur: natur,
	nbsp: nbsp,
	nbump: nbump,
	nbumpe: nbumpe,
	ncap: ncap,
	Ncaron: Ncaron,
	ncaron: ncaron,
	Ncedil: Ncedil,
	ncedil: ncedil,
	ncong: ncong,
	ncongdot: ncongdot,
	ncup: ncup,
	Ncy: Ncy,
	ncy: ncy,
	ndash: ndash,
	nearhk: nearhk,
	nearr: nearr,
	neArr: neArr,
	nearrow: nearrow,
	ne: ne,
	nedot: nedot,
	NegativeMediumSpace: NegativeMediumSpace,
	NegativeThickSpace: NegativeThickSpace,
	NegativeThinSpace: NegativeThinSpace,
	NegativeVeryThinSpace: NegativeVeryThinSpace,
	nequiv: nequiv,
	nesear: nesear,
	nesim: nesim,
	NestedGreaterGreater: NestedGreaterGreater,
	NestedLessLess: NestedLessLess,
	NewLine: NewLine,
	nexist: nexist,
	nexists: nexists,
	Nfr: Nfr,
	nfr: nfr,
	ngE: ngE,
	nge: nge,
	ngeq: ngeq,
	ngeqq: ngeqq,
	ngeqslant: ngeqslant,
	nges: nges,
	nGg: nGg,
	ngsim: ngsim,
	nGt: nGt,
	ngt: ngt,
	ngtr: ngtr,
	nGtv: nGtv,
	nharr: nharr,
	nhArr: nhArr,
	nhpar: nhpar,
	ni: ni,
	nis: nis,
	nisd: nisd,
	niv: niv,
	NJcy: NJcy,
	njcy: njcy,
	nlarr: nlarr,
	nlArr: nlArr,
	nldr: nldr,
	nlE: nlE,
	nle: nle,
	nleftarrow: nleftarrow,
	nLeftarrow: nLeftarrow,
	nleftrightarrow: nleftrightarrow,
	nLeftrightarrow: nLeftrightarrow,
	nleq: nleq,
	nleqq: nleqq,
	nleqslant: nleqslant,
	nles: nles,
	nless: nless,
	nLl: nLl,
	nlsim: nlsim,
	nLt: nLt,
	nlt: nlt,
	nltri: nltri,
	nltrie: nltrie,
	nLtv: nLtv,
	nmid: nmid,
	NoBreak: NoBreak,
	NonBreakingSpace: NonBreakingSpace,
	nopf: nopf,
	Nopf: Nopf,
	Not: Not,
	not: not,
	NotCongruent: NotCongruent,
	NotCupCap: NotCupCap,
	NotDoubleVerticalBar: NotDoubleVerticalBar,
	NotElement: NotElement,
	NotEqual: NotEqual,
	NotEqualTilde: NotEqualTilde,
	NotExists: NotExists,
	NotGreater: NotGreater,
	NotGreaterEqual: NotGreaterEqual,
	NotGreaterFullEqual: NotGreaterFullEqual,
	NotGreaterGreater: NotGreaterGreater,
	NotGreaterLess: NotGreaterLess,
	NotGreaterSlantEqual: NotGreaterSlantEqual,
	NotGreaterTilde: NotGreaterTilde,
	NotHumpDownHump: NotHumpDownHump,
	NotHumpEqual: NotHumpEqual,
	notin: notin,
	notindot: notindot,
	notinE: notinE,
	notinva: notinva,
	notinvb: notinvb,
	notinvc: notinvc,
	NotLeftTriangleBar: NotLeftTriangleBar,
	NotLeftTriangle: NotLeftTriangle,
	NotLeftTriangleEqual: NotLeftTriangleEqual,
	NotLess: NotLess,
	NotLessEqual: NotLessEqual,
	NotLessGreater: NotLessGreater,
	NotLessLess: NotLessLess,
	NotLessSlantEqual: NotLessSlantEqual,
	NotLessTilde: NotLessTilde,
	NotNestedGreaterGreater: NotNestedGreaterGreater,
	NotNestedLessLess: NotNestedLessLess,
	notni: notni,
	notniva: notniva,
	notnivb: notnivb,
	notnivc: notnivc,
	NotPrecedes: NotPrecedes,
	NotPrecedesEqual: NotPrecedesEqual,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
	NotReverseElement: NotReverseElement,
	NotRightTriangleBar: NotRightTriangleBar,
	NotRightTriangle: NotRightTriangle,
	NotRightTriangleEqual: NotRightTriangleEqual,
	NotSquareSubset: NotSquareSubset,
	NotSquareSubsetEqual: NotSquareSubsetEqual,
	NotSquareSuperset: NotSquareSuperset,
	NotSquareSupersetEqual: NotSquareSupersetEqual,
	NotSubset: NotSubset,
	NotSubsetEqual: NotSubsetEqual,
	NotSucceeds: NotSucceeds,
	NotSucceedsEqual: NotSucceedsEqual,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
	NotSucceedsTilde: NotSucceedsTilde,
	NotSuperset: NotSuperset,
	NotSupersetEqual: NotSupersetEqual,
	NotTilde: NotTilde,
	NotTildeEqual: NotTildeEqual,
	NotTildeFullEqual: NotTildeFullEqual,
	NotTildeTilde: NotTildeTilde,
	NotVerticalBar: NotVerticalBar,
	nparallel: nparallel,
	npar: npar,
	nparsl: nparsl,
	npart: npart,
	npolint: npolint,
	npr: npr,
	nprcue: nprcue,
	nprec: nprec,
	npreceq: npreceq,
	npre: npre,
	nrarrc: nrarrc,
	nrarr: nrarr,
	nrArr: nrArr,
	nrarrw: nrarrw,
	nrightarrow: nrightarrow,
	nRightarrow: nRightarrow,
	nrtri: nrtri,
	nrtrie: nrtrie,
	nsc: nsc,
	nsccue: nsccue,
	nsce: nsce,
	Nscr: Nscr,
	nscr: nscr,
	nshortmid: nshortmid,
	nshortparallel: nshortparallel,
	nsim: nsim,
	nsime: nsime,
	nsimeq: nsimeq,
	nsmid: nsmid,
	nspar: nspar,
	nsqsube: nsqsube,
	nsqsupe: nsqsupe,
	nsub: nsub,
	nsubE: nsubE,
	nsube: nsube,
	nsubset: nsubset,
	nsubseteq: nsubseteq,
	nsubseteqq: nsubseteqq,
	nsucc: nsucc,
	nsucceq: nsucceq,
	nsup: nsup,
	nsupE: nsupE,
	nsupe: nsupe,
	nsupset: nsupset,
	nsupseteq: nsupseteq,
	nsupseteqq: nsupseteqq,
	ntgl: ntgl,
	Ntilde: Ntilde,
	ntilde: ntilde,
	ntlg: ntlg,
	ntriangleleft: ntriangleleft,
	ntrianglelefteq: ntrianglelefteq,
	ntriangleright: ntriangleright,
	ntrianglerighteq: ntrianglerighteq,
	Nu: Nu,
	nu: nu,
	num: num,
	numero: numero,
	numsp: numsp,
	nvap: nvap,
	nvdash: nvdash,
	nvDash: nvDash,
	nVdash: nVdash,
	nVDash: nVDash,
	nvge: nvge,
	nvgt: nvgt,
	nvHarr: nvHarr,
	nvinfin: nvinfin,
	nvlArr: nvlArr,
	nvle: nvle,
	nvlt: nvlt,
	nvltrie: nvltrie,
	nvrArr: nvrArr,
	nvrtrie: nvrtrie,
	nvsim: nvsim,
	nwarhk: nwarhk,
	nwarr: nwarr,
	nwArr: nwArr,
	nwarrow: nwarrow,
	nwnear: nwnear,
	Oacute: Oacute,
	oacute: oacute,
	oast: oast,
	Ocirc: Ocirc,
	ocirc: ocirc,
	ocir: ocir,
	Ocy: Ocy,
	ocy: ocy,
	odash: odash,
	Odblac: Odblac,
	odblac: odblac,
	odiv: odiv,
	odot: odot,
	odsold: odsold,
	OElig: OElig,
	oelig: oelig,
	ofcir: ofcir,
	Ofr: Ofr,
	ofr: ofr,
	ogon: ogon,
	Ograve: Ograve,
	ograve: ograve,
	ogt: ogt,
	ohbar: ohbar,
	ohm: ohm,
	oint: oint,
	olarr: olarr,
	olcir: olcir,
	olcross: olcross,
	oline: oline,
	olt: olt,
	Omacr: Omacr,
	omacr: omacr,
	Omega: Omega,
	omega: omega,
	Omicron: Omicron,
	omicron: omicron,
	omid: omid,
	ominus: ominus,
	Oopf: Oopf,
	oopf: oopf,
	opar: opar,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
	OpenCurlyQuote: OpenCurlyQuote,
	operp: operp,
	oplus: oplus,
	orarr: orarr,
	Or: Or,
	or: or,
	ord: ord,
	order: order,
	orderof: orderof,
	ordf: ordf,
	ordm: ordm,
	origof: origof,
	oror: oror,
	orslope: orslope,
	orv: orv,
	oS: oS,
	Oscr: Oscr,
	oscr: oscr,
	Oslash: Oslash,
	oslash: oslash,
	osol: osol,
	Otilde: Otilde,
	otilde: otilde,
	otimesas: otimesas,
	Otimes: Otimes,
	otimes: otimes,
	Ouml: Ouml,
	ouml: ouml,
	ovbar: ovbar,
	OverBar: OverBar,
	OverBrace: OverBrace,
	OverBracket: OverBracket,
	OverParenthesis: OverParenthesis,
	para: para,
	parallel: parallel,
	par: par,
	parsim: parsim,
	parsl: parsl,
	part: part,
	PartialD: PartialD,
	Pcy: Pcy,
	pcy: pcy,
	percnt: percnt,
	period: period,
	permil: permil,
	perp: perp,
	pertenk: pertenk,
	Pfr: Pfr,
	pfr: pfr,
	Phi: Phi,
	phi: phi,
	phiv: phiv,
	phmmat: phmmat,
	phone: phone,
	Pi: Pi,
	pi: pi,
	pitchfork: pitchfork,
	piv: piv,
	planck: planck,
	planckh: planckh,
	plankv: plankv,
	plusacir: plusacir,
	plusb: plusb,
	pluscir: pluscir,
	plus: plus,
	plusdo: plusdo,
	plusdu: plusdu,
	pluse: pluse,
	PlusMinus: PlusMinus,
	plusmn: plusmn,
	plussim: plussim,
	plustwo: plustwo,
	pm: pm,
	Poincareplane: Poincareplane,
	pointint: pointint,
	popf: popf,
	Popf: Popf,
	pound: pound,
	prap: prap,
	Pr: Pr,
	pr: pr,
	prcue: prcue,
	precapprox: precapprox,
	prec: prec,
	preccurlyeq: preccurlyeq,
	Precedes: Precedes,
	PrecedesEqual: PrecedesEqual,
	PrecedesSlantEqual: PrecedesSlantEqual,
	PrecedesTilde: PrecedesTilde,
	preceq: preceq,
	precnapprox: precnapprox,
	precneqq: precneqq,
	precnsim: precnsim,
	pre: pre,
	prE: prE,
	precsim: precsim,
	prime: prime,
	Prime: Prime,
	primes: primes,
	prnap: prnap,
	prnE: prnE,
	prnsim: prnsim,
	prod: prod,
	Product: Product,
	profalar: profalar,
	profline: profline,
	profsurf: profsurf,
	prop: prop,
	Proportional: Proportional,
	Proportion: Proportion,
	propto: propto,
	prsim: prsim,
	prurel: prurel,
	Pscr: Pscr,
	pscr: pscr,
	Psi: Psi,
	psi: psi,
	puncsp: puncsp,
	Qfr: Qfr,
	qfr: qfr,
	qint: qint,
	qopf: qopf,
	Qopf: Qopf,
	qprime: qprime,
	Qscr: Qscr,
	qscr: qscr,
	quaternions: quaternions,
	quatint: quatint,
	quest: quest,
	questeq: questeq,
	quot: quot,
	QUOT: QUOT,
	rAarr: rAarr,
	race: race,
	Racute: Racute,
	racute: racute,
	radic: radic,
	raemptyv: raemptyv,
	rang: rang,
	Rang: Rang,
	rangd: rangd,
	range: range,
	rangle: rangle,
	raquo: raquo,
	rarrap: rarrap,
	rarrb: rarrb,
	rarrbfs: rarrbfs,
	rarrc: rarrc,
	rarr: rarr,
	Rarr: Rarr,
	rArr: rArr,
	rarrfs: rarrfs,
	rarrhk: rarrhk,
	rarrlp: rarrlp,
	rarrpl: rarrpl,
	rarrsim: rarrsim,
	Rarrtl: Rarrtl,
	rarrtl: rarrtl,
	rarrw: rarrw,
	ratail: ratail,
	rAtail: rAtail,
	ratio: ratio,
	rationals: rationals,
	rbarr: rbarr,
	rBarr: rBarr,
	RBarr: RBarr,
	rbbrk: rbbrk,
	rbrace: rbrace,
	rbrack: rbrack,
	rbrke: rbrke,
	rbrksld: rbrksld,
	rbrkslu: rbrkslu,
	Rcaron: Rcaron,
	rcaron: rcaron,
	Rcedil: Rcedil,
	rcedil: rcedil,
	rceil: rceil,
	rcub: rcub,
	Rcy: Rcy,
	rcy: rcy,
	rdca: rdca,
	rdldhar: rdldhar,
	rdquo: rdquo,
	rdquor: rdquor,
	rdsh: rdsh,
	real: real,
	realine: realine,
	realpart: realpart,
	reals: reals,
	Re: Re,
	rect: rect,
	reg: reg,
	REG: REG,
	ReverseElement: ReverseElement,
	ReverseEquilibrium: ReverseEquilibrium,
	ReverseUpEquilibrium: ReverseUpEquilibrium,
	rfisht: rfisht,
	rfloor: rfloor,
	rfr: rfr,
	Rfr: Rfr,
	rHar: rHar,
	rhard: rhard,
	rharu: rharu,
	rharul: rharul,
	Rho: Rho,
	rho: rho,
	rhov: rhov,
	RightAngleBracket: RightAngleBracket,
	RightArrowBar: RightArrowBar,
	rightarrow: rightarrow,
	RightArrow: RightArrow,
	Rightarrow: Rightarrow,
	RightArrowLeftArrow: RightArrowLeftArrow,
	rightarrowtail: rightarrowtail,
	RightCeiling: RightCeiling,
	RightDoubleBracket: RightDoubleBracket,
	RightDownTeeVector: RightDownTeeVector,
	RightDownVectorBar: RightDownVectorBar,
	RightDownVector: RightDownVector,
	RightFloor: RightFloor,
	rightharpoondown: rightharpoondown,
	rightharpoonup: rightharpoonup,
	rightleftarrows: rightleftarrows,
	rightleftharpoons: rightleftharpoons,
	rightrightarrows: rightrightarrows,
	rightsquigarrow: rightsquigarrow,
	RightTeeArrow: RightTeeArrow,
	RightTee: RightTee,
	RightTeeVector: RightTeeVector,
	rightthreetimes: rightthreetimes,
	RightTriangleBar: RightTriangleBar,
	RightTriangle: RightTriangle,
	RightTriangleEqual: RightTriangleEqual,
	RightUpDownVector: RightUpDownVector,
	RightUpTeeVector: RightUpTeeVector,
	RightUpVectorBar: RightUpVectorBar,
	RightUpVector: RightUpVector,
	RightVectorBar: RightVectorBar,
	RightVector: RightVector,
	ring: ring,
	risingdotseq: risingdotseq,
	rlarr: rlarr,
	rlhar: rlhar,
	rlm: rlm,
	rmoustache: rmoustache,
	rmoust: rmoust,
	rnmid: rnmid,
	roang: roang,
	roarr: roarr,
	robrk: robrk,
	ropar: ropar,
	ropf: ropf,
	Ropf: Ropf,
	roplus: roplus,
	rotimes: rotimes,
	RoundImplies: RoundImplies,
	rpar: rpar,
	rpargt: rpargt,
	rppolint: rppolint,
	rrarr: rrarr,
	Rrightarrow: Rrightarrow,
	rsaquo: rsaquo,
	rscr: rscr,
	Rscr: Rscr,
	rsh: rsh,
	Rsh: Rsh,
	rsqb: rsqb,
	rsquo: rsquo,
	rsquor: rsquor,
	rthree: rthree,
	rtimes: rtimes,
	rtri: rtri,
	rtrie: rtrie,
	rtrif: rtrif,
	rtriltri: rtriltri,
	RuleDelayed: RuleDelayed,
	ruluhar: ruluhar,
	rx: rx,
	Sacute: Sacute,
	sacute: sacute,
	sbquo: sbquo,
	scap: scap,
	Scaron: Scaron,
	scaron: scaron,
	Sc: Sc,
	sc: sc,
	sccue: sccue,
	sce: sce,
	scE: scE,
	Scedil: Scedil,
	scedil: scedil,
	Scirc: Scirc,
	scirc: scirc,
	scnap: scnap,
	scnE: scnE,
	scnsim: scnsim,
	scpolint: scpolint,
	scsim: scsim,
	Scy: Scy,
	scy: scy,
	sdotb: sdotb,
	sdot: sdot,
	sdote: sdote,
	searhk: searhk,
	searr: searr,
	seArr: seArr,
	searrow: searrow,
	sect: sect,
	semi: semi,
	seswar: seswar,
	setminus: setminus,
	setmn: setmn,
	sext: sext,
	Sfr: Sfr,
	sfr: sfr,
	sfrown: sfrown,
	sharp: sharp,
	SHCHcy: SHCHcy,
	shchcy: shchcy,
	SHcy: SHcy,
	shcy: shcy,
	ShortDownArrow: ShortDownArrow,
	ShortLeftArrow: ShortLeftArrow,
	shortmid: shortmid,
	shortparallel: shortparallel,
	ShortRightArrow: ShortRightArrow,
	ShortUpArrow: ShortUpArrow,
	shy: shy,
	Sigma: Sigma,
	sigma: sigma,
	sigmaf: sigmaf,
	sigmav: sigmav,
	sim: sim,
	simdot: simdot,
	sime: sime,
	simeq: simeq,
	simg: simg,
	simgE: simgE,
	siml: siml,
	simlE: simlE,
	simne: simne,
	simplus: simplus,
	simrarr: simrarr,
	slarr: slarr,
	SmallCircle: SmallCircle,
	smallsetminus: smallsetminus,
	smashp: smashp,
	smeparsl: smeparsl,
	smid: smid,
	smile: smile,
	smt: smt,
	smte: smte,
	smtes: smtes,
	SOFTcy: SOFTcy,
	softcy: softcy,
	solbar: solbar,
	solb: solb,
	sol: sol,
	Sopf: Sopf,
	sopf: sopf,
	spades: spades,
	spadesuit: spadesuit,
	spar: spar,
	sqcap: sqcap,
	sqcaps: sqcaps,
	sqcup: sqcup,
	sqcups: sqcups,
	Sqrt: Sqrt,
	sqsub: sqsub,
	sqsube: sqsube,
	sqsubset: sqsubset,
	sqsubseteq: sqsubseteq,
	sqsup: sqsup,
	sqsupe: sqsupe,
	sqsupset: sqsupset,
	sqsupseteq: sqsupseteq,
	square: square,
	Square: Square,
	SquareIntersection: SquareIntersection,
	SquareSubset: SquareSubset,
	SquareSubsetEqual: SquareSubsetEqual,
	SquareSuperset: SquareSuperset,
	SquareSupersetEqual: SquareSupersetEqual,
	SquareUnion: SquareUnion,
	squarf: squarf,
	squ: squ,
	squf: squf,
	srarr: srarr,
	Sscr: Sscr,
	sscr: sscr,
	ssetmn: ssetmn,
	ssmile: ssmile,
	sstarf: sstarf,
	Star: Star,
	star: star,
	starf: starf,
	straightepsilon: straightepsilon,
	straightphi: straightphi,
	strns: strns,
	sub: sub,
	Sub: Sub,
	subdot: subdot,
	subE: subE,
	sube: sube,
	subedot: subedot,
	submult: submult,
	subnE: subnE,
	subne: subne,
	subplus: subplus,
	subrarr: subrarr,
	subset: subset,
	Subset: Subset,
	subseteq: subseteq,
	subseteqq: subseteqq,
	SubsetEqual: SubsetEqual,
	subsetneq: subsetneq,
	subsetneqq: subsetneqq,
	subsim: subsim,
	subsub: subsub,
	subsup: subsup,
	succapprox: succapprox,
	succ: succ,
	succcurlyeq: succcurlyeq,
	Succeeds: Succeeds,
	SucceedsEqual: SucceedsEqual,
	SucceedsSlantEqual: SucceedsSlantEqual,
	SucceedsTilde: SucceedsTilde,
	succeq: succeq,
	succnapprox: succnapprox,
	succneqq: succneqq,
	succnsim: succnsim,
	succsim: succsim,
	SuchThat: SuchThat,
	sum: sum,
	Sum: Sum,
	sung: sung,
	sup1: sup1,
	sup2: sup2,
	sup3: sup3,
	sup: sup,
	Sup: Sup,
	supdot: supdot,
	supdsub: supdsub,
	supE: supE,
	supe: supe,
	supedot: supedot,
	Superset: Superset,
	SupersetEqual: SupersetEqual,
	suphsol: suphsol,
	suphsub: suphsub,
	suplarr: suplarr,
	supmult: supmult,
	supnE: supnE,
	supne: supne,
	supplus: supplus,
	supset: supset,
	Supset: Supset,
	supseteq: supseteq,
	supseteqq: supseteqq,
	supsetneq: supsetneq,
	supsetneqq: supsetneqq,
	supsim: supsim,
	supsub: supsub,
	supsup: supsup,
	swarhk: swarhk,
	swarr: swarr,
	swArr: swArr,
	swarrow: swarrow,
	swnwar: swnwar,
	szlig: szlig,
	Tab: Tab,
	target: target,
	Tau: Tau,
	tau: tau,
	tbrk: tbrk,
	Tcaron: Tcaron,
	tcaron: tcaron,
	Tcedil: Tcedil,
	tcedil: tcedil,
	Tcy: Tcy,
	tcy: tcy,
	tdot: tdot,
	telrec: telrec,
	Tfr: Tfr,
	tfr: tfr,
	there4: there4,
	therefore: therefore,
	Therefore: Therefore,
	Theta: Theta,
	theta: theta,
	thetasym: thetasym,
	thetav: thetav,
	thickapprox: thickapprox,
	thicksim: thicksim,
	ThickSpace: ThickSpace,
	ThinSpace: ThinSpace,
	thinsp: thinsp,
	thkap: thkap,
	thksim: thksim,
	THORN: THORN,
	thorn: thorn,
	tilde: tilde,
	Tilde: Tilde,
	TildeEqual: TildeEqual,
	TildeFullEqual: TildeFullEqual,
	TildeTilde: TildeTilde,
	timesbar: timesbar,
	timesb: timesb,
	times: times,
	timesd: timesd,
	tint: tint,
	toea: toea,
	topbot: topbot,
	topcir: topcir,
	top: top,
	Topf: Topf,
	topf: topf,
	topfork: topfork,
	tosa: tosa,
	tprime: tprime,
	trade: trade,
	TRADE: TRADE,
	triangle: triangle,
	triangledown: triangledown,
	triangleleft: triangleleft,
	trianglelefteq: trianglelefteq,
	triangleq: triangleq,
	triangleright: triangleright,
	trianglerighteq: trianglerighteq,
	tridot: tridot,
	trie: trie,
	triminus: triminus,
	TripleDot: TripleDot,
	triplus: triplus,
	trisb: trisb,
	tritime: tritime,
	trpezium: trpezium,
	Tscr: Tscr,
	tscr: tscr,
	TScy: TScy,
	tscy: tscy,
	TSHcy: TSHcy,
	tshcy: tshcy,
	Tstrok: Tstrok,
	tstrok: tstrok,
	twixt: twixt,
	twoheadleftarrow: twoheadleftarrow,
	twoheadrightarrow: twoheadrightarrow,
	Uacute: Uacute,
	uacute: uacute,
	uarr: uarr,
	Uarr: Uarr,
	uArr: uArr,
	Uarrocir: Uarrocir,
	Ubrcy: Ubrcy,
	ubrcy: ubrcy,
	Ubreve: Ubreve,
	ubreve: ubreve,
	Ucirc: Ucirc,
	ucirc: ucirc,
	Ucy: Ucy,
	ucy: ucy,
	udarr: udarr,
	Udblac: Udblac,
	udblac: udblac,
	udhar: udhar,
	ufisht: ufisht,
	Ufr: Ufr,
	ufr: ufr,
	Ugrave: Ugrave,
	ugrave: ugrave,
	uHar: uHar,
	uharl: uharl,
	uharr: uharr,
	uhblk: uhblk,
	ulcorn: ulcorn,
	ulcorner: ulcorner,
	ulcrop: ulcrop,
	ultri: ultri,
	Umacr: Umacr,
	umacr: umacr,
	uml: uml,
	UnderBar: UnderBar,
	UnderBrace: UnderBrace,
	UnderBracket: UnderBracket,
	UnderParenthesis: UnderParenthesis,
	Union: Union,
	UnionPlus: UnionPlus,
	Uogon: Uogon,
	uogon: uogon,
	Uopf: Uopf,
	uopf: uopf,
	UpArrowBar: UpArrowBar,
	uparrow: uparrow,
	UpArrow: UpArrow,
	Uparrow: Uparrow,
	UpArrowDownArrow: UpArrowDownArrow,
	updownarrow: updownarrow,
	UpDownArrow: UpDownArrow,
	Updownarrow: Updownarrow,
	UpEquilibrium: UpEquilibrium,
	upharpoonleft: upharpoonleft,
	upharpoonright: upharpoonright,
	uplus: uplus,
	UpperLeftArrow: UpperLeftArrow,
	UpperRightArrow: UpperRightArrow,
	upsi: upsi,
	Upsi: Upsi,
	upsih: upsih,
	Upsilon: Upsilon,
	upsilon: upsilon,
	UpTeeArrow: UpTeeArrow,
	UpTee: UpTee,
	upuparrows: upuparrows,
	urcorn: urcorn,
	urcorner: urcorner,
	urcrop: urcrop,
	Uring: Uring,
	uring: uring,
	urtri: urtri,
	Uscr: Uscr,
	uscr: uscr,
	utdot: utdot,
	Utilde: Utilde,
	utilde: utilde,
	utri: utri,
	utrif: utrif,
	uuarr: uuarr,
	Uuml: Uuml,
	uuml: uuml,
	uwangle: uwangle,
	vangrt: vangrt,
	varepsilon: varepsilon,
	varkappa: varkappa,
	varnothing: varnothing,
	varphi: varphi,
	varpi: varpi,
	varpropto: varpropto,
	varr: varr,
	vArr: vArr,
	varrho: varrho,
	varsigma: varsigma,
	varsubsetneq: varsubsetneq,
	varsubsetneqq: varsubsetneqq,
	varsupsetneq: varsupsetneq,
	varsupsetneqq: varsupsetneqq,
	vartheta: vartheta,
	vartriangleleft: vartriangleleft,
	vartriangleright: vartriangleright,
	vBar: vBar,
	Vbar: Vbar,
	vBarv: vBarv,
	Vcy: Vcy,
	vcy: vcy,
	vdash: vdash,
	vDash: vDash,
	Vdash: Vdash,
	VDash: VDash,
	Vdashl: Vdashl,
	veebar: veebar,
	vee: vee,
	Vee: Vee,
	veeeq: veeeq,
	vellip: vellip,
	verbar: verbar,
	Verbar: Verbar,
	vert: vert,
	Vert: Vert,
	VerticalBar: VerticalBar,
	VerticalLine: VerticalLine,
	VerticalSeparator: VerticalSeparator,
	VerticalTilde: VerticalTilde,
	VeryThinSpace: VeryThinSpace,
	Vfr: Vfr,
	vfr: vfr,
	vltri: vltri,
	vnsub: vnsub,
	vnsup: vnsup,
	Vopf: Vopf,
	vopf: vopf,
	vprop: vprop,
	vrtri: vrtri,
	Vscr: Vscr,
	vscr: vscr,
	vsubnE: vsubnE,
	vsubne: vsubne,
	vsupnE: vsupnE,
	vsupne: vsupne,
	Vvdash: Vvdash,
	vzigzag: vzigzag,
	Wcirc: Wcirc,
	wcirc: wcirc,
	wedbar: wedbar,
	wedge: wedge,
	Wedge: Wedge,
	wedgeq: wedgeq,
	weierp: weierp,
	Wfr: Wfr,
	wfr: wfr,
	Wopf: Wopf,
	wopf: wopf,
	wp: wp,
	wr: wr,
	wreath: wreath,
	Wscr: Wscr,
	wscr: wscr,
	xcap: xcap,
	xcirc: xcirc,
	xcup: xcup,
	xdtri: xdtri,
	Xfr: Xfr,
	xfr: xfr,
	xharr: xharr,
	xhArr: xhArr,
	Xi: Xi,
	xi: xi,
	xlarr: xlarr,
	xlArr: xlArr,
	xmap: xmap,
	xnis: xnis,
	xodot: xodot,
	Xopf: Xopf,
	xopf: xopf,
	xoplus: xoplus,
	xotime: xotime,
	xrarr: xrarr,
	xrArr: xrArr,
	Xscr: Xscr,
	xscr: xscr,
	xsqcup: xsqcup,
	xuplus: xuplus,
	xutri: xutri,
	xvee: xvee,
	xwedge: xwedge,
	Yacute: Yacute,
	yacute: yacute,
	YAcy: YAcy,
	yacy: yacy,
	Ycirc: Ycirc,
	ycirc: ycirc,
	Ycy: Ycy,
	ycy: ycy,
	yen: yen,
	Yfr: Yfr,
	yfr: yfr,
	YIcy: YIcy,
	yicy: yicy,
	Yopf: Yopf,
	yopf: yopf,
	Yscr: Yscr,
	yscr: yscr,
	YUcy: YUcy,
	yucy: yucy,
	yuml: yuml,
	Yuml: Yuml,
	Zacute: Zacute,
	zacute: zacute,
	Zcaron: Zcaron,
	zcaron: zcaron,
	Zcy: Zcy,
	zcy: zcy,
	Zdot: Zdot,
	zdot: zdot,
	zeetrf: zeetrf,
	ZeroWidthSpace: ZeroWidthSpace,
	Zeta: Zeta,
	zeta: zeta,
	zfr: zfr,
	Zfr: Zfr,
	ZHcy: ZHcy,
	zhcy: zhcy,
	zigrarr: zigrarr,
	zopf: zopf,
	Zopf: Zopf,
	Zscr: Zscr,
	zscr: zscr,
	zwj: zwj,
	zwnj: zwnj
};

/*eslint quotes:0*/
var entities$1 = require$$0;

var regex$4=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

var mdurl$1 = {};

var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode$1(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode$1.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode$1.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";


var encode_1 = encode$1;

/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) { return cache; }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
}


// Decode percent-encoded string.
//
function decode$1(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode$1.defaultChars;
  }

  cache = getDecodeCache(exclude);

  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

          if (chr < 0x80) {
            result += '\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
            result += '\ufffd\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += '\ufffd\ufffd\ufffd\ufffd';
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += '\ufffd';
    }

    return result;
  });
}


decode$1.defaultChars   = ';/?:@&=+$,#';
decode$1.componentChars = '';


var decode_1 = decode$1;

var format = function format(url) {
  var result = '';

  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';

  return result;
};

//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//


function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

    // RFC 2396: characters not allowed for various reasons.
    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = [ '\'' ].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
    hostEndingChars = [ '/', '?', '#' ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    /* eslint-disable no-script-url */
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
    /* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes,
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') { hostEnd--; }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost(host);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

var parse = urlParse;

mdurl$1.encode = encode_1;
mdurl$1.decode = decode_1;
mdurl$1.format = format;
mdurl$1.parse  = parse;

var uc_micro = {};

var regex$3;
var hasRequiredRegex$3;

function requireRegex$3 () {
	if (hasRequiredRegex$3) return regex$3;
	hasRequiredRegex$3 = 1;
	regex$3=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	return regex$3;
}

var regex$2;
var hasRequiredRegex$2;

function requireRegex$2 () {
	if (hasRequiredRegex$2) return regex$2;
	hasRequiredRegex$2 = 1;
	regex$2=/[\0-\x1F\x7F-\x9F]/;
	return regex$2;
}

var regex$1;
var hasRequiredRegex$1;

function requireRegex$1 () {
	if (hasRequiredRegex$1) return regex$1;
	hasRequiredRegex$1 = 1;
	regex$1=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
	return regex$1;
}

var regex;
var hasRequiredRegex;

function requireRegex () {
	if (hasRequiredRegex) return regex;
	hasRequiredRegex = 1;
	regex=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
	return regex;
}

var hasRequiredUc_micro;

function requireUc_micro () {
	if (hasRequiredUc_micro) return uc_micro;
	hasRequiredUc_micro = 1;

	uc_micro.Any = requireRegex$3();
	uc_micro.Cc  = requireRegex$2();
	uc_micro.Cf  = requireRegex$1();
	uc_micro.P   = regex$4;
	uc_micro.Z   = requireRegex();
	return uc_micro;
}

(function (exports) {


	function _class(obj) { return Object.prototype.toString.call(obj); }

	function isString(obj) { return _class(obj) === '[object String]'; }

	var _hasOwnProperty = Object.prototype.hasOwnProperty;

	function has(object, key) {
	  return _hasOwnProperty.call(object, key);
	}

	// Merge objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  sources.forEach(function (source) {
	    if (!source) { return; }

	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }

	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });

	  return obj;
	}

	// Remove element from array and put another array at those position.
	// Useful for some operations with tokens
	function arrayReplaceAt(src, pos, newElements) {
	  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
	}

	////////////////////////////////////////////////////////////////////////////////

	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}

	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);

	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}


	var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
	var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
	var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;

	var entities = entities$1;

	function replaceEntityPattern(match, name) {
	  var code;

	  if (has(entities, name)) {
	    return entities[name];
	  }

	  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }

	  return match;
	}

	/*function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }

	  return str.replace(ENTITY_RE, replaceEntityPattern);
	}*/

	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}

	function unescapeAll(str) {
	  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

	  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
	    if (escaped) { return escaped; }
	    return replaceEntityPattern(match, entity);
	  });
	}

	////////////////////////////////////////////////////////////////////////////////

	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};

	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}

	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}

	////////////////////////////////////////////////////////////////////////////////

	var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

	function escapeRE(str) {
	  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
	}

	////////////////////////////////////////////////////////////////////////////////

	function isSpace(code) {
	  switch (code) {
	    case 0x09:
	    case 0x20:
	      return true;
	  }
	  return false;
	}

	// Zs (unicode class) || [\t\f\v\r\n]
	function isWhiteSpace(code) {
	  if (code >= 0x2000 && code <= 0x200A) { return true; }
	  switch (code) {
	    case 0x09: // \t
	    case 0x0A: // \n
	    case 0x0B: // \v
	    case 0x0C: // \f
	    case 0x0D: // \r
	    case 0x20:
	    case 0xA0:
	    case 0x1680:
	    case 0x202F:
	    case 0x205F:
	    case 0x3000:
	      return true;
	  }
	  return false;
	}

	////////////////////////////////////////////////////////////////////////////////

	/*eslint-disable max-len*/
	var UNICODE_PUNCT_RE = regex$4;

	// Currently without astral characters support.
	function isPunctChar(ch) {
	  return UNICODE_PUNCT_RE.test(ch);
	}


	// Markdown ASCII punctuation characters.
	//
	// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
	// http://spec.commonmark.org/0.15/#ascii-punctuation-character
	//
	// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
	//
	function isMdAsciiPunct(ch) {
	  switch (ch) {
	    case 0x21/* ! */:
	    case 0x22/* " */:
	    case 0x23/* # */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x26/* & */:
	    case 0x27/* ' */:
	    case 0x28/* ( */:
	    case 0x29/* ) */:
	    case 0x2A/* * */:
	    case 0x2B/* + */:
	    case 0x2C/* , */:
	    case 0x2D/* - */:
	    case 0x2E/* . */:
	    case 0x2F/* / */:
	    case 0x3A/* : */:
	    case 0x3B/* ; */:
	    case 0x3C/* < */:
	    case 0x3D/* = */:
	    case 0x3E/* > */:
	    case 0x3F/* ? */:
	    case 0x40/* @ */:
	    case 0x5B/* [ */:
	    case 0x5C/* \ */:
	    case 0x5D/* ] */:
	    case 0x5E/* ^ */:
	    case 0x5F/* _ */:
	    case 0x60/* ` */:
	    case 0x7B/* { */:
	    case 0x7C/* | */:
	    case 0x7D/* } */:
	    case 0x7E/* ~ */:
	      return true;
	    default:
	      return false;
	  }
	}

	// Hepler to unify [reference labels].
	//
	function normalizeReference(str) {
	  // Trim and collapse whitespace
	  //
	  str = str.trim().replace(/\s+/g, ' ');

	  // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
	  // fixed in v12 (couldn't find any details).
	  //
	  // So treat this one as a special case
	  // (remove this when node v10 is no longer supported).
	  //
	  if ('ẞ'.toLowerCase() === 'Ṿ') {
	    str = str.replace(/ẞ/g, 'ß');
	  }

	  // .toLowerCase().toUpperCase() should get rid of all differences
	  // between letter variants.
	  //
	  // Simple .toLowerCase() doesn't normalize 125 code points correctly,
	  // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
	  // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
	  // uppercased versions).
	  //
	  // Here's an example showing how it happens. Lets take greek letter omega:
	  // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
	  //
	  // Unicode entries:
	  // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
	  // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
	  // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
	  // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
	  //
	  // Case-insensitive comparison should treat all of them as equivalent.
	  //
	  // But .toLowerCase() doesn't change ϑ (it's already lowercase),
	  // and .toUpperCase() doesn't change ϴ (already uppercase).
	  //
	  // Applying first lower then upper case normalizes any character:
	  // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
	  //
	  // Note: this is equivalent to unicode case folding; unicode normalization
	  // is a different step that is not required here.
	  //
	  // Final result should be uppercased, because it's later stored in an object
	  // (this avoid a conflict with Object.prototype members,
	  // most notably, `__proto__`)
	  //
	  return str.toLowerCase().toUpperCase();
	}

	////////////////////////////////////////////////////////////////////////////////

	// Re-export libraries commonly used in both markdown-it and its plugins,
	// so plugins won't have to depend on them explicitly, which reduces their
	// bundled size (e.g. a browser build).
	//
	exports.lib                 = {};
	exports.lib.mdurl           = mdurl$1;
	exports.lib.ucmicro         = requireUc_micro();

	exports.assign              = assign;
	exports.isString            = isString;
	exports.has                 = has;
	exports.unescapeMd          = unescapeMd;
	exports.unescapeAll         = unescapeAll;
	exports.isValidEntityCode   = isValidEntityCode;
	exports.fromCodePoint       = fromCodePoint;
	// exports.replaceEntities     = replaceEntities;
	exports.escapeHtml          = escapeHtml;
	exports.arrayReplaceAt      = arrayReplaceAt;
	exports.isSpace             = isSpace;
	exports.isWhiteSpace        = isWhiteSpace;
	exports.isMdAsciiPunct      = isMdAsciiPunct;
	exports.isPunctChar         = isPunctChar;
	exports.escapeRE            = escapeRE;
	exports.normalizeReference  = normalizeReference; 
} (utils$1));

var helpers$1 = {};

var parse_link_label = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};

var unescapeAll$2 = utils$1.unescapeAll;


var parse_link_destination = function parseLinkDestination(str, start, max) {
  var code, level,
      pos = start,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return result; }
      if (code === 0x3C /* < */) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = unescapeAll$2(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 0x20) { break; }
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 32) { return result; }
    }

    if (code === 0x29 /* ) */) {
      if (level === 0) { break; }
      level--;
    }

    pos++;
  }

  if (start === pos) { return result; }
  if (level !== 0) { return result; }

  result.str = unescapeAll$2(str.slice(start, pos));
  result.pos = pos;
  result.ok = true;
  return result;
};

var unescapeAll$1 = utils$1.unescapeAll;


var parse_link_title = function parseLinkTitle(str, start, max) {
  var code,
      marker,
      lines = 0,
      pos = start,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll$1(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x28 /* ( */ && marker === 0x29 /* ) */) {
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};

helpers$1.parseLinkLabel       = parse_link_label;
helpers$1.parseLinkDestination = parse_link_destination;
helpers$1.parseLinkTitle       = parse_link_title;

/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/


var assign$1          = utils$1.assign;
var unescapeAll     = utils$1.unescapeAll;
var escapeHtml      = utils$1.escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};


default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(token.content) +
          '</code>';
};


default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};


default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      langAttrs = '',
      highlighted, i, arr, tmpAttrs, tmpToken;

  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join('');
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .deepClone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};


default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

  return slf.renderToken(tokens, idx, options);
};


default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer$1() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign$1({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer$1.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer$1.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer$1.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer$1.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === 'softbreak') {
      result += '\n';
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer$1.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

var renderer = Renderer$1;

/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/


/**
 * new Ruler()
 **/
function Ruler$3() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler$3.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler$3.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler$3.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler$3.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler$3.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler$3.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler$3.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler$3.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler$3.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler$3.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

var ruler = Ruler$3;

// https://spec.commonmark.org/0.29/#line-ending
var NEWLINES_RE  = /\r\n?|\n/g;
var NULL_RE      = /\0/g;


var normalize = function normalize(state) {
  var str;

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  state.src = str;
};

var block = function block(state) {
  var token;

  if (state.inlineMode) {
    token          = new state.Token('inline', '', 0);
    token.content  = state.src;
    token.map      = [ 0, 1 ];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};

var inline = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};

var arrayReplaceAt = utils$1.arrayReplaceAt;


function isLinkOpen$1(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose$1(str) {
  return /^<\/a\s*>/i.test(str);
}


var linkify$1 = function linkify(state) {
  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
      level, htmlLinkLevel, url, fullUrl, urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen$1(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose$1(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

        text = currentToken.content;
        links = state.md.linkify.match(text);

        // Now split string to nodes
        nodes = [];
        level = currentToken.level;
        lastPos = 0;

        // forbid escape sequence at the start of the string,
        // this avoids http\://example.com/ from being linkified as
        // http:<a href="//example.com/">//example.com/</a>
        if (links.length > 0 &&
            links[0].index === 0 &&
            i > 0 &&
            tokens[i - 1].type === 'text_special') {
          links = links.slice(1);
        }

        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) { continue; }

          urlText = links[ln].text;

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level   = level;
            nodes.push(token);
          }

          token         = new state.Token('link_open', 'a', 1);
          token.attrs   = [ [ 'href', fullUrl ] ];
          token.level   = level++;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = urlText;
          token.level   = level;
          nodes.push(token);

          token         = new state.Token('link_close', 'a', -1);
          token.level   = --level;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level   = level;
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};

// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - multiplications 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;

var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
          .replace(/\+-/g, '±')
          // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
          .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
          // em-dash
          .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
          // en-dash
          .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013');
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}


var replacements = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }

  }
};

var isWhiteSpace$1   = utils$1.isWhiteSpace;
var isPunctChar$1    = utils$1.isPunctChar;
var isMdAsciiPunct$1 = utils$1.isMdAsciiPunct;

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = '\u2019'; /* ’ */


function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break; }
    }
    stack.length = j + 1;

    if (token.type !== 'text') { continue; }

    text = token.content;
    pos = 0;
    max = text.length;

    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);
      if (!t) { break; }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = (t[0] === "'");

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));

      isLastWhiteSpace = isWhiteSpace$1(lastChar);
      isNextWhiteSpace = isWhiteSpace$1(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // Replace quotes in the middle of punctuation sequence, but not
        // in the middle of the words, i.e.:
        //
        // 1. foo " bar " baz - not replaced
        // 2. foo-"-bar-"-baz - replaced
        // 3. foo"bar"baz     - not replaced
        //
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];
          if (stack[j].level < thisLevel) { break; }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote);

            pos += closeQuote.length - 1;
            if (item.token === i) { pos += openQuote.length - 1; }

            text = token.content;
            max = text.length;

            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}


var smartquotes = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};

var text_join = function text_join(state) {
  var j, l, tokens, curr, max, last,
      blockTokens = state.tokens;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') continue;

    tokens = blockTokens[j].children;
    max = tokens.length;

    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text_special') {
        tokens[curr].type = 'text';
      }
    }

    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text' &&
          curr + 1 < max &&
          tokens[curr + 1].type === 'text') {

        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) { tokens[last] = tokens[curr]; }

        last++;
      }
    }

    if (curr !== last) {
      tokens.length = last;
    }
  }
};

/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/
function Token$3(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type     = type;

  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/
  this.tag      = tag;

  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/
  this.attrs    = null;

  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/
  this.map      = null;

  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/
  this.nesting  = nesting;

  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/
  this.level    = 0;

  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/
  this.children = null;

  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/
  this.content  = '';

  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/
  this.markup   = '';

  /**
   * Token#info -> String
   *
   * Additional information:
   *
   * - Info string for "fence" tokens
   * - The value "auto" for autolink "link_open" and "link_close" tokens
   * - The string value of the item marker for ordered-list "list_item_open" tokens
   **/
  this.info     = '';

  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/
  this.meta     = null;

  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/
  this.block    = false;

  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/
  this.hidden   = false;
}


/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/
Token$3.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) { return -1; }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) { return i; }
  }
  return -1;
};


/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/
Token$3.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [ attrData ];
  }
};


/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/
Token$3.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [ name, value ];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};


/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/
Token$3.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};


/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/
Token$3.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([ name, value ]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};


var token = Token$3;

var Token$2 = token;


function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token$2;


var state_core = StateCore;

/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/


var Ruler$2  = ruler;


var _rules$2 = [
  [ 'normalize',      normalize      ],
  [ 'block',          block          ],
  [ 'inline',         inline         ],
  [ 'linkify',        linkify$1        ],
  [ 'replacements',   replacements   ],
  [ 'smartquotes',    smartquotes    ],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  [ 'text_join',      text_join      ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler$2();

  for (var i = 0; i < _rules$2.length; i++) {
    this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = state_core;


var parser_core = Core;

var isSpace$a = utils$1.isSpace;


function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  return state.src.slice(pos, max);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      isEscaped = false,
      lastPos = 0,
      current = '';

  ch  = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x7c/* | */) {
      if (!isEscaped) {
        // pipe separating cells, '|'
        result.push(current + str.substring(lastPos, pos));
        current = '';
        lastPos = pos + 1;
      } else {
        // escaped pipe, '\|'
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }

    isEscaped = (ch === 0x5c/* \ */);
    pos++;

    ch = str.charCodeAt(pos);
  }

  result.push(current + str.substring(lastPos));

  return result;
}


var table = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token,
      aligns, t, tableLines, tbodyLines, oldParentType, terminate,
      terminatorRules, firstCh, secondCh;

  // should have at least two lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) { return false; }

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 0x7C/* | */ && firstCh !== 0x2D/* - */ && firstCh !== 0x3A/* : */) { return false; }

  if (pos >= state.eMarks[nextLine]) { return false; }

  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 0x7C/* | */ && secondCh !== 0x2D/* - */ && secondCh !== 0x3A/* : */ && !isSpace$a(secondCh)) {
    return false;
  }

  // if first character is '-', then second character must not be a space
  // (due to parsing ambiguity with list)
  if (firstCh === 0x2D/* - */ && isSpace$a(secondCh)) { return false; }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace$a(ch)) { return false; }

    pos++;
  }

  lineText = getLine(state, startLine + 1);

  columns = lineText.split('|');
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === '') columns.shift();
  if (columns.length && columns[columns.length - 1] === '') columns.pop();

  // header row will define an amount of columns in the entire table,
  // and align row should be exactly the same (the rest of the rows can differ)
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) { return false; }

  if (silent) { return true; }

  oldParentType = state.parentType;
  state.parentType = 'table';

  // use 'blockquote' lists for termination because it's
  // the most similar to tables
  terminatorRules = state.md.block.ruler.getRules('blockquote');

  token     = state.push('table_open', 'table', 1);
  token.map = tableLines = [ startLine, 0 ];

  token     = state.push('thead_open', 'thead', 1);
  token.map = [ startLine, startLine + 1 ];

  token     = state.push('tr_open', 'tr', 1);
  token.map = [ startLine, startLine + 1 ];

  for (i = 0; i < columns.length; i++) {
    token          = state.push('th_open', 'th', 1);
    if (aligns[i]) {
      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
    }

    token          = state.push('inline', '', 0);
    token.content  = columns[i].trim();
    token.children = [];

    token          = state.push('th_close', 'th', -1);
  }

  token     = state.push('tr_close', 'tr', -1);
  token     = state.push('thead_close', 'thead', -1);

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) { break; }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) { break; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === '') columns.shift();
    if (columns.length && columns[columns.length - 1] === '') columns.pop();

    if (nextLine === startLine + 2) {
      token     = state.push('tbody_open', 'tbody', 1);
      token.map = tbodyLines = [ startLine + 2, 0 ];
    }

    token     = state.push('tr_open', 'tr', 1);
    token.map = [ nextLine, nextLine + 1 ];

    for (i = 0; i < columnCount; i++) {
      token          = state.push('td_open', 'td', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i] ? columns[i].trim() : '';
      token.children = [];

      token          = state.push('td_close', 'td', -1);
    }
    token = state.push('tr_close', 'tr', -1);
  }

  if (tbodyLines) {
    token = state.push('tbody_close', 'tbody', -1);
    tbodyLines[1] = nextLine;
  }

  token = state.push('table_close', 'table', -1);
  tableLines[1] = nextLine;

  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};

var code = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
  token.map     = [ startLine, state.line ];

  return true;
};

var fence = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, token, markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (marker === 0x60 /* ` */) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.sCount[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];

  return true;
};

var isSpace$9 = utils$1.isSpace;


var blockquote = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      isOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  oldBMarks  = [];
  oldBSCount = [];
  oldSCount  = [];
  oldTShift  = [];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  oldParentType = state.parentType;
  state.parentType = 'blockquote';

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    isOutdented = state.sCount[nextLine] < state.blkIndent;

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !isOutdented) {
      // This line is inside the blockquote.

      // set offset past spaces and ">"
      initial = state.sCount[nextLine] + 1;

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + initial) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      offset = initial;
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace$9(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;

      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);

    // A negative indentation means that this is a paragraph continuation
    //
    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  token        = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map    = lines = [ startLine, 0 ];

  state.md.block.tokenize(state, startLine, nextLine);

  token        = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';

  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;

  return true;
};

var isSpace$8 = utils$1.isSpace;


var hr = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 of them

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace$8(ch)) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;

  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

  return true;
};

var isSpace$7 = utils$1.isSpace;


// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace$7(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine];

  // List marker should have at least 2 chars (digit + dot)
  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) { return -1; }

      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace$7(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}


var list = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      offset,
      oldListIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      nextLine = startLine,
      isTerminatingParagraph = false,
      tight = true;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // Special case:
  //  - item 1
  //   - item 2
  //    - item 3
  //     - item 4
  //      - this one is a paragraph continuation
  if (state.listIndent >= 0 &&
      state.sCount[nextLine] - state.listIndent >= 4 &&
      state.sCount[nextLine] < state.blkIndent) {
    return false;
  }

  // limit conditions when list can interrupt
  // a paragraph (validation mode only)
  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));

    // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.
    if (isTerminatingParagraph && markerValue !== 1) return false;

  } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
    isOrdered = false;

  } else {
    return false;
  }

  // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine]) return false;
  }

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token       = state.push('ordered_list_open', 'ol', 1);
    if (markerValue !== 1) {
      token.attrs = [ [ 'start', markerValue ] ];
    }

  } else {
    token       = state.push('bullet_list_open', 'ul', 1);
  }

  token.map    = listLines = [ nextLine, 0 ];
  token.markup = String.fromCharCode(markerCharCode);

  //
  // Iterate list items
  //

  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];

    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = initial + indentAfterMarker;

    // Run subparser & write tokens
    token        = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map    = itemLines = [ nextLine, 0 ];
    if (isOrdered) {
      token.info = state.src.slice(start, posAfterMarker - 1);
    }

    // change current state, then restore it after parser subcall
    oldTight = state.tight;
    oldTShift = state.tShift[nextLine];
    oldSCount = state.sCount[nextLine];

    //  - example list
    // ^ listIndent position will be here
    //   ^ blkIndent position will be here
    //
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;

    state.tight = true;
    state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
    state.sCount[nextLine] = offset;

    if (contentStart >= max && state.isEmpty(nextLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, nextLine, endLine, true);
    }

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - nextLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[nextLine] = oldTShift;
    state.sCount[nextLine] = oldSCount;
    state.tight = oldTight;

    token        = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);

    nextLine = state.line;
    itemLines[1] = nextLine;

    if (nextLine >= endLine) { break; }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finalize list
  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }
  token.markup = String.fromCharCode(markerCharCode);

  listLines[1] = nextLine;
  state.line = nextLine;

  state.parentType = oldParentType;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

var normalizeReference$2   = utils$1.normalizeReference;
var isSpace$6              = utils$1.isSpace;


var reference = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
      if (pos + 1 === max) { return false; }
      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
      break;
    }
  }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  terminatorRules = state.md.block.ruler.getRules('reference');

  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace$6(ch)) ; else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }

  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) { return false; }

  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace$6(ch)) ; else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace$6(ch)) { break; }
    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace$6(ch)) { break; }
        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference$2(str.slice(1, labelEnd));
  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  }

  // Reference can not terminate anything. This check is for safety only.
  /*istanbul ignore if*/
  if (silent) { return true; }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.parentType = oldParentType;

  state.line = startLine + lines + 1;
  return true;
};

var html_blocks = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];

var html_re = {};

var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing  = '<[?][\\s\\S]*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

html_re.HTML_TAG_RE = HTML_TAG_RE$1;
html_re.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE$1;

var block_names = html_blocks;
var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE;

// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES = [
  [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true ],
  [ /^<!--/,        /-->/,   true ],
  [ /^<\?/,         /\?>/,   true ],
  [ /^<![A-Z]/,     />/,     true ],
  [ /^<!\[CDATA\[/, /\]\]>/, true ],
  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
];


var html_block = function html_block(state, startLine, endLine, silent) {
  var i, nextLine, token, lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (!state.md.options.html) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
  }

  if (i === HTML_SEQUENCES.length) { return false; }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1;

  // If we are here - we detected HTML block.
  // Let's roll down till block end.
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) { nextLine++; }
        break;
      }
    }
  }

  state.line = nextLine;

  token         = state.push('html_block', '', 0);
  token.map     = [ startLine, nextLine ];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

  return true;
};

var isSpace$5 = utils$1.isSpace;


var heading = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && !isSpace$5(ch))) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;

  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);

  return true;
};

var lheading = function lheading(state, startLine, endLine/*, silent*/) {
  var content, terminate, i, l, token, pos, max, level, marker,
      nextLine = startLine + 1, oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2);
            break;
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine + 1;

  token          = state.push('heading_open', 'h' + String(level), 1);
  token.markup   = String.fromCharCode(marker);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line - 1 ];
  token.children = [];

  token          = state.push('heading_close', 'h' + String(level), -1);
  token.markup   = String.fromCharCode(marker);

  state.parentType = oldParentType;

  return true;
};

var paragraph = function paragraph(state, startLine, endLine) {
  var content, terminate, i, l, token, oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  oldParentType = state.parentType;
  state.parentType = 'paragraph';

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
};

var Token$1 = token;
var isSpace$4 = utils$1.isSpace;


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = [];  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = [];

  // block parser variables
  this.blkIndent  = 0; // required block content indent (for example, if we are
                       // inside a list, it would be positioned after list marker)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
  this.listIndent = -1; // indent of the current list block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root';

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace$4(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);

      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token$1(type, tag, nesting);
  token.block = true;

  if (nesting < 0) this.level--; // closing tag
  token.level = this.level;
  if (nesting > 0) this.level++; // opening tag

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace$4(ch)) { break; }
  }
  return pos;
};

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (!isSpace$4(this.src.charCodeAt(--pos))) { return pos + 1; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace$4(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
};

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token$1;


var state_block = StateBlock;

/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/


var Ruler$1           = ruler;


var _rules$1 = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ 'table',      table,      [ 'paragraph', 'reference' ] ],
  [ 'code',       code ],
  [ 'fence',      fence,      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', blockquote, [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         hr,         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       list,       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  reference ],
  [ 'html_block', html_block, [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'heading',    heading,    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   lheading ],
  [ 'paragraph',  paragraph ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock$1() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler$1();

  for (var i = 0; i < _rules$1.length; i++) {
    this.ruler.push(_rules$1[i][0], _rules$1[i][1], { alt: (_rules$1[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock$1.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i, prevLine,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.sCount[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true
    prevLine = state.line;

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        if (prevLine >= state.line) {
          throw new Error("block rule didn't increment state.line");
        }
        break;
      }
    }

    // this can only happen if user disables paragraph rule
    if (!ok) throw new Error('none of the block rules matched');

    // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock$1.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock$1.prototype.State = state_block;


var parser_block = ParserBlock$1;

// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

var text = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

// RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;


var linkify = function linkify(state, silent) {
  var pos, max, match, proto, link, url, fullUrl, token;

  if (!state.md.options.linkify) return false;
  if (state.linkLevel > 0) return false;

  pos = state.pos;
  max = state.posMax;

  if (pos + 3 > max) return false;
  if (state.src.charCodeAt(pos) !== 0x3A/* : */) return false;
  if (state.src.charCodeAt(pos + 1) !== 0x2F/* / */) return false;
  if (state.src.charCodeAt(pos + 2) !== 0x2F/* / */) return false;

  match = state.pending.match(SCHEME_RE);
  if (!match) return false;

  proto = match[1];

  link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link) return false;

  url = link.url;

  // invalid link, but still detected by linkify somehow;
  // need to check to prevent infinite loop below
  if (url.length <= proto.length) return false;

  // disallow '*' at the end of the link (conflicts with emphasis)
  url = url.replace(/\*+$/, '');

  fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl)) return false;

  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);

    token         = state.push('link_open', 'a', 1);
    token.attrs   = [ [ 'href', fullUrl ] ];
    token.markup  = 'linkify';
    token.info    = 'auto';

    token         = state.push('text', '', 0);
    token.content = state.md.normalizeLinkText(url);

    token         = state.push('link_close', 'a', -1);
    token.markup  = 'linkify';
    token.info    = 'auto';
  }

  state.pos += url.length - proto.length;
  return true;
};

var isSpace$3 = utils$1.isSpace;


var newline = function newline(state, silent) {
  var pmax, max, ws, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        // Find whitespaces tail of pending chars.
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) ws--;

        state.pending = state.pending.slice(0, ws);
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }

    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && isSpace$3(state.src.charCodeAt(pos))) { pos++; }

  state.pos = pos;
  return true;
};

var isSpace$2 = utils$1.isSpace;

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


var _escape = function escape(state, silent) {
  var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) return false;
  pos++;

  // '\' at the end of the inline block
  if (pos >= max) return false;

  ch1 = state.src.charCodeAt(pos);

  if (ch1 === 0x0A) {
    if (!silent) {
      state.push('hardbreak', 'br', 0);
    }

    pos++;
    // skip leading whitespaces from next line
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace$2(ch1)) break;
      pos++;
    }

    state.pos = pos;
    return true;
  }

  escapedStr = state.src[pos];

  if (ch1 >= 0xD800 && ch1 <= 0xDBFF && pos + 1 < max) {
    ch2 = state.src.charCodeAt(pos + 1);

    if (ch2 >= 0xDC00 && ch2 <= 0xDFFF) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }

  origStr = '\\' + escapedStr;

  if (!silent) {
    token = state.push('text_special', '', 0);

    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token.content = escapedStr;
    } else {
      token.content = origStr;
    }

    token.markup = origStr;
    token.info   = 'escape';
  }

  state.pos = pos + 1;
  return true;
};

var backticks = function backtick(state, silent) {
  var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  // scan marker length
  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);
  openerLength = marker.length;

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  }

  matchEnd = pos;

  // Nothing found in the cache, scan until the end of the line (or until marker is found)
  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    // scan marker length
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    closerLength = matchEnd - matchStart;

    if (closerLength === openerLength) {
      // Found matching closer length.
      if (!silent) {
        token     = state.push('code_inline', 'code', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
          .replace(/\n/g, ' ')
          .replace(/^ (.+) $/, '$1');
      }
      state.pos = matchEnd;
      return true;
    }

    // Some different length found, put it in cache as upper limit of where closer can be found
    state.backticks[closerLength] = matchStart;
  }

  // Scanned through the end, didn't find anything
  state.backticksScanned = true;

  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
};

var strikethrough = {};

// Insert each marker as a separate text token, and add it to delimiter list
//
strikethrough.tokenize = function strikethrough(state, silent) {
  var i, scanned, token, len, ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x7E/* ~ */) { return false; }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) { return false; }

  if (len % 2) {
    token         = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token         = state.push('text', '', 0);
    token.content = ch + ch;

    state.delimiters.push({
      marker: marker,
      length: 0,     // disable "rule of 3" length checks meant for emphasis
      token:  state.tokens.length - 1,
      end:    -1,
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess$1(state, delimiters) {
  var i, j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      max = delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E/* ~ */) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    token         = state.tokens[startDelim.token];
    token.type    = 's_open';
    token.tag     = 's';
    token.nesting = 1;
    token.markup  = '~~';
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = 's_close';
    token.tag     = 's';
    token.nesting = -1;
    token.markup  = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' &&
        state.tokens[endDelim.token - 1].content === '~') {

      loneMarkers.push(endDelim.token - 1);
    }
  }

  // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
strikethrough.postProcess = function strikethrough(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess$1(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess$1(state, tokens_meta[curr].delimiters);
    }
  }
};

var emphasis = {};

// Insert each marker as a separate text token, and add it to delimiter list
//
emphasis.tokenize = function emphasis(state, silent) {
  var i, scanned, token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token         = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // A position of the token this delimiter corresponds to.
      //
      token:  state.tokens.length - 1,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end:    -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      max = delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue;
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               // check that first two markers match and adjacent
               delimiters[i - 1].marker === startDelim.marker &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               // check that last two markers are adjacent (we can safely assume they match)
               delimiters[startDelim.end + 1].token === endDelim.token + 1;

    ch = String.fromCharCode(startDelim.marker);

    token         = state.tokens[startDelim.token];
    token.type    = isStrong ? 'strong_open' : 'em_open';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = isStrong ? 'strong_close' : 'em_close';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
emphasis.postProcess = function emphasis(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};

var normalizeReference$1   = utils$1.normalizeReference;
var isSpace$1              = utils$1.isSpace;


var link = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      token,
      href = '',
      title = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false;

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace$1(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace$1(code) && code !== 0x0A) { break; }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace$1(code) && code !== 0x0A) { break; }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }
    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference$1(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    token        = state.push('link_open', 'a', 1);
    token.attrs  = attrs = [ [ 'href', href ] ];
    if (title) {
      attrs.push([ 'title', title ]);
    }

    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;

    token        = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

var normalizeReference   = utils$1.normalizeReference;
var isSpace              = utils$1.isSpace;


var image = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);

    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens = []
    );

    token          = state.push('image', 'img', 0);
    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
    token.children = tokens;
    token.content  = content;

    if (title) {
      attrs.push([ 'title', title ]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

/*eslint max-len:0*/
var EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;


var autolink = function autolink(state, silent) {
  var url, fullUrl, token, ch, start, max,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  start = state.pos;
  max = state.posMax;

  for (;;) {
    if (++pos >= max) return false;

    ch = state.src.charCodeAt(pos);

    if (ch === 0x3C /* < */) return false;
    if (ch === 0x3E /* > */) break;
  }

  url = state.src.slice(start + 1, pos);

  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink('mailto:' + url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  return false;
};

var HTML_TAG_RE = html_re.HTML_TAG_RE;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


var html_inline = function html_inline(state, silent) {
  var ch, match, max, token,
      pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    token         = state.push('html_inline', '', 0);
    token.content = match[0];

    if (isLinkOpen(token.content))  state.linkLevel++;
    if (isLinkClose(token.content)) state.linkLevel--;
  }
  state.pos += match[0].length;
  return true;
};

var entities          = entities$1;
var has               = utils$1.has;
var isValidEntityCode = utils$1.isValidEntityCode;
var fromCodePoint     = utils$1.fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


var entity = function entity(state, silent) {
  var ch, code, match, token, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) return false;

  if (pos + 1 >= max) return false;

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x23 /* # */) {
    match = state.src.slice(pos).match(DIGITAL_RE);
    if (match) {
      if (!silent) {
        code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);

        token         = state.push('text_special', '', 0);
        token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        token.markup  = match[0];
        token.info    = 'entity';
      }
      state.pos += match[0].length;
      return true;
    }
  } else {
    match = state.src.slice(pos).match(NAMED_RE);
    if (match) {
      if (has(entities, match[1])) {
        if (!silent) {
          token         = state.push('text_special', '', 0);
          token.content = entities[match[1]];
          token.markup  = match[0];
          token.info    = 'entity';
        }
        state.pos += match[0].length;
        return true;
      }
    }
  }

  return false;
};

function processDelimiters(delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx,
      isOddMatch, lastJump,
      openersBottom = {},
      max = delimiters.length;

  if (!max) return;

  // headerIdx is the first delimiter of the current (where closer is) delimiter run
  var headerIdx = 0;
  var lastTokenIdx = -2; // needs any value lower than -1
  var jumps = [];

  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];

    jumps.push(0);

    // markers belong to same delimiter run if:
    //  - they have adjacent tokens
    //  - AND markers are the same
    //
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }

    lastTokenIdx = closer.token;

    // Length is only used for emphasis-specific "rule of 3",
    // if it's not defined (in strikethrough or 3rd party plugins),
    // we can default it to 0 to disable those checks.
    //
    closer.length = closer.length || 0;

    if (!closer.close) continue;

    // Previously calculated lower bounds (previous fails)
    // for each marker, each delimiter length modulo 3,
    // and for whether this closer can be an opener;
    // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [ -1, -1, -1, -1, -1, -1 ];
    }

    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length % 3)];

    openerIdx = headerIdx - jumps[headerIdx] - 1;

    newMinOpenerIdx = openerIdx;

    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];

      if (opener.marker !== closer.marker) continue;

      if (opener.open && opener.end < 0) {

        isOddMatch = false;

        // from spec:
        //
        // If one of the delimiters can both open and close emphasis, then the
        // sum of the lengths of the delimiter runs containing the opening and
        // closing delimiters must not be a multiple of 3 unless both lengths
        // are multiples of 3.
        //
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }

        if (!isOddMatch) {
          // If previous delimiter cannot be an opener, we can safely skip
          // the entire sequence in future checks. This is required to make
          // sure algorithm has linear complexity (see *_*_*_*_*_... case).
          //
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ?
            jumps[openerIdx - 1] + 1 :
            0;

          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;

          closer.open  = false;
          opener.end   = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          // treat next token as start of run,
          // it optimizes skips in **<...>**a**<...>** pathological case
          lastTokenIdx = -2;
          break;
        }
      }
    }

    if (newMinOpenerIdx !== -1) {
      // If match for this delimiter run failed, we want to set lower bound for
      // future lookups. This is required to make sure algorithm has linear
      // complexity.
      //
      // See details here:
      // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
      //
      openersBottom[closer.marker][(closer.open ? 3 : 0) + ((closer.length || 0) % 3)] = newMinOpenerIdx;
    }
  }
}


var balance_pairs = function link_pairs(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  processDelimiters(state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(tokens_meta[curr].delimiters);
    }
  }
};

var fragments_join = function fragments_join(state) {
  var curr, last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels after emphasis/strikethrough turns some text nodes
    // into opening/closing tags
    if (tokens[curr].nesting < 0) level--; // closing tag
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0) level++; // opening tag

    if (tokens[curr].type === 'text' &&
        curr + 1 < max &&
        tokens[curr + 1].type === 'text') {

      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) { tokens[last] = tokens[curr]; }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};

var Token          = token;
var isWhiteSpace   = utils$1.isWhiteSpace;
var isPunctChar    = utils$1.isPunctChar;
var isMdAsciiPunct = utils$1.isMdAsciiPunct;


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  // Stores { start: end } pairs. Useful for backtrack
  // optimization of pairs parse (emphasis, strikes).
  this.cache = {};

  // List of emphasis-like delimiters for current tag
  this.delimiters = [];

  // Stack of delimiter lists for upper level tags
  this._prev_delimiters = [];

  // backtick length => last seen position
  this.backticks = {};
  this.backticksScanned = false;

  // Counter used to disable inline linkify-it execution
  // inside <a> and markdown links
  this.linkLevel = 0;
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);
  var token_meta = null;

  if (nesting < 0) {
    // closing tag
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }

  token.level = this.level;

  if (nesting > 0) {
    // opening tag
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
};


// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start);

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

  count = pos - start;

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
  } else {
    can_open  = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open:  can_open,
    can_close: can_close,
    length:    count
  };
};


// re-export Token class to use in block rules
StateInline.prototype.Token = Token;


var state_inline = StateInline;

/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/


var Ruler           = ruler;


////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            text ],
  [ 'linkify',         linkify ],
  [ 'newline',         newline ],
  [ 'escape',          _escape ],
  [ 'backticks',       backticks ],
  [ 'strikethrough',   strikethrough.tokenize ],
  [ 'emphasis',        emphasis.tokenize ],
  [ 'link',            link ],
  [ 'image',           image ],
  [ 'autolink',        autolink ],
  [ 'html_inline',     html_inline ],
  [ 'entity',          entity ]
];

// `rule2` ruleset was created specifically for emphasis/strikethrough
// post-processing and may be changed in the future.
//
// Don't use this for anything except pairs (plugins working with `balance_pairs`).
//
var _rules2 = [
  [ 'balance_pairs',   balance_pairs ],
  [ 'strikethrough',   strikethrough.postProcess ],
  [ 'emphasis',        emphasis.postProcess ],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  [ 'fragments_join',  fragments_join ]
];


/**
 * new ParserInline()
 **/
function ParserInline$1() {
  var i;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline$1.prototype.skipToken = function (state) {
  var ok, i, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;


  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) {
        if (pos >= state.pos) { throw new Error("inline rule didn't increment state.pos"); }
        break;
      }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) { state.pos++; }
  cache[pos] = state.pos;
};


// Generate tokens for input range
//
ParserInline$1.prototype.tokenize = function (state) {
  var ok, i, prevPos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true
    prevPos = state.pos;

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) {
          if (prevPos >= state.pos) { throw new Error("inline rule didn't increment state.pos"); }
          break;
        }
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline$1.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);

  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};


ParserInline$1.prototype.State = state_inline;


var parser_inline = ParserInline$1;

var re;
var hasRequiredRe;

function requireRe () {
	if (hasRequiredRe) return re;
	hasRequiredRe = 1;


	re = function (opts) {
	  var re = {};
	  opts = opts || {};

	  // Use direct extract instead of `regenerate` to reduse browserified size
	  re.src_Any = requireRegex$3().source;
	  re.src_Cc  = requireRegex$2().source;
	  re.src_Z   = requireRegex().source;
	  re.src_P   = regex$4.source;

	  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
	  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

	  // \p{\Z\Cc} (white spaces + control)
	  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

	  // Experimental. List of chars, completely prohibited in links
	  // because can separate it from other part of text
	  var text_separators = '[><\uff5c]';

	  // All possible word characters (everything without punctuation, spaces & controls)
	  // Defined via punctuation & spaces to save space
	  // Should be something like \p{\L\N\S\M} (\w but without `_`)
	  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
	  // The same as abothe but without [0-9]
	  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

	  ////////////////////////////////////////////////////////////////////////////////

	  re.src_ip4 =

	    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

	  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
	  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

	  re.src_port =

	    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

	  re.src_host_terminator =

	    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')' +
	    '(?!' + (opts['---'] ? '-(?!--)|' : '-|') + '_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

	  re.src_path =

	    '(?:' +
	      '[/?#]' +
	        '(?:' +
	          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' +
	          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
	          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
	          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
	          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
	          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
	          "\\'(?=" + re.src_pseudo_letter + '|[-])|' +  // allow `I'm_king` if no pair found
	          '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
	                                     // github has ... in commit range links,
	                                     // Restrict to
	                                     // - english
	                                     // - percent-encoded
	                                     // - parts of file path
	                                     // - params separator
	                                     // until more examples found.
	          '\\.(?!' + re.src_ZCc + '|[.]|$)|' +
	          (opts['---'] ?
	            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
	            :
	            '\\-+|'
	          ) +
	          ',(?!' + re.src_ZCc + '|$)|' +       // allow `,,,` in paths
	          ';(?!' + re.src_ZCc + '|$)|' +       // allow `;` if not followed by space-like char
	          '\\!+(?!' + re.src_ZCc + '|[!]|$)|' +  // allow `!!!` in paths, but not at the end
	          '\\?(?!' + re.src_ZCc + '|[?]|$)' +
	        ')+' +
	      '|\\/' +
	    ')?';

	  // Allow anything in markdown spec, forbid quote (") at the first position
	  // because emails enclosed in quotes are far more common
	  re.src_email_name =

	    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

	  re.src_xn =

	    'xn--[a-z0-9\\-]{1,59}';

	  // More to read about domain names
	  // http://serverfault.com/questions/638260/

	  re.src_domain_root =

	    // Allow letters & digits (http://test1)
	    '(?:' +
	      re.src_xn +
	      '|' +
	      re.src_pseudo_letter + '{1,63}' +
	    ')';

	  re.src_domain =

	    '(?:' +
	      re.src_xn +
	      '|' +
	      '(?:' + re.src_pseudo_letter + ')' +
	      '|' +
	      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
	    ')';

	  re.src_host =

	    '(?:' +
	    // Don't need IP check, because digits are already allowed in normal domain names
	    //   src_ip4 +
	    // '|' +
	      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
	    ')';

	  re.tpl_host_fuzzy =

	    '(?:' +
	      re.src_ip4 +
	    '|' +
	      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
	    ')';

	  re.tpl_host_no_ip_fuzzy =

	    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

	  re.src_host_strict =

	    re.src_host + re.src_host_terminator;

	  re.tpl_host_fuzzy_strict =

	    re.tpl_host_fuzzy + re.src_host_terminator;

	  re.src_host_port_strict =

	    re.src_host + re.src_port + re.src_host_terminator;

	  re.tpl_host_port_fuzzy_strict =

	    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

	  re.tpl_host_port_no_ip_fuzzy_strict =

	    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


	  ////////////////////////////////////////////////////////////////////////////////
	  // Main rules

	  // Rude test fuzzy links by host, for quick deny
	  re.tpl_host_fuzzy_test =

	    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

	  re.tpl_email_fuzzy =

	      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
	      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

	  re.tpl_link_fuzzy =
	      // Fuzzy link can't be prepended with .:/\- and non punctuation.
	      // but can start with > (markdown blockquote)
	      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
	      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

	  re.tpl_link_no_ip_fuzzy =
	      // Fuzzy link can't be prepended with .:/\- and non punctuation.
	      // but can start with > (markdown blockquote)
	      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
	      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

	  return re;
	};
	return re;
}

////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = requireRe()(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test     = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
  self.re.schema_at_start = RegExp('^' + self.re.schema_search.source, 'i');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt$1(schemas, options) {
  if (!(this instanceof LinkifyIt$1)) {
    return new LinkifyIt$1(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt$1.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt$1.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt$1.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt$1.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt$1.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt$1.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/**
 * LinkifyIt#matchAtStart(text) -> Match|null
 *
 * Returns fully-formed (not fuzzy) link if it starts at the beginning
 * of the string, and null otherwise.
 **/
LinkifyIt$1.prototype.matchAtStart = function matchAtStart(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) return null;

  var m = this.re.schema_at_start.exec(text);
  if (!m) return null;

  var len = this.testSchemaAt(text, m[2], m[0].length);
  if (!len) return null;

  this.__schema__     = m[2];
  this.__index__      = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;

  return createMatch(this, 0);
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt$1.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt$1.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt$1.prototype.onCompile = function onCompile() {
};


var linkifyIt = LinkifyIt$1;

/*! https://mths.be/punycode v1.4.1 by @mathias */


/** Highest positive signed 32-bit float value */
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'

/** Regular expressions */
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\x20-\x7E]/; // unprintable ASCII chars + non-ASCII chars
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
var errors = {
  'overflow': 'Overflow: input needs wider integers to process',
  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
  throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
  var parts = string.split('@');
  var result = '';
  if (parts.length > 1) {
    // In email addresses, only the domain name should be punycoded. Leave
    // the local part (i.e. everything up to `@`) intact.
    result = parts[0] + '@';
    string = parts[1];
  }
  // Avoid `split(regex)` for IE8 compatibility. See #17.
  string = string.replace(regexSeparators, '\x2E');
  var labels = string.split('.');
  var encoded = map(labels, fn).join('.');
  return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
  var output = [],
    counter = 0,
    length = string.length,
    value,
    extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
function ucs2encode(array) {
  return map(array, function(value) {
    var output = '';
    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }
    output += stringFromCharCode(value);
    return output;
  }).join('');
}

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
function basicToDigit(codePoint) {
  if (codePoint - 48 < 10) {
    return codePoint - 22;
  }
  if (codePoint - 65 < 26) {
    return codePoint - 65;
  }
  if (codePoint - 97 < 26) {
    return codePoint - 97;
  }
  return base;
}

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
function digitToBasic(digit, flag) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for ( /* no initialization */ ; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
function decode(input) {
  // Don't use UCS-2
  var output = [],
    inputLength = input.length,
    out,
    i = 0,
    n = initialN,
    bias = initialBias,
    basic,
    j,
    index,
    oldi,
    w,
    k,
    digit,
    t,
    /** Cached calculation results */
    baseMinusT;

  // Handle the basic code points: let `basic` be the number of input code
  // points before the last delimiter, or `0` if there is none, then copy
  // the first basic code points to the output.

  basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }

  for (j = 0; j < basic; ++j) {
    // if it's not a basic code point
    if (input.charCodeAt(j) >= 0x80) {
      error('not-basic');
    }
    output.push(input.charCodeAt(j));
  }

  // Main decoding loop: start just after the last delimiter if any basic code
  // points were copied; start at the beginning otherwise.

  for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */ ) {

    // `index` is the index of the next character to be consumed.
    // Decode a generalized variable-length integer into `delta`,
    // which gets added to `i`. The overflow checking is easier
    // if we increase `i` as we go, then subtract off its starting
    // value at the end to obtain `delta`.
    for (oldi = i, w = 1, k = base; /* no condition */ ; k += base) {

      if (index >= inputLength) {
        error('invalid-input');
      }

      digit = basicToDigit(input.charCodeAt(index++));

      if (digit >= base || digit > floor((maxInt - i) / w)) {
        error('overflow');
      }

      i += digit * w;
      t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

      if (digit < t) {
        break;
      }

      baseMinusT = base - t;
      if (w > floor(maxInt / baseMinusT)) {
        error('overflow');
      }

      w *= baseMinusT;

    }

    out = output.length + 1;
    bias = adapt(i - oldi, out, oldi == 0);

    // `i` was supposed to wrap around from `out` to `0`,
    // incrementing `n` each time, so we'll fix that now:
    if (floor(i / out) > maxInt - n) {
      error('overflow');
    }

    n += floor(i / out);
    i %= out;

    // Insert `n` at position `i` of the output
    output.splice(i++, 0, n);

  }

  return ucs2encode(output);
}

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
function encode(input) {
  var n,
    delta,
    handledCPCount,
    basicLength,
    bias,
    j,
    m,
    q,
    k,
    t,
    currentValue,
    output = [],
    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,
    /** Cached calculation results */
    handledCPCountPlusOne,
    baseMinusT,
    qMinusT;

  // Convert the input in UCS-2 to Unicode
  input = ucs2decode(input);

  // Cache the length
  inputLength = input.length;

  // Initialize the state
  n = initialN;
  delta = 0;
  bias = initialBias;

  // Handle the basic code points
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  handledCPCount = basicLength = output.length;

  // `handledCPCount` is the number of code points that have been handled;
  // `basicLength` is the number of basic code points.

  // Finish the basic string - if it is not empty - with a delimiter
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {

    // All non-basic code points < n have been handled already. Find the next
    // larger one:
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
    // but guard against overflow
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error('overflow');
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < n && ++delta > maxInt) {
        error('overflow');
      }

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer
        for (q = delta, k = base; /* no condition */ ; k += base) {
          t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(
            stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
          );
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;

  }
  return output.join('');
}

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
function toUnicode(input) {
  return mapDomain(input, function(string) {
    return regexPunycode.test(string) ?
      decode(string.slice(4).toLowerCase()) :
      string;
  });
}

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ?
      'xn--' + encode(string) :
      string;
  });
}
var version = '1.4.1';
/**
 * An object of methods to convert from JavaScript's internal character
 * representation (UCS-2) to Unicode code points, and back.
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode
 * @type Object
 */

var ucs2 = {
  decode: ucs2decode,
  encode: ucs2encode
};
var _polyfillNode_punycode = {
  version: version,
  ucs2: ucs2,
  toASCII: toASCII,
  toUnicode: toUnicode,
  encode: encode,
  decode: decode
};

var _polyfillNode_punycode$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    decode: decode,
    default: _polyfillNode_punycode,
    encode: encode,
    toASCII: toASCII,
    toUnicode: toUnicode,
    ucs2: ucs2,
    version: version
});

var require$$8 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_punycode$1);

var _default = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   100            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};

var zero = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline',
        'text_join'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ],
      rules2: [
        'balance_pairs',
        'fragments_join'
      ]
    }
  }
};

var commonmark = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline',
        'text_join'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ],
      rules2: [
        'balance_pairs',
        'emphasis',
        'fragments_join'
      ]
    }
  }
};

var utils        = utils$1;
var helpers      = helpers$1;
var Renderer     = renderer;
var ParserCore   = parser_core;
var ParserBlock  = parser_block;
var ParserInline = parser_inline;
var LinkifyIt    = linkifyIt;
var mdurl        = mdurl$1;
var punycode     = require$$8;


var config = {
  default: _default,
  zero: zero,
  commonmark: commonmark
};

////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();

  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
}

////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
}


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/
  this.linkify = new LinkifyIt();

  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/
  this.normalizeLink = normalizeLink;

  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/
  this.normalizeLinkText = normalizeLinkText;


  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = utils.assign({}, helpers);


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you will - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.enable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.disable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and return list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


var lib = MarkdownIt;

var markdownIt = lib;

var MarkDownIt = /*@__PURE__*/getDefaultExportFromCjs(markdownIt);

const mdIt = new MarkDownIt({
    html: true
});
const DocPage = ({ content }) => {
    return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement("style", null, `
        .tab-master-docs table {
          border: 1px solid;
          border-collapse: collapse;
        }

        .tab-master-docs th {
          padding: 0 7px;
          border: 1px solid;
        }

        .tab-master-docs td {
          padding: 0 7px;
          border: 1px solid;
        }

        .tab-master-docs tr:nth-child(odd) {
          background-color: #1B2838;
        }

        .tab-master-docs .${DFL.gamepadDialogClasses.ModalPosition} {
          padding: 0;
        }

        .tab-master-docs > .Panel.Focusable.gpfocuswithin {
          background-color: #868da117;
        }

        .tab-master-docs img {
          max-width: 588px;
        }

        .tab-master-docs code {
          color: #f1ac4f;
          padding: 2px 4px;
          border-radius: 4px;
        }
      `),
        window.SP_REACT.createElement("div", { className: "tab-master-docs" },
            window.SP_REACT.createElement(DFL.ModalPosition, null,
                window.SP_REACT.createElement(DFL.Focusable, { style: { display: "flex", flexDirection: "column", minHeight: 0 } },
                    window.SP_REACT.createElement(DFL.ScrollPanelGroup
                    //@ts-ignore
                    , { 
                        //@ts-ignore
                        focusable: false, style: { flex: 1, minHeight: 0, padding: "12px" }, scrollPaddingTop: 32 },
                        window.SP_REACT.createElement(DFL.Focusable, { onActivate: () => { }, noFocusRing: true },
                            window.SP_REACT.createElement("div", { dangerouslySetInnerHTML: { __html: mdIt.render(content) } }))))))));
};

var docs = {"Filters":"## Filters\n\n### Table of Contents\n\n- Overview\n- Inverting Filters\n- Available Filters\n    - Collection\n    - Installed\n    - Friends\n    - Community Tags\n    - Whitelist\n    - Blacklist\n    - Platform\n    - Deck Compatibility\n    - SteamOS Compatibility\n    - Regex\n    - Merge\n    - Platform\n    - Deck Compatability\n    - Review Score\n    - Time Played\n    - Size on Disk\n    - Release Date\n    - Last Played\n    - Demo\n    - Streamable\n    - Steam Features\n    - Achievements\n    - MicroSD Card (Requires MicroSDeck)\n\n<br/>\n\n### Overview\n\nBelow you will find information on the options and behavior of each filter, as well as an example of how to use it. Keep in mind that while most of the examples simply show how the filter is used on its own, each filter can be combined together to create very complexed selections. The `merge filter` example demonstrates this\n\n<br/>\n\n### Inverting Filters\n\nMost filters have an option to invert them. This can be used to do the exact opposite of what the filter would normally do!<br/>\nExample: Inverting a `Collection` filter would cause it to include any apps **not in** that collection, instead of **in** it.\n\n<br/>\n\n### Available Filters\n\n#### Collection\n\n**Options:**<br/>\n`collection` - The collection to use.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on if they are included in the collection.\n\n**Example:**<br/>\n<img title=\"Collection Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_collection-example.png\" />\n\n<br/>\n\n#### Installed\n\n**Options:**<br/>\n`installed` - A toggle. On is `installed`, off is `uninstalled`.\n\n**Behavior:**<br/>\nFilters apps based on their install state.\n\n**Example:**<br/>\n<img title=\"Installed Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_installed-example.png\" />\n\n<br/>\n\n#### Friends\n\n**Options:**<br/>\n`friends` - A list of your users in your Steam Friends list.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\n\n- `and`: Filters apps based on if they are owned by all listed friends.\n- `or`: Filters apps based on if they are owned by any listed friend.\n\n**Example:**<br/>\n<img title=\"Friends Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_friends-example.png\" />\n\n<br/>\n\n#### Community Tags\n\n**Options:**<br/>\n`tags` - A list of community tags.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\n\n- `and`: Filters apps based on if they have all listed tags.\n- `or`: Filters apps based on if they have any listed tag.\n\n**Example:**<br/>\n<img title=\"Tags Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_tags-example.png\" />\n\n<br/>\n\n#### Whitelist\n\n**Options:**<br/>\n`apps` - A list of apps to whitelist.\n\n**Behavior:**<br/>\nFilters apps by if they are in the list.\n\n**Example:**<br/>\n<img title=\"Whitelist Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_whitelist-example.png\" />\n\n<br/>\n\n#### Blacklist\n\n**Options:**<br/>\n`apps` - A list of apps to blacklist.\n\n**Behavior:**<br/>\nFilters apps by if they are not in the list.\n\n**Example:**<br/>\n<img title=\"Blacklist Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_blacklist-example.png\" />\n\n<br/>\n\n#### Regex\n\n**Options:**<br/>\n`regex` - The regular expression to use.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps by testing if their title matches a regular expression .\n\n**Tip:**<br/>\nRegular expressions can seem daunting and confusing. You can test yours before hand by looking up a \"Regex Tester\" website.<br/>\nAlso, by typing a phrase like \"Zelda\" into the regex field, it will include any game with that phrase in its title.\n\n**Example:**<br/>\n<img title=\"Regex Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_regex-example.png\" />\n\n<br/>\n\n#### Merge\n\n**Options:**<br/>\n`filters` - The filters for this group.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nGroups a set of filters, allowing you to change the logic mode for smaller sets of filters.\n\n**Tip:**<br/>\nBy grouping filters you are able to specify the mode for filters in the group seperately, significantly increasing the utility of TabMaster\n\n**Example:**<br/>\n<img title=\"Merge Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_merge-example.png\" />\n\n<br/>\n\n#### Platform\n\n**Options:**<br/>\n`platform` - The desired platform, either Steam or Non Steam.\n\n**Behavior:**<br/>\nFilters apps based on their platform.\n\n**Example:**<br/>\n<img title=\"Platform Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_platform-example.png\" />\n\n<br/>\n\n#### Deck Compatability\n\n**Options:**<br/>\n`compatability level` - The desired compatability level, either \"Verified\", \"Playable\", \"Unsupported\", or \"Unkown\".\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on their Steam Deck compatability.\n\n**Example:**<br/>\n<img title=\"Deck Compat Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_deck-compat-example.png\" />\n\n<br/>\n\n#### SteamOS Compatability\n\n**Options:**<br/>\n`compatability level` - The desired compatability level, either \"Compatible\", \"Unsupported\", or \"Unkown\".\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on their SteamOS Deck compatability.\n\n**Example:**<br/>\n<img title=\"SteamOS Compat Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_SteamOS-compat-example.png\" />\n\n<br/>\n\n#### Review Score\n\n**Options:**<br/>\n`score` - The desired review score.\n`type` - The desired review type to use, Metacritic or Steam.\n`greater/less` - Whether to include apps that have a review score greater than or equal to the provided score, or less than or equal to it.\n\n**Behavior:**<br/>\nFilters apps based on their review score.\n\n**Example:**<br/>\n<img title=\"Review Score Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_review-score-example.png\" />\n\n<br/>\n\n#### Time Played\n\n**Options:**<br/>\n`play time` - The desired amount of time in the selected interval.\n`time interval` - The time interval to use, \"minutes\", \"hours\", or \"days\".\n`greater/less` - Whether to include apps that are greater than or equal to the provided score, or less than or equal to it.\n\n**Behavior:**<br/>\nFilters apps based on your time spent playing them.\n\n**Example:**<br/>\n<img title=\"Time Played Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_time-played-example.png\" />\n\n<br/>\n\n#### Size on Disk\n\n**Options:**<br/>\n`size` - The desired size of apps to include.\n`greater/less` - Whether to include apps that are greater than or equal to the provided score, or less than or equal to it.\n\n**Behavior:**<br/>\nFilters apps based on their size.\n\n**Example:**<br/>\n<img title=\"Size on Disk Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_size-on-disk-example.png\" />\n\n<br/>\n\n#### Release Date\n\n**Options:**<br/>\n`date` - The desired release date of apps to include.\n`time period` - Whether you want to specify only the year, just the month and year, or the day, month, and year.\n`before/after` - Whether to include apps that were released before or after the provided date.\n\n**Behavior:**<br/>\nFilters apps based on their release date.\n\n**Example:**<br/>\n<img title=\"Release Date Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_release-date-example.png\" />\n\n<br/>\n\n#### Purchase Date\n\n**Options:**<br/>\n`date` - The desired purchase date of apps to include.\n`time period` - Whether you want to specify only the year, just the month and year, or the day, month, and year.\n`before/after` - Whether to include apps that were purchased before or after the provided date.\n\n**Behavior:**<br/>\nFilters apps based on their purchase date.\n\n**Example:**<br/>\n<img title=\"Purchase Date Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_purchase-date-example.png\" />\n\n<br/>\n\n#### Last Played\n\n**Options:**<br/>\n`date` - The desired last played date of apps to include.\n`time period` - Whether you want to specify only the year, just the month and year, or the day, month, and year.\n`before/after` - Whether to include apps that were last played before or after the provided date.\n\n**Behavior:**<br/>\nFilters apps based on when they were last played.\n\n**Example:**<br/>\n<img title=\"Last Played Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_last-played-example.png\" />\n\n<br/>\n\n#### Family Sharing\n\n**Options:**<br/>\n`Is from family member` - Whether to only include games that are shared from a family member, or only those that aren't.\n\n**Behavior:**<br/>\nFilters apps based on if they are a shared by a family member or not.\n\n**Example:**<br/>\n<img title=\"Family Sharing Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_family-sharing-example.png\" />\n\n<br/>\n\n#### Demo\n\n**Options:**<br/>\n`Is demo` - Whether to only include games that are demos, or only those that aren't.\n\n**Behavior:**<br/>\nFilters apps based on if they are a demo or not.\n\n**Example:**<br/>\n<img title=\"Demo Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_demo-example.png\" />\n\n<br/>\n\n#### Coming Soon\n\n**Options:**<br/>\n`Is Coming Soon` - Whether to only include games that are coming soon, or only those that aren't.\n\n**Behavior:**<br/>\nFilters apps based on if they are a coming soon or not.\n\n**Example:**<br/>\n<img title=\"Coming Soon Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_coming-soon-example.png\" />\n\n<br/>\n\n#### Streamable\n\n**Options:**<br/>\n`Is Streamable` - Whether to only include games that can be streamed, or only those that can't.\n\n**Behavior:**<br/>\nFilters apps based on if they can be streamed or not.\n\n**Example:**<br/>\n<img title=\"Streamable Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_streamable-example.png\" />\n\n<br/>\n\n#### Steam Features\n\n**Options:**<br/>\n`features` - A list of Steam features.\n`logic mode` - Specifies whether to use `and` vs. `or` mode.\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\n\n- `and`: Filters apps based on if they have all listed features.\n- `or`: Filters apps based on if they have any listed features.\n\n**Example:**<br/>\n<img title=\"Steam Features Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_steam-features-example.png\" />\n\n<br/>\n\n#### Achievements\n\n**Options:**<br/>\n`percentage` - The desired achievement percentage completion (or count) of apps to include.\n`greater/less` - Whether to include apps that have an achievement completion percentage greater than or equal to the provided percentage, or less than or equal to it.\n`Type` - Whether to use filter by the number of unlocked achievements, or the completion percentage\n\n**Behavior:**<br/>\nFilters apps based on their achievement completion percentage or count.\n\n**Example:**<br/>\n<img title=\"Achievements Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_achievements-example.png\" />\n\n<br/>\n\n#### MicroSD Card (Requires MicroSDeck)\n\n**Options:**<br/>\n`MicroSD card` - The MicroSD card to use (if none are showing up, make sure they are showing up in MicroSDeck).\n`inverted` - If true, inverts the filtered apps (exclued apps are now included, and vis versa).\n\n**Behavior:**<br/>\nFilters apps based on if they are installed on the specified MicroSD card.\n\n**Example:**<br/>\n<img title=\"MicroSD Card Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_microsd-card-example.png\" />\n\n<br/>\n\n#### Install Folder\n\n**Options:**<br/>\n`Install Folder` - The Install Folder to use.\n\n**Behavior:**<br/>\nFilters apps based on if they are installed in the specified Steam Install Folder.\n\n**Example:**<br/>\n<img title=\"Install Folder Example\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/filters/docs_install-folder-example.png\" />\n\n<br/>\n\n###### © Travis Lane (Tormak), Jessebofill\n","Overview":"## Overview\n\n### About\nThe purpose of TabMaster is to provide a robust sytem for custom library tabs, while making the experience feel like its always been a part of SteamOS.\n\n<br/>\n\n\n### Docs\nThese docs serve as a reference for questions you may have, and a guide for helping you understand the full extend of TabMaster's features. Below you will find the table of contents listing each doc page and providing a short description of each. Simply select the page from the menu to the left to view it.\n\n<br/>\n\n\n### Table of Contents\n* Overview\n  * General overview of the plugin and docs. **You are here**\n* Tabs\n  * What is a tab, parts of a tab, and default vs custom.\n* Filters\n  * What are filters, descriptions/tips for each, and examples.\n* Tab Profiles\n  * User made groups of tabs that can be swapped out on the fly.\n* The Fix System\n  * TabMaster's system for handling changes that could potentially break it.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n","Tab_Profiles":"## Tab Profiles\n\n### Table of Contents\n - Overview\n - The Tab Profiles Context Menu\n - Creating Profiles\n - Applying Profiles\n - Overwriting Profiles\n - Deleting Profiles\n\n<br/>\n\n\n### Overview\nHere you can find everything about Tab Profiles, including adding, applying, overwriting, and deleting them. To get started, use the button pictured below or the TabMaster context menu to open the Tab Profiles Menu.\n\n<img title=\"Managing Tab Profiles\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_managing-tab-profiles.png\" />\n\n<br/>\n\n\n### The Tab Profiles Context Menu\n<img title=\"Tab Profiles Context Menu\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/tab-profiles/docs_tab-profiles-context-menu.png\" />\n<br/>\nThe Tab Profiles context menu is where you can manage your profiles. You can create new ones, and apply, overwrite, and delete existing profiles from here.\n\n<br/>\n\n\n### Creating Profiles\n<img title=\"Creating Tab Profiles\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/tab-profiles/docs_creating-tab-profiles.png\" />\n<br/>\nCreating profiles is straightforward. First, ensure that the tabs you want included in the profile are all visible, then open the Tab Profiles context menu using one of the two methods mentioned above. Click \"Create Profile\", entire a name, and the profile will be created.\n\n<br/>\n\n\n### Applying Profiles\nOverwriting a profile is easy! Just open the Tab Profiles menu, and navigate to the profile you want to apply. Click \"A\", and the profile will be applied, showing all tabs in the profile, and hiding any that aren't.\n\n<br/>\n\n\n### Overwriting Profiles\n<img title=\"Overwriting Tab Profiles\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/tab-profiles/docs_coverwriting-tab-profiles.png\" />\n<br/>\nMade a mistake while making a profile, or just decide something needed to change? Well its easy to overwrite profiles, just open the profiles menu and navigate to the profile you want to delete and click \"Y\". A window will show up comparing what's in the profile, to what you're overwriting it with, allowing you to see the changes that will be made. Simply confirm here, and the profile will be overwritten.\n\n<br/>\n\n\n### Deleting Profiles\nDecide you don't like a profile anymore? Well deleting it is easy too! Just open the same Tab Profiles menu, and navigate to the profile you want to delete and click \"X\". You will be prompted to confirm if you really want to delete the profile, and confirming will delete it.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n","Tabs":"## Tabs\n\n### Table of Contents\n - Overview\n - Custom vs. Default\n - The TabMaster Context Menu\n - Quick Tabs\n - Adding Tabs\n   - New Tab Options\n - Editing Tabs\n   - Changing Tabs\n   - Reordering Tabs\n   - Hiding Tabs\n - Duplicating Tabs\n - Removing Tabs\n - Sharing Tabs\n\n<br/>\n\n\n### Overview\nHere you can find everything about tabs, including adding, availale options, reordering, hiding, and deleting them.\n\n<br/>\n\n\n### Custom vs. Default\nBefore you continue, it is important to understand that there are two types of tabs, default tabs (marked with the Steam logo) and custom tabs (ones you make). Default tabs can only be hidden, while custom tabs have all the following features.\n\n<br/>\n\n\n### The TabMaster Context Menu\n<img title=\"TabMaster Context Menu\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_context-menu.png\" />\n<br/>\nThe TabMaster context menu aims to provide access to all of TabMaster's features straight from the library page. Simply navigate to a tab in the library header, and hit the menu button to open the context menu.\n\n<br/>\n\n\n### Quick Tabs\n<img title=\"Quick Tabs UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_quick-tabs.png\" />\n<br/>\nQuick Tabs are premade tabs that allow you to quickly generate a new tab for a variety of use cases. They are modifiable just like a regular tab as well.\n\n<br/>\n\n\n### Adding Tabs\n<img title=\"Add UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_create-tab.png\" />\n<br/>\nThis is where you can add new tabs to your library. You can find the various options explained below.\n\n#### Options:\n\n**Name** - The name of the tab (This will show up in your Steam Library).\n\n**Include** - The types of apps to include (defaults to games).\n\n**Sort apps by** - The order to sort apps by. This overrides the order from Steam's library sort feature.\n\n**Auto Hide** - Whether this tab should automatically be hidden from the library when it has no games (this preserves the order of the tabs, unlike hiding it manually).\n\n**Logic Mode** - Two modes, `And` (apps must match all filters) and `Or` (apps must match at least one filter).\n\n**Filters** - The filters for this tab. More details on these can be found on the next page.\n\n<br/>\n\n\n### Editing Tabs\n\n#### Changing Tabs (Custom Tabs Only)\n<img title=\"Edit UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_edit-ui.png\" />\n<br/>\nTo get to this menu, focus the tab you want to reorder in the QAM (Quick Access Menu), and hit `A` to open the tab's options. If the tab is a custom tab, you will see an `Edit` option, select that. You will see the same options as when you add a tab. You can edit any of these and the tab will update once you save.\n\n<br/>\n\n#### Reordering Tabs\n<img title=\"Reorder UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_reorder-ui.png\" />\n<br/>\nReordering a tab is just as straightforward. Simply focus the tab you want to reorder in the QAM. Hit `X`, and use the left joystick to move the tab up/down in the order. Once you are satisfied, hit `X` again to save.\n\n<br/>\n\n#### Hiding Tabs\nTabs can be hidden from the library as well. This means they won't appear in your library, but you don't have to completely delete them. This option is found in the same menu as the `edit` option from earlier.\n\n<br/>\n\n### Duplicating Tabs\nTabs can be duplicated from either the Library Context Menu or the QAM Menu. This will bring you to the \"Create Tab\" modal with the filters pre-filtered.\n\n<br/>\n\n### Removing Tabs (Custom Tabs Only)\nIf you decide your custom tab just isn't cutting it, you can completely remove it too. To do this, navigate to the tab's menu (the same one where you edit and hide tabs), and click `delete`. You will be prompted to confirm (as this can't be undone!), and once you do, the tab will be perminantly removed from TabMaster.\n\n<br/>\n\n### Sharing Tabs\nTabs can be shared with other users on your device. Simply toggle \"Other users can copy this tab\" to true, and it will show up for them in the shared tabs modal.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n","The_Fix_System":"## The Fix System\n\n### Table of Contes\n- What is the Fix System?\n- How to use the Fix System\n  - Fixing a Filter\n  - Fixing a Filter in a Group\n\n<br/>\n\n\n### What is the Fix System?\nThe fix system is TabMaster's solution for tough situations, where the plugin is unable to automatically fix issues. In these cases, we thought it best to leave the decision of what to do up to you, the user.<br/>\n**Causes:**\n - Deleting a collection used as a filter\n\n<br/>\n\n\n### How to use the Fix System\nWe've tried to make this system as simple and easy to use as possible. When an issue that would break TabMaster occurs, it will show the fix system window, and let you know what went wrong.<br/>\n**Note!**: You need to fix the issue! If you don't TabMaster will not work, and will show the fix system each time you log in until you fix it!\n\n#### Fixing a Filter\nTo fix a filter, simply set its options to new values, or remove it completely. TabMaster will update the filter according to your changes when you save.<br/>\n<img title=\"Fix UI\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_fix-ui.png\" />\n(initial popup)<br/>\n<img title=\"Fix Applied\" src=\"https://raw.githubusercontent.com/tormak9970/TabMaster/master/assets/docs_filter-fixed.png\" />\n\n\n<br/>\n\n#### Fixing a Filter in a Group\nIn order to fix a filter in a merge group, you need to open the group. Once done, you can fix it just like a regular filter.\n\n<br/>\n\n\n###### © Travis Lane (Tormak), Jessebofill\n"};

/**
 * The documentation pages router for TabMaster.
 */
const DocsRouter = () => {
    const docPages = {};
    Object.entries(docs).map(([pageName, doc]) => {
        pageName = pageName.replace(/_/g, " ");
        docPages[pageName] = {
            title: pageName,
            content: window.SP_REACT.createElement(DocPage, { content: doc }),
            route: `/tab-master-docs/${pageName.toLowerCase().replace(/ /g, "-")}`,
            icon: window.SP_REACT.createElement(MdNumbers, null),
            hideTitle: true
        };
    });
    return (window.SP_REACT.createElement(DFL.SidebarNavigation, { title: "TabMaster Docs", showTitle: true, pages: [
            docPages["Overview"],
            docPages["Tabs"],
            docPages["Filters"],
            docPages["Tab Profiles"],
            docPages["The Fix System"]
        ] }));
};

var index = definePlugin(() => {
    let libraryPatch;
    let settingsPatch;
    const tabMasterManager = new TabMasterManager();
    PluginController.setup(tabMasterManager);
    const loginUnregisterer = PluginController.initOnLogin(async () => {
        await MicroSDeckInterop.waitForLoad();
        await tabMasterManager.loadTabs();
        libraryPatch = patchLibrary(tabMasterManager);
        settingsPatch = patchSettings(tabMasterManager);
    });
    routerHook.addRoute('/tab-master-docs', () => (window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
        window.SP_REACT.createElement(DocsRouter, null))));
    return {
        name: 'TabMaster',
        title: window.SP_REACT.createElement(SP_REACT.Fragment, null),
        titleView: window.SP_REACT.createElement(QuickAccessTitleView, { title: 'TabMaster', tabMasterManager: tabMasterManager }),
        content: (window.SP_REACT.createElement(TabMasterContextProvider, { tabMasterManager: tabMasterManager },
            window.SP_REACT.createElement(QuickAccessContent, null))),
        icon: window.SP_REACT.createElement(TbLayoutNavbarExpand, null),
        onDismount: () => {
            routerHook.removePatch('/library', libraryPatch);
            routerHook.removePatch('/settings', settingsPatch);
            routerHook.removeRoute('/tab-master-docs');
            loginUnregisterer.unregister();
            PluginController.dismount();
        },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
