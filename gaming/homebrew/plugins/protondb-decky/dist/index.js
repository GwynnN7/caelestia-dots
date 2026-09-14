const manifest = {"name":"ProtonDB Badges"};
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
const call = api.call;
const routerHook = api.routerHook;
const fetchNoCors = api.fetchNoCors;

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
function FaGithub (props) {
  return GenIcon({"attr":{"viewBox":"0 0 496 512"},"child":[{"tag":"path","attr":{"d":"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(props);
}function FaReact (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(props);
}function FaSteam (props) {
  return GenIcon({"attr":{"viewBox":"0 0 496 512"},"child":[{"tag":"path","attr":{"d":"M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"}}]})(props);
}function FaBook (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"}}]})(props);
}function FaCog (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(props);
}function FaGamepad (props) {
  return GenIcon({"attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"}}]})(props);
}function FaPaperPlane (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(props);
}function FaQuestionCircle (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"}}]})(props);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var localforage$1 = {exports: {}};

/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/

(function (module, exports$1) {
	(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,true);if(i)return i(o,true);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports$1){
	(function (global){
	var Mutation = global.MutationObserver || global.WebKitMutationObserver;

	var scheduleDrain;

	{
	  if (Mutation) {
	    var called = 0;
	    var observer = new Mutation(nextTick);
	    var element = global.document.createTextNode('');
	    observer.observe(element, {
	      characterData: true
	    });
	    scheduleDrain = function () {
	      element.data = (called = ++called % 2);
	    };
	  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
	    var channel = new global.MessageChannel();
	    channel.port1.onmessage = nextTick;
	    scheduleDrain = function () {
	      channel.port2.postMessage(0);
	    };
	  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
	    scheduleDrain = function () {

	      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	      var scriptEl = global.document.createElement('script');
	      scriptEl.onreadystatechange = function () {
	        nextTick();

	        scriptEl.onreadystatechange = null;
	        scriptEl.parentNode.removeChild(scriptEl);
	        scriptEl = null;
	      };
	      global.document.documentElement.appendChild(scriptEl);
	    };
	  } else {
	    scheduleDrain = function () {
	      setTimeout(nextTick, 0);
	    };
	  }
	}

	var draining;
	var queue = [];
	//named nextTick for less confusing stack traces
	function nextTick() {
	  draining = true;
	  var i, oldQueue;
	  var len = queue.length;
	  while (len) {
	    oldQueue = queue;
	    queue = [];
	    i = -1;
	    while (++i < len) {
	      oldQueue[i]();
	    }
	    len = queue.length;
	  }
	  draining = false;
	}

	module.exports = immediate;
	function immediate(task) {
	  if (queue.push(task) === 1 && !draining) {
	    scheduleDrain();
	  }
	}

	}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	},{}],2:[function(_dereq_,module,exports$1){
	var immediate = _dereq_(1);

	/* istanbul ignore next */
	function INTERNAL() {}

	var handlers = {};

	var REJECTED = ['REJECTED'];
	var FULFILLED = ['FULFILLED'];
	var PENDING = ['PENDING'];

	module.exports = Promise;

	function Promise(resolver) {
	  if (typeof resolver !== 'function') {
	    throw new TypeError('resolver must be a function');
	  }
	  this.state = PENDING;
	  this.queue = [];
	  this.outcome = void 0;
	  if (resolver !== INTERNAL) {
	    safelyResolveThenable(this, resolver);
	  }
	}

	Promise.prototype["catch"] = function (onRejected) {
	  return this.then(null, onRejected);
	};
	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
	    typeof onRejected !== 'function' && this.state === REJECTED) {
	    return this;
	  }
	  var promise = new this.constructor(INTERNAL);
	  if (this.state !== PENDING) {
	    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
	    unwrap(promise, resolver, this.outcome);
	  } else {
	    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
	  }

	  return promise;
	};
	function QueueItem(promise, onFulfilled, onRejected) {
	  this.promise = promise;
	  if (typeof onFulfilled === 'function') {
	    this.onFulfilled = onFulfilled;
	    this.callFulfilled = this.otherCallFulfilled;
	  }
	  if (typeof onRejected === 'function') {
	    this.onRejected = onRejected;
	    this.callRejected = this.otherCallRejected;
	  }
	}
	QueueItem.prototype.callFulfilled = function (value) {
	  handlers.resolve(this.promise, value);
	};
	QueueItem.prototype.otherCallFulfilled = function (value) {
	  unwrap(this.promise, this.onFulfilled, value);
	};
	QueueItem.prototype.callRejected = function (value) {
	  handlers.reject(this.promise, value);
	};
	QueueItem.prototype.otherCallRejected = function (value) {
	  unwrap(this.promise, this.onRejected, value);
	};

	function unwrap(promise, func, value) {
	  immediate(function () {
	    var returnValue;
	    try {
	      returnValue = func(value);
	    } catch (e) {
	      return handlers.reject(promise, e);
	    }
	    if (returnValue === promise) {
	      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
	    } else {
	      handlers.resolve(promise, returnValue);
	    }
	  });
	}

	handlers.resolve = function (self, value) {
	  var result = tryCatch(getThen, value);
	  if (result.status === 'error') {
	    return handlers.reject(self, result.value);
	  }
	  var thenable = result.value;

	  if (thenable) {
	    safelyResolveThenable(self, thenable);
	  } else {
	    self.state = FULFILLED;
	    self.outcome = value;
	    var i = -1;
	    var len = self.queue.length;
	    while (++i < len) {
	      self.queue[i].callFulfilled(value);
	    }
	  }
	  return self;
	};
	handlers.reject = function (self, error) {
	  self.state = REJECTED;
	  self.outcome = error;
	  var i = -1;
	  var len = self.queue.length;
	  while (++i < len) {
	    self.queue[i].callRejected(error);
	  }
	  return self;
	};

	function getThen(obj) {
	  // Make sure we only access the accessor once as required by the spec
	  var then = obj && obj.then;
	  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
	    return function appyThen() {
	      then.apply(obj, arguments);
	    };
	  }
	}

	function safelyResolveThenable(self, thenable) {
	  // Either fulfill, reject or reject with error
	  var called = false;
	  function onError(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.reject(self, value);
	  }

	  function onSuccess(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.resolve(self, value);
	  }

	  function tryToUnwrap() {
	    thenable(onSuccess, onError);
	  }

	  var result = tryCatch(tryToUnwrap);
	  if (result.status === 'error') {
	    onError(result.value);
	  }
	}

	function tryCatch(func, value) {
	  var out = {};
	  try {
	    out.value = func(value);
	    out.status = 'success';
	  } catch (e) {
	    out.status = 'error';
	    out.value = e;
	  }
	  return out;
	}

	Promise.resolve = resolve;
	function resolve(value) {
	  if (value instanceof this) {
	    return value;
	  }
	  return handlers.resolve(new this(INTERNAL), value);
	}

	Promise.reject = reject;
	function reject(reason) {
	  var promise = new this(INTERNAL);
	  return handlers.reject(promise, reason);
	}

	Promise.all = all;
	function all(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var values = new Array(len);
	  var resolved = 0;
	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    allResolver(iterable[i], i);
	  }
	  return promise;
	  function allResolver(value, i) {
	    self.resolve(value).then(resolveFromAll, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	    function resolveFromAll(outValue) {
	      values[i] = outValue;
	      if (++resolved === len && !called) {
	        called = true;
	        handlers.resolve(promise, values);
	      }
	    }
	  }
	}

	Promise.race = race;
	function race(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    resolver(iterable[i]);
	  }
	  return promise;
	  function resolver(value) {
	    self.resolve(value).then(function (response) {
	      if (!called) {
	        called = true;
	        handlers.resolve(promise, response);
	      }
	    }, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	  }
	}

	},{"1":1}],3:[function(_dereq_,module,exports$1){
	(function (global){
	if (typeof global.Promise !== 'function') {
	  global.Promise = _dereq_(2);
	}

	}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	},{"2":2}],4:[function(_dereq_,module,exports$1){

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getIDB() {
	    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
	    try {
	        if (typeof indexedDB !== 'undefined') {
	            return indexedDB;
	        }
	        if (typeof webkitIndexedDB !== 'undefined') {
	            return webkitIndexedDB;
	        }
	        if (typeof mozIndexedDB !== 'undefined') {
	            return mozIndexedDB;
	        }
	        if (typeof OIndexedDB !== 'undefined') {
	            return OIndexedDB;
	        }
	        if (typeof msIndexedDB !== 'undefined') {
	            return msIndexedDB;
	        }
	    } catch (e) {
	        return;
	    }
	}

	var idb = getIDB();

	function isIndexedDBValid() {
	    try {
	        // Initialize IndexedDB; fall back to vendor-prefixed versions
	        // if needed.
	        if (!idb || !idb.open) {
	            return false;
	        }
	        // We mimic PouchDB here;
	        //
	        // We test for openDatabase because IE Mobile identifies itself
	        // as Safari. Oh the lulz...
	        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

	        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

	        // Safari <10.1 does not meet our requirements for IDB support
	        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
	        // Safari 10.1 shipped with fetch, we can use that to detect it.
	        // Note: this creates issues with `window.fetch` polyfills and
	        // overrides; see:
	        // https://github.com/localForage/localForage/issues/856
	        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
	        // some outdated implementations of IDB that appear on Samsung
	        // and HTC Android devices <4.4 are missing IDBKeyRange
	        // See: https://github.com/mozilla/localForage/issues/128
	        // See: https://github.com/mozilla/localForage/issues/272
	        typeof IDBKeyRange !== 'undefined';
	    } catch (e) {
	        return false;
	    }
	}

	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor. (i.e.
	// old QtWebKit versions, at least).
	function createBlob(parts, properties) {
	    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
	    parts = parts || [];
	    properties = properties || {};
	    try {
	        return new Blob(parts, properties);
	    } catch (e) {
	        if (e.name !== 'TypeError') {
	            throw e;
	        }
	        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
	        var builder = new Builder();
	        for (var i = 0; i < parts.length; i += 1) {
	            builder.append(parts[i]);
	        }
	        return builder.getBlob(properties.type);
	    }
	}

	// This is CommonJS because lie is an external dependency, so Rollup
	// can just ignore it.
	if (typeof Promise === 'undefined') {
	    // In the "nopromises" build this will just throw if you don't have
	    // a global promise object, but it would throw anyway later.
	    _dereq_(3);
	}
	var Promise$1 = Promise;

	function executeCallback(promise, callback) {
	    if (callback) {
	        promise.then(function (result) {
	            callback(null, result);
	        }, function (error) {
	            callback(error);
	        });
	    }
	}

	function executeTwoCallbacks(promise, callback, errorCallback) {
	    if (typeof callback === 'function') {
	        promise.then(callback);
	    }

	    if (typeof errorCallback === 'function') {
	        promise["catch"](errorCallback);
	    }
	}

	function normalizeKey(key) {
	    // Cast the key to a string, as that's all we can set as a key.
	    if (typeof key !== 'string') {
	        console.warn(key + ' used as a key, but it is not a string.');
	        key = String(key);
	    }

	    return key;
	}

	function getCallback() {
	    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
	        return arguments[arguments.length - 1];
	    }
	}

	// Some code originally from async_storage.js in
	// [Gaia](https://github.com/mozilla-b2g/gaia).

	var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
	var supportsBlobs = void 0;
	var dbContexts = {};
	var toString = Object.prototype.toString;

	// Transaction Modes
	var READ_ONLY = 'readonly';
	var READ_WRITE = 'readwrite';

	// Transform a binary string to an array buffer, because otherwise
	// weird stuff happens when you try to work with the binary string directly.
	// It is known.
	// From http://stackoverflow.com/questions/14967647/ (continues on next line)
	// encode-decode-image-with-base64-breaks-image (2013-04-21)
	function _binStringToArrayBuffer(bin) {
	    var length = bin.length;
	    var buf = new ArrayBuffer(length);
	    var arr = new Uint8Array(buf);
	    for (var i = 0; i < length; i++) {
	        arr[i] = bin.charCodeAt(i);
	    }
	    return buf;
	}

	//
	// Blobs are not supported in all versions of IndexedDB, notably
	// Chrome <37 and Android <5. In those versions, storing a blob will throw.
	//
	// Various other blob bugs exist in Chrome v37-42 (inclusive).
	// Detecting them is expensive and confusing to users, and Chrome 37-42
	// is at very low usage worldwide, so we do a hacky userAgent check instead.
	//
	// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
	// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
	// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
	//
	// Code borrowed from PouchDB. See:
	// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
	//
	function _checkBlobSupportWithoutCaching(idb) {
	    return new Promise$1(function (resolve) {
	        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
	        var blob = createBlob(['']);
	        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

	        txn.onabort = function (e) {
	            // If the transaction aborts now its due to not being able to
	            // write to the database, likely due to the disk being full
	            e.preventDefault();
	            e.stopPropagation();
	            resolve(false);
	        };

	        txn.oncomplete = function () {
	            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
	            var matchedEdge = navigator.userAgent.match(/Edge\//);
	            // MS Edge pretends to be Chrome 42:
	            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
	            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
	        };
	    })["catch"](function () {
	        return false; // error, so assume unsupported
	    });
	}

	function _checkBlobSupport(idb) {
	    if (typeof supportsBlobs === 'boolean') {
	        return Promise$1.resolve(supportsBlobs);
	    }
	    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
	        supportsBlobs = value;
	        return supportsBlobs;
	    });
	}

	function _deferReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Create a deferred object representing the current database operation.
	    var deferredOperation = {};

	    deferredOperation.promise = new Promise$1(function (resolve, reject) {
	        deferredOperation.resolve = resolve;
	        deferredOperation.reject = reject;
	    });

	    // Enqueue the deferred operation.
	    dbContext.deferredOperations.push(deferredOperation);

	    // Chain its promise to the database readiness.
	    if (!dbContext.dbReady) {
	        dbContext.dbReady = deferredOperation.promise;
	    } else {
	        dbContext.dbReady = dbContext.dbReady.then(function () {
	            return deferredOperation.promise;
	        });
	    }
	}

	function _advanceReadiness(dbInfo) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();

	    // Resolve its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.resolve();
	        return deferredOperation.promise;
	    }
	}

	function _rejectReadiness(dbInfo, err) {
	    var dbContext = dbContexts[dbInfo.name];

	    // Dequeue a deferred operation.
	    var deferredOperation = dbContext.deferredOperations.pop();

	    // Reject its promise (which is part of the database readiness
	    // chain of promises).
	    if (deferredOperation) {
	        deferredOperation.reject(err);
	        return deferredOperation.promise;
	    }
	}

	function _getConnection(dbInfo, upgradeNeeded) {
	    return new Promise$1(function (resolve, reject) {
	        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

	        if (dbInfo.db) {
	            if (upgradeNeeded) {
	                _deferReadiness(dbInfo);
	                dbInfo.db.close();
	            } else {
	                return resolve(dbInfo.db);
	            }
	        }

	        var dbArgs = [dbInfo.name];

	        if (upgradeNeeded) {
	            dbArgs.push(dbInfo.version);
	        }

	        var openreq = idb.open.apply(idb, dbArgs);

	        if (upgradeNeeded) {
	            openreq.onupgradeneeded = function (e) {
	                var db = openreq.result;
	                try {
	                    db.createObjectStore(dbInfo.storeName);
	                    if (e.oldVersion <= 1) {
	                        // Added when support for blob shims was added
	                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
	                    }
	                } catch (ex) {
	                    if (ex.name === 'ConstraintError') {
	                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
	                    } else {
	                        throw ex;
	                    }
	                }
	            };
	        }

	        openreq.onerror = function (e) {
	            e.preventDefault();
	            reject(openreq.error);
	        };

	        openreq.onsuccess = function () {
	            var db = openreq.result;
	            db.onversionchange = function (e) {
	                // Triggered when the database is modified (e.g. adding an objectStore) or
	                // deleted (even when initiated by other sessions in different tabs).
	                // Closing the connection here prevents those operations from being blocked.
	                // If the database is accessed again later by this instance, the connection
	                // will be reopened or the database recreated as needed.
	                e.target.close();
	            };
	            resolve(db);
	            _advanceReadiness(dbInfo);
	        };
	    });
	}

	function _getOriginalConnection(dbInfo) {
	    return _getConnection(dbInfo, false);
	}

	function _getUpgradedConnection(dbInfo) {
	    return _getConnection(dbInfo, true);
	}

	function _isUpgradeNeeded(dbInfo, defaultVersion) {
	    if (!dbInfo.db) {
	        return true;
	    }

	    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
	    var isDowngrade = dbInfo.version < dbInfo.db.version;
	    var isUpgrade = dbInfo.version > dbInfo.db.version;

	    if (isDowngrade) {
	        // If the version is not the default one
	        // then warn for impossible downgrade.
	        if (dbInfo.version !== defaultVersion) {
	            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
	        }
	        // Align the versions to prevent errors.
	        dbInfo.version = dbInfo.db.version;
	    }

	    if (isUpgrade || isNewStore) {
	        // If the store is new then increment the version (if needed).
	        // This will trigger an "upgradeneeded" event which is required
	        // for creating a store.
	        if (isNewStore) {
	            var incVersion = dbInfo.db.version + 1;
	            if (incVersion > dbInfo.version) {
	                dbInfo.version = incVersion;
	            }
	        }

	        return true;
	    }

	    return false;
	}

	// encode a blob for indexeddb engines that don't support blobs
	function _encodeBlob(blob) {
	    return new Promise$1(function (resolve, reject) {
	        var reader = new FileReader();
	        reader.onerror = reject;
	        reader.onloadend = function (e) {
	            var base64 = btoa(e.target.result || '');
	            resolve({
	                __local_forage_encoded_blob: true,
	                data: base64,
	                type: blob.type
	            });
	        };
	        reader.readAsBinaryString(blob);
	    });
	}

	// decode an encoded blob
	function _decodeBlob(encodedBlob) {
	    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
	    return createBlob([arrayBuff], { type: encodedBlob.type });
	}

	// is this one of our fancy encoded blobs?
	function _isEncodedBlob(value) {
	    return value && value.__local_forage_encoded_blob;
	}

	// Specialize the default `ready()` function by making it dependent
	// on the current database operations. Thus, the driver will be actually
	// ready when it's been initialized (default) *and* there are no pending
	// operations on the database (initiated by some other instances).
	function _fullyReady(callback) {
	    var self = this;

	    var promise = self._initReady().then(function () {
	        var dbContext = dbContexts[self._dbInfo.name];

	        if (dbContext && dbContext.dbReady) {
	            return dbContext.dbReady;
	        }
	    });

	    executeTwoCallbacks(promise, callback, callback);
	    return promise;
	}

	// Try to establish a new db connection to replace the
	// current one which is broken (i.e. experiencing
	// InvalidStateError while creating a transaction).
	function _tryReconnect(dbInfo) {
	    _deferReadiness(dbInfo);

	    var dbContext = dbContexts[dbInfo.name];
	    var forages = dbContext.forages;

	    for (var i = 0; i < forages.length; i++) {
	        var forage = forages[i];
	        if (forage._dbInfo.db) {
	            forage._dbInfo.db.close();
	            forage._dbInfo.db = null;
	        }
	    }
	    dbInfo.db = null;

	    return _getOriginalConnection(dbInfo).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        // store the latest db reference
	        // in case the db was upgraded
	        dbInfo.db = dbContext.db = db;
	        for (var i = 0; i < forages.length; i++) {
	            forages[i]._dbInfo.db = db;
	        }
	    })["catch"](function (err) {
	        _rejectReadiness(dbInfo, err);
	        throw err;
	    });
	}

	// FF doesn't like Promises (micro-tasks) and IDDB store operations,
	// so we have to do it with callbacks
	function createTransaction(dbInfo, mode, callback, retries) {
	    if (retries === undefined) {
	        retries = 1;
	    }

	    try {
	        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
	        callback(null, tx);
	    } catch (err) {
	        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
	            return Promise$1.resolve().then(function () {
	                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
	                    // increase the db version, to create the new ObjectStore
	                    if (dbInfo.db) {
	                        dbInfo.version = dbInfo.db.version + 1;
	                    }
	                    // Reopen the database for upgrading.
	                    return _getUpgradedConnection(dbInfo);
	                }
	            }).then(function () {
	                return _tryReconnect(dbInfo).then(function () {
	                    createTransaction(dbInfo, mode, callback, retries - 1);
	                });
	            })["catch"](callback);
	        }

	        callback(err);
	    }
	}

	function createDbContext() {
	    return {
	        // Running localForages sharing a database.
	        forages: [],
	        // Shared database.
	        db: null,
	        // Database readiness (promise).
	        dbReady: null,
	        // Deferred operations on the database.
	        deferredOperations: []
	    };
	}

	// Open the IndexedDB database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };

	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }

	    // Get the current context of the database;
	    var dbContext = dbContexts[dbInfo.name];

	    // ...or create a new context.
	    if (!dbContext) {
	        dbContext = createDbContext();
	        // Register the new context in the global container.
	        dbContexts[dbInfo.name] = dbContext;
	    }

	    // Register itself as a running localForage in the current context.
	    dbContext.forages.push(self);

	    // Replace the default `ready()` function with the specialized one.
	    if (!self._initReady) {
	        self._initReady = self.ready;
	        self.ready = _fullyReady;
	    }

	    // Create an array of initialization states of the related localForages.
	    var initPromises = [];

	    function ignoreErrors() {
	        // Don't handle errors here,
	        // just makes sure related localForages aren't pending.
	        return Promise$1.resolve();
	    }

	    for (var j = 0; j < dbContext.forages.length; j++) {
	        var forage = dbContext.forages[j];
	        if (forage !== self) {
	            // Don't wait for itself...
	            initPromises.push(forage._initReady()["catch"](ignoreErrors));
	        }
	    }

	    // Take a snapshot of the related localForages.
	    var forages = dbContext.forages.slice(0);

	    // Initialize the connection process only when
	    // all the related localForages aren't pending.
	    return Promise$1.all(initPromises).then(function () {
	        dbInfo.db = dbContext.db;
	        // Get the connection or open a new one without upgrade.
	        return _getOriginalConnection(dbInfo);
	    }).then(function (db) {
	        dbInfo.db = db;
	        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
	            // Reopen the database for upgrading.
	            return _getUpgradedConnection(dbInfo);
	        }
	        return db;
	    }).then(function (db) {
	        dbInfo.db = dbContext.db = db;
	        self._dbInfo = dbInfo;
	        // Share the final connection amongst related localForages.
	        for (var k = 0; k < forages.length; k++) {
	            var forage = forages[k];
	            if (forage !== self) {
	                // Self is already up-to-date.
	                forage._dbInfo.db = dbInfo.db;
	                forage._dbInfo.version = dbInfo.version;
	            }
	        }
	    });
	}

	function getItem(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.get(key);

	                    req.onsuccess = function () {
	                        var value = req.result;
	                        if (value === undefined) {
	                            value = null;
	                        }
	                        if (_isEncodedBlob(value)) {
	                            value = _decodeBlob(value);
	                        }
	                        resolve(value);
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Iterate over all items stored in database.
	function iterate(iterator, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.openCursor();
	                    var iterationNumber = 1;

	                    req.onsuccess = function () {
	                        var cursor = req.result;

	                        if (cursor) {
	                            var value = cursor.value;
	                            if (_isEncodedBlob(value)) {
	                                value = _decodeBlob(value);
	                            }
	                            var result = iterator(value, cursor.key, iterationNumber++);

	                            // when the iterator callback returns any
	                            // (non-`undefined`) value, then we stop
	                            // the iteration immediately
	                            if (result !== void 0) {
	                                resolve(result);
	                            } else {
	                                cursor["continue"]();
	                            }
	                        } else {
	                            resolve();
	                        }
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);

	    return promise;
	}

	function setItem(key, value, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        var dbInfo;
	        self.ready().then(function () {
	            dbInfo = self._dbInfo;
	            if (toString.call(value) === '[object Blob]') {
	                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
	                    if (blobSupport) {
	                        return value;
	                    }
	                    return _encodeBlob(value);
	                });
	            }
	            return value;
	        }).then(function (value) {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);

	                    // The reason we don't _save_ null is because IE 10 does
	                    // not support saving the `null` type in IndexedDB. How
	                    // ironic, given the bug below!
	                    // See: https://github.com/mozilla/localForage/issues/161
	                    if (value === null) {
	                        value = undefined;
	                    }

	                    var req = store.put(value, key);

	                    transaction.oncomplete = function () {
	                        // Cast to undefined so the value passed to
	                        // callback/promise is the same as what one would get out
	                        // of `getItem()` later. This leads to some weirdness
	                        // (setItem('foo', undefined) will return `null`), but
	                        // it's not my fault localStorage is our baseline and that
	                        // it's weird.
	                        if (value === undefined) {
	                            value = null;
	                        }

	                        resolve(value);
	                    };
	                    transaction.onabort = transaction.onerror = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function removeItem(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    // We use a Grunt task to make this safe for IE and some
	                    // versions of Android (including those used by Cordova).
	                    // Normally IE won't like `.delete()` and will insist on
	                    // using `['delete']()`, but we have a build step that
	                    // fixes this for us now.
	                    var req = store["delete"](key);
	                    transaction.oncomplete = function () {
	                        resolve();
	                    };

	                    transaction.onerror = function () {
	                        reject(req.error);
	                    };

	                    // The request will be also be aborted if we've exceeded our storage
	                    // space.
	                    transaction.onabort = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function clear(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.clear();

	                    transaction.oncomplete = function () {
	                        resolve();
	                    };

	                    transaction.onabort = transaction.onerror = function () {
	                        var err = req.error ? req.error : req.transaction.error;
	                        reject(err);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function length(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.count();

	                    req.onsuccess = function () {
	                        resolve(req.result);
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function key(n, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        if (n < 0) {
	            resolve(null);

	            return;
	        }

	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var advanced = false;
	                    var req = store.openKeyCursor();

	                    req.onsuccess = function () {
	                        var cursor = req.result;
	                        if (!cursor) {
	                            // this means there weren't enough keys
	                            resolve(null);

	                            return;
	                        }

	                        if (n === 0) {
	                            // We have the first key, return it if that's what they
	                            // wanted.
	                            resolve(cursor.key);
	                        } else {
	                            if (!advanced) {
	                                // Otherwise, ask the cursor to skip ahead n
	                                // records.
	                                advanced = true;
	                                cursor.advance(n);
	                            } else {
	                                // When we get here, we've got the nth key.
	                                resolve(cursor.key);
	                            }
	                        }
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
	                if (err) {
	                    return reject(err);
	                }

	                try {
	                    var store = transaction.objectStore(self._dbInfo.storeName);
	                    var req = store.openKeyCursor();
	                    var keys = [];

	                    req.onsuccess = function () {
	                        var cursor = req.result;

	                        if (!cursor) {
	                            resolve(keys);
	                            return;
	                        }

	                        keys.push(cursor.key);
	                        cursor["continue"]();
	                    };

	                    req.onerror = function () {
	                        reject(req.error);
	                    };
	                } catch (e) {
	                    reject(e);
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function dropInstance(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    var currentConfig = this.config();
	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

	        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
	            var dbContext = dbContexts[options.name];
	            var forages = dbContext.forages;
	            dbContext.db = db;
	            for (var i = 0; i < forages.length; i++) {
	                forages[i]._dbInfo.db = db;
	            }
	            return db;
	        });

	        if (!options.storeName) {
	            promise = dbPromise.then(function (db) {
	                _deferReadiness(options);

	                var dbContext = dbContexts[options.name];
	                var forages = dbContext.forages;

	                db.close();
	                for (var i = 0; i < forages.length; i++) {
	                    var forage = forages[i];
	                    forage._dbInfo.db = null;
	                }

	                var dropDBPromise = new Promise$1(function (resolve, reject) {
	                    var req = idb.deleteDatabase(options.name);

	                    req.onerror = function () {
	                        var db = req.result;
	                        if (db) {
	                            db.close();
	                        }
	                        reject(req.error);
	                    };

	                    req.onblocked = function () {
	                        // Closing all open connections in onversionchange handler should prevent this situation, but if
	                        // we do get here, it just means the request remains pending - eventually it will succeed or error
	                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
	                    };

	                    req.onsuccess = function () {
	                        var db = req.result;
	                        if (db) {
	                            db.close();
	                        }
	                        resolve(db);
	                    };
	                });

	                return dropDBPromise.then(function (db) {
	                    dbContext.db = db;
	                    for (var i = 0; i < forages.length; i++) {
	                        var _forage = forages[i];
	                        _advanceReadiness(_forage._dbInfo);
	                    }
	                })["catch"](function (err) {
	                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
	                    throw err;
	                });
	            });
	        } else {
	            promise = dbPromise.then(function (db) {
	                if (!db.objectStoreNames.contains(options.storeName)) {
	                    return;
	                }

	                var newVersion = db.version + 1;

	                _deferReadiness(options);

	                var dbContext = dbContexts[options.name];
	                var forages = dbContext.forages;

	                db.close();
	                for (var i = 0; i < forages.length; i++) {
	                    var forage = forages[i];
	                    forage._dbInfo.db = null;
	                    forage._dbInfo.version = newVersion;
	                }

	                var dropObjectPromise = new Promise$1(function (resolve, reject) {
	                    var req = idb.open(options.name, newVersion);

	                    req.onerror = function (err) {
	                        var db = req.result;
	                        db.close();
	                        reject(err);
	                    };

	                    req.onupgradeneeded = function () {
	                        var db = req.result;
	                        db.deleteObjectStore(options.storeName);
	                    };

	                    req.onsuccess = function () {
	                        var db = req.result;
	                        db.close();
	                        resolve(db);
	                    };
	                });

	                return dropObjectPromise.then(function (db) {
	                    dbContext.db = db;
	                    for (var j = 0; j < forages.length; j++) {
	                        var _forage2 = forages[j];
	                        _forage2._dbInfo.db = db;
	                        _advanceReadiness(_forage2._dbInfo);
	                    }
	                })["catch"](function (err) {
	                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
	                    throw err;
	                });
	            });
	        }
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var asyncStorage = {
	    _driver: 'asyncStorage',
	    _initStorage: _initStorage,
	    _support: isIndexedDBValid(),
	    iterate: iterate,
	    getItem: getItem,
	    setItem: setItem,
	    removeItem: removeItem,
	    clear: clear,
	    length: length,
	    key: key,
	    keys: keys,
	    dropInstance: dropInstance
	};

	function isWebSQLValid() {
	    return typeof openDatabase === 'function';
	}

	// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
	// it to Base64, so this is how we store it to prevent very strange errors with less
	// verbose ways of binary <-> string data storage.
	var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	var BLOB_TYPE_PREFIX = '~~local_forage_type~';
	var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

	var SERIALIZED_MARKER = '__lfsc__:';
	var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

	// OMG the serializations!
	var TYPE_ARRAYBUFFER = 'arbf';
	var TYPE_BLOB = 'blob';
	var TYPE_INT8ARRAY = 'si08';
	var TYPE_UINT8ARRAY = 'ui08';
	var TYPE_UINT8CLAMPEDARRAY = 'uic8';
	var TYPE_INT16ARRAY = 'si16';
	var TYPE_INT32ARRAY = 'si32';
	var TYPE_UINT16ARRAY = 'ur16';
	var TYPE_UINT32ARRAY = 'ui32';
	var TYPE_FLOAT32ARRAY = 'fl32';
	var TYPE_FLOAT64ARRAY = 'fl64';
	var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

	var toString$1 = Object.prototype.toString;

	function stringToBuffer(serializedString) {
	    // Fill the string into a ArrayBuffer.
	    var bufferLength = serializedString.length * 0.75;
	    var len = serializedString.length;
	    var i;
	    var p = 0;
	    var encoded1, encoded2, encoded3, encoded4;

	    if (serializedString[serializedString.length - 1] === '=') {
	        bufferLength--;
	        if (serializedString[serializedString.length - 2] === '=') {
	            bufferLength--;
	        }
	    }

	    var buffer = new ArrayBuffer(bufferLength);
	    var bytes = new Uint8Array(buffer);

	    for (i = 0; i < len; i += 4) {
	        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
	        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
	        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
	        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

	        /*jslint bitwise: true */
	        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	    return buffer;
	}

	// Converts a buffer to a string to store, serialized, in the backend
	// storage library.
	function bufferToString(buffer) {
	    // base64-arraybuffer
	    var bytes = new Uint8Array(buffer);
	    var base64String = '';
	    var i;

	    for (i = 0; i < bytes.length; i += 3) {
	        /*jslint bitwise: true */
	        base64String += BASE_CHARS[bytes[i] >> 2];
	        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	        base64String += BASE_CHARS[bytes[i + 2] & 63];
	    }

	    if (bytes.length % 3 === 2) {
	        base64String = base64String.substring(0, base64String.length - 1) + '=';
	    } else if (bytes.length % 3 === 1) {
	        base64String = base64String.substring(0, base64String.length - 2) + '==';
	    }

	    return base64String;
	}

	// Serialize a value, afterwards executing a callback (which usually
	// instructs the `setItem()` callback/promise to be executed). This is how
	// we store binary data with localStorage.
	function serialize(value, callback) {
	    var valueType = '';
	    if (value) {
	        valueType = toString$1.call(value);
	    }

	    // Cannot use `value instanceof ArrayBuffer` or such here, as these
	    // checks fail when running the tests using casper.js...
	    //
	    // TODO: See why those tests fail and use a better solution.
	    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
	        // Convert binary arrays to a string and prefix the string with
	        // a special marker.
	        var buffer;
	        var marker = SERIALIZED_MARKER;

	        if (value instanceof ArrayBuffer) {
	            buffer = value;
	            marker += TYPE_ARRAYBUFFER;
	        } else {
	            buffer = value.buffer;

	            if (valueType === '[object Int8Array]') {
	                marker += TYPE_INT8ARRAY;
	            } else if (valueType === '[object Uint8Array]') {
	                marker += TYPE_UINT8ARRAY;
	            } else if (valueType === '[object Uint8ClampedArray]') {
	                marker += TYPE_UINT8CLAMPEDARRAY;
	            } else if (valueType === '[object Int16Array]') {
	                marker += TYPE_INT16ARRAY;
	            } else if (valueType === '[object Uint16Array]') {
	                marker += TYPE_UINT16ARRAY;
	            } else if (valueType === '[object Int32Array]') {
	                marker += TYPE_INT32ARRAY;
	            } else if (valueType === '[object Uint32Array]') {
	                marker += TYPE_UINT32ARRAY;
	            } else if (valueType === '[object Float32Array]') {
	                marker += TYPE_FLOAT32ARRAY;
	            } else if (valueType === '[object Float64Array]') {
	                marker += TYPE_FLOAT64ARRAY;
	            } else {
	                callback(new Error('Failed to get type for BinaryArray'));
	            }
	        }

	        callback(marker + bufferToString(buffer));
	    } else if (valueType === '[object Blob]') {
	        // Conver the blob to a binaryArray and then to a string.
	        var fileReader = new FileReader();

	        fileReader.onload = function () {
	            // Backwards-compatible prefix for the blob type.
	            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

	            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
	        };

	        fileReader.readAsArrayBuffer(value);
	    } else {
	        try {
	            callback(JSON.stringify(value));
	        } catch (e) {
	            console.error("Couldn't convert value into a JSON string: ", value);

	            callback(null, e);
	        }
	    }
	}

	// Deserialize data we've inserted into a value column/field. We place
	// special markers into our strings to mark them as encoded; this isn't
	// as nice as a meta field, but it's the only sane thing we can do whilst
	// keeping localStorage support intact.
	//
	// Oftentimes this will just deserialize JSON content, but if we have a
	// special marker (SERIALIZED_MARKER, defined above), we will extract
	// some kind of arraybuffer/binary data/typed array out of the string.
	function deserialize(value) {
	    // If we haven't marked this string as being specially serialized (i.e.
	    // something other than serialized JSON), we can just return it and be
	    // done with it.
	    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
	        return JSON.parse(value);
	    }

	    // The following code deals with deserializing some kind of Blob or
	    // TypedArray. First we separate out the type of data we're dealing
	    // with from the data itself.
	    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
	    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

	    var blobType;
	    // Backwards-compatible blob type serialization strategy.
	    // DBs created with older versions of localForage will simply not have the blob type.
	    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
	        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
	        blobType = matcher[1];
	        serializedString = serializedString.substring(matcher[0].length);
	    }
	    var buffer = stringToBuffer(serializedString);

	    // Return the right type based on the code/type set during
	    // serialization.
	    switch (type) {
	        case TYPE_ARRAYBUFFER:
	            return buffer;
	        case TYPE_BLOB:
	            return createBlob([buffer], { type: blobType });
	        case TYPE_INT8ARRAY:
	            return new Int8Array(buffer);
	        case TYPE_UINT8ARRAY:
	            return new Uint8Array(buffer);
	        case TYPE_UINT8CLAMPEDARRAY:
	            return new Uint8ClampedArray(buffer);
	        case TYPE_INT16ARRAY:
	            return new Int16Array(buffer);
	        case TYPE_UINT16ARRAY:
	            return new Uint16Array(buffer);
	        case TYPE_INT32ARRAY:
	            return new Int32Array(buffer);
	        case TYPE_UINT32ARRAY:
	            return new Uint32Array(buffer);
	        case TYPE_FLOAT32ARRAY:
	            return new Float32Array(buffer);
	        case TYPE_FLOAT64ARRAY:
	            return new Float64Array(buffer);
	        default:
	            throw new Error('Unkown type: ' + type);
	    }
	}

	var localforageSerializer = {
	    serialize: serialize,
	    deserialize: deserialize,
	    stringToBuffer: stringToBuffer,
	    bufferToString: bufferToString
	};

	/*
	 * Includes code from:
	 *
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */

	function createDbTable(t, dbInfo, callback, errorCallback) {
	    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
	}

	// Open the WebSQL database (automatically creates one if one didn't
	// previously exist), using any options set in the config.
	function _initStorage$1(options) {
	    var self = this;
	    var dbInfo = {
	        db: null
	    };

	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
	        }
	    }

	    var dbInfoPromise = new Promise$1(function (resolve, reject) {
	        // Open the database; the openDatabase API will automatically
	        // create it for us if it doesn't exist.
	        try {
	            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
	        } catch (e) {
	            return reject(e);
	        }

	        // Create our key/value table if it doesn't exist.
	        dbInfo.db.transaction(function (t) {
	            createDbTable(t, dbInfo, function () {
	                self._dbInfo = dbInfo;
	                resolve();
	            }, function (t, error) {
	                reject(error);
	            });
	        }, reject);
	    });

	    dbInfo.serializer = localforageSerializer;
	    return dbInfoPromise;
	}

	function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
	    t.executeSql(sqlStatement, args, callback, function (t, error) {
	        if (error.code === error.SYNTAX_ERR) {
	            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
	                if (!results.rows.length) {
	                    // if the table is missing (was deleted)
	                    // re-create it table and retry
	                    createDbTable(t, dbInfo, function () {
	                        t.executeSql(sqlStatement, args, callback, errorCallback);
	                    }, errorCallback);
	                } else {
	                    errorCallback(t, error);
	                }
	            }, errorCallback);
	        } else {
	            errorCallback(t, error);
	        }
	    }, errorCallback);
	}

	function getItem$1(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).value : null;

	                    // Check to see if this is serialized content we need to
	                    // unpack.
	                    if (result) {
	                        result = dbInfo.serializer.deserialize(result);
	                    }

	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function iterate$1(iterator, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;

	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var rows = results.rows;
	                    var length = rows.length;

	                    for (var i = 0; i < length; i++) {
	                        var item = rows.item(i);
	                        var result = item.value;

	                        // Check to see if this is serialized content
	                        // we need to unpack.
	                        if (result) {
	                            result = dbInfo.serializer.deserialize(result);
	                        }

	                        result = iterator(result, item.key, i + 1);

	                        // void(0) prevents problems with redefinition
	                        // of `undefined`.
	                        if (result !== void 0) {
	                            resolve(result);
	                            return;
	                        }
	                    }

	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function _setItem(key, value, callback, retriesLeft) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            // The localStorage API doesn't return undefined values in an
	            // "expected" way, so undefined is always cast to null in all
	            // drivers. See: https://github.com/mozilla/localForage/pull/42
	            if (value === undefined) {
	                value = null;
	            }

	            // Save the original value to pass to the callback.
	            var originalValue = value;

	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    dbInfo.db.transaction(function (t) {
	                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
	                            resolve(originalValue);
	                        }, function (t, error) {
	                            reject(error);
	                        });
	                    }, function (sqlError) {
	                        // The transaction failed; check
	                        // to see if it's a quota error.
	                        if (sqlError.code === sqlError.QUOTA_ERR) {
	                            // We reject the callback outright for now, but
	                            // it's worth trying to re-run the transaction.
	                            // Even if the user accepts the prompt to use
	                            // more storage on Safari, this error will
	                            // be called.
	                            //
	                            // Try to re-run the transaction.
	                            if (retriesLeft > 0) {
	                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
	                                return;
	                            }
	                            reject(sqlError);
	                        }
	                    });
	                }
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function setItem$1(key, value, callback) {
	    return _setItem.apply(this, [key, value, callback, 1]);
	}

	function removeItem$1(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Deletes every item in the table.
	// TODO: Find out if this resets the AUTO_INCREMENT number.
	function clear$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
	                    resolve();
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Does a simple `COUNT(key)` to get the number of items stored in
	// localForage.
	function length$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                // Ahhh, SQL makes this one soooooo easy.
	                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var result = results.rows.item(0).c;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Return the key located at key index X; essentially gets the key from a
	// `WHERE id = ?`. This is the most efficient way I can think to implement
	// this rarely-used (in my experience) part of the API, but it can seem
	// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
	// the ID of each key will change every time it's updated. Perhaps a stored
	// procedure for the `setItem()` SQL would solve this problem?
	// TODO: Don't change ID on `setItem()`.
	function key$1(n, callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
	                    var result = results.rows.length ? results.rows.item(0).key : null;
	                    resolve(result);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys$1(callback) {
	    var self = this;

	    var promise = new Promise$1(function (resolve, reject) {
	        self.ready().then(function () {
	            var dbInfo = self._dbInfo;
	            dbInfo.db.transaction(function (t) {
	                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
	                    var keys = [];

	                    for (var i = 0; i < results.rows.length; i++) {
	                        keys.push(results.rows.item(i).key);
	                    }

	                    resolve(keys);
	                }, function (t, error) {
	                    reject(error);
	                });
	            });
	        })["catch"](reject);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// https://www.w3.org/TR/webdatabase/#databases
	// > There is no way to enumerate or delete the databases available for an origin from this API.
	function getAllStoreNames(db) {
	    return new Promise$1(function (resolve, reject) {
	        db.transaction(function (t) {
	            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
	                var storeNames = [];

	                for (var i = 0; i < results.rows.length; i++) {
	                    storeNames.push(results.rows.item(i).name);
	                }

	                resolve({
	                    db: db,
	                    storeNames: storeNames
	                });
	            }, function (t, error) {
	                reject(error);
	            });
	        }, function (sqlError) {
	            reject(sqlError);
	        });
	    });
	}

	function dropInstance$1(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    var currentConfig = this.config();
	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        promise = new Promise$1(function (resolve) {
	            var db;
	            if (options.name === currentConfig.name) {
	                // use the db reference of the current instance
	                db = self._dbInfo.db;
	            } else {
	                db = openDatabase(options.name, '', '', 0);
	            }

	            if (!options.storeName) {
	                // drop all database tables
	                resolve(getAllStoreNames(db));
	            } else {
	                resolve({
	                    db: db,
	                    storeNames: [options.storeName]
	                });
	            }
	        }).then(function (operationInfo) {
	            return new Promise$1(function (resolve, reject) {
	                operationInfo.db.transaction(function (t) {
	                    function dropTable(storeName) {
	                        return new Promise$1(function (resolve, reject) {
	                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
	                                resolve();
	                            }, function (t, error) {
	                                reject(error);
	                            });
	                        });
	                    }

	                    var operations = [];
	                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
	                        operations.push(dropTable(operationInfo.storeNames[i]));
	                    }

	                    Promise$1.all(operations).then(function () {
	                        resolve();
	                    })["catch"](function (e) {
	                        reject(e);
	                    });
	                }, function (sqlError) {
	                    reject(sqlError);
	                });
	            });
	        });
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var webSQLStorage = {
	    _driver: 'webSQLStorage',
	    _initStorage: _initStorage$1,
	    _support: isWebSQLValid(),
	    iterate: iterate$1,
	    getItem: getItem$1,
	    setItem: setItem$1,
	    removeItem: removeItem$1,
	    clear: clear$1,
	    length: length$1,
	    key: key$1,
	    keys: keys$1,
	    dropInstance: dropInstance$1
	};

	function isLocalStorageValid() {
	    try {
	        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
	        // in IE8 typeof localStorage.setItem === 'object'
	        !!localStorage.setItem;
	    } catch (e) {
	        return false;
	    }
	}

	function _getKeyPrefix(options, defaultConfig) {
	    var keyPrefix = options.name + '/';

	    if (options.storeName !== defaultConfig.storeName) {
	        keyPrefix += options.storeName + '/';
	    }
	    return keyPrefix;
	}

	// Check if localStorage throws when saving an item
	function checkIfLocalStorageThrows() {
	    var localStorageTestKey = '_localforage_support_test';

	    try {
	        localStorage.setItem(localStorageTestKey, true);
	        localStorage.removeItem(localStorageTestKey);

	        return false;
	    } catch (e) {
	        return true;
	    }
	}

	// Check if localStorage is usable and allows to save an item
	// This method checks if localStorage is usable in Safari Private Browsing
	// mode, or in any other case where the available quota for localStorage
	// is 0 and there wasn't any saved items yet.
	function _isLocalStorageUsable() {
	    return !checkIfLocalStorageThrows() || localStorage.length > 0;
	}

	// Config the localStorage backend, using options set in the config.
	function _initStorage$2(options) {
	    var self = this;
	    var dbInfo = {};
	    if (options) {
	        for (var i in options) {
	            dbInfo[i] = options[i];
	        }
	    }

	    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

	    if (!_isLocalStorageUsable()) {
	        return Promise$1.reject();
	    }

	    self._dbInfo = dbInfo;
	    dbInfo.serializer = localforageSerializer;

	    return Promise$1.resolve();
	}

	// Remove all keys from the datastore, effectively destroying all data in
	// the app's key/value store!
	function clear$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var keyPrefix = self._dbInfo.keyPrefix;

	        for (var i = localStorage.length - 1; i >= 0; i--) {
	            var key = localStorage.key(i);

	            if (key.indexOf(keyPrefix) === 0) {
	                localStorage.removeItem(key);
	            }
	        }
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Retrieve an item from the store. Unlike the original async_storage
	// library in Gaia, we don't modify return values at all. If a key's value
	// is `undefined`, we pass that value to the callback function.
	function getItem$2(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result = localStorage.getItem(dbInfo.keyPrefix + key);

	        // If a result was found, parse it from the serialized
	        // string into a JS object. If result isn't truthy, the key
	        // is likely undefined and we'll pass it straight to the
	        // callback.
	        if (result) {
	            result = dbInfo.serializer.deserialize(result);
	        }

	        return result;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Iterate over all items in the store.
	function iterate$2(iterator, callback) {
	    var self = this;

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var keyPrefix = dbInfo.keyPrefix;
	        var keyPrefixLength = keyPrefix.length;
	        var length = localStorage.length;

	        // We use a dedicated iterator instead of the `i` variable below
	        // so other keys we fetch in localStorage aren't counted in
	        // the `iterationNumber` argument passed to the `iterate()`
	        // callback.
	        //
	        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
	        var iterationNumber = 1;

	        for (var i = 0; i < length; i++) {
	            var key = localStorage.key(i);
	            if (key.indexOf(keyPrefix) !== 0) {
	                continue;
	            }
	            var value = localStorage.getItem(key);

	            // If a result was found, parse it from the serialized
	            // string into a JS object. If result isn't truthy, the
	            // key is likely undefined and we'll pass it straight
	            // to the iterator.
	            if (value) {
	                value = dbInfo.serializer.deserialize(value);
	            }

	            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

	            if (value !== void 0) {
	                return value;
	            }
	        }
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Same as localStorage's key() method, except takes a callback.
	function key$2(n, callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var result;
	        try {
	            result = localStorage.key(n);
	        } catch (error) {
	            result = null;
	        }

	        // Remove the prefix from the key, if a key is found.
	        if (result) {
	            result = result.substring(dbInfo.keyPrefix.length);
	        }

	        return result;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function keys$2(callback) {
	    var self = this;
	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        var length = localStorage.length;
	        var keys = [];

	        for (var i = 0; i < length; i++) {
	            var itemKey = localStorage.key(i);
	            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
	                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
	            }
	        }

	        return keys;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Supply the number of keys in the datastore to the callback function.
	function length$2(callback) {
	    var self = this;
	    var promise = self.keys().then(function (keys) {
	        return keys.length;
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Remove an item from the store, nice and simple.
	function removeItem$2(key, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        var dbInfo = self._dbInfo;
	        localStorage.removeItem(dbInfo.keyPrefix + key);
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	// Set a key's value and run an optional callback once the value is set.
	// Unlike Gaia's implementation, the callback function is passed the value,
	// in case you want to operate on that value only after you're sure it
	// saved, or something like that.
	function setItem$2(key, value, callback) {
	    var self = this;

	    key = normalizeKey(key);

	    var promise = self.ready().then(function () {
	        // Convert undefined values to null.
	        // https://github.com/mozilla/localForage/pull/42
	        if (value === undefined) {
	            value = null;
	        }

	        // Save the original value to pass to the callback.
	        var originalValue = value;

	        return new Promise$1(function (resolve, reject) {
	            var dbInfo = self._dbInfo;
	            dbInfo.serializer.serialize(value, function (value, error) {
	                if (error) {
	                    reject(error);
	                } else {
	                    try {
	                        localStorage.setItem(dbInfo.keyPrefix + key, value);
	                        resolve(originalValue);
	                    } catch (e) {
	                        // localStorage capacity exceeded.
	                        // TODO: Make this a specific error/event.
	                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
	                            reject(e);
	                        }
	                        reject(e);
	                    }
	                }
	            });
	        });
	    });

	    executeCallback(promise, callback);
	    return promise;
	}

	function dropInstance$2(options, callback) {
	    callback = getCallback.apply(this, arguments);

	    options = typeof options !== 'function' && options || {};
	    if (!options.name) {
	        var currentConfig = this.config();
	        options.name = options.name || currentConfig.name;
	        options.storeName = options.storeName || currentConfig.storeName;
	    }

	    var self = this;
	    var promise;
	    if (!options.name) {
	        promise = Promise$1.reject('Invalid arguments');
	    } else {
	        promise = new Promise$1(function (resolve) {
	            if (!options.storeName) {
	                resolve(options.name + '/');
	            } else {
	                resolve(_getKeyPrefix(options, self._defaultConfig));
	            }
	        }).then(function (keyPrefix) {
	            for (var i = localStorage.length - 1; i >= 0; i--) {
	                var key = localStorage.key(i);

	                if (key.indexOf(keyPrefix) === 0) {
	                    localStorage.removeItem(key);
	                }
	            }
	        });
	    }

	    executeCallback(promise, callback);
	    return promise;
	}

	var localStorageWrapper = {
	    _driver: 'localStorageWrapper',
	    _initStorage: _initStorage$2,
	    _support: isLocalStorageValid(),
	    iterate: iterate$2,
	    getItem: getItem$2,
	    setItem: setItem$2,
	    removeItem: removeItem$2,
	    clear: clear$2,
	    length: length$2,
	    key: key$2,
	    keys: keys$2,
	    dropInstance: dropInstance$2
	};

	var sameValue = function sameValue(x, y) {
	    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
	};

	var includes = function includes(array, searchElement) {
	    var len = array.length;
	    var i = 0;
	    while (i < len) {
	        if (sameValue(array[i], searchElement)) {
	            return true;
	        }
	        i++;
	    }

	    return false;
	};

	var isArray = Array.isArray || function (arg) {
	    return Object.prototype.toString.call(arg) === '[object Array]';
	};

	// Drivers are stored here when `defineDriver()` is called.
	// They are shared across all instances of localForage.
	var DefinedDrivers = {};

	var DriverSupport = {};

	var DefaultDrivers = {
	    INDEXEDDB: asyncStorage,
	    WEBSQL: webSQLStorage,
	    LOCALSTORAGE: localStorageWrapper
	};

	var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

	var OptionalDriverMethods = ['dropInstance'];

	var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

	var DefaultConfig = {
	    description: '',
	    driver: DefaultDriverOrder.slice(),
	    name: 'localforage',
	    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
	    // we can use without a prompt.
	    size: 4980736,
	    storeName: 'keyvaluepairs',
	    version: 1.0
	};

	function callWhenReady(localForageInstance, libraryMethod) {
	    localForageInstance[libraryMethod] = function () {
	        var _args = arguments;
	        return localForageInstance.ready().then(function () {
	            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
	        });
	    };
	}

	function extend() {
	    for (var i = 1; i < arguments.length; i++) {
	        var arg = arguments[i];

	        if (arg) {
	            for (var _key in arg) {
	                if (arg.hasOwnProperty(_key)) {
	                    if (isArray(arg[_key])) {
	                        arguments[0][_key] = arg[_key].slice();
	                    } else {
	                        arguments[0][_key] = arg[_key];
	                    }
	                }
	            }
	        }
	    }

	    return arguments[0];
	}

	var LocalForage = function () {
	    function LocalForage(options) {
	        _classCallCheck(this, LocalForage);

	        for (var driverTypeKey in DefaultDrivers) {
	            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
	                var driver = DefaultDrivers[driverTypeKey];
	                var driverName = driver._driver;
	                this[driverTypeKey] = driverName;

	                if (!DefinedDrivers[driverName]) {
	                    // we don't need to wait for the promise,
	                    // since the default drivers can be defined
	                    // in a blocking manner
	                    this.defineDriver(driver);
	                }
	            }
	        }

	        this._defaultConfig = extend({}, DefaultConfig);
	        this._config = extend({}, this._defaultConfig, options);
	        this._driverSet = null;
	        this._initDriver = null;
	        this._ready = false;
	        this._dbInfo = null;

	        this._wrapLibraryMethodsWithReady();
	        this.setDriver(this._config.driver)["catch"](function () {});
	    }

	    // Set any config values for localForage; can be called anytime before
	    // the first API call (e.g. `getItem`, `setItem`).
	    // We loop through options so we don't overwrite existing config
	    // values.


	    LocalForage.prototype.config = function config(options) {
	        // If the options argument is an object, we use it to set values.
	        // Otherwise, we return either a specified config value or all
	        // config values.
	        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	            // If localforage is ready and fully initialized, we can't set
	            // any new configuration values. Instead, we return an error.
	            if (this._ready) {
	                return new Error("Can't call config() after localforage " + 'has been used.');
	            }

	            for (var i in options) {
	                if (i === 'storeName') {
	                    options[i] = options[i].replace(/\W/g, '_');
	                }

	                if (i === 'version' && typeof options[i] !== 'number') {
	                    return new Error('Database version must be a number.');
	                }

	                this._config[i] = options[i];
	            }

	            // after all config options are set and
	            // the driver option is used, try setting it
	            if ('driver' in options && options.driver) {
	                return this.setDriver(this._config.driver);
	            }

	            return true;
	        } else if (typeof options === 'string') {
	            return this._config[options];
	        } else {
	            return this._config;
	        }
	    };

	    // Used to define a custom driver, shared across all instances of
	    // localForage.


	    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
	        var promise = new Promise$1(function (resolve, reject) {
	            try {
	                var driverName = driverObject._driver;
	                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

	                // A driver name should be defined and not overlap with the
	                // library-defined, default drivers.
	                if (!driverObject._driver) {
	                    reject(complianceError);
	                    return;
	                }

	                var driverMethods = LibraryMethods.concat('_initStorage');
	                for (var i = 0, len = driverMethods.length; i < len; i++) {
	                    var driverMethodName = driverMethods[i];

	                    // when the property is there,
	                    // it should be a method even when optional
	                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
	                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
	                        reject(complianceError);
	                        return;
	                    }
	                }

	                var configureMissingMethods = function configureMissingMethods() {
	                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
	                        return function () {
	                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
	                            var promise = Promise$1.reject(error);
	                            executeCallback(promise, arguments[arguments.length - 1]);
	                            return promise;
	                        };
	                    };

	                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
	                        var optionalDriverMethod = OptionalDriverMethods[_i];
	                        if (!driverObject[optionalDriverMethod]) {
	                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
	                        }
	                    }
	                };

	                configureMissingMethods();

	                var setDriverSupport = function setDriverSupport(support) {
	                    if (DefinedDrivers[driverName]) {
	                        console.info('Redefining LocalForage driver: ' + driverName);
	                    }
	                    DefinedDrivers[driverName] = driverObject;
	                    DriverSupport[driverName] = support;
	                    // don't use a then, so that we can define
	                    // drivers that have simple _support methods
	                    // in a blocking manner
	                    resolve();
	                };

	                if ('_support' in driverObject) {
	                    if (driverObject._support && typeof driverObject._support === 'function') {
	                        driverObject._support().then(setDriverSupport, reject);
	                    } else {
	                        setDriverSupport(!!driverObject._support);
	                    }
	                } else {
	                    setDriverSupport(true);
	                }
	            } catch (e) {
	                reject(e);
	            }
	        });

	        executeTwoCallbacks(promise, callback, errorCallback);
	        return promise;
	    };

	    LocalForage.prototype.driver = function driver() {
	        return this._driver || null;
	    };

	    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
	        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

	        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
	        return getDriverPromise;
	    };

	    LocalForage.prototype.getSerializer = function getSerializer(callback) {
	        var serializerPromise = Promise$1.resolve(localforageSerializer);
	        executeTwoCallbacks(serializerPromise, callback);
	        return serializerPromise;
	    };

	    LocalForage.prototype.ready = function ready(callback) {
	        var self = this;

	        var promise = self._driverSet.then(function () {
	            if (self._ready === null) {
	                self._ready = self._initDriver();
	            }

	            return self._ready;
	        });

	        executeTwoCallbacks(promise, callback, callback);
	        return promise;
	    };

	    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
	        var self = this;

	        if (!isArray(drivers)) {
	            drivers = [drivers];
	        }

	        var supportedDrivers = this._getSupportedDrivers(drivers);

	        function setDriverToConfig() {
	            self._config.driver = self.driver();
	        }

	        function extendSelfWithDriver(driver) {
	            self._extend(driver);
	            setDriverToConfig();

	            self._ready = self._initStorage(self._config);
	            return self._ready;
	        }

	        function initDriver(supportedDrivers) {
	            return function () {
	                var currentDriverIndex = 0;

	                function driverPromiseLoop() {
	                    while (currentDriverIndex < supportedDrivers.length) {
	                        var driverName = supportedDrivers[currentDriverIndex];
	                        currentDriverIndex++;

	                        self._dbInfo = null;
	                        self._ready = null;

	                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
	                    }

	                    setDriverToConfig();
	                    var error = new Error('No available storage method found.');
	                    self._driverSet = Promise$1.reject(error);
	                    return self._driverSet;
	                }

	                return driverPromiseLoop();
	            };
	        }

	        // There might be a driver initialization in progress
	        // so wait for it to finish in order to avoid a possible
	        // race condition to set _dbInfo
	        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
	            return Promise$1.resolve();
	        }) : Promise$1.resolve();

	        this._driverSet = oldDriverSetDone.then(function () {
	            var driverName = supportedDrivers[0];
	            self._dbInfo = null;
	            self._ready = null;

	            return self.getDriver(driverName).then(function (driver) {
	                self._driver = driver._driver;
	                setDriverToConfig();
	                self._wrapLibraryMethodsWithReady();
	                self._initDriver = initDriver(supportedDrivers);
	            });
	        })["catch"](function () {
	            setDriverToConfig();
	            var error = new Error('No available storage method found.');
	            self._driverSet = Promise$1.reject(error);
	            return self._driverSet;
	        });

	        executeTwoCallbacks(this._driverSet, callback, errorCallback);
	        return this._driverSet;
	    };

	    LocalForage.prototype.supports = function supports(driverName) {
	        return !!DriverSupport[driverName];
	    };

	    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
	        extend(this, libraryMethodsAndProperties);
	    };

	    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
	        var supportedDrivers = [];
	        for (var i = 0, len = drivers.length; i < len; i++) {
	            var driverName = drivers[i];
	            if (this.supports(driverName)) {
	                supportedDrivers.push(driverName);
	            }
	        }
	        return supportedDrivers;
	    };

	    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
	        // Add a stub for each driver API method that delays the call to the
	        // corresponding driver method until localForage is ready. These stubs
	        // will be replaced by the driver methods as soon as the driver is
	        // loaded, so there is no performance impact.
	        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
	            callWhenReady(this, LibraryMethods[i]);
	        }
	    };

	    LocalForage.prototype.createInstance = function createInstance(options) {
	        return new LocalForage(options);
	    };

	    return LocalForage;
	}();

	// The actual localForage object that we expose as a module or via a
	// global. It's extended by pulling in one of our other libraries.


	var localforage_js = new LocalForage();

	module.exports = localforage_js;

	},{"3":3}]},{},[4])(4)
	}); 
} (localforage$1));

var localforageExports = localforage$1.exports;
var localforage = /*@__PURE__*/getDefaultExportFromCjs(localforageExports);

const STORAGE_KEY = 'protondb-badges-cache';
localforage.config({
    name: STORAGE_KEY
});
async function updateCache(appId, newData) {
    const oldCache = await localforage.getItem(appId);
    const newCache = { ...oldCache, ...newData };
    await localforage.setItem(appId, newCache);
    return newCache;
}
function clearCache$t(appId) {
    {
        localforage.clear();
    }
}
async function getCache(appId) {
    const data = await localforage.getItem(appId);
    return data;
}

var sectionLibrary$s = "Library";
var sectionStore$s = "Store";
var sectionLinks$s = "Links";
var badgePosition$s = "Позиция на значката";
var badgePositionDescription$s = "Позиционирайте значката в заглавието на страницата на играта";
var badgeSize$s = "Размер на значката";
var badgeSizeDescription$s = "Изберете различен размер за значката";
var caching$s = "Кеширане";
var clearCache$s = "Изчистване на ProtonDB кеша";
var clearCacheLabel$s = "Изчистете кеша, за да принудите опресняване на всички ProtonDB значки";
var expandOnHover$s = "Разширяване на етикета при задържане";
var expandOnHoverDescription$s = "Само минималистичен. Показване на текста на значката при фокусиране";
var positionTopLeft$s = "Горе вляво";
var positionTopRight$s = "Горе вдясно";
var positionBottomLeft$s = "Bottom Left";
var positionBottomMiddle$s = "Bottom Middle";
var positionBottomRight$s = "Bottom Right";
var positionTopMiddle$s = "Горе в центъра";
var settings$s = "Настройки";
var sizeMinimalist$s = "Минималистичен";
var sizeRegular$s = "Обикновен";
var sizeSmall$s = "Малък";
var tierborked$s = "НЕРАБОТЕЩИ";
var tierbronze$s = "БРОНЗ";
var tiergold$s = "ЗЛАТО";
var tierMinborked$s = "BORK";
var tierMinbronze$s = "BRON";
var tierMingold$s = "GOLD";
var tierMinpending$s = "PEND";
var tierMinplatinum$s = "PLAT";
var tierMinsilver$s = "SILV";
var tierpending$s = "PENDING";
var tierplatinum$s = "ПЛАТИНА";
var tiersilver$s = "СРЕБРО";
var expandOnHoverOff$s = "Изключено";
var submit$s = "ИЗПРАЩАНЕ";
var login$s = "Вход";
var loading$s = "...";
var noReport$s = "НЯМА ДОКЛАД";
var disableSubmit$s = "Деактивиране на изпращането";
var disableSubmitDesc$s = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$s = "Enable Badge on Library";
var enableLibraryBadgeDesc$s = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$s = "Активиране на значката в страниците на магазина";
var enableStoreBadgeDesc$s = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$s = "Store Badge Position";
var storeBadgePositionDesc$s = "Position the badge overlay on store pages";
var storePositionBottomCenter$s = "Bottom Center";
var storePositionBottomLeft$s = "Bottom Left";
var storePositionBottomRight$s = "Bottom Right";
var storePositionTopMiddle$s = "Top Right";
var helpButton$s = "Инструкции";
var helpTitle$s = "ProtonDB Badges - Помощ";
var helpToc$s = "Към раздел";
var helpClose$s = "Затвори";
var helpAboutTitle$s = "За този плъгин";
var helpAboutDesc$s = "ProtonDB Badges показва рейтингите за съвместимост на ProtonDB директно на вашия Steam Deck. Вижте с един поглед колко добре работят игрите на Linux/Proton, без да напускате интерфейса на Steam.";
var helpUsingTitle$s = "Използване на плъгина";
var helpBadgeTiers$s = "Нива на значките:";
var helpTierPlatinum$s = "Работи перфектно без настройка";
var helpTierGold$s = "Работи перфектно след настройки";
var helpTierSilver$s = "Работи с малки проблеми";
var helpTierBronze$s = "Работи, но често се срива или има проблеми";
var helpTierBorked$s = "Не работи или е неиграема";
var helpTierPending$s = "Има доклади, но все още не е оценена";
var helpTierNoReport$s = "Все още няма доклади - бъдете първият!";
var helpSettingsExplain$s = "Обяснение на настройките:";
var helpSettingSize$s = "Размер на значката";
var helpSettingSizeDesc$s = "Обикновен (пълен размер), Малък (компактен) или Минималистичен (само икона)";
var helpSettingPosition$s = "Позиция на значката";
var helpSettingPositionDesc$s = "Къде се появява значката на страниците на игрите";
var helpSettingSubmit$s = "Деактивиране на изпращането";
var helpSettingSubmitDesc$s = "Скрий бутона за изпращане на доклади към ProtonDB";
var helpProtonDBTitle$s = "Добавяне на Steam Deck в ProtonDB";
var helpProtonDBDesc$s = "За да изпращате доклади от вашия Steam Deck, трябва да го регистрирате като устройство в ProtonDB. Това изисква режим на работния плот.";
var helpProtonDBSteps$s = "Стъпки за регистрация:";
var helpStep1$s = "Превключете към режим на работния плот (задръжте бутона за захранване → Превключи към работен плот)";
var helpStep2$s = "Отворете уеб браузър (Firefox или Chrome)";
var helpStep3$s = "Отидете на protondb.com и влезте с вашия Steam акаунт";
var helpStep4$s = "Щракнете върху иконата на профила си горе вдясно";
var helpStep5$s = "Отидете на 'My Rigs' и щракнете върху 'Add a Rig'";
var helpStep6$s = "Изберете 'Steam Deck' като тип устройство и запазете";
var helpTip$s = "Съвет";
var helpTipContent$s = "След регистрация на Steam Deck можете да изпращате доклади директно от режим на игра, като използвате бутона Изпрати на значките.";
var helpSubmitTitle$s = "Изпращане на доклади за игри";
var helpSubmitDesc$s = "Помогнете на общността, като споделите вашето игрово преживяване! Докладите помагат на другите да знаят какво да очакват.";
var helpSubmitStep1$s = "Играйте игра поне 15-30 минути";
var helpSubmitStep2$s = "Щракнете върху бутона Изпрати на значката ProtonDB";
var helpSubmitStep3$s = "Попълнете формата за доклад на уебсайта на ProtonDB";
var bg = {
	sectionLibrary: sectionLibrary$s,
	sectionStore: sectionStore$s,
	sectionLinks: sectionLinks$s,
	badgePosition: badgePosition$s,
	badgePositionDescription: badgePositionDescription$s,
	badgeSize: badgeSize$s,
	badgeSizeDescription: badgeSizeDescription$s,
	caching: caching$s,
	clearCache: clearCache$s,
	clearCacheLabel: clearCacheLabel$s,
	expandOnHover: expandOnHover$s,
	expandOnHoverDescription: expandOnHoverDescription$s,
	positionTopLeft: positionTopLeft$s,
	positionTopRight: positionTopRight$s,
	positionBottomLeft: positionBottomLeft$s,
	positionBottomMiddle: positionBottomMiddle$s,
	positionBottomRight: positionBottomRight$s,
	positionTopMiddle: positionTopMiddle$s,
	settings: settings$s,
	sizeMinimalist: sizeMinimalist$s,
	sizeRegular: sizeRegular$s,
	sizeSmall: sizeSmall$s,
	tierborked: tierborked$s,
	tierbronze: tierbronze$s,
	tiergold: tiergold$s,
	tierMinborked: tierMinborked$s,
	tierMinbronze: tierMinbronze$s,
	tierMingold: tierMingold$s,
	tierMinpending: tierMinpending$s,
	tierMinplatinum: tierMinplatinum$s,
	tierMinsilver: tierMinsilver$s,
	tierpending: tierpending$s,
	tierplatinum: tierplatinum$s,
	tiersilver: tiersilver$s,
	expandOnHoverOff: expandOnHoverOff$s,
	submit: submit$s,
	login: login$s,
	loading: loading$s,
	noReport: noReport$s,
	disableSubmit: disableSubmit$s,
	disableSubmitDesc: disableSubmitDesc$s,
	enableLibraryBadge: enableLibraryBadge$s,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$s,
	enableStoreBadge: enableStoreBadge$s,
	enableStoreBadgeDesc: enableStoreBadgeDesc$s,
	storeBadgePosition: storeBadgePosition$s,
	storeBadgePositionDesc: storeBadgePositionDesc$s,
	storePositionBottomCenter: storePositionBottomCenter$s,
	storePositionBottomLeft: storePositionBottomLeft$s,
	storePositionBottomRight: storePositionBottomRight$s,
	storePositionTopMiddle: storePositionTopMiddle$s,
	helpButton: helpButton$s,
	helpTitle: helpTitle$s,
	helpToc: helpToc$s,
	helpClose: helpClose$s,
	helpAboutTitle: helpAboutTitle$s,
	helpAboutDesc: helpAboutDesc$s,
	helpUsingTitle: helpUsingTitle$s,
	helpBadgeTiers: helpBadgeTiers$s,
	helpTierPlatinum: helpTierPlatinum$s,
	helpTierGold: helpTierGold$s,
	helpTierSilver: helpTierSilver$s,
	helpTierBronze: helpTierBronze$s,
	helpTierBorked: helpTierBorked$s,
	helpTierPending: helpTierPending$s,
	helpTierNoReport: helpTierNoReport$s,
	helpSettingsExplain: helpSettingsExplain$s,
	helpSettingSize: helpSettingSize$s,
	helpSettingSizeDesc: helpSettingSizeDesc$s,
	helpSettingPosition: helpSettingPosition$s,
	helpSettingPositionDesc: helpSettingPositionDesc$s,
	helpSettingSubmit: helpSettingSubmit$s,
	helpSettingSubmitDesc: helpSettingSubmitDesc$s,
	helpProtonDBTitle: helpProtonDBTitle$s,
	helpProtonDBDesc: helpProtonDBDesc$s,
	helpProtonDBSteps: helpProtonDBSteps$s,
	helpStep1: helpStep1$s,
	helpStep2: helpStep2$s,
	helpStep3: helpStep3$s,
	helpStep4: helpStep4$s,
	helpStep5: helpStep5$s,
	helpStep6: helpStep6$s,
	helpTip: helpTip$s,
	helpTipContent: helpTipContent$s,
	helpSubmitTitle: helpSubmitTitle$s,
	helpSubmitDesc: helpSubmitDesc$s,
	helpSubmitStep1: helpSubmitStep1$s,
	helpSubmitStep2: helpSubmitStep2$s,
	helpSubmitStep3: helpSubmitStep3$s
};

var sectionLibrary$r = "Library";
var sectionStore$r = "Store";
var sectionLinks$r = "Links";
var badgePosition$r = "Pozice Odznaku";
var badgePositionDescription$r = "Umístění odznaku v záhlaví herní stránky";
var badgeSize$r = "Velikost Odznaku";
var badgeSizeDescription$r = "Vyberte jinou velikost odznaku";
var caching$r = "Cachování";
var clearCache$r = "Smazat ProtonDB Cache";
var clearCacheLabel$r = "Vymažte cache pro vynucenou aktualizaci všech ProtonDB odznaků";
var expandOnHover$r = "Rozbalit Štítek při přejetí";
var expandOnHoverDescription$r = "Pouze minimalistický. Zobrazit text odznaku při zaměření";
var positionTopLeft$r = "Vlevo nahoře";
var positionTopRight$r = "Vpravo nahoře";
var positionBottomLeft$r = "Bottom Left";
var positionBottomMiddle$r = "Bottom Middle";
var positionBottomRight$r = "Bottom Right";
var positionTopMiddle$r = "Nahoře uprostřed";
var settings$r = "Nastavení";
var sizeMinimalist$r = "Minimalistický";
var sizeRegular$r = "Běžný";
var sizeSmall$r = "Malý";
var tierborked$r = "NEFUNKČNÍ";
var tierbronze$r = "BRONZ";
var tiergold$r = "ZLATO";
var tierMinborked$r = "BORK";
var tierMinbronze$r = "BRON";
var tierMingold$r = "GOLD";
var tierMinpending$r = "PEND";
var tierMinplatinum$r = "PLAT";
var tierMinsilver$r = "SILV";
var tierpending$r = "ČEKÁ";
var tierplatinum$r = "PLATINA";
var tiersilver$r = "STŘÍBRO";
var expandOnHoverOff$r = "Vypnuto";
var submit$r = "ODESLAT";
var login$r = "Přihlášení";
var loading$r = "...";
var noReport$r = "ŽÁDNÉ HLÁŠENÍ";
var disableSubmit$r = "Zakázat odeslání";
var disableSubmitDesc$r = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$r = "Enable Badge on Library";
var enableLibraryBadgeDesc$r = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$r = "Povolit odznak na stránkách obchodu";
var enableStoreBadgeDesc$r = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$r = "Store Badge Position";
var storeBadgePositionDesc$r = "Position the badge overlay on store pages";
var storePositionBottomCenter$r = "Bottom Center";
var storePositionBottomLeft$r = "Bottom Left";
var storePositionBottomRight$r = "Bottom Right";
var storePositionTopMiddle$r = "Top Right";
var helpButton$r = "Pokyny";
var helpTitle$r = "ProtonDB Badges - Nápověda";
var helpToc$r = "Přejít na sekci";
var helpClose$r = "Zavřít";
var helpAboutTitle$r = "O tomto pluginu";
var helpAboutDesc$r = "ProtonDB Badges zobrazuje hodnocení kompatibility ProtonDB přímo na vašem Steam Decku. Na první pohled vidíte, jak dobře hry běží na Linux/Proton, aniž byste opustili rozhraní Steam.";
var helpUsingTitle$r = "Používání pluginu";
var helpBadgeTiers$r = "Úrovně odznaků:";
var helpTierPlatinum$r = "Běží perfektně bez konfigurace";
var helpTierGold$r = "Běží perfektně po úpravách";
var helpTierSilver$r = "Běží s drobnými problémy";
var helpTierBronze$r = "Běží, ale často padá nebo má problémy";
var helpTierBorked$r = "Neběží nebo je nehratelné";
var helpTierPending$r = "Má hlášení, ale zatím nehodnoceno";
var helpTierNoReport$r = "Zatím žádná hlášení - buďte první!";
var helpSettingsExplain$r = "Vysvětlení nastavení:";
var helpSettingSize$r = "Velikost odznaku";
var helpSettingSizeDesc$r = "Běžný (plná velikost), Malý (kompaktní) nebo Minimalistický (pouze ikona)";
var helpSettingPosition$r = "Pozice odznaku";
var helpSettingPositionDesc$r = "Kde se odznak zobrazuje na stránkách her";
var helpSettingSubmit$r = "Zakázat odeslání";
var helpSettingSubmitDesc$r = "Skrýt tlačítko pro odesílání hlášení na ProtonDB";
var helpProtonDBTitle$r = "Přidání Steam Decku na ProtonDB";
var helpProtonDBDesc$r = "Pro odesílání hlášení ze Steam Decku ho musíte zaregistrovat jako zařízení na ProtonDB. To vyžaduje režim plochy.";
var helpProtonDBSteps$r = "Kroky k registraci:";
var helpStep1$r = "Přepněte do režimu plochy (podržte tlačítko napájení → Přepnout na plochu)";
var helpStep2$r = "Otevřete webový prohlížeč (Firefox nebo Chrome)";
var helpStep3$r = "Přejděte na protondb.com a přihlaste se svým Steam účtem";
var helpStep4$r = "Klikněte na ikonu profilu vpravo nahoře";
var helpStep5$r = "Přejděte na 'My Rigs' a klikněte na 'Add a Rig'";
var helpStep6$r = "Vyberte 'Steam Deck' jako typ zařízení a uložte";
var helpTip$r = "Tip";
var helpTipContent$r = "Po registraci Steam Decku můžete odesílat hlášení přímo z herního režimu pomocí tlačítka Odeslat na odznacích.";
var helpSubmitTitle$r = "Odesílání herních hlášení";
var helpSubmitDesc$r = "Pomozte komunitě sdílením vašeho herního zážitku! Hlášení pomáhají ostatním vědět, co očekávat.";
var helpSubmitStep1$r = "Hrajte hru alespoň 15-30 minut";
var helpSubmitStep2$r = "Klikněte na tlačítko Odeslat na odznaku ProtonDB";
var helpSubmitStep3$r = "Vyplňte formulář hlášení na webu ProtonDB";
var cs = {
	sectionLibrary: sectionLibrary$r,
	sectionStore: sectionStore$r,
	sectionLinks: sectionLinks$r,
	badgePosition: badgePosition$r,
	badgePositionDescription: badgePositionDescription$r,
	badgeSize: badgeSize$r,
	badgeSizeDescription: badgeSizeDescription$r,
	caching: caching$r,
	clearCache: clearCache$r,
	clearCacheLabel: clearCacheLabel$r,
	expandOnHover: expandOnHover$r,
	expandOnHoverDescription: expandOnHoverDescription$r,
	positionTopLeft: positionTopLeft$r,
	positionTopRight: positionTopRight$r,
	positionBottomLeft: positionBottomLeft$r,
	positionBottomMiddle: positionBottomMiddle$r,
	positionBottomRight: positionBottomRight$r,
	positionTopMiddle: positionTopMiddle$r,
	settings: settings$r,
	sizeMinimalist: sizeMinimalist$r,
	sizeRegular: sizeRegular$r,
	sizeSmall: sizeSmall$r,
	tierborked: tierborked$r,
	tierbronze: tierbronze$r,
	tiergold: tiergold$r,
	tierMinborked: tierMinborked$r,
	tierMinbronze: tierMinbronze$r,
	tierMingold: tierMingold$r,
	tierMinpending: tierMinpending$r,
	tierMinplatinum: tierMinplatinum$r,
	tierMinsilver: tierMinsilver$r,
	tierpending: tierpending$r,
	tierplatinum: tierplatinum$r,
	tiersilver: tiersilver$r,
	expandOnHoverOff: expandOnHoverOff$r,
	submit: submit$r,
	login: login$r,
	loading: loading$r,
	noReport: noReport$r,
	disableSubmit: disableSubmit$r,
	disableSubmitDesc: disableSubmitDesc$r,
	enableLibraryBadge: enableLibraryBadge$r,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$r,
	enableStoreBadge: enableStoreBadge$r,
	enableStoreBadgeDesc: enableStoreBadgeDesc$r,
	storeBadgePosition: storeBadgePosition$r,
	storeBadgePositionDesc: storeBadgePositionDesc$r,
	storePositionBottomCenter: storePositionBottomCenter$r,
	storePositionBottomLeft: storePositionBottomLeft$r,
	storePositionBottomRight: storePositionBottomRight$r,
	storePositionTopMiddle: storePositionTopMiddle$r,
	helpButton: helpButton$r,
	helpTitle: helpTitle$r,
	helpToc: helpToc$r,
	helpClose: helpClose$r,
	helpAboutTitle: helpAboutTitle$r,
	helpAboutDesc: helpAboutDesc$r,
	helpUsingTitle: helpUsingTitle$r,
	helpBadgeTiers: helpBadgeTiers$r,
	helpTierPlatinum: helpTierPlatinum$r,
	helpTierGold: helpTierGold$r,
	helpTierSilver: helpTierSilver$r,
	helpTierBronze: helpTierBronze$r,
	helpTierBorked: helpTierBorked$r,
	helpTierPending: helpTierPending$r,
	helpTierNoReport: helpTierNoReport$r,
	helpSettingsExplain: helpSettingsExplain$r,
	helpSettingSize: helpSettingSize$r,
	helpSettingSizeDesc: helpSettingSizeDesc$r,
	helpSettingPosition: helpSettingPosition$r,
	helpSettingPositionDesc: helpSettingPositionDesc$r,
	helpSettingSubmit: helpSettingSubmit$r,
	helpSettingSubmitDesc: helpSettingSubmitDesc$r,
	helpProtonDBTitle: helpProtonDBTitle$r,
	helpProtonDBDesc: helpProtonDBDesc$r,
	helpProtonDBSteps: helpProtonDBSteps$r,
	helpStep1: helpStep1$r,
	helpStep2: helpStep2$r,
	helpStep3: helpStep3$r,
	helpStep4: helpStep4$r,
	helpStep5: helpStep5$r,
	helpStep6: helpStep6$r,
	helpTip: helpTip$r,
	helpTipContent: helpTipContent$r,
	helpSubmitTitle: helpSubmitTitle$r,
	helpSubmitDesc: helpSubmitDesc$r,
	helpSubmitStep1: helpSubmitStep1$r,
	helpSubmitStep2: helpSubmitStep2$r,
	helpSubmitStep3: helpSubmitStep3$r
};

var sectionLibrary$q = "Library";
var sectionStore$q = "Store";
var sectionLinks$q = "Links";
var badgePosition$q = "Placering af mærke";
var badgePositionDescription$q = "Placer emblemet i spillets sidehoved";
var badgeSize$q = "Mærkets størrelse";
var badgeSizeDescription$q = "Vælg en anden størrelse til emblemet";
var caching$q = "Cachelagring";
var clearCache$q = "Ryd ProtonDB Cache";
var clearCacheLabel$q = "Ryd cachen for at tvinge opdatering alle ProtonDB mærker";
var expandOnHover$q = "Hold over etiket for at udvide";
var expandOnHoverDescription$q = "Minimalistisk. Vis kun emblem tekst ved fokus";
var positionTopLeft$q = "Øverst til venstre";
var positionTopRight$q = "Øverst til højre";
var positionBottomLeft$q = "Bottom Left";
var positionBottomMiddle$q = "Bottom Middle";
var positionBottomRight$q = "Bottom Right";
var positionTopMiddle$q = "Øverst i midten";
var settings$q = "Indstillinger";
var sizeMinimalist$q = "Minimalistisk";
var sizeRegular$q = "Almindelig";
var sizeSmall$q = "Lille";
var tierborked$q = "VIRKER IKKE";
var tierbronze$q = "BRONZE";
var tiergold$q = "GULD";
var tierMinborked$q = "ITU";
var tierMinbronze$q = "BRON";
var tierMingold$q = "GULD";
var tierMinpending$q = "AFVENT";
var tierMinplatinum$q = "PLAT";
var tierMinsilver$q = "SØLV";
var tierpending$q = "AFVENTER";
var tierplatinum$q = "PLATIN";
var tiersilver$q = "SØLV";
var expandOnHoverOff$q = "Fra";
var submit$q = "INDSEND";
var login$q = "Log ind";
var loading$q = "...";
var noReport$q = "INGEN RAPPORT";
var disableSubmit$q = "Deaktiver indsendelse";
var disableSubmitDesc$q = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$q = "Enable Badge on Library";
var enableLibraryBadgeDesc$q = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$q = "Aktiver mærke på butikssider";
var enableStoreBadgeDesc$q = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$q = "Store Badge Position";
var storeBadgePositionDesc$q = "Position the badge overlay on store pages";
var storePositionBottomCenter$q = "Bottom Center";
var storePositionBottomLeft$q = "Bottom Left";
var storePositionBottomRight$q = "Bottom Right";
var storePositionTopMiddle$q = "Top Right";
var helpButton$q = "Instruktioner";
var helpTitle$q = "ProtonDB Badges - Hjælp";
var helpToc$q = "Gå til afsnit";
var helpClose$q = "Luk";
var helpAboutTitle$q = "Om dette plugin";
var helpAboutDesc$q = "ProtonDB Badges viser ProtonDB-kompatibilitetsvurderinger direkte på din Steam Deck. Se med et blik, hvor godt spil kører på Linux/Proton uden at forlade Steam-grænsefladen.";
var helpUsingTitle$q = "Brug af plugin";
var helpBadgeTiers$q = "Badge-niveauer:";
var helpTierPlatinum$q = "Kører perfekt uden konfiguration";
var helpTierGold$q = "Kører perfekt efter justeringer";
var helpTierSilver$q = "Kører med mindre problemer";
var helpTierBronze$q = "Kører, men crasher ofte eller har problemer";
var helpTierBorked$q = "Kører ikke eller er uspillelig";
var helpTierPending$q = "Har rapporter men ikke vurderet endnu";
var helpTierNoReport$q = "Ingen rapporter endnu - vær den første!";
var helpSettingsExplain$q = "Indstillinger forklaret:";
var helpSettingSize$q = "Badge-størrelse";
var helpSettingSizeDesc$q = "Normal (fuld størrelse), Lille (kompakt) eller Minimalistisk (kun ikon)";
var helpSettingPosition$q = "Badge-position";
var helpSettingPositionDesc$q = "Hvor badgen vises på spilsider";
var helpSettingSubmit$q = "Deaktiver indsend";
var helpSettingSubmitDesc$q = "Skjul knappen til at indsende rapporter til ProtonDB";
var helpProtonDBTitle$q = "Tilføj Steam Deck til ProtonDB";
var helpProtonDBDesc$q = "For at indsende rapporter fra din Steam Deck skal du registrere den som en enhed på ProtonDB. Dette kræver skrivebordstilstand.";
var helpProtonDBSteps$q = "Trin til registrering:";
var helpStep1$q = "Skift til skrivebordstilstand (hold tænd/sluk-knappen → Skift til skrivebord)";
var helpStep2$q = "Åbn en webbrowser (Firefox eller Chrome)";
var helpStep3$q = "Gå til protondb.com og log ind med din Steam-konto";
var helpStep4$q = "Klik på dit profilikon øverst til højre";
var helpStep5$q = "Gå til 'My Rigs' og klik på 'Add a Rig'";
var helpStep6$q = "Vælg 'Steam Deck' som enhedstype og gem";
var helpTip$q = "Tip";
var helpTipContent$q = "Efter registrering af din Steam Deck kan du indsende rapporter direkte fra spiltilstand ved hjælp af Indsend-knappen på badges.";
var helpSubmitTitle$q = "Indsend spilrapporter";
var helpSubmitDesc$q = "Hjælp fællesskabet ved at dele din spiloplevelse! Rapporter hjælper andre med at vide, hvad de kan forvente.";
var helpSubmitStep1$q = "Spil et spil i mindst 15-30 minutter";
var helpSubmitStep2$q = "Klik på Indsend-knappen på ProtonDB-badgen";
var helpSubmitStep3$q = "Udfyld rapportformularen på ProtonDBs hjemmeside";
var da = {
	sectionLibrary: sectionLibrary$q,
	sectionStore: sectionStore$q,
	sectionLinks: sectionLinks$q,
	badgePosition: badgePosition$q,
	badgePositionDescription: badgePositionDescription$q,
	badgeSize: badgeSize$q,
	badgeSizeDescription: badgeSizeDescription$q,
	caching: caching$q,
	clearCache: clearCache$q,
	clearCacheLabel: clearCacheLabel$q,
	expandOnHover: expandOnHover$q,
	expandOnHoverDescription: expandOnHoverDescription$q,
	positionTopLeft: positionTopLeft$q,
	positionTopRight: positionTopRight$q,
	positionBottomLeft: positionBottomLeft$q,
	positionBottomMiddle: positionBottomMiddle$q,
	positionBottomRight: positionBottomRight$q,
	positionTopMiddle: positionTopMiddle$q,
	settings: settings$q,
	sizeMinimalist: sizeMinimalist$q,
	sizeRegular: sizeRegular$q,
	sizeSmall: sizeSmall$q,
	tierborked: tierborked$q,
	tierbronze: tierbronze$q,
	tiergold: tiergold$q,
	tierMinborked: tierMinborked$q,
	tierMinbronze: tierMinbronze$q,
	tierMingold: tierMingold$q,
	tierMinpending: tierMinpending$q,
	tierMinplatinum: tierMinplatinum$q,
	tierMinsilver: tierMinsilver$q,
	tierpending: tierpending$q,
	tierplatinum: tierplatinum$q,
	tiersilver: tiersilver$q,
	expandOnHoverOff: expandOnHoverOff$q,
	submit: submit$q,
	login: login$q,
	loading: loading$q,
	noReport: noReport$q,
	disableSubmit: disableSubmit$q,
	disableSubmitDesc: disableSubmitDesc$q,
	enableLibraryBadge: enableLibraryBadge$q,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$q,
	enableStoreBadge: enableStoreBadge$q,
	enableStoreBadgeDesc: enableStoreBadgeDesc$q,
	storeBadgePosition: storeBadgePosition$q,
	storeBadgePositionDesc: storeBadgePositionDesc$q,
	storePositionBottomCenter: storePositionBottomCenter$q,
	storePositionBottomLeft: storePositionBottomLeft$q,
	storePositionBottomRight: storePositionBottomRight$q,
	storePositionTopMiddle: storePositionTopMiddle$q,
	helpButton: helpButton$q,
	helpTitle: helpTitle$q,
	helpToc: helpToc$q,
	helpClose: helpClose$q,
	helpAboutTitle: helpAboutTitle$q,
	helpAboutDesc: helpAboutDesc$q,
	helpUsingTitle: helpUsingTitle$q,
	helpBadgeTiers: helpBadgeTiers$q,
	helpTierPlatinum: helpTierPlatinum$q,
	helpTierGold: helpTierGold$q,
	helpTierSilver: helpTierSilver$q,
	helpTierBronze: helpTierBronze$q,
	helpTierBorked: helpTierBorked$q,
	helpTierPending: helpTierPending$q,
	helpTierNoReport: helpTierNoReport$q,
	helpSettingsExplain: helpSettingsExplain$q,
	helpSettingSize: helpSettingSize$q,
	helpSettingSizeDesc: helpSettingSizeDesc$q,
	helpSettingPosition: helpSettingPosition$q,
	helpSettingPositionDesc: helpSettingPositionDesc$q,
	helpSettingSubmit: helpSettingSubmit$q,
	helpSettingSubmitDesc: helpSettingSubmitDesc$q,
	helpProtonDBTitle: helpProtonDBTitle$q,
	helpProtonDBDesc: helpProtonDBDesc$q,
	helpProtonDBSteps: helpProtonDBSteps$q,
	helpStep1: helpStep1$q,
	helpStep2: helpStep2$q,
	helpStep3: helpStep3$q,
	helpStep4: helpStep4$q,
	helpStep5: helpStep5$q,
	helpStep6: helpStep6$q,
	helpTip: helpTip$q,
	helpTipContent: helpTipContent$q,
	helpSubmitTitle: helpSubmitTitle$q,
	helpSubmitDesc: helpSubmitDesc$q,
	helpSubmitStep1: helpSubmitStep1$q,
	helpSubmitStep2: helpSubmitStep2$q,
	helpSubmitStep3: helpSubmitStep3$q
};

var sectionLibrary$p = "Bibliothek";
var sectionStore$p = "Store";
var sectionLinks$p = "Links";
var badgePosition$p = "Abzeichen Position";
var badgePositionDescription$p = "Positioniere das Abzeichen in der Überschrift der Spiele Seite";
var badgeSize$p = "Abzeichen Größe";
var badgeSizeDescription$p = "Wähle eine andere Größe für das Abzeichen";
var caching$p = "Zwischenspeicherung";
var clearCache$p = "Setze die ProtonDB Zwischenspeicherung zurück";
var clearCacheLabel$p = "Setze die Zwischenspeicherung zurück um alle ProtonDB Abzeichen zu erneuern";
var expandOnHover$p = "Vergrößere das Abzeichen beim Fokussieren";
var expandOnHoverDescription$p = "Nur für Minimalistisch. Zeige den Abzeichen-Text beim Fokussieren";
var positionTopLeft$p = "Oben Links";
var positionTopRight$p = "Oben Rechts";
var positionBottomLeft$p = "Unten Links";
var positionBottomMiddle$p = "Unten Mitte";
var positionBottomRight$p = "Unten Rechts";
var positionTopMiddle$p = "Oben Mitte";
var settings$p = "Einstellungen";
var sizeMinimalist$p = "Minimalistisch";
var sizeRegular$p = "Regulär";
var sizeSmall$p = "Klein";
var tierborked$p = "DEFEKT";
var tierbronze$p = "BRONZE";
var tiergold$p = "GOLD";
var tierMinborked$p = "DFKT";
var tierMinbronze$p = "BRON";
var tierMingold$p = "GOLD";
var tierMinpending$p = "UBST";
var tierMinplatinum$p = "PLAT";
var tierMinsilver$p = "SILB";
var tierpending$p = "UNBESTIMMT";
var tierplatinum$p = "PLATIN";
var tiersilver$p = "SILBER";
var expandOnHoverOff$p = "Aus";
var submit$p = "SENDEN";
var login$p = "Anmelden";
var loading$p = "...";
var noReport$p = "KEIN BERICHT";
var disableSubmit$p = "Senden deaktivieren";
var disableSubmitDesc$p = "Verstecke den Senden-Button für ProtonDB Berichte";
var enableLibraryBadge$p = "Abzeichen in Bibliothek aktivieren";
var enableLibraryBadgeDesc$p = "Zeige ProtonDB Abzeichen auf Spieleseiten in deiner Bibliothek";
var enableStoreBadge$p = "Abzeichen auf Store-Seiten aktivieren";
var enableStoreBadgeDesc$p = "Zeige ProtonDB Abzeichen als Overlay auf Store-Seiten";
var storeBadgePosition$p = "Store Abzeichen Position";
var storeBadgePositionDesc$p = "Positioniere das Abzeichen-Overlay auf Store-Seiten";
var storePositionBottomCenter$p = "Unten Mitte";
var storePositionBottomLeft$p = "Unten Links";
var storePositionBottomRight$p = "Unten Rechts";
var storePositionTopMiddle$p = "Oben Mitte";
var helpButton$p = "Anleitung";
var helpTitle$p = "ProtonDB Badges - Hilfe";
var helpToc$p = "Zum Abschnitt springen";
var helpClose$p = "Schließen";
var helpAboutTitle$p = "Über dieses Plugin";
var helpAboutDesc$p = "ProtonDB Badges zeigt ProtonDB-Kompatibilitätsbewertungen direkt auf deinem Steam Deck an. Sieh auf einen Blick, wie gut Spiele unter Linux/Proton laufen, ohne die Steam-Oberfläche zu verlassen.";
var helpUsingTitle$p = "Plugin verwenden";
var helpBadgeTiers$p = "Abzeichen-Stufen:";
var helpTierPlatinum$p = "Läuft perfekt ohne Anpassungen";
var helpTierGold$p = "Läuft perfekt nach Anpassungen";
var helpTierSilver$p = "Läuft mit kleineren Problemen";
var helpTierBronze$p = "Läuft, aber stürzt oft ab oder hat Probleme";
var helpTierBorked$p = "Läuft nicht oder ist unspielbar";
var helpTierPending$p = "Hat Berichte, aber noch nicht bewertet";
var helpTierNoReport$p = "Noch keine Berichte eingereicht - sei der Erste!";
var helpSettingsExplain$p = "Einstellungen erklärt:";
var helpSettingSize$p = "Abzeichen-Größe";
var helpSettingSizeDesc$p = "Regulär (volle Größe), Klein (kompakt) oder Minimalistisch (nur Symbol)";
var helpSettingPosition$p = "Abzeichen-Position";
var helpSettingPositionDesc$p = "Wo das Abzeichen auf Spieleseiten erscheint";
var helpSettingSubmit$p = "Senden deaktivieren";
var helpSettingSubmitDesc$p = "Versteckt den Button zum Einreichen von Berichten bei ProtonDB";
var helpProtonDBTitle$p = "Steam Deck zu ProtonDB hinzufügen";
var helpProtonDBDesc$p = "Um Berichte von deinem Steam Deck einzureichen, musst du es als Gerät bei ProtonDB registrieren. Dies erfordert den Desktop-Modus.";
var helpProtonDBSteps$p = "Schritte zur Registrierung:";
var helpStep1$p = "Wechsle in den Desktop-Modus (Power-Taste gedrückt halten → Zum Desktop wechseln)";
var helpStep2$p = "Öffne einen Webbrowser (Firefox oder Chrome)";
var helpStep3$p = "Gehe zu protondb.com und melde dich mit deinem Steam-Konto an";
var helpStep4$p = "Klicke auf dein Profilsymbol oben rechts";
var helpStep5$p = "Gehe zu 'My Rigs' und klicke auf 'Add a Rig'";
var helpStep6$p = "Wähle 'Steam Deck' als Gerätetyp und speichere";
var helpTip$p = "Tipp";
var helpTipContent$p = "Nach der Registrierung deines Steam Decks kannst du Berichte direkt aus dem Spielmodus über den Senden-Button auf den Abzeichen einreichen.";
var helpSubmitTitle$p = "Spielberichte einreichen";
var helpSubmitDesc$p = "Hilf der Community, indem du deine Spielerfahrung teilst! Berichte helfen anderen zu wissen, was sie erwartet.";
var helpSubmitStep1$p = "Spiele ein Spiel mindestens 15-30 Minuten";
var helpSubmitStep2$p = "Klicke auf den Senden-Button auf dem ProtonDB-Abzeichen";
var helpSubmitStep3$p = "Fülle das Berichtsformular auf der ProtonDB-Website aus";
var de = {
	sectionLibrary: sectionLibrary$p,
	sectionStore: sectionStore$p,
	sectionLinks: sectionLinks$p,
	badgePosition: badgePosition$p,
	badgePositionDescription: badgePositionDescription$p,
	badgeSize: badgeSize$p,
	badgeSizeDescription: badgeSizeDescription$p,
	caching: caching$p,
	clearCache: clearCache$p,
	clearCacheLabel: clearCacheLabel$p,
	expandOnHover: expandOnHover$p,
	expandOnHoverDescription: expandOnHoverDescription$p,
	positionTopLeft: positionTopLeft$p,
	positionTopRight: positionTopRight$p,
	positionBottomLeft: positionBottomLeft$p,
	positionBottomMiddle: positionBottomMiddle$p,
	positionBottomRight: positionBottomRight$p,
	positionTopMiddle: positionTopMiddle$p,
	settings: settings$p,
	sizeMinimalist: sizeMinimalist$p,
	sizeRegular: sizeRegular$p,
	sizeSmall: sizeSmall$p,
	tierborked: tierborked$p,
	tierbronze: tierbronze$p,
	tiergold: tiergold$p,
	tierMinborked: tierMinborked$p,
	tierMinbronze: tierMinbronze$p,
	tierMingold: tierMingold$p,
	tierMinpending: tierMinpending$p,
	tierMinplatinum: tierMinplatinum$p,
	tierMinsilver: tierMinsilver$p,
	tierpending: tierpending$p,
	tierplatinum: tierplatinum$p,
	tiersilver: tiersilver$p,
	expandOnHoverOff: expandOnHoverOff$p,
	submit: submit$p,
	login: login$p,
	loading: loading$p,
	noReport: noReport$p,
	disableSubmit: disableSubmit$p,
	disableSubmitDesc: disableSubmitDesc$p,
	enableLibraryBadge: enableLibraryBadge$p,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$p,
	enableStoreBadge: enableStoreBadge$p,
	enableStoreBadgeDesc: enableStoreBadgeDesc$p,
	storeBadgePosition: storeBadgePosition$p,
	storeBadgePositionDesc: storeBadgePositionDesc$p,
	storePositionBottomCenter: storePositionBottomCenter$p,
	storePositionBottomLeft: storePositionBottomLeft$p,
	storePositionBottomRight: storePositionBottomRight$p,
	storePositionTopMiddle: storePositionTopMiddle$p,
	helpButton: helpButton$p,
	helpTitle: helpTitle$p,
	helpToc: helpToc$p,
	helpClose: helpClose$p,
	helpAboutTitle: helpAboutTitle$p,
	helpAboutDesc: helpAboutDesc$p,
	helpUsingTitle: helpUsingTitle$p,
	helpBadgeTiers: helpBadgeTiers$p,
	helpTierPlatinum: helpTierPlatinum$p,
	helpTierGold: helpTierGold$p,
	helpTierSilver: helpTierSilver$p,
	helpTierBronze: helpTierBronze$p,
	helpTierBorked: helpTierBorked$p,
	helpTierPending: helpTierPending$p,
	helpTierNoReport: helpTierNoReport$p,
	helpSettingsExplain: helpSettingsExplain$p,
	helpSettingSize: helpSettingSize$p,
	helpSettingSizeDesc: helpSettingSizeDesc$p,
	helpSettingPosition: helpSettingPosition$p,
	helpSettingPositionDesc: helpSettingPositionDesc$p,
	helpSettingSubmit: helpSettingSubmit$p,
	helpSettingSubmitDesc: helpSettingSubmitDesc$p,
	helpProtonDBTitle: helpProtonDBTitle$p,
	helpProtonDBDesc: helpProtonDBDesc$p,
	helpProtonDBSteps: helpProtonDBSteps$p,
	helpStep1: helpStep1$p,
	helpStep2: helpStep2$p,
	helpStep3: helpStep3$p,
	helpStep4: helpStep4$p,
	helpStep5: helpStep5$p,
	helpStep6: helpStep6$p,
	helpTip: helpTip$p,
	helpTipContent: helpTipContent$p,
	helpSubmitTitle: helpSubmitTitle$p,
	helpSubmitDesc: helpSubmitDesc$p,
	helpSubmitStep1: helpSubmitStep1$p,
	helpSubmitStep2: helpSubmitStep2$p,
	helpSubmitStep3: helpSubmitStep3$p
};

var sectionLibrary$o = "Library";
var sectionStore$o = "Store";
var sectionLinks$o = "Links";
var badgePosition$o = "Θέση Σήματος";
var badgePositionDescription$o = "Τοποθετήστε το σήμα στην κεφαλίδα της σελίδας παιχνιδιού";
var badgeSize$o = "Μέγεθος Σήματος";
var badgeSizeDescription$o = "Επιλέξτε διαφορετικό μέγεθος για το σήμα";
var caching$o = "Προσωρινή Αποθήκευση";
var clearCache$o = "Εκκαθάριση ProtonDB Cache";
var clearCacheLabel$o = "Εκκαθαρίστε την προσωρινή μνήμη για αναγκαστική ανανέωση όλων των σημάτων ProtonDB";
var expandOnHover$o = "Επέκταση Ετικέτας με το ποντίκι";
var expandOnHoverDescription$o = "Μόνο για Μινιμαλιστικό. Εμφάνιση κειμένου σήματος στην εστίαση";
var positionTopLeft$o = "Πάνω Αριστερά";
var positionTopRight$o = "Πάνω Δεξιά";
var positionBottomLeft$o = "Bottom Left";
var positionBottomMiddle$o = "Bottom Middle";
var positionBottomRight$o = "Bottom Right";
var positionTopMiddle$o = "Πάνω Κέντρο";
var settings$o = "Ρυθμίσεις";
var sizeMinimalist$o = "Μινιμαλιστικό";
var sizeRegular$o = "Κανονικό";
var sizeSmall$o = "Μικρό";
var tierborked$o = "ΤΖΟΎΦΙΟ";
var tierbronze$o = "ΧΆΛΚΙΝΟ";
var tiergold$o = "ΧΡΥΣΌ";
var tierMinborked$o = "BORK";
var tierMinbronze$o = "BRON";
var tierMingold$o = "GOLD";
var tierMinpending$o = "PEND";
var tierMinplatinum$o = "PLAT";
var tierMinsilver$o = "SILV";
var tierpending$o = "ΣΕ ΑΝΑΜΟΝΗ";
var tierplatinum$o = "ΠΛΑΤΙΝΈΝΙΟ";
var tiersilver$o = "ΑΣΗΜΈΝΙΟ";
var expandOnHoverOff$o = "Απενεργοποιημένο";
var submit$o = "ΥΠΟΒΟΛΗ";
var login$o = "Σύνδεση";
var loading$o = "...";
var noReport$o = "ΧΩΡΙΣ ΑΝΑΦΟΡΑ";
var disableSubmit$o = "Απενεργοποίηση υποβολής";
var disableSubmitDesc$o = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$o = "Enable Badge on Library";
var enableLibraryBadgeDesc$o = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$o = "Ενεργοποίηση σήματος στις σελίδες καταστήματος";
var enableStoreBadgeDesc$o = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$o = "Store Badge Position";
var storeBadgePositionDesc$o = "Position the badge overlay on store pages";
var storePositionBottomCenter$o = "Bottom Center";
var storePositionBottomLeft$o = "Bottom Left";
var storePositionBottomRight$o = "Bottom Right";
var storePositionTopMiddle$o = "Top Right";
var helpButton$o = "Οδηγίες";
var helpTitle$o = "ProtonDB Badges - Βοήθεια";
var helpToc$o = "Μετάβαση σε ενότητα";
var helpClose$o = "Κλείσιμο";
var helpAboutTitle$o = "Σχετικά με αυτό το plugin";
var helpAboutDesc$o = "Το ProtonDB Badges εμφανίζει τις αξιολογήσεις συμβατότητας ProtonDB απευθείας στο Steam Deck σας. Δείτε με μια ματιά πόσο καλά τρέχουν τα παιχνίδια σε Linux/Proton χωρίς να φύγετε από τη διεπαφή Steam.";
var helpUsingTitle$o = "Χρήση του plugin";
var helpBadgeTiers$o = "Επίπεδα σήματος:";
var helpTierPlatinum$o = "Τρέχει τέλεια χωρίς ρύθμιση";
var helpTierGold$o = "Τρέχει τέλεια μετά από ρυθμίσεις";
var helpTierSilver$o = "Τρέχει με μικρά προβλήματα";
var helpTierBronze$o = "Τρέχει, αλλά συχνά κρασάρει ή έχει προβλήματα";
var helpTierBorked$o = "Δεν τρέχει ή είναι μη παίξιμο";
var helpTierPending$o = "Έχει αναφορές αλλά δεν έχει αξιολογηθεί ακόμα";
var helpTierNoReport$o = "Καμία αναφορά ακόμα - γίνετε ο πρώτος!";
var helpSettingsExplain$o = "Επεξήγηση ρυθμίσεων:";
var helpSettingSize$o = "Μέγεθος σήματος";
var helpSettingSizeDesc$o = "Κανονικό (πλήρες μέγεθος), Μικρό (συμπαγές) ή Μινιμαλιστικό (μόνο εικονίδιο)";
var helpSettingPosition$o = "Θέση σήματος";
var helpSettingPositionDesc$o = "Πού εμφανίζεται το σήμα στις σελίδες παιχνιδιών";
var helpSettingSubmit$o = "Απενεργοποίηση υποβολής";
var helpSettingSubmitDesc$o = "Απόκρυψη του κουμπιού για υποβολή αναφορών στο ProtonDB";
var helpProtonDBTitle$o = "Προσθήκη Steam Deck στο ProtonDB";
var helpProtonDBDesc$o = "Για να υποβάλετε αναφορές από το Steam Deck σας, πρέπει να το καταχωρήσετε ως συσκευή στο ProtonDB. Αυτό απαιτεί τη Λειτουργία Επιφάνειας Εργασίας.";
var helpProtonDBSteps$o = "Βήματα καταχώρησης:";
var helpStep1$o = "Μεταβείτε σε Λειτουργία Επιφάνειας Εργασίας (κρατήστε πατημένο το κουμπί Power → Εναλλαγή σε Επιφάνεια Εργασίας)";
var helpStep2$o = "Ανοίξτε έναν περιηγητή (Firefox ή Chrome)";
var helpStep3$o = "Μεταβείτε στο protondb.com και συνδεθείτε με τον λογαριασμό Steam σας";
var helpStep4$o = "Κάντε κλικ στο εικονίδιο προφίλ σας πάνω δεξιά";
var helpStep5$o = "Μεταβείτε στο 'My Rigs' και κάντε κλικ στο 'Add a Rig'";
var helpStep6$o = "Επιλέξτε 'Steam Deck' ως τύπο συσκευής και αποθηκεύστε";
var helpTip$o = "Συμβουλή";
var helpTipContent$o = "Μετά την καταχώρηση του Steam Deck, μπορείτε να υποβάλετε αναφορές απευθείας από τη Λειτουργία Παιχνιδιού χρησιμοποιώντας το κουμπί Υποβολή στα σήματα.";
var helpSubmitTitle$o = "Υποβολή αναφορών παιχνιδιών";
var helpSubmitDesc$o = "Βοηθήστε την κοινότητα μοιράζοντας την εμπειρία παιχνιδιού σας! Οι αναφορές βοηθούν τους άλλους να ξέρουν τι να περιμένουν.";
var helpSubmitStep1$o = "Παίξτε ένα παιχνίδι για τουλάχιστον 15-30 λεπτά";
var helpSubmitStep2$o = "Κάντε κλικ στο κουμπί Υποβολή στο σήμα ProtonDB";
var helpSubmitStep3$o = "Συμπληρώστε τη φόρμα αναφοράς στον ιστότοπο του ProtonDB";
var el = {
	sectionLibrary: sectionLibrary$o,
	sectionStore: sectionStore$o,
	sectionLinks: sectionLinks$o,
	badgePosition: badgePosition$o,
	badgePositionDescription: badgePositionDescription$o,
	badgeSize: badgeSize$o,
	badgeSizeDescription: badgeSizeDescription$o,
	caching: caching$o,
	clearCache: clearCache$o,
	clearCacheLabel: clearCacheLabel$o,
	expandOnHover: expandOnHover$o,
	expandOnHoverDescription: expandOnHoverDescription$o,
	positionTopLeft: positionTopLeft$o,
	positionTopRight: positionTopRight$o,
	positionBottomLeft: positionBottomLeft$o,
	positionBottomMiddle: positionBottomMiddle$o,
	positionBottomRight: positionBottomRight$o,
	positionTopMiddle: positionTopMiddle$o,
	settings: settings$o,
	sizeMinimalist: sizeMinimalist$o,
	sizeRegular: sizeRegular$o,
	sizeSmall: sizeSmall$o,
	tierborked: tierborked$o,
	tierbronze: tierbronze$o,
	tiergold: tiergold$o,
	tierMinborked: tierMinborked$o,
	tierMinbronze: tierMinbronze$o,
	tierMingold: tierMingold$o,
	tierMinpending: tierMinpending$o,
	tierMinplatinum: tierMinplatinum$o,
	tierMinsilver: tierMinsilver$o,
	tierpending: tierpending$o,
	tierplatinum: tierplatinum$o,
	tiersilver: tiersilver$o,
	expandOnHoverOff: expandOnHoverOff$o,
	submit: submit$o,
	login: login$o,
	loading: loading$o,
	noReport: noReport$o,
	disableSubmit: disableSubmit$o,
	disableSubmitDesc: disableSubmitDesc$o,
	enableLibraryBadge: enableLibraryBadge$o,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$o,
	enableStoreBadge: enableStoreBadge$o,
	enableStoreBadgeDesc: enableStoreBadgeDesc$o,
	storeBadgePosition: storeBadgePosition$o,
	storeBadgePositionDesc: storeBadgePositionDesc$o,
	storePositionBottomCenter: storePositionBottomCenter$o,
	storePositionBottomLeft: storePositionBottomLeft$o,
	storePositionBottomRight: storePositionBottomRight$o,
	storePositionTopMiddle: storePositionTopMiddle$o,
	helpButton: helpButton$o,
	helpTitle: helpTitle$o,
	helpToc: helpToc$o,
	helpClose: helpClose$o,
	helpAboutTitle: helpAboutTitle$o,
	helpAboutDesc: helpAboutDesc$o,
	helpUsingTitle: helpUsingTitle$o,
	helpBadgeTiers: helpBadgeTiers$o,
	helpTierPlatinum: helpTierPlatinum$o,
	helpTierGold: helpTierGold$o,
	helpTierSilver: helpTierSilver$o,
	helpTierBronze: helpTierBronze$o,
	helpTierBorked: helpTierBorked$o,
	helpTierPending: helpTierPending$o,
	helpTierNoReport: helpTierNoReport$o,
	helpSettingsExplain: helpSettingsExplain$o,
	helpSettingSize: helpSettingSize$o,
	helpSettingSizeDesc: helpSettingSizeDesc$o,
	helpSettingPosition: helpSettingPosition$o,
	helpSettingPositionDesc: helpSettingPositionDesc$o,
	helpSettingSubmit: helpSettingSubmit$o,
	helpSettingSubmitDesc: helpSettingSubmitDesc$o,
	helpProtonDBTitle: helpProtonDBTitle$o,
	helpProtonDBDesc: helpProtonDBDesc$o,
	helpProtonDBSteps: helpProtonDBSteps$o,
	helpStep1: helpStep1$o,
	helpStep2: helpStep2$o,
	helpStep3: helpStep3$o,
	helpStep4: helpStep4$o,
	helpStep5: helpStep5$o,
	helpStep6: helpStep6$o,
	helpTip: helpTip$o,
	helpTipContent: helpTipContent$o,
	helpSubmitTitle: helpSubmitTitle$o,
	helpSubmitDesc: helpSubmitDesc$o,
	helpSubmitStep1: helpSubmitStep1$o,
	helpSubmitStep2: helpSubmitStep2$o,
	helpSubmitStep3: helpSubmitStep3$o
};

var sectionLibrary$n = "Library";
var sectionStore$n = "Store";
var sectionLinks$n = "Links";
var badgePosition$n = "Badge Position";
var badgePositionDescription$n = "Position the badge within the game page header";
var badgeSize$n = "Badge Size";
var badgeSizeDescription$n = "Choose a different size for the badge";
var caching$n = "Caching";
var clearCache$n = "Clear ProtonDB Cache";
var clearCacheLabel$n = "Clear the cache to force refresh all ProtonDB badges";
var expandOnHover$n = "Expand Label on hover";
var expandOnHoverDescription$n = "Minimalist Only. Display badge text on focus";
var positionTopLeft$n = "Top Left";
var positionTopMiddle$n = "Top Middle";
var positionTopRight$n = "Top Right";
var positionBottomLeft$n = "Bottom Left";
var positionBottomMiddle$n = "Bottom Middle";
var positionBottomRight$n = "Bottom Right";
var settings$n = "Settings";
var sizeMinimalist$n = "Minimalist";
var sizeRegular$n = "Regular";
var sizeSmall$n = "Small";
var tierborked$n = "BORKED";
var tierbronze$n = "BRONZE";
var tiergold$n = "GOLD";
var tierMinborked$n = "BORK";
var tierMinbronze$n = "BRON";
var tierMingold$n = "GOLD";
var tierMinpending$n = "PEND";
var tierMinplatinum$n = "PLAT";
var tierMinsilver$n = "SILV";
var tierpending$n = "PENDING";
var tierplatinum$n = "PLATINUM";
var tiersilver$n = "SILVER";
var expandOnHoverOff$n = "Off";
var submit$n = "SUBMIT";
var login$n = "Login";
var loading$n = "...";
var noReport$n = "NO REPORT";
var disableSubmit$n = "Disable Submit";
var disableSubmitDesc$n = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$n = "Enable Badge on Library";
var enableLibraryBadgeDesc$n = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$n = "Enable Badge on Store Pages";
var enableStoreBadgeDesc$n = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$n = "Store Badge Position";
var storeBadgePositionDesc$n = "Position the badge overlay on store pages";
var storePositionBottomCenter$n = "Bottom Center";
var storePositionBottomLeft$n = "Bottom Left";
var storePositionBottomRight$n = "Bottom Right";
var storePositionTopMiddle$n = "Top Middle";
var helpButton$n = "Instructions";
var helpTitle$n = "ProtonDB Badges - Help";
var helpToc$n = "Jump to Section";
var helpClose$n = "Close";
var helpAboutTitle$n = "About This Plugin";
var helpAboutDesc$n = "ProtonDB Badges displays ProtonDB compatibility ratings directly on your Steam Deck. See at a glance how well games run on Linux/Proton without leaving the Steam interface.";
var helpUsingTitle$n = "Using the Plugin";
var helpBadgeTiers$n = "Badge Tiers:";
var helpTierPlatinum$n = "Runs perfectly out of the box";
var helpTierGold$n = "Runs perfectly after tweaks";
var helpTierSilver$n = "Runs with minor issues";
var helpTierBronze$n = "Runs, but often crashes or has issues";
var helpTierBorked$n = "Does not run or is unplayable";
var helpTierPending$n = "Has reports but not yet rated";
var helpTierNoReport$n = "No reports submitted yet - be the first!";
var helpSettingsExplain$n = "Settings Explained:";
var helpSettingSize$n = "Badge Size";
var helpSettingSizeDesc$n = "Regular (full size), Small (compact), or Minimalist (icon only)";
var helpSettingPosition$n = "Badge Position";
var helpSettingPositionDesc$n = "Where the badge appears on game pages";
var helpSettingSubmit$n = "Disable Submit";
var helpSettingSubmitDesc$n = "Hide the button to submit reports to ProtonDB";
var helpProtonDBTitle$n = "Adding Steam Deck to ProtonDB";
var helpProtonDBDesc$n = "To submit reports from your Steam Deck, you need to register it as a device on ProtonDB. This requires Desktop Mode.";
var helpProtonDBSteps$n = "Steps to Register:";
var helpStep1$n = "Switch to Desktop Mode (hold Power button → Switch to Desktop)";
var helpStep2$n = "Open a web browser (Firefox or Chrome)";
var helpStep3$n = "Go to protondb.com and log in with your Steam account";
var helpStep4$n = "Click on your profile icon in the top right";
var helpStep5$n = "Go to 'My Rigs' and click 'Add a Rig'";
var helpStep6$n = "Select 'Steam Deck' as your device type and save";
var helpTip$n = "Tip";
var helpTipContent$n = "After registering your Steam Deck, you can submit reports directly from Game Mode using the Submit button on badges.";
var helpSubmitTitle$n = "Submitting Game Reports";
var helpSubmitDesc$n = "Help the community by sharing your gaming experience! Reports help others know what to expect.";
var helpSubmitStep1$n = "Play a game for at least 15-30 minutes";
var helpSubmitStep2$n = "Click the Submit button on the ProtonDB badge";
var helpSubmitStep3$n = "Fill out the report form on ProtonDB's website";
var en = {
	sectionLibrary: sectionLibrary$n,
	sectionStore: sectionStore$n,
	sectionLinks: sectionLinks$n,
	badgePosition: badgePosition$n,
	badgePositionDescription: badgePositionDescription$n,
	badgeSize: badgeSize$n,
	badgeSizeDescription: badgeSizeDescription$n,
	caching: caching$n,
	clearCache: clearCache$n,
	clearCacheLabel: clearCacheLabel$n,
	expandOnHover: expandOnHover$n,
	expandOnHoverDescription: expandOnHoverDescription$n,
	positionTopLeft: positionTopLeft$n,
	positionTopMiddle: positionTopMiddle$n,
	positionTopRight: positionTopRight$n,
	positionBottomLeft: positionBottomLeft$n,
	positionBottomMiddle: positionBottomMiddle$n,
	positionBottomRight: positionBottomRight$n,
	settings: settings$n,
	sizeMinimalist: sizeMinimalist$n,
	sizeRegular: sizeRegular$n,
	sizeSmall: sizeSmall$n,
	tierborked: tierborked$n,
	tierbronze: tierbronze$n,
	tiergold: tiergold$n,
	tierMinborked: tierMinborked$n,
	tierMinbronze: tierMinbronze$n,
	tierMingold: tierMingold$n,
	tierMinpending: tierMinpending$n,
	tierMinplatinum: tierMinplatinum$n,
	tierMinsilver: tierMinsilver$n,
	tierpending: tierpending$n,
	tierplatinum: tierplatinum$n,
	tiersilver: tiersilver$n,
	expandOnHoverOff: expandOnHoverOff$n,
	submit: submit$n,
	login: login$n,
	loading: loading$n,
	noReport: noReport$n,
	disableSubmit: disableSubmit$n,
	disableSubmitDesc: disableSubmitDesc$n,
	enableLibraryBadge: enableLibraryBadge$n,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$n,
	enableStoreBadge: enableStoreBadge$n,
	enableStoreBadgeDesc: enableStoreBadgeDesc$n,
	storeBadgePosition: storeBadgePosition$n,
	storeBadgePositionDesc: storeBadgePositionDesc$n,
	storePositionBottomCenter: storePositionBottomCenter$n,
	storePositionBottomLeft: storePositionBottomLeft$n,
	storePositionBottomRight: storePositionBottomRight$n,
	storePositionTopMiddle: storePositionTopMiddle$n,
	helpButton: helpButton$n,
	helpTitle: helpTitle$n,
	helpToc: helpToc$n,
	helpClose: helpClose$n,
	helpAboutTitle: helpAboutTitle$n,
	helpAboutDesc: helpAboutDesc$n,
	helpUsingTitle: helpUsingTitle$n,
	helpBadgeTiers: helpBadgeTiers$n,
	helpTierPlatinum: helpTierPlatinum$n,
	helpTierGold: helpTierGold$n,
	helpTierSilver: helpTierSilver$n,
	helpTierBronze: helpTierBronze$n,
	helpTierBorked: helpTierBorked$n,
	helpTierPending: helpTierPending$n,
	helpTierNoReport: helpTierNoReport$n,
	helpSettingsExplain: helpSettingsExplain$n,
	helpSettingSize: helpSettingSize$n,
	helpSettingSizeDesc: helpSettingSizeDesc$n,
	helpSettingPosition: helpSettingPosition$n,
	helpSettingPositionDesc: helpSettingPositionDesc$n,
	helpSettingSubmit: helpSettingSubmit$n,
	helpSettingSubmitDesc: helpSettingSubmitDesc$n,
	helpProtonDBTitle: helpProtonDBTitle$n,
	helpProtonDBDesc: helpProtonDBDesc$n,
	helpProtonDBSteps: helpProtonDBSteps$n,
	helpStep1: helpStep1$n,
	helpStep2: helpStep2$n,
	helpStep3: helpStep3$n,
	helpStep4: helpStep4$n,
	helpStep5: helpStep5$n,
	helpStep6: helpStep6$n,
	helpTip: helpTip$n,
	helpTipContent: helpTipContent$n,
	helpSubmitTitle: helpSubmitTitle$n,
	helpSubmitDesc: helpSubmitDesc$n,
	helpSubmitStep1: helpSubmitStep1$n,
	helpSubmitStep2: helpSubmitStep2$n,
	helpSubmitStep3: helpSubmitStep3$n
};

var sectionLibrary$m = "Biblioteca";
var sectionStore$m = "Tienda";
var sectionLinks$m = "Links";
var badgePosition$m = "Posición de la insignia";
var badgePositionDescription$m = "Coloca la insignia dentro del encabezado de la página del juego";
var badgeSize$m = "Tamaño de la insignia";
var badgeSizeDescription$m = "Selecciona un tamaño diferente para la insignia";
var caching$m = "Caché";
var clearCache$m = "Limpiar el caché de ProtonDB";
var clearCacheLabel$m = "Borra el caché para forzar la actualización de todas las insignias de ProtonDB";
var expandOnHover$m = "Expandir insignia al seleccionar";
var expandOnHoverDescription$m = "Solo Minimalista. Muestra el texto de la insignia al seleccionar";
var positionTopLeft$m = "Arriba a la izquierda";
var positionTopRight$m = "Arriba a la derecha";
var positionBottomLeft$m = "Abajo a la izquierda";
var positionBottomMiddle$m = "Abajo en el centro";
var positionBottomRight$m = "Abajo a la derecha";
var positionTopMiddle$m = "Arriba al centro";
var settings$m = "Ajustes";
var sizeMinimalist$m = "Minimalista";
var sizeRegular$m = "Normal";
var sizeSmall$m = "Pequeño";
var tierborked$m = "ROTO";
var tierbronze$m = "BRONCE";
var tiergold$m = "ORO";
var tierMinborked$m = "ROTO";
var tierMinbronze$m = "BRON";
var tierMingold$m = "ORO";
var tierMinpending$m = "PEND";
var tierMinplatinum$m = "PLATI";
var tierMinsilver$m = "PLATA";
var tierpending$m = "PENDIENTE";
var tierplatinum$m = "PLATINO";
var tiersilver$m = "PLATA";
var expandOnHoverOff$m = "Desactivado";
var submit$m = "ENVIAR";
var login$m = "Iniciar sesión";
var loading$m = "...";
var noReport$m = "SIN INFORME";
var disableSubmit$m = "Desactivar envío";
var disableSubmitDesc$m = "Ocultar el botón de envío de informes a ProtonDB";
var enableLibraryBadge$m = "Activar insignia en biblioteca";
var enableLibraryBadgeDesc$m = "Mostrar insignia de ProtonDB en las páginas de juegos de tu biblioteca";
var enableStoreBadge$m = "Activar insignia en páginas de la tienda";
var enableStoreBadgeDesc$m = "Mostrar insignia de ProtonDB como superposición en páginas de la tienda";
var storeBadgePosition$m = "Posición de insignia en tienda";
var storeBadgePositionDesc$m = "Posicionar la superposición de insignia en páginas de la tienda";
var storePositionBottomCenter$m = "Abajo en el centro";
var storePositionBottomLeft$m = "Abajo a la izquierda";
var storePositionBottomRight$m = "Abajo a la derecha";
var storePositionTopMiddle$m = "Arriba en el centro";
var helpButton$m = "Instrucciones";
var helpTitle$m = "ProtonDB Badges - Ayuda";
var helpToc$m = "Ir a sección";
var helpClose$m = "Cerrar";
var helpAboutTitle$m = "Acerca de este plugin";
var helpAboutDesc$m = "ProtonDB Badges muestra las calificaciones de compatibilidad de ProtonDB directamente en tu Steam Deck. Ve de un vistazo qué tan bien funcionan los juegos en Linux/Proton sin salir de la interfaz de Steam.";
var helpUsingTitle$m = "Usando el plugin";
var helpBadgeTiers$m = "Niveles de insignia:";
var helpTierPlatinum$m = "Funciona perfectamente sin configuración";
var helpTierGold$m = "Funciona perfectamente después de ajustes";
var helpTierSilver$m = "Funciona con problemas menores";
var helpTierBronze$m = "Funciona, pero a menudo se bloquea o tiene problemas";
var helpTierBorked$m = "No funciona o es injugable";
var helpTierPending$m = "Tiene informes pero aún no está calificado";
var helpTierNoReport$m = "Sin informes aún - ¡sé el primero!";
var helpSettingsExplain$m = "Explicación de ajustes:";
var helpSettingSize$m = "Tamaño de insignia";
var helpSettingSizeDesc$m = "Normal (tamaño completo), Pequeño (compacto) o Minimalista (solo icono)";
var helpSettingPosition$m = "Posición de insignia";
var helpSettingPositionDesc$m = "Dónde aparece la insignia en las páginas de juegos";
var helpSettingSubmit$m = "Desactivar envío";
var helpSettingSubmitDesc$m = "Ocultar el botón para enviar informes a ProtonDB";
var helpProtonDBTitle$m = "Añadir Steam Deck a ProtonDB";
var helpProtonDBDesc$m = "Para enviar informes desde tu Steam Deck, necesitas registrarlo como dispositivo en ProtonDB. Esto requiere el Modo Escritorio.";
var helpProtonDBSteps$m = "Pasos para registrar:";
var helpStep1$m = "Cambia al Modo Escritorio (mantén presionado el botón de Encendido → Cambiar a Escritorio)";
var helpStep2$m = "Abre un navegador web (Firefox o Chrome)";
var helpStep3$m = "Ve a protondb.com e inicia sesión con tu cuenta de Steam";
var helpStep4$m = "Haz clic en tu icono de perfil en la esquina superior derecha";
var helpStep5$m = "Ve a 'My Rigs' y haz clic en 'Add a Rig'";
var helpStep6$m = "Selecciona 'Steam Deck' como tipo de dispositivo y guarda";
var helpTip$m = "Consejo";
var helpTipContent$m = "Después de registrar tu Steam Deck, puedes enviar informes directamente desde el Modo Juego usando el botón Enviar en las insignias.";
var helpSubmitTitle$m = "Enviar informes de juegos";
var helpSubmitDesc$m = "¡Ayuda a la comunidad compartiendo tu experiencia de juego! Los informes ayudan a otros a saber qué esperar.";
var helpSubmitStep1$m = "Juega un juego durante al menos 15-30 minutos";
var helpSubmitStep2$m = "Haz clic en el botón Enviar en la insignia de ProtonDB";
var helpSubmitStep3$m = "Completa el formulario de informe en el sitio web de ProtonDB";
var es = {
	sectionLibrary: sectionLibrary$m,
	sectionStore: sectionStore$m,
	sectionLinks: sectionLinks$m,
	badgePosition: badgePosition$m,
	badgePositionDescription: badgePositionDescription$m,
	badgeSize: badgeSize$m,
	badgeSizeDescription: badgeSizeDescription$m,
	caching: caching$m,
	clearCache: clearCache$m,
	clearCacheLabel: clearCacheLabel$m,
	expandOnHover: expandOnHover$m,
	expandOnHoverDescription: expandOnHoverDescription$m,
	positionTopLeft: positionTopLeft$m,
	positionTopRight: positionTopRight$m,
	positionBottomLeft: positionBottomLeft$m,
	positionBottomMiddle: positionBottomMiddle$m,
	positionBottomRight: positionBottomRight$m,
	positionTopMiddle: positionTopMiddle$m,
	settings: settings$m,
	sizeMinimalist: sizeMinimalist$m,
	sizeRegular: sizeRegular$m,
	sizeSmall: sizeSmall$m,
	tierborked: tierborked$m,
	tierbronze: tierbronze$m,
	tiergold: tiergold$m,
	tierMinborked: tierMinborked$m,
	tierMinbronze: tierMinbronze$m,
	tierMingold: tierMingold$m,
	tierMinpending: tierMinpending$m,
	tierMinplatinum: tierMinplatinum$m,
	tierMinsilver: tierMinsilver$m,
	tierpending: tierpending$m,
	tierplatinum: tierplatinum$m,
	tiersilver: tiersilver$m,
	expandOnHoverOff: expandOnHoverOff$m,
	submit: submit$m,
	login: login$m,
	loading: loading$m,
	noReport: noReport$m,
	disableSubmit: disableSubmit$m,
	disableSubmitDesc: disableSubmitDesc$m,
	enableLibraryBadge: enableLibraryBadge$m,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$m,
	enableStoreBadge: enableStoreBadge$m,
	enableStoreBadgeDesc: enableStoreBadgeDesc$m,
	storeBadgePosition: storeBadgePosition$m,
	storeBadgePositionDesc: storeBadgePositionDesc$m,
	storePositionBottomCenter: storePositionBottomCenter$m,
	storePositionBottomLeft: storePositionBottomLeft$m,
	storePositionBottomRight: storePositionBottomRight$m,
	storePositionTopMiddle: storePositionTopMiddle$m,
	helpButton: helpButton$m,
	helpTitle: helpTitle$m,
	helpToc: helpToc$m,
	helpClose: helpClose$m,
	helpAboutTitle: helpAboutTitle$m,
	helpAboutDesc: helpAboutDesc$m,
	helpUsingTitle: helpUsingTitle$m,
	helpBadgeTiers: helpBadgeTiers$m,
	helpTierPlatinum: helpTierPlatinum$m,
	helpTierGold: helpTierGold$m,
	helpTierSilver: helpTierSilver$m,
	helpTierBronze: helpTierBronze$m,
	helpTierBorked: helpTierBorked$m,
	helpTierPending: helpTierPending$m,
	helpTierNoReport: helpTierNoReport$m,
	helpSettingsExplain: helpSettingsExplain$m,
	helpSettingSize: helpSettingSize$m,
	helpSettingSizeDesc: helpSettingSizeDesc$m,
	helpSettingPosition: helpSettingPosition$m,
	helpSettingPositionDesc: helpSettingPositionDesc$m,
	helpSettingSubmit: helpSettingSubmit$m,
	helpSettingSubmitDesc: helpSettingSubmitDesc$m,
	helpProtonDBTitle: helpProtonDBTitle$m,
	helpProtonDBDesc: helpProtonDBDesc$m,
	helpProtonDBSteps: helpProtonDBSteps$m,
	helpStep1: helpStep1$m,
	helpStep2: helpStep2$m,
	helpStep3: helpStep3$m,
	helpStep4: helpStep4$m,
	helpStep5: helpStep5$m,
	helpStep6: helpStep6$m,
	helpTip: helpTip$m,
	helpTipContent: helpTipContent$m,
	helpSubmitTitle: helpSubmitTitle$m,
	helpSubmitDesc: helpSubmitDesc$m,
	helpSubmitStep1: helpSubmitStep1$m,
	helpSubmitStep2: helpSubmitStep2$m,
	helpSubmitStep3: helpSubmitStep3$m
};

var sectionLibrary$l = "Library";
var sectionStore$l = "Store";
var sectionLinks$l = "Links";
var badgePosition$l = "Posición de medalla";
var badgePositionDescription$l = "Posición de la medalla dentro de la página encabezado del juego";
var badgeSize$l = "Tamaño de medalla";
var badgeSizeDescription$l = "Elige un tamaño diferente para la medalla";
var caching$l = "Caché";
var clearCache$l = "Limpiar caché de ProtonDB";
var clearCacheLabel$l = "Limpiar la caché para forzar el refresco de todas las medallas ProtonDB";
var expandOnHover$l = "Expandir etiqueta al colocar el cursor";
var expandOnHoverDescription$l = "Solo minimalista. Mostrar texto al enfocar";
var positionTopLeft$l = "Superior izquierda";
var positionTopRight$l = "Superior derecha";
var positionBottomLeft$l = "Bottom Left";
var positionBottomMiddle$l = "Bottom Middle";
var positionBottomRight$l = "Bottom Right";
var positionTopMiddle$l = "Superior centro";
var settings$l = "Configuración";
var sizeMinimalist$l = "Minimalista";
var sizeRegular$l = "Regular";
var sizeSmall$l = "Pequeño";
var tierborked$l = "ROTO";
var tierbronze$l = "BRONCE";
var tiergold$l = "ORO";
var tierMinborked$l = "ROTO";
var tierMinbronze$l = "BRON";
var tierMingold$l = "ORO";
var tierMinpending$l = "PEND";
var tierMinplatinum$l = "PLATI";
var tierMinsilver$l = "PLATA";
var tierpending$l = "PENDIENTE";
var tierplatinum$l = "PLATINO";
var tiersilver$l = "PLATA";
var expandOnHoverOff$l = "Apagado";
var submit$l = "ENVIAR";
var login$l = "Iniciar sesión";
var loading$l = "...";
var noReport$l = "SIN REPORTE";
var disableSubmit$l = "Desactivar envío";
var disableSubmitDesc$l = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$l = "Enable Badge on Library";
var enableLibraryBadgeDesc$l = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$l = "Activar medalla en páginas de la tienda";
var enableStoreBadgeDesc$l = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$l = "Store Badge Position";
var storeBadgePositionDesc$l = "Position the badge overlay on store pages";
var storePositionBottomCenter$l = "Bottom Center";
var storePositionBottomLeft$l = "Bottom Left";
var storePositionBottomRight$l = "Bottom Right";
var storePositionTopMiddle$l = "Top Right";
var helpButton$l = "Instrucciones";
var helpTitle$l = "ProtonDB Badges - Ayuda";
var helpToc$l = "Ir a sección";
var helpClose$l = "Cerrar";
var helpAboutTitle$l = "Acerca de este plugin";
var helpAboutDesc$l = "ProtonDB Badges muestra las calificaciones de compatibilidad de ProtonDB directamente en tu Steam Deck. Ve de un vistazo qué tan bien funcionan los juegos en Linux/Proton sin salir de la interfaz de Steam.";
var helpUsingTitle$l = "Usando el plugin";
var helpBadgeTiers$l = "Niveles de medalla:";
var helpTierPlatinum$l = "Funciona perfectamente sin configuración";
var helpTierGold$l = "Funciona perfectamente después de ajustes";
var helpTierSilver$l = "Funciona con problemas menores";
var helpTierBronze$l = "Funciona, pero a menudo se bloquea o tiene problemas";
var helpTierBorked$l = "No funciona o es injugable";
var helpTierPending$l = "Tiene reportes pero aún no está calificado";
var helpTierNoReport$l = "Sin reportes aún - ¡sé el primero!";
var helpSettingsExplain$l = "Explicación de ajustes:";
var helpSettingSize$l = "Tamaño de medalla";
var helpSettingSizeDesc$l = "Regular (tamaño completo), Pequeño (compacto) o Minimalista (solo icono)";
var helpSettingPosition$l = "Posición de medalla";
var helpSettingPositionDesc$l = "Dónde aparece la medalla en las páginas de juegos";
var helpSettingSubmit$l = "Desactivar envío";
var helpSettingSubmitDesc$l = "Ocultar el botón para enviar reportes a ProtonDB";
var helpProtonDBTitle$l = "Agregar Steam Deck a ProtonDB";
var helpProtonDBDesc$l = "Para enviar reportes desde tu Steam Deck, necesitas registrarlo como dispositivo en ProtonDB. Esto requiere el Modo Escritorio.";
var helpProtonDBSteps$l = "Pasos para registrar:";
var helpStep1$l = "Cambia al Modo Escritorio (mantén presionado el botón de Encendido → Cambiar a Escritorio)";
var helpStep2$l = "Abre un navegador web (Firefox o Chrome)";
var helpStep3$l = "Ve a protondb.com e inicia sesión con tu cuenta de Steam";
var helpStep4$l = "Haz clic en tu icono de perfil en la esquina superior derecha";
var helpStep5$l = "Ve a 'My Rigs' y haz clic en 'Add a Rig'";
var helpStep6$l = "Selecciona 'Steam Deck' como tipo de dispositivo y guarda";
var helpTip$l = "Consejo";
var helpTipContent$l = "Después de registrar tu Steam Deck, puedes enviar reportes directamente desde el Modo Juego usando el botón Enviar en las medallas.";
var helpSubmitTitle$l = "Enviar reportes de juegos";
var helpSubmitDesc$l = "¡Ayuda a la comunidad compartiendo tu experiencia de juego! Los reportes ayudan a otros a saber qué esperar.";
var helpSubmitStep1$l = "Juega un juego durante al menos 15-30 minutos";
var helpSubmitStep2$l = "Haz clic en el botón Enviar en la medalla de ProtonDB";
var helpSubmitStep3$l = "Completa el formulario de reporte en el sitio web de ProtonDB";
var es419 = {
	sectionLibrary: sectionLibrary$l,
	sectionStore: sectionStore$l,
	sectionLinks: sectionLinks$l,
	badgePosition: badgePosition$l,
	badgePositionDescription: badgePositionDescription$l,
	badgeSize: badgeSize$l,
	badgeSizeDescription: badgeSizeDescription$l,
	caching: caching$l,
	clearCache: clearCache$l,
	clearCacheLabel: clearCacheLabel$l,
	expandOnHover: expandOnHover$l,
	expandOnHoverDescription: expandOnHoverDescription$l,
	positionTopLeft: positionTopLeft$l,
	positionTopRight: positionTopRight$l,
	positionBottomLeft: positionBottomLeft$l,
	positionBottomMiddle: positionBottomMiddle$l,
	positionBottomRight: positionBottomRight$l,
	positionTopMiddle: positionTopMiddle$l,
	settings: settings$l,
	sizeMinimalist: sizeMinimalist$l,
	sizeRegular: sizeRegular$l,
	sizeSmall: sizeSmall$l,
	tierborked: tierborked$l,
	tierbronze: tierbronze$l,
	tiergold: tiergold$l,
	tierMinborked: tierMinborked$l,
	tierMinbronze: tierMinbronze$l,
	tierMingold: tierMingold$l,
	tierMinpending: tierMinpending$l,
	tierMinplatinum: tierMinplatinum$l,
	tierMinsilver: tierMinsilver$l,
	tierpending: tierpending$l,
	tierplatinum: tierplatinum$l,
	tiersilver: tiersilver$l,
	expandOnHoverOff: expandOnHoverOff$l,
	submit: submit$l,
	login: login$l,
	loading: loading$l,
	noReport: noReport$l,
	disableSubmit: disableSubmit$l,
	disableSubmitDesc: disableSubmitDesc$l,
	enableLibraryBadge: enableLibraryBadge$l,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$l,
	enableStoreBadge: enableStoreBadge$l,
	enableStoreBadgeDesc: enableStoreBadgeDesc$l,
	storeBadgePosition: storeBadgePosition$l,
	storeBadgePositionDesc: storeBadgePositionDesc$l,
	storePositionBottomCenter: storePositionBottomCenter$l,
	storePositionBottomLeft: storePositionBottomLeft$l,
	storePositionBottomRight: storePositionBottomRight$l,
	storePositionTopMiddle: storePositionTopMiddle$l,
	helpButton: helpButton$l,
	helpTitle: helpTitle$l,
	helpToc: helpToc$l,
	helpClose: helpClose$l,
	helpAboutTitle: helpAboutTitle$l,
	helpAboutDesc: helpAboutDesc$l,
	helpUsingTitle: helpUsingTitle$l,
	helpBadgeTiers: helpBadgeTiers$l,
	helpTierPlatinum: helpTierPlatinum$l,
	helpTierGold: helpTierGold$l,
	helpTierSilver: helpTierSilver$l,
	helpTierBronze: helpTierBronze$l,
	helpTierBorked: helpTierBorked$l,
	helpTierPending: helpTierPending$l,
	helpTierNoReport: helpTierNoReport$l,
	helpSettingsExplain: helpSettingsExplain$l,
	helpSettingSize: helpSettingSize$l,
	helpSettingSizeDesc: helpSettingSizeDesc$l,
	helpSettingPosition: helpSettingPosition$l,
	helpSettingPositionDesc: helpSettingPositionDesc$l,
	helpSettingSubmit: helpSettingSubmit$l,
	helpSettingSubmitDesc: helpSettingSubmitDesc$l,
	helpProtonDBTitle: helpProtonDBTitle$l,
	helpProtonDBDesc: helpProtonDBDesc$l,
	helpProtonDBSteps: helpProtonDBSteps$l,
	helpStep1: helpStep1$l,
	helpStep2: helpStep2$l,
	helpStep3: helpStep3$l,
	helpStep4: helpStep4$l,
	helpStep5: helpStep5$l,
	helpStep6: helpStep6$l,
	helpTip: helpTip$l,
	helpTipContent: helpTipContent$l,
	helpSubmitTitle: helpSubmitTitle$l,
	helpSubmitDesc: helpSubmitDesc$l,
	helpSubmitStep1: helpSubmitStep1$l,
	helpSubmitStep2: helpSubmitStep2$l,
	helpSubmitStep3: helpSubmitStep3$l
};

var sectionLibrary$k = "Library";
var sectionStore$k = "Store";
var sectionLinks$k = "Links";
var badgePosition$k = "Merkin Sijainti";
var badgePositionDescription$k = "Sijoita merkki pelin sivun otsikkoon";
var badgeSize$k = "Merkin koko";
var badgeSizeDescription$k = "Valitse eri koko merkille";
var caching$k = "Välimuisti";
var clearCache$k = "Tyhjennä ProtonDB Välimuisti";
var clearCacheLabel$k = "Tyhjennä välimuisti pakottaaksesi virkistämään kaikki ProtonDB merkit";
var expandOnHover$k = "Laajenna nimi hiiren päällä";
var expandOnHoverDescription$k = "Vain minimalisti. Näytä merkkiteksti tarkennettaessa";
var positionTopLeft$k = "Vasen Yläreuna";
var positionTopRight$k = "Oikea Yläreuna";
var positionBottomLeft$k = "Bottom Left";
var positionBottomMiddle$k = "Bottom Middle";
var positionBottomRight$k = "Bottom Right";
var positionTopMiddle$k = "Keskellä Yläreuna";
var settings$k = "Asetukset";
var sizeMinimalist$k = "Minimalisti";
var sizeRegular$k = "Tavallinen";
var sizeSmall$k = "Pieni";
var tierborked$k = "RAJOITETTU";
var tierbronze$k = "PRONSSI";
var tiergold$k = "KULTA";
var tierMinborked$k = "RAJOITETTU";
var tierMinbronze$k = "PRONSSI";
var tierMingold$k = "KULTA";
var tierMinpending$k = "ODOTTAA";
var tierMinplatinum$k = "PLATINA";
var tierMinsilver$k = "HOPEA";
var tierpending$k = "ODOTTAA";
var tierplatinum$k = "PLATINA";
var tiersilver$k = "HOPEA";
var expandOnHoverOff$k = "Pois Päältä";
var submit$k = "LÄHETÄ";
var login$k = "Kirjaudu sisään";
var loading$k = "...";
var noReport$k = "EI RAPORTTIA";
var disableSubmit$k = "Poista lähetys käytöstä";
var disableSubmitDesc$k = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$k = "Enable Badge on Library";
var enableLibraryBadgeDesc$k = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$k = "Ota merkki käyttöön kauppasivuilla";
var enableStoreBadgeDesc$k = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$k = "Store Badge Position";
var storeBadgePositionDesc$k = "Position the badge overlay on store pages";
var storePositionBottomCenter$k = "Bottom Center";
var storePositionBottomLeft$k = "Bottom Left";
var storePositionBottomRight$k = "Bottom Right";
var storePositionTopMiddle$k = "Top Right";
var helpButton$k = "Ohjeet";
var helpTitle$k = "ProtonDB Badges - Ohje";
var helpToc$k = "Siirry osioon";
var helpClose$k = "Sulje";
var helpAboutTitle$k = "Tietoja tästä lisäosasta";
var helpAboutDesc$k = "ProtonDB Badges näyttää ProtonDB-yhteensopivuusarviot suoraan Steam Deckissäsi. Näe yhdellä silmäyksellä, kuinka hyvin pelit toimivat Linuxissa/Protonissa poistumatta Steam-käyttöliittymästä.";
var helpUsingTitle$k = "Lisäosan käyttö";
var helpBadgeTiers$k = "Merkkitasot:";
var helpTierPlatinum$k = "Toimii täydellisesti ilman asetuksia";
var helpTierGold$k = "Toimii täydellisesti säätöjen jälkeen";
var helpTierSilver$k = "Toimii pienin ongelmin";
var helpTierBronze$k = "Toimii, mutta kaatuu usein tai on ongelmia";
var helpTierBorked$k = "Ei toimi tai on pelaamaton";
var helpTierPending$k = "Raportteja on, mutta ei vielä arvioitu";
var helpTierNoReport$k = "Ei vielä raportteja - ole ensimmäinen!";
var helpSettingsExplain$k = "Asetusten selitykset:";
var helpSettingSize$k = "Merkin koko";
var helpSettingSizeDesc$k = "Tavallinen (täysikokoinen), Pieni (kompakti) tai Minimalistinen (vain kuvake)";
var helpSettingPosition$k = "Merkin sijainti";
var helpSettingPositionDesc$k = "Missä merkki näkyy pelisivuilla";
var helpSettingSubmit$k = "Poista lähetys käytöstä";
var helpSettingSubmitDesc$k = "Piilota painike raporttien lähettämiseksi ProtonDB:hen";
var helpProtonDBTitle$k = "Steam Deckin lisääminen ProtonDB:hen";
var helpProtonDBDesc$k = "Lähettääksesi raportteja Steam Deckistäsi, sinun täytyy rekisteröidä se laitteeksi ProtonDB:ssä. Tämä vaatii työpöytätilan.";
var helpProtonDBSteps$k = "Rekisteröintivaiheet:";
var helpStep1$k = "Vaihda työpöytätilaan (pidä virtapainiketta → Vaihda työpöydälle)";
var helpStep2$k = "Avaa selain (Firefox tai Chrome)";
var helpStep3$k = "Mene osoitteeseen protondb.com ja kirjaudu Steam-tililläsi";
var helpStep4$k = "Napsauta profiilikuvakettasi oikeassa yläkulmassa";
var helpStep5$k = "Mene kohtaan 'My Rigs' ja napsauta 'Add a Rig'";
var helpStep6$k = "Valitse 'Steam Deck' laitetyypiksi ja tallenna";
var helpTip$k = "Vinkki";
var helpTipContent$k = "Steam Deckin rekisteröinnin jälkeen voit lähettää raportteja suoraan pelitilasta käyttämällä Lähetä-painiketta merkeissä.";
var helpSubmitTitle$k = "Peliraporttien lähettäminen";
var helpSubmitDesc$k = "Auta yhteisöä jakamalla pelikokemuksesi! Raportit auttavat muita tietämään, mitä odottaa.";
var helpSubmitStep1$k = "Pelaa peliä vähintään 15-30 minuuttia";
var helpSubmitStep2$k = "Napsauta Lähetä-painiketta ProtonDB-merkissä";
var helpSubmitStep3$k = "Täytä raporttilomake ProtonDB:n verkkosivustolla";
var fi = {
	sectionLibrary: sectionLibrary$k,
	sectionStore: sectionStore$k,
	sectionLinks: sectionLinks$k,
	badgePosition: badgePosition$k,
	badgePositionDescription: badgePositionDescription$k,
	badgeSize: badgeSize$k,
	badgeSizeDescription: badgeSizeDescription$k,
	caching: caching$k,
	clearCache: clearCache$k,
	clearCacheLabel: clearCacheLabel$k,
	expandOnHover: expandOnHover$k,
	expandOnHoverDescription: expandOnHoverDescription$k,
	positionTopLeft: positionTopLeft$k,
	positionTopRight: positionTopRight$k,
	positionBottomLeft: positionBottomLeft$k,
	positionBottomMiddle: positionBottomMiddle$k,
	positionBottomRight: positionBottomRight$k,
	positionTopMiddle: positionTopMiddle$k,
	settings: settings$k,
	sizeMinimalist: sizeMinimalist$k,
	sizeRegular: sizeRegular$k,
	sizeSmall: sizeSmall$k,
	tierborked: tierborked$k,
	tierbronze: tierbronze$k,
	tiergold: tiergold$k,
	tierMinborked: tierMinborked$k,
	tierMinbronze: tierMinbronze$k,
	tierMingold: tierMingold$k,
	tierMinpending: tierMinpending$k,
	tierMinplatinum: tierMinplatinum$k,
	tierMinsilver: tierMinsilver$k,
	tierpending: tierpending$k,
	tierplatinum: tierplatinum$k,
	tiersilver: tiersilver$k,
	expandOnHoverOff: expandOnHoverOff$k,
	submit: submit$k,
	login: login$k,
	loading: loading$k,
	noReport: noReport$k,
	disableSubmit: disableSubmit$k,
	disableSubmitDesc: disableSubmitDesc$k,
	enableLibraryBadge: enableLibraryBadge$k,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$k,
	enableStoreBadge: enableStoreBadge$k,
	enableStoreBadgeDesc: enableStoreBadgeDesc$k,
	storeBadgePosition: storeBadgePosition$k,
	storeBadgePositionDesc: storeBadgePositionDesc$k,
	storePositionBottomCenter: storePositionBottomCenter$k,
	storePositionBottomLeft: storePositionBottomLeft$k,
	storePositionBottomRight: storePositionBottomRight$k,
	storePositionTopMiddle: storePositionTopMiddle$k,
	helpButton: helpButton$k,
	helpTitle: helpTitle$k,
	helpToc: helpToc$k,
	helpClose: helpClose$k,
	helpAboutTitle: helpAboutTitle$k,
	helpAboutDesc: helpAboutDesc$k,
	helpUsingTitle: helpUsingTitle$k,
	helpBadgeTiers: helpBadgeTiers$k,
	helpTierPlatinum: helpTierPlatinum$k,
	helpTierGold: helpTierGold$k,
	helpTierSilver: helpTierSilver$k,
	helpTierBronze: helpTierBronze$k,
	helpTierBorked: helpTierBorked$k,
	helpTierPending: helpTierPending$k,
	helpTierNoReport: helpTierNoReport$k,
	helpSettingsExplain: helpSettingsExplain$k,
	helpSettingSize: helpSettingSize$k,
	helpSettingSizeDesc: helpSettingSizeDesc$k,
	helpSettingPosition: helpSettingPosition$k,
	helpSettingPositionDesc: helpSettingPositionDesc$k,
	helpSettingSubmit: helpSettingSubmit$k,
	helpSettingSubmitDesc: helpSettingSubmitDesc$k,
	helpProtonDBTitle: helpProtonDBTitle$k,
	helpProtonDBDesc: helpProtonDBDesc$k,
	helpProtonDBSteps: helpProtonDBSteps$k,
	helpStep1: helpStep1$k,
	helpStep2: helpStep2$k,
	helpStep3: helpStep3$k,
	helpStep4: helpStep4$k,
	helpStep5: helpStep5$k,
	helpStep6: helpStep6$k,
	helpTip: helpTip$k,
	helpTipContent: helpTipContent$k,
	helpSubmitTitle: helpSubmitTitle$k,
	helpSubmitDesc: helpSubmitDesc$k,
	helpSubmitStep1: helpSubmitStep1$k,
	helpSubmitStep2: helpSubmitStep2$k,
	helpSubmitStep3: helpSubmitStep3$k
};

var sectionLibrary$j = "Bibliothèque";
var sectionStore$j = "Boutique";
var sectionLinks$j = "Links";
var badgePosition$j = "Position du Badge";
var badgePositionDescription$j = "Positionnez le badge dans l'en-tête de la page du jeu";
var badgeSize$j = "Taille du Badge";
var badgeSizeDescription$j = "Choisissez une taille différente pour le badge";
var caching$j = "Mise en cache";
var clearCache$j = "Vider le cache ProtonDB";
var clearCacheLabel$j = "Videz le cache pour forcer le rafraîchissement de tous les badges ProtonDB";
var expandOnHover$j = "Développer l'étiquette au survol";
var expandOnHoverDescription$j = "Minimaliste uniquement. Afficher le texte du badge au focus";
var positionTopLeft$j = "En haut à gauche";
var positionTopRight$j = "En haut à droite";
var positionBottomLeft$j = "En bas à gauche";
var positionBottomMiddle$j = "En bas au centre";
var positionBottomRight$j = "En bas à droite";
var positionTopMiddle$j = "En haut au centre";
var settings$j = "Paramètres";
var sizeMinimalist$j = "Minimaliste";
var sizeRegular$j = "Standard";
var sizeSmall$j = "Petit";
var tierborked$j = "INJOUABLE";
var tierbronze$j = "BRONZE";
var tiergold$j = "OR";
var tierMinborked$j = "BORK";
var tierMinbronze$j = "BRON";
var tierMingold$j = "OR";
var tierMinpending$j = "PEND";
var tierMinplatinum$j = "PLAT";
var tierMinsilver$j = "SILV";
var tierpending$j = "EN ATTENTE";
var tierplatinum$j = "PLATINE";
var tiersilver$j = "ARGENT";
var expandOnHoverOff$j = "Désactivé";
var submit$j = "SOUMETTRE";
var login$j = "Connexion";
var loading$j = "...";
var noReport$j = "AUCUN RAPPORT";
var disableSubmit$j = "Désactiver l'envoi";
var disableSubmitDesc$j = "Masquer le bouton d'envoi pour les rapports ProtonDB";
var enableLibraryBadge$j = "Activer le badge dans la bibliothèque";
var enableLibraryBadgeDesc$j = "Afficher le badge ProtonDB sur les pages de jeux de votre bibliothèque";
var enableStoreBadge$j = "Activer le badge sur les pages du magasin";
var enableStoreBadgeDesc$j = "Afficher le badge ProtonDB en superposition sur les pages du magasin";
var storeBadgePosition$j = "Position du badge magasin";
var storeBadgePositionDesc$j = "Positionner le badge en superposition sur les pages du magasin";
var storePositionBottomCenter$j = "En bas au centre";
var storePositionBottomLeft$j = "En bas à gauche";
var storePositionBottomRight$j = "En bas à droite";
var storePositionTopMiddle$j = "En haut au centre";
var helpButton$j = "Instructions";
var helpTitle$j = "ProtonDB Badges - Aide";
var helpToc$j = "Aller à la section";
var helpClose$j = "Fermer";
var helpAboutTitle$j = "À propos de ce plugin";
var helpAboutDesc$j = "ProtonDB Badges affiche les évaluations de compatibilité ProtonDB directement sur votre Steam Deck. Voyez en un coup d'œil comment les jeux fonctionnent sous Linux/Proton sans quitter l'interface Steam.";
var helpUsingTitle$j = "Utilisation du plugin";
var helpBadgeTiers$j = "Niveaux de badge:";
var helpTierPlatinum$j = "Fonctionne parfaitement sans configuration";
var helpTierGold$j = "Fonctionne parfaitement après ajustements";
var helpTierSilver$j = "Fonctionne avec des problèmes mineurs";
var helpTierBronze$j = "Fonctionne, mais plante souvent ou a des problèmes";
var helpTierBorked$j = "Ne fonctionne pas ou est injouable";
var helpTierPending$j = "A des rapports mais pas encore noté";
var helpTierNoReport$j = "Aucun rapport soumis - soyez le premier!";
var helpSettingsExplain$j = "Explication des paramètres:";
var helpSettingSize$j = "Taille du badge";
var helpSettingSizeDesc$j = "Standard (taille complète), Petit (compact) ou Minimaliste (icône uniquement)";
var helpSettingPosition$j = "Position du badge";
var helpSettingPositionDesc$j = "Où le badge apparaît sur les pages de jeux";
var helpSettingSubmit$j = "Désactiver l'envoi";
var helpSettingSubmitDesc$j = "Masquer le bouton pour soumettre des rapports à ProtonDB";
var helpProtonDBTitle$j = "Ajouter Steam Deck à ProtonDB";
var helpProtonDBDesc$j = "Pour soumettre des rapports depuis votre Steam Deck, vous devez l'enregistrer comme appareil sur ProtonDB. Cela nécessite le mode Bureau.";
var helpProtonDBSteps$j = "Étapes d'enregistrement:";
var helpStep1$j = "Passez en mode Bureau (maintenez le bouton Power → Passer au Bureau)";
var helpStep2$j = "Ouvrez un navigateur web (Firefox ou Chrome)";
var helpStep3$j = "Allez sur protondb.com et connectez-vous avec votre compte Steam";
var helpStep4$j = "Cliquez sur votre icône de profil en haut à droite";
var helpStep5$j = "Allez dans 'My Rigs' et cliquez sur 'Add a Rig'";
var helpStep6$j = "Sélectionnez 'Steam Deck' comme type d'appareil et enregistrez";
var helpTip$j = "Astuce";
var helpTipContent$j = "Après avoir enregistré votre Steam Deck, vous pouvez soumettre des rapports directement depuis le mode Jeu en utilisant le bouton Soumettre sur les badges.";
var helpSubmitTitle$j = "Soumettre des rapports de jeux";
var helpSubmitDesc$j = "Aidez la communauté en partageant votre expérience de jeu! Les rapports aident les autres à savoir à quoi s'attendre.";
var helpSubmitStep1$j = "Jouez à un jeu pendant au moins 15-30 minutes";
var helpSubmitStep2$j = "Cliquez sur le bouton Soumettre sur le badge ProtonDB";
var helpSubmitStep3$j = "Remplissez le formulaire de rapport sur le site ProtonDB";
var fr = {
	sectionLibrary: sectionLibrary$j,
	sectionStore: sectionStore$j,
	sectionLinks: sectionLinks$j,
	badgePosition: badgePosition$j,
	badgePositionDescription: badgePositionDescription$j,
	badgeSize: badgeSize$j,
	badgeSizeDescription: badgeSizeDescription$j,
	caching: caching$j,
	clearCache: clearCache$j,
	clearCacheLabel: clearCacheLabel$j,
	expandOnHover: expandOnHover$j,
	expandOnHoverDescription: expandOnHoverDescription$j,
	positionTopLeft: positionTopLeft$j,
	positionTopRight: positionTopRight$j,
	positionBottomLeft: positionBottomLeft$j,
	positionBottomMiddle: positionBottomMiddle$j,
	positionBottomRight: positionBottomRight$j,
	positionTopMiddle: positionTopMiddle$j,
	settings: settings$j,
	sizeMinimalist: sizeMinimalist$j,
	sizeRegular: sizeRegular$j,
	sizeSmall: sizeSmall$j,
	tierborked: tierborked$j,
	tierbronze: tierbronze$j,
	tiergold: tiergold$j,
	tierMinborked: tierMinborked$j,
	tierMinbronze: tierMinbronze$j,
	tierMingold: tierMingold$j,
	tierMinpending: tierMinpending$j,
	tierMinplatinum: tierMinplatinum$j,
	tierMinsilver: tierMinsilver$j,
	tierpending: tierpending$j,
	tierplatinum: tierplatinum$j,
	tiersilver: tiersilver$j,
	expandOnHoverOff: expandOnHoverOff$j,
	submit: submit$j,
	login: login$j,
	loading: loading$j,
	noReport: noReport$j,
	disableSubmit: disableSubmit$j,
	disableSubmitDesc: disableSubmitDesc$j,
	enableLibraryBadge: enableLibraryBadge$j,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$j,
	enableStoreBadge: enableStoreBadge$j,
	enableStoreBadgeDesc: enableStoreBadgeDesc$j,
	storeBadgePosition: storeBadgePosition$j,
	storeBadgePositionDesc: storeBadgePositionDesc$j,
	storePositionBottomCenter: storePositionBottomCenter$j,
	storePositionBottomLeft: storePositionBottomLeft$j,
	storePositionBottomRight: storePositionBottomRight$j,
	storePositionTopMiddle: storePositionTopMiddle$j,
	helpButton: helpButton$j,
	helpTitle: helpTitle$j,
	helpToc: helpToc$j,
	helpClose: helpClose$j,
	helpAboutTitle: helpAboutTitle$j,
	helpAboutDesc: helpAboutDesc$j,
	helpUsingTitle: helpUsingTitle$j,
	helpBadgeTiers: helpBadgeTiers$j,
	helpTierPlatinum: helpTierPlatinum$j,
	helpTierGold: helpTierGold$j,
	helpTierSilver: helpTierSilver$j,
	helpTierBronze: helpTierBronze$j,
	helpTierBorked: helpTierBorked$j,
	helpTierPending: helpTierPending$j,
	helpTierNoReport: helpTierNoReport$j,
	helpSettingsExplain: helpSettingsExplain$j,
	helpSettingSize: helpSettingSize$j,
	helpSettingSizeDesc: helpSettingSizeDesc$j,
	helpSettingPosition: helpSettingPosition$j,
	helpSettingPositionDesc: helpSettingPositionDesc$j,
	helpSettingSubmit: helpSettingSubmit$j,
	helpSettingSubmitDesc: helpSettingSubmitDesc$j,
	helpProtonDBTitle: helpProtonDBTitle$j,
	helpProtonDBDesc: helpProtonDBDesc$j,
	helpProtonDBSteps: helpProtonDBSteps$j,
	helpStep1: helpStep1$j,
	helpStep2: helpStep2$j,
	helpStep3: helpStep3$j,
	helpStep4: helpStep4$j,
	helpStep5: helpStep5$j,
	helpStep6: helpStep6$j,
	helpTip: helpTip$j,
	helpTipContent: helpTipContent$j,
	helpSubmitTitle: helpSubmitTitle$j,
	helpSubmitDesc: helpSubmitDesc$j,
	helpSubmitStep1: helpSubmitStep1$j,
	helpSubmitStep2: helpSubmitStep2$j,
	helpSubmitStep3: helpSubmitStep3$j
};

var sectionLibrary$i = "Library";
var sectionStore$i = "Store";
var sectionLinks$i = "Links";
var badgePosition$i = "Jelvény pozíció";
var badgePositionDescription$i = "A jelvény pozíciója a játékoldal fejlécében";
var badgeSize$i = "Jelvény méret";
var badgeSizeDescription$i = "Válasszon más méretet a jelvényhez";
var caching$i = "Gyorsítótárazás";
var clearCache$i = "ProtonDB gyorsítótár törlése";
var clearCacheLabel$i = "Törölje a gyorsítótárat az összes ProtonDB jelvény frissítésének kényszerítéséhez";
var expandOnHover$i = "Címke kibontása rámutatáskor";
var expandOnHoverDescription$i = "Csak minimalista. Jelvényszöveg megjelenítése fókuszáláskor";
var positionTopLeft$i = "Bal felső";
var positionTopRight$i = "Jobb felső";
var positionBottomLeft$i = "Bottom Left";
var positionBottomMiddle$i = "Bottom Middle";
var positionBottomRight$i = "Bottom Right";
var positionTopMiddle$i = "Középen felső";
var settings$i = "Beállítások";
var sizeMinimalist$i = "Minimalista";
var sizeRegular$i = "Normál";
var sizeSmall$i = "Kicsi";
var tierborked$i = "HIBÁS";
var tierbronze$i = "BRONZ";
var tiergold$i = "ARANY";
var tierMinborked$i = "BORK";
var tierMinbronze$i = "BRON";
var tierMingold$i = "GOLD";
var tierMinpending$i = "PEND";
var tierMinplatinum$i = "PLAT";
var tierMinsilver$i = "SILV";
var tierpending$i = "FÜGGŐBEN";
var tierplatinum$i = "PLATINA";
var tiersilver$i = "EZÜST";
var expandOnHoverOff$i = "Ki";
var submit$i = "BEKÜLDÉS";
var login$i = "Bejelentkezés";
var loading$i = "...";
var noReport$i = "NINCS JELENTÉS";
var disableSubmit$i = "Beküldés letiltása";
var disableSubmitDesc$i = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$i = "Enable Badge on Library";
var enableLibraryBadgeDesc$i = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$i = "Jelvény engedélyezése az áruházi oldalakon";
var enableStoreBadgeDesc$i = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$i = "Store Badge Position";
var storeBadgePositionDesc$i = "Position the badge overlay on store pages";
var storePositionBottomCenter$i = "Bottom Center";
var storePositionBottomLeft$i = "Bottom Left";
var storePositionBottomRight$i = "Bottom Right";
var storePositionTopMiddle$i = "Top Right";
var helpButton$i = "Útmutató";
var helpTitle$i = "ProtonDB Badges - Súgó";
var helpToc$i = "Ugrás a szakaszhoz";
var helpClose$i = "Bezárás";
var helpAboutTitle$i = "A bővítményről";
var helpAboutDesc$i = "A ProtonDB Badges közvetlenül a Steam Decken jeleníti meg a ProtonDB kompatibilitási értékeléseket. Egy pillantás alatt láthatod, milyen jól futnak a játékok Linux/Proton alatt anélkül, hogy elhagynád a Steam felületet.";
var helpUsingTitle$i = "A bővítmény használata";
var helpBadgeTiers$i = "Jelvényszintek:";
var helpTierPlatinum$i = "Tökéletesen fut beállítás nélkül";
var helpTierGold$i = "Tökéletesen fut finomhangolás után";
var helpTierSilver$i = "Fut kisebb problémákkal";
var helpTierBronze$i = "Fut, de gyakran összeomlik vagy problémás";
var helpTierBorked$i = "Nem fut vagy játszhatatlan";
var helpTierPending$i = "Van jelentés, de még nincs értékelve";
var helpTierNoReport$i = "Még nincsenek jelentések - légy az első!";
var helpSettingsExplain$i = "Beállítások magyarázata:";
var helpSettingSize$i = "Jelvény mérete";
var helpSettingSizeDesc$i = "Normál (teljes méret), Kicsi (kompakt) vagy Minimalista (csak ikon)";
var helpSettingPosition$i = "Jelvény pozíciója";
var helpSettingPositionDesc$i = "Hol jelenik meg a jelvény a játékoldalon";
var helpSettingSubmit$i = "Beküldés letiltása";
var helpSettingSubmitDesc$i = "A ProtonDB-re történő jelentésküldő gomb elrejtése";
var helpProtonDBTitle$i = "Steam Deck hozzáadása a ProtonDB-hez";
var helpProtonDBDesc$i = "A Steam Deckről történő jelentésküldéshez regisztrálnod kell azt eszközként a ProtonDB-n. Ehhez Asztali mód szükséges.";
var helpProtonDBSteps$i = "Regisztráció lépései:";
var helpStep1$i = "Váltás Asztali módra (tartsd nyomva a bekapcsoló gombot → Váltás asztalra)";
var helpStep2$i = "Nyiss meg egy böngészőt (Firefox vagy Chrome)";
var helpStep3$i = "Menj a protondb.com oldalra és jelentkezz be Steam fiókoddal";
var helpStep4$i = "Kattints a profilodra a jobb felső sarokban";
var helpStep5$i = "Menj a 'My Rigs' menüpontra és kattints az 'Add a Rig' gombra";
var helpStep6$i = "Válaszd a 'Steam Deck' eszköztípust és mentsd el";
var helpTip$i = "Tipp";
var helpTipContent$i = "A Steam Deck regisztrálása után közvetlenül a Játék módból küldhetsz jelentéseket a jelvényeken található Beküldés gombbal.";
var helpSubmitTitle$i = "Játékjelentések beküldése";
var helpSubmitDesc$i = "Segíts a közösségnek a játékélményed megosztásával! A jelentések segítenek másoknak tudni, mire számíthatnak.";
var helpSubmitStep1$i = "Játssz egy játékkal legalább 15-30 percig";
var helpSubmitStep2$i = "Kattints a Beküldés gombra a ProtonDB jelvényen";
var helpSubmitStep3$i = "Töltsd ki a jelentés űrlapot a ProtonDB weboldalán";
var hu = {
	sectionLibrary: sectionLibrary$i,
	sectionStore: sectionStore$i,
	sectionLinks: sectionLinks$i,
	badgePosition: badgePosition$i,
	badgePositionDescription: badgePositionDescription$i,
	badgeSize: badgeSize$i,
	badgeSizeDescription: badgeSizeDescription$i,
	caching: caching$i,
	clearCache: clearCache$i,
	clearCacheLabel: clearCacheLabel$i,
	expandOnHover: expandOnHover$i,
	expandOnHoverDescription: expandOnHoverDescription$i,
	positionTopLeft: positionTopLeft$i,
	positionTopRight: positionTopRight$i,
	positionBottomLeft: positionBottomLeft$i,
	positionBottomMiddle: positionBottomMiddle$i,
	positionBottomRight: positionBottomRight$i,
	positionTopMiddle: positionTopMiddle$i,
	settings: settings$i,
	sizeMinimalist: sizeMinimalist$i,
	sizeRegular: sizeRegular$i,
	sizeSmall: sizeSmall$i,
	tierborked: tierborked$i,
	tierbronze: tierbronze$i,
	tiergold: tiergold$i,
	tierMinborked: tierMinborked$i,
	tierMinbronze: tierMinbronze$i,
	tierMingold: tierMingold$i,
	tierMinpending: tierMinpending$i,
	tierMinplatinum: tierMinplatinum$i,
	tierMinsilver: tierMinsilver$i,
	tierpending: tierpending$i,
	tierplatinum: tierplatinum$i,
	tiersilver: tiersilver$i,
	expandOnHoverOff: expandOnHoverOff$i,
	submit: submit$i,
	login: login$i,
	loading: loading$i,
	noReport: noReport$i,
	disableSubmit: disableSubmit$i,
	disableSubmitDesc: disableSubmitDesc$i,
	enableLibraryBadge: enableLibraryBadge$i,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$i,
	enableStoreBadge: enableStoreBadge$i,
	enableStoreBadgeDesc: enableStoreBadgeDesc$i,
	storeBadgePosition: storeBadgePosition$i,
	storeBadgePositionDesc: storeBadgePositionDesc$i,
	storePositionBottomCenter: storePositionBottomCenter$i,
	storePositionBottomLeft: storePositionBottomLeft$i,
	storePositionBottomRight: storePositionBottomRight$i,
	storePositionTopMiddle: storePositionTopMiddle$i,
	helpButton: helpButton$i,
	helpTitle: helpTitle$i,
	helpToc: helpToc$i,
	helpClose: helpClose$i,
	helpAboutTitle: helpAboutTitle$i,
	helpAboutDesc: helpAboutDesc$i,
	helpUsingTitle: helpUsingTitle$i,
	helpBadgeTiers: helpBadgeTiers$i,
	helpTierPlatinum: helpTierPlatinum$i,
	helpTierGold: helpTierGold$i,
	helpTierSilver: helpTierSilver$i,
	helpTierBronze: helpTierBronze$i,
	helpTierBorked: helpTierBorked$i,
	helpTierPending: helpTierPending$i,
	helpTierNoReport: helpTierNoReport$i,
	helpSettingsExplain: helpSettingsExplain$i,
	helpSettingSize: helpSettingSize$i,
	helpSettingSizeDesc: helpSettingSizeDesc$i,
	helpSettingPosition: helpSettingPosition$i,
	helpSettingPositionDesc: helpSettingPositionDesc$i,
	helpSettingSubmit: helpSettingSubmit$i,
	helpSettingSubmitDesc: helpSettingSubmitDesc$i,
	helpProtonDBTitle: helpProtonDBTitle$i,
	helpProtonDBDesc: helpProtonDBDesc$i,
	helpProtonDBSteps: helpProtonDBSteps$i,
	helpStep1: helpStep1$i,
	helpStep2: helpStep2$i,
	helpStep3: helpStep3$i,
	helpStep4: helpStep4$i,
	helpStep5: helpStep5$i,
	helpStep6: helpStep6$i,
	helpTip: helpTip$i,
	helpTipContent: helpTipContent$i,
	helpSubmitTitle: helpSubmitTitle$i,
	helpSubmitDesc: helpSubmitDesc$i,
	helpSubmitStep1: helpSubmitStep1$i,
	helpSubmitStep2: helpSubmitStep2$i,
	helpSubmitStep3: helpSubmitStep3$i
};

var sectionLibrary$h = "Libreria";
var sectionStore$h = "Negozio";
var sectionLinks$h = "Links";
var badgePosition$h = "Posizione del badge";
var badgePositionDescription$h = "Posizione del badge all'interno dell'header del gioco";
var badgeSize$h = "Dimensione badge";
var badgeSizeDescription$h = "Scegli una dimensione per il badge";
var caching$h = "Caching";
var clearCache$h = "Rimuovi la cache di ProtonDB";
var clearCacheLabel$h = "Rimuovi la cache di ProtonDB per forzarne l'aggiornamento";
var expandOnHover$h = "Espandi le label quando selezionate";
var expandOnHoverDescription$h = "Stile minimalista. Mostra il testo del badge solo quando selezionato";
var positionTopLeft$h = "In alto a sinistra";
var positionTopRight$h = "In alto a destra";
var positionBottomLeft$h = "In basso a sinistra";
var positionBottomMiddle$h = "In basso al centro";
var positionBottomRight$h = "In basso a destra";
var positionTopMiddle$h = "In alto al centro";
var settings$h = "Impostazioni";
var sizeMinimalist$h = "Minimalista";
var sizeRegular$h = "Regolare";
var sizeSmall$h = "Piccolo";
var tierborked$h = "ROTTO";
var tierbronze$h = "BRONZO";
var tiergold$h = "ORO";
var tierMinborked$h = "ROTTO";
var tierMinbronze$h = "BRON";
var tierMingold$h = "ORO";
var tierMinpending$h = "ATT";
var tierMinplatinum$h = "PLAT";
var tierMinsilver$h = "ARG";
var tierpending$h = "IN ATTESA";
var tierplatinum$h = "PLATINO";
var tiersilver$h = "ARGENTO";
var expandOnHoverOff$h = "Disattivato";
var submit$h = "INVIA";
var login$h = "Accedi";
var loading$h = "...";
var noReport$h = "NESSUN RAPPORTO";
var disableSubmit$h = "Disabilita invio";
var disableSubmitDesc$h = "Nascondi il pulsante di invio per i rapporti ProtonDB";
var enableLibraryBadge$h = "Abilita badge nella libreria";
var enableLibraryBadgeDesc$h = "Mostra il badge ProtonDB sulle pagine dei giochi nella tua libreria";
var enableStoreBadge$h = "Abilita badge sulle pagine del negozio";
var enableStoreBadgeDesc$h = "Mostra il badge ProtonDB come overlay sulle pagine del negozio";
var storeBadgePosition$h = "Posizione badge negozio";
var storeBadgePositionDesc$h = "Posiziona l'overlay del badge sulle pagine del negozio";
var storePositionBottomCenter$h = "In basso al centro";
var storePositionBottomLeft$h = "In basso a sinistra";
var storePositionBottomRight$h = "In basso a destra";
var storePositionTopMiddle$h = "In alto al centro";
var helpButton$h = "Istruzioni";
var helpTitle$h = "ProtonDB Badges - Aiuto";
var helpToc$h = "Vai alla sezione";
var helpClose$h = "Chiudi";
var helpAboutTitle$h = "Informazioni su questo plugin";
var helpAboutDesc$h = "ProtonDB Badges mostra le valutazioni di compatibilità ProtonDB direttamente sul tuo Steam Deck. Vedi a colpo d'occhio quanto bene funzionano i giochi su Linux/Proton senza lasciare l'interfaccia Steam.";
var helpUsingTitle$h = "Usare il plugin";
var helpBadgeTiers$h = "Livelli badge:";
var helpTierPlatinum$h = "Funziona perfettamente senza configurazione";
var helpTierGold$h = "Funziona perfettamente dopo modifiche";
var helpTierSilver$h = "Funziona con problemi minori";
var helpTierBronze$h = "Funziona, ma spesso si blocca o ha problemi";
var helpTierBorked$h = "Non funziona o è ingiocabile";
var helpTierPending$h = "Ha segnalazioni ma non ancora valutato";
var helpTierNoReport$h = "Nessuna segnalazione ancora - sii il primo!";
var helpSettingsExplain$h = "Spiegazione impostazioni:";
var helpSettingSize$h = "Dimensione badge";
var helpSettingSizeDesc$h = "Regolare (dimensione piena), Piccolo (compatto) o Minimalista (solo icona)";
var helpSettingPosition$h = "Posizione badge";
var helpSettingPositionDesc$h = "Dove appare il badge sulle pagine dei giochi";
var helpSettingSubmit$h = "Disabilita invio";
var helpSettingSubmitDesc$h = "Nascondi il pulsante per inviare rapporti a ProtonDB";
var helpProtonDBTitle$h = "Aggiungere Steam Deck a ProtonDB";
var helpProtonDBDesc$h = "Per inviare rapporti dal tuo Steam Deck, devi registrarlo come dispositivo su ProtonDB. Questo richiede la Modalità Desktop.";
var helpProtonDBSteps$h = "Passaggi per registrare:";
var helpStep1$h = "Passa alla Modalità Desktop (tieni premuto il pulsante di Accensione → Passa al Desktop)";
var helpStep2$h = "Apri un browser web (Firefox o Chrome)";
var helpStep3$h = "Vai su protondb.com e accedi con il tuo account Steam";
var helpStep4$h = "Clicca sull'icona del tuo profilo in alto a destra";
var helpStep5$h = "Vai su 'My Rigs' e clicca su 'Add a Rig'";
var helpStep6$h = "Seleziona 'Steam Deck' come tipo di dispositivo e salva";
var helpTip$h = "Suggerimento";
var helpTipContent$h = "Dopo aver registrato il tuo Steam Deck, puoi inviare rapporti direttamente dalla Modalità Gioco usando il pulsante Invia sui badge.";
var helpSubmitTitle$h = "Inviare rapporti sui giochi";
var helpSubmitDesc$h = "Aiuta la community condividendo la tua esperienza di gioco! I rapporti aiutano gli altri a sapere cosa aspettarsi.";
var helpSubmitStep1$h = "Gioca a un gioco per almeno 15-30 minuti";
var helpSubmitStep2$h = "Clicca sul pulsante Invia sul badge ProtonDB";
var helpSubmitStep3$h = "Compila il modulo di rapporto sul sito web di ProtonDB";
var it = {
	sectionLibrary: sectionLibrary$h,
	sectionStore: sectionStore$h,
	sectionLinks: sectionLinks$h,
	badgePosition: badgePosition$h,
	badgePositionDescription: badgePositionDescription$h,
	badgeSize: badgeSize$h,
	badgeSizeDescription: badgeSizeDescription$h,
	caching: caching$h,
	clearCache: clearCache$h,
	clearCacheLabel: clearCacheLabel$h,
	expandOnHover: expandOnHover$h,
	expandOnHoverDescription: expandOnHoverDescription$h,
	positionTopLeft: positionTopLeft$h,
	positionTopRight: positionTopRight$h,
	positionBottomLeft: positionBottomLeft$h,
	positionBottomMiddle: positionBottomMiddle$h,
	positionBottomRight: positionBottomRight$h,
	positionTopMiddle: positionTopMiddle$h,
	settings: settings$h,
	sizeMinimalist: sizeMinimalist$h,
	sizeRegular: sizeRegular$h,
	sizeSmall: sizeSmall$h,
	tierborked: tierborked$h,
	tierbronze: tierbronze$h,
	tiergold: tiergold$h,
	tierMinborked: tierMinborked$h,
	tierMinbronze: tierMinbronze$h,
	tierMingold: tierMingold$h,
	tierMinpending: tierMinpending$h,
	tierMinplatinum: tierMinplatinum$h,
	tierMinsilver: tierMinsilver$h,
	tierpending: tierpending$h,
	tierplatinum: tierplatinum$h,
	tiersilver: tiersilver$h,
	expandOnHoverOff: expandOnHoverOff$h,
	submit: submit$h,
	login: login$h,
	loading: loading$h,
	noReport: noReport$h,
	disableSubmit: disableSubmit$h,
	disableSubmitDesc: disableSubmitDesc$h,
	enableLibraryBadge: enableLibraryBadge$h,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$h,
	enableStoreBadge: enableStoreBadge$h,
	enableStoreBadgeDesc: enableStoreBadgeDesc$h,
	storeBadgePosition: storeBadgePosition$h,
	storeBadgePositionDesc: storeBadgePositionDesc$h,
	storePositionBottomCenter: storePositionBottomCenter$h,
	storePositionBottomLeft: storePositionBottomLeft$h,
	storePositionBottomRight: storePositionBottomRight$h,
	storePositionTopMiddle: storePositionTopMiddle$h,
	helpButton: helpButton$h,
	helpTitle: helpTitle$h,
	helpToc: helpToc$h,
	helpClose: helpClose$h,
	helpAboutTitle: helpAboutTitle$h,
	helpAboutDesc: helpAboutDesc$h,
	helpUsingTitle: helpUsingTitle$h,
	helpBadgeTiers: helpBadgeTiers$h,
	helpTierPlatinum: helpTierPlatinum$h,
	helpTierGold: helpTierGold$h,
	helpTierSilver: helpTierSilver$h,
	helpTierBronze: helpTierBronze$h,
	helpTierBorked: helpTierBorked$h,
	helpTierPending: helpTierPending$h,
	helpTierNoReport: helpTierNoReport$h,
	helpSettingsExplain: helpSettingsExplain$h,
	helpSettingSize: helpSettingSize$h,
	helpSettingSizeDesc: helpSettingSizeDesc$h,
	helpSettingPosition: helpSettingPosition$h,
	helpSettingPositionDesc: helpSettingPositionDesc$h,
	helpSettingSubmit: helpSettingSubmit$h,
	helpSettingSubmitDesc: helpSettingSubmitDesc$h,
	helpProtonDBTitle: helpProtonDBTitle$h,
	helpProtonDBDesc: helpProtonDBDesc$h,
	helpProtonDBSteps: helpProtonDBSteps$h,
	helpStep1: helpStep1$h,
	helpStep2: helpStep2$h,
	helpStep3: helpStep3$h,
	helpStep4: helpStep4$h,
	helpStep5: helpStep5$h,
	helpStep6: helpStep6$h,
	helpTip: helpTip$h,
	helpTipContent: helpTipContent$h,
	helpSubmitTitle: helpSubmitTitle$h,
	helpSubmitDesc: helpSubmitDesc$h,
	helpSubmitStep1: helpSubmitStep1$h,
	helpSubmitStep2: helpSubmitStep2$h,
	helpSubmitStep3: helpSubmitStep3$h
};

var sectionLibrary$g = "Library";
var sectionStore$g = "Store";
var sectionLinks$g = "Links";
var badgePosition$g = "バッジの位置";
var badgePositionDescription$g = "ゲームページヘッダー内のバッジの位置";
var badgeSize$g = "バッジサイズ";
var badgeSizeDescription$g = "バッジのサイズを選択";
var caching$g = "キャッシュ";
var clearCache$g = "ProtonDBキャッシュをクリア";
var clearCacheLabel$g = "キャッシュをクリアして、すべてのProtonDBバッジを強制的に更新します";
var expandOnHover$g = "ホバー時にラベルを展開";
var expandOnHoverDescription$g = "ミニマリストのみ。フォーカス時にバッジテキストを表示";
var positionTopLeft$g = "左上";
var positionTopRight$g = "右上";
var positionBottomLeft$g = "Bottom Left";
var positionBottomMiddle$g = "Bottom Middle";
var positionBottomRight$g = "Bottom Right";
var positionTopMiddle$g = "上中央";
var settings$g = "設定";
var sizeMinimalist$g = "ミニマリスト";
var sizeRegular$g = "標準";
var sizeSmall$g = "小";
var tierborked$g = "動作不良";
var tierbronze$g = "ブロンズ";
var tiergold$g = "ゴールド";
var tierMinborked$g = "BORK";
var tierMinbronze$g = "BRON";
var tierMingold$g = "GOLD";
var tierMinpending$g = "PEND";
var tierMinplatinum$g = "PLAT";
var tierMinsilver$g = "SILV";
var tierpending$g = "保留中";
var tierplatinum$g = "プラチナ";
var tiersilver$g = "シルバー";
var expandOnHoverOff$g = "オフ";
var submit$g = "送信";
var login$g = "ログイン";
var loading$g = "...";
var noReport$g = "レポートなし";
var disableSubmit$g = "送信を無効化";
var disableSubmitDesc$g = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$g = "Enable Badge on Library";
var enableLibraryBadgeDesc$g = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$g = "ストアページでバッジを有効化";
var enableStoreBadgeDesc$g = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$g = "Store Badge Position";
var storeBadgePositionDesc$g = "Position the badge overlay on store pages";
var storePositionBottomCenter$g = "Bottom Center";
var storePositionBottomLeft$g = "Bottom Left";
var storePositionBottomRight$g = "Bottom Right";
var storePositionTopMiddle$g = "Top Right";
var helpButton$g = "使い方";
var helpTitle$g = "ProtonDB Badges - ヘルプ";
var helpToc$g = "セクションに移動";
var helpClose$g = "閉じる";
var helpAboutTitle$g = "このプラグインについて";
var helpAboutDesc$g = "ProtonDB Badgesは、Steam DeckでProtonDB互換性評価を直接表示します。Steamインターフェースを離れることなく、ゲームがLinux/Protonでどの程度動作するか一目で確認できます。";
var helpUsingTitle$g = "プラグインの使用方法";
var helpBadgeTiers$g = "バッジレベル:";
var helpTierPlatinum$g = "設定なしで完璧に動作";
var helpTierGold$g = "調整後に完璧に動作";
var helpTierSilver$g = "軽微な問題あり";
var helpTierBronze$g = "動作するが、頻繁にクラッシュや問題あり";
var helpTierBorked$g = "動作しない、またはプレイ不可";
var helpTierPending$g = "レポートはあるがまだ評価されていない";
var helpTierNoReport$g = "まだレポートがありません - 最初の投稿者になろう！";
var helpSettingsExplain$g = "設定の説明:";
var helpSettingSize$g = "バッジサイズ";
var helpSettingSizeDesc$g = "標準（フルサイズ）、小（コンパクト）、またはミニマリスト（アイコンのみ）";
var helpSettingPosition$g = "バッジ位置";
var helpSettingPositionDesc$g = "ゲームページでバッジが表示される場所";
var helpSettingSubmit$g = "送信を無効化";
var helpSettingSubmitDesc$g = "ProtonDBへのレポート送信ボタンを非表示";
var helpProtonDBTitle$g = "Steam DeckをProtonDBに追加";
var helpProtonDBDesc$g = "Steam Deckからレポートを送信するには、ProtonDBにデバイスとして登録する必要があります。これにはデスクトップモードが必要です。";
var helpProtonDBSteps$g = "登録手順:";
var helpStep1$g = "デスクトップモードに切り替え（電源ボタンを長押し → デスクトップに切り替え）";
var helpStep2$g = "Webブラウザを開く（FirefoxまたはChrome）";
var helpStep3$g = "protondb.comにアクセスし、Steamアカウントでログイン";
var helpStep4$g = "右上のプロフィールアイコンをクリック";
var helpStep5$g = "「My Rigs」に移動し、「Add a Rig」をクリック";
var helpStep6$g = "デバイスタイプとして「Steam Deck」を選択して保存";
var helpTip$g = "ヒント";
var helpTipContent$g = "Steam Deckを登録後、バッジの送信ボタンを使用してゲームモードから直接レポートを送信できます。";
var helpSubmitTitle$g = "ゲームレポートの送信";
var helpSubmitDesc$g = "ゲーム体験を共有してコミュニティを助けましょう！レポートは他のユーザーが何を期待できるか知るのに役立ちます。";
var helpSubmitStep1$g = "ゲームを少なくとも15〜30分プレイ";
var helpSubmitStep2$g = "ProtonDBバッジの送信ボタンをクリック";
var helpSubmitStep3$g = "ProtonDBのウェブサイトでレポートフォームに記入";
var ja = {
	sectionLibrary: sectionLibrary$g,
	sectionStore: sectionStore$g,
	sectionLinks: sectionLinks$g,
	badgePosition: badgePosition$g,
	badgePositionDescription: badgePositionDescription$g,
	badgeSize: badgeSize$g,
	badgeSizeDescription: badgeSizeDescription$g,
	caching: caching$g,
	clearCache: clearCache$g,
	clearCacheLabel: clearCacheLabel$g,
	expandOnHover: expandOnHover$g,
	expandOnHoverDescription: expandOnHoverDescription$g,
	positionTopLeft: positionTopLeft$g,
	positionTopRight: positionTopRight$g,
	positionBottomLeft: positionBottomLeft$g,
	positionBottomMiddle: positionBottomMiddle$g,
	positionBottomRight: positionBottomRight$g,
	positionTopMiddle: positionTopMiddle$g,
	settings: settings$g,
	sizeMinimalist: sizeMinimalist$g,
	sizeRegular: sizeRegular$g,
	sizeSmall: sizeSmall$g,
	tierborked: tierborked$g,
	tierbronze: tierbronze$g,
	tiergold: tiergold$g,
	tierMinborked: tierMinborked$g,
	tierMinbronze: tierMinbronze$g,
	tierMingold: tierMingold$g,
	tierMinpending: tierMinpending$g,
	tierMinplatinum: tierMinplatinum$g,
	tierMinsilver: tierMinsilver$g,
	tierpending: tierpending$g,
	tierplatinum: tierplatinum$g,
	tiersilver: tiersilver$g,
	expandOnHoverOff: expandOnHoverOff$g,
	submit: submit$g,
	login: login$g,
	loading: loading$g,
	noReport: noReport$g,
	disableSubmit: disableSubmit$g,
	disableSubmitDesc: disableSubmitDesc$g,
	enableLibraryBadge: enableLibraryBadge$g,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$g,
	enableStoreBadge: enableStoreBadge$g,
	enableStoreBadgeDesc: enableStoreBadgeDesc$g,
	storeBadgePosition: storeBadgePosition$g,
	storeBadgePositionDesc: storeBadgePositionDesc$g,
	storePositionBottomCenter: storePositionBottomCenter$g,
	storePositionBottomLeft: storePositionBottomLeft$g,
	storePositionBottomRight: storePositionBottomRight$g,
	storePositionTopMiddle: storePositionTopMiddle$g,
	helpButton: helpButton$g,
	helpTitle: helpTitle$g,
	helpToc: helpToc$g,
	helpClose: helpClose$g,
	helpAboutTitle: helpAboutTitle$g,
	helpAboutDesc: helpAboutDesc$g,
	helpUsingTitle: helpUsingTitle$g,
	helpBadgeTiers: helpBadgeTiers$g,
	helpTierPlatinum: helpTierPlatinum$g,
	helpTierGold: helpTierGold$g,
	helpTierSilver: helpTierSilver$g,
	helpTierBronze: helpTierBronze$g,
	helpTierBorked: helpTierBorked$g,
	helpTierPending: helpTierPending$g,
	helpTierNoReport: helpTierNoReport$g,
	helpSettingsExplain: helpSettingsExplain$g,
	helpSettingSize: helpSettingSize$g,
	helpSettingSizeDesc: helpSettingSizeDesc$g,
	helpSettingPosition: helpSettingPosition$g,
	helpSettingPositionDesc: helpSettingPositionDesc$g,
	helpSettingSubmit: helpSettingSubmit$g,
	helpSettingSubmitDesc: helpSettingSubmitDesc$g,
	helpProtonDBTitle: helpProtonDBTitle$g,
	helpProtonDBDesc: helpProtonDBDesc$g,
	helpProtonDBSteps: helpProtonDBSteps$g,
	helpStep1: helpStep1$g,
	helpStep2: helpStep2$g,
	helpStep3: helpStep3$g,
	helpStep4: helpStep4$g,
	helpStep5: helpStep5$g,
	helpStep6: helpStep6$g,
	helpTip: helpTip$g,
	helpTipContent: helpTipContent$g,
	helpSubmitTitle: helpSubmitTitle$g,
	helpSubmitDesc: helpSubmitDesc$g,
	helpSubmitStep1: helpSubmitStep1$g,
	helpSubmitStep2: helpSubmitStep2$g,
	helpSubmitStep3: helpSubmitStep3$g
};

var sectionLibrary$f = "Library";
var sectionStore$f = "Store";
var sectionLinks$f = "Links";
var badgePosition$f = "배지 위치";
var badgePositionDescription$f = "게임 페이지 헤더 내의 배지 위치를 조정합니다";
var badgeSize$f = "배지 크기";
var badgeSizeDescription$f = "배지 크기를 변경합니다";
var caching$f = "캐시";
var clearCache$f = "ProtonDB 캐시 지우기";
var clearCacheLabel$f = "캐시를 삭제하여 모든 ProtonDB 배지를 갱신합니다";
var expandOnHover$f = "호버 시 펼치기";
var expandOnHoverDescription$f = "최소한 전용. 포커스 시에 배지 내용을 표시 합니다";
var positionTopLeft$f = "좌상단";
var positionTopRight$f = "우상단";
var positionBottomLeft$f = "Bottom Left";
var positionBottomMiddle$f = "Bottom Middle";
var positionBottomRight$f = "Bottom Right";
var positionTopMiddle$f = "상단 중앙";
var settings$f = "설정";
var sizeMinimalist$f = "최소";
var sizeRegular$f = "기본";
var sizeSmall$f = "작게";
var tierborked$f = "작동하지 않음";
var tierbronze$f = "브론즈";
var tiergold$f = "골드";
var tierMinborked$f = "망가짐";
var tierMinbronze$f = "브론즈";
var tierMingold$f = "골드";
var tierMinpending$f = "대기중";
var tierMinplatinum$f = "플래티넘";
var tierMinsilver$f = "실버";
var tierpending$f = "리뷰 대기중";
var tierplatinum$f = "플래티넘";
var tiersilver$f = "실버";
var expandOnHoverOff$f = "끄기";
var submit$f = "제출";
var login$f = "로그인";
var loading$f = "...";
var noReport$f = "보고서 없음";
var disableSubmit$f = "제출 비활성화";
var disableSubmitDesc$f = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$f = "Enable Badge on Library";
var enableLibraryBadgeDesc$f = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$f = "상점 페이지에서 배지 활성화";
var enableStoreBadgeDesc$f = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$f = "Store Badge Position";
var storeBadgePositionDesc$f = "Position the badge overlay on store pages";
var storePositionBottomCenter$f = "Bottom Center";
var storePositionBottomLeft$f = "Bottom Left";
var storePositionBottomRight$f = "Bottom Right";
var storePositionTopMiddle$f = "Top Right";
var helpButton$f = "사용법";
var helpTitle$f = "ProtonDB Badges - 도움말";
var helpToc$f = "섹션으로 이동";
var helpClose$f = "닫기";
var helpAboutTitle$f = "이 플러그인에 대하여";
var helpAboutDesc$f = "ProtonDB Badges는 Steam Deck에서 ProtonDB 호환성 등급을 직접 표시합니다. Steam 인터페이스를 벗어나지 않고 게임이 Linux/Proton에서 얼마나 잘 실행되는지 한눈에 확인하세요.";
var helpUsingTitle$f = "플러그인 사용하기";
var helpBadgeTiers$f = "배지 등급:";
var helpTierPlatinum$f = "설정 없이 완벽하게 실행";
var helpTierGold$f = "조정 후 완벽하게 실행";
var helpTierSilver$f = "사소한 문제가 있음";
var helpTierBronze$f = "실행되지만 자주 충돌하거나 문제가 있음";
var helpTierBorked$f = "실행되지 않거나 플레이 불가";
var helpTierPending$f = "보고서가 있지만 아직 평가되지 않음";
var helpTierNoReport$f = "아직 보고서가 없음 - 첫 번째가 되어보세요!";
var helpSettingsExplain$f = "설정 설명:";
var helpSettingSize$f = "배지 크기";
var helpSettingSizeDesc$f = "기본 (전체 크기), 작게 (컴팩트), 또는 최소 (아이콘만)";
var helpSettingPosition$f = "배지 위치";
var helpSettingPositionDesc$f = "게임 페이지에서 배지가 나타나는 위치";
var helpSettingSubmit$f = "제출 비활성화";
var helpSettingSubmitDesc$f = "ProtonDB에 보고서를 제출하는 버튼 숨기기";
var helpProtonDBTitle$f = "Steam Deck을 ProtonDB에 추가";
var helpProtonDBDesc$f = "Steam Deck에서 보고서를 제출하려면 ProtonDB에 기기로 등록해야 합니다. 데스크톱 모드가 필요합니다.";
var helpProtonDBSteps$f = "등록 단계:";
var helpStep1$f = "데스크톱 모드로 전환 (전원 버튼 길게 누르기 → 데스크톱으로 전환)";
var helpStep2$f = "웹 브라우저 열기 (Firefox 또는 Chrome)";
var helpStep3$f = "protondb.com에 접속하여 Steam 계정으로 로그인";
var helpStep4$f = "오른쪽 상단의 프로필 아이콘 클릭";
var helpStep5$f = "'My Rigs'로 이동하여 'Add a Rig' 클릭";
var helpStep6$f = "기기 유형으로 'Steam Deck' 선택 후 저장";
var helpTip$f = "팁";
var helpTipContent$f = "Steam Deck을 등록한 후 배지의 제출 버튼을 사용하여 게임 모드에서 직접 보고서를 제출할 수 있습니다.";
var helpSubmitTitle$f = "게임 보고서 제출";
var helpSubmitDesc$f = "게임 경험을 공유하여 커뮤니티를 도와주세요! 보고서는 다른 사람들이 무엇을 기대할 수 있는지 알 수 있게 합니다.";
var helpSubmitStep1$f = "게임을 최소 15-30분 플레이";
var helpSubmitStep2$f = "ProtonDB 배지의 제출 버튼 클릭";
var helpSubmitStep3$f = "ProtonDB 웹사이트에서 보고서 양식 작성";
var ko = {
	sectionLibrary: sectionLibrary$f,
	sectionStore: sectionStore$f,
	sectionLinks: sectionLinks$f,
	badgePosition: badgePosition$f,
	badgePositionDescription: badgePositionDescription$f,
	badgeSize: badgeSize$f,
	badgeSizeDescription: badgeSizeDescription$f,
	caching: caching$f,
	clearCache: clearCache$f,
	clearCacheLabel: clearCacheLabel$f,
	expandOnHover: expandOnHover$f,
	expandOnHoverDescription: expandOnHoverDescription$f,
	positionTopLeft: positionTopLeft$f,
	positionTopRight: positionTopRight$f,
	positionBottomLeft: positionBottomLeft$f,
	positionBottomMiddle: positionBottomMiddle$f,
	positionBottomRight: positionBottomRight$f,
	positionTopMiddle: positionTopMiddle$f,
	settings: settings$f,
	sizeMinimalist: sizeMinimalist$f,
	sizeRegular: sizeRegular$f,
	sizeSmall: sizeSmall$f,
	tierborked: tierborked$f,
	tierbronze: tierbronze$f,
	tiergold: tiergold$f,
	tierMinborked: tierMinborked$f,
	tierMinbronze: tierMinbronze$f,
	tierMingold: tierMingold$f,
	tierMinpending: tierMinpending$f,
	tierMinplatinum: tierMinplatinum$f,
	tierMinsilver: tierMinsilver$f,
	tierpending: tierpending$f,
	tierplatinum: tierplatinum$f,
	tiersilver: tiersilver$f,
	expandOnHoverOff: expandOnHoverOff$f,
	submit: submit$f,
	login: login$f,
	loading: loading$f,
	noReport: noReport$f,
	disableSubmit: disableSubmit$f,
	disableSubmitDesc: disableSubmitDesc$f,
	enableLibraryBadge: enableLibraryBadge$f,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$f,
	enableStoreBadge: enableStoreBadge$f,
	enableStoreBadgeDesc: enableStoreBadgeDesc$f,
	storeBadgePosition: storeBadgePosition$f,
	storeBadgePositionDesc: storeBadgePositionDesc$f,
	storePositionBottomCenter: storePositionBottomCenter$f,
	storePositionBottomLeft: storePositionBottomLeft$f,
	storePositionBottomRight: storePositionBottomRight$f,
	storePositionTopMiddle: storePositionTopMiddle$f,
	helpButton: helpButton$f,
	helpTitle: helpTitle$f,
	helpToc: helpToc$f,
	helpClose: helpClose$f,
	helpAboutTitle: helpAboutTitle$f,
	helpAboutDesc: helpAboutDesc$f,
	helpUsingTitle: helpUsingTitle$f,
	helpBadgeTiers: helpBadgeTiers$f,
	helpTierPlatinum: helpTierPlatinum$f,
	helpTierGold: helpTierGold$f,
	helpTierSilver: helpTierSilver$f,
	helpTierBronze: helpTierBronze$f,
	helpTierBorked: helpTierBorked$f,
	helpTierPending: helpTierPending$f,
	helpTierNoReport: helpTierNoReport$f,
	helpSettingsExplain: helpSettingsExplain$f,
	helpSettingSize: helpSettingSize$f,
	helpSettingSizeDesc: helpSettingSizeDesc$f,
	helpSettingPosition: helpSettingPosition$f,
	helpSettingPositionDesc: helpSettingPositionDesc$f,
	helpSettingSubmit: helpSettingSubmit$f,
	helpSettingSubmitDesc: helpSettingSubmitDesc$f,
	helpProtonDBTitle: helpProtonDBTitle$f,
	helpProtonDBDesc: helpProtonDBDesc$f,
	helpProtonDBSteps: helpProtonDBSteps$f,
	helpStep1: helpStep1$f,
	helpStep2: helpStep2$f,
	helpStep3: helpStep3$f,
	helpStep4: helpStep4$f,
	helpStep5: helpStep5$f,
	helpStep6: helpStep6$f,
	helpTip: helpTip$f,
	helpTipContent: helpTipContent$f,
	helpSubmitTitle: helpSubmitTitle$f,
	helpSubmitDesc: helpSubmitDesc$f,
	helpSubmitStep1: helpSubmitStep1$f,
	helpSubmitStep2: helpSubmitStep2$f,
	helpSubmitStep3: helpSubmitStep3$f
};

var sectionLibrary$e = "Bibliotheek";
var sectionStore$e = "Winkel";
var sectionLinks$e = "Links";
var badgePosition$e = "Badgepositie";
var badgePositionDescription$e = "Positioneer de badge in de koptekst van de spelpagina";
var badgeSize$e = "Badgegrootte";
var badgeSizeDescription$e = "Kies een andere grootte voor de badge";
var caching$e = "Caching";
var clearCache$e = "ProtonDB-cache wissen";
var clearCacheLabel$e = "Wis de cache om alle ProtonDB-badges geforceerd te vernieuwen";
var expandOnHover$e = "Label uitklappen bij hover";
var expandOnHoverDescription$e = "Alleen minimalistisch. Badge-tekst weergeven bij focus";
var positionTopLeft$e = "Linksboven";
var positionTopRight$e = "Rechtsboven";
var positionBottomLeft$e = "Linksonder";
var positionBottomMiddle$e = "Midden onder";
var positionBottomRight$e = "Rechtsonder";
var positionTopMiddle$e = "Midden boven";
var settings$e = "Instellingen";
var sizeMinimalist$e = "Minimalistisch";
var sizeRegular$e = "Normaal";
var sizeSmall$e = "Klein";
var tierborked$e = "ONSPEELBAAR";
var tierbronze$e = "BRONS";
var tiergold$e = "GOUD";
var tierMinborked$e = "BORK";
var tierMinbronze$e = "BRON";
var tierMingold$e = "GOUD";
var tierMinpending$e = "PEND";
var tierMinplatinum$e = "PLAT";
var tierMinsilver$e = "ZILV";
var tierpending$e = "IN AFWACHTING";
var tierplatinum$e = "PLATINA";
var tiersilver$e = "ZILVER";
var expandOnHoverOff$e = "Uit";
var submit$e = "VERZENDEN";
var login$e = "Inloggen";
var loading$e = "...";
var noReport$e = "GEEN RAPPORT";
var disableSubmit$e = "Verzenden uitschakelen";
var disableSubmitDesc$e = "Verberg de verzendknop voor ProtonDB rapporten";
var enableLibraryBadge$e = "Badge in bibliotheek inschakelen";
var enableLibraryBadgeDesc$e = "Toon ProtonDB badge op spelpagina's in je bibliotheek";
var enableStoreBadge$e = "Badge inschakelen op winkelpagina's";
var enableStoreBadgeDesc$e = "Toon ProtonDB badge als overlay op winkelpagina's";
var storeBadgePosition$e = "Winkel badge positie";
var storeBadgePositionDesc$e = "Positioneer de badge overlay op winkelpagina's";
var storePositionBottomCenter$e = "Midden onder";
var storePositionBottomLeft$e = "Linksonder";
var storePositionBottomRight$e = "Rechtsonder";
var storePositionTopMiddle$e = "Midden boven";
var helpButton$e = "Instructies";
var helpTitle$e = "ProtonDB Badges - Help";
var helpToc$e = "Ga naar sectie";
var helpClose$e = "Sluiten";
var helpAboutTitle$e = "Over deze plugin";
var helpAboutDesc$e = "ProtonDB Badges toont ProtonDB compatibiliteitsbeoordelingen direct op je Steam Deck. Zie in één oogopslag hoe goed games draaien op Linux/Proton zonder de Steam-interface te verlaten.";
var helpUsingTitle$e = "De plugin gebruiken";
var helpBadgeTiers$e = "Badge niveaus:";
var helpTierPlatinum$e = "Werkt perfect zonder aanpassingen";
var helpTierGold$e = "Werkt perfect na aanpassingen";
var helpTierSilver$e = "Werkt met kleine problemen";
var helpTierBronze$e = "Werkt, maar crasht vaak of heeft problemen";
var helpTierBorked$e = "Werkt niet of is onspeelbaar";
var helpTierPending$e = "Heeft rapporten maar nog niet beoordeeld";
var helpTierNoReport$e = "Nog geen rapporten ingediend - wees de eerste!";
var helpSettingsExplain$e = "Instellingen uitgelegd:";
var helpSettingSize$e = "Badge grootte";
var helpSettingSizeDesc$e = "Normaal (volledige grootte), Klein (compact) of Minimalistisch (alleen icoon)";
var helpSettingPosition$e = "Badge positie";
var helpSettingPositionDesc$e = "Waar de badge verschijnt op spelpagina's";
var helpSettingSubmit$e = "Verzenden uitschakelen";
var helpSettingSubmitDesc$e = "Verberg de knop om rapporten naar ProtonDB te sturen";
var helpProtonDBTitle$e = "Steam Deck toevoegen aan ProtonDB";
var helpProtonDBDesc$e = "Om rapporten vanaf je Steam Deck te verzenden, moet je het registreren als apparaat op ProtonDB. Dit vereist Desktop Modus.";
var helpProtonDBSteps$e = "Stappen om te registreren:";
var helpStep1$e = "Schakel naar Desktop Modus (houd de Power-knop ingedrukt → Naar Desktop)";
var helpStep2$e = "Open een webbrowser (Firefox of Chrome)";
var helpStep3$e = "Ga naar protondb.com en log in met je Steam-account";
var helpStep4$e = "Klik op je profielicoon rechtsboven";
var helpStep5$e = "Ga naar 'My Rigs' en klik op 'Add a Rig'";
var helpStep6$e = "Selecteer 'Steam Deck' als apparaattype en sla op";
var helpTip$e = "Tip";
var helpTipContent$e = "Na het registreren van je Steam Deck kun je rapporten direct vanuit Game Modus verzenden via de Verzend-knop op badges.";
var helpSubmitTitle$e = "Spelrapporten indienen";
var helpSubmitDesc$e = "Help de community door je spelervaring te delen! Rapporten helpen anderen te weten wat ze kunnen verwachten.";
var helpSubmitStep1$e = "Speel een spel minimaal 15-30 minuten";
var helpSubmitStep2$e = "Klik op de Verzend-knop op de ProtonDB badge";
var helpSubmitStep3$e = "Vul het rapportformulier in op de ProtonDB website";
var nl = {
	sectionLibrary: sectionLibrary$e,
	sectionStore: sectionStore$e,
	sectionLinks: sectionLinks$e,
	badgePosition: badgePosition$e,
	badgePositionDescription: badgePositionDescription$e,
	badgeSize: badgeSize$e,
	badgeSizeDescription: badgeSizeDescription$e,
	caching: caching$e,
	clearCache: clearCache$e,
	clearCacheLabel: clearCacheLabel$e,
	expandOnHover: expandOnHover$e,
	expandOnHoverDescription: expandOnHoverDescription$e,
	positionTopLeft: positionTopLeft$e,
	positionTopRight: positionTopRight$e,
	positionBottomLeft: positionBottomLeft$e,
	positionBottomMiddle: positionBottomMiddle$e,
	positionBottomRight: positionBottomRight$e,
	positionTopMiddle: positionTopMiddle$e,
	settings: settings$e,
	sizeMinimalist: sizeMinimalist$e,
	sizeRegular: sizeRegular$e,
	sizeSmall: sizeSmall$e,
	tierborked: tierborked$e,
	tierbronze: tierbronze$e,
	tiergold: tiergold$e,
	tierMinborked: tierMinborked$e,
	tierMinbronze: tierMinbronze$e,
	tierMingold: tierMingold$e,
	tierMinpending: tierMinpending$e,
	tierMinplatinum: tierMinplatinum$e,
	tierMinsilver: tierMinsilver$e,
	tierpending: tierpending$e,
	tierplatinum: tierplatinum$e,
	tiersilver: tiersilver$e,
	expandOnHoverOff: expandOnHoverOff$e,
	submit: submit$e,
	login: login$e,
	loading: loading$e,
	noReport: noReport$e,
	disableSubmit: disableSubmit$e,
	disableSubmitDesc: disableSubmitDesc$e,
	enableLibraryBadge: enableLibraryBadge$e,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$e,
	enableStoreBadge: enableStoreBadge$e,
	enableStoreBadgeDesc: enableStoreBadgeDesc$e,
	storeBadgePosition: storeBadgePosition$e,
	storeBadgePositionDesc: storeBadgePositionDesc$e,
	storePositionBottomCenter: storePositionBottomCenter$e,
	storePositionBottomLeft: storePositionBottomLeft$e,
	storePositionBottomRight: storePositionBottomRight$e,
	storePositionTopMiddle: storePositionTopMiddle$e,
	helpButton: helpButton$e,
	helpTitle: helpTitle$e,
	helpToc: helpToc$e,
	helpClose: helpClose$e,
	helpAboutTitle: helpAboutTitle$e,
	helpAboutDesc: helpAboutDesc$e,
	helpUsingTitle: helpUsingTitle$e,
	helpBadgeTiers: helpBadgeTiers$e,
	helpTierPlatinum: helpTierPlatinum$e,
	helpTierGold: helpTierGold$e,
	helpTierSilver: helpTierSilver$e,
	helpTierBronze: helpTierBronze$e,
	helpTierBorked: helpTierBorked$e,
	helpTierPending: helpTierPending$e,
	helpTierNoReport: helpTierNoReport$e,
	helpSettingsExplain: helpSettingsExplain$e,
	helpSettingSize: helpSettingSize$e,
	helpSettingSizeDesc: helpSettingSizeDesc$e,
	helpSettingPosition: helpSettingPosition$e,
	helpSettingPositionDesc: helpSettingPositionDesc$e,
	helpSettingSubmit: helpSettingSubmit$e,
	helpSettingSubmitDesc: helpSettingSubmitDesc$e,
	helpProtonDBTitle: helpProtonDBTitle$e,
	helpProtonDBDesc: helpProtonDBDesc$e,
	helpProtonDBSteps: helpProtonDBSteps$e,
	helpStep1: helpStep1$e,
	helpStep2: helpStep2$e,
	helpStep3: helpStep3$e,
	helpStep4: helpStep4$e,
	helpStep5: helpStep5$e,
	helpStep6: helpStep6$e,
	helpTip: helpTip$e,
	helpTipContent: helpTipContent$e,
	helpSubmitTitle: helpSubmitTitle$e,
	helpSubmitDesc: helpSubmitDesc$e,
	helpSubmitStep1: helpSubmitStep1$e,
	helpSubmitStep2: helpSubmitStep2$e,
	helpSubmitStep3: helpSubmitStep3$e
};

var sectionLibrary$d = "Library";
var sectionStore$d = "Store";
var sectionLinks$d = "Links";
var badgePosition$d = "Merkeposisjon";
var badgePositionDescription$d = "Plasser merket i spillsidens overskrift";
var badgeSize$d = "Merkestørrelse";
var badgeSizeDescription$d = "Velg en annen størrelse for merket";
var caching$d = "Bufring";
var clearCache$d = "Tøm ProtonDB-buffer";
var clearCacheLabel$d = "Tøm bufferen for å tvinge oppdatering av alle ProtonDB-merker";
var expandOnHover$d = "Utvid etikett ved pekerhånd";
var expandOnHoverDescription$d = "Bare minimalistisk. Vis merketekst ved fokus";
var positionTopLeft$d = "Øverst til venstre";
var positionTopRight$d = "Øverst til høyre";
var positionBottomLeft$d = "Bottom Left";
var positionBottomMiddle$d = "Bottom Middle";
var positionBottomRight$d = "Bottom Right";
var positionTopMiddle$d = "Øverst i midten";
var settings$d = "Innstillinger";
var sizeMinimalist$d = "Minimalistisk";
var sizeRegular$d = "Normal";
var sizeSmall$d = "Liten";
var tierborked$d = "ØDELAGT";
var tierbronze$d = "BRONSE";
var tiergold$d = "GULL";
var tierMinborked$d = "BORK";
var tierMinbronze$d = "BRON";
var tierMingold$d = "GOLD";
var tierMinpending$d = "PEND";
var tierMinplatinum$d = "PLAT";
var tierMinsilver$d = "SILV";
var tierpending$d = "VENTER";
var tierplatinum$d = "PLATINA";
var tiersilver$d = "SØLV";
var expandOnHoverOff$d = "Av";
var submit$d = "SEND INN";
var login$d = "Logg inn";
var loading$d = "...";
var noReport$d = "INGEN RAPPORT";
var disableSubmit$d = "Deaktiver innsending";
var disableSubmitDesc$d = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$d = "Enable Badge on Library";
var enableLibraryBadgeDesc$d = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$d = "Aktiver merke på butikksider";
var enableStoreBadgeDesc$d = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$d = "Store Badge Position";
var storeBadgePositionDesc$d = "Position the badge overlay on store pages";
var storePositionBottomCenter$d = "Bottom Center";
var storePositionBottomLeft$d = "Bottom Left";
var storePositionBottomRight$d = "Bottom Right";
var storePositionTopMiddle$d = "Top Right";
var helpButton$d = "Instruksjoner";
var helpTitle$d = "ProtonDB Badges - Hjelp";
var helpToc$d = "Gå til seksjon";
var helpClose$d = "Lukk";
var helpAboutTitle$d = "Om denne plugin";
var helpAboutDesc$d = "ProtonDB Badges viser ProtonDB-kompatibilitetsvurderinger direkte på Steam Deck. Se med et blikk hvor godt spill kjører på Linux/Proton uten å forlate Steam-grensesnittet.";
var helpUsingTitle$d = "Bruke plugin";
var helpBadgeTiers$d = "Badge-nivåer:";
var helpTierPlatinum$d = "Kjører perfekt uten konfigurasjon";
var helpTierGold$d = "Kjører perfekt etter justeringer";
var helpTierSilver$d = "Kjører med mindre problemer";
var helpTierBronze$d = "Kjører, men krasjer ofte eller har problemer";
var helpTierBorked$d = "Kjører ikke eller er uspillelig";
var helpTierPending$d = "Har rapporter men ikke vurdert ennå";
var helpTierNoReport$d = "Ingen rapporter ennå - vær den første!";
var helpSettingsExplain$d = "Innstillinger forklart:";
var helpSettingSize$d = "Badge-størrelse";
var helpSettingSizeDesc$d = "Normal (full størrelse), Liten (kompakt) eller Minimalistisk (bare ikon)";
var helpSettingPosition$d = "Badge-posisjon";
var helpSettingPositionDesc$d = "Hvor badgen vises på spillsider";
var helpSettingSubmit$d = "Deaktiver send";
var helpSettingSubmitDesc$d = "Skjul knappen for å sende rapporter til ProtonDB";
var helpProtonDBTitle$d = "Legge til Steam Deck på ProtonDB";
var helpProtonDBDesc$d = "For å sende rapporter fra Steam Deck må du registrere den som en enhet på ProtonDB. Dette krever skrivebordsmodus.";
var helpProtonDBSteps$d = "Trinn for registrering:";
var helpStep1$d = "Bytt til skrivebordsmodus (hold inne strømknappen → Bytt til skrivebord)";
var helpStep2$d = "Åpne en nettleser (Firefox eller Chrome)";
var helpStep3$d = "Gå til protondb.com og logg inn med Steam-kontoen din";
var helpStep4$d = "Klikk på profilikonet ditt øverst til høyre";
var helpStep5$d = "Gå til 'My Rigs' og klikk på 'Add a Rig'";
var helpStep6$d = "Velg 'Steam Deck' som enhetstype og lagre";
var helpTip$d = "Tips";
var helpTipContent$d = "Etter at du har registrert Steam Deck, kan du sende rapporter direkte fra spillmodus ved hjelp av Send-knappen på badges.";
var helpSubmitTitle$d = "Sende spillrapporter";
var helpSubmitDesc$d = "Hjelp fellesskapet ved å dele spillopplevelsen din! Rapporter hjelper andre å vite hva de kan forvente.";
var helpSubmitStep1$d = "Spill et spill i minst 15-30 minutter";
var helpSubmitStep2$d = "Klikk på Send-knappen på ProtonDB-badgen";
var helpSubmitStep3$d = "Fyll ut rapportskjemaet på ProtonDBs nettsted";
var no = {
	sectionLibrary: sectionLibrary$d,
	sectionStore: sectionStore$d,
	sectionLinks: sectionLinks$d,
	badgePosition: badgePosition$d,
	badgePositionDescription: badgePositionDescription$d,
	badgeSize: badgeSize$d,
	badgeSizeDescription: badgeSizeDescription$d,
	caching: caching$d,
	clearCache: clearCache$d,
	clearCacheLabel: clearCacheLabel$d,
	expandOnHover: expandOnHover$d,
	expandOnHoverDescription: expandOnHoverDescription$d,
	positionTopLeft: positionTopLeft$d,
	positionTopRight: positionTopRight$d,
	positionBottomLeft: positionBottomLeft$d,
	positionBottomMiddle: positionBottomMiddle$d,
	positionBottomRight: positionBottomRight$d,
	positionTopMiddle: positionTopMiddle$d,
	settings: settings$d,
	sizeMinimalist: sizeMinimalist$d,
	sizeRegular: sizeRegular$d,
	sizeSmall: sizeSmall$d,
	tierborked: tierborked$d,
	tierbronze: tierbronze$d,
	tiergold: tiergold$d,
	tierMinborked: tierMinborked$d,
	tierMinbronze: tierMinbronze$d,
	tierMingold: tierMingold$d,
	tierMinpending: tierMinpending$d,
	tierMinplatinum: tierMinplatinum$d,
	tierMinsilver: tierMinsilver$d,
	tierpending: tierpending$d,
	tierplatinum: tierplatinum$d,
	tiersilver: tiersilver$d,
	expandOnHoverOff: expandOnHoverOff$d,
	submit: submit$d,
	login: login$d,
	loading: loading$d,
	noReport: noReport$d,
	disableSubmit: disableSubmit$d,
	disableSubmitDesc: disableSubmitDesc$d,
	enableLibraryBadge: enableLibraryBadge$d,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$d,
	enableStoreBadge: enableStoreBadge$d,
	enableStoreBadgeDesc: enableStoreBadgeDesc$d,
	storeBadgePosition: storeBadgePosition$d,
	storeBadgePositionDesc: storeBadgePositionDesc$d,
	storePositionBottomCenter: storePositionBottomCenter$d,
	storePositionBottomLeft: storePositionBottomLeft$d,
	storePositionBottomRight: storePositionBottomRight$d,
	storePositionTopMiddle: storePositionTopMiddle$d,
	helpButton: helpButton$d,
	helpTitle: helpTitle$d,
	helpToc: helpToc$d,
	helpClose: helpClose$d,
	helpAboutTitle: helpAboutTitle$d,
	helpAboutDesc: helpAboutDesc$d,
	helpUsingTitle: helpUsingTitle$d,
	helpBadgeTiers: helpBadgeTiers$d,
	helpTierPlatinum: helpTierPlatinum$d,
	helpTierGold: helpTierGold$d,
	helpTierSilver: helpTierSilver$d,
	helpTierBronze: helpTierBronze$d,
	helpTierBorked: helpTierBorked$d,
	helpTierPending: helpTierPending$d,
	helpTierNoReport: helpTierNoReport$d,
	helpSettingsExplain: helpSettingsExplain$d,
	helpSettingSize: helpSettingSize$d,
	helpSettingSizeDesc: helpSettingSizeDesc$d,
	helpSettingPosition: helpSettingPosition$d,
	helpSettingPositionDesc: helpSettingPositionDesc$d,
	helpSettingSubmit: helpSettingSubmit$d,
	helpSettingSubmitDesc: helpSettingSubmitDesc$d,
	helpProtonDBTitle: helpProtonDBTitle$d,
	helpProtonDBDesc: helpProtonDBDesc$d,
	helpProtonDBSteps: helpProtonDBSteps$d,
	helpStep1: helpStep1$d,
	helpStep2: helpStep2$d,
	helpStep3: helpStep3$d,
	helpStep4: helpStep4$d,
	helpStep5: helpStep5$d,
	helpStep6: helpStep6$d,
	helpTip: helpTip$d,
	helpTipContent: helpTipContent$d,
	helpSubmitTitle: helpSubmitTitle$d,
	helpSubmitDesc: helpSubmitDesc$d,
	helpSubmitStep1: helpSubmitStep1$d,
	helpSubmitStep2: helpSubmitStep2$d,
	helpSubmitStep3: helpSubmitStep3$d
};

var sectionLibrary$c = "Library";
var sectionStore$c = "Store";
var sectionLinks$c = "Links";
var badgePosition$c = "Pozycja odznaki";
var badgePositionDescription$c = "Umieść odznakę wewnątrz nagłówka strony gry";
var badgeSize$c = "Rozmiar odznaki";
var badgeSizeDescription$c = "Wybierz inny rozmiar odznaki";
var caching$c = "Pamięć podręczna";
var clearCache$c = "Wyczyść pamięć podręczną ProtonDB";
var clearCacheLabel$c = "Wyczyść pamięć podręczną, aby wymusić odświeżenie wszystkich odznak ProtonDB";
var expandOnHover$c = "Rozwiń etykietę po wybraniu kursorem";
var expandOnHoverDescription$c = "Dotyczy tylko rozmiaru 'Minimalistyczny'. Wyświetlaj tekst odznaki po wybraniu kursorem";
var positionTopLeft$c = "Lewy górny róg";
var positionTopRight$c = "Prawy górny róg";
var positionBottomLeft$c = "Bottom Left";
var positionBottomMiddle$c = "Bottom Middle";
var positionBottomRight$c = "Bottom Right";
var positionTopMiddle$c = "Górny środek";
var settings$c = "Ustawienia";
var sizeMinimalist$c = "Minimalistyczny";
var sizeRegular$c = "Normalny";
var sizeSmall$c = "Mały";
var tierborked$c = "ZEPSUTE";
var tierbronze$c = "BRĄZ";
var tiergold$c = "ZŁOTO";
var tierMinborked$c = "ZEP";
var tierMinbronze$c = "BRĄZ";
var tierMingold$c = "ZŁOT";
var tierMinpending$c = "BRAK";
var tierMinplatinum$c = "PLAT";
var tierMinsilver$c = "SREB";
var tierpending$c = "BRAK DANYCH";
var tierplatinum$c = "PLATYNA";
var tiersilver$c = "SREBRO";
var expandOnHoverOff$c = "Wyłączone";
var submit$c = "WYŚLIJ";
var login$c = "Zaloguj się";
var loading$c = "...";
var noReport$c = "BRAK RAPORTU";
var disableSubmit$c = "Wyłącz wysyłanie";
var disableSubmitDesc$c = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$c = "Enable Badge on Library";
var enableLibraryBadgeDesc$c = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$c = "Włącz odznakę na stronach sklepu";
var enableStoreBadgeDesc$c = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$c = "Store Badge Position";
var storeBadgePositionDesc$c = "Position the badge overlay on store pages";
var storePositionBottomCenter$c = "Bottom Center";
var storePositionBottomLeft$c = "Bottom Left";
var storePositionBottomRight$c = "Bottom Right";
var storePositionTopMiddle$c = "Top Right";
var helpButton$c = "Instrukcje";
var helpTitle$c = "ProtonDB Badges - Pomoc";
var helpToc$c = "Przejdź do sekcji";
var helpClose$c = "Zamknij";
var helpAboutTitle$c = "O tym pluginie";
var helpAboutDesc$c = "ProtonDB Badges wyświetla oceny kompatybilności ProtonDB bezpośrednio na Steam Deck. Zobacz na pierwszy rzut oka, jak dobrze gry działają na Linux/Proton bez opuszczania interfejsu Steam.";
var helpUsingTitle$c = "Używanie pluginu";
var helpBadgeTiers$c = "Poziomy odznaki:";
var helpTierPlatinum$c = "Działa idealnie bez konfiguracji";
var helpTierGold$c = "Działa idealnie po dostosowaniu";
var helpTierSilver$c = "Działa z drobnymi problemami";
var helpTierBronze$c = "Działa, ale często się zawiesza lub ma problemy";
var helpTierBorked$c = "Nie działa lub jest niegrywalne";
var helpTierPending$c = "Ma raporty, ale jeszcze nie ocenione";
var helpTierNoReport$c = "Brak raportów - bądź pierwszy!";
var helpSettingsExplain$c = "Wyjaśnienie ustawień:";
var helpSettingSize$c = "Rozmiar odznaki";
var helpSettingSizeDesc$c = "Normalny (pełny rozmiar), Mały (kompaktowy) lub Minimalistyczny (tylko ikona)";
var helpSettingPosition$c = "Pozycja odznaki";
var helpSettingPositionDesc$c = "Gdzie odznaka pojawia się na stronach gier";
var helpSettingSubmit$c = "Wyłącz wysyłanie";
var helpSettingSubmitDesc$c = "Ukryj przycisk wysyłania raportów do ProtonDB";
var helpProtonDBTitle$c = "Dodawanie Steam Deck do ProtonDB";
var helpProtonDBDesc$c = "Aby wysyłać raporty ze Steam Deck, musisz zarejestrować go jako urządzenie na ProtonDB. Wymaga to trybu pulpitu.";
var helpProtonDBSteps$c = "Kroki rejestracji:";
var helpStep1$c = "Przełącz na tryb pulpitu (przytrzymaj przycisk zasilania → Przełącz na pulpit)";
var helpStep2$c = "Otwórz przeglądarkę internetową (Firefox lub Chrome)";
var helpStep3$c = "Przejdź do protondb.com i zaloguj się kontem Steam";
var helpStep4$c = "Kliknij ikonę profilu w prawym górnym rogu";
var helpStep5$c = "Przejdź do 'My Rigs' i kliknij 'Add a Rig'";
var helpStep6$c = "Wybierz 'Steam Deck' jako typ urządzenia i zapisz";
var helpTip$c = "Wskazówka";
var helpTipContent$c = "Po zarejestrowaniu Steam Deck możesz wysyłać raporty bezpośrednio z trybu gry za pomocą przycisku Wyślij na odznakach.";
var helpSubmitTitle$c = "Wysyłanie raportów o grach";
var helpSubmitDesc$c = "Pomóż społeczności, dzieląc się swoim doświadczeniem z gry! Raporty pomagają innym wiedzieć, czego się spodziewać.";
var helpSubmitStep1$c = "Graj w grę przez co najmniej 15-30 minut";
var helpSubmitStep2$c = "Kliknij przycisk Wyślij na odznace ProtonDB";
var helpSubmitStep3$c = "Wypełnij formularz raportu na stronie ProtonDB";
var pl = {
	sectionLibrary: sectionLibrary$c,
	sectionStore: sectionStore$c,
	sectionLinks: sectionLinks$c,
	badgePosition: badgePosition$c,
	badgePositionDescription: badgePositionDescription$c,
	badgeSize: badgeSize$c,
	badgeSizeDescription: badgeSizeDescription$c,
	caching: caching$c,
	clearCache: clearCache$c,
	clearCacheLabel: clearCacheLabel$c,
	expandOnHover: expandOnHover$c,
	expandOnHoverDescription: expandOnHoverDescription$c,
	positionTopLeft: positionTopLeft$c,
	positionTopRight: positionTopRight$c,
	positionBottomLeft: positionBottomLeft$c,
	positionBottomMiddle: positionBottomMiddle$c,
	positionBottomRight: positionBottomRight$c,
	positionTopMiddle: positionTopMiddle$c,
	settings: settings$c,
	sizeMinimalist: sizeMinimalist$c,
	sizeRegular: sizeRegular$c,
	sizeSmall: sizeSmall$c,
	tierborked: tierborked$c,
	tierbronze: tierbronze$c,
	tiergold: tiergold$c,
	tierMinborked: tierMinborked$c,
	tierMinbronze: tierMinbronze$c,
	tierMingold: tierMingold$c,
	tierMinpending: tierMinpending$c,
	tierMinplatinum: tierMinplatinum$c,
	tierMinsilver: tierMinsilver$c,
	tierpending: tierpending$c,
	tierplatinum: tierplatinum$c,
	tiersilver: tiersilver$c,
	expandOnHoverOff: expandOnHoverOff$c,
	submit: submit$c,
	login: login$c,
	loading: loading$c,
	noReport: noReport$c,
	disableSubmit: disableSubmit$c,
	disableSubmitDesc: disableSubmitDesc$c,
	enableLibraryBadge: enableLibraryBadge$c,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$c,
	enableStoreBadge: enableStoreBadge$c,
	enableStoreBadgeDesc: enableStoreBadgeDesc$c,
	storeBadgePosition: storeBadgePosition$c,
	storeBadgePositionDesc: storeBadgePositionDesc$c,
	storePositionBottomCenter: storePositionBottomCenter$c,
	storePositionBottomLeft: storePositionBottomLeft$c,
	storePositionBottomRight: storePositionBottomRight$c,
	storePositionTopMiddle: storePositionTopMiddle$c,
	helpButton: helpButton$c,
	helpTitle: helpTitle$c,
	helpToc: helpToc$c,
	helpClose: helpClose$c,
	helpAboutTitle: helpAboutTitle$c,
	helpAboutDesc: helpAboutDesc$c,
	helpUsingTitle: helpUsingTitle$c,
	helpBadgeTiers: helpBadgeTiers$c,
	helpTierPlatinum: helpTierPlatinum$c,
	helpTierGold: helpTierGold$c,
	helpTierSilver: helpTierSilver$c,
	helpTierBronze: helpTierBronze$c,
	helpTierBorked: helpTierBorked$c,
	helpTierPending: helpTierPending$c,
	helpTierNoReport: helpTierNoReport$c,
	helpSettingsExplain: helpSettingsExplain$c,
	helpSettingSize: helpSettingSize$c,
	helpSettingSizeDesc: helpSettingSizeDesc$c,
	helpSettingPosition: helpSettingPosition$c,
	helpSettingPositionDesc: helpSettingPositionDesc$c,
	helpSettingSubmit: helpSettingSubmit$c,
	helpSettingSubmitDesc: helpSettingSubmitDesc$c,
	helpProtonDBTitle: helpProtonDBTitle$c,
	helpProtonDBDesc: helpProtonDBDesc$c,
	helpProtonDBSteps: helpProtonDBSteps$c,
	helpStep1: helpStep1$c,
	helpStep2: helpStep2$c,
	helpStep3: helpStep3$c,
	helpStep4: helpStep4$c,
	helpStep5: helpStep5$c,
	helpStep6: helpStep6$c,
	helpTip: helpTip$c,
	helpTipContent: helpTipContent$c,
	helpSubmitTitle: helpSubmitTitle$c,
	helpSubmitDesc: helpSubmitDesc$c,
	helpSubmitStep1: helpSubmitStep1$c,
	helpSubmitStep2: helpSubmitStep2$c,
	helpSubmitStep3: helpSubmitStep3$c
};

var sectionLibrary$b = "Biblioteca";
var sectionStore$b = "Loja";
var sectionLinks$b = "Links";
var badgePosition$b = "Posição do Distintivo";
var badgePositionDescription$b = "Posicione o distintivo no cabeçalho da página do jogo";
var badgeSize$b = "Tamanho do Distintivo";
var badgeSizeDescription$b = "Escolha um tamanho diferente para o distintivo";
var caching$b = "Cache";
var clearCache$b = "Limpar Cache do ProtonDB";
var clearCacheLabel$b = "Limpe a cache para forçar a atualização de todos os distintivos ProtonDB";
var expandOnHover$b = "Expandir etiqueta ao passar o rato";
var expandOnHoverDescription$b = "Apenas minimalista. Mostrar texto do distintivo ao focar";
var positionTopLeft$b = "Superior Esquerdo";
var positionTopRight$b = "Superior Direito";
var positionBottomLeft$b = "Inferior Esquerdo";
var positionBottomMiddle$b = "Inferior Centro";
var positionBottomRight$b = "Inferior Direito";
var positionTopMiddle$b = "Superior Centro";
var settings$b = "Definições";
var sizeMinimalist$b = "Minimalista";
var sizeRegular$b = "Normal";
var sizeSmall$b = "Pequeno";
var tierborked$b = "QUEBRADO";
var tierbronze$b = "BRONZE";
var tiergold$b = "OURO";
var tierMinborked$b = "QUEB";
var tierMinbronze$b = "BRON";
var tierMingold$b = "OURO";
var tierMinpending$b = "PEND";
var tierMinplatinum$b = "PLAT";
var tierMinsilver$b = "PRAT";
var tierpending$b = "PENDENTE";
var tierplatinum$b = "PLATINA";
var tiersilver$b = "PRATA";
var expandOnHoverOff$b = "Desactivado";
var submit$b = "ENVIAR";
var login$b = "Iniciar sessão";
var loading$b = "...";
var noReport$b = "SEM RELATÓRIO";
var disableSubmit$b = "Desativar envio";
var disableSubmitDesc$b = "Ocultar o botão de envio para relatórios ProtonDB";
var enableLibraryBadge$b = "Ativar distintivo na biblioteca";
var enableLibraryBadgeDesc$b = "Mostrar distintivo ProtonDB nas páginas de jogos da sua biblioteca";
var enableStoreBadge$b = "Ativar distintivo nas páginas da loja";
var enableStoreBadgeDesc$b = "Mostrar distintivo ProtonDB como sobreposição nas páginas da loja";
var storeBadgePosition$b = "Posição do distintivo na loja";
var storeBadgePositionDesc$b = "Posicionar a sobreposição do distintivo nas páginas da loja";
var storePositionBottomCenter$b = "Inferior Centro";
var storePositionBottomLeft$b = "Inferior Esquerdo";
var storePositionBottomRight$b = "Inferior Direito";
var storePositionTopMiddle$b = "Superior Centro";
var helpButton$b = "Instruções";
var helpTitle$b = "ProtonDB Badges - Ajuda";
var helpToc$b = "Ir para secção";
var helpClose$b = "Fechar";
var helpAboutTitle$b = "Sobre este plugin";
var helpAboutDesc$b = "ProtonDB Badges mostra as classificações de compatibilidade do ProtonDB diretamente no seu Steam Deck. Veja num relance quão bem os jogos funcionam no Linux/Proton sem sair da interface Steam.";
var helpUsingTitle$b = "Usar o plugin";
var helpBadgeTiers$b = "Níveis de distintivo:";
var helpTierPlatinum$b = "Funciona perfeitamente sem configuração";
var helpTierGold$b = "Funciona perfeitamente após ajustes";
var helpTierSilver$b = "Funciona com problemas menores";
var helpTierBronze$b = "Funciona, mas frequentemente bloqueia ou tem problemas";
var helpTierBorked$b = "Não funciona ou é injogável";
var helpTierPending$b = "Tem relatórios mas ainda não avaliado";
var helpTierNoReport$b = "Sem relatórios ainda - seja o primeiro!";
var helpSettingsExplain$b = "Explicação das definições:";
var helpSettingSize$b = "Tamanho do distintivo";
var helpSettingSizeDesc$b = "Normal (tamanho completo), Pequeno (compacto) ou Minimalista (apenas ícone)";
var helpSettingPosition$b = "Posição do distintivo";
var helpSettingPositionDesc$b = "Onde o distintivo aparece nas páginas de jogos";
var helpSettingSubmit$b = "Desativar envio";
var helpSettingSubmitDesc$b = "Ocultar o botão para enviar relatórios ao ProtonDB";
var helpProtonDBTitle$b = "Adicionar Steam Deck ao ProtonDB";
var helpProtonDBDesc$b = "Para enviar relatórios do seu Steam Deck, precisa de o registar como dispositivo no ProtonDB. Isto requer o Modo Desktop.";
var helpProtonDBSteps$b = "Passos para registar:";
var helpStep1$b = "Mude para o Modo Desktop (mantenha o botão Power premido → Mudar para Desktop)";
var helpStep2$b = "Abra um navegador web (Firefox ou Chrome)";
var helpStep3$b = "Vá a protondb.com e inicie sessão com a sua conta Steam";
var helpStep4$b = "Clique no seu ícone de perfil no canto superior direito";
var helpStep5$b = "Vá a 'My Rigs' e clique em 'Add a Rig'";
var helpStep6$b = "Selecione 'Steam Deck' como tipo de dispositivo e guarde";
var helpTip$b = "Dica";
var helpTipContent$b = "Depois de registar o seu Steam Deck, pode enviar relatórios diretamente do Modo Jogo usando o botão Enviar nos distintivos.";
var helpSubmitTitle$b = "Enviar relatórios de jogos";
var helpSubmitDesc$b = "Ajude a comunidade partilhando a sua experiência de jogo! Os relatórios ajudam outros a saber o que esperar.";
var helpSubmitStep1$b = "Jogue um jogo durante pelo menos 15-30 minutos";
var helpSubmitStep2$b = "Clique no botão Enviar no distintivo ProtonDB";
var helpSubmitStep3$b = "Preencha o formulário de relatório no site do ProtonDB";
var pt = {
	sectionLibrary: sectionLibrary$b,
	sectionStore: sectionStore$b,
	sectionLinks: sectionLinks$b,
	badgePosition: badgePosition$b,
	badgePositionDescription: badgePositionDescription$b,
	badgeSize: badgeSize$b,
	badgeSizeDescription: badgeSizeDescription$b,
	caching: caching$b,
	clearCache: clearCache$b,
	clearCacheLabel: clearCacheLabel$b,
	expandOnHover: expandOnHover$b,
	expandOnHoverDescription: expandOnHoverDescription$b,
	positionTopLeft: positionTopLeft$b,
	positionTopRight: positionTopRight$b,
	positionBottomLeft: positionBottomLeft$b,
	positionBottomMiddle: positionBottomMiddle$b,
	positionBottomRight: positionBottomRight$b,
	positionTopMiddle: positionTopMiddle$b,
	settings: settings$b,
	sizeMinimalist: sizeMinimalist$b,
	sizeRegular: sizeRegular$b,
	sizeSmall: sizeSmall$b,
	tierborked: tierborked$b,
	tierbronze: tierbronze$b,
	tiergold: tiergold$b,
	tierMinborked: tierMinborked$b,
	tierMinbronze: tierMinbronze$b,
	tierMingold: tierMingold$b,
	tierMinpending: tierMinpending$b,
	tierMinplatinum: tierMinplatinum$b,
	tierMinsilver: tierMinsilver$b,
	tierpending: tierpending$b,
	tierplatinum: tierplatinum$b,
	tiersilver: tiersilver$b,
	expandOnHoverOff: expandOnHoverOff$b,
	submit: submit$b,
	login: login$b,
	loading: loading$b,
	noReport: noReport$b,
	disableSubmit: disableSubmit$b,
	disableSubmitDesc: disableSubmitDesc$b,
	enableLibraryBadge: enableLibraryBadge$b,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$b,
	enableStoreBadge: enableStoreBadge$b,
	enableStoreBadgeDesc: enableStoreBadgeDesc$b,
	storeBadgePosition: storeBadgePosition$b,
	storeBadgePositionDesc: storeBadgePositionDesc$b,
	storePositionBottomCenter: storePositionBottomCenter$b,
	storePositionBottomLeft: storePositionBottomLeft$b,
	storePositionBottomRight: storePositionBottomRight$b,
	storePositionTopMiddle: storePositionTopMiddle$b,
	helpButton: helpButton$b,
	helpTitle: helpTitle$b,
	helpToc: helpToc$b,
	helpClose: helpClose$b,
	helpAboutTitle: helpAboutTitle$b,
	helpAboutDesc: helpAboutDesc$b,
	helpUsingTitle: helpUsingTitle$b,
	helpBadgeTiers: helpBadgeTiers$b,
	helpTierPlatinum: helpTierPlatinum$b,
	helpTierGold: helpTierGold$b,
	helpTierSilver: helpTierSilver$b,
	helpTierBronze: helpTierBronze$b,
	helpTierBorked: helpTierBorked$b,
	helpTierPending: helpTierPending$b,
	helpTierNoReport: helpTierNoReport$b,
	helpSettingsExplain: helpSettingsExplain$b,
	helpSettingSize: helpSettingSize$b,
	helpSettingSizeDesc: helpSettingSizeDesc$b,
	helpSettingPosition: helpSettingPosition$b,
	helpSettingPositionDesc: helpSettingPositionDesc$b,
	helpSettingSubmit: helpSettingSubmit$b,
	helpSettingSubmitDesc: helpSettingSubmitDesc$b,
	helpProtonDBTitle: helpProtonDBTitle$b,
	helpProtonDBDesc: helpProtonDBDesc$b,
	helpProtonDBSteps: helpProtonDBSteps$b,
	helpStep1: helpStep1$b,
	helpStep2: helpStep2$b,
	helpStep3: helpStep3$b,
	helpStep4: helpStep4$b,
	helpStep5: helpStep5$b,
	helpStep6: helpStep6$b,
	helpTip: helpTip$b,
	helpTipContent: helpTipContent$b,
	helpSubmitTitle: helpSubmitTitle$b,
	helpSubmitDesc: helpSubmitDesc$b,
	helpSubmitStep1: helpSubmitStep1$b,
	helpSubmitStep2: helpSubmitStep2$b,
	helpSubmitStep3: helpSubmitStep3$b
};

var sectionLibrary$a = "Biblioteca";
var sectionStore$a = "Loja";
var sectionLinks$a = "Links";
var badgePosition$a = "Posição da Medalha";
var badgePositionDescription$a = "A posição aonde a medalha ficará na página do jogo";
var badgeSize$a = "Tamanho da Medalha";
var badgeSizeDescription$a = "Escolha um tamanho diferente para a medalha";
var caching$a = "Cacheamento";
var clearCache$a = "Limpar Cache do ProtonDB";
var clearCacheLabel$a = "Limpe o cache para forçar a atualização de todas as medalhas do ProtonDB";
var expandOnHover$a = "Expandir Selo ao focalizar";
var expandOnHoverDescription$a = "Apenas para Minimalista. Exibe o texto da medalha quando estiver em foco";
var positionTopLeft$a = "Superior Esquerdo";
var positionTopRight$a = "Superior Direito";
var positionBottomLeft$a = "Inferior Esquerdo";
var positionBottomMiddle$a = "Inferior Centro";
var positionBottomRight$a = "Inferior Direito";
var positionTopMiddle$a = "Superior Centro";
var settings$a = "Configurações";
var sizeMinimalist$a = "Minimalista";
var sizeRegular$a = "Normal";
var sizeSmall$a = "Pequeno";
var tierborked$a = "QUEBRADO";
var tierbronze$a = "BRONZE";
var tiergold$a = "OURO";
var tierMinborked$a = "QUEB";
var tierMinbronze$a = "BRON";
var tierMingold$a = "OURO";
var tierMinpending$a = "PEND";
var tierMinplatinum$a = "PLAT";
var tierMinsilver$a = "PRAT";
var tierpending$a = "PENDENTE";
var tierplatinum$a = "PLATINA";
var tiersilver$a = "PRATA";
var expandOnHoverOff$a = "Desativado";
var submit$a = "ENVIAR";
var login$a = "Entrar";
var loading$a = "...";
var noReport$a = "SEM RELATÓRIO";
var disableSubmit$a = "Desativar envio";
var disableSubmitDesc$a = "Ocultar o botão de envio para relatórios ProtonDB";
var enableLibraryBadge$a = "Ativar medalha na biblioteca";
var enableLibraryBadgeDesc$a = "Mostrar medalha ProtonDB nas páginas de jogos da sua biblioteca";
var enableStoreBadge$a = "Ativar medalha nas páginas da loja";
var enableStoreBadgeDesc$a = "Mostrar medalha ProtonDB como sobreposição nas páginas da loja";
var storeBadgePosition$a = "Posição da medalha na loja";
var storeBadgePositionDesc$a = "Posicionar a sobreposição da medalha nas páginas da loja";
var storePositionBottomCenter$a = "Inferior Centro";
var storePositionBottomLeft$a = "Inferior Esquerdo";
var storePositionBottomRight$a = "Inferior Direito";
var storePositionTopMiddle$a = "Superior Centro";
var helpButton$a = "Instruções";
var helpTitle$a = "ProtonDB Badges - Ajuda";
var helpToc$a = "Ir para seção";
var helpClose$a = "Fechar";
var helpAboutTitle$a = "Sobre este plugin";
var helpAboutDesc$a = "ProtonDB Badges mostra as classificações de compatibilidade do ProtonDB diretamente no seu Steam Deck. Veja rapidamente como os jogos funcionam no Linux/Proton sem sair da interface Steam.";
var helpUsingTitle$a = "Usando o plugin";
var helpBadgeTiers$a = "Níveis de medalha:";
var helpTierPlatinum$a = "Funciona perfeitamente sem configuração";
var helpTierGold$a = "Funciona perfeitamente após ajustes";
var helpTierSilver$a = "Funciona com problemas menores";
var helpTierBronze$a = "Funciona, mas frequentemente trava ou tem problemas";
var helpTierBorked$a = "Não funciona ou é injogável";
var helpTierPending$a = "Tem relatórios mas ainda não avaliado";
var helpTierNoReport$a = "Sem relatórios ainda - seja o primeiro!";
var helpSettingsExplain$a = "Explicação das configurações:";
var helpSettingSize$a = "Tamanho da medalha";
var helpSettingSizeDesc$a = "Normal (tamanho completo), Pequeno (compacto) ou Minimalista (apenas ícone)";
var helpSettingPosition$a = "Posição da medalha";
var helpSettingPositionDesc$a = "Onde a medalha aparece nas páginas de jogos";
var helpSettingSubmit$a = "Desativar envio";
var helpSettingSubmitDesc$a = "Ocultar o botão para enviar relatórios ao ProtonDB";
var helpProtonDBTitle$a = "Adicionar Steam Deck ao ProtonDB";
var helpProtonDBDesc$a = "Para enviar relatórios do seu Steam Deck, você precisa registrá-lo como dispositivo no ProtonDB. Isso requer o Modo Desktop.";
var helpProtonDBSteps$a = "Passos para registrar:";
var helpStep1$a = "Mude para o Modo Desktop (segure o botão Power → Mudar para Desktop)";
var helpStep2$a = "Abra um navegador web (Firefox ou Chrome)";
var helpStep3$a = "Vá para protondb.com e faça login com sua conta Steam";
var helpStep4$a = "Clique no seu ícone de perfil no canto superior direito";
var helpStep5$a = "Vá para 'My Rigs' e clique em 'Add a Rig'";
var helpStep6$a = "Selecione 'Steam Deck' como tipo de dispositivo e salve";
var helpTip$a = "Dica";
var helpTipContent$a = "Depois de registrar seu Steam Deck, você pode enviar relatórios diretamente do Modo Jogo usando o botão Enviar nas medalhas.";
var helpSubmitTitle$a = "Enviando relatórios de jogos";
var helpSubmitDesc$a = "Ajude a comunidade compartilhando sua experiência de jogo! Os relatórios ajudam outros a saber o que esperar.";
var helpSubmitStep1$a = "Jogue um jogo por pelo menos 15-30 minutos";
var helpSubmitStep2$a = "Clique no botão Enviar na medalha ProtonDB";
var helpSubmitStep3$a = "Preencha o formulário de relatório no site do ProtonDB";
var ptBr = {
	sectionLibrary: sectionLibrary$a,
	sectionStore: sectionStore$a,
	sectionLinks: sectionLinks$a,
	badgePosition: badgePosition$a,
	badgePositionDescription: badgePositionDescription$a,
	badgeSize: badgeSize$a,
	badgeSizeDescription: badgeSizeDescription$a,
	caching: caching$a,
	clearCache: clearCache$a,
	clearCacheLabel: clearCacheLabel$a,
	expandOnHover: expandOnHover$a,
	expandOnHoverDescription: expandOnHoverDescription$a,
	positionTopLeft: positionTopLeft$a,
	positionTopRight: positionTopRight$a,
	positionBottomLeft: positionBottomLeft$a,
	positionBottomMiddle: positionBottomMiddle$a,
	positionBottomRight: positionBottomRight$a,
	positionTopMiddle: positionTopMiddle$a,
	settings: settings$a,
	sizeMinimalist: sizeMinimalist$a,
	sizeRegular: sizeRegular$a,
	sizeSmall: sizeSmall$a,
	tierborked: tierborked$a,
	tierbronze: tierbronze$a,
	tiergold: tiergold$a,
	tierMinborked: tierMinborked$a,
	tierMinbronze: tierMinbronze$a,
	tierMingold: tierMingold$a,
	tierMinpending: tierMinpending$a,
	tierMinplatinum: tierMinplatinum$a,
	tierMinsilver: tierMinsilver$a,
	tierpending: tierpending$a,
	tierplatinum: tierplatinum$a,
	tiersilver: tiersilver$a,
	expandOnHoverOff: expandOnHoverOff$a,
	submit: submit$a,
	login: login$a,
	loading: loading$a,
	noReport: noReport$a,
	disableSubmit: disableSubmit$a,
	disableSubmitDesc: disableSubmitDesc$a,
	enableLibraryBadge: enableLibraryBadge$a,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$a,
	enableStoreBadge: enableStoreBadge$a,
	enableStoreBadgeDesc: enableStoreBadgeDesc$a,
	storeBadgePosition: storeBadgePosition$a,
	storeBadgePositionDesc: storeBadgePositionDesc$a,
	storePositionBottomCenter: storePositionBottomCenter$a,
	storePositionBottomLeft: storePositionBottomLeft$a,
	storePositionBottomRight: storePositionBottomRight$a,
	storePositionTopMiddle: storePositionTopMiddle$a,
	helpButton: helpButton$a,
	helpTitle: helpTitle$a,
	helpToc: helpToc$a,
	helpClose: helpClose$a,
	helpAboutTitle: helpAboutTitle$a,
	helpAboutDesc: helpAboutDesc$a,
	helpUsingTitle: helpUsingTitle$a,
	helpBadgeTiers: helpBadgeTiers$a,
	helpTierPlatinum: helpTierPlatinum$a,
	helpTierGold: helpTierGold$a,
	helpTierSilver: helpTierSilver$a,
	helpTierBronze: helpTierBronze$a,
	helpTierBorked: helpTierBorked$a,
	helpTierPending: helpTierPending$a,
	helpTierNoReport: helpTierNoReport$a,
	helpSettingsExplain: helpSettingsExplain$a,
	helpSettingSize: helpSettingSize$a,
	helpSettingSizeDesc: helpSettingSizeDesc$a,
	helpSettingPosition: helpSettingPosition$a,
	helpSettingPositionDesc: helpSettingPositionDesc$a,
	helpSettingSubmit: helpSettingSubmit$a,
	helpSettingSubmitDesc: helpSettingSubmitDesc$a,
	helpProtonDBTitle: helpProtonDBTitle$a,
	helpProtonDBDesc: helpProtonDBDesc$a,
	helpProtonDBSteps: helpProtonDBSteps$a,
	helpStep1: helpStep1$a,
	helpStep2: helpStep2$a,
	helpStep3: helpStep3$a,
	helpStep4: helpStep4$a,
	helpStep5: helpStep5$a,
	helpStep6: helpStep6$a,
	helpTip: helpTip$a,
	helpTipContent: helpTipContent$a,
	helpSubmitTitle: helpSubmitTitle$a,
	helpSubmitDesc: helpSubmitDesc$a,
	helpSubmitStep1: helpSubmitStep1$a,
	helpSubmitStep2: helpSubmitStep2$a,
	helpSubmitStep3: helpSubmitStep3$a
};

var sectionLibrary$9 = "Library";
var sectionStore$9 = "Store";
var sectionLinks$9 = "Links";
var badgePosition$9 = "Poziția Ecusonului";
var badgePositionDescription$9 = "Poziționați ecusonul în interiorul antetului paginii de joc";
var badgeSize$9 = "Dimensiunea Ecusonului";
var badgeSizeDescription$9 = "Alegeți o dimensiune diferită pentru ecuson";
var caching$9 = "Cache-are";
var clearCache$9 = "Ștergeți Cache-ul ProtonDB";
var clearCacheLabel$9 = "Ștergeți cache-ul pentru a forța reîmprospătarea tuturor ecusoanelor ProtonDB";
var expandOnHover$9 = "Extindeți eticheta la survol";
var expandOnHoverDescription$9 = "Doar minimalist. Afișați textul ecusonului la focalizare";
var positionTopLeft$9 = "Stânga Sus";
var positionTopRight$9 = "Dreapta Sus";
var positionBottomLeft$9 = "Bottom Left";
var positionBottomMiddle$9 = "Bottom Middle";
var positionBottomRight$9 = "Bottom Right";
var positionTopMiddle$9 = "Centru Sus";
var settings$9 = "Setări";
var sizeMinimalist$9 = "Minimalist";
var sizeRegular$9 = "Obișnuit";
var sizeSmall$9 = "Mic";
var tierborked$9 = "BORKED";
var tierbronze$9 = "BRONZĂ";
var tiergold$9 = "AUR";
var tierMinborked$9 = "BORK";
var tierMinbronze$9 = "BRON";
var tierMingold$9 = "AUR";
var tierMinpending$9 = "ÎN AȘTEPTARE";
var tierMinplatinum$9 = "PLAT";
var tierMinsilver$9 = "ARGI";
var tierpending$9 = "ÎN AȘTEPTARE";
var tierplatinum$9 = "PLATINUM";
var tiersilver$9 = "ARGINT";
var expandOnHoverOff$9 = "Dezactivată";
var submit$9 = "TRIMITE";
var login$9 = "Autentificare";
var loading$9 = "...";
var noReport$9 = "FĂRĂ RAPORT";
var disableSubmit$9 = "Dezactivați trimiterea";
var disableSubmitDesc$9 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$9 = "Enable Badge on Library";
var enableLibraryBadgeDesc$9 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$9 = "Activați ecusonul pe paginile magazinului";
var enableStoreBadgeDesc$9 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$9 = "Store Badge Position";
var storeBadgePositionDesc$9 = "Position the badge overlay on store pages";
var storePositionBottomCenter$9 = "Bottom Center";
var storePositionBottomLeft$9 = "Bottom Left";
var storePositionBottomRight$9 = "Bottom Right";
var storePositionTopMiddle$9 = "Top Right";
var helpButton$9 = "Instrucțiuni";
var helpTitle$9 = "ProtonDB Badges - Ajutor";
var helpToc$9 = "Salt la secțiune";
var helpClose$9 = "Închide";
var helpAboutTitle$9 = "Despre acest plugin";
var helpAboutDesc$9 = "ProtonDB Badges afișează evaluările de compatibilitate ProtonDB direct pe Steam Deck-ul tău. Vezi dintr-o privire cât de bine funcționează jocurile pe Linux/Proton fără a părăsi interfața Steam.";
var helpUsingTitle$9 = "Utilizarea plugin-ului";
var helpBadgeTiers$9 = "Niveluri ecusoane:";
var helpTierPlatinum$9 = "Funcționează perfect fără configurare";
var helpTierGold$9 = "Funcționează perfect după ajustări";
var helpTierSilver$9 = "Funcționează cu probleme minore";
var helpTierBronze$9 = "Funcționează, dar se blochează des sau are probleme";
var helpTierBorked$9 = "Nu funcționează sau este nejucabil";
var helpTierPending$9 = "Are rapoarte dar nu este încă evaluat";
var helpTierNoReport$9 = "Nu există rapoarte încă - fii primul!";
var helpSettingsExplain$9 = "Explicații setări:";
var helpSettingSize$9 = "Dimensiune ecuson";
var helpSettingSizeDesc$9 = "Obișnuit (dimensiune completă), Mic (compact) sau Minimalist (doar pictogramă)";
var helpSettingPosition$9 = "Poziție ecuson";
var helpSettingPositionDesc$9 = "Unde apare ecusonul pe paginile jocurilor";
var helpSettingSubmit$9 = "Dezactivare trimitere";
var helpSettingSubmitDesc$9 = "Ascunde butonul de trimitere rapoarte către ProtonDB";
var helpProtonDBTitle$9 = "Adăugarea Steam Deck la ProtonDB";
var helpProtonDBDesc$9 = "Pentru a trimite rapoarte de pe Steam Deck, trebuie să îl înregistrezi ca dispozitiv pe ProtonDB. Aceasta necesită Modul Desktop.";
var helpProtonDBSteps$9 = "Pași pentru înregistrare:";
var helpStep1$9 = "Comută în Modul Desktop (ține apăsat butonul de pornire → Comută la Desktop)";
var helpStep2$9 = "Deschide un browser web (Firefox sau Chrome)";
var helpStep3$9 = "Mergi la protondb.com și autentifică-te cu contul tău Steam";
var helpStep4$9 = "Apasă pe pictograma profilului tău în colțul din dreapta sus";
var helpStep5$9 = "Mergi la 'My Rigs' și apasă pe 'Add a Rig'";
var helpStep6$9 = "Selectează 'Steam Deck' ca tip de dispozitiv și salvează";
var helpTip$9 = "Sfat";
var helpTipContent$9 = "După înregistrarea Steam Deck-ului, poți trimite rapoarte direct din Modul Joc folosind butonul Trimite de pe ecusoane.";
var helpSubmitTitle$9 = "Trimiterea rapoartelor de joc";
var helpSubmitDesc$9 = "Ajută comunitatea împărtășindu-ți experiența de joc! Rapoartele ajută pe alții să știe la ce să se aștepte.";
var helpSubmitStep1$9 = "Joacă un joc cel puțin 15-30 de minute";
var helpSubmitStep2$9 = "Apasă butonul Trimite de pe ecusonul ProtonDB";
var helpSubmitStep3$9 = "Completează formularul de raport pe site-ul ProtonDB";
var ro = {
	sectionLibrary: sectionLibrary$9,
	sectionStore: sectionStore$9,
	sectionLinks: sectionLinks$9,
	badgePosition: badgePosition$9,
	badgePositionDescription: badgePositionDescription$9,
	badgeSize: badgeSize$9,
	badgeSizeDescription: badgeSizeDescription$9,
	caching: caching$9,
	clearCache: clearCache$9,
	clearCacheLabel: clearCacheLabel$9,
	expandOnHover: expandOnHover$9,
	expandOnHoverDescription: expandOnHoverDescription$9,
	positionTopLeft: positionTopLeft$9,
	positionTopRight: positionTopRight$9,
	positionBottomLeft: positionBottomLeft$9,
	positionBottomMiddle: positionBottomMiddle$9,
	positionBottomRight: positionBottomRight$9,
	positionTopMiddle: positionTopMiddle$9,
	settings: settings$9,
	sizeMinimalist: sizeMinimalist$9,
	sizeRegular: sizeRegular$9,
	sizeSmall: sizeSmall$9,
	tierborked: tierborked$9,
	tierbronze: tierbronze$9,
	tiergold: tiergold$9,
	tierMinborked: tierMinborked$9,
	tierMinbronze: tierMinbronze$9,
	tierMingold: tierMingold$9,
	tierMinpending: tierMinpending$9,
	tierMinplatinum: tierMinplatinum$9,
	tierMinsilver: tierMinsilver$9,
	tierpending: tierpending$9,
	tierplatinum: tierplatinum$9,
	tiersilver: tiersilver$9,
	expandOnHoverOff: expandOnHoverOff$9,
	submit: submit$9,
	login: login$9,
	loading: loading$9,
	noReport: noReport$9,
	disableSubmit: disableSubmit$9,
	disableSubmitDesc: disableSubmitDesc$9,
	enableLibraryBadge: enableLibraryBadge$9,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$9,
	enableStoreBadge: enableStoreBadge$9,
	enableStoreBadgeDesc: enableStoreBadgeDesc$9,
	storeBadgePosition: storeBadgePosition$9,
	storeBadgePositionDesc: storeBadgePositionDesc$9,
	storePositionBottomCenter: storePositionBottomCenter$9,
	storePositionBottomLeft: storePositionBottomLeft$9,
	storePositionBottomRight: storePositionBottomRight$9,
	storePositionTopMiddle: storePositionTopMiddle$9,
	helpButton: helpButton$9,
	helpTitle: helpTitle$9,
	helpToc: helpToc$9,
	helpClose: helpClose$9,
	helpAboutTitle: helpAboutTitle$9,
	helpAboutDesc: helpAboutDesc$9,
	helpUsingTitle: helpUsingTitle$9,
	helpBadgeTiers: helpBadgeTiers$9,
	helpTierPlatinum: helpTierPlatinum$9,
	helpTierGold: helpTierGold$9,
	helpTierSilver: helpTierSilver$9,
	helpTierBronze: helpTierBronze$9,
	helpTierBorked: helpTierBorked$9,
	helpTierPending: helpTierPending$9,
	helpTierNoReport: helpTierNoReport$9,
	helpSettingsExplain: helpSettingsExplain$9,
	helpSettingSize: helpSettingSize$9,
	helpSettingSizeDesc: helpSettingSizeDesc$9,
	helpSettingPosition: helpSettingPosition$9,
	helpSettingPositionDesc: helpSettingPositionDesc$9,
	helpSettingSubmit: helpSettingSubmit$9,
	helpSettingSubmitDesc: helpSettingSubmitDesc$9,
	helpProtonDBTitle: helpProtonDBTitle$9,
	helpProtonDBDesc: helpProtonDBDesc$9,
	helpProtonDBSteps: helpProtonDBSteps$9,
	helpStep1: helpStep1$9,
	helpStep2: helpStep2$9,
	helpStep3: helpStep3$9,
	helpStep4: helpStep4$9,
	helpStep5: helpStep5$9,
	helpStep6: helpStep6$9,
	helpTip: helpTip$9,
	helpTipContent: helpTipContent$9,
	helpSubmitTitle: helpSubmitTitle$9,
	helpSubmitDesc: helpSubmitDesc$9,
	helpSubmitStep1: helpSubmitStep1$9,
	helpSubmitStep2: helpSubmitStep2$9,
	helpSubmitStep3: helpSubmitStep3$9
};

var sectionLibrary$8 = "Library";
var sectionStore$8 = "Store";
var sectionLinks$8 = "Links";
var badgePosition$8 = "Позиция значка";
var badgePositionDescription$8 = "Где будет значок на фоне страницы игры";
var badgeSize$8 = "Размер значка";
var badgeSizeDescription$8 = "Выберите другой размер значка";
var caching$8 = "Кэширование";
var clearCache$8 = "Очистить кэш ProtonDB";
var clearCacheLabel$8 = "Очистить кэш, чтобы принудительно обновить все значки ProtonDB";
var expandOnHover$8 = "Развернуть ярлык при наведении";
var expandOnHoverDescription$8 = "Только минималистичный. Показывать текст значка на наведении";
var positionTopLeft$8 = "Вверху слева";
var positionTopRight$8 = "Вверху справа";
var positionBottomLeft$8 = "Bottom Left";
var positionBottomMiddle$8 = "Bottom Middle";
var positionBottomRight$8 = "Bottom Right";
var positionTopMiddle$8 = "Вверху по центру";
var settings$8 = "Настройки";
var sizeMinimalist$8 = "Минималистичный";
var sizeRegular$8 = "Обычный";
var sizeSmall$8 = "Маленький";
var tierborked$8 = "СЛОМАНО";
var tierbronze$8 = "БРОНЗА";
var tiergold$8 = "ЗОЛОТО";
var tierMinborked$8 = "СЛОМ";
var tierMinbronze$8 = "БРОН";
var tierMingold$8 = "ЗОЛ";
var tierMinpending$8 = "ОЖИД";
var tierMinplatinum$8 = "ПЛАТ";
var tierMinsilver$8 = "СЕРБ";
var tierpending$8 = "В ОЖИДАНИИ";
var tierplatinum$8 = "ПЛАТИНА";
var tiersilver$8 = "СЕРЕБРО";
var expandOnHoverOff$8 = "Выкл";
var submit$8 = "ОТПРАВИТЬ";
var login$8 = "Войти";
var loading$8 = "...";
var noReport$8 = "НЕТ ОТЧЁТА";
var disableSubmit$8 = "Отключить отправку";
var disableSubmitDesc$8 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$8 = "Enable Badge on Library";
var enableLibraryBadgeDesc$8 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$8 = "Включить значок на страницах магазина";
var enableStoreBadgeDesc$8 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$8 = "Store Badge Position";
var storeBadgePositionDesc$8 = "Position the badge overlay on store pages";
var storePositionBottomCenter$8 = "Bottom Center";
var storePositionBottomLeft$8 = "Bottom Left";
var storePositionBottomRight$8 = "Bottom Right";
var storePositionTopMiddle$8 = "Top Right";
var helpButton$8 = "Инструкция";
var helpTitle$8 = "ProtonDB Badges - Справка";
var helpToc$8 = "Перейти к разделу";
var helpClose$8 = "Закрыть";
var helpAboutTitle$8 = "Об этом плагине";
var helpAboutDesc$8 = "ProtonDB Badges отображает рейтинги совместимости ProtonDB непосредственно на вашем Steam Deck. Узнайте с первого взгляда, насколько хорошо игры работают на Linux/Proton, не покидая интерфейс Steam.";
var helpUsingTitle$8 = "Использование плагина";
var helpBadgeTiers$8 = "Уровни значков:";
var helpTierPlatinum$8 = "Работает идеально без настройки";
var helpTierGold$8 = "Работает идеально после настройки";
var helpTierSilver$8 = "Работает с небольшими проблемами";
var helpTierBronze$8 = "Работает, но часто вылетает или имеет проблемы";
var helpTierBorked$8 = "Не работает или неиграбельно";
var helpTierPending$8 = "Есть отчёты, но ещё не оценено";
var helpTierNoReport$8 = "Отчётов пока нет - будьте первым!";
var helpSettingsExplain$8 = "Описание настроек:";
var helpSettingSize$8 = "Размер значка";
var helpSettingSizeDesc$8 = "Обычный (полный размер), Маленький (компактный) или Минималистичный (только иконка)";
var helpSettingPosition$8 = "Позиция значка";
var helpSettingPositionDesc$8 = "Где значок отображается на страницах игр";
var helpSettingSubmit$8 = "Отключить отправку";
var helpSettingSubmitDesc$8 = "Скрыть кнопку отправки отчётов в ProtonDB";
var helpProtonDBTitle$8 = "Добавление Steam Deck в ProtonDB";
var helpProtonDBDesc$8 = "Чтобы отправлять отчёты со Steam Deck, вам нужно зарегистрировать его как устройство на ProtonDB. Для этого требуется режим рабочего стола.";
var helpProtonDBSteps$8 = "Шаги для регистрации:";
var helpStep1$8 = "Переключитесь в режим рабочего стола (удерживайте кнопку питания → Переключить на рабочий стол)";
var helpStep2$8 = "Откройте веб-браузер (Firefox или Chrome)";
var helpStep3$8 = "Перейдите на protondb.com и войдите с вашей учётной записью Steam";
var helpStep4$8 = "Нажмите на значок вашего профиля в правом верхнем углу";
var helpStep5$8 = "Перейдите в 'My Rigs' и нажмите 'Add a Rig'";
var helpStep6$8 = "Выберите 'Steam Deck' как тип устройства и сохраните";
var helpTip$8 = "Совет";
var helpTipContent$8 = "После регистрации Steam Deck вы можете отправлять отчёты прямо из игрового режима, используя кнопку отправки на значках.";
var helpSubmitTitle$8 = "Отправка игровых отчётов";
var helpSubmitDesc$8 = "Помогите сообществу, поделившись своим игровым опытом! Отчёты помогают другим знать, чего ожидать.";
var helpSubmitStep1$8 = "Поиграйте в игру минимум 15-30 минут";
var helpSubmitStep2$8 = "Нажмите кнопку отправки на значке ProtonDB";
var helpSubmitStep3$8 = "Заполните форму отчёта на сайте ProtonDB";
var ru = {
	sectionLibrary: sectionLibrary$8,
	sectionStore: sectionStore$8,
	sectionLinks: sectionLinks$8,
	badgePosition: badgePosition$8,
	badgePositionDescription: badgePositionDescription$8,
	badgeSize: badgeSize$8,
	badgeSizeDescription: badgeSizeDescription$8,
	caching: caching$8,
	clearCache: clearCache$8,
	clearCacheLabel: clearCacheLabel$8,
	expandOnHover: expandOnHover$8,
	expandOnHoverDescription: expandOnHoverDescription$8,
	positionTopLeft: positionTopLeft$8,
	positionTopRight: positionTopRight$8,
	positionBottomLeft: positionBottomLeft$8,
	positionBottomMiddle: positionBottomMiddle$8,
	positionBottomRight: positionBottomRight$8,
	positionTopMiddle: positionTopMiddle$8,
	settings: settings$8,
	sizeMinimalist: sizeMinimalist$8,
	sizeRegular: sizeRegular$8,
	sizeSmall: sizeSmall$8,
	tierborked: tierborked$8,
	tierbronze: tierbronze$8,
	tiergold: tiergold$8,
	tierMinborked: tierMinborked$8,
	tierMinbronze: tierMinbronze$8,
	tierMingold: tierMingold$8,
	tierMinpending: tierMinpending$8,
	tierMinplatinum: tierMinplatinum$8,
	tierMinsilver: tierMinsilver$8,
	tierpending: tierpending$8,
	tierplatinum: tierplatinum$8,
	tiersilver: tiersilver$8,
	expandOnHoverOff: expandOnHoverOff$8,
	submit: submit$8,
	login: login$8,
	loading: loading$8,
	noReport: noReport$8,
	disableSubmit: disableSubmit$8,
	disableSubmitDesc: disableSubmitDesc$8,
	enableLibraryBadge: enableLibraryBadge$8,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$8,
	enableStoreBadge: enableStoreBadge$8,
	enableStoreBadgeDesc: enableStoreBadgeDesc$8,
	storeBadgePosition: storeBadgePosition$8,
	storeBadgePositionDesc: storeBadgePositionDesc$8,
	storePositionBottomCenter: storePositionBottomCenter$8,
	storePositionBottomLeft: storePositionBottomLeft$8,
	storePositionBottomRight: storePositionBottomRight$8,
	storePositionTopMiddle: storePositionTopMiddle$8,
	helpButton: helpButton$8,
	helpTitle: helpTitle$8,
	helpToc: helpToc$8,
	helpClose: helpClose$8,
	helpAboutTitle: helpAboutTitle$8,
	helpAboutDesc: helpAboutDesc$8,
	helpUsingTitle: helpUsingTitle$8,
	helpBadgeTiers: helpBadgeTiers$8,
	helpTierPlatinum: helpTierPlatinum$8,
	helpTierGold: helpTierGold$8,
	helpTierSilver: helpTierSilver$8,
	helpTierBronze: helpTierBronze$8,
	helpTierBorked: helpTierBorked$8,
	helpTierPending: helpTierPending$8,
	helpTierNoReport: helpTierNoReport$8,
	helpSettingsExplain: helpSettingsExplain$8,
	helpSettingSize: helpSettingSize$8,
	helpSettingSizeDesc: helpSettingSizeDesc$8,
	helpSettingPosition: helpSettingPosition$8,
	helpSettingPositionDesc: helpSettingPositionDesc$8,
	helpSettingSubmit: helpSettingSubmit$8,
	helpSettingSubmitDesc: helpSettingSubmitDesc$8,
	helpProtonDBTitle: helpProtonDBTitle$8,
	helpProtonDBDesc: helpProtonDBDesc$8,
	helpProtonDBSteps: helpProtonDBSteps$8,
	helpStep1: helpStep1$8,
	helpStep2: helpStep2$8,
	helpStep3: helpStep3$8,
	helpStep4: helpStep4$8,
	helpStep5: helpStep5$8,
	helpStep6: helpStep6$8,
	helpTip: helpTip$8,
	helpTipContent: helpTipContent$8,
	helpSubmitTitle: helpSubmitTitle$8,
	helpSubmitDesc: helpSubmitDesc$8,
	helpSubmitStep1: helpSubmitStep1$8,
	helpSubmitStep2: helpSubmitStep2$8,
	helpSubmitStep3: helpSubmitStep3$8
};

var sectionLibrary$7 = "Library";
var sectionStore$7 = "Store";
var sectionLinks$7 = "Links";
var badgePosition$7 = "Položaj značke";
var badgePositionDescription$7 = "Postavite značko v glavo strani z igro";
var badgeSize$7 = "Velikost značke";
var badgeSizeDescription$7 = "Izberite drugačno velikost za značko";
var caching$7 = "Predpomnjenje";
var clearCache$7 = "Počisti ProtonDB predpomnilnik";
var clearCacheLabel$7 = "Počistite predpomnilnik za prisilno osvežitev vseh ProtonDB značk";
var expandOnHover$7 = "Razširi oznako ob prehodu";
var expandOnHoverDescription$7 = "Samo minimalistično. Prikaži besedilo značke ob fokusu";
var positionTopLeft$7 = "Zgoraj levo";
var positionTopRight$7 = "Zgoraj desno";
var positionBottomLeft$7 = "Bottom Left";
var positionBottomMiddle$7 = "Bottom Middle";
var positionBottomRight$7 = "Bottom Right";
var positionTopMiddle$7 = "Zgoraj na sredini";
var settings$7 = "Nastavitve";
var sizeMinimalist$7 = "Minimalistično";
var sizeRegular$7 = "Običajno";
var sizeSmall$7 = "Majhno";
var tierborked$7 = "POKVARJENO";
var tierbronze$7 = "BRONASTA";
var tiergold$7 = "ZLATA";
var tierMinborked$7 = "BORK";
var tierMinbronze$7 = "BRON";
var tierMingold$7 = "GOLD";
var tierMinpending$7 = "PEND";
var tierMinplatinum$7 = "PLAT";
var tierMinsilver$7 = "SILV";
var tierpending$7 = "V ČAKANJU";
var tierplatinum$7 = "PLATINASTA";
var tiersilver$7 = "SREBRNA";
var expandOnHoverOff$7 = "Izklopljeno";
var submit$7 = "POŠLJI";
var login$7 = "Prijava";
var loading$7 = "...";
var noReport$7 = "NI POROČILA";
var disableSubmit$7 = "Onemogoči pošiljanje";
var disableSubmitDesc$7 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$7 = "Enable Badge on Library";
var enableLibraryBadgeDesc$7 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$7 = "Omogoči značko na straneh trgovine";
var enableStoreBadgeDesc$7 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$7 = "Store Badge Position";
var storeBadgePositionDesc$7 = "Position the badge overlay on store pages";
var storePositionBottomCenter$7 = "Bottom Center";
var storePositionBottomLeft$7 = "Bottom Left";
var storePositionBottomRight$7 = "Bottom Right";
var storePositionTopMiddle$7 = "Top Right";
var helpButton$7 = "Navodila";
var helpTitle$7 = "ProtonDB Badges - Pomoč";
var helpToc$7 = "Skoči na razdelek";
var helpClose$7 = "Zapri";
var helpAboutTitle$7 = "O tem vtičniku";
var helpAboutDesc$7 = "ProtonDB Badges prikazuje ocene združljivosti ProtonDB neposredno na vašem Steam Decku. Na prvi pogled vidite, kako dobro igre delujejo na Linux/Proton, ne da bi zapustili vmesnik Steam.";
var helpUsingTitle$7 = "Uporaba vtičnika";
var helpBadgeTiers$7 = "Ravni značk:";
var helpTierPlatinum$7 = "Deluje odlično brez konfiguracije";
var helpTierGold$7 = "Deluje odlično po prilagoditvah";
var helpTierSilver$7 = "Deluje z manjšimi težavami";
var helpTierBronze$7 = "Deluje, vendar se pogosto sesuje ali ima težave";
var helpTierBorked$7 = "Ne deluje ali je neigrivo";
var helpTierPending$7 = "Ima poročila, vendar še ni ocenjeno";
var helpTierNoReport$7 = "Ni še poročil - bodite prvi!";
var helpSettingsExplain$7 = "Razlaga nastavitev:";
var helpSettingSize$7 = "Velikost značke";
var helpSettingSizeDesc$7 = "Običajno (polna velikost), Majhno (kompaktno) ali Minimalistično (samo ikona)";
var helpSettingPosition$7 = "Položaj značke";
var helpSettingPositionDesc$7 = "Kje se značka prikaže na straneh iger";
var helpSettingSubmit$7 = "Onemogoči pošiljanje";
var helpSettingSubmitDesc$7 = "Skrij gumb za pošiljanje poročil na ProtonDB";
var helpProtonDBTitle$7 = "Dodajanje Steam Decka na ProtonDB";
var helpProtonDBDesc$7 = "Za pošiljanje poročil s Steam Decka ga morate registrirati kot napravo na ProtonDB. To zahteva namizni način.";
var helpProtonDBSteps$7 = "Koraki za registracijo:";
var helpStep1$7 = "Preklopite na namizni način (pridržite gumb za vklop → Preklopi na namizje)";
var helpStep2$7 = "Odprite spletni brskalnik (Firefox ali Chrome)";
var helpStep3$7 = "Pojdite na protondb.com in se prijavite s svojim Steam računom";
var helpStep4$7 = "Kliknite na svojo profilno ikono zgoraj desno";
var helpStep5$7 = "Pojdite na 'My Rigs' in kliknite 'Add a Rig'";
var helpStep6$7 = "Izberite 'Steam Deck' kot tip naprave in shranite";
var helpTip$7 = "Nasvet";
var helpTipContent$7 = "Po registraciji Steam Decka lahko pošiljate poročila neposredno iz igralnega načina z uporabo gumba Pošlji na značkah.";
var helpSubmitTitle$7 = "Pošiljanje poročil o igrah";
var helpSubmitDesc$7 = "Pomagajte skupnosti z deljenjem vaše igralne izkušnje! Poročila pomagajo drugim vedeti, kaj pričakovati.";
var helpSubmitStep1$7 = "Igrajte igro vsaj 15-30 minut";
var helpSubmitStep2$7 = "Kliknite gumb Pošlji na znački ProtonDB";
var helpSubmitStep3$7 = "Izpolnite obrazec za poročilo na spletni strani ProtonDB";
var sl = {
	sectionLibrary: sectionLibrary$7,
	sectionStore: sectionStore$7,
	sectionLinks: sectionLinks$7,
	badgePosition: badgePosition$7,
	badgePositionDescription: badgePositionDescription$7,
	badgeSize: badgeSize$7,
	badgeSizeDescription: badgeSizeDescription$7,
	caching: caching$7,
	clearCache: clearCache$7,
	clearCacheLabel: clearCacheLabel$7,
	expandOnHover: expandOnHover$7,
	expandOnHoverDescription: expandOnHoverDescription$7,
	positionTopLeft: positionTopLeft$7,
	positionTopRight: positionTopRight$7,
	positionBottomLeft: positionBottomLeft$7,
	positionBottomMiddle: positionBottomMiddle$7,
	positionBottomRight: positionBottomRight$7,
	positionTopMiddle: positionTopMiddle$7,
	settings: settings$7,
	sizeMinimalist: sizeMinimalist$7,
	sizeRegular: sizeRegular$7,
	sizeSmall: sizeSmall$7,
	tierborked: tierborked$7,
	tierbronze: tierbronze$7,
	tiergold: tiergold$7,
	tierMinborked: tierMinborked$7,
	tierMinbronze: tierMinbronze$7,
	tierMingold: tierMingold$7,
	tierMinpending: tierMinpending$7,
	tierMinplatinum: tierMinplatinum$7,
	tierMinsilver: tierMinsilver$7,
	tierpending: tierpending$7,
	tierplatinum: tierplatinum$7,
	tiersilver: tiersilver$7,
	expandOnHoverOff: expandOnHoverOff$7,
	submit: submit$7,
	login: login$7,
	loading: loading$7,
	noReport: noReport$7,
	disableSubmit: disableSubmit$7,
	disableSubmitDesc: disableSubmitDesc$7,
	enableLibraryBadge: enableLibraryBadge$7,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$7,
	enableStoreBadge: enableStoreBadge$7,
	enableStoreBadgeDesc: enableStoreBadgeDesc$7,
	storeBadgePosition: storeBadgePosition$7,
	storeBadgePositionDesc: storeBadgePositionDesc$7,
	storePositionBottomCenter: storePositionBottomCenter$7,
	storePositionBottomLeft: storePositionBottomLeft$7,
	storePositionBottomRight: storePositionBottomRight$7,
	storePositionTopMiddle: storePositionTopMiddle$7,
	helpButton: helpButton$7,
	helpTitle: helpTitle$7,
	helpToc: helpToc$7,
	helpClose: helpClose$7,
	helpAboutTitle: helpAboutTitle$7,
	helpAboutDesc: helpAboutDesc$7,
	helpUsingTitle: helpUsingTitle$7,
	helpBadgeTiers: helpBadgeTiers$7,
	helpTierPlatinum: helpTierPlatinum$7,
	helpTierGold: helpTierGold$7,
	helpTierSilver: helpTierSilver$7,
	helpTierBronze: helpTierBronze$7,
	helpTierBorked: helpTierBorked$7,
	helpTierPending: helpTierPending$7,
	helpTierNoReport: helpTierNoReport$7,
	helpSettingsExplain: helpSettingsExplain$7,
	helpSettingSize: helpSettingSize$7,
	helpSettingSizeDesc: helpSettingSizeDesc$7,
	helpSettingPosition: helpSettingPosition$7,
	helpSettingPositionDesc: helpSettingPositionDesc$7,
	helpSettingSubmit: helpSettingSubmit$7,
	helpSettingSubmitDesc: helpSettingSubmitDesc$7,
	helpProtonDBTitle: helpProtonDBTitle$7,
	helpProtonDBDesc: helpProtonDBDesc$7,
	helpProtonDBSteps: helpProtonDBSteps$7,
	helpStep1: helpStep1$7,
	helpStep2: helpStep2$7,
	helpStep3: helpStep3$7,
	helpStep4: helpStep4$7,
	helpStep5: helpStep5$7,
	helpStep6: helpStep6$7,
	helpTip: helpTip$7,
	helpTipContent: helpTipContent$7,
	helpSubmitTitle: helpSubmitTitle$7,
	helpSubmitDesc: helpSubmitDesc$7,
	helpSubmitStep1: helpSubmitStep1$7,
	helpSubmitStep2: helpSubmitStep2$7,
	helpSubmitStep3: helpSubmitStep3$7
};

var sectionLibrary$6 = "Library";
var sectionStore$6 = "Store";
var sectionLinks$6 = "Links";
var badgePosition$6 = "Märkesposition";
var badgePositionDescription$6 = "Placera märket i spelsidans rubrik";
var badgeSize$6 = "Märkesstorlek";
var badgeSizeDescription$6 = "Välj en annan storlek för märket";
var caching$6 = "Cachning";
var clearCache$6 = "Rensa ProtonDB-cache";
var clearCacheLabel$6 = "Rensa cachen för att tvinga uppdatering av alla ProtonDB-märken";
var expandOnHover$6 = "Expandera etikett vid hovring";
var expandOnHoverDescription$6 = "Endast minimalistisk. Visa märkestext vid fokus";
var positionTopLeft$6 = "Överst till vänster";
var positionTopRight$6 = "Överst till höger";
var positionBottomLeft$6 = "Bottom Left";
var positionBottomMiddle$6 = "Bottom Middle";
var positionBottomRight$6 = "Bottom Right";
var positionTopMiddle$6 = "Överst i mitten";
var settings$6 = "Inställningar";
var sizeMinimalist$6 = "Minimalistisk";
var sizeRegular$6 = "Normal";
var sizeSmall$6 = "Liten";
var tierborked$6 = "TRASIG";
var tierbronze$6 = "BRONS";
var tiergold$6 = "GULD";
var tierMinborked$6 = "BORK";
var tierMinbronze$6 = "BRON";
var tierMingold$6 = "GULD";
var tierMinpending$6 = "PEND";
var tierMinplatinum$6 = "PLAT";
var tierMinsilver$6 = "SILV";
var tierpending$6 = "VÄNTANDE";
var tierplatinum$6 = "PLATINA";
var tiersilver$6 = "SILVER";
var expandOnHoverOff$6 = "Av";
var submit$6 = "SKICKA";
var login$6 = "Logga in";
var loading$6 = "...";
var noReport$6 = "INGEN RAPPORT";
var disableSubmit$6 = "Inaktivera skicka";
var disableSubmitDesc$6 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$6 = "Enable Badge on Library";
var enableLibraryBadgeDesc$6 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$6 = "Aktivera märke på butikssidor";
var enableStoreBadgeDesc$6 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$6 = "Store Badge Position";
var storeBadgePositionDesc$6 = "Position the badge overlay on store pages";
var storePositionBottomCenter$6 = "Bottom Center";
var storePositionBottomLeft$6 = "Bottom Left";
var storePositionBottomRight$6 = "Bottom Right";
var storePositionTopMiddle$6 = "Top Right";
var helpButton$6 = "Instruktioner";
var helpTitle$6 = "ProtonDB Badges - Hjälp";
var helpToc$6 = "Gå till avsnitt";
var helpClose$6 = "Stäng";
var helpAboutTitle$6 = "Om detta plugin";
var helpAboutDesc$6 = "ProtonDB Badges visar ProtonDB-kompatibilitetsbetyg direkt på din Steam Deck. Se snabbt hur bra spel fungerar på Linux/Proton utan att lämna Steam-gränssnittet.";
var helpUsingTitle$6 = "Använda pluginet";
var helpBadgeTiers$6 = "Märkesnivåer:";
var helpTierPlatinum$6 = "Fungerar perfekt utan konfiguration";
var helpTierGold$6 = "Fungerar perfekt efter justeringar";
var helpTierSilver$6 = "Fungerar med mindre problem";
var helpTierBronze$6 = "Fungerar, men kraschar ofta eller har problem";
var helpTierBorked$6 = "Fungerar inte eller är ospelbart";
var helpTierPending$6 = "Har rapporter men inte ännu betygsatt";
var helpTierNoReport$6 = "Inga rapporter ännu - bli den första!";
var helpSettingsExplain$6 = "Inställningar förklarade:";
var helpSettingSize$6 = "Märkesstorlek";
var helpSettingSizeDesc$6 = "Normal (full storlek), Liten (kompakt) eller Minimalistisk (endast ikon)";
var helpSettingPosition$6 = "Märkesposition";
var helpSettingPositionDesc$6 = "Var märket visas på spelsidor";
var helpSettingSubmit$6 = "Inaktivera skicka";
var helpSettingSubmitDesc$6 = "Dölj knappen för att skicka rapporter till ProtonDB";
var helpProtonDBTitle$6 = "Lägga till Steam Deck på ProtonDB";
var helpProtonDBDesc$6 = "För att skicka rapporter från din Steam Deck måste du registrera den som en enhet på ProtonDB. Detta kräver skrivbordsläge.";
var helpProtonDBSteps$6 = "Steg för registrering:";
var helpStep1$6 = "Byt till skrivbordsläge (håll in strömknappen → Byt till skrivbord)";
var helpStep2$6 = "Öppna en webbläsare (Firefox eller Chrome)";
var helpStep3$6 = "Gå till protondb.com och logga in med ditt Steam-konto";
var helpStep4$6 = "Klicka på din profilikon uppe till höger";
var helpStep5$6 = "Gå till 'My Rigs' och klicka på 'Add a Rig'";
var helpStep6$6 = "Välj 'Steam Deck' som enhetstyp och spara";
var helpTip$6 = "Tips";
var helpTipContent$6 = "Efter att du registrerat din Steam Deck kan du skicka rapporter direkt från spelläget med Skicka-knappen på märkena.";
var helpSubmitTitle$6 = "Skicka spelrapporter";
var helpSubmitDesc$6 = "Hjälp gemenskapen genom att dela din spelupplevelse! Rapporter hjälper andra att veta vad de kan förvänta sig.";
var helpSubmitStep1$6 = "Spela ett spel i minst 15-30 minuter";
var helpSubmitStep2$6 = "Klicka på Skicka-knappen på ProtonDB-märket";
var helpSubmitStep3$6 = "Fyll i rapportformuläret på ProtonDBs webbplats";
var sv = {
	sectionLibrary: sectionLibrary$6,
	sectionStore: sectionStore$6,
	sectionLinks: sectionLinks$6,
	badgePosition: badgePosition$6,
	badgePositionDescription: badgePositionDescription$6,
	badgeSize: badgeSize$6,
	badgeSizeDescription: badgeSizeDescription$6,
	caching: caching$6,
	clearCache: clearCache$6,
	clearCacheLabel: clearCacheLabel$6,
	expandOnHover: expandOnHover$6,
	expandOnHoverDescription: expandOnHoverDescription$6,
	positionTopLeft: positionTopLeft$6,
	positionTopRight: positionTopRight$6,
	positionBottomLeft: positionBottomLeft$6,
	positionBottomMiddle: positionBottomMiddle$6,
	positionBottomRight: positionBottomRight$6,
	positionTopMiddle: positionTopMiddle$6,
	settings: settings$6,
	sizeMinimalist: sizeMinimalist$6,
	sizeRegular: sizeRegular$6,
	sizeSmall: sizeSmall$6,
	tierborked: tierborked$6,
	tierbronze: tierbronze$6,
	tiergold: tiergold$6,
	tierMinborked: tierMinborked$6,
	tierMinbronze: tierMinbronze$6,
	tierMingold: tierMingold$6,
	tierMinpending: tierMinpending$6,
	tierMinplatinum: tierMinplatinum$6,
	tierMinsilver: tierMinsilver$6,
	tierpending: tierpending$6,
	tierplatinum: tierplatinum$6,
	tiersilver: tiersilver$6,
	expandOnHoverOff: expandOnHoverOff$6,
	submit: submit$6,
	login: login$6,
	loading: loading$6,
	noReport: noReport$6,
	disableSubmit: disableSubmit$6,
	disableSubmitDesc: disableSubmitDesc$6,
	enableLibraryBadge: enableLibraryBadge$6,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$6,
	enableStoreBadge: enableStoreBadge$6,
	enableStoreBadgeDesc: enableStoreBadgeDesc$6,
	storeBadgePosition: storeBadgePosition$6,
	storeBadgePositionDesc: storeBadgePositionDesc$6,
	storePositionBottomCenter: storePositionBottomCenter$6,
	storePositionBottomLeft: storePositionBottomLeft$6,
	storePositionBottomRight: storePositionBottomRight$6,
	storePositionTopMiddle: storePositionTopMiddle$6,
	helpButton: helpButton$6,
	helpTitle: helpTitle$6,
	helpToc: helpToc$6,
	helpClose: helpClose$6,
	helpAboutTitle: helpAboutTitle$6,
	helpAboutDesc: helpAboutDesc$6,
	helpUsingTitle: helpUsingTitle$6,
	helpBadgeTiers: helpBadgeTiers$6,
	helpTierPlatinum: helpTierPlatinum$6,
	helpTierGold: helpTierGold$6,
	helpTierSilver: helpTierSilver$6,
	helpTierBronze: helpTierBronze$6,
	helpTierBorked: helpTierBorked$6,
	helpTierPending: helpTierPending$6,
	helpTierNoReport: helpTierNoReport$6,
	helpSettingsExplain: helpSettingsExplain$6,
	helpSettingSize: helpSettingSize$6,
	helpSettingSizeDesc: helpSettingSizeDesc$6,
	helpSettingPosition: helpSettingPosition$6,
	helpSettingPositionDesc: helpSettingPositionDesc$6,
	helpSettingSubmit: helpSettingSubmit$6,
	helpSettingSubmitDesc: helpSettingSubmitDesc$6,
	helpProtonDBTitle: helpProtonDBTitle$6,
	helpProtonDBDesc: helpProtonDBDesc$6,
	helpProtonDBSteps: helpProtonDBSteps$6,
	helpStep1: helpStep1$6,
	helpStep2: helpStep2$6,
	helpStep3: helpStep3$6,
	helpStep4: helpStep4$6,
	helpStep5: helpStep5$6,
	helpStep6: helpStep6$6,
	helpTip: helpTip$6,
	helpTipContent: helpTipContent$6,
	helpSubmitTitle: helpSubmitTitle$6,
	helpSubmitDesc: helpSubmitDesc$6,
	helpSubmitStep1: helpSubmitStep1$6,
	helpSubmitStep2: helpSubmitStep2$6,
	helpSubmitStep3: helpSubmitStep3$6
};

var sectionLibrary$5 = "Library";
var sectionStore$5 = "Store";
var sectionLinks$5 = "Links";
var badgePosition$5 = "ตําแหน่งตรารับรอง";
var badgePositionDescription$5 = "ตำแหน่งของตรารับรองในหน้าเกมส์ส่วนบน";
var badgeSize$5 = "ขนาดตรารับรอง";
var badgeSizeDescription$5 = "เลือกขนาดตรารับรอง";
var caching$5 = "แคช";
var clearCache$5 = "ลบ ProtonDB แคช";
var clearCacheLabel$5 = "ลบแคชเพื่อบังคับให้รีเฟรชตรารับรองทั้งหมดใหม่";
var expandOnHover$5 = "ขยายเครื่องหมายเมื่อเลือก";
var expandOnHoverDescription$5 = "เฉพาะแบบย่อ แสดงตรารับรองเมื่อโฟกัส";
var positionTopLeft$5 = "ด้านบนซ้าย";
var positionTopRight$5 = "ด้านบนขวา";
var positionBottomLeft$5 = "Bottom Left";
var positionBottomMiddle$5 = "Bottom Middle";
var positionBottomRight$5 = "Bottom Right";
var positionTopMiddle$5 = "ด้านบนกลาง";
var settings$5 = "การตั้งค่า";
var sizeMinimalist$5 = "แบบย่อ";
var sizeRegular$5 = "ปกติ";
var sizeSmall$5 = "เล็ก";
var tierborked$5 = "ขัดข้อง";
var tierbronze$5 = "บรอนซ์";
var tiergold$5 = "ทอง";
var tierMinborked$5 = "ขัดข้อง";
var tierMinbronze$5 = "บรอนซ์";
var tierMingold$5 = "ทองคำ";
var tierMinpending$5 = "รอ";
var tierMinplatinum$5 = "แพลต";
var tierMinsilver$5 = "เงิน";
var tierpending$5 = "รอตรวจสอบ";
var tierplatinum$5 = "แพลตตินั่ม";
var tiersilver$5 = "เงิน";
var expandOnHoverOff$5 = "ปิด";
var submit$5 = "ส่ง";
var login$5 = "เข้าสู่ระบบ";
var loading$5 = "...";
var noReport$5 = "ไม่มีรายงาน";
var disableSubmit$5 = "ปิดใช้งานการส่ง";
var disableSubmitDesc$5 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$5 = "Enable Badge on Library";
var enableLibraryBadgeDesc$5 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$5 = "เปิดใช้งานตรารับรองในหน้าร้านค้า";
var enableStoreBadgeDesc$5 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$5 = "Store Badge Position";
var storeBadgePositionDesc$5 = "Position the badge overlay on store pages";
var storePositionBottomCenter$5 = "Bottom Center";
var storePositionBottomLeft$5 = "Bottom Left";
var storePositionBottomRight$5 = "Bottom Right";
var storePositionTopMiddle$5 = "Top Right";
var helpButton$5 = "คำแนะนำ";
var helpTitle$5 = "ProtonDB Badges - ความช่วยเหลือ";
var helpToc$5 = "ข้ามไปยังส่วน";
var helpClose$5 = "ปิด";
var helpAboutTitle$5 = "เกี่ยวกับปลั๊กอินนี้";
var helpAboutDesc$5 = "ProtonDB Badges แสดงเรตติ้งความเข้ากันได้ของ ProtonDB โดยตรงบน Steam Deck ของคุณ ดูได้ทันทีว่าเกมทำงานบน Linux/Proton ได้ดีเพียงใดโดยไม่ต้องออกจากอินเทอร์เฟซ Steam";
var helpUsingTitle$5 = "การใช้งานปลั๊กอิน";
var helpBadgeTiers$5 = "ระดับตรารับรอง:";
var helpTierPlatinum$5 = "ทำงานได้สมบูรณ์โดยไม่ต้องตั้งค่า";
var helpTierGold$5 = "ทำงานได้สมบูรณ์หลังการปรับแต่ง";
var helpTierSilver$5 = "ทำงานได้โดยมีปัญหาเล็กน้อย";
var helpTierBronze$5 = "ทำงานได้ แต่มักจะค้างหรือมีปัญหา";
var helpTierBorked$5 = "ไม่ทำงานหรือเล่นไม่ได้";
var helpTierPending$5 = "มีรายงานแต่ยังไม่ได้รับการจัดอันดับ";
var helpTierNoReport$5 = "ยังไม่มีรายงาน - เป็นคนแรก!";
var helpSettingsExplain$5 = "คำอธิบายการตั้งค่า:";
var helpSettingSize$5 = "ขนาดตรารับรอง";
var helpSettingSizeDesc$5 = "ปกติ (ขนาดเต็ม), เล็ก (กะทัดรัด) หรือ มินิมอล (ไอคอนเท่านั้น)";
var helpSettingPosition$5 = "ตำแหน่งตรารับรอง";
var helpSettingPositionDesc$5 = "ตำแหน่งที่ตรารับรองปรากฏบนหน้าเกม";
var helpSettingSubmit$5 = "ปิดใช้งานการส่ง";
var helpSettingSubmitDesc$5 = "ซ่อนปุ่มสำหรับส่งรายงานไปยัง ProtonDB";
var helpProtonDBTitle$5 = "เพิ่ม Steam Deck ไปยัง ProtonDB";
var helpProtonDBDesc$5 = "ในการส่งรายงานจาก Steam Deck คุณต้องลงทะเบียนเป็นอุปกรณ์บน ProtonDB ซึ่งต้องใช้โหมดเดสก์ท็อป";
var helpProtonDBSteps$5 = "ขั้นตอนการลงทะเบียน:";
var helpStep1$5 = "เปลี่ยนเป็นโหมดเดสก์ท็อป (กดปุ่มเปิดปิดค้างไว้ → เปลี่ยนเป็นเดสก์ท็อป)";
var helpStep2$5 = "เปิดเว็บเบราว์เซอร์ (Firefox หรือ Chrome)";
var helpStep3$5 = "ไปที่ protondb.com และเข้าสู่ระบบด้วยบัญชี Steam ของคุณ";
var helpStep4$5 = "คลิกที่ไอคอนโปรไฟล์ของคุณที่มุมขวาบน";
var helpStep5$5 = "ไปที่ 'My Rigs' และคลิก 'Add a Rig'";
var helpStep6$5 = "เลือก 'Steam Deck' เป็นประเภทอุปกรณ์และบันทึก";
var helpTip$5 = "เคล็ดลับ";
var helpTipContent$5 = "หลังจากลงทะเบียน Steam Deck แล้ว คุณสามารถส่งรายงานได้โดยตรงจากโหมดเกมโดยใช้ปุ่มส่งบนตรารับรอง";
var helpSubmitTitle$5 = "การส่งรายงานเกม";
var helpSubmitDesc$5 = "ช่วยเหลือชุมชนโดยการแบ่งปันประสบการณ์การเล่นเกมของคุณ! รายงานช่วยให้คนอื่นรู้ว่าจะเจออะไร";
var helpSubmitStep1$5 = "เล่นเกมอย่างน้อย 15-30 นาที";
var helpSubmitStep2$5 = "คลิกปุ่มส่งบนตรารับรอง ProtonDB";
var helpSubmitStep3$5 = "กรอกแบบฟอร์มรายงานบนเว็บไซต์ ProtonDB";
var th = {
	sectionLibrary: sectionLibrary$5,
	sectionStore: sectionStore$5,
	sectionLinks: sectionLinks$5,
	badgePosition: badgePosition$5,
	badgePositionDescription: badgePositionDescription$5,
	badgeSize: badgeSize$5,
	badgeSizeDescription: badgeSizeDescription$5,
	caching: caching$5,
	clearCache: clearCache$5,
	clearCacheLabel: clearCacheLabel$5,
	expandOnHover: expandOnHover$5,
	expandOnHoverDescription: expandOnHoverDescription$5,
	positionTopLeft: positionTopLeft$5,
	positionTopRight: positionTopRight$5,
	positionBottomLeft: positionBottomLeft$5,
	positionBottomMiddle: positionBottomMiddle$5,
	positionBottomRight: positionBottomRight$5,
	positionTopMiddle: positionTopMiddle$5,
	settings: settings$5,
	sizeMinimalist: sizeMinimalist$5,
	sizeRegular: sizeRegular$5,
	sizeSmall: sizeSmall$5,
	tierborked: tierborked$5,
	tierbronze: tierbronze$5,
	tiergold: tiergold$5,
	tierMinborked: tierMinborked$5,
	tierMinbronze: tierMinbronze$5,
	tierMingold: tierMingold$5,
	tierMinpending: tierMinpending$5,
	tierMinplatinum: tierMinplatinum$5,
	tierMinsilver: tierMinsilver$5,
	tierpending: tierpending$5,
	tierplatinum: tierplatinum$5,
	tiersilver: tiersilver$5,
	expandOnHoverOff: expandOnHoverOff$5,
	submit: submit$5,
	login: login$5,
	loading: loading$5,
	noReport: noReport$5,
	disableSubmit: disableSubmit$5,
	disableSubmitDesc: disableSubmitDesc$5,
	enableLibraryBadge: enableLibraryBadge$5,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$5,
	enableStoreBadge: enableStoreBadge$5,
	enableStoreBadgeDesc: enableStoreBadgeDesc$5,
	storeBadgePosition: storeBadgePosition$5,
	storeBadgePositionDesc: storeBadgePositionDesc$5,
	storePositionBottomCenter: storePositionBottomCenter$5,
	storePositionBottomLeft: storePositionBottomLeft$5,
	storePositionBottomRight: storePositionBottomRight$5,
	storePositionTopMiddle: storePositionTopMiddle$5,
	helpButton: helpButton$5,
	helpTitle: helpTitle$5,
	helpToc: helpToc$5,
	helpClose: helpClose$5,
	helpAboutTitle: helpAboutTitle$5,
	helpAboutDesc: helpAboutDesc$5,
	helpUsingTitle: helpUsingTitle$5,
	helpBadgeTiers: helpBadgeTiers$5,
	helpTierPlatinum: helpTierPlatinum$5,
	helpTierGold: helpTierGold$5,
	helpTierSilver: helpTierSilver$5,
	helpTierBronze: helpTierBronze$5,
	helpTierBorked: helpTierBorked$5,
	helpTierPending: helpTierPending$5,
	helpTierNoReport: helpTierNoReport$5,
	helpSettingsExplain: helpSettingsExplain$5,
	helpSettingSize: helpSettingSize$5,
	helpSettingSizeDesc: helpSettingSizeDesc$5,
	helpSettingPosition: helpSettingPosition$5,
	helpSettingPositionDesc: helpSettingPositionDesc$5,
	helpSettingSubmit: helpSettingSubmit$5,
	helpSettingSubmitDesc: helpSettingSubmitDesc$5,
	helpProtonDBTitle: helpProtonDBTitle$5,
	helpProtonDBDesc: helpProtonDBDesc$5,
	helpProtonDBSteps: helpProtonDBSteps$5,
	helpStep1: helpStep1$5,
	helpStep2: helpStep2$5,
	helpStep3: helpStep3$5,
	helpStep4: helpStep4$5,
	helpStep5: helpStep5$5,
	helpStep6: helpStep6$5,
	helpTip: helpTip$5,
	helpTipContent: helpTipContent$5,
	helpSubmitTitle: helpSubmitTitle$5,
	helpSubmitDesc: helpSubmitDesc$5,
	helpSubmitStep1: helpSubmitStep1$5,
	helpSubmitStep2: helpSubmitStep2$5,
	helpSubmitStep3: helpSubmitStep3$5
};

var sectionLibrary$4 = "Library";
var sectionStore$4 = "Store";
var sectionLinks$4 = "Links";
var badgePosition$4 = "Rozet Konumu";
var badgePositionDescription$4 = "Rozeti oyun sayfası başlığına konumlandırın";
var badgeSize$4 = "Rozet Boyutu";
var badgeSizeDescription$4 = "Rozet için farklı bir boyut seçin";
var caching$4 = "Önbellekleme";
var clearCache$4 = "ProtonDB Önbelleğini Temizle";
var clearCacheLabel$4 = "Tüm ProtonDB rozetlerini zorla yenilemek için önbelleği temizleyin";
var expandOnHover$4 = "Üzerine gelindiğinde etiketi genişlet";
var expandOnHoverDescription$4 = "Yalnızca minimalist. Odaklandığında rozet metnini göster";
var positionTopLeft$4 = "Sol Üst";
var positionTopRight$4 = "Sağ Üst";
var positionBottomLeft$4 = "Bottom Left";
var positionBottomMiddle$4 = "Bottom Middle";
var positionBottomRight$4 = "Bottom Right";
var positionTopMiddle$4 = "Üst Orta";
var settings$4 = "Ayarlar";
var sizeMinimalist$4 = "Minimalist";
var sizeRegular$4 = "Normal";
var sizeSmall$4 = "Küçük";
var tierborked$4 = "BOZUK";
var tierbronze$4 = "BRONZ";
var tiergold$4 = "ALTIN";
var tierMinborked$4 = "BORK";
var tierMinbronze$4 = "BRON";
var tierMingold$4 = "GOLD";
var tierMinpending$4 = "PEND";
var tierMinplatinum$4 = "PLAT";
var tierMinsilver$4 = "SILV";
var tierpending$4 = "BEKLİYOR";
var tierplatinum$4 = "PLATİN";
var tiersilver$4 = "GÜMÜŞ";
var expandOnHoverOff$4 = "Kapalı";
var submit$4 = "GÖNDER";
var login$4 = "Giriş yap";
var loading$4 = "...";
var noReport$4 = "RAPOR YOK";
var disableSubmit$4 = "Göndermeyi devre dışı bırak";
var disableSubmitDesc$4 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$4 = "Enable Badge on Library";
var enableLibraryBadgeDesc$4 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$4 = "Mağaza sayfalarında rozeti etkinleştir";
var enableStoreBadgeDesc$4 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$4 = "Store Badge Position";
var storeBadgePositionDesc$4 = "Position the badge overlay on store pages";
var storePositionBottomCenter$4 = "Bottom Center";
var storePositionBottomLeft$4 = "Bottom Left";
var storePositionBottomRight$4 = "Bottom Right";
var storePositionTopMiddle$4 = "Top Right";
var helpButton$4 = "Talimatlar";
var helpTitle$4 = "ProtonDB Badges - Yardım";
var helpToc$4 = "Bölüme git";
var helpClose$4 = "Kapat";
var helpAboutTitle$4 = "Bu eklenti hakkında";
var helpAboutDesc$4 = "ProtonDB Badges, ProtonDB uyumluluk derecelendirmelerini doğrudan Steam Deck'inizde görüntüler. Steam arayüzünden ayrılmadan oyunların Linux/Proton'da ne kadar iyi çalıştığını bir bakışta görün.";
var helpUsingTitle$4 = "Eklentiyi kullanma";
var helpBadgeTiers$4 = "Rozet seviyeleri:";
var helpTierPlatinum$4 = "Ayar yapmadan mükemmel çalışır";
var helpTierGold$4 = "Ayarlardan sonra mükemmel çalışır";
var helpTierSilver$4 = "Küçük sorunlarla çalışır";
var helpTierBronze$4 = "Çalışır, ancak sık sık çöker veya sorunları var";
var helpTierBorked$4 = "Çalışmıyor veya oynanamaz";
var helpTierPending$4 = "Raporları var ancak henüz derecelendirilmemiş";
var helpTierNoReport$4 = "Henüz rapor yok - ilk siz olun!";
var helpSettingsExplain$4 = "Ayarlar açıklaması:";
var helpSettingSize$4 = "Rozet boyutu";
var helpSettingSizeDesc$4 = "Normal (tam boyut), Küçük (kompakt) veya Minimalist (sadece simge)";
var helpSettingPosition$4 = "Rozet konumu";
var helpSettingPositionDesc$4 = "Rozetin oyun sayfalarında nerede görüneceği";
var helpSettingSubmit$4 = "Göndermeyi devre dışı bırak";
var helpSettingSubmitDesc$4 = "ProtonDB'ye rapor gönderme düğmesini gizle";
var helpProtonDBTitle$4 = "Steam Deck'i ProtonDB'ye ekleme";
var helpProtonDBDesc$4 = "Steam Deck'inizden rapor göndermek için, onu ProtonDB'de bir cihaz olarak kaydetmeniz gerekir. Bu, Masaüstü Modu gerektirir.";
var helpProtonDBSteps$4 = "Kayıt adımları:";
var helpStep1$4 = "Masaüstü Moduna geçin (Güç düğmesini basılı tutun → Masaüstüne Geç)";
var helpStep2$4 = "Bir web tarayıcısı açın (Firefox veya Chrome)";
var helpStep3$4 = "protondb.com'a gidin ve Steam hesabınızla giriş yapın";
var helpStep4$4 = "Sağ üstteki profil simgenize tıklayın";
var helpStep5$4 = "'My Rigs'e gidin ve 'Add a Rig'e tıklayın";
var helpStep6$4 = "Cihaz türü olarak 'Steam Deck' seçin ve kaydedin";
var helpTip$4 = "İpucu";
var helpTipContent$4 = "Steam Deck'inizi kaydettikten sonra, rozetlerdeki Gönder düğmesini kullanarak doğrudan Oyun Modundan rapor gönderebilirsiniz.";
var helpSubmitTitle$4 = "Oyun raporları gönderme";
var helpSubmitDesc$4 = "Oyun deneyiminizi paylaşarak topluluğa yardım edin! Raporlar başkalarının ne bekleyeceğini bilmesine yardımcı olur.";
var helpSubmitStep1$4 = "Bir oyunu en az 15-30 dakika oynayın";
var helpSubmitStep2$4 = "ProtonDB rozetindeki Gönder düğmesine tıklayın";
var helpSubmitStep3$4 = "ProtonDB web sitesindeki rapor formunu doldurun";
var tr = {
	sectionLibrary: sectionLibrary$4,
	sectionStore: sectionStore$4,
	sectionLinks: sectionLinks$4,
	badgePosition: badgePosition$4,
	badgePositionDescription: badgePositionDescription$4,
	badgeSize: badgeSize$4,
	badgeSizeDescription: badgeSizeDescription$4,
	caching: caching$4,
	clearCache: clearCache$4,
	clearCacheLabel: clearCacheLabel$4,
	expandOnHover: expandOnHover$4,
	expandOnHoverDescription: expandOnHoverDescription$4,
	positionTopLeft: positionTopLeft$4,
	positionTopRight: positionTopRight$4,
	positionBottomLeft: positionBottomLeft$4,
	positionBottomMiddle: positionBottomMiddle$4,
	positionBottomRight: positionBottomRight$4,
	positionTopMiddle: positionTopMiddle$4,
	settings: settings$4,
	sizeMinimalist: sizeMinimalist$4,
	sizeRegular: sizeRegular$4,
	sizeSmall: sizeSmall$4,
	tierborked: tierborked$4,
	tierbronze: tierbronze$4,
	tiergold: tiergold$4,
	tierMinborked: tierMinborked$4,
	tierMinbronze: tierMinbronze$4,
	tierMingold: tierMingold$4,
	tierMinpending: tierMinpending$4,
	tierMinplatinum: tierMinplatinum$4,
	tierMinsilver: tierMinsilver$4,
	tierpending: tierpending$4,
	tierplatinum: tierplatinum$4,
	tiersilver: tiersilver$4,
	expandOnHoverOff: expandOnHoverOff$4,
	submit: submit$4,
	login: login$4,
	loading: loading$4,
	noReport: noReport$4,
	disableSubmit: disableSubmit$4,
	disableSubmitDesc: disableSubmitDesc$4,
	enableLibraryBadge: enableLibraryBadge$4,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$4,
	enableStoreBadge: enableStoreBadge$4,
	enableStoreBadgeDesc: enableStoreBadgeDesc$4,
	storeBadgePosition: storeBadgePosition$4,
	storeBadgePositionDesc: storeBadgePositionDesc$4,
	storePositionBottomCenter: storePositionBottomCenter$4,
	storePositionBottomLeft: storePositionBottomLeft$4,
	storePositionBottomRight: storePositionBottomRight$4,
	storePositionTopMiddle: storePositionTopMiddle$4,
	helpButton: helpButton$4,
	helpTitle: helpTitle$4,
	helpToc: helpToc$4,
	helpClose: helpClose$4,
	helpAboutTitle: helpAboutTitle$4,
	helpAboutDesc: helpAboutDesc$4,
	helpUsingTitle: helpUsingTitle$4,
	helpBadgeTiers: helpBadgeTiers$4,
	helpTierPlatinum: helpTierPlatinum$4,
	helpTierGold: helpTierGold$4,
	helpTierSilver: helpTierSilver$4,
	helpTierBronze: helpTierBronze$4,
	helpTierBorked: helpTierBorked$4,
	helpTierPending: helpTierPending$4,
	helpTierNoReport: helpTierNoReport$4,
	helpSettingsExplain: helpSettingsExplain$4,
	helpSettingSize: helpSettingSize$4,
	helpSettingSizeDesc: helpSettingSizeDesc$4,
	helpSettingPosition: helpSettingPosition$4,
	helpSettingPositionDesc: helpSettingPositionDesc$4,
	helpSettingSubmit: helpSettingSubmit$4,
	helpSettingSubmitDesc: helpSettingSubmitDesc$4,
	helpProtonDBTitle: helpProtonDBTitle$4,
	helpProtonDBDesc: helpProtonDBDesc$4,
	helpProtonDBSteps: helpProtonDBSteps$4,
	helpStep1: helpStep1$4,
	helpStep2: helpStep2$4,
	helpStep3: helpStep3$4,
	helpStep4: helpStep4$4,
	helpStep5: helpStep5$4,
	helpStep6: helpStep6$4,
	helpTip: helpTip$4,
	helpTipContent: helpTipContent$4,
	helpSubmitTitle: helpSubmitTitle$4,
	helpSubmitDesc: helpSubmitDesc$4,
	helpSubmitStep1: helpSubmitStep1$4,
	helpSubmitStep2: helpSubmitStep2$4,
	helpSubmitStep3: helpSubmitStep3$4
};

var sectionLibrary$3 = "Library";
var sectionStore$3 = "Store";
var sectionLinks$3 = "Links";
var badgePosition$3 = "Розташування значка";
var badgePositionDescription$3 = "Розташуйте значок в заголовку гри";
var badgeSize$3 = "Розмір значка";
var badgeSizeDescription$3 = "Оберіть інший розмір для значка";
var caching$3 = "Кешування";
var clearCache$3 = "Очистити кеш ProtonDB";
var clearCacheLabel$3 = "Очистити кеш, щоб примусово оновити всі значки ProtonDB";
var expandOnHover$3 = "Розгорнути мітку на наведенні";
var expandOnHoverDescription$3 = "Тільки мінімалістичний. Показувати текст значка при наведенні";
var positionTopLeft$3 = "Зверху зліва";
var positionTopRight$3 = "Зверху справа";
var positionBottomLeft$3 = "Bottom Left";
var positionBottomMiddle$3 = "Bottom Middle";
var positionBottomRight$3 = "Bottom Right";
var positionTopMiddle$3 = "Зверху по центру";
var settings$3 = "Налаштування";
var sizeMinimalist$3 = "Мінімалістичний";
var sizeRegular$3 = "Звичайний";
var sizeSmall$3 = "Маленький";
var tierborked$3 = "ЗЛАМАНО";
var tierbronze$3 = "БРОНЗА";
var tiergold$3 = "ЗОЛОТО";
var tierMinborked$3 = "ЗЛАМ";
var tierMinbronze$3 = "БРОН";
var tierMingold$3 = "ЗОЛ";
var tierMinpending$3 = "ОЧІК";
var tierMinplatinum$3 = "ПЛАТ";
var tierMinsilver$3 = "СРІБ";
var tierpending$3 = "В ОЧІКУВАННІ";
var tierplatinum$3 = "ПЛАТИНУМ";
var tiersilver$3 = "СРІБЛО";
var expandOnHoverOff$3 = "Вимк";
var submit$3 = "НАДІСЛАТИ";
var login$3 = "Увійти";
var loading$3 = "...";
var noReport$3 = "НЕМАЄ ЗВІТУ";
var disableSubmit$3 = "Вимкнути надсилання";
var disableSubmitDesc$3 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$3 = "Enable Badge on Library";
var enableLibraryBadgeDesc$3 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$3 = "Увімкнути значок на сторінках магазину";
var enableStoreBadgeDesc$3 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$3 = "Store Badge Position";
var storeBadgePositionDesc$3 = "Position the badge overlay on store pages";
var storePositionBottomCenter$3 = "Bottom Center";
var storePositionBottomLeft$3 = "Bottom Left";
var storePositionBottomRight$3 = "Bottom Right";
var storePositionTopMiddle$3 = "Top Right";
var helpButton$3 = "Інструкції";
var helpTitle$3 = "ProtonDB Badges - Довідка";
var helpToc$3 = "Перейти до розділу";
var helpClose$3 = "Закрити";
var helpAboutTitle$3 = "Про цей плагін";
var helpAboutDesc$3 = "ProtonDB Badges відображає рейтинги сумісності ProtonDB безпосередньо на вашому Steam Deck. Дізнайтеся з першого погляду, наскільки добре ігри працюють на Linux/Proton, не залишаючи інтерфейс Steam.";
var helpUsingTitle$3 = "Використання плагіна";
var helpBadgeTiers$3 = "Рівні значків:";
var helpTierPlatinum$3 = "Працює ідеально без налаштування";
var helpTierGold$3 = "Працює ідеально після налаштувань";
var helpTierSilver$3 = "Працює з незначними проблемами";
var helpTierBronze$3 = "Працює, але часто вилітає або має проблеми";
var helpTierBorked$3 = "Не працює або неграбельна";
var helpTierPending$3 = "Є звіти, але ще не оцінено";
var helpTierNoReport$3 = "Ще немає звітів - будьте першим!";
var helpSettingsExplain$3 = "Пояснення налаштувань:";
var helpSettingSize$3 = "Розмір значка";
var helpSettingSizeDesc$3 = "Звичайний (повний розмір), Маленький (компактний) або Мінімалістичний (лише іконка)";
var helpSettingPosition$3 = "Позиція значка";
var helpSettingPositionDesc$3 = "Де значок з'являється на сторінках ігор";
var helpSettingSubmit$3 = "Вимкнути надсилання";
var helpSettingSubmitDesc$3 = "Приховати кнопку для надсилання звітів на ProtonDB";
var helpProtonDBTitle$3 = "Додавання Steam Deck до ProtonDB";
var helpProtonDBDesc$3 = "Щоб надсилати звіти з вашого Steam Deck, потрібно зареєструвати його як пристрій на ProtonDB. Для цього потрібен режим робочого столу.";
var helpProtonDBSteps$3 = "Кроки для реєстрації:";
var helpStep1$3 = "Перейдіть у режим робочого столу (утримуйте кнопку живлення → Перейти на робочий стіл)";
var helpStep2$3 = "Відкрийте веб-браузер (Firefox або Chrome)";
var helpStep3$3 = "Перейдіть на protondb.com і увійдіть за допомогою свого Steam акаунту";
var helpStep4$3 = "Натисніть на іконку профілю у верхньому правому куті";
var helpStep5$3 = "Перейдіть до 'My Rigs' і натисніть 'Add a Rig'";
var helpStep6$3 = "Виберіть 'Steam Deck' як тип пристрою та збережіть";
var helpTip$3 = "Порада";
var helpTipContent$3 = "Після реєстрації Steam Deck ви можете надсилати звіти безпосередньо з ігрового режиму за допомогою кнопки Надіслати на значках.";
var helpSubmitTitle$3 = "Надсилання звітів про ігри";
var helpSubmitDesc$3 = "Допоможіть спільноті, поділившись своїм ігровим досвідом! Звіти допомагають іншим знати, чого очікувати.";
var helpSubmitStep1$3 = "Грайте в гру принаймні 15-30 хвилин";
var helpSubmitStep2$3 = "Натисніть кнопку Надіслати на значку ProtonDB";
var helpSubmitStep3$3 = "Заповніть форму звіту на веб-сайті ProtonDB";
var uk = {
	sectionLibrary: sectionLibrary$3,
	sectionStore: sectionStore$3,
	sectionLinks: sectionLinks$3,
	badgePosition: badgePosition$3,
	badgePositionDescription: badgePositionDescription$3,
	badgeSize: badgeSize$3,
	badgeSizeDescription: badgeSizeDescription$3,
	caching: caching$3,
	clearCache: clearCache$3,
	clearCacheLabel: clearCacheLabel$3,
	expandOnHover: expandOnHover$3,
	expandOnHoverDescription: expandOnHoverDescription$3,
	positionTopLeft: positionTopLeft$3,
	positionTopRight: positionTopRight$3,
	positionBottomLeft: positionBottomLeft$3,
	positionBottomMiddle: positionBottomMiddle$3,
	positionBottomRight: positionBottomRight$3,
	positionTopMiddle: positionTopMiddle$3,
	settings: settings$3,
	sizeMinimalist: sizeMinimalist$3,
	sizeRegular: sizeRegular$3,
	sizeSmall: sizeSmall$3,
	tierborked: tierborked$3,
	tierbronze: tierbronze$3,
	tiergold: tiergold$3,
	tierMinborked: tierMinborked$3,
	tierMinbronze: tierMinbronze$3,
	tierMingold: tierMingold$3,
	tierMinpending: tierMinpending$3,
	tierMinplatinum: tierMinplatinum$3,
	tierMinsilver: tierMinsilver$3,
	tierpending: tierpending$3,
	tierplatinum: tierplatinum$3,
	tiersilver: tiersilver$3,
	expandOnHoverOff: expandOnHoverOff$3,
	submit: submit$3,
	login: login$3,
	loading: loading$3,
	noReport: noReport$3,
	disableSubmit: disableSubmit$3,
	disableSubmitDesc: disableSubmitDesc$3,
	enableLibraryBadge: enableLibraryBadge$3,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$3,
	enableStoreBadge: enableStoreBadge$3,
	enableStoreBadgeDesc: enableStoreBadgeDesc$3,
	storeBadgePosition: storeBadgePosition$3,
	storeBadgePositionDesc: storeBadgePositionDesc$3,
	storePositionBottomCenter: storePositionBottomCenter$3,
	storePositionBottomLeft: storePositionBottomLeft$3,
	storePositionBottomRight: storePositionBottomRight$3,
	storePositionTopMiddle: storePositionTopMiddle$3,
	helpButton: helpButton$3,
	helpTitle: helpTitle$3,
	helpToc: helpToc$3,
	helpClose: helpClose$3,
	helpAboutTitle: helpAboutTitle$3,
	helpAboutDesc: helpAboutDesc$3,
	helpUsingTitle: helpUsingTitle$3,
	helpBadgeTiers: helpBadgeTiers$3,
	helpTierPlatinum: helpTierPlatinum$3,
	helpTierGold: helpTierGold$3,
	helpTierSilver: helpTierSilver$3,
	helpTierBronze: helpTierBronze$3,
	helpTierBorked: helpTierBorked$3,
	helpTierPending: helpTierPending$3,
	helpTierNoReport: helpTierNoReport$3,
	helpSettingsExplain: helpSettingsExplain$3,
	helpSettingSize: helpSettingSize$3,
	helpSettingSizeDesc: helpSettingSizeDesc$3,
	helpSettingPosition: helpSettingPosition$3,
	helpSettingPositionDesc: helpSettingPositionDesc$3,
	helpSettingSubmit: helpSettingSubmit$3,
	helpSettingSubmitDesc: helpSettingSubmitDesc$3,
	helpProtonDBTitle: helpProtonDBTitle$3,
	helpProtonDBDesc: helpProtonDBDesc$3,
	helpProtonDBSteps: helpProtonDBSteps$3,
	helpStep1: helpStep1$3,
	helpStep2: helpStep2$3,
	helpStep3: helpStep3$3,
	helpStep4: helpStep4$3,
	helpStep5: helpStep5$3,
	helpStep6: helpStep6$3,
	helpTip: helpTip$3,
	helpTipContent: helpTipContent$3,
	helpSubmitTitle: helpSubmitTitle$3,
	helpSubmitDesc: helpSubmitDesc$3,
	helpSubmitStep1: helpSubmitStep1$3,
	helpSubmitStep2: helpSubmitStep2$3,
	helpSubmitStep3: helpSubmitStep3$3
};

var sectionLibrary$2 = "Library";
var sectionStore$2 = "Store";
var sectionLinks$2 = "Links";
var badgePosition$2 = "Vị trí huy hiệu";
var badgePositionDescription$2 = "Đặt vị trí huy hiệu trong tiêu đề trang trò chơi";
var badgeSize$2 = "Kích thước huy hiệu";
var badgeSizeDescription$2 = "Chọn kích thước khác cho huy hiệu";
var caching$2 = "Bộ nhớ đệm";
var clearCache$2 = "Xóa bộ nhớ đệm ProtonDB";
var clearCacheLabel$2 = "Xóa bộ nhớ đệm để buộc làm mới tất cả huy hiệu ProtonDB";
var expandOnHover$2 = "Mở rộng nhãn khi di chuột";
var expandOnHoverDescription$2 = "Chỉ tối giản. Hiển thị văn bản huy hiệu khi được chọn";
var positionTopLeft$2 = "Trên cùng bên trái";
var positionTopRight$2 = "Trên cùng bên phải";
var positionBottomLeft$2 = "Bottom Left";
var positionBottomMiddle$2 = "Bottom Middle";
var positionBottomRight$2 = "Bottom Right";
var positionTopMiddle$2 = "Trên cùng giữa";
var settings$2 = "Cài đặt";
var sizeMinimalist$2 = "Tối giản";
var sizeRegular$2 = "Thông thường";
var sizeSmall$2 = "Nhỏ";
var tierborked$2 = "HỎNG";
var tierbronze$2 = "ĐỒNG";
var tiergold$2 = "VÀNG";
var tierMinborked$2 = "BORK";
var tierMinbronze$2 = "BRON";
var tierMingold$2 = "GOLD";
var tierMinpending$2 = "PEND";
var tierMinplatinum$2 = "PLAT";
var tierMinsilver$2 = "SILV";
var tierpending$2 = "CHỜ XỬ LÝ";
var tierplatinum$2 = "BẠCH KIM";
var tiersilver$2 = "BẠC";
var expandOnHoverOff$2 = "Tắt";
var submit$2 = "GỬI";
var login$2 = "Đăng nhập";
var loading$2 = "...";
var noReport$2 = "KHÔNG CÓ BÁO CÁO";
var disableSubmit$2 = "Vô hiệu hóa gửi";
var disableSubmitDesc$2 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$2 = "Enable Badge on Library";
var enableLibraryBadgeDesc$2 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$2 = "Bật huy hiệu trên trang cửa hàng";
var enableStoreBadgeDesc$2 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$2 = "Store Badge Position";
var storeBadgePositionDesc$2 = "Position the badge overlay on store pages";
var storePositionBottomCenter$2 = "Bottom Center";
var storePositionBottomLeft$2 = "Bottom Left";
var storePositionBottomRight$2 = "Bottom Right";
var storePositionTopMiddle$2 = "Top Right";
var helpButton$2 = "Hướng dẫn";
var helpTitle$2 = "ProtonDB Badges - Trợ giúp";
var helpToc$2 = "Chuyển đến phần";
var helpClose$2 = "Đóng";
var helpAboutTitle$2 = "Về plugin này";
var helpAboutDesc$2 = "ProtonDB Badges hiển thị xếp hạng tương thích ProtonDB trực tiếp trên Steam Deck của bạn. Xem ngay cách các trò chơi chạy trên Linux/Proton mà không cần rời khỏi giao diện Steam.";
var helpUsingTitle$2 = "Sử dụng plugin";
var helpBadgeTiers$2 = "Cấp độ huy hiệu:";
var helpTierPlatinum$2 = "Chạy hoàn hảo không cần cấu hình";
var helpTierGold$2 = "Chạy hoàn hảo sau khi tinh chỉnh";
var helpTierSilver$2 = "Chạy với các vấn đề nhỏ";
var helpTierBronze$2 = "Chạy được nhưng thường bị crash hoặc có vấn đề";
var helpTierBorked$2 = "Không chạy được hoặc không thể chơi";
var helpTierPending$2 = "Có báo cáo nhưng chưa được đánh giá";
var helpTierNoReport$2 = "Chưa có báo cáo - hãy là người đầu tiên!";
var helpSettingsExplain$2 = "Giải thích cài đặt:";
var helpSettingSize$2 = "Kích thước huy hiệu";
var helpSettingSizeDesc$2 = "Thông thường (kích thước đầy đủ), Nhỏ (nhỏ gọn) hoặc Tối giản (chỉ biểu tượng)";
var helpSettingPosition$2 = "Vị trí huy hiệu";
var helpSettingPositionDesc$2 = "Vị trí huy hiệu xuất hiện trên trang trò chơi";
var helpSettingSubmit$2 = "Vô hiệu hóa gửi";
var helpSettingSubmitDesc$2 = "Ẩn nút gửi báo cáo đến ProtonDB";
var helpProtonDBTitle$2 = "Thêm Steam Deck vào ProtonDB";
var helpProtonDBDesc$2 = "Để gửi báo cáo từ Steam Deck, bạn cần đăng ký nó như một thiết bị trên ProtonDB. Điều này yêu cầu Chế độ Desktop.";
var helpProtonDBSteps$2 = "Các bước đăng ký:";
var helpStep1$2 = "Chuyển sang Chế độ Desktop (giữ nút Nguồn → Chuyển sang Desktop)";
var helpStep2$2 = "Mở trình duyệt web (Firefox hoặc Chrome)";
var helpStep3$2 = "Truy cập protondb.com và đăng nhập bằng tài khoản Steam của bạn";
var helpStep4$2 = "Nhấp vào biểu tượng hồ sơ của bạn ở góc trên bên phải";
var helpStep5$2 = "Đi đến 'My Rigs' và nhấp 'Add a Rig'";
var helpStep6$2 = "Chọn 'Steam Deck' làm loại thiết bị và lưu";
var helpTip$2 = "Mẹo";
var helpTipContent$2 = "Sau khi đăng ký Steam Deck, bạn có thể gửi báo cáo trực tiếp từ Chế độ Game bằng nút Gửi trên huy hiệu.";
var helpSubmitTitle$2 = "Gửi báo cáo trò chơi";
var helpSubmitDesc$2 = "Giúp đỡ cộng đồng bằng cách chia sẻ trải nghiệm chơi game của bạn! Báo cáo giúp người khác biết điều gì sẽ xảy ra.";
var helpSubmitStep1$2 = "Chơi game ít nhất 15-30 phút";
var helpSubmitStep2$2 = "Nhấp vào nút Gửi trên huy hiệu ProtonDB";
var helpSubmitStep3$2 = "Điền vào biểu mẫu báo cáo trên trang web ProtonDB";
var vi = {
	sectionLibrary: sectionLibrary$2,
	sectionStore: sectionStore$2,
	sectionLinks: sectionLinks$2,
	badgePosition: badgePosition$2,
	badgePositionDescription: badgePositionDescription$2,
	badgeSize: badgeSize$2,
	badgeSizeDescription: badgeSizeDescription$2,
	caching: caching$2,
	clearCache: clearCache$2,
	clearCacheLabel: clearCacheLabel$2,
	expandOnHover: expandOnHover$2,
	expandOnHoverDescription: expandOnHoverDescription$2,
	positionTopLeft: positionTopLeft$2,
	positionTopRight: positionTopRight$2,
	positionBottomLeft: positionBottomLeft$2,
	positionBottomMiddle: positionBottomMiddle$2,
	positionBottomRight: positionBottomRight$2,
	positionTopMiddle: positionTopMiddle$2,
	settings: settings$2,
	sizeMinimalist: sizeMinimalist$2,
	sizeRegular: sizeRegular$2,
	sizeSmall: sizeSmall$2,
	tierborked: tierborked$2,
	tierbronze: tierbronze$2,
	tiergold: tiergold$2,
	tierMinborked: tierMinborked$2,
	tierMinbronze: tierMinbronze$2,
	tierMingold: tierMingold$2,
	tierMinpending: tierMinpending$2,
	tierMinplatinum: tierMinplatinum$2,
	tierMinsilver: tierMinsilver$2,
	tierpending: tierpending$2,
	tierplatinum: tierplatinum$2,
	tiersilver: tiersilver$2,
	expandOnHoverOff: expandOnHoverOff$2,
	submit: submit$2,
	login: login$2,
	loading: loading$2,
	noReport: noReport$2,
	disableSubmit: disableSubmit$2,
	disableSubmitDesc: disableSubmitDesc$2,
	enableLibraryBadge: enableLibraryBadge$2,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$2,
	enableStoreBadge: enableStoreBadge$2,
	enableStoreBadgeDesc: enableStoreBadgeDesc$2,
	storeBadgePosition: storeBadgePosition$2,
	storeBadgePositionDesc: storeBadgePositionDesc$2,
	storePositionBottomCenter: storePositionBottomCenter$2,
	storePositionBottomLeft: storePositionBottomLeft$2,
	storePositionBottomRight: storePositionBottomRight$2,
	storePositionTopMiddle: storePositionTopMiddle$2,
	helpButton: helpButton$2,
	helpTitle: helpTitle$2,
	helpToc: helpToc$2,
	helpClose: helpClose$2,
	helpAboutTitle: helpAboutTitle$2,
	helpAboutDesc: helpAboutDesc$2,
	helpUsingTitle: helpUsingTitle$2,
	helpBadgeTiers: helpBadgeTiers$2,
	helpTierPlatinum: helpTierPlatinum$2,
	helpTierGold: helpTierGold$2,
	helpTierSilver: helpTierSilver$2,
	helpTierBronze: helpTierBronze$2,
	helpTierBorked: helpTierBorked$2,
	helpTierPending: helpTierPending$2,
	helpTierNoReport: helpTierNoReport$2,
	helpSettingsExplain: helpSettingsExplain$2,
	helpSettingSize: helpSettingSize$2,
	helpSettingSizeDesc: helpSettingSizeDesc$2,
	helpSettingPosition: helpSettingPosition$2,
	helpSettingPositionDesc: helpSettingPositionDesc$2,
	helpSettingSubmit: helpSettingSubmit$2,
	helpSettingSubmitDesc: helpSettingSubmitDesc$2,
	helpProtonDBTitle: helpProtonDBTitle$2,
	helpProtonDBDesc: helpProtonDBDesc$2,
	helpProtonDBSteps: helpProtonDBSteps$2,
	helpStep1: helpStep1$2,
	helpStep2: helpStep2$2,
	helpStep3: helpStep3$2,
	helpStep4: helpStep4$2,
	helpStep5: helpStep5$2,
	helpStep6: helpStep6$2,
	helpTip: helpTip$2,
	helpTipContent: helpTipContent$2,
	helpSubmitTitle: helpSubmitTitle$2,
	helpSubmitDesc: helpSubmitDesc$2,
	helpSubmitStep1: helpSubmitStep1$2,
	helpSubmitStep2: helpSubmitStep2$2,
	helpSubmitStep3: helpSubmitStep3$2
};

var sectionLibrary$1 = "Library";
var sectionStore$1 = "Store";
var sectionLinks$1 = "Links";
var badgePosition$1 = "徽章位置";
var badgePositionDescription$1 = "徽章在游戏详情页的位置";
var badgeSize$1 = "徽章尺寸";
var badgeSizeDescription$1 = "为徽章选择尺寸";
var caching$1 = "缓存";
var clearCache$1 = "清除 ProtonDB 缓存";
var clearCacheLabel$1 = "清除所有缓存并且强制刷新 ProtonDB 徽章";
var expandOnHover$1 = "悬停时展开";
var expandOnHoverDescription$1 = "仅支持极简徽章。在选中徽章时显示文字。";
var positionTopLeft$1 = "左上角";
var positionTopRight$1 = "右上角";
var positionBottomLeft$1 = "Bottom Left";
var positionBottomMiddle$1 = "Bottom Middle";
var positionBottomRight$1 = "Bottom Right";
var positionTopMiddle$1 = "顶部居中";
var settings$1 = "设置";
var sizeMinimalist$1 = "极简";
var sizeRegular$1 = "正常";
var sizeSmall$1 = "小型";
var tierborked$1 = "不可玩";
var tierbronze$1 = "铜牌";
var tiergold$1 = "金牌";
var tierMinborked$1 = "不可玩";
var tierMinbronze$1 = "铜牌";
var tierMingold$1 = "金牌";
var tierMinpending$1 = "暂无";
var tierMinplatinum$1 = "白金";
var tierMinsilver$1 = "银牌";
var tierpending$1 = "暂无";
var tierplatinum$1 = "白金";
var tiersilver$1 = "银牌";
var expandOnHoverOff$1 = "关闭";
var submit$1 = "提交";
var login$1 = "登录";
var loading$1 = "...";
var noReport$1 = "无报告";
var disableSubmit$1 = "禁用提交";
var disableSubmitDesc$1 = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge$1 = "Enable Badge on Library";
var enableLibraryBadgeDesc$1 = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge$1 = "在商店页面启用徽章";
var enableStoreBadgeDesc$1 = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition$1 = "Store Badge Position";
var storeBadgePositionDesc$1 = "Position the badge overlay on store pages";
var storePositionBottomCenter$1 = "Bottom Center";
var storePositionBottomLeft$1 = "Bottom Left";
var storePositionBottomRight$1 = "Bottom Right";
var storePositionTopMiddle$1 = "Top Right";
var helpButton$1 = "使用说明";
var helpTitle$1 = "ProtonDB Badges - 帮助";
var helpToc$1 = "跳转到章节";
var helpClose$1 = "关闭";
var helpAboutTitle$1 = "关于此插件";
var helpAboutDesc$1 = "ProtonDB Badges直接在您的Steam Deck上显示ProtonDB兼容性评分。无需离开Steam界面，即可一目了然地查看游戏在Linux/Proton上的运行情况。";
var helpUsingTitle$1 = "使用插件";
var helpBadgeTiers$1 = "徽章等级:";
var helpTierPlatinum$1 = "开箱即用，完美运行";
var helpTierGold$1 = "调整后完美运行";
var helpTierSilver$1 = "存在轻微问题";
var helpTierBronze$1 = "可以运行，但经常崩溃或有问题";
var helpTierBorked$1 = "无法运行或无法游玩";
var helpTierPending$1 = "有报告但尚未评级";
var helpTierNoReport$1 = "尚无报告 - 成为第一个提交者！";
var helpSettingsExplain$1 = "设置说明:";
var helpSettingSize$1 = "徽章大小";
var helpSettingSizeDesc$1 = "正常（完整大小）、小型（紧凑）或极简（仅图标）";
var helpSettingPosition$1 = "徽章位置";
var helpSettingPositionDesc$1 = "徽章在游戏页面上显示的位置";
var helpSettingSubmit$1 = "禁用提交";
var helpSettingSubmitDesc$1 = "隐藏向ProtonDB提交报告的按钮";
var helpProtonDBTitle$1 = "将Steam Deck添加到ProtonDB";
var helpProtonDBDesc$1 = "要从Steam Deck提交报告，您需要在ProtonDB上将其注册为设备。这需要桌面模式。";
var helpProtonDBSteps$1 = "注册步骤:";
var helpStep1$1 = "切换到桌面模式（长按电源按钮 → 切换到桌面）";
var helpStep2$1 = "打开网络浏览器（Firefox或Chrome）";
var helpStep3$1 = "访问protondb.com并使用Steam账户登录";
var helpStep4$1 = "点击右上角的个人头像图标";
var helpStep5$1 = "进入'My Rigs'并点击'Add a Rig'";
var helpStep6$1 = "选择'Steam Deck'作为设备类型并保存";
var helpTip$1 = "提示";
var helpTipContent$1 = "注册Steam Deck后，您可以直接从游戏模式使用徽章上的提交按钮提交报告。";
var helpSubmitTitle$1 = "提交游戏报告";
var helpSubmitDesc$1 = "通过分享您的游戏体验来帮助社区！报告可以帮助其他人了解游戏表现。";
var helpSubmitStep1$1 = "玩游戏至少15-30分钟";
var helpSubmitStep2$1 = "点击ProtonDB徽章上的提交按钮";
var helpSubmitStep3$1 = "在ProtonDB网站上填写报告表单";
var zhCn = {
	sectionLibrary: sectionLibrary$1,
	sectionStore: sectionStore$1,
	sectionLinks: sectionLinks$1,
	badgePosition: badgePosition$1,
	badgePositionDescription: badgePositionDescription$1,
	badgeSize: badgeSize$1,
	badgeSizeDescription: badgeSizeDescription$1,
	caching: caching$1,
	clearCache: clearCache$1,
	clearCacheLabel: clearCacheLabel$1,
	expandOnHover: expandOnHover$1,
	expandOnHoverDescription: expandOnHoverDescription$1,
	positionTopLeft: positionTopLeft$1,
	positionTopRight: positionTopRight$1,
	positionBottomLeft: positionBottomLeft$1,
	positionBottomMiddle: positionBottomMiddle$1,
	positionBottomRight: positionBottomRight$1,
	positionTopMiddle: positionTopMiddle$1,
	settings: settings$1,
	sizeMinimalist: sizeMinimalist$1,
	sizeRegular: sizeRegular$1,
	sizeSmall: sizeSmall$1,
	tierborked: tierborked$1,
	tierbronze: tierbronze$1,
	tiergold: tiergold$1,
	tierMinborked: tierMinborked$1,
	tierMinbronze: tierMinbronze$1,
	tierMingold: tierMingold$1,
	tierMinpending: tierMinpending$1,
	tierMinplatinum: tierMinplatinum$1,
	tierMinsilver: tierMinsilver$1,
	tierpending: tierpending$1,
	tierplatinum: tierplatinum$1,
	tiersilver: tiersilver$1,
	expandOnHoverOff: expandOnHoverOff$1,
	submit: submit$1,
	login: login$1,
	loading: loading$1,
	noReport: noReport$1,
	disableSubmit: disableSubmit$1,
	disableSubmitDesc: disableSubmitDesc$1,
	enableLibraryBadge: enableLibraryBadge$1,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc$1,
	enableStoreBadge: enableStoreBadge$1,
	enableStoreBadgeDesc: enableStoreBadgeDesc$1,
	storeBadgePosition: storeBadgePosition$1,
	storeBadgePositionDesc: storeBadgePositionDesc$1,
	storePositionBottomCenter: storePositionBottomCenter$1,
	storePositionBottomLeft: storePositionBottomLeft$1,
	storePositionBottomRight: storePositionBottomRight$1,
	storePositionTopMiddle: storePositionTopMiddle$1,
	helpButton: helpButton$1,
	helpTitle: helpTitle$1,
	helpToc: helpToc$1,
	helpClose: helpClose$1,
	helpAboutTitle: helpAboutTitle$1,
	helpAboutDesc: helpAboutDesc$1,
	helpUsingTitle: helpUsingTitle$1,
	helpBadgeTiers: helpBadgeTiers$1,
	helpTierPlatinum: helpTierPlatinum$1,
	helpTierGold: helpTierGold$1,
	helpTierSilver: helpTierSilver$1,
	helpTierBronze: helpTierBronze$1,
	helpTierBorked: helpTierBorked$1,
	helpTierPending: helpTierPending$1,
	helpTierNoReport: helpTierNoReport$1,
	helpSettingsExplain: helpSettingsExplain$1,
	helpSettingSize: helpSettingSize$1,
	helpSettingSizeDesc: helpSettingSizeDesc$1,
	helpSettingPosition: helpSettingPosition$1,
	helpSettingPositionDesc: helpSettingPositionDesc$1,
	helpSettingSubmit: helpSettingSubmit$1,
	helpSettingSubmitDesc: helpSettingSubmitDesc$1,
	helpProtonDBTitle: helpProtonDBTitle$1,
	helpProtonDBDesc: helpProtonDBDesc$1,
	helpProtonDBSteps: helpProtonDBSteps$1,
	helpStep1: helpStep1$1,
	helpStep2: helpStep2$1,
	helpStep3: helpStep3$1,
	helpStep4: helpStep4$1,
	helpStep5: helpStep5$1,
	helpStep6: helpStep6$1,
	helpTip: helpTip$1,
	helpTipContent: helpTipContent$1,
	helpSubmitTitle: helpSubmitTitle$1,
	helpSubmitDesc: helpSubmitDesc$1,
	helpSubmitStep1: helpSubmitStep1$1,
	helpSubmitStep2: helpSubmitStep2$1,
	helpSubmitStep3: helpSubmitStep3$1
};

var sectionLibrary = "Library";
var sectionStore = "Store";
var sectionLinks = "Links";
var badgePosition = "徽章位置";
var badgePositionDescription = "顯示在遊戲詳細資料頁面的位置";
var badgeSize = "徽章尺寸";
var badgeSizeDescription = "選擇不同徽章大小";
var caching = "快取";
var clearCache = "清除 ProtonDB 快取";
var clearCacheLabel = "清除快取，以便更新從 ProtonDB 下載的徽章";
var expandOnHover = "懸浮時展開標籤";
var expandOnHoverDescription = "僅極簡可用。在被選擇時顯示徽章文字。";
var positionTopLeft = "左上";
var positionTopRight = "右上";
var positionBottomLeft = "Bottom Left";
var positionBottomMiddle = "Bottom Middle";
var positionBottomRight = "Bottom Right";
var positionTopMiddle = "頂部置中";
var settings = "設定";
var sizeMinimalist = "極簡";
var sizeRegular = "正常";
var sizeSmall = "小型";
var tierborked = "不可玩";
var tierbronze = "銅";
var tiergold = "金";
var tierMinborked = "不可玩";
var tierMinbronze = "銅";
var tierMingold = "金";
var tierMinpending = "無";
var tierMinplatinum = "白金";
var tierMinsilver = "銀";
var tierpending = "等您回報";
var tierplatinum = "白金";
var tiersilver = "銀";
var expandOnHoverOff = "關閉";
var submit = "提交";
var login = "登入";
var loading = "...";
var noReport = "無報告";
var disableSubmit = "停用提交";
var disableSubmitDesc = "Hide the submit button that allows contributing reports to ProtonDB";
var enableLibraryBadge = "Enable Badge on Library";
var enableLibraryBadgeDesc = "Show ProtonDB badge on game pages in your library";
var enableStoreBadge = "在商店頁面啟用徽章";
var enableStoreBadgeDesc = "Show ProtonDB badge as overlay on store pages";
var storeBadgePosition = "Store Badge Position";
var storeBadgePositionDesc = "Position the badge overlay on store pages";
var storePositionBottomCenter = "Bottom Center";
var storePositionBottomLeft = "Bottom Left";
var storePositionBottomRight = "Bottom Right";
var storePositionTopMiddle = "Top Right";
var helpButton = "使用說明";
var helpTitle = "ProtonDB Badges - 說明";
var helpToc = "跳至章節";
var helpClose = "關閉";
var helpAboutTitle = "關於此插件";
var helpAboutDesc = "ProtonDB Badges直接在您的Steam Deck上顯示ProtonDB相容性評分。無需離開Steam介面，即可一目了然地查看遊戲在Linux/Proton上的運行情況。";
var helpUsingTitle = "使用插件";
var helpBadgeTiers = "徽章等級:";
var helpTierPlatinum = "開箱即用，完美運行";
var helpTierGold = "調整後完美運行";
var helpTierSilver = "存在輕微問題";
var helpTierBronze = "可以運行，但經常當機或有問題";
var helpTierBorked = "無法運行或無法遊玩";
var helpTierPending = "有報告但尚未評級";
var helpTierNoReport = "尚無報告 - 成為第一個提交者！";
var helpSettingsExplain = "設定說明:";
var helpSettingSize = "徽章大小";
var helpSettingSizeDesc = "正常（完整大小）、小型（緊湊）或極簡（僅圖示）";
var helpSettingPosition = "徽章位置";
var helpSettingPositionDesc = "徽章在遊戲頁面上顯示的位置";
var helpSettingSubmit = "停用提交";
var helpSettingSubmitDesc = "隱藏向ProtonDB提交報告的按鈕";
var helpProtonDBTitle = "將Steam Deck新增到ProtonDB";
var helpProtonDBDesc = "要從Steam Deck提交報告，您需要在ProtonDB上將其註冊為裝置。這需要桌面模式。";
var helpProtonDBSteps = "註冊步驟:";
var helpStep1 = "切換到桌面模式（長按電源按鈕 → 切換到桌面）";
var helpStep2 = "開啟網路瀏覽器（Firefox或Chrome）";
var helpStep3 = "前往protondb.com並使用Steam帳戶登入";
var helpStep4 = "點擊右上角的個人頭像圖示";
var helpStep5 = "進入'My Rigs'並點擊'Add a Rig'";
var helpStep6 = "選擇'Steam Deck'作為裝置類型並儲存";
var helpTip = "提示";
var helpTipContent = "註冊Steam Deck後，您可以直接從遊戲模式使用徽章上的提交按鈕提交報告。";
var helpSubmitTitle = "提交遊戲報告";
var helpSubmitDesc = "透過分享您的遊戲體驗來幫助社群！報告可以幫助其他人了解遊戲表現。";
var helpSubmitStep1 = "玩遊戲至少15-30分鐘";
var helpSubmitStep2 = "點擊ProtonDB徽章上的提交按鈕";
var helpSubmitStep3 = "在ProtonDB網站上填寫報告表單";
var zhTw = {
	sectionLibrary: sectionLibrary,
	sectionStore: sectionStore,
	sectionLinks: sectionLinks,
	badgePosition: badgePosition,
	badgePositionDescription: badgePositionDescription,
	badgeSize: badgeSize,
	badgeSizeDescription: badgeSizeDescription,
	caching: caching,
	clearCache: clearCache,
	clearCacheLabel: clearCacheLabel,
	expandOnHover: expandOnHover,
	expandOnHoverDescription: expandOnHoverDescription,
	positionTopLeft: positionTopLeft,
	positionTopRight: positionTopRight,
	positionBottomLeft: positionBottomLeft,
	positionBottomMiddle: positionBottomMiddle,
	positionBottomRight: positionBottomRight,
	positionTopMiddle: positionTopMiddle,
	settings: settings,
	sizeMinimalist: sizeMinimalist,
	sizeRegular: sizeRegular,
	sizeSmall: sizeSmall,
	tierborked: tierborked,
	tierbronze: tierbronze,
	tiergold: tiergold,
	tierMinborked: tierMinborked,
	tierMinbronze: tierMinbronze,
	tierMingold: tierMingold,
	tierMinpending: tierMinpending,
	tierMinplatinum: tierMinplatinum,
	tierMinsilver: tierMinsilver,
	tierpending: tierpending,
	tierplatinum: tierplatinum,
	tiersilver: tiersilver,
	expandOnHoverOff: expandOnHoverOff,
	submit: submit,
	login: login,
	loading: loading,
	noReport: noReport,
	disableSubmit: disableSubmit,
	disableSubmitDesc: disableSubmitDesc,
	enableLibraryBadge: enableLibraryBadge,
	enableLibraryBadgeDesc: enableLibraryBadgeDesc,
	enableStoreBadge: enableStoreBadge,
	enableStoreBadgeDesc: enableStoreBadgeDesc,
	storeBadgePosition: storeBadgePosition,
	storeBadgePositionDesc: storeBadgePositionDesc,
	storePositionBottomCenter: storePositionBottomCenter,
	storePositionBottomLeft: storePositionBottomLeft,
	storePositionBottomRight: storePositionBottomRight,
	storePositionTopMiddle: storePositionTopMiddle,
	helpButton: helpButton,
	helpTitle: helpTitle,
	helpToc: helpToc,
	helpClose: helpClose,
	helpAboutTitle: helpAboutTitle,
	helpAboutDesc: helpAboutDesc,
	helpUsingTitle: helpUsingTitle,
	helpBadgeTiers: helpBadgeTiers,
	helpTierPlatinum: helpTierPlatinum,
	helpTierGold: helpTierGold,
	helpTierSilver: helpTierSilver,
	helpTierBronze: helpTierBronze,
	helpTierBorked: helpTierBorked,
	helpTierPending: helpTierPending,
	helpTierNoReport: helpTierNoReport,
	helpSettingsExplain: helpSettingsExplain,
	helpSettingSize: helpSettingSize,
	helpSettingSizeDesc: helpSettingSizeDesc,
	helpSettingPosition: helpSettingPosition,
	helpSettingPositionDesc: helpSettingPositionDesc,
	helpSettingSubmit: helpSettingSubmit,
	helpSettingSubmitDesc: helpSettingSubmitDesc,
	helpProtonDBTitle: helpProtonDBTitle,
	helpProtonDBDesc: helpProtonDBDesc,
	helpProtonDBSteps: helpProtonDBSteps,
	helpStep1: helpStep1,
	helpStep2: helpStep2,
	helpStep3: helpStep3,
	helpStep4: helpStep4,
	helpStep5: helpStep5,
	helpStep6: helpStep6,
	helpTip: helpTip,
	helpTipContent: helpTipContent,
	helpSubmitTitle: helpSubmitTitle,
	helpSubmitDesc: helpSubmitDesc,
	helpSubmitStep1: helpSubmitStep1,
	helpSubmitStep2: helpSubmitStep2,
	helpSubmitStep3: helpSubmitStep3
};

const languages = {
    bg,
    cs,
    da,
    de,
    el,
    en,
    es,
    es419,
    fi,
    fr,
    hu,
    it,
    ja,
    ko,
    nl,
    no,
    pl,
    pt,
    ptBr,
    ro,
    ru,
    sl,
    sv,
    th,
    tr,
    uk,
    vi,
    zhCn,
    zhTw
};

function getCurrentLanguage() {
    const steamLang = window.LocalizationManager.m_rgLocalesToUse[0];
    const lang = steamLang.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    return languages[lang] ? lang : 'en';
}
function useTranslations() {
    const [lang] = SP_REACT.useState(getCurrentLanguage());
    return function (key) {
        if (languages[lang]?.[key]?.length) {
            return languages[lang]?.[key];
        }
        else if (languages.en?.[key]?.length) {
            return languages.en?.[key];
        }
        else {
            return key;
        }
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    Promise: undefined};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        return (clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

function errorContext(cb) {
    {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject));

const DEFAULT_SETTINGS = {
    size: 'regular',
    position: 'tl',
    labelTypeOnHover: 'off',
    disableSubmit: false,
    enableLibraryBadge: true,
    enableStoreBadge: true,
    storeBadgePosition: 'bc'
};
// Not using the React context here as this approach is simpler.
const SettingsContext = new BehaviorSubject(DEFAULT_SETTINGS);
const LoadingContext = new BehaviorSubject(true);
function updateSettings(key, value) {
    const newSettings = { ...SettingsContext.value, [key]: value };
    call('set_setting', 'settings', newSettings).catch(console.error);
    SettingsContext.next(newSettings);
}
function loadSettings() {
    LoadingContext.next(true);
    call('get_setting', 'settings', DEFAULT_SETTINGS)
        .then(settings => {
        // Merge with defaults to handle missing fields from older versions
        const mergedSettings = { ...DEFAULT_SETTINGS, ...settings };
        SettingsContext.next(mergedSettings);
    })
        .catch(console.error)
        .finally(() => LoadingContext.next(false));
}
const useSettings = () => {
    const [settings, setSettings] = SP_REACT.useState(SettingsContext.value);
    const [loading, setLoading] = SP_REACT.useState(LoadingContext.value);
    SP_REACT.useEffect(() => {
        const settingsSub = SettingsContext.asObservable().subscribe((value) => setSettings(value));
        const loadingSub = LoadingContext.asObservable().subscribe((value) => setLoading(value));
        return () => {
            loadingSub.unsubscribe();
            settingsSub.unsubscribe();
        };
    }, []);
    function setSize(value) {
        updateSettings('size', value);
    }
    function setPosition(value) {
        updateSettings('position', value);
    }
    function setLabelOnHover(value) {
        updateSettings('labelTypeOnHover', value);
    }
    function setDisableSubmit(value) {
        updateSettings('disableSubmit', value);
    }
    function setEnableLibraryBadge(value) {
        updateSettings('enableLibraryBadge', value);
    }
    function setEnableStoreBadge(value) {
        updateSettings('enableStoreBadge', value);
    }
    function setStoreBadgePosition(value) {
        updateSettings('storeBadgePosition', value);
    }
    return { settings, setSize, setPosition, setLabelOnHover, setDisableSubmit, setEnableLibraryBadge, setEnableStoreBadge, setStoreBadgePosition, loading };
};

function useSystemInfo() {
    const [systemInfo, setSystemInfo] = SP_REACT.useState(null);
    const [loading, setLoading] = SP_REACT.useState(true);
    SP_REACT.useEffect(() => {
        const fetchSystemInfo = async () => {
            try {
                const info = await call('get_system_info');
                setSystemInfo(info);
            }
            catch (e) {
                console.error('Failed to get system info:', e);
                setSystemInfo({
                    plugin_version: 'unknown',
                    os_name: 'unknown',
                    os_version: 'unknown',
                    decky_version: 'unknown'
                });
            }
            finally {
                setLoading(false);
            }
        };
        fetchSystemInfo();
    }, []);
    // Format OS display - show "SteamOS" if it's SteamOS, otherwise "Linux: [type]"
    const getOsDisplay = () => {
        if (!systemInfo)
            return 'Loading...';
        const osName = systemInfo.os_name.toLowerCase();
        if (osName.includes('steamos') || osName.includes('steam os')) {
            return `SteamOS: ${systemInfo.os_version}`;
        }
        else {
            return `Linux: ${systemInfo.os_name}`;
        }
    };
    return {
        systemInfo,
        loading,
        getOsDisplay
    };
}

const appTypes = {
    1: 'game',
    2: 'software',
    4: 'tool',
    8: 'demo',
    2048: 'video',
    65536: 'playtest'
};
const PLUGIN_VERSION = '1.2.0';

// THIS FILE IS AUTO GENERATED
function ImSpinner2 (props) {
  return GenIcon({"attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"}}]})(props);
}

function Spinner() {
    return (SP_REACT.createElement("div", null,
        SP_REACT.createElement("style", null, `
            .icon-spin {
              
              -webkit-animation: icon-spin 2s infinite linear;
                      animation: icon-spin 2s infinite linear;
            }
            
            @-webkit-keyframes icon-spin {
              0% {
                -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                        transform: rotate(359deg);
              }
            }
            
            @keyframes icon-spin {
              0% {
                -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(359deg);
                        transform: rotate(359deg);
              }
            }
              `),
        SP_REACT.createElement(ImSpinner2, { className: "icon-spin" })));
}

const SectionHeader = ({ icon, title, id }) => (SP_REACT.createElement("div", { id: id, style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '12px',
        paddingBottom: '8px',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
    } },
    SP_REACT.createElement("span", { style: { fontSize: '20px' } }, icon),
    SP_REACT.createElement("span", { style: { fontSize: '16px', fontWeight: 'bold' } }, title)));
const HelpSection = ({ children, sectionRef }) => (SP_REACT.createElement("div", { ref: sectionRef, style: {
        padding: '16px',
        marginBottom: '16px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '8px'
    } }, children));
const Step = ({ number, children }) => (SP_REACT.createElement("div", { style: {
        display: 'flex',
        gap: '12px',
        marginBottom: '10px',
        alignItems: 'flex-start'
    } },
    SP_REACT.createElement("div", { style: {
            minWidth: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold'
        } }, number),
    SP_REACT.createElement("div", { style: { flex: 1, lineHeight: '1.5' } }, children)));
const TocButton = ({ icon, label, onClick }) => (SP_REACT.createElement(DFL.DialogButton, { onClick: onClick, style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        minWidth: 'auto',
        fontSize: '12px'
    } },
    icon,
    SP_REACT.createElement("span", null, label)));
const HelpModal = ({ closeModal }) => {
    const t = useTranslations();
    const scrollContainerRef = SP_REACT.useRef(null);
    const aboutRef = SP_REACT.useRef(null);
    const usingRef = SP_REACT.useRef(null);
    const protondbRef = SP_REACT.useRef(null);
    const submitRef = SP_REACT.useRef(null);
    const scrollToSection = (ref) => {
        if (ref.current && scrollContainerRef.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (SP_REACT.createElement(DFL.ConfirmModal, { strTitle: t('helpTitle'), strOKButtonText: t('helpClose'), onOK: closeModal, onCancel: closeModal, bHideCloseIcon: false },
        SP_REACT.createElement("div", { style: {
                marginBottom: '16px',
                padding: '12px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '8px'
            } },
            SP_REACT.createElement("div", { style: {
                    fontSize: '12px',
                    opacity: 0.7,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                } }, t('helpToc')),
            SP_REACT.createElement(DFL.Focusable, { style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                }, "flow-children": "row" },
                SP_REACT.createElement(TocButton, { icon: SP_REACT.createElement(FaBook, { size: 14 }), label: t('helpAboutTitle'), onClick: () => scrollToSection(aboutRef) }),
                SP_REACT.createElement(TocButton, { icon: SP_REACT.createElement(FaCog, { size: 14 }), label: t('helpUsingTitle'), onClick: () => scrollToSection(usingRef) }),
                SP_REACT.createElement(TocButton, { icon: SP_REACT.createElement(FaSteam, { size: 14 }), label: t('helpProtonDBTitle'), onClick: () => scrollToSection(protondbRef) }),
                SP_REACT.createElement(TocButton, { icon: SP_REACT.createElement(FaGamepad, { size: 14 }), label: t('helpSubmitTitle'), onClick: () => scrollToSection(submitRef) }))),
        SP_REACT.createElement("div", { ref: scrollContainerRef, style: {
                maxHeight: '50vh',
                overflow: 'auto',
                scrollBehavior: 'smooth'
            } },
            SP_REACT.createElement(DFL.Focusable, { style: { padding: '4px' }, "flow-children": "column" },
                SP_REACT.createElement(DFL.Focusable, { onFocus: (e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) },
                    SP_REACT.createElement(HelpSection, { sectionRef: aboutRef },
                        SP_REACT.createElement(SectionHeader, { icon: SP_REACT.createElement(FaBook, null), title: t('helpAboutTitle') }),
                        SP_REACT.createElement("p", { style: { lineHeight: '1.6', marginBottom: '8px' } }, t('helpAboutDesc')))),
                SP_REACT.createElement(DFL.Focusable, { onFocus: (e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) },
                    SP_REACT.createElement(HelpSection, { sectionRef: usingRef },
                        SP_REACT.createElement(SectionHeader, { icon: SP_REACT.createElement(FaCog, null), title: t('helpUsingTitle') }),
                        SP_REACT.createElement("div", { style: { marginBottom: '16px' } },
                            SP_REACT.createElement("strong", null, t('helpBadgeTiers')),
                            SP_REACT.createElement("ul", { style: { marginTop: '8px', paddingLeft: '20px', lineHeight: '1.6' } },
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#b4c7dc' } }, "Platinum"),
                                    " - ",
                                    t('helpTierPlatinum')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#cfb53b' } }, "Gold"),
                                    " - ",
                                    t('helpTierGold')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#a6a6a6' } }, "Silver"),
                                    " - ",
                                    t('helpTierSilver')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#cd7f32' } }, "Bronze"),
                                    " - ",
                                    t('helpTierBronze')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#ff0000' } }, "Borked"),
                                    " - ",
                                    t('helpTierBorked')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#6c757d' } }, "Pending"),
                                    " - ",
                                    t('helpTierPending')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("span", { style: { color: '#4a4a4a' } }, "No Report"),
                                    " - ",
                                    t('helpTierNoReport')))),
                        SP_REACT.createElement("div", { style: { marginBottom: '16px' } },
                            SP_REACT.createElement("strong", null, t('helpSettingsExplain')),
                            SP_REACT.createElement("ul", { style: { marginTop: '8px', paddingLeft: '20px', lineHeight: '1.6' } },
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("strong", null, t('helpSettingSize')),
                                    " - ",
                                    t('helpSettingSizeDesc')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("strong", null, t('helpSettingPosition')),
                                    " - ",
                                    t('helpSettingPositionDesc')),
                                SP_REACT.createElement("li", null,
                                    SP_REACT.createElement("strong", null, t('helpSettingSubmit')),
                                    " - ",
                                    t('helpSettingSubmitDesc')))))),
                SP_REACT.createElement(DFL.Focusable, { onFocus: (e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) },
                    SP_REACT.createElement(HelpSection, { sectionRef: protondbRef },
                        SP_REACT.createElement(SectionHeader, { icon: SP_REACT.createElement(FaSteam, null), title: t('helpProtonDBTitle') }),
                        SP_REACT.createElement("p", { style: { marginBottom: '16px', lineHeight: '1.6' } }, t('helpProtonDBDesc')),
                        SP_REACT.createElement("strong", null, t('helpProtonDBSteps')),
                        SP_REACT.createElement("div", { style: { marginTop: '12px' } },
                            SP_REACT.createElement(Step, { number: 1 }, t('helpStep1')),
                            SP_REACT.createElement(Step, { number: 2 }, t('helpStep2')),
                            SP_REACT.createElement(Step, { number: 3 }, t('helpStep3')),
                            SP_REACT.createElement(Step, { number: 4 }, t('helpStep4')),
                            SP_REACT.createElement(Step, { number: 5 }, t('helpStep5')),
                            SP_REACT.createElement(Step, { number: 6 }, t('helpStep6'))),
                        SP_REACT.createElement("div", { style: {
                                marginTop: '16px',
                                padding: '12px',
                                background: 'rgba(207, 181, 59, 0.2)',
                                borderRadius: '6px',
                                borderLeft: '3px solid #cfb53b'
                            } },
                            SP_REACT.createElement("strong", null,
                                "\uD83D\uDCA1 ",
                                t('helpTip')),
                            SP_REACT.createElement("p", { style: { marginTop: '4px', lineHeight: '1.5' } }, t('helpTipContent'))))),
                SP_REACT.createElement(DFL.Focusable, { onFocus: (e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) },
                    SP_REACT.createElement(HelpSection, { sectionRef: submitRef },
                        SP_REACT.createElement(SectionHeader, { icon: SP_REACT.createElement(FaGamepad, null), title: t('helpSubmitTitle') }),
                        SP_REACT.createElement("p", { style: { marginBottom: '12px', lineHeight: '1.6' } }, t('helpSubmitDesc')),
                        SP_REACT.createElement(Step, { number: 1 }, t('helpSubmitStep1')),
                        SP_REACT.createElement(Step, { number: 2 }, t('helpSubmitStep2')),
                        SP_REACT.createElement(Step, { number: 3 }, t('helpSubmitStep3'))))))));
};

const GITHUB_URL = 'https://github.com/bschelst/protondb-decky';
const DeckPanelSection = DFL.PanelSection;
const DeckPanelSectionRow = DFL.PanelSectionRow;
const DeckButtonItem = DFL.ButtonItem;
function Index() {
    const { settings, setSize, setPosition, setLabelOnHover, setDisableSubmit, setEnableLibraryBadge, setEnableStoreBadge, loading } = useSettings();
    const t = useTranslations();
    const { systemInfo} = useSystemInfo();
    const sizeOptions = [
        { data: 0, label: t('sizeRegular'), value: 'regular' },
        { data: 1, label: t('sizeSmall'), value: 'small' },
        { data: 2, label: t('sizeMinimalist'), value: 'minimalist' }
    ];
    const positionOptions = [
        { data: 0, label: t('positionTopLeft'), value: 'tl' },
        { data: 1, label: t('positionTopMiddle'), value: 'tm' },
        { data: 2, label: t('positionTopRight'), value: 'tr' },
        { data: 3, label: t('positionBottomLeft'), value: 'bl' },
        { data: 4, label: t('positionBottomMiddle'), value: 'bm' },
        { data: 5, label: t('positionBottomRight'), value: 'br' }
    ];
    const hoverTypeOptions = [
        { data: 0, label: t('expandOnHoverOff'), value: 'off' },
        { data: 1, label: t('sizeSmall'), value: 'small' },
        { data: 2, label: t('sizeRegular'), value: 'regular' }
    ];
    if (loading) {
        return (SP_REACT.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10
            } },
            SP_REACT.createElement(Spinner, null)));
    }
    return (SP_REACT.createElement("div", null,
        SP_REACT.createElement(DeckPanelSection, { title: t('sectionLibrary') },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.ToggleField, { label: t('enableLibraryBadge'), description: t('enableLibraryBadgeDesc'), checked: settings.enableLibraryBadge, onChange: (checked) => {
                        setEnableLibraryBadge(checked);
                    } })),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.ToggleField, { label: t('disableSubmit'), description: t('disableSubmitDesc'), checked: settings.disableSubmit, onChange: (checked) => {
                        setDisableSubmit(checked);
                    } })),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.DropdownItem, { label: t('badgeSize'), description: t('badgeSizeDescription'), menuLabel: t('badgeSize'), rgOptions: sizeOptions.map((o) => ({
                        data: o.data,
                        label: o.label
                    })), selectedOption: sizeOptions.find((o) => o.value === settings.size)?.data || 0, onChange: (newVal) => {
                        const newSize = sizeOptions.find((o) => o.data === newVal.data)?.value ||
                            'regular';
                        setSize(newSize);
                    } })),
            settings.size === 'minimalist' ? (SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.DropdownItem, { label: t('expandOnHover'), description: t('expandOnHoverDescription'), menuLabel: t('expandOnHover'), rgOptions: hoverTypeOptions.map((o) => ({
                        data: o.data,
                        label: o.label
                    })), selectedOption: hoverTypeOptions.find((o) => o.value === settings.labelTypeOnHover)?.data || 0, onChange: (newVal) => {
                        const newHoverType = hoverTypeOptions.find((o) => o.data === newVal.data)?.value ||
                            'off';
                        setLabelOnHover(newHoverType);
                    } }))) : (''),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.DropdownItem, { label: t('badgePosition'), description: t('badgePositionDescription'), menuLabel: t('badgePosition'), rgOptions: positionOptions.map((o) => ({
                        data: o.data,
                        label: o.label
                    })), selectedOption: positionOptions.find((o) => o.value === settings.position)
                        ?.data || 0, onChange: (newVal) => {
                        const newPosition = positionOptions.find((o) => o.data === newVal.data)?.value ||
                            'tl';
                        setPosition(newPosition);
                    } }))),
        SP_REACT.createElement(DeckPanelSection, { title: t('sectionStore') },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.ToggleField, { label: t('enableStoreBadge'), description: t('enableStoreBadgeDesc'), checked: settings.enableStoreBadge, onChange: (checked) => {
                        setEnableStoreBadge(checked);
                    } }))),
        SP_REACT.createElement(DeckPanelSection, { title: t('caching') },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DeckButtonItem, { label: t('clearCacheLabel'), bottomSeparator: "none", layout: "below", onClick: () => clearCache$t() }, t('clearCache')))),
        SP_REACT.createElement(DeckPanelSection, { title: t('sectionLinks') },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DeckButtonItem, { bottomSeparator: "standard", layout: "below", onClick: () => DFL.showModal(SP_REACT.createElement(HelpModal, null)) },
                    SP_REACT.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                        SP_REACT.createElement(FaQuestionCircle, { size: 20 }),
                        SP_REACT.createElement("span", null, t('helpButton'))))),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DeckButtonItem, { bottomSeparator: "none", layout: "below", onClick: () => DFL.Navigation.NavigateToExternalWeb(GITHUB_URL) },
                    SP_REACT.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                        SP_REACT.createElement(FaGithub, { size: 20 }),
                        SP_REACT.createElement("span", null, "GitHub"))))),
        SP_REACT.createElement(DeckPanelSection, { title: "VERSION INFO" },
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.Field, { label: "Plugin", bottomSeparator: "none" }, PLUGIN_VERSION)),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.Field, { label: systemInfo?.os_name?.toLowerCase().includes('steamos') ? 'SteamOS' : 'Linux', bottomSeparator: "none" }, systemInfo?.os_name?.toLowerCase().includes('steamos')
                    ? systemInfo?.os_version || 'Loading...'
                    : systemInfo?.os_name || 'Loading...')),
            SP_REACT.createElement(DeckPanelSectionRow, null,
                SP_REACT.createElement(DFL.Field, { label: "Decky", bottomSeparator: "none" }, systemInfo?.decky_version || 'Loading...')))));
}

/**
 * Store overlay component - placeholder.
 * The actual badge is injected directly into the store webview via StorePatch.
 * This component is kept for the global component registration but doesn't render anything.
 */
function StoreOverlay() {
    // Badge injection is handled by StorePatch using Runtime.evaluate
    // This component is just a placeholder for the global component system
    return SP_REACT.createElement(SP_REACT.Fragment, null);
}

// THIS FILE IS AUTO GENERATED
function IoLogoTux (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.9-3.2-5.5-5-8.6-5.8 2-2.5 3.1-5.4 3.8-10.9 1.3-10-4.7-41-12.7-65.7s-29.9-50-44.7-68c-26-31.8-22.8-39.2-26.3-99.7C323.4 62.8 306.3 32 256 32s-67 32-67 59c0 28.7 2 51 2 51 1.3 33.4 1 39.4-8 55.3-4.9 8.7-27 30-35.7 44.7s-7.6 29.5-24.6 52.8c-12.4 17-13.8 28.4-9.7 44-7 8.2-3.6 19.9-5 24.9-2.6 8.7-13.7 10.3-22.3 11s-15.3 0-18.7 5.3.7 16 4.3 30-7.3 15-7.3 31 30 16 59.7 22.7 40.7 16.3 56 16.3 26.8-10.2 38-19.3c7.2-5.9 29-3.7 42.3-3.7s34.3-.6 45.7 2.4S317 480 345 480s34.7-20.7 61-34.3 42-20 42-29.7-15-16-21.7-20zm-226.5 55.5c-1.3 13-12.6 17.1-24.1 16.1-13-1.1-29-7.6-44.1-12.1s-35.5-7.5-49-9.9c-15.3-2.7 0-13.6-.2-34.2-.1-8-7.1-19.4-4.2-24.7s17.3-2.4 22.3-3.8 12.7-5.7 15.3-11.9c1.4-3.4 1.8-17.7 2.9-22.8 1.1-4.9 7.9-7.2 22.2.1s28.9 38.1 42.3 59.8 17.9 30.4 16.6 43.4zm118.5-65.8c2 10.3 3.2 24.5.7 36.3s-7 15.5-10.7 23c-2.2-6.8 5.3-13.8 4.4-30.8-.5-9.5-.8-7.8-11.5 1.8-12.2 10.8-27.6 20.1-53 22.5-21 2-32.5-8.3-32.5-8.3 5 16-4.3 24.7-4.3 24.7.3-3.7.8-14.3-2.5-21.6-4-9-9.3-18.7-9.3-18.7s8.6-2.7 11.6-10 2-17.3-8.7-27.7-52.5-37.6-55.9-42.1c-4.9-6.5-6.7-10.2-7-23.2s5.4-24.8 4.3-20.3c-.8 3.2.1 6.8.1 19.8s7.6 23.3 13.9 25c9.5 2.6 2-26.1 8-53.1s11.7-32.8 19.2-43.8 19.2-20.5 17-43.1-.1-20.1 5.1-11.8c4 6.5 13.3 24 24.7 22 19.4-3.3 43.9-24.6 47.6-28.2 3.7-3.6.7-7.1-2.3-5.8-15.5 6.7-44.3 21.5-51.5 18.2s-18.1-20.6-16.8-19.5c15.4 13.6 19.9 11.1 26.4 9 8.4-2.8 12.8-4.3 28.5-11.3s20.7-5.3 22.3-8.7-.4-6.7-4.7-5.7c-6.4 1.5-3.4 5.1-22.7 12.3-25.3 9.5-33.3 10.3-44 3-8.6-5.9-15-12.7-15-16.7s8.3-8.3 12.3-11.3 12.3-10.9 12.3-10.9 1-7.2-.6-12.7c-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1 19.6-5.2 23.8 3.8c3.9 8.3 2.4 22.7 2.4 22.7 6-2.2 13-2 21 3.5-7.1-29.8 9.5-41.1 22-41.1s22.3 9.6 22.3 25c0 12-3.5 18.2-6.9 22-4.1-.5-8.2-1.5-6.3-3.4 1.3-1.4 4.4-5.7 4.4-13.2s-5.9-13.7-13.7-13.7c-9.2 0-12.6 8.3-13.7 13s-.4 8.6-.2 10.4c.6 5 10.9 9.6 23.9 12.9s11.3 9 8.3 25.3 6.3 18.3 14.3 33.8 5.7 21.8 15.9 35.2 19 47.8 16.4 76.8c-.9 10.5-3.9 10.2 7.3 6.7 5.6-1.7 12-2.7 12-2.7 3.1-6.3 3.4-16.3 3.5-22.3.2-13.5.7-41.5-26.7-71.5 0 0 29.5 21.7 34 62 2.5 22.3-2 32.4-2 32.4 5.3 1.3 9.8 7.3 12.6 11.8 3.7 6.1-3.9-5.8-20-5.8-8.5 0-15.3 3.9-18.5 7.9s-3.1 7.6-3.2 11.7c-7.1-1.2-12.4 0-16.8 4.9-5.6 7-2.8 24.2-.8 34.6zm90.1 47.2c-24.1 10.4-32.7 23.5-47.7 31.5s-27.7 2.3-33.7-8 10.4-28.2 4.7-59.6c-4.4-24.2-6.3-31-4.9-36.8 1.4-5.5 9.4-4.4 11.5-3.9 1.3 5.4 6.7 19.5 27 19.5 0 0 23.2 2.6 32.7-21.2 0 0 5.7-.2 7.2 3.5 2.3 5.8-2.9 16.5-2.8 21.3.3 15.7 11.7 21.1 28.4 32 8.2 5.6 2.1 11.1-22.4 21.7z"}}]})(props);
}

const useParams = Object.values(DFL.ReactRouter).find((val) => /return (\w)\?\1\.params:{}/.test(`${val}`));

function cleanString(str) {
    return str
        .replace(/['"\u0040\u0026\u2122\u00ae]/g, '')
        .toLowerCase()
        .trim();
}
const useAppId = () => {
    const [appId, setAppId] = SP_REACT.useState();
    const { appid: pathId } = useParams();
    SP_REACT.useEffect(() => {
        let ignore = false;
        async function getNonSteamAppId(gameName) {
            if (ignore || !gameName) {
                setAppId(undefined);
                return;
            }
            try {
                const res = await fetchNoCors(`https://steamcommunity.com/actions/SearchApps/${gameName}`, {
                    method: 'GET'
                });
                if (res.status === 200) {
                    const options = await res.json();
                    const cleanedGameName = cleanString(gameName);
                    const appId = options.find((o) => {
                        return o.name && cleanString(o.name) === cleanedGameName;
                    })?.appid;
                    setAppId(appId);
                    return;
                }
            }
            catch (error) {
                console.error(error);
            }
            setAppId(undefined);
        }
        const appDetails = appStore.GetAppOverviewByGameID(parseInt(pathId));
        const isSteamGame = Boolean(appTypes[appDetails?.app_type]);
        if (isSteamGame) {
            setAppId(pathId);
        }
        else {
            getNonSteamAppId(appDetails?.display_name);
        }
        return () => {
            ignore = true;
        };
    }, []);
    return appId;
};

const FETCH_TIMEOUT_MS$1 = 2000;
// Helper function to add timeout to fetch requests
async function fetchWithTimeout$1(fetchPromise, timeoutMs = FETCH_TIMEOUT_MS$1) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeoutMs);
    });
    return Promise.race([fetchPromise, timeoutPromise]);
}
async function getProtonDBInfo(appId) {
    try {
        const res = await fetchWithTimeout$1(fetchNoCors(`https://www.protondb.com/api/v1/reports/summaries/${appId}.json`, {
            method: 'GET'
        }));
        if (res.status === 200) {
            return (await res.json())?.tier;
        }
    }
    catch (error) {
        console.log(error);
        return undefined; // Will show "NO REPORT"
    }
    return undefined;
}
async function getLinuxInfo(appId) {
    try {
        const res = await fetchWithTimeout$1(fetchNoCors(`https://store.steampowered.com/api/appdetails/?appids=${appId}`, {
            method: 'GET'
        }));
        if (res.status === 200) {
            return Boolean((await res.json())?.[appId]?.data?.platforms?.linux);
        }
    }
    catch (error) {
        console.log(error);
    }
    return false;
}
async function checkProtonDBLoginStatus() {
    try {
        // Check if user is logged in by accessing the contribute page
        const res = await fetchNoCors('https://www.protondb.com/contribute', {
            method: 'GET',
            credentials: 'include'
        });
        if (res.status === 200) {
            const text = await res.text();
            // If the page contains "Not Ready Yet!" or "Not logged in with Steam", user is not logged in
            const isNotLoggedIn = text.includes('Not Ready Yet!') ||
                text.includes('Not logged in with Steam');
            // Return true if user IS logged in (i.e., NOT showing the error messages)
            return !isNotLoggedIn;
        }
        // If we can't get the page, assume not logged in
        return false;
    }
    catch (error) {
        console.log('ProtonDB login check failed:', error);
        // If we can't check, assume not logged in for safety
        return false;
    }
}

function isOutdated(lastUpdated) {
    const now = new Date();
    const msBetweenDates = Math.abs(new Date(lastUpdated).getTime() - now.getTime());
    const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
    return hoursBetweenDates > 24;
}

const useBadgeData = (appId) => {
    const [protonDBTier, setProtonDBTier] = SP_REACT.useState();
    const [linuxSupport, setLinuxSupport] = SP_REACT.useState(false);
    async function refresh() {
        const tierPromise = getProtonDBInfo(appId);
        const linuxPromise = getLinuxInfo(appId);
        const [tier, linuxSupport] = await Promise.all([tierPromise, linuxPromise]);
        if (tier?.length && appId?.length) {
            updateCache(appId, {
                tier: tier,
                linuxSupport,
                lastUpdated: new Date().toISOString()
            });
            setProtonDBTier(tier);
        }
        setLinuxSupport(linuxSupport);
    }
    SP_REACT.useEffect(() => {
        // Proton DB Data
        let ignore = false;
        async function getData() {
            const cache = await getCache(appId);
            if (cache?.tier) {
                setProtonDBTier(cache.tier);
                if (!isOutdated(cache?.lastUpdated))
                    return;
            }
            const tier = await getProtonDBInfo(appId);
            if (ignore) {
                return;
            }
            if (!tier?.length)
                return;
            setProtonDBTier(tier);
        }
        if (appId?.length) {
            getData();
        }
        return () => {
            ignore = true;
        };
    }, [appId]);
    SP_REACT.useEffect(() => {
        // Linux Data
        let ignore = false;
        async function getData() {
            const cache = await getCache(appId);
            if (typeof cache?.linuxSupport !== 'undefined') {
                setLinuxSupport(cache?.linuxSupport);
                if (!isOutdated(cache?.lastUpdated))
                    return;
            }
            const linuxSupport = await getLinuxInfo(appId);
            if (ignore) {
                return;
            }
            setLinuxSupport(linuxSupport);
        }
        if (appId?.length) {
            getData();
        }
        return () => {
            ignore = true;
        };
    }, [appId]);
    SP_REACT.useEffect(() => {
        if (protonDBTier) {
            updateCache(appId, {
                tier: protonDBTier,
                linuxSupport,
                lastUpdated: new Date().toISOString()
            });
        }
    }, [protonDBTier, linuxSupport]);
    return {
        protonDBTier,
        linuxSupport,
        refresh
    };
};

function useProtonDBAuth() {
    const [isLoggedIn, setIsLoggedIn] = SP_REACT.useState(null); // null = checking, false = not logged in, true = logged in
    const [isLoading, setIsLoading] = SP_REACT.useState(true);
    SP_REACT.useEffect(() => {
        let mounted = true;
        const checkLoginStatus = async () => {
            try {
                setIsLoading(true);
                const loggedIn = await checkProtonDBLoginStatus();
                if (mounted) {
                    setIsLoggedIn(loggedIn);
                }
            }
            catch (error) {
                console.error('Failed to check ProtonDB login status:', error);
                if (mounted) {
                    setIsLoggedIn(false);
                }
            }
            finally {
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };
        checkLoginStatus();
        return () => {
            mounted = false;
        };
    }, []);
    const recheckLoginStatus = async () => {
        setIsLoading(true);
        try {
            const loggedIn = await checkProtonDBLoginStatus();
            setIsLoggedIn(loggedIn);
        }
        catch (error) {
            console.error('Failed to recheck ProtonDB login status:', error);
            setIsLoggedIn(false);
        }
        finally {
            setIsLoading(false);
        }
    };
    return { isLoggedIn, isLoading, recheckLoginStatus };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = DFL.DialogButton.render({}).type;

var style = (SP_REACT.createElement("style", null, `
    @font-face {
        font-family: Abel;
        src: url(data:font/truetype;base64,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AA8AFP/XAA8AFv/HAA8AF/+VAA8AGP/HAA8AGf+yAA8AGv/bAA8AG//HAA8AHP+yABEAE//HABEAFP/bABEAFv/HABEAF/+VABEAGP/HABEAGf+yABEAGv/bABEAG//HABEAHP+yABIAE//sABIAFv/sABIAF/9oABIAGf/XABIAG//sABIAHP/XABIAJP+BABIAJv/sABIAKv/sABIALf95ABIAMv/sABIANP/sABIARP+RABIARv+aABIAR/+aABIASP+aABIASv+iABIAUP/bABIAUf/bABIAUv+aABIAU//bABIAVP+iABIAVf/bABIAVv+RABIAWP/bABIAgf+BABIAgv+BABIAg/+BABIAhP+BABIAhf+BABIAhv+BABIAiP/sABIAk//sABIAlP/sABIAlf/sABIAlv/sABIAl//sABIAof+RABIAov+RABIAo/+RABIApP+RABIApf+RABIApv+RABIAp/+RABIAqf+aABIAqv+aABIAq/+aABIArP+aABIAs/+aABIAtP+aABIAtf+aABIAtv+aABIAt/+aABIAuv/bABIAu//bABIAvP/bABIAvf/bABIAx/95ABMAD//HABMAEf/HABMAEv/nABMAGP/sABMAGf/XABMAGv/XABMAG//sABMA3/9kABQAF//sABQAGf/fABQAHP/fABUAGP/bABUAGf/nABUAGv/sABUAHP/nABYAD//HABYAEf/HABYAE//sABYAFv/sABYAGP/sABYAGf/XABYAGv/XABYAG//sABYAHP/XABcAE//sABcAFv/sABcAGP/sABcAGv/XABcAHP/XABgAD//HABgAEf/HABgAE//sABgAFv/sABgAGP/sABgAGf/XABgAGv/XABgAG//sABgAHP/XABkAD//bABkAEf/bABkAGv/sABsAD//HABsAEf/HABsAEv/nABsAE//sABsAFv/sABsAGP/sABsAGf/XABsAGv/XABsAG//sABsAHP/XABwAD//bABwAEf/bABwAGf/sABwAGv/sACQABf+BACQACv+RACQAIv/XACQAN//DACQAOf/XACQAOv/XACQAPP+aACQAnv+qACQA2v+qACYAD//bACYAEf/bACYAPP/sACYAnv/sACYA2v/sACcAD/++ACcAEf++ACcAEv/nACcAPP/XACcATP/XACcAnv/XACcA2v/XACgAV//XACkAD/5WACkAEf5WACkAEv+FACkAJP/TACkAgf/TACkAgv/TACkAg//TACkAhP/TACkAhf/TACkAhv/TACoAD//bACoAEf/bACoAPP/sACoATP/sACoAnv/sACoA2v/sACsAD//XACsAEf/XACsARP/sACsASP/sACsATP/LACsAUv/sACsAWP/sACsAof/sACsAov/sACsAo//sACsApP/sACsApf/sACsApv/sACsAp//sACsAqf/sACsAqv/sACsAq//sACsArP/sACsAs//sACsAtP/sACsAtf/sACsAtv/sACsAt//sACsAuv/sACsAu//sACsAvP/sACsAvf/sACwATP/TACwATv/LACwAT//LAC0AD//bAC0AEf/bAC8ABf72AC8ACv8GAC8AIv/bAC8AN//LAC8AOf/HAC8AOv/TAC8APP+PAC8Anv+PAC8A2v+PADAABP/sADAAD//XADAAEf/XADAARP/sADAARv/sADAAR//sADAASP/sADAATP/LADAAUf/sADAAUv/sADAAWP/sADAAof/sADAAov/sADAAo//sADAApP/sADAApf/sADAApv/sADAAp//sADAAqf/sADAAqv/sADAAq//sADAArP/sADAAs//sADAAtP/sADAAtf/sADAAtv/sADAAt//sADAAuv/sADAAu//sADAAvP/sADAAvf/sADEAD//XADEAEf/XADEARP/sADEASP/sADEATP/LADEAUv/sADEAWP/sADEAof/sADEAov/sADEAo//sADEApP/sADEApf/sADEApv/sADEAp//sADEAqf/sADEAqv/sADEAq//sADEArP/sADEAs//sADEAtP/sADEAtf/sADEAtv/sADEAt//sADEAuv/sADEAu//sADEAvP/sADEAvf/sADIAD//HADIAEf/HADIAEv/nADIAPP/XADIATP/XADIATv/XADIAT//XADIAnv/XADIA2v/XADMAD/5WADMAEf5WADMAEv+qADMAnv/sADMA2v/sADQAD//HADQAEf/HADQAEv/nADQAPP/XADQATP/XADQATv/XADQAT//XADQAnv/XADQA2v/XADUAPP/XADUAnv/XADUA2v/XADYAD//bADYAEf/bADYAPP/XADYATP/sADYATv/sADYAT//sADYAnv/XADYA2v/XADcAD/9YADcAEP+6ADcAEf9YADcAEv+NADcAHf+uADcAHv+uADcAJP/DADcALf8zADcARP+iADcASP+uADcAUP/DADcAUv+uADcAVf/DADcAVv+eADcAWP/DADcAWv+uADcAXf/bADcAgf/DADcAgv/DADcAg//DADcAhP/DADcAhf/DADcAhv/DADcAof+iADcAov+iADcAo/+iADcApP+iADcApf+iADcApv+iADcAp/+iADcAqf+uADcAqv+uADcAq/+uADcArP+uADcAs/+uADcAtP+uADcAtf+uADcAtv+uADcAt/+uADcAuv/DADcAu//DADcAvP/DADcAvf/DADcAx/8zADgAD//HADgAEf/HADgAEv/nADgATP/fADkAD/9UADkAEf9UADkAEv99ADkAJP/XADkARP/fADkASP/nADkAUv/nADkAgf/XADkAgv/XADkAg//XADkAhP/XADkAhf/XADkAhv/XADkAof/fADkAov/fADkAo//fADkApP/fADkApf/fADkApv/fADkAp//fADkAqf/nADkAqv/nADkAq//nADkArP/nADkAs//nADkAtP/nADkAtf/nADkAtv/nADkAt//nADoAD/9cADoAEf9cADoAEv+JADoAJP/XADoARP/bADoAR//jADoASP/jADoAUv/jADoAgf/XADoAgv/XADoAg//XADoAhP/XADoAhf/XADoAhv/XADoAof/bADoAov/bADoAo//bADoApP/bADoApf/bADoApv/bADoAp//bADoAqf/jADoAqv/jADoAq//jADoArP/jADoAs//jADoAtP/jADoAtf/jADoAtv/jADoAt//jADoAxP/sADwAJP+aADwARP+uADwASP+uADwAUv+uADwAWP/DADwAgf+aADwAgv+aADwAg/+aADwAhP+aADwAhf+aADwAhv+aADwAof+uADwAov+uADwAo/+uADwApP+uADwApf+uADwApv+uADwAp/+uADwAqf+uADwAqv+uADwAq/+uADwArP+uADwAs/+uADwAtP+uADwAtf+uADwAtv+uADwAt/+uADwAuv/DADwAu//DADwAvP/DADwAvf/DAEQAIv9xAEUAD//sAEUAEf/sAEUAIv9tAEUAT//sAEYAD//sAEYAEf/sAEYAIv9tAEYATv/sAEYAT//s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AXQAAwABBAkACAAeAcIAAwABBAkACQAeAcIAAwABBAkACwAsAeAAAwABBAkADAAsAeAAAwABBAkADQEgAgwAAwABBAkADgA0AywAQwBvAHAAeQByAGkAZwBoAHQAIAAoAGMAKQAgADIAMAAxADEALAAgAE0AYQB0AHQAaABlAHcAIABEAGUAcwBtAG8AbgBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AbQBhAGQAdAB5AHAAZQAuAGMAbwBtACAAfAAgAG0AYQB0AHQAZABlAHMAbQBvAG4AZABAAGcAbQBhAGkAbAAuAGMAbwBtACkALAAgAHcAaQB0AGgAIABSAGUAcwBlAHIAdgBlAGQAIABGAG8AbgB0ACAATgBhAG0AZQAgAEEAYgBlAGwALgBBAGIAZQBsAFIAZQBnAHUAbABhAHIAMQAuADAAMAAzADsATQBBAEQAVAA7AEEAYgBlAGwALQBSAGUAZwB1AGwAYQByAEEAYgBlAGwAIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADMAQQBiAGUAbAAtAFIAZQBnAHUAbABhAHIAQQBiAGUAbAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAE0AYQB0AHQAaABlAHcAIABEAGUAcwBtAG8AbgBkAC4ATQBhAHQAdABoAGUAdwAgAEQAZQBzAG0AbwBuAGQAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAG0AYQBkAHQAeQBwAGUALgBjAG8AbQBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgAgAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAACAAAAAAAA/o8AUgAAAAAAAAAAAAAAAAAAAAAAAAAAAPsAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAQIAowCEAIUAvQCWAOgAhgCOAIsAnQCpAKQAigDaAIMAkwDyAPMAjQCXAIgAwwDeAPEAngCqAPUA9AD2AKIArQDJAMcArgBiAGMAkABkAMsAZQDIAMoAzwDMAM0AzgDpAGYA0wDQANEArwBnAPAAkQDWANQA1QBoAOsA7QCJAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcA6gB4AHoAeQB7AH0AfAC4AKEAfwB+AIAAgQDsAO4AugEDAQQBBQDXAQYBBwEIAQkBCgELAQwBDQDiAOMBDgEPALAAsQEQAREBEgETARQA5ADlALsA5gDnAKYA2ADhANsA3ADdAOAA2QDfARUAsgCzALYAtwDEALQAtQDFAIIAwgCHAKsAvgC/ALwBFgCMAO8BFwEYB3VuaTAwQTAEaGJhcgZJdGlsZGUGaXRpbGRlAklKAmlqC0pjaXJjdW1mbGV4C2pjaXJjdW1mbGV4DGtjb21tYWFjY2VudAxrZ3JlZW5sYW5kaWMKTGRvdGFjY2VudARsZG90Bk5hY3V0ZQZuYWN1dGUGUmFjdXRlDFJjb21tYWFjY2VudAxyY29tbWFhY2NlbnQGUmNhcm9uBnJjYXJvbgxkb3RhY2NlbnRjbWIERXVybwhkb3RsZXNzagtjb21tYWFjY2VudAAAAQAB//8ADw==);
    }

    .protondb-decky-indicator {
      border: none;
      z-index: 20;
      display: flex;
      align-items: center;
      width: max-content;
      height: max-content;
      border-radius: 0;
      color: black;
    }

    .protondb-decky-indicator.gpfocus, .protondb-decky-indicator:hover {
      filter: brightness(1.3);
      outline: 2px solid black;
    }

    .protondb-decky-indicator span {
      height: max-content;
      font-family: Abel,"Motiva Sans",Arial,Helvetica,sans-serif;
    }

    .protondb-decky-indicator-platinum {
      background: rgb(180, 199, 220);
      color: #000000;
      outline-color: rgb(180, 199, 220);
    }

    .protondb-decky-indicator-gold {
      background: rgb(207, 181, 59);
      color: #000000;
      outline-color: rgb(207, 181, 59);
    }

    .protondb-decky-indicator-silver {
      background: rgb(166, 166, 166);
      color: #000000;
      outline-color: rgb(166, 166, 166);
    }

    .protondb-decky-indicator-bronze {
      background: rgb(205, 127, 50);
      color: #000000;
      outline-color: rgb(205, 127, 50);
    }

    .protondb-decky-indicator-borked {
      background: red;
      color: #000000;
      outline-color: red;
    }

    .protondb-decky-indicator-pending {
      background: rgb(68, 68, 68);
      color: #FFFFFF;
      outline-color: rgb(68, 68, 68);
    }

    .protondb-decky-indicator-regular {
      flex-direction: row;
      padding: 6px 18px;
    }

    .protondb-decky-indicator-regular > div {
      height: 28px;
    }

    .protondb-decky-indicator-regular > div > svg {
      width: 28px;
      height: 28px;
    }

    .protondb-decky-indicator-regular > span {
      margin-left: 10px;
      font-size: 24px;
      line-height: 24px;
      margin-right: 28px;
      white-space: nowrap;
    }

    .protondb-decky-indicator-small {
      flex-direction: column;
      padding: 6px 8px;
    }

    .protondb-decky-indicator-small > div {
      height: 20px;
    }

    .protondb-decky-indicator-small > div > svg {
      width: 20px;
      height: 20px;
    }

    .protondb-decky-indicator-small > span {
      margin-left: 0;
      font-size: 12px;
      width: auto;
      line-height: 12px;
      margin-right: 0;
    }

    .protondb-decky-indicator-minimalist {
      padding: 6px;
    }

    .protondb-decky-indicator-minimalist > div {
      height: 20px;
    }

    .protondb-decky-indicator-minimalist > div > svg {
      width: 20px;
      height: 20px;
    }

    .protondb-decky-indicator-minimalist > span {
      display: none;
    }

    .protondb-decky-indicator-label-on-hover-small:hover,
    .protondb-decky-indicator-label-on-hover-small.gpfocus {
      flex-direction: column;
      padding: 6px 8px;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus {
      flex-direction: row;
      padding: 6px 18px;
    }

    .protondb-decky-indicator-label-on-hover-small:hover > span,
    .protondb-decky-indicator-label-on-hover-small.gpfocus > span {
      display: block;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover > div,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus > div {
      height: 28px;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover > div > svg,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus > div > svg {
      width: 28px;
      height: 28px;
    }

    .protondb-decky-indicator-label-on-hover-regular:hover > span,
    .protondb-decky-indicator-label-on-hover-regular.gpfocus > span {
      display: block;
      margin-left: 10px;
      font-size: 24px;
      line-height: 24px;
      margin-right: 28px;
      white-space: nowrap;
    }

    .protondb-decky-submit-button {
      background: rgb(166, 166, 166);
      border: none;
      border-radius: 8px;
      padding: 6px 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Abel, "Motiva Sans", Arial, Helvetica, sans-serif;
      color: #000000;
    }

    .protondb-decky-submit-button.gpfocus, .protondb-decky-submit-button:hover {
      background: #8a8a8a;
      outline: 2px solid black;
    }

    .protondb-decky-submit-button > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 28px;
    }

    .protondb-decky-submit-button > div > svg {
      width: 28px;
      height: 28px;
    }

    .protondb-decky-submit-button > span {
      margin-left: 10px;
      font-size: 24px;
      white-space: nowrap;
      line-height: 24px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-small {
      padding: 6px 12px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-small > div {
      height: 20px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-small > span {
      font-size: 12px;
      line-height: 12px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-small > div > svg {
      width: 20px;
      height: 20px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-minimalist {
      padding: 6px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-minimalist > div {
      height: 20px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-minimalist > span {
      display: none;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-minimalist > div > svg {
      width: 20px;
      height: 20px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-label-on-hover-small:hover > span,
    .protondb-decky-submit-button.protondb-decky-indicator-label-on-hover-small.gpfocus > span {
      display: block;
      font-size: 12px;
      line-height: 12px;
    }

    .protondb-decky-submit-button.protondb-decky-indicator-label-on-hover-regular:hover > span,
    .protondb-decky-submit-button.protondb-decky-indicator-label-on-hover-regular.gpfocus > span {
      display: block;
      margin-left: 10px;
      font-size: 24px;
      line-height: 24px;
    }

    .protondb-decky-submit-button.protondb-decky-not-logged-in {
      background: #ff6b35;
      border: 1px solid #e55a2e;
    }

    .protondb-decky-submit-button.protondb-decky-not-logged-in.gpfocus,
    .protondb-decky-submit-button.protondb-decky-not-logged-in:hover {
      background: #ff7a4a;
    }

    /* Store page specific styles */
    .protondb-store-context {
      position: relative;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }

    .protondb-store-context .protondb-decky-indicator {
      /* Ensure badges flow naturally in store context */
      position: static;
    }
`));

const DeckButton = Button;
const TOP_POSITIONS = {
    tl: { top: '40px', left: '20px' },
    tr: { top: '60px', right: '20px' },
    tm: { top: '60px', left: '50%', transform: 'translateX(-50%)' }
};
const BOTTOM_OFFSET = 40; // pixels from bottom of hero image
function getPositionStyle(position, heroHeight) {
    if (position in TOP_POSITIONS) {
        return TOP_POSITIONS[position];
    }
    // For bottom positions, calculate based on hero height
    const topValue = heroHeight ? `${heroHeight - BOTTOM_OFFSET}px` : '290px'; // fallback if height unknown
    switch (position) {
        case 'bl':
            return { top: topValue, left: '20px' };
        case 'br':
            return { top: topValue, right: '20px' };
        case 'bm':
            return { top: topValue, left: '50%', transform: 'translateX(-50%)' };
        default:
            return TOP_POSITIONS.tl;
    }
}
function findTopCapsuleParent(ref) {
    const children = ref?.parentElement?.children;
    if (!children) {
        return null;
    }
    let headerContainer;
    for (const child of children) {
        if (child.className.includes(DFL.appDetailsClasses.Header)) {
            headerContainer = child;
            break;
        }
    }
    if (!headerContainer) {
        return null;
    }
    let topCapsule = null;
    for (const child of headerContainer.children) {
        if (child.className.includes(DFL.appDetailsHeaderClasses.TopCapsule)) {
            topCapsule = child;
            break;
        }
    }
    return topCapsule;
}
function ProtonMedal({ hideSubmit = false, context = 'library', appId: propAppId }) {
    const t = useTranslations();
    const detectedAppId = useAppId();
    const appId = propAppId || detectedAppId;
    const { protonDBTier, linuxSupport, refresh } = useBadgeData(appId);
    const { settings, loading } = useSettings();
    const { isLoggedIn, isLoading: authLoading, recheckLoginStatus } = useProtonDBAuth();
    // There will be no mutation when the page is loaded (either from exiting the game
    // or just newly opening the page), therefore it's visible by default.
    const [show, setShow] = SP_REACT.useState(true);
    const [heroHeight, setHeroHeight] = SP_REACT.useState(null);
    const ref = SP_REACT.useRef(null);
    // Combined effect for mutation observer and height measurement
    SP_REACT.useEffect(() => {
        // Only observe mutations for library context
        if (context !== 'library') {
            return;
        }
        let mutationObserver = null;
        let resizeObserver = null;
        let retryTimeout = null;
        const setupObservers = () => {
            const topCapsule = findTopCapsuleParent(ref?.current);
            if (!topCapsule) {
                // Retry after a short delay - the DOM might not be fully ready
                retryTimeout = setTimeout(setupObservers, 100);
                return;
            }
            // Set up mutation observer for fullscreen detection
            mutationObserver = new MutationObserver((entries) => {
                for (const entry of entries) {
                    if (entry.type !== "attributes" || entry.attributeName !== "class") {
                        continue;
                    }
                    const className = entry.target.className;
                    const fullscreenMode = className.includes(DFL.appDetailsHeaderClasses.FullscreenEnterStart) ||
                        className.includes(DFL.appDetailsHeaderClasses.FullscreenEnterActive) ||
                        className.includes(DFL.appDetailsHeaderClasses.FullscreenEnterDone) ||
                        className.includes(DFL.appDetailsHeaderClasses.FullscreenExitStart) ||
                        className.includes(DFL.appDetailsHeaderClasses.FullscreenExitActive);
                    const fullscreenAborted = className.includes(DFL.appDetailsHeaderClasses.FullscreenExitDone);
                    setShow(!fullscreenMode || fullscreenAborted);
                }
            });
            mutationObserver.observe(topCapsule, { attributes: true, attributeFilter: ["class"] });
            // Set up height measurement
            const updateHeight = () => {
                const height = topCapsule.getBoundingClientRect().height;
                setHeroHeight(height);
            };
            updateHeight();
            // Observe for resize changes
            resizeObserver = new ResizeObserver(updateHeight);
            resizeObserver.observe(topCapsule);
        };
        // Start setup after a micro-task to ensure ref is attached
        setTimeout(setupObservers, 0);
        return () => {
            if (retryTimeout)
                clearTimeout(retryTimeout);
            if (mutationObserver)
                mutationObserver.disconnect();
            if (resizeObserver)
                resizeObserver.disconnect();
        };
    }, [context]);
    // Don't render for non-Steam games (no valid appId means it's not a Steam game)
    if (!appId) {
        return SP_REACT.createElement(SP_REACT.Fragment, null);
    }
    // Don't render library badge if disabled in settings
    if (context === 'library' && !settings.enableLibraryBadge) {
        return SP_REACT.createElement(SP_REACT.Fragment, null);
    }
    const tierClass = `protondb-decky-indicator-${protonDBTier || 'silver'}`;
    const nativeClass = linuxSupport ? 'protondb-decky-indicator-native' : '';
    const sizeClass = `protondb-decky-indicator-${settings.size || 'regular'}`;
    const labelTypeOnHoverClass = settings.size !== 'minimalist' || settings.labelTypeOnHover === 'off'
        ? ''
        : `protondb-decky-indicator-label-on-hover-${settings.labelTypeOnHover}`;
    // Conditional styling based on context
    const containerStyle = context === 'store'
        ? {
            position: 'relative',
            marginTop: '16px',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'flex-start'
        }
        : {
            position: 'absolute',
            ...getPositionStyle(settings.position, heroHeight)
        };
    const containerClassName = context === 'store'
        ? 'protondb-decky-indicator-container protondb-store-context'
        : 'protondb-decky-indicator-container';
    return (SP_REACT.createElement("div", { ref: ref, className: containerClassName, style: containerStyle }, show && !loading &&
        SP_REACT.createElement(SP_REACT.Fragment, null,
            style,
            SP_REACT.createElement(DFL.Focusable, { style: { display: 'flex', gap: '8px' }, "flow-children": "row" },
                SP_REACT.createElement(DeckButton, { className: `protondb-decky-indicator ${tierClass} ${nativeClass} ${sizeClass} ${labelTypeOnHoverClass}`, type: "button", onClick: async () => {
                        refresh();
                        DFL.Navigation.NavigateToExternalWeb(`https://www.protondb.com/app/${appId}`);
                    } },
                    SP_REACT.createElement("div", null,
                        linuxSupport ? (SP_REACT.createElement(IoLogoTux, { style: { marginRight: 10 } })) : (SP_REACT.createElement(SP_REACT.Fragment, null)),
                        SP_REACT.createElement(FaReact, null)),
                    SP_REACT.createElement("span", null, (() => {
                        const text = protonDBTier ? (settings.size === 'small' ||
                            (settings.size === 'minimalist' &&
                                settings.labelTypeOnHover !== 'regular')
                            ? t(`tierMin${protonDBTier}`)
                            : t(`tier${protonDBTier}`)) : (t('noReport'));
                        // Limit to 20 characters max
                        return text.length > 20 ? text.slice(0, 20) : text;
                    })())),
                !settings.disableSubmit && !hideSubmit && (SP_REACT.createElement(DeckButton, { className: `protondb-decky-indicator protondb-decky-submit-button ${sizeClass} ${labelTypeOnHoverClass} ${isLoggedIn === false ? 'protondb-decky-not-logged-in' : ''}`, type: "button", onClick: async () => {
                        if (isLoggedIn === false) {
                            // User is not logged in, direct them to profile page to login
                            DFL.Navigation.NavigateToExternalWeb('https://www.protondb.com/profile');
                        }
                        else {
                            // User is logged in or status unknown, go to contribute page
                            DFL.Navigation.NavigateToExternalWeb(`https://www.protondb.com/contribute?appId=${appId}`);
                        }
                        // Recheck login status after user potentially logs in
                        setTimeout(() => {
                            recheckLoginStatus();
                        }, 2000);
                    } },
                    SP_REACT.createElement("div", null,
                        SP_REACT.createElement(FaPaperPlane, null)),
                    settings.size !== 'minimalist' && (SP_REACT.createElement("span", null, authLoading ? t('loading') : (isLoggedIn === false ? t('login') : t('submit'))))))))));
}

function patchLibraryApp() {
    return routerHook.addPatch('/library/app/:appid', (tree) => {
        const routeProps = DFL.findInReactTree(tree, (x) => x?.renderFunc);
        if (routeProps) {
            const patchHandler = DFL.createReactTreePatcher([
                (tree) => DFL.findInReactTree(tree, (x) => x?.props?.children?.props?.overview)?.props?.children
            ], (_, ret) => {
                const container = DFL.findInReactTree(ret, (x) => Array.isArray(x?.props?.children) &&
                    x?.props?.className?.includes(DFL.appDetailsClasses.InnerContainer));
                if (typeof container !== 'object') {
                    return ret;
                }
                container.props.children.splice(1, 0, SP_REACT.createElement(ProtonMedal, null));
                return ret;
            });
            DFL.afterPatch(routeProps, "renderFunc", patchHandler);
        }
        return tree;
    });
}

const FETCH_TIMEOUT_MS = 2000;
// Helper function to add timeout to fetch requests
async function fetchWithTimeout(fetchPromise, timeoutMs = FETCH_TIMEOUT_MS) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeoutMs);
    });
    return Promise.race([fetchPromise, timeoutPromise]);
}
// Store app ID observable - components can subscribe to this
const storeAppId$ = new BehaviorSubject('');
// Tier colors matching the library badge
const TIER_COLORS = {
    platinum: { bg: 'rgb(180, 199, 220)', text: '#000000', border: 'rgb(180, 199, 220)' },
    gold: { bg: 'rgb(207, 181, 59)', text: '#000000', border: 'rgb(207, 181, 59)' },
    silver: { bg: 'rgb(166, 166, 166)', text: '#000000', border: 'rgb(166, 166, 166)' },
    bronze: { bg: 'rgb(205, 127, 50)', text: '#000000', border: 'rgb(205, 127, 50)' },
    borked: { bg: 'rgb(255, 0, 0)', text: '#000000', border: 'rgb(255, 0, 0)' },
    pending: { bg: 'rgb(68, 68, 68)', text: '#FFFFFF', border: 'rgb(68, 68, 68)' }
};
// Track if we're currently in the store
let isStoreMounted = false;
let storeWebSocket = null;
let historyUnlisten = null;
let messageId = 1;
// Find Steam's internal history object
const HistoryModule = DFL.findModuleExport((exp) => exp?.m_history !== undefined);
const History = HistoryModule?.m_history;
// Track if WebSocket is ready for injection
let wsReady = false;
// Inject badge into store page via WebSocket debugger
async function injectBadgeIntoStore(appId) {
    // Check if store badge is enabled in settings
    if (!SettingsContext.value.enableStoreBadge) {
        return;
    }
    if (!storeWebSocket || storeWebSocket.readyState !== WebSocket.OPEN || !wsReady) {
        return;
    }
    // Fetch ProtonDB data
    let tier = 'pending';
    let tierLabel = 'NO REPORT';
    try {
        const response = await fetchWithTimeout(fetchNoCors(`https://www.protondb.com/api/v1/reports/summaries/${appId}.json`));
        if (response.ok) {
            const data = await response.json();
            if (data.tier) {
                tier = data.tier;
                tierLabel = tier.toUpperCase();
            }
        }
    }
    catch (e) {
        // Silently fail - will show NO REPORT
    }
    // Get tier colors
    const tierColor = TIER_COLORS[tier] || TIER_COLORS.pending;
    const injectScript = `
    (function() {
      // Remove existing badge if any
      const existing = document.getElementById('protondb-store-badge');
      if (existing) existing.remove();

      // Create badge container (matching library badge regular size styling)
      const badge = document.createElement('div');
      badge.id = 'protondb-store-badge';
      badge.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 999999; background: ${tierColor.bg}; padding: 6px 18px; border-radius: 8px; color: ${tierColor.text}; cursor: pointer; display: flex; align-items: center; width: max-content; height: max-content;';
      badge.innerHTML = '<span style="font-size: 28px; line-height: 28px;">⚛️</span><span style="margin-left: 10px; font-size: 24px; line-height: 24px; white-space: nowrap;">${tierLabel}</span>';
      badge.onclick = function() { window.open('https://www.protondb.com/app/${appId}', '_blank'); };
      document.body.appendChild(badge);
    })();
  `;
    storeWebSocket.send(JSON.stringify({
        id: messageId++,
        method: 'Runtime.evaluate',
        params: { expression: injectScript }
    }));
}
// Remove badge from store page
function removeBadgeFromStore() {
    if (!storeWebSocket || storeWebSocket.readyState !== WebSocket.OPEN) {
        return;
    }
    const removeScript = `
    (function() {
      const badge = document.getElementById('protondb-store-badge');
      if (badge) badge.remove();
    })();
  `;
    storeWebSocket.send(JSON.stringify({
        id: messageId++,
        method: 'Runtime.evaluate',
        params: { expression: removeScript }
    }));
}
// Extract app ID from Steam store URL - only from app pages
function extractAppIdFromUrl(url) {
    // Only match URLs that are specifically app pages
    if (!url.includes('https://store.steampowered.com/app/')) {
        return '';
    }
    const match = url.match(/\/app\/([\d]+)\/?/);
    return match?.[1] ?? '';
}
// Update the app ID from URL
function updateAppIdFromUrl(url) {
    const appId = extractAppIdFromUrl(url);
    if (storeAppId$.value !== appId) {
        storeAppId$.next(appId);
        // Inject or remove badge based on app ID
        if (appId) {
            injectBadgeIntoStore(appId);
        }
        else {
            removeBadgeFromStore();
        }
    }
}
// Connect to Chrome WebSocket debugger to listen for store navigation
async function connectToStoreDebugger(retries = 3) {
    if (retries <= 0 || !isStoreMounted) {
        return;
    }
    try {
        // Fetch available browser tabs from debugger port
        const response = await fetchNoCors('http://localhost:8080/json');
        const tabs = await response.json();
        // Find the Steam store tab
        const storeTab = tabs.find((tab) => tab.url.includes('store.steampowered.com'));
        if (!storeTab) {
            // Store tab not found, retry after delay
            setTimeout(() => connectToStoreDebugger(retries - 1), 1000);
            return;
        }
        // Initial app ID from current URL
        updateAppIdFromUrl(storeTab.url);
        // Connect to WebSocket debugger
        storeWebSocket = new WebSocket(storeTab.webSocketDebuggerUrl);
        storeWebSocket.onopen = (event) => {
            const ws = event.target;
            // Enable page events to receive navigation notifications
            ws.send(JSON.stringify({ id: messageId++, method: 'Page.enable' }));
            // Enable runtime for script injection
            ws.send(JSON.stringify({ id: messageId++, method: 'Runtime.enable' }));
            // Mark WebSocket as ready after a short delay for Runtime to initialize
            setTimeout(() => {
                wsReady = true;
                // Inject badge for initial URL if we have an app ID
                const currentAppId = storeAppId$.value;
                if (currentAppId) {
                    injectBadgeIntoStore(currentAppId);
                }
            }, 300);
        };
        storeWebSocket.onmessage = (event) => {
            if (!isStoreMounted)
                return;
            try {
                const data = JSON.parse(event.data);
                // Listen for frame navigation events
                if (data.method === 'Page.frameNavigated' && data.params?.frame?.url) {
                    // Delay injection to let the page load
                    setTimeout(() => {
                        updateAppIdFromUrl(data.params.frame.url);
                    }, 500);
                }
            }
            catch (e) {
                // Silently ignore parse errors
            }
        };
        storeWebSocket.onerror = () => {
            if (isStoreMounted) {
                setTimeout(() => connectToStoreDebugger(retries - 1), 1000);
            }
        };
        storeWebSocket.onclose = () => {
            storeWebSocket = null;
            wsReady = false;
            // Reconnect if still mounted
            if (isStoreMounted) {
                setTimeout(() => connectToStoreDebugger(retries), 1000);
            }
        };
    }
    catch (e) {
        if (isStoreMounted) {
            setTimeout(() => connectToStoreDebugger(retries - 1), 1000);
        }
    }
}
// Disconnect from WebSocket debugger
function disconnectStoreDebugger() {
    // Remove badge before disconnecting
    removeBadgeFromStore();
    isStoreMounted = false;
    wsReady = false;
    storeAppId$.next('');
    if (storeWebSocket) {
        storeWebSocket.close();
        storeWebSocket = null;
    }
}
// Handle location changes in Steam's router
function handleLocationChange(pathname) {
    if (pathname === '/steamweb') {
        // User entered the store view
        isStoreMounted = true;
        connectToStoreDebugger();
    }
    else if (isStoreMounted) {
        // User left the store view
        disconnectStoreDebugger();
    }
}
// Initialize store patching
function initStorePatch() {
    if (!History) {
        return () => { };
    }
    // Check initial location
    handleLocationChange(History.location?.pathname || '');
    // Listen for route changes
    historyUnlisten = History.listen((info) => {
        handleLocationChange(info.pathname);
    });
    // Return cleanup function
    return () => {
        if (historyUnlisten) {
            historyUnlisten();
            historyUnlisten = null;
        }
        disconnectStoreDebugger();
    };
}

var index = DFL.definePlugin(() => {
    loadSettings();
    const libraryPatch = patchLibraryApp();
    const stopStorePatch = initStorePatch();
    // Register store overlay as global component (renders on all routes)
    routerHook.addGlobalComponent('ProtonDBStoreOverlay', StoreOverlay);
    return {
        title: SP_REACT.createElement("div", { className: DFL.staticClasses.Title }, "ProtonDB Badges Extended"),
        icon: SP_REACT.createElement(FaReact, null),
        content: SP_REACT.createElement(Index, null),
        onDismount() {
            routerHook.removePatch('/library/app/:appid', libraryPatch);
            routerHook.removeGlobalComponent('ProtonDBStoreOverlay');
            stopStorePatch();
        }
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
