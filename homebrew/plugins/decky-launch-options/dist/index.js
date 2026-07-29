const manifest = {"name":"Launch Options"};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
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
const callable = api.callable;
const routerHook = api.routerHook;
const definePlugin = (fn) => {
    return (...args) => {
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
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
function FaChevronDown (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},"child":[]}]})(props);
}function FaChevronUp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},"child":[]}]})(props);
}function FaPen (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"},"child":[]}]})(props);
}function FaPlus (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},"child":[]}]})(props);
}function FaTerminal (props) {
  return GenIcon({"attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z"},"child":[]}]})(props);
}

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}

let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = { randomUUID };

function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return unsafeStringify(rnds);
}
function v4(options, buf, offset) {
    if (native.randomUUID && true && !options) {
        return native.randomUUID();
    }
    return _v4(options);
}

const batchCreateLaunchOptionsEventType = 'dlo-add-launch-options';
const routes = {
    launchOptions: () => '/launch-options',
    appLaunchOptions: (appid = ':appid') => `/launch-options/${appid}`,
};
const profileFactory = (profile = {}) => ({
    state: {},
    originalLaunchOptions: '',
    ...profile,
});
const launchOptionFactory = (launchOption = {}) => ({
    // Note: do not spread as launchOptions can be provided by third-party plugins
    id: launchOption.id || v4(),
    name: launchOption.name || '',
    on: launchOption.on || '',
    off: launchOption.off || '',
    enableGlobally: launchOption.enableGlobally || false,
    group: launchOption.group || '',
    valueId: launchOption.valueId || '',
    valueName: launchOption.valueName || '',
    fallbackValue: launchOption.fallbackValue || false,
    priority: launchOption.priority || 0,
});

function isUnsafeProperty(key) {
    return key === '__proto__';
}

function isDeepKey(key) {
    switch (typeof key) {
        case 'number':
        case 'symbol': {
            return false;
        }
        case 'string': {
            return key.includes('.') || key.includes('[') || key.includes(']');
        }
    }
}

function toKey(value) {
    if (typeof value === 'string' || typeof value === 'symbol') {
        return value;
    }
    if (Object.is(value?.valueOf?.(), -0)) {
        return '-0';
    }
    return String(value);
}

function toString(value) {
    if (value == null) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(toString).join(',');
    }
    const result = String(value);
    if (result === '0' && Object.is(Number(value), -0)) {
        return '-0';
    }
    return result;
}

function toPath(deepKey) {
    if (Array.isArray(deepKey)) {
        return deepKey.map(toKey);
    }
    if (typeof deepKey === 'symbol') {
        return [deepKey];
    }
    deepKey = toString(deepKey);
    const result = [];
    const length = deepKey.length;
    if (length === 0) {
        return result;
    }
    let index = 0;
    let key = '';
    let quoteChar = '';
    let bracket = false;
    if (deepKey.charCodeAt(0) === 46) {
        result.push('');
        index++;
    }
    while (index < length) {
        const char = deepKey[index];
        if (quoteChar) {
            if (char === '\\' && index + 1 < length) {
                index++;
                key += deepKey[index];
            }
            else if (char === quoteChar) {
                quoteChar = '';
            }
            else {
                key += char;
            }
        }
        else if (bracket) {
            if (char === '"' || char === "'") {
                quoteChar = char;
            }
            else if (char === ']') {
                bracket = false;
                result.push(key);
                key = '';
            }
            else {
                key += char;
            }
        }
        else {
            if (char === '[') {
                bracket = true;
                if (key) {
                    result.push(key);
                    key = '';
                }
            }
            else if (char === '.') {
                if (key) {
                    result.push(key);
                    key = '';
                }
            }
            else {
                key += char;
            }
        }
        index++;
    }
    if (key) {
        result.push(key);
    }
    return result;
}

function get$1(object, path, defaultValue) {
    if (object == null) {
        return defaultValue;
    }
    switch (typeof path) {
        case 'string': {
            if (isUnsafeProperty(path)) {
                return defaultValue;
            }
            const result = object[path];
            if (result === undefined) {
                if (isDeepKey(path)) {
                    return get$1(object, toPath(path), defaultValue);
                }
                else {
                    return defaultValue;
                }
            }
            return result;
        }
        case 'number':
        case 'symbol': {
            if (typeof path === 'number') {
                path = toKey(path);
            }
            const result = object[path];
            if (result === undefined) {
                return defaultValue;
            }
            return result;
        }
        default: {
            if (Array.isArray(path)) {
                return getWithPath(object, path, defaultValue);
            }
            if (Object.is(path?.valueOf(), -0)) {
                path = '-0';
            }
            else {
                path = String(path);
            }
            if (isUnsafeProperty(path)) {
                return defaultValue;
            }
            const result = object[path];
            if (result === undefined) {
                return defaultValue;
            }
            return result;
        }
    }
}
function getWithPath(object, path, defaultValue) {
    if (path.length === 0) {
        return defaultValue;
    }
    let current = object;
    for (let index = 0; index < path.length; index++) {
        if (current == null) {
            return defaultValue;
        }
        if (isUnsafeProperty(path[index])) {
            return defaultValue;
        }
        current = current[path[index]];
    }
    if (current === undefined) {
        return defaultValue;
    }
    return current;
}

function isObject(value) {
    return value !== null && (typeof value === 'object' || typeof value === 'function');
}

function isEqualsSameValueZero(value, other) {
    return value === other || (Number.isNaN(value) && Number.isNaN(other));
}

const IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
    switch (typeof value) {
        case 'number': {
            return Number.isInteger(value) && value >= 0 && value < length;
        }
        case 'symbol': {
            return false;
        }
        case 'string': {
            return IS_UNSIGNED_INTEGER.test(value);
        }
    }
}

function isSymbol(value) {
    return typeof value === 'symbol' || value instanceof Symbol;
}

const regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
    if (Array.isArray(value)) {
        return false;
    }
    if (typeof value === 'number' || typeof value === 'boolean' || value == null || isSymbol(value)) {
        return true;
    }
    return ((typeof value === 'string' && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value))) ||
        (object != null && Object.hasOwn(object, value)));
}

const assignValue = (object, key, value) => {
    const objValue = object[key];
    if (!(Object.hasOwn(object, key) && isEqualsSameValueZero(objValue, value)) || (value === undefined && !(key in object))) {
        object[key] = value;
    }
};

function updateWith(obj, path, updater, customizer) {
    if (obj == null && !isObject(obj)) {
        return obj;
    }
    let resolvedPath;
    if (isKey(path, obj)) {
        resolvedPath = [path];
    }
    else if (Array.isArray(path)) {
        resolvedPath = path;
    }
    else {
        resolvedPath = toPath(path);
    }
    const updateValue = updater(get$1(obj, resolvedPath));
    let current = obj;
    for (let i = 0; i < resolvedPath.length && current != null; i++) {
        const key = toKey(resolvedPath[i]);
        if (isUnsafeProperty(key)) {
            continue;
        }
        let newValue;
        if (i === resolvedPath.length - 1) {
            newValue = updateValue;
        }
        else {
            const objValue = current[key];
            const customizerResult = customizer?.(objValue, key, obj);
            newValue =
                customizerResult !== undefined
                    ? customizerResult
                    : isObject(objValue)
                        ? objValue
                        : isIndex(resolvedPath[i + 1])
                            ? []
                            : {};
        }
        assignValue(current, key, newValue);
        current = current[key];
    }
    return obj;
}

function set$1(obj, path, value) {
    return updateWith(obj, path, () => value, () => undefined);
}

// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var O = Object;
var getPrototypeOf = O.getPrototypeOf;
var CONSTRUCTOR = "constructor";
var PROTOTYPE = "prototype";
var CONFIGURABLE = "configurable";
var ENUMERABLE = "enumerable";
var WRITABLE = "writable";
var VALUE = "value";
var isDraft = (value) => !!value && !!value[DRAFT_STATE];
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject$1(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject$1(value) {
  if (!value || !isObjectish(value))
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null || proto === O[PROTOTYPE])
    return true;
  const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
  if (Ctor === Object)
    return true;
  if (!isFunction(Ctor))
    return false;
  let ctorString = cachedCtorStrings.get(Ctor);
  if (ctorString === void 0) {
    ctorString = Function.toString.call(Ctor);
    cachedCtorStrings.set(Ctor, ctorString);
  }
  return ctorString === objectCtorString;
}
function each(obj, iter, strict = true) {
  if (getArchtype(obj) === 0 /* Object */) {
    const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
    keys.forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
var has = (thing, prop, type = getArchtype(thing)) => type === 2 /* Map */ ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
var get = (thing, prop, type = getArchtype(thing)) => (
  // @ts-ignore
  type === 2 /* Map */ ? thing.get(prop) : thing[prop]
);
var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
  if (type === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (type === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
};
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
var isArray = Array.isArray;
var isMap = (target) => target instanceof Map;
var isSet = (target) => target instanceof Set;
var isObjectish = (target) => typeof target === "object";
var isFunction = (target) => typeof target === "function";
var isBoolean = (target) => typeof target === "boolean";
function isArrayIndex(value) {
  const n = +value;
  return Number.isInteger(n) && String(n) === value;
}
var latest = (state) => state.copy_ || state.base_;
var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (isArray(base))
    return Array[PROTOTYPE].slice.call(base);
  const isPlain = isPlainObject$1(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = O.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc[WRITABLE] === false) {
        desc[WRITABLE] = true;
        desc[CONFIGURABLE] = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          [CONFIGURABLE]: true,
          [WRITABLE]: true,
          // could live with !!desc.set as well here...
          [ENUMERABLE]: desc[ENUMERABLE],
          [VALUE]: base[key]
        };
    }
    return O.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = O.create(proto);
    return O.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    O.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
  }
  O.freeze(obj);
  if (deep)
    each(
      obj,
      (_key, value) => {
        freeze(value, true);
      },
      false
    );
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
var dontMutateMethodOverride = {
  [VALUE]: dontMutateFrozenCollections
};
function isFrozen(obj) {
  if (obj === null || !isObjectish(obj))
    return true;
  return O.isFrozen(obj);
}

// src/utils/plugins.ts
var PluginMapSet = "MapSet";
var PluginPatches = "Patches";
var PluginArrayMethods = "ArrayMethods";
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];

