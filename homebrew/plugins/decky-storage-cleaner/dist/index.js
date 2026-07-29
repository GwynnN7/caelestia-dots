// Decky Loader will pass this api in, it's versioned to allow for backwards compatibility.
// @ts-ignore

// Prevents it from being duplicated in output.
const manifest = {"name":"Storage Cleaner","author":"Matt Carlucci","api_version":1,"flags":[],"publish":{"tags":["storage","cleaner","shader","cache","compatdata","compatibility","data","disk","utility","other"],"description":"Quickly visualize, select and clear shader cache and compatibility data.","image":"https://raw.githubusercontent.com/mcarlucci/decky-storage-cleaner/main/assets/Screenshot-1.png"}};
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

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaBoxOpen (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"},"child":[]}]})(props);
}

/**
 * Tries to retrieve the app details from Steam.
 *
 * @param appId id to get details for.
 * @returns SteamAppDetails if succeeded or null otherwise.
 */
async function getAppDetails(appId) {
    return await new Promise((resolve) => {
        let timeoutId;
        try {
            const { unregister } = SteamClient.Apps.RegisterForAppDetails(appId, (details) => {
                clearTimeout(timeoutId);
                unregister();
                resolve(details);
            });
            timeoutId = setTimeout(() => {
                unregister();
                resolve(null);
            }, 1000);
        }
        catch (error) {
            clearTimeout(timeoutId);
            resolve(null);
        }
    });
}