// src/core/scope.ts
var currentScope;
var getCurrentScope = () => currentScope;
var createScope = (parent_, immer_) => ({
  drafts_: [],
  parent_,
  immer_,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: true,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
  arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
});
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    scope.patchPlugin_ = getPlugin(PluginPatches);
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
    }
    const { patchPlugin_ } = scope;
    if (patchPlugin_) {
      patchPlugin_.generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope
      );
    }
  } else {
    result = finalize(scope, baseDraft);
  }
  maybeFreeze(scope, result, true);
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
    return finalValue;
  }
  if (!isSameScope(state, rootScope)) {
    return value;
  }
  if (!state.modified_) {
    return state.base_;
  }
  if (!state.finalized_) {
    const { callbacks_ } = state;
    if (callbacks_) {
      while (callbacks_.length > 0) {
        const callback = callbacks_.pop();
        callback(rootScope);
      }
    }
    generatePatchesAndFinalize(state, rootScope);
  }
  return state.copy_;
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function markStateFinalized(state) {
  state.finalized_ = true;
  state.scope_.unfinalizedDrafts_--;
}
var isSameScope = (state, rootScope) => state.scope_ === rootScope;
var EMPTY_LOCATIONS_RESULT = [];
function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
  const parentCopy = latest(parent);
  const parentType = parent.type_;
  if (originalKey !== void 0) {
    const currentValue = get(parentCopy, originalKey, parentType);
    if (currentValue === draftValue) {
      set(parentCopy, originalKey, finalizedValue, parentType);
      return;
    }
  }
  if (!parent.draftLocations_) {
    const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
    each(parentCopy, (key, value) => {
      if (isDraft(value)) {
        const keys = draftLocations.get(value) || [];
        keys.push(key);
        draftLocations.set(value, keys);
      }
    });
  }
  const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
  for (const location of locations) {
    set(parentCopy, location, finalizedValue, parentType);
  }
}
function registerChildFinalizationCallback(parent, child, key) {
  parent.callbacks_.push(function childCleanup(rootScope) {
    const state = child;
    if (!state || !isSameScope(state, rootScope)) {
      return;
    }
    rootScope.mapSetPlugin_?.fixSetContents(state);
    const finalizedValue = getFinalValue(state);
    updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
    generatePatchesAndFinalize(state, rootScope);
  });
}
function generatePatchesAndFinalize(state, rootScope) {
  const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 /* Set */ || state.type_ === 1 /* Array */ && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0);
  if (shouldFinalize) {
    const { patchPlugin_ } = rootScope;
    if (patchPlugin_) {
      const basePath = patchPlugin_.getPath(state);
      if (basePath) {
        patchPlugin_.generatePatches_(state, basePath, rootScope);
      }
    }
    markStateFinalized(state);
  }
}
function handleCrossReference(target, key, value) {
  const { scope_ } = target;
  if (isDraft(value)) {
    const state = value[DRAFT_STATE];
    if (isSameScope(state, scope_)) {
      state.callbacks_.push(function crossReferenceCleanup() {
        prepareCopy(target);
        const finalizedValue = getFinalValue(state);
        updateDraftInParent(target, value, finalizedValue, key);
      });
    }
  } else if (isDraftable(value)) {
    target.callbacks_.push(function nestedDraftCleanup() {
      const targetCopy = latest(target);
      if (target.type_ === 3 /* Set */) {
        if (targetCopy.has(value)) {
          handleValue(value, scope_.handledSet_, scope_);
        }
      } else {
        if (get(targetCopy, key, target.type_) === value) {
          if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
            handleValue(
              get(target.copy_, key, target.type_),
              scope_.handledSet_,
              scope_
            );
          }
        }
      }
    });
  }
}
function handleValue(target, handledSet, rootScope) {
  if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
    return target;
  }
  if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) {
    return target;
  }
  handledSet.add(target);
  each(target, (key, value) => {
    if (isDraft(value)) {
      const state = value[DRAFT_STATE];
      if (isSameScope(state, rootScope)) {
        const updatedValue = getFinalValue(state);
        set(target, key, updatedValue, target.type_);
        markStateFinalized(state);
      }
    } else if (isDraftable(value)) {
      handleValue(value, handledSet, rootScope);
    }
  });
  return target;
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const baseIsArray = isArray(base);
  const state = {
    type_: baseIsArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let target = state;
  let traps = objectTraps;
  if (baseIsArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return [proxy, state];
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    let arrayPlugin = state.scope_.arrayMethodsPlugin_;
    const isArrayWithStringProp = state.type_ === 1 /* Array */ && typeof prop === "string";
    if (isArrayWithStringProp) {
      if (arrayPlugin?.isArrayOperationMethod(prop)) {
        return arrayPlugin.createMethodInterceptor(state, prop);
      }
    }
    const source = latest(state);
    if (!has(source, prop, state.type_)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(
      state.operationMethod
    ) && isArrayIndex(prop)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      const childKey = state.type_ === 1 /* Array */ ? +prop : prop;
      const childDraft = createProxy(state.scope_, value, state, childKey);
      return state.copy_[childKey] = childDraft;
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_.set(prop, false);
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_.set(prop, true);
    handleCrossReference(state, prop, value);
    return true;
  },
  deleteProperty(state, prop) {
    prepareCopy(state);
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_.set(prop, false);
      markChanged(state);
    } else {
      state.assigned_.delete(prop);
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      [WRITABLE]: true,
      [CONFIGURABLE]: state.type_ !== 1 /* Array */ || prop !== "length",
      [ENUMERABLE]: desc[ENUMERABLE],
      [VALUE]: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
for (let key in objectTraps) {
  let fn = objectTraps[key];
  arrayTraps[key] = function() {
    const args = arguments;
    args[0] = args[0][0];
    return fn.apply(this, args);
  };
}
arrayTraps.deleteProperty = function(state, prop) {
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? VALUE in desc ? desc[VALUE] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.assigned_ = /* @__PURE__ */ new Map();
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.useStrictIteration_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (isFunction(base) && !isFunction(recipe)) {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (!isFunction(recipe))
        die(6);
      if (patchListener !== void 0 && !isFunction(patchListener))
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(scope, base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || !isObjectish(base)) {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
            patches_: p,
            inversePatches_: ip
          });
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (isFunction(base)) {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (isBoolean(config?.autoFreeze))
      this.setAutoFreeze(config.autoFreeze);
    if (isBoolean(config?.useStrictShallowCopy))
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    if (isBoolean(config?.useStrictIteration))
      this.setUseStrictIteration(config.useStrictIteration);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(scope, base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(value) {
    this.useStrictIteration_ = value;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(rootScope, value, parent, key) {
  const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent?.scope_ ?? getCurrentScope();
  scope.drafts_.push(draft);
  state.callbacks_ = parent?.callbacks_ ?? [];
  state.key_ = key;
  if (parent && key !== void 0) {
    registerChildFinalizationCallback(parent, state, key);
  } else {
    state.callbacks_.push(function rootDraftCleanup(rootScope2) {
      rootScope2.mapSetPlugin_?.fixSetContents(state);
      const { patchPlugin_ } = rootScope2;
      if (state.modified_ && patchPlugin_) {
        patchPlugin_.generatePatches_(state, [], rootScope2);
      }
    });
  }
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  let strict = true;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    strict = state.scope_.immer_.shouldUseStrictIteration();
  } else {
    copy = shallowCopy(value, true);
  }
  each(
    copy,
    (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    },
    strict
  );
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;

// src/subscribable.ts
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

// src/timeoutManager.ts
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support ReturnType<typeof setTimeout>, which is infeasible.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #provider = defaultTimeoutProvider;
  #providerCalled = false;
  setTimeoutProvider(provider) {
    this.#provider = provider;
  }
  setTimeout(callback, delay) {
    return this.#provider.setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    this.#provider.clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    return this.#provider.setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    this.#provider.clearInterval(intervalId);
  }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}

// src/utils.ts
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
  if (a === b) {
    return a;
  }
  if (depth > 500) return b;
  const array = isPlainArray(a) && isPlainArray(b);
  if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
  const aItems = array ? a : Object.keys(a);
  const aSize = aItems.length;
  const bItems = array ? b : Object.keys(b);
  const bSize = bItems.length;
  const copy = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i = 0; i < bSize; i++) {
    const key = array ? i : bItems[i];
    const aItem = a[key];
    const bItem = b[key];
    if (aItem === bItem) {
      copy[key] = aItem;
      if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy[key] = bItem;
      continue;
    }
    const v = replaceEqualDeep(aItem, bItem, depth + 1);
    copy[key] = v;
    if (v === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (!options.queryFn && fetchOptions?.initialPromise) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
  let consumed = false;
  let signal;
  Object.defineProperty(object, "signal", {
    enumerable: true,
    get: () => {
      signal ??= getSignal();
      if (consumed) {
        return signal;
      }
      consumed = true;
      if (signal.aborted) {
        onCancelled();
      } else {
        signal.addEventListener("abort", onCancelled, { once: true });
      }
      return signal;
    }
  });
  return object;
}

// src/focusManager.ts
var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();

// src/thenable.ts
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}

// src/notifyManager.ts
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();

// src/onlineManager.ts
var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();

// src/retryer.ts
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      config.onCancel?.(error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved()) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (isServer ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail?.(failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn?.();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}

// src/removable.ts
var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      this.#gcTimeout = timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      timeoutManager.clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};

// src/query.ts
var Query = class extends Removable {
  #initialState;
  #revertState;
  #cache;
  #client;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#client = config.client;
    this.#cache = this.#client.getQueryCache();
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState$1(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#retryer?.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState$1(this.options);
      if (defaultState.data !== void 0) {
        this.setState(
          successState(defaultState.data, defaultState.dataUpdatedAt)
        );
        this.#initialState = defaultState;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#retryer?.promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#retryer?.status() !== "rejected") {
      if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: this.#client,
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#client,
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    this.options.behavior?.onFetch(context, this);
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
      this.#dispatch({ type: "fetch", meta: context.fetchOptions?.meta });
    }
    this.#retryer = createRetryer({
      initialPromise: fetchOptions?.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...this.#revertState,
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    });
    try {
      const data = await this.#retryer.start();
      if (data === void 0) {
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      this.#cache.config.onSuccess?.(data, this);
      this.#cache.config.onSettled?.(
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return this.#retryer.promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      this.#dispatch({
        type: "error",
        error
      });
      this.#cache.config.onError?.(
        error,
        this
      );
      this.#cache.config.onSettled?.(
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          const newState = {
            ...state,
            ...successState(action.data, action.dataUpdatedAt),
            dataUpdateCount: state.dataUpdateCount + 1,
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          this.#revertState = action.manual ? newState : void 0;
          return newState;
        case "error":
          const error = action.error;
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error",
            // flag existing data as invalidated if we get a background error
            // note that "no data" always means stale so we can set unconditionally here
            isInvalidated: true
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function successState(data, dataUpdatedAt) {
  return {
    data,
    dataUpdatedAt: dataUpdatedAt ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
function getDefaultState$1(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}

// src/queryObserver.ts
var QueryObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.#currentThenable = pendingThenable();
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked?.(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
            this.#currentThenable.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = resolveStaleTime(
      this.options.staleTime,
      this.#currentQuery
    );
    if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
      return;
    }
    const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = timeoutManager.setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = timeoutManager.setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      timeoutManager.clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      timeoutManager.clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(data);
          data = replaceData(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable,
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = pendingThenable();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

// src/infiniteQueryBehavior.ts
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          addConsumeAwareSignal(
            object,
            () => context.signal,
            () => cancelled = true
          );
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}

// src/mutation.ts
var Mutation = class extends Removable {
  #client;
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.#client = config.client;
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    const mutationFnContext = {
      client: this.#client,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this,
          mutationFnContext
        );
        const context = await this.options.onMutate?.(
          variables,
          mutationFnContext
        );
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSuccess?.(
        data,
        variables,
        this.state.context,
        mutationFnContext
      );
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSettled?.(
        data,
        null,
        variables,
        this.state.context,
        mutationFnContext
      );
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        );
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await this.options.onError?.(
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        );
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
      } catch (e) {
        void Promise.reject(e);
      }
      this.#dispatch({ type: "error", error });
      throw error;
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}

// src/mutationCache.ts
var MutationCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client, options, state) {
    const mutation = new Mutation({
      client,
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}

// src/mutationObserver.ts
var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const onMutateResult = this.#currentResult.context;
        const context = {
          client: this.#client,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if (action?.type === "success") {
          try {
            this.#mutateOptions.onSuccess?.(
              action.data,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
          try {
            this.#mutateOptions.onSettled?.(
              action.data,
              null,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
        } else if (action?.type === "error") {
          try {
            this.#mutateOptions.onError?.(
              action.error,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
          try {
            this.#mutateOptions.onSettled?.(
              void 0,
              action.error,
              variables,
              onMutateResult,
              context
            );
          } catch (e) {
            void Promise.reject(e);
          }
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};

// src/queryCache.ts
var QueryCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};

// src/queryClient.ts
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(
      defaultedOptions.queryHash
    );
    const prevData = query?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => this.#queryCache.findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(
      options.queryHash
    )?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: filters?.refetchType ?? filters?.type ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop).catch(noop);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop).catch(noop);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};

// src/QueryClientProvider.tsx


var QueryClientContext = SP_REACT.createContext(
  void 0
);
var useQueryClient = (queryClient) => {
  const client = SP_REACT.useContext(QueryClientContext);
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};
var QueryClientProvider = ({
  client,
  children
}) => {
  SP_REACT.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ SP_JSX.jsx(QueryClientContext.Provider, { value: client, children });
};

// src/IsRestoringProvider.ts

var IsRestoringContext = SP_REACT.createContext(false);
var useIsRestoring = () => SP_REACT.useContext(IsRestoringContext);

// src/QueryErrorResetBoundary.tsx


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = SP_REACT.createContext(createValue());
var useQueryErrorResetBoundary = () => SP_REACT.useContext(QueryErrorResetBoundaryContext);

var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  SP_REACT.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};

// src/suspense.ts
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

function useBaseQuery(options, Observer, queryClient) {
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  client.getDefaultOptions().queries?._experimental_beforeQuery?.(
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = SP_REACT.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  SP_REACT.useSyncExternalStore(
    SP_REACT.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  SP_REACT.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  client.getDefaultOptions().queries?._experimental_afterQuery?.(
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query?.promise
    );
    promise?.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}

// src/queryOptions.ts
function queryOptions(options) {
  return options;
}

function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = SP_REACT.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  SP_REACT.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = SP_REACT.useSyncExternalStore(
    SP_REACT.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = SP_REACT.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}

const queryClient = new QueryClient();
const keys = {
    settings: () => ['settings'],
    info: () => ['info'],
};
const get_info = callable("get_info");
const get_settings = callable("get_settings");
const set_settings = callable("set_settings");
const has_shell_script = callable("has_shell_script");
const get_debug_log = callable("get_debug_log");
const useGetInfoQuery = () => useQuery({
    queryKey: keys.info(),
    queryFn() {
        return get_info();
    },
});
const getSettingsQueryOptions = queryOptions({
    queryKey: keys.settings(),
    queryFn() {
        return get_settings();
    },
});
const useGetSettingsQuery = () => useQuery(getSettingsQueryOptions);
const useSetSettingsMutation = () => useMutation({
    mutationFn(data) {
        return set_settings(data);
    },
    onSuccess() {
        queryClient.refetchQueries({
            queryKey: keys.settings(),
        });
    },
});
const useApplyLaunchOptionsMutation = () => {
    const { setAppOriginalLaunchOptions, getAppOriginalLaunchOptions } = useSettings();
    return useMutation({
        mutationFn(data) {
            return Promise.all([
                new Promise((resolve) => {
                    const { unregister } = SteamClient.Apps.RegisterForAppDetails(data.appid, (details) => {
                        const currentLaunchOptions = details.strLaunchOptions;
                        const isNonSteamApp = 'strShortcutExe' in details;
                        if (isNonSteamApp || currentLaunchOptions.includes(data.command)) {
                            resolve({
                                currentLaunchOptions: currentLaunchOptions,
                                originalLaunchOptions: null,
                            });
                        }
                        else {
                            resolve({
                                currentLaunchOptions: data.command,
                                originalLaunchOptions: currentLaunchOptions,
                            });
                        }
                        unregister();
                    });
                }),
                has_shell_script(),
            ])
                .then(([partialContext, hasShellScript]) => {
                if (partialContext.originalLaunchOptions !== null)
                    setAppOriginalLaunchOptions(String(data.appid), partialContext.originalLaunchOptions);
                return {
                    ...partialContext,
                    hasShellScript,
                };
            });
        },
        onSuccess({ hasShellScript, currentLaunchOptions }, data) {
            if (hasShellScript) {
                SteamClient.Apps.SetAppLaunchOptions(data.appid, currentLaunchOptions);
            }
            else {
                SteamClient.Apps.SetAppLaunchOptions(data.appid, getAppOriginalLaunchOptions(String(data.appid)));
            }
        },
    });
};

function useSettings() {
    const [settings, _setSettings] = SP_REACT.useState({
        profiles: {},
        launchOptions: [],
    });
    const getSettingsQuery = useGetSettingsQuery();
    const setSettingsMutation = useSetSettingsMutation();
    const initializedRef = SP_REACT.useRef(false);
    const normalizeSettings = (nextSettings) => ({
        profiles: nextSettings?.profiles || {},
        launchOptions: (nextSettings?.launchOptions || []).map((item) => ({
            ...item,
            valueId: item.valueId || '',
            valueName: item.valueName || '',
            fallbackValue: !!item.fallbackValue,
        })),
    });
    const setSettings = (draftSettings) => {
        if (!initializedRef.current)
            return;
        _setSettings((prev) => {
            const newSettings = produce(prev, draftSettings);
            setSettingsMutation.mutate(newSettings);
            return newSettings;
        });
    };
    SP_REACT.useEffect(() => {
        if (!getSettingsQuery.isFetched)
            return;
        if (!initializedRef.current) {
            _setSettings(normalizeSettings(getSettingsQuery.data));
            initializedRef.current = true;
            return;
        }
        if (!getSettingsQuery.data)
            return;
        _setSettings(normalizeSettings(getSettingsQuery.data));
    }, [getSettingsQuery.data, getSettingsQuery.isFetched]);
    /**
     * Clear per-app profile state for the given launch option IDs across all profiles.
     * This ensures that when a launch option (or valueId group) is promoted to global,
     * no stale per-app state overrides the global default.
     */
    const clearProfileState = (draft, ids) => {
        for (const profile of Object.values(draft.profiles)) {
            for (const id of ids) {
                delete profile.state[id];
            }
        }
    };
    const normalizeFallbackValues = (draft) => {
        const groups = new Map();
        draft.launchOptions.forEach((item) => {
            if (!item.valueId) {
                item.fallbackValue = false;
                return;
            }
            const siblings = groups.get(item.valueId) || [];
            siblings.push(item);
            groups.set(item.valueId, siblings);
        });
        groups.forEach((siblings) => {
            let hasFallbackValue = false;
            siblings.forEach((item) => {
                if (!item.fallbackValue)
                    return;
                if (hasFallbackValue) {
                    item.fallbackValue = false;
                    return;
                }
                hasFallbackValue = true;
            });
        });
    };
    const getSelectedValueIdLaunchOptionId = (appid, valueId) => {
        const siblings = settings.launchOptions.filter((item) => item.valueId === valueId);
        if (siblings.length === 0)
            return null;
        const appProfile = settings.profiles[appid];
        // Explicit user choice wins.
        const explicitlyEnabled = siblings.find((item) => appProfile?.state?.[item.id] === true);
        if (explicitlyEnabled)
            return explicitlyEnabled.id;
        // Any explicit state on this group without a true means user selected Disabled.
        const hasExplicitState = siblings.some((item) => appProfile?.state && item.id in appProfile.state);
        if (hasExplicitState)
            return null;
        // Global fallback for valueId groups: the globally-enabled option, if any.
        const globallyEnabled = siblings.find((item) => item.enableGlobally);
        if (globallyEnabled)
            return globallyEnabled.id;
        // Last resort: the fallbackValue option, or the first sibling.
        const fallback = siblings.find((item) => item.fallbackValue);
        return fallback?.id || siblings[0].id;
    };
    const getLaunchOptionState = (appid, launchOptionId) => {
        const launchOption = settings.launchOptions.find((item) => item.id === launchOptionId);
        if (!launchOption)
            return false;
        if (launchOption.valueId) {
            return getSelectedValueIdLaunchOptionId(appid, launchOption.valueId) === launchOptionId;
        }
        const appProfile = settings.profiles[appid];
        if (appProfile && launchOptionId in appProfile.state) {
            return appProfile.state[launchOptionId];
        }
        return !!launchOption.enableGlobally;
    };
    return {
        settings,
        loading: getSettingsQuery.isLoading,
        createLaunchOption: (launchOption) => {
            setSettings((draft) => {
                const nextLaunchOption = launchOptionFactory(launchOption);
                draft.launchOptions.unshift(nextLaunchOption);
                normalizeFallbackValues(draft);
            });
        },
        batchCreateLaunchOptions: (launchOptions) => {
            setSettings((draft) => {
                launchOptions.forEach((launchOption) => {
                    const nextLaunchOption = launchOptionFactory(launchOption);
                    const existingLaunchOptionIndex = draft.launchOptions.findIndex((item) => item.id === nextLaunchOption.id);
                    if (existingLaunchOptionIndex !== -1) {
                        draft.launchOptions[existingLaunchOptionIndex] = nextLaunchOption;
                    }
                    else {
                        draft.launchOptions.unshift(nextLaunchOption);
                    }
                });
                normalizeFallbackValues(draft);
            });
        },
        updateLaunchOption: (launchOption, path, value, syncCommonFields = true) => {
            const commonFields = ['name', 'group', 'valueId', 'priority'];
            setSettings((draft) => {
                const index = draft.launchOptions.findIndex((item) => item.id === launchOption.id);
                if (index === -1)
                    return;
                set$1(draft, ['launchOptions', index, path], value);
                // Propagate common field changes to all siblings sharing the same valueId
                if (syncCommonFields && launchOption.valueId && commonFields.includes(path)) {
                    for (let i = 0; i < draft.launchOptions.length; i++) {
                        if (i !== index && draft.launchOptions[i].valueId === launchOption.valueId) {
                            set$1(draft, ['launchOptions', i, path], value);
                        }
                    }
                }
                if (path === 'fallbackValue') {
                    const updatedLaunchOption = draft.launchOptions[index];
                    if (!updatedLaunchOption.valueId || !value) {
                        updatedLaunchOption.fallbackValue = false;
                    }
                    else {
                        draft.launchOptions.forEach((item) => {
                            if (item.valueId === updatedLaunchOption.valueId) {
                                item.fallbackValue = item.id === updatedLaunchOption.id;
                            }
                        });
                    }
                }
                // For valueId groups, global state is represented by exactly one sibling
                // having enableGlobally=true, or none (None).
                if (path === 'enableGlobally' && launchOption.valueId) {
                    const siblings = draft.launchOptions.filter((item) => item.valueId === launchOption.valueId);
                    const siblingIds = siblings.map((item) => item.id);
                    if (value) {
                        // Prefer the fallbackValue option as the global default.
                        // Fall back to the edited option only if no fallbackValue exists.
                        const fallbackOption = siblings.find((item) => item.fallbackValue);
                        const selectedId = fallbackOption?.id ?? launchOption.id;
                        siblings.forEach((item) => {
                            item.enableGlobally = item.id === selectedId;
                        });
                    }
                    else {
                        siblings.forEach((item) => {
                            item.enableGlobally = false;
                        });
                    }
                    clearProfileState(draft, siblingIds);
                }
                // For non-valueId options, clear per-app state whenever enableGlobally changes
                if (path === 'enableGlobally' && !launchOption.valueId) {
                    clearProfileState(draft, [launchOption.id]);
                }
                normalizeFallbackValues(draft);
            });
        },
        deleteLaunchOption: (id) => {
            setSettings((draft) => {
                const index = draft.launchOptions.findIndex((item) => item.id === id);
                if (index !== -1)
                    draft.launchOptions.splice(index, 1);
                normalizeFallbackValues(draft);
            });
        },
        deleteLaunchOptionsByValueId: (valueId) => {
            setSettings((draft) => {
                const idsToDelete = new Set(draft.launchOptions
                    .filter((item) => item.valueId === valueId)
                    .map((item) => item.id));
                if (idsToDelete.size === 0)
                    return;
                draft.launchOptions = draft.launchOptions.filter((item) => !idsToDelete.has(item.id));
                Object.values(draft.profiles).forEach((profile) => {
                    Object.keys(profile.state).forEach((id) => {
                        if (idsToDelete.has(id)) {
                            delete profile.state[id];
                        }
                    });
                });
                normalizeFallbackValues(draft);
            });
        },
        setAppLaunchOptionState: (appid, launchOptionId, value) => {
            setSettings((draft) => {
                const launchOption = draft.launchOptions.find((item) => item.id === launchOptionId);
                if (!launchOption)
                    return;
                if (launchOption.valueId) {
                    const siblings = draft.launchOptions.filter((item) => item.valueId === launchOption.valueId);
                    if (siblings.length === 0)
                        return;
                    if (!draft.profiles[appid]) {
                        draft.profiles[appid] = profileFactory();
                    }
                    const appProfile = draft.profiles[appid];
                    for (const sibling of siblings) {
                        delete appProfile.state[sibling.id];
                    }
                    if (value) {
                        appProfile.state[launchOptionId] = true;
                    }
                    else {
                        // Marker: explicit group disabled
                        appProfile.state[siblings[0].id] = false;
                    }
                    return;
                }
                if (!draft.profiles[appid]) {
                    draft.profiles[appid] = profileFactory();
                }
                const appProfile = draft.profiles[appid];
                if (launchOption.enableGlobally && value) {
                    delete appProfile.state[launchOptionId];
                    return;
                }
                appProfile.state[launchOptionId] = value;
            });
        },
        getAppLaunchOptionState: (appid, launchOptionId) => {
            return getLaunchOptionState(appid, launchOptionId);
        },
        setAppValueIdState: (appid, valueId, selectedLaunchOptionId, setAsDefault = false) => {
            setSettings((draft) => {
                const siblings = draft.launchOptions.filter((item) => item.valueId === valueId);
                if (siblings.length === 0)
                    return;
                if (setAsDefault) {
                    siblings.forEach((item) => {
                        item.enableGlobally = item.id === selectedLaunchOptionId;
                    });
                    // Clear per-app state across all profiles so the global default takes effect
                    // (explicit app state has higher priority than enableGlobally)
                    clearProfileState(draft, siblings.map((item) => item.id));
                    return;
                }
                if (!draft.profiles[appid]) {
                    draft.profiles[appid] = profileFactory();
                }
                const appProfile = draft.profiles[appid];
                // Remove all siblings from state (fall back to enableGlobally/fallbackValue defaults)
                for (const sibling of siblings) {
                    delete appProfile.state[sibling.id];
                }
                appProfile.state[selectedLaunchOptionId] = true;
            });
        },
        getAppActiveLocalLaunchOptions: (appid) => {
            const appProfile = settings.profiles[appid];
            return settings.launchOptions.filter((item) => {
                if (item.enableGlobally)
                    return false;
                if (item.valueId) {
                    return getLaunchOptionState(appid, item.id) && !!item.on;
                }
                const state = appProfile?.state?.[item.id];
                const isActive = state !== undefined ? state : false;
                return isActive ? !!item.on : !!item.off;
            });
        },
        getAppActiveGlobalLaunchOptions: (appid) => {
            const appProfile = settings.profiles[appid];
            return settings.launchOptions.filter((item) => {
                if (!item.enableGlobally)
                    return false;
                if (item.valueId) {
                    return getLaunchOptionState(appid, item.id) && !!item.on;
                }
                const state = appProfile?.state?.[item.id];
                const isActive = state !== undefined ? state : true;
                return isActive ? !!item.on : !!item.off;
            });
        },
        getAppOriginalLaunchOptions: (appid) => settings.profiles[appid]?.originalLaunchOptions || '',
        setAppOriginalLaunchOptions: (appid, command) => {
            setSettings((draft) => {
                draft.profiles[appid] = profileFactory({
                    ...draft.profiles[appid],
                    originalLaunchOptions: command,
                });
            });
        },
    };
}

const PluginContext = SP_REACT.createContext({});
const usePlugin = () => {
    return SP_REACT.useContext(PluginContext);
};
function PluginProvider(props) {
    return (SP_JSX.jsx(PluginContext.Provider, { value: {
            settings: useSettings(),
        }, children: props.children }));
}

function i(f){var u=SP_REACT.useState(function(){return freeze("function"==typeof f?f():f,true)}),i=u[1];return [u[0],SP_REACT.useCallback(function(t){i("function"==typeof t?produce(t):freeze(t));},[])]}

// this isn't 100% robust, but it's better than the behavior without this


function ScrollIntoView(props) {
    const { children, ...rootProps } = props;
    const ref = SP_REACT.useRef(null);
    const scrollIntoView = SP_REACT.useCallback((event) => {
        const block = window.SteamUIStore.GetFocusedWindowInstance().VirtualKeyboardManager.KeyboardLocation.includes('top') ? 'start' : 'end';
        const element = (event?.target || ref.current);
        element?.scrollIntoView?.({ behavior: 'instant', block });
    }, []);
    return SP_JSX.jsx(DFL.Focusable, { ref: ref, ...rootProps, children: props.children({ ref, scrollIntoView }) });
}

function LaunchOptionFields({ data, onChange, commonOnly }) {
    const [showAdvanced, setShowAdvanced] = SP_REACT.useState(false);
    const [enableGloballyKey, setEnableGloballyKey] = SP_REACT.useState(0);
    const hasValueId = !!data.valueId;
    const hidePerValue = commonOnly && hasValueId;
    return (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx("div", { style: { marginBottom: 22 }, children: SP_JSX.jsx(DFL.ToggleField, { label: 'Enable globally', checked: data.enableGlobally, onChange: (value) => {
                        if (value) {
                            DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: "Enable globally", strDescription: "This will clear all per-app selections for this launch option. Do you want to continue?", strOKButtonText: "Confirm", strCancelButtonText: "Cancel", onOK: () => onChange('enableGlobally', true), onCancel: () => setEnableGloballyKey((k) => k + 1) }));
                        }
                        else {
                            onChange('enableGlobally', false);
                        }
                    } }, enableGloballyKey) }), SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'Name', ...({ placeholder: 'E.g.: Steam Deck Mode' }), style: { width: '100%' }, value: data.name, onChange: (e) => {
                        scrollIntoView(e);
                        onChange('name', e.target.value);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) }), !hidePerValue && (SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'On command', ...({ placeholder: 'E.g.: SteamDeck=1 ~/script/install %command% -novid' }), style: { width: '100%' }, value: data.on, onChange: (e) => {
                        scrollIntoView(e);
                        onChange('on', e.target.value);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) })), !hidePerValue && (SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'Off command', ...({ placeholder: 'E.g.: SteamDeck=0 ~/script/uninstall %command% -novid' }), style: { width: '100%' }, value: data.off, onChange: (e) => {
                        scrollIntoView(e);
                        onChange('off', e.target.value);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) })), SP_JSX.jsx("div", { style: {
                    marginBottom: 22,
                }, children: SP_JSX.jsx(DFL.DialogButton, { onClick: () => {
                        setShowAdvanced((value) => !value);
                    }, children: SP_JSX.jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }, children: [SP_JSX.jsx("span", { children: "Advanced" }), " ", showAdvanced ? SP_JSX.jsx(FaChevronUp, {}) : SP_JSX.jsx(FaChevronDown, {})] }) }) }), showAdvanced && (SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'Group', ...({ placeholder: 'E.g.: Favorites' }), description: SP_JSX.jsx("div", { style: { textAlign: 'left' }, children: "Groups this launch option under a named tab" }), style: { width: '100%' }, value: data.group, onChange: (e) => {
                        scrollIntoView(e);
                        onChange('group', e.target.value);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) })), showAdvanced && (SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'Value ID', ...({ placeholder: 'E.g.: proton-version' }), description: SP_JSX.jsx("div", { style: { textAlign: 'left' }, children: "Launch options sharing the same Value ID are displayed as a dropdown" }), style: { width: '100%' }, value: data.valueId, onChange: (e) => {
                        scrollIntoView(e);
                        onChange('valueId', e.target.value);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) })), showAdvanced && !hidePerValue && (SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'Value Name', ...({ placeholder: 'E.g.: Version 7' }), description: SP_JSX.jsx("div", { style: { textAlign: 'left' }, children: "Display name shown in the dropdown" }), style: { width: '100%' }, value: data.valueName, onChange: (e) => {
                        scrollIntoView(e);
                        onChange('valueName', e.target.value);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) })), showAdvanced && !hidePerValue && (SP_JSX.jsx("div", { style: { marginBottom: 22 }, children: SP_JSX.jsx(DFL.ToggleField, { label: 'Set as fallback value', checked: data.fallbackValue, disabled: !data.valueId, description: 'Selected by default in the dropdown when no other value is chosen', onChange: (value) => onChange('fallbackValue', value) }) })), showAdvanced && (SP_JSX.jsx(ScrollIntoView, { children: ({ scrollIntoView }) => (SP_JSX.jsx(DFL.TextField, { label: 'Priority', ...({ placeholder: '0' }), description: SP_JSX.jsx("div", { style: { textAlign: 'left' }, children: "Higher priority launch options run first" }), style: { width: '100%' }, value: data.priority ? String(data.priority) : '', onChange: (e) => {
                        scrollIntoView(e);
                        const num = Number(e.target.value);
                        onChange('priority', Number.isFinite(num) ? num : 0);
                    }, onKeyDown: scrollIntoView, onKeyUp: scrollIntoView, onInput: scrollIntoView, onSelect: scrollIntoView, onFocus: scrollIntoView })) }))] }));
}

function CreateLaunchOptionForm(props) {
    const { defaultValue, onSubmit } = props;
    const { createLaunchOption } = usePlugin().settings;
    const [data, setData] = i(launchOptionFactory(defaultValue));
    function submit() {
        const newLaunchOption = launchOptionFactory(data);
        createLaunchOption(newLaunchOption);
        onSubmit?.(newLaunchOption);
        setData(launchOptionFactory());
    }
    return (SP_JSX.jsxs("div", { children: [SP_JSX.jsx(LaunchOptionFields, { data: data, onChange: (field, value) => setData((draft) => {
                    draft[field] = value;
                }) }), SP_JSX.jsx("div", { style: { display: 'flex', gap: '10px' }, children: SP_JSX.jsx(DFL.DialogButton, { style: { flex: 1 }, onClick: submit, children: "Add launch option" }) })] }));
}

function UpdateLaunchOptionForm({ id, onDelete, commonOnly = true, syncCommonFields = true, deleteByValueId = false, }) {
    const { updateLaunchOption, deleteLaunchOption, deleteLaunchOptionsByValueId, settings } = usePlugin().settings;
    const data = SP_REACT.useMemo(() => settings.launchOptions.find((launchOption) => launchOption.id === id), [settings.launchOptions, id]);
    if (!data)
        return null;
    function remove() {
        if (!data)
            return null;
        return DFL.showModal(SP_JSX.jsx(DFL.ConfirmModal, { strTitle: deleteByValueId && data.valueId ? 'Remove launch options' : 'Remove launch option', strDescription: deleteByValueId && data.valueId
                ? `Do you want to remove all launch options with Value ID "${data.valueId}"?`
                : `Do you want to remove the "${data.name || 'Unnamed'}" launch option?`, strOKButtonText: "Confirm", strCancelButtonText: "Cancel", onOK: async () => {
                if (deleteByValueId && data.valueId) {
                    deleteLaunchOptionsByValueId(data.valueId);
                }
                else {
                    deleteLaunchOption(data.id);
                }
                onDelete?.();
            } }));
    }
    return (SP_JSX.jsxs("div", { children: [SP_JSX.jsx(LaunchOptionFields, { data: data, onChange: (field, value) => updateLaunchOption(data, field, value, syncCommonFields), commonOnly: commonOnly }), SP_JSX.jsx("div", { style: { display: 'flex', gap: '10px' }, children: SP_JSX.jsx(DFL.DialogButton, { style: { flex: 1 }, onClick: remove, children: SP_JSX.jsx("div", { style: {
                            color: 'oklch(63.7% 0.237 25.331)',
                            fontWeight: 'bold',
                        }, children: deleteByValueId && data.valueId ? 'Remove launch options' : 'Remove launch option' }) }) })] }));
}