const Content = () => {
    const [gamesWithShaderCache, setGamesWithShaderCache] = SP_REACT.useState([]);
    const [gamesWithCompatData, setGamesWithCompatData] = SP_REACT.useState([]);
    const [totalShaderCacheSize, setTotalShaderCacheSize] = SP_REACT.useState("");
    const [totalCompatDataSize, setTotalCompatDataSize] = SP_REACT.useState("");
    const [selectedGamesWithShaderCache, setSelectedGamesWithShaderCache] = SP_REACT.useState([]);
    const [selectedGamesWithCompatData, setSelectedGamesWithCompatData] = SP_REACT.useState([]);
    // Initialize data
    SP_REACT.useEffect(() => {
        const getGamesWithShaderCache = async () => await call("list_games_with_temp_data", "shadercache");
        getGamesWithShaderCache()
            .then(async (res) => setGamesWithShaderCache(await enrichGameList(JSON.parse(`${res}`))))
            .catch(e => console.log(e.message));
        const getGamesWithCompatData = async () => await call("list_games_with_temp_data", "compatdata");
        getGamesWithCompatData()
            .then(async (res) => setGamesWithCompatData(await enrichGameList(JSON.parse(`${res}`))))
            .catch(e => console.log(e.message));
        const getTotalShaderCacheSize = async () => await call("get_size", "shadercache", true);
        getTotalShaderCacheSize()
            .then(res => setTotalShaderCacheSize(res))
            .catch(e => console.log(e.message));
        const getTotalCompatDataSize = async () => await call("get_size", "compatdata", true);
        getTotalCompatDataSize()
            .then(res => setTotalCompatDataSize(res))
            .catch(e => console.log(e.message));
    }, []);
    // Methods
    function handleCheckboxSelection(checked, appid, cacheType) {
        if (cacheType.toLowerCase() === "shader") {
            let updatedList = [...selectedGamesWithShaderCache];
            if (checked) {
                updatedList = [...selectedGamesWithShaderCache, appid];
            }
            else {
                updatedList.splice(selectedGamesWithShaderCache.indexOf(appid), 1);
            }
            setSelectedGamesWithShaderCache(updatedList);
        }
        if (cacheType.toLowerCase() === "compat") {
            let updatedList = [...selectedGamesWithCompatData];
            if (checked) {
                updatedList = [...selectedGamesWithCompatData, appid];
            }
            else {
                updatedList.splice(selectedGamesWithCompatData.indexOf(appid), 1);
            }
            setSelectedGamesWithCompatData(updatedList);
        }
    }
    async function enrichGameList(gamesArr) {
        if (!gamesArr || gamesArr.length === 0)
            return [];
        const gameDetailsArr = await Promise.all(gamesArr.map(game => getAppDetails(parseInt(game.appid))));
        return gamesArr
            .map((game) => {
            const gameInfo = gameDetailsArr.find(gameDetails => gameDetails?.unAppID === parseInt(game.appid));
            game.name = gameInfo?.strDisplayName;
            game.is_steam_game = gameInfo?.iInstallFolder !== -1;
            game.is_not_steam_cloud_supported = gameInfo?.eCloudStatus === 1;
            return game;
        })
            .filter(({ name, size }) => name && size);
    }
    async function clearDataCache(cacheDirName, appidArr) {
        if (appidArr && appidArr.length > 0) {
            appidArr.forEach(async (appid) => await call("delete_cache", `${cacheDirName}/${appid}`));
        }
        else {
            await call("delete_cache", cacheDirName);
        }
    }
    // Templates
    const renderCheckbox = (game, cacheType) => {
        return (window.SP_REACT.createElement(SP_REACT.Fragment, null,
            window.SP_REACT.createElement(DFL.DialogCheckbox, { key: game.appid, label: `${game.name} (${game.size_readable})`, onChange: checked => handleCheckboxSelection(checked, game.appid.toString(), cacheType) }),
            cacheType === "compat" && game.is_not_steam_cloud_supported && window.SP_REACT.createElement("div", { style: { fontSize: "12px", color: "red", margin: "0 0 12px 35px" } }, "WARNING: This game DOES NOT support or has never synced to Steam Cloud Saves. ON-DEVICE GAME SAVE DATA MAY BE PERMANANTLEY LOST!")));
    };
    const renderGameLists = (gamesArr, cacheType) => (window.SP_REACT.createElement(SP_REACT.Fragment, null,
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: { fontSize: "15px", fontWeight: "bold", marginBottom: "10px", display: gamesArr.some(({ is_steam_game }) => is_steam_game) ? "block" : "none" } }, "STEAM")),
        gamesArr?.length > 0 && gamesArr.map(game => {
            if (!game.is_steam_game)
                return;
            return renderCheckbox(game, cacheType);
        }),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: { fontSize: "15px", fontWeight: "bold", marginBottom: "10px", display: gamesArr.some(({ is_steam_game }) => !is_steam_game) ? "block" : "none" } }, "NON-STEAM")),
        gamesArr?.length > 0 && gamesArr.map(game => {
            if (game.is_steam_game)
                return;
            return renderCheckbox(game, cacheType);
        })));
    // Render
    return (window.SP_REACT.createElement("div", { id: "decky-storage-cleaner" },
        window.SP_REACT.createElement(DFL.PanelSection, { title: "Shader Cache", spinner: gamesWithShaderCache?.length === 0 && totalShaderCacheSize !== "0B" },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement("div", { style: { fontSize: "12px", marginBottom: "10px" } }, "Shader cache is a precompiled collection of shader programs that helps reduce lag in graphics-intensive applications. It's ok to delete because it will be recreated the next time you run the application.")),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement("div", { style: { fontSize: "17px", marginBottom: "10px" } },
                    "Total Size: ",
                    totalShaderCacheSize?.length > 0 ? totalShaderCacheSize : "Calculating...")),
            renderGameLists(gamesWithShaderCache, "shader"),
            window.SP_REACT.createElement(SP_REACT.Fragment, null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { layout: "below", bottomSeparator: "none", disabled: totalShaderCacheSize === "0B", onClick: () => DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { onCancel: () => { }, onOK: async () => await clearDataCache("shadercache"), strTitle: "Clear Shader Cache", strOKButtonText: "Clear" },
                            "Are you sure you want to clear ",
                            window.SP_REACT.createElement("strong", null, "ALL"),
                            " shader cache?")) }, "Clear All Shader Cache")),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { layout: "below", bottomSeparator: "none", disabled: selectedGamesWithShaderCache.length === 0, onClick: () => DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { onCancel: () => { }, onOK: async () => await clearDataCache("shadercache", selectedGamesWithShaderCache), strTitle: "Clear Shader Cache", strOKButtonText: "Clear" },
                            "Are you sure you want to clear the shader cache for ",
                            window.SP_REACT.createElement("strong", null, Array.from(gamesWithShaderCache.filter(({ appid }) => selectedGamesWithShaderCache.includes(appid.toString())).map(({ name }) => ` ${name}`)).toString()),
                            "?")) }, "Clear Selected Shader Cache")))),
        window.SP_REACT.createElement(DFL.PanelSection, { title: "Compatibility Data", spinner: gamesWithCompatData?.length === 0 && totalCompatDataSize !== "0B" },
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement("div", { style: { fontSize: "12px", marginBottom: "10px" } }, "Compatibility data is information stored by your Steam Deck to ensure compatibility with hardware and other software. It's ok to delete because it will be recreated automatically as needed.")),
            window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                window.SP_REACT.createElement("div", { style: { fontSize: "17px", marginBottom: "10px" } },
                    "Total Size: ",
                    totalCompatDataSize?.length > 0 ? totalCompatDataSize : "Calculating...")),
            renderGameLists(gamesWithCompatData, "compat"),
            window.SP_REACT.createElement(SP_REACT.Fragment, null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { layout: "below", bottomSeparator: "none", disabled: totalCompatDataSize === "0B", onClick: () => DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { onCancel: () => { }, onOK: async () => await clearDataCache("compatdata"), strTitle: "Clear Compatibility Data", strOKButtonText: "Clear" },
                            gamesWithCompatData.filter(({ is_not_steam_cloud_supported }) => is_not_steam_cloud_supported).length > 0 && (window.SP_REACT.createElement("div", { style: { color: "red", marginBottom: "10px" } },
                                window.SP_REACT.createElement("strong", null,
                                    "DANGER: On-device game save data may be permanently lost for ",
                                    Array.from(gamesWithCompatData.filter(({ appid, is_not_steam_cloud_supported }) => appid.toString() && is_not_steam_cloud_supported).map(({ name }) => ` ${name}`)).toString(),
                                    "!"))),
                            window.SP_REACT.createElement("div", null,
                                "Are you sure you want to clear ",
                                window.SP_REACT.createElement("strong", null, "ALL"),
                                " compatibility data?"))) }, "Clear All Compat Data")),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement(DFL.ButtonItem, { layout: "below", bottomSeparator: "none", disabled: selectedGamesWithCompatData.length === 0, onClick: () => DFL.showModal(window.SP_REACT.createElement(DFL.ConfirmModal, { onCancel: () => { }, onOK: async () => await clearDataCache("compatdata", selectedGamesWithCompatData), strTitle: "Clear Compatibility Data", strOKButtonText: "Clear" },
                            gamesWithCompatData.filter(({ appid, is_not_steam_cloud_supported }) => selectedGamesWithCompatData.includes(appid.toString()) && is_not_steam_cloud_supported).length > 0 && (window.SP_REACT.createElement("div", { style: { color: "red", marginBottom: "10px" } },
                                window.SP_REACT.createElement("strong", null,
                                    "DANGER: On-device game save data may be permanently lost for ",
                                    Array.from(gamesWithCompatData.filter(({ appid, is_not_steam_cloud_supported }) => selectedGamesWithCompatData.includes(appid.toString()) && is_not_steam_cloud_supported).map(({ name }) => ` ${name}`)).toString(),
                                    "!"))),
                            window.SP_REACT.createElement("div", null,
                                "Are you sure you want to clear the compatibility data for ",
                                window.SP_REACT.createElement("strong", null, Array.from(gamesWithCompatData.filter(({ appid }) => selectedGamesWithCompatData.includes(appid.toString())).map(({ name }) => ` ${name}`)).toString()),
                                "?"))) }, "Clear Selected Compat Data"))))));
};
var index = DFL.definePlugin(() => {
    return {
        title: window.SP_REACT.createElement("div", { className: DFL.staticClasses.Title }, "Storage Cleaner"),
        content: window.SP_REACT.createElement(Content, null),
        icon: window.SP_REACT.createElement(FaBoxOpen, null),
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