function LaunchOptionsPage() {
    const { settings, loading } = useSettings();
    const [activePage, setActivePage] = SP_REACT.useState('new-launch-option');
    const navKey = SP_REACT.useMemo(() => settings.launchOptions.map(({ id }) => id).join('|'), [settings.launchOptions]);
    const pageIds = SP_REACT.useMemo(() => new Set([
        'new-launch-option',
        ...settings.launchOptions.map((item) => item.id),
    ]), [settings.launchOptions]);
    SP_REACT.useEffect(() => {
        if (!pageIds.has(activePage)) {
            setActivePage('new-launch-option');
        }
    }, [activePage, pageIds]);
    return (SP_JSX.jsx(PluginProvider, { children: SP_JSX.jsx("div", { style: {
                marginTop: "40px",
                height: "calc(100% - 40px)",
            }, children: loading ? (SP_JSX.jsx(DFL.SteamSpinner, { width: "100%", height: "100%" })) : (SP_JSX.jsx(DFL.SidebarNavigation, { title: 'Launch options', showTitle: true, disableRouteReporting: true, page: activePage, onPageRequested: setActivePage, pages: [
                    {
                        icon: SP_JSX.jsx(FaPlus, {}),
                        title: 'New launch option',
                        identifier: 'new-launch-option',
                        route: 'new-launch-option',
                        content: SP_JSX.jsx(CreateLaunchOptionForm, {}),
                    },
                    ...settings.launchOptions.map(({ id, name }) => ({
                        icon: SP_JSX.jsx(FaTerminal, {}),
                        title: name || 'Unnamed',
                        identifier: id,
                        route: id,
                        content: SP_JSX.jsx(UpdateLaunchOptionForm, { id: id, commonOnly: false, syncCommonFields: false }, id || ''),
                    })),
                ] }, navKey)) }) }));
}

var withSelector = {exports: {}};

var withSelector_production = {};

const _global_SP_REACT = SP_REACT;

var shim = {exports: {}};

var useSyncExternalStoreShim_production = {};

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production;

function requireUseSyncExternalStoreShim_production () {
	if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
	hasRequiredUseSyncExternalStoreShim_production = 1;
	var React = _global_SP_REACT;
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useState = React.useState,
	  useEffect = React.useEffect,
	  useLayoutEffect = React.useLayoutEffect,
	  useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
	  var value = getSnapshot(),
	    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
	    inst = _useState[0].inst,
	    forceUpdate = _useState[1];
	  useLayoutEffect(
	    function () {
	      inst.value = value;
	      inst.getSnapshot = getSnapshot;
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	    },
	    [subscribe, value, getSnapshot]
	  );
	  useEffect(
	    function () {
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      return subscribe(function () {
	        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      });
	    },
	    [subscribe]
	  );
	  useDebugValue(value);
	  return value;
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
	  return getSnapshot();
	}
	var shim =
	  "undefined" === typeof window ||
	  "undefined" === typeof window.document ||
	  "undefined" === typeof window.document.createElement
	    ? useSyncExternalStore$1
	    : useSyncExternalStore$2;
	useSyncExternalStoreShim_production.useSyncExternalStore =
	  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	return useSyncExternalStoreShim_production;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim.exports;
	hasRequiredShim = 1;

	{
	  shim.exports = requireUseSyncExternalStoreShim_production();
	}
	return shim.exports;
}

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production;

function requireWithSelector_production () {
	if (hasRequiredWithSelector_production) return withSelector_production;
	hasRequiredWithSelector_production = 1;
	var React = _global_SP_REACT,
	  shim = requireShim();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useSyncExternalStore = shim.useSyncExternalStore,
	  useRef = React.useRef,
	  useEffect = React.useEffect,
	  useMemo = React.useMemo,
	  useDebugValue = React.useDebugValue;
	withSelector_production.useSyncExternalStoreWithSelector = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot,
	  selector,
	  isEqual
	) {
	  var instRef = useRef(null);
	  if (null === instRef.current) {
	    var inst = { hasValue: false, value: null };
	    instRef.current = inst;
	  } else inst = instRef.current;
	  instRef = useMemo(
	    function () {
	      function memoizedSelector(nextSnapshot) {
	        if (!hasMemo) {
	          hasMemo = true;
	          memoizedSnapshot = nextSnapshot;
	          nextSnapshot = selector(nextSnapshot);
	          if (void 0 !== isEqual && inst.hasValue) {
	            var currentSelection = inst.value;
	            if (isEqual(currentSelection, nextSnapshot))
	              return (memoizedSelection = currentSelection);
	          }
	          return (memoizedSelection = nextSnapshot);
	        }
	        currentSelection = memoizedSelection;
	        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
	        var nextSelection = selector(nextSnapshot);
	        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	          return (memoizedSnapshot = nextSnapshot), currentSelection;
	        memoizedSnapshot = nextSnapshot;
	        return (memoizedSelection = nextSelection);
	      }
	      var hasMemo = false,
	        memoizedSnapshot,
	        memoizedSelection,
	        maybeGetServerSnapshot =
	          void 0 === getServerSnapshot ? null : getServerSnapshot;
	      return [
	        function () {
	          return memoizedSelector(getSnapshot());
	        },
	        null === maybeGetServerSnapshot
	          ? void 0
	          : function () {
	              return memoizedSelector(maybeGetServerSnapshot());
	            }
	      ];
	    },
	    [getSnapshot, getServerSnapshot, selector, isEqual]
	  );
	  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	  useEffect(
	    function () {
	      inst.hasValue = true;
	      inst.value = value;
	    },
	    [value]
	  );
	  useDebugValue(value);
	  return value;
	};
	return withSelector_production;
}

{
  withSelector.exports = requireWithSelector_production();
}

var withSelectorExports = withSelector.exports;

const __storeToDerived = /* @__PURE__ */ new WeakMap();
const __derivedToStore = /* @__PURE__ */ new WeakMap();
const __depsThatHaveWrittenThisTick = {
  current: []
};
let __isFlushing = false;
const __pendingUpdates = /* @__PURE__ */ new Set();
const __initialBatchValues = /* @__PURE__ */ new Map();
function __flush_internals(relatedVals) {
  for (const derived of relatedVals) {
    if (__depsThatHaveWrittenThisTick.current.includes(derived)) {
      continue;
    }
    __depsThatHaveWrittenThisTick.current.push(derived);
    derived.recompute();
    const stores = __derivedToStore.get(derived);
    if (stores) {
      for (const store of stores) {
        const relatedLinkedDerivedVals = __storeToDerived.get(store);
        if (!(relatedLinkedDerivedVals == null ? void 0 : relatedLinkedDerivedVals.length)) continue;
        __flush_internals(relatedLinkedDerivedVals);
      }
    }
  }
}
function __notifyListeners(store) {
  const value = {
    prevVal: store.prevState,
    currentVal: store.state
  };
  for (const listener of store.listeners) {
    listener(value);
  }
}
function __notifyDerivedListeners(derived) {
  const value = {
    prevVal: derived.prevState,
    currentVal: derived.state
  };
  for (const listener of derived.listeners) {
    listener(value);
  }
}
function __flush(store) {
  __pendingUpdates.add(store);
  if (__isFlushing) return;
  try {
    __isFlushing = true;
    while (__pendingUpdates.size > 0) {
      const stores = Array.from(__pendingUpdates);
      __pendingUpdates.clear();
      for (const store2 of stores) {
        const prevState = __initialBatchValues.get(store2) ?? store2.prevState;
        store2.prevState = prevState;
        __notifyListeners(store2);
      }
      for (const store2 of stores) {
        const derivedVals = __storeToDerived.get(store2);
        if (!derivedVals) continue;
        __depsThatHaveWrittenThisTick.current.push(store2);
        __flush_internals(derivedVals);
      }
      for (const store2 of stores) {
        const derivedVals = __storeToDerived.get(store2);
        if (!derivedVals) continue;
        for (const derived of derivedVals) {
          __notifyDerivedListeners(derived);
        }
      }
    }
  } finally {
    __isFlushing = false;
    __depsThatHaveWrittenThisTick.current = [];
    __initialBatchValues.clear();
  }
}

function isUpdaterFunction(updater) {
  return typeof updater === "function";
}

class Store {
  constructor(initialState, options) {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.prevState = initialState;
    this.state = initialState;
    this.options = options;
  }
  setState(updater) {
    var _a, _b, _c;
    this.prevState = this.state;
    if ((_a = this.options) == null ? void 0 : _a.updateFn) {
      this.state = this.options.updateFn(this.prevState)(updater);
    } else {
      if (isUpdaterFunction(updater)) {
        this.state = updater(this.prevState);
      } else {
        this.state = updater;
      }
    }
    (_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b);
    __flush(this);
  }
}

function useStore(store, selector = (d) => d, options = {}) {
  const equal = options.equal ?? shallow;
  const slice = withSelectorExports.useSyncExternalStoreWithSelector(
    store.subscribe,
    () => store.state,
    () => store.state,
    selector,
    equal
  );
  return slice;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [k, v] of objA) {
      if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const v of objA) {
      if (!objB.has(v)) return false;
    }
    return true;
  }
  if (objA instanceof Date && objB instanceof Date) {
    if (objA.getTime() !== objB.getTime()) return false;
    return true;
  }
  const keysA = getOwnKeys(objA);
  if (keysA.length !== getOwnKeys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function getOwnKeys(obj) {
  return Object.keys(obj).concat(
    Object.getOwnPropertySymbols(obj)
  );
}

function createStore(state, options = {}) {
    return new Store(state, {
        updateFn: (state) => (updater) => produce(state, updater),
        ...options
    });
}
const settingsLocalStorageKey = 'decky-launch-options-settings';
const settingsLocalStorageValue = localStorage.getItem(settingsLocalStorageKey);
const defaultSettingsStoreState = {
    useHierarchy: true,
    showCommands: false,
};
const settingsStore = createStore({
    ...defaultSettingsStoreState,
    ...(settingsLocalStorageValue ? JSON.parse(settingsLocalStorageValue) : {})
}, {
    onUpdate() {
        localStorage.setItem(settingsLocalStorageKey, JSON.stringify(settingsStore.state));
    }
});
settingsStore.subscribe(({ currentVal }) => {
    localStorage.setItem(settingsLocalStorageKey, JSON.stringify(currentVal));
});

function buildHierarchy(options) {
    const result = [];
    // Track which options have been processed as children
    const processed = new Set();
    function findChildren(parent, parentIndent, parentPrefix) {
        const children = [];
        for (const option of options) {
            if (processed.has(option.id) || option.id === parent.id)
                continue;
            // Check if this option starts with the parent's name (plus a space)
            if (option.name.startsWith(parentPrefix + ' ')) {
                processed.add(option.id);
                const displayName = option.name.substring(parentPrefix.length + 1).trim();
                children.push({
                    launchOption: option,
                    displayName,
                    indentLevel: parentIndent + 1,
                });
                // Recursively find children of this child
                const grandchildren = findChildren(option, parentIndent + 1, option.name);
                children.push(...grandchildren);
            }
        }
        return children;
    }
    // First pass: identify root-level items and build hierarchy
    for (const option of options) {
        if (processed.has(option.id))
            continue;
        // Add the root item
        result.push({
            launchOption: option,
            displayName: option.name,
            indentLevel: 0,
        });
        processed.add(option.id);
        // Find and add all children recursively
        const children = findChildren(option, 0, option.name);
        result.push(...children);
    }
    return result;
}
function ModalWrapper({ title, children, onClose }) {
    return (SP_JSX.jsxs(DFL.ModalRoot, { onCancel: onClose, children: [SP_JSX.jsx(DFL.DialogHeader, { children: title }), SP_JSX.jsx(DFL.DialogBody, { children: SP_JSX.jsx(QueryClientProvider, { client: queryClient, children: SP_JSX.jsx(PluginProvider, { children: children }) }) })] }));
}
function LaunchOptionItem({ launchOption, displayName, indentLevel, isChecked, showCommands, onToggle, onEdit, }) {
    const activeColor = 'oklch(80.9% 0.105 251.813)';
    const description = showCommands ? (SP_JSX.jsxs("span", { style: { color: 'oklch(55.4% 0.046 257.417)' }, children: [launchOption.on && (SP_JSX.jsxs("span", { style: { color: isChecked ? activeColor : undefined }, children: ["ON: ", launchOption.on] })), launchOption.on && launchOption.off && ' | ', launchOption.off && (SP_JSX.jsxs("span", { style: { color: !isChecked ? activeColor : undefined }, children: ["OFF: ", launchOption.off] })), !launchOption.on && !launchOption.off && 'None'] })) : undefined;
    return (SP_JSX.jsx(DFL.Field, { indentLevel: indentLevel, label: displayName, description: description, childrenLayout: 'inline', children: SP_JSX.jsxs(DFL.Focusable, { style: { display: 'flex', gap: 10, alignItems: 'center' }, children: [SP_JSX.jsx(DFL.Toggle, { value: isChecked, onChange: onToggle }), SP_JSX.jsx(DFL.DialogButton, { style: { minWidth: 40, width: 40, height: 40, padding: 0 }, onClick: onEdit, children: SP_JSX.jsx(FaPen, {}) })] }) }));
}
function ValueIdSelectItem({ valueId, launchOptions, displayName, indentLevel, appid, showCommands, getAppLaunchOptionState, setAppValueIdState, setValueAsDefault, onEdit, }) {
    const activeColor = 'oklch(80.9% 0.105 251.813)';
    const selectedOption = launchOptions.find((lo) => getAppLaunchOptionState(appid, lo.id));
    const selectedId = selectedOption?.id ?? launchOptions[0]?.id ?? null;
    const rgOptions = launchOptions
        .map((lo) => ({
        data: lo.id,
        label: (lo.valueName || lo.on || lo.name) + '\u00A0\u00A0',
        _emptyOn: !lo.on,
        _fallback: !!lo.fallbackValue,
    }))
        .sort((a, b) => {
        if (a._emptyOn !== b._emptyOn)
            return a._emptyOn ? -1 : 1;
        if (a._fallback !== b._fallback)
            return a._fallback ? -1 : 1;
        return a.label.localeCompare(b.label);
    });
    const description = showCommands ? (SP_JSX.jsx("span", { style: { color: 'oklch(55.4% 0.046 257.417)' }, children: selectedOption?.on ? (SP_JSX.jsxs("span", { style: { color: activeColor }, children: ["ON: ", selectedOption.on] })) : (selectedOption?.valueName || selectedOption?.name || 'None') })) : undefined;
    return (SP_JSX.jsx(DFL.Field, { indentLevel: indentLevel, label: displayName, description: description, childrenLayout: 'inline', children: SP_JSX.jsxs(DFL.Focusable, { style: { display: 'flex', gap: 10, alignItems: 'center' }, children: [SP_JSX.jsx(DFL.Focusable, { style: { flex: 1 }, children: SP_JSX.jsx("div", { style: {
                            display: 'flex',
                            justifyContent: 'stretch',
                            minWidth: 200,
                        }, children: SP_JSX.jsx(DFL.Dropdown, { rgOptions: rgOptions, selectedOption: selectedId, onChange: (option) => {
                                setAppValueIdState(appid, valueId, option.data, setValueAsDefault);
                            } }) }) }), SP_JSX.jsx(DFL.DialogButton, { style: { minWidth: 40, width: 40, height: 40, padding: 0 }, onClick: () => onEdit(selectedOption?.id ?? launchOptions[0].id), children: SP_JSX.jsx(FaPen, {}) })] }) }));
}
function renderLaunchOptionItems({ items, appid, showCommands, getAppLaunchOptionState, setAppLaunchOptionState, setAppValueIdState, setValueAsDefault, onEdit, }) {
    const result = [];
    const processedValueIds = new Set();
    for (const item of items) {
        const { launchOption } = item;
        // If this item has a valueId, render it as part of a dropdown group
        if (launchOption.valueId) {
            if (processedValueIds.has(launchOption.valueId))
                continue;
            processedValueIds.add(launchOption.valueId);
            // Collect all items in this list that share the same valueId
            const siblings = items
                .filter((i) => i.launchOption.valueId === launchOption.valueId)
                .map((i) => i.launchOption);
            result.push(SP_JSX.jsx(ValueIdSelectItem, { valueId: launchOption.valueId, launchOptions: siblings, displayName: item.displayName, indentLevel: item.indentLevel, appid: appid, showCommands: showCommands, getAppLaunchOptionState: getAppLaunchOptionState, setAppValueIdState: setAppValueIdState, setValueAsDefault: setValueAsDefault, onEdit: onEdit }, `valueId-${launchOption.valueId}`));
        }
        else {
            // Normal toggle item
            result.push(SP_JSX.jsx(LaunchOptionItem, { launchOption: launchOption, displayName: item.displayName, indentLevel: item.indentLevel, isChecked: getAppLaunchOptionState(appid, launchOption.id), showCommands: showCommands, onToggle: (value) => setAppLaunchOptionState(appid, launchOption.id, value), onEdit: () => onEdit(launchOption.id) }, launchOption.id));
        }
    }
    return result;
}
/**
 * Count active launch options, treating valueId groups as at most 1.
 */
function countActiveLaunchOptions(launchOptions, appid, getAppLaunchOptionState, filter) {
    const filtered = filter ? launchOptions.filter(filter) : launchOptions;
    const countedValueIds = new Set();
    let count = 0;
    for (const item of filtered) {
        const isActive = getAppLaunchOptionState(appid, item.id);
        const hasCommand = isActive ? !!item.on : !!item.off;
        if (!hasCommand)
            continue;
        if (item.valueId) {
            if (countedValueIds.has(item.valueId))
                continue;
            countedValueIds.add(item.valueId);
        }
        count++;
    }
    return count;
}
function AppLaunchOptionsPage() {
    const { appid } = DFL.useParams();
    const [tab, setTab] = SP_REACT.useState('local');
    const useHierarchy = useStore(settingsStore, (state) => state.useHierarchy);
    const showCommands = useStore(settingsStore, (state) => state.showCommands);
    const { settings, getAppLaunchOptionState, setAppLaunchOptionState, setAppValueIdState, getAppOriginalLaunchOptions, setAppOriginalLaunchOptions, } = useSettings();
    const globalValueIds = SP_REACT.useMemo(() => {
        const valueIds = new Set();
        settings.launchOptions.forEach((item) => {
            if (item.valueId && item.enableGlobally) {
                valueIds.add(item.valueId);
            }
        });
        return valueIds;
    }, [settings.launchOptions]);
    const isLaunchOptionGlobal = SP_REACT.useCallback((item) => {
        if (item.valueId) {
            return globalValueIds.has(item.valueId);
        }
        return item.enableGlobally;
    }, [globalValueIds]);
    const groups = SP_REACT.useMemo(() => {
        const groupSet = new Set();
        settings.launchOptions.forEach((item) => {
            if (item.group)
                groupSet.add(item.group);
        });
        return Array.from(groupSet).sort((a, b) => a.localeCompare(b));
    }, [settings]);
    const groupedLaunchOptions = SP_REACT.useMemo(() => {
        const map = {};
        for (const group of groups) {
            const inGroup = settings.launchOptions
                .filter((item) => item.group === group)
                .sort((a, b) => a.name.localeCompare(b.name));
            const localFiltered = inGroup.filter((item) => !isLaunchOptionGlobal(item));
            const globalFiltered = inGroup.filter((item) => isLaunchOptionGlobal(item));
            map[group] = {
                local: useHierarchy ? buildHierarchy(localFiltered) : localFiltered.map(item => ({
                    launchOption: item,
                    displayName: item.name,
                    indentLevel: 0,
                })),
                global: useHierarchy ? buildHierarchy(globalFiltered) : globalFiltered.map(item => ({
                    launchOption: item,
                    displayName: item.name,
                    indentLevel: 0,
                })),
            };
        }
        return map;
    }, [settings, groups, useHierarchy, isLaunchOptionGlobal]);
    const localLaunchOptions = SP_REACT.useMemo(() => {
        const filtered = settings.launchOptions
            .filter((item) => !isLaunchOptionGlobal(item) && !item.group)
            .sort((a, b) => a.name.localeCompare(b.name));
        return useHierarchy ? buildHierarchy(filtered) : filtered.map(item => ({
            launchOption: item,
            displayName: item.name,
            indentLevel: 0,
        }));
    }, [settings, useHierarchy, isLaunchOptionGlobal]);
    const globalLaunchOptions = SP_REACT.useMemo(() => {
        const filtered = settings.launchOptions
            .filter((item) => isLaunchOptionGlobal(item) && !item.group)
            .sort((a, b) => a.name.localeCompare(b.name));
        return useHierarchy ? buildHierarchy(filtered) : filtered.map(item => ({
            launchOption: item,
            displayName: item.name,
            indentLevel: 0,
        }));
    }, [settings, useHierarchy, isLaunchOptionGlobal]);
    const { TabCount } = DFL.findModule((mod) => {
        if (typeof mod !== 'object')
            return false;
        if (mod.TabCount && mod.TabTitle) {
            return true;
        }
        return false;
    });
    // this fixes weird issues when switching tab by forcing the blur on the active element (no document.activeElement.blur doesn't work)
    const [readyToShow, setReadyToShow] = SP_REACT.useState(true);
    const timeoutRef = SP_REACT.useRef(null);
    SP_REACT.useEffect(() => {
        if (timeoutRef.current)
            clearInterval(timeoutRef.current);
        timeoutRef.current = setInterval(() => {
            setReadyToShow(true);
        }, 100);
        setReadyToShow(false);
    }, [tab]);
    const showCreateLaunchOptionFormModal = SP_REACT.useCallback(() => {
        const isGroupTab = tab !== 'local' && tab !== 'global';
        const modalResult = DFL.showModal(SP_JSX.jsx(ModalWrapper, { title: "Add launch option", onClose: () => modalResult.Close(), children: SP_JSX.jsx(CreateLaunchOptionForm, { defaultValue: {
                    enableGlobally: tab === 'global',
                    ...(isGroupTab ? { group: tab } : {}),
                }, onSubmit: () => modalResult.Close() }) }));
    }, [tab]);
    const showUpdateLaunchOptionFormModal = SP_REACT.useCallback((id) => {
        const modalResult = DFL.showModal(SP_JSX.jsx(ModalWrapper, { title: "Edit launch option", onClose: () => modalResult.Close(), children: SP_JSX.jsx(UpdateLaunchOptionForm, { id: id, onDelete: () => modalResult.Close(), deleteByValueId: true }) }));
    }, [appid]);
    return (SP_JSX.jsx("div", { style: {
            marginTop: "40px",
            height: "calc(100% - 40px - 42px)",
            overflow: "hidden",
        }, children: SP_JSX.jsx(DFL.Tabs, { activeTab: tab, onShowTab: setTab, tabs: [
                ...groups.map((group) => ({
                    id: group,
                    title: group,
                    content: (readyToShow &&
                        SP_JSX.jsxs(DFL.Focusable, { style: { height: '100%' }, children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                                            showCreateLaunchOptionFormModal();
                                        }, children: "Add launch option" }) }), groupedLaunchOptions[group]?.local.length > 0 && (SP_JSX.jsxs("div", { children: [SP_JSX.jsx("div", { style: { marginTop: '16px' }, children: SP_JSX.jsx("strong", { children: "Local" }) }), renderLaunchOptionItems({
                                            items: groupedLaunchOptions[group].local,
                                            appid,
                                            showCommands,
                                            getAppLaunchOptionState,
                                            setAppLaunchOptionState,
                                            setAppValueIdState,
                                            setValueAsDefault: false,
                                            onEdit: showUpdateLaunchOptionFormModal,
                                        })] })), groupedLaunchOptions[group]?.global.length > 0 && (SP_JSX.jsxs("div", { children: [SP_JSX.jsx("div", { style: { marginTop: '16px' }, children: SP_JSX.jsx("strong", { children: "Global" }) }), renderLaunchOptionItems({
                                            items: groupedLaunchOptions[group].global,
                                            appid,
                                            showCommands,
                                            getAppLaunchOptionState,
                                            setAppLaunchOptionState,
                                            setAppValueIdState,
                                            setValueAsDefault: true,
                                            onEdit: showUpdateLaunchOptionFormModal,
                                        })] }))] })),
                    renderTabAddon: () => {
                        const count = countActiveLaunchOptions(settings.launchOptions, appid, getAppLaunchOptionState, (item) => item.group === group);
                        return SP_JSX.jsx("span", { className: TabCount, children: count });
                    },
                })),
                {
                    id: 'local',
                    title: 'Local',
                    content: (readyToShow &&
                        SP_JSX.jsxs(DFL.Focusable, { style: { height: '100%' }, children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                                            showCreateLaunchOptionFormModal();
                                        }, children: "Add launch option" }) }), SP_JSX.jsx(DFL.Field, { childrenLayout: 'below', label: 'Original launch options', children: SP_JSX.jsx(DFL.TextField, { value: getAppOriginalLaunchOptions(appid), onChange: (e) => setAppOriginalLaunchOptions(appid, e.target.value), style: { width: 400 } }) }), renderLaunchOptionItems({
                                    items: localLaunchOptions,
                                    appid,
                                    showCommands,
                                    getAppLaunchOptionState,
                                    setAppLaunchOptionState,
                                    setAppValueIdState,
                                    setValueAsDefault: false,
                                    onEdit: showUpdateLaunchOptionFormModal,
                                })] })),
                    renderTabAddon: () => {
                        const count = countActiveLaunchOptions(settings.launchOptions, appid, getAppLaunchOptionState, (item) => !isLaunchOptionGlobal(item) && !item.group);
                        return SP_JSX.jsx("span", { className: TabCount, children: count + (Number(!!getAppOriginalLaunchOptions(appid))) });
                    },
                },
                {
                    id: 'global',
                    title: 'Global',
                    content: (readyToShow &&
                        SP_JSX.jsxs(DFL.Focusable, { style: { height: '100%' }, children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                                            showCreateLaunchOptionFormModal();
                                        }, children: "Add launch option" }) }), renderLaunchOptionItems({
                                    items: globalLaunchOptions,
                                    appid,
                                    showCommands,
                                    getAppLaunchOptionState,
                                    setAppLaunchOptionState,
                                    setAppValueIdState,
                                    setValueAsDefault: true,
                                    onEdit: showUpdateLaunchOptionFormModal,
                                })] })),
                    renderTabAddon: () => {
                        const count = countActiveLaunchOptions(settings.launchOptions, appid, getAppLaunchOptionState, (item) => isLaunchOptionGlobal(item) && !item.group);
                        return SP_JSX.jsx("span", { className: TabCount, children: count });
                    },
                },
            ] }) }));
}

function ApplyLaunchOptionsLogic(props) {
    const appid = DFL.useParams().appid || props.appid;
    const getInfoQuery = useGetInfoQuery();
    const applyLaunchOptionsMutation = useApplyLaunchOptionsMutation();
    SP_REACT.useEffect(() => {
        if (typeof appid !== 'undefined' && getInfoQuery.data) {
            applyLaunchOptionsMutation.mutate({
                appid: Number(appid),
                command: getInfoQuery.data.COMMAND,
            });
        }
    }, [appid, getInfoQuery.data]);
    return props.children;
}
function ApplyLaunchOptions(props) {
    return (SP_JSX.jsx(QueryClientProvider, { client: queryClient, children: SP_JSX.jsx(ApplyLaunchOptionsLogic, { appid: props.appid, children: props.children }) }));
}

// Greatest code known to man https://github.com/SteamGridDB/decky-steamgriddb/blob/main/src/patches/contextMenuPatch.tsx
// Always add before "Properties..."
const spliceItem = (children, appid) => {
    children.find((x) => x?.key === 'properties');
    const propertiesMenuItemIdx = children.findIndex((item) => DFL.findInReactTree(item, (x) => x?.onSelected && x.onSelected.toString().includes('AppProperties')));
    children.splice(propertiesMenuItemIdx, 0, (SP_JSX.jsx(ApplyLaunchOptions, { appid: appid, children: SP_JSX.jsx(DFL.MenuItem, { onSelected: () => {
                DFL.Navigation.Navigate(routes.appLaunchOptions(appid));
            }, children: 'Launch options' }) }, "decky-launch-options")));
};
// Check if correct menu by looking at the code of the onSelected function
// Should be enough to ignore the screenshots and other menus.
const isOpeningAppContextMenu = (items) => {
    if (!items?.length) {
        return false;
    }
    return !!DFL.findInReactTree(items, (x) => x?.props?.onSelected && x?.props?.onSelected.toString().includes('launchSource'));
};
const handleItemDupes = (items) => {
    const sgdbIdx = items.findIndex((x) => x?.key === 'decky-launch-options');
    if (sgdbIdx != -1)
        items.splice(sgdbIdx, 1);
};
const patchMenuItems = (menuItems, appid) => {
    let updatedAppid = appid;
    // find the first menu component that has the correct appid, sometimes the one passed is cached from another context menu
    const parentOverview = menuItems.find((x) => x?._owner?.pendingProps?.overview?.appid &&
        x._owner.pendingProps.overview.appid !== appid);
    // if found then use that appid
    if (parentOverview) {
        updatedAppid = parentOverview._owner.pendingProps.overview.appid;
    }
    // Oct 2025 client
    if (updatedAppid === appid) {
        const foundApp = DFL.findInTree(menuItems, (x) => x?.app?.appid, { walkable: ['props', 'children'] });
        if (foundApp) {
            updatedAppid = foundApp.app.appid;
        }
    }
    spliceItem(menuItems, updatedAppid);
};
/**
 * Patches the game context menu.
 * @param LibraryContextMenu The game context menu.
 * @returns A patch to remove when the plugin dismounts.
 */
const contextMenuPatch = (LibraryContextMenu) => {
    const patches = {
        unpatch: () => {
            return null;
        },
    };
    patches.outer = DFL.afterPatch(LibraryContextMenu.prototype, 'render', (_, component) => {
        let appid = 1018880;
        if (component._owner) {
            appid = component._owner.pendingProps.overview.appid;
        }
        else {
            // Oct 2025 client
            const foundApp = DFL.findInTree(component.props.children, (x) => x?.app?.appid, { walkable: ['props', 'children'] });
            if (foundApp) {
                appid = foundApp.app.appid;
            }
        }
        if (!patches.inner) {
            patches.inner = DFL.afterPatch(component, 'type', (_, ret) => {
                // initial render
                DFL.afterPatch(ret.type.prototype, 'render', (_, ret2) => {
                    const menuItems = ret2.props.children[0]; // always the first child
                    if (!isOpeningAppContextMenu(menuItems))
                        return ret2;
                    try {
                        handleItemDupes(menuItems);
                    }
                    catch (error) {
                        return ret2;
                    }
                    patchMenuItems(menuItems, appid);
                    return ret2;
                });
                // when steam decides to regresh app overview
                DFL.afterPatch(ret.type.prototype, 'shouldComponentUpdate', ([nextProps], shouldUpdate) => {
                    try {
                        handleItemDupes(nextProps.children);
                    }
                    catch (error) {
                        // wrong context menu (probably)
                        return shouldUpdate;
                    }
                    if (shouldUpdate === true) {
                        patchMenuItems(nextProps.children, appid);
                    }
                    return shouldUpdate;
                });
                return ret;
            });
        }
        else {
            spliceItem(component.props.children, appid);
        }
        return component;
    });
    patches.unpatch = () => {
        patches.outer?.unpatch();
        patches.inner?.unpatch();
    };
    return patches;
};
/**
 * Game context menu component.
 */
const LibraryContextMenu = DFL.fakeRenderComponent(Object.values(DFL.findModuleByExport((e) => e?.toString && e.toString().includes('().LibraryContextMenu'))).find((sibling) => (sibling?.toString().includes('navigator:')))).type;

const libraryAppPatch = () => {
    const path = '/library/app/:appid';
    const patch = routerHook.addPatch('/library/app/:appid', (tree) => {
        const routeProps = DFL.findInReactTree(tree, (x) => x?.renderFunc);
        if (routeProps) {
            const patchHandler = DFL.createReactTreePatcher([
                (tree) => DFL.findInReactTree(tree, (x) => x?.props?.children?.props?.overview)?.props?.children,
            ], (_, ret) => {
                // @ts-ignore
                const dloComponent = ret?.props?.children?.find((child) => {
                    const props = (child?.props || {});
                    return 'data-apply-launch-options' in props;
                });
                if (!dloComponent) {
                    // @ts-ignore
                    ret?.props?.children?.push(SP_JSX.jsx(ApplyLaunchOptions, { "data-apply-launch-options": true }));
                }
                return ret;
            });
            DFL.afterPatch(routeProps, "renderFunc", patchHandler);
        }
        return tree;
    });
    return [path, patch];
};

function DebugLogModal({ onClose }) {
    const [log, setLog] = SP_REACT.useState(null);
    const [loading, setLoading] = SP_REACT.useState(true);
    SP_REACT.useEffect(() => {
        get_debug_log().then((result) => {
            setLog(result);
            setLoading(false);
        });
    }, []);
    return (SP_JSX.jsx(DFL.ModalRoot, { onCancel: onClose, children: SP_JSX.jsx(DFL.DialogBody, { children: SP_JSX.jsx(DFL.ScrollPanel, { children: loading ? (SP_JSX.jsx("div", { children: "Loading..." })) : log ? (SP_JSX.jsx("pre", { style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }, children: log })) : (SP_JSX.jsx("div", { children: "No debug log found. Launch a game to generate one." })) }) }) }));
}
function Content() {
    const [showMore, setShowMore] = SP_REACT.useState(false);
    const useHierarchy = useStore(settingsStore, (state) => state.useHierarchy);
    const showCommands = useStore(settingsStore, (state) => state.showCommands);
    return (SP_JSX.jsxs(DFL.PanelSection, { children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                        DFL.Navigation.Navigate(routes.launchOptions());
                        DFL.Navigation.CloseSideMenus();
                    }, children: "Manage launch options" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ToggleField, { checked: useHierarchy, onChange: (value) => {
                        settingsStore.setState((state) => {
                            state.useHierarchy = value;
                        });
                    }, description: 'Display launch options with a similar starting name in a tree structure', label: 'Enable hierarchy display', bottomSeparator: 'none' }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ToggleField, { checked: showCommands, onChange: (value) => {
                        settingsStore.setState((state) => {
                            state.showCommands = value;
                        });
                    }, description: 'Show the on/off commands below each launch option', label: 'Show commands', bottomSeparator: 'none' }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                        window.open("https://github.com/Wurielle/decky-launch-options.git#readme", "_blank");
                    }, children: "README.md" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                        setShowMore((value) => !value);
                    }, children: showMore ? SP_JSX.jsx(FaChevronUp, {}) : SP_JSX.jsx(FaChevronDown, {}) }) }), showMore && (SP_JSX.jsxs(SP_JSX.Fragment, { children: [SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                                const modalResult = DFL.showModal(SP_JSX.jsx(DebugLogModal, { onClose: () => modalResult.Close() }));
                            }, children: "Debug log" }) }), SP_JSX.jsx(DFL.PanelSectionRow, { children: SP_JSX.jsx(DFL.ButtonItem, { layout: "below", onClick: () => {
                                window.dispatchEvent(new CustomEvent(batchCreateLaunchOptionsEventType, {
                                    detail: [
                                        {
                                            id: 'portal-args',
                                            name: 'Portal args',
                                            on: '-novid +cl_showfps 3',
                                            off: '',
                                            enableGlobally: false,
                                        },
                                        {
                                            id: 'steam-deck',
                                            group: 'Steam',
                                            name: 'Steam Deck',
                                            on: 'SteamDeck=1',
                                            off: 'SteamDeck=0',
                                            enableGlobally: true,
                                        },
                                        {
                                            id: 'mangohud',
                                            group: 'MangoHud',
                                            name: 'MangoHud',
                                            on: 'mangohud %command%',
                                            off: '',
                                            enableGlobally: false,
                                        },
                                        {
                                            id: 'mangohud-config-preset-none',
                                            group: 'MangoHud',
                                            name: 'MangoHud Preset',
                                            on: '',
                                            off: '',
                                            enableGlobally: false,
                                            valueId: 'mangohud-config-preset',
                                            valueName: 'None',
                                            fallbackValue: true,
                                        },
                                        {
                                            id: 'mangohud-config-preset-0',
                                            group: 'MangoHud',
                                            name: 'MangoHud Preset',
                                            on: 'MANGOHUD_CONFIG="preset=0"',
                                            off: '',
                                            enableGlobally: false,
                                            valueId: 'mangohud-config-preset',
                                            valueName: 'No Hud',
                                        },
                                        {
                                            id: 'mangohud-config-preset-1',
                                            group: 'MangoHud',
                                            name: 'MangoHud Preset',
                                            on: 'MANGOHUD_CONFIG="preset=1"',
                                            off: '',
                                            enableGlobally: false,
                                            valueId: 'mangohud-config-preset',
                                            valueName: 'FPS Only',
                                        },
                                        {
                                            id: 'mangohud-config-preset-2',
                                            group: 'MangoHud',
                                            name: 'MangoHud Preset',
                                            on: 'MANGOHUD_CONFIG="preset=2"',
                                            off: '',
                                            enableGlobally: false,
                                            valueId: 'mangohud-config-preset',
                                            valueName: 'Horizontal',
                                        },
                                        {
                                            id: 'mangohud-config-preset-3',
                                            group: 'MangoHud',
                                            name: 'MangoHud Preset',
                                            on: 'MANGOHUD_CONFIG="preset=3"',
                                            off: '',
                                            enableGlobally: false,
                                            valueId: 'mangohud-config-preset',
                                            valueName: 'Extended',
                                        },
                                        {
                                            id: 'mangohud-config-preset-4',
                                            group: 'MangoHud',
                                            name: 'MangoHud Preset',
                                            on: 'MANGOHUD_CONFIG="preset=4"',
                                            off: '',
                                            enableGlobally: false,
                                            valueId: 'mangohud-config-preset',
                                            valueName: 'Detailed',
                                        },
                                    ],
                                }));
                            }, children: "Debug launch options" }) })] }))] }));
}

function compareValues(a, b, order) {
    if (a < b) {
        return order === 'asc' ? -1 : 1;
    }
    if (a > b) {
        return order === 'asc' ? 1 : -1;
    }
    return 0;
}

function orderBy(arr, criteria, orders) {
    return arr.slice().sort((a, b) => {
        const ordersLength = orders.length;
        for (let i = 0; i < criteria.length; i++) {
            const order = ordersLength > i ? orders[i] : orders[ordersLength - 1];
            const criterion = criteria[i];
            const criterionIsFunction = typeof criterion === 'function';
            const valueA = criterionIsFunction ? criterion(a) : a[criterion];
            const valueB = criterionIsFunction ? criterion(b) : b[criterion];
            const result = compareValues(valueA, valueB, order);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    });
}

function sortBy(arr, criteria) {
    return orderBy(arr, criteria, ['asc']);
}

function BatchAddLaunchOptions({ data, onSubmit, onCancel }) {
    const [launchOptions, setLaunchOptions] = i(sortBy(data.map(launchOptionFactory), ['name']));
    const { batchCreateLaunchOptions } = useSettings();
    const showLaunchOptions = SP_REACT.useCallback(() => {
        const modalResult = DFL.showModal(SP_JSX.jsxs(DFL.ModalRoot, { onCancel: () => {
                onCancel();
                modalResult.Close();
            }, children: [SP_JSX.jsx(DFL.DialogBody, { children: launchOptions.map((launchOption, index) => (SP_JSX.jsxs(DFL.DialogControlsSection, { children: [SP_JSX.jsxs(DFL.DialogControlsSectionHeader, { children: [launchOption.name, launchOption.valueName ? ` (${launchOption.valueName})` : ''] }), SP_JSX.jsx(DFL.Field, { description: SP_JSX.jsxs("div", { style: { padding: '0 0 0 22' }, children: [SP_JSX.jsx(DFL.TextField, { label: 'On command', disabled: true, value: launchOption.on }), SP_JSX.jsx(DFL.TextField, { label: 'Off command', disabled: true, value: launchOption.off }), SP_JSX.jsx(DFL.ToggleField, { label: 'Enable globally', bottomSeparator: 'none', checked: launchOption.enableGlobally, onChange: (value) => {
                                                setLaunchOptions((draft) => {
                                                    draft[index].enableGlobally = value;
                                                });
                                            } })] }) })] }))) }), SP_JSX.jsx(DFL.DialogFooter, { children: SP_JSX.jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '10px' }, children: [SP_JSX.jsx(DFL.DialogButtonPrimary, { onClick: () => {
                                    batchCreateLaunchOptions(launchOptions);
                                    onSubmit();
                                    modalResult.Close();
                                }, children: "Add to Decky Launch Options" }), SP_JSX.jsx(DFL.DialogButton, { onClick: () => {
                                    onCancel();
                                    modalResult.Close();
                                }, children: "Cancel" })] }) })] }));
    }, [onCancel, launchOptions, onSubmit, batchCreateLaunchOptions]);
    return (SP_JSX.jsxs(DFL.ModalRoot, { onCancel: onCancel, children: [SP_JSX.jsx(DFL.DialogHeader, { children: "Decky Launch Options" }), SP_JSX.jsxs(DFL.DialogBody, { children: [SP_JSX.jsx("p", { children: "An application would like to add the following launch options:" }), SP_JSX.jsx(DFL.Focusable, { style: { maxHeight: "145px", overflowY: "auto" }, children: SP_JSX.jsx("ul", { children: launchOptions.map((launchOption, index) => (SP_JSX.jsxs("li", { children: [launchOption.name, launchOption.valueName ? ` (${launchOption.valueName})` : ''] }, index))) }) }), SP_JSX.jsx("p", { children: "Please review each of them carefully before accepting." })] }), SP_JSX.jsx(DFL.DialogFooter, { children: SP_JSX.jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '10px' }, children: SP_JSX.jsx(DFL.DialogButtonPrimary, { onClick: () => {
                            showLaunchOptions();
                        }, children: "I understand" }) }) })] }));
}
function batchCreateLaunchOptions(launchOptions) {
    const modalResult = DFL.showModal(SP_JSX.jsx(QueryClientProvider, { client: queryClient, children: SP_JSX.jsx(BatchAddLaunchOptions, { data: launchOptions, onSubmit: () => modalResult.Close(), onCancel: () => modalResult.Close() }) }));
}

var index = definePlugin(() => {
    routerHook.addRoute(routes.appLaunchOptions(), () => {
        return (SP_JSX.jsx(QueryClientProvider, { client: queryClient, children: SP_JSX.jsx(AppLaunchOptionsPage, {}) }));
    });
    routerHook.addRoute(routes.launchOptions(), () => {
        return (SP_JSX.jsx(QueryClientProvider, { client: queryClient, children: SP_JSX.jsx(LaunchOptionsPage, {}) }));
    });
    // shamefully stolen from the talented people at SteamGridDB
    const menuPatches = contextMenuPatch(LibraryContextMenu);
    const libraryAppPatchResult = libraryAppPatch();
    void queryClient.prefetchQuery(getSettingsQueryOptions);
    function onBatchCreateLaunchOptions(event) {
        batchCreateLaunchOptions(event.detail);
    }
    window.addEventListener(batchCreateLaunchOptionsEventType, onBatchCreateLaunchOptions);
    window.hasDeckyLaunchOptions = true;
    return {
        name: "Launch Options",
        titleView: SP_JSX.jsx("div", { className: DFL.staticClasses.Title, children: "Launch Options" }),
        content: SP_JSX.jsx(Content, {}),
        icon: SP_JSX.jsx(FaTerminal, {}),
        onDismount() {
            Object.values(routes).forEach((route) => {
                routerHook.removeRoute(route());
            });
            menuPatches?.unpatch();
            routerHook.removePatch(...libraryAppPatchResult);
            const settings = queryClient.getQueryData(getSettingsQueryOptions.queryKey);
            if (settings) {
                Object.entries(settings.profiles)
                    .forEach(([appid, profile]) => {
                    SteamClient.Apps.SetAppLaunchOptions(Number(appid), profile.originalLaunchOptions);
                });
            }
            window.removeEventListener(batchCreateLaunchOptionsEventType, onBatchCreateLaunchOptions);
            delete window.hasDeckyLaunchOptions;
        },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
