(function (deckyFrontendLib, React) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
  };
  var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

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
      return React__default["default"].createElement(node.tag, __assign({
        key: i
      }, node.attr), Tree2Element(node.child));
    });
  }

  function GenIcon(data) {
    return function (props) {
      return React__default["default"].createElement(IconBase, __assign({
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
      if (props.className) className = (className ? className + ' ' : '') + props.className;
      return React__default["default"].createElement("svg", __assign({
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
      }), title && React__default["default"].createElement("title", null, title), props.children);
    };

    return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
      return elem(conf);
    }) : elem(DefaultContext);
  }

  // THIS FILE IS AUTO GENERATED
  function CgLoadbarSound (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 6H13V18H11V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13H9V18H7V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 9H17V18H15V9Z","fill":"currentColor"}}]})(props);
  }

  // THIS FILE IS AUTO GENERATED
  function MdPause (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}}]})(props);
  }function MdPlayArrow (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M8 5v14l11-7z"}}]})(props);
  }function MdSkipNext (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"}}]})(props);
  }function MdSkipPrevious (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6 6h2v12H6zm3.5 6l8.5 6V6z"}}]})(props);
  }function MdComputer (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}}]})(props);
  }function MdOutlineSmartphone (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"}}]})(props);
  }

  const Content = ({ serverAPI }) => {
      const [sinkInputs, setSinkInputs] = React.useState([]);
      const fetchSinkInputs = async () => {
          const data = await serverAPI.callPluginMethod("get_sink_inputs", {});
          if (data.success) {
              data.result.sort((a, b) => {
                  /* Sort sink inputs:
                  // Show bluetooth devices first
                  // then sort by application name
                  */
                  if (a.name === 'Steam') {
                      return 1;
                  }
                  if (a.device) {
                      return -1;
                  }
                  else if (b.device) {
                      return 1;
                  }
                  if (a.name > b.name) {
                      return -1;
                  }
                  else {
                      return 1;
                  }
              });
              setSinkInputs(data.result);
          }
          else {
              console.error('[VolumeMixer] Error while calling get_sink_inputs');
          }
      };
      const setInputVolume = async (index, volume) => {
          const data = await serverAPI.callPluginMethod("set_input_volume", { index, volume });
          if (data.success) {
              fetchSinkInputs();
          }
      };
      const sendPlayerCommand = async (address, command) => {
          await serverAPI.callPluginMethod("send_player_cmd", { address, command });
          if (command === 'TOGGLEPLAY') {
              const index = sinkInputs.findIndex((obj) => obj.device?.address === address);
              const playerStatus = sinkInputs[index].device?.playerStatus;
              if (playerStatus === 'playing') {
                  sinkInputs[index].device.playerStatus = 'paused';
              }
              else {
                  sinkInputs[index].device.playerStatus = 'playing';
              }
              setSinkInputs(sinkInputs);
          }
          fetchSinkInputs();
      };
      const getIconLabel = (icon, label) => {
          if (icon === 'phone') {
              return (window.SP_REACT.createElement("div", { style: { display: 'flex', gap: '1rem', alignItems: 'baseline' } },
                  window.SP_REACT.createElement(MdOutlineSmartphone, null),
                  window.SP_REACT.createElement("p", { style: { margin: 0 } }, label)));
          }
          else if (icon === 'computer') {
              return (window.SP_REACT.createElement("div", { style: { display: 'flex', gap: '1rem', alignItems: 'baseline' } },
                  window.SP_REACT.createElement(MdComputer, null),
                  window.SP_REACT.createElement("p", { style: { margin: 0 } }, label)));
          }
          else {
              return label;
          }
      };
      React.useEffect(() => {
          fetchSinkInputs();
          const interval = setInterval(() => {
              fetchSinkInputs();
          }, 5000);
          return () => clearInterval(interval);
      }, []);
      return (window.SP_REACT.createElement(deckyFrontendLib.PanelSection, null, sinkInputs.map(sinkInput => {
          let label = sinkInput.device?.batteryPct ? `${sinkInput.name} • Battery: ${sinkInput.device.batteryPct}%` : sinkInput.name;
          if (sinkInput.device?.icon) {
              label = getIconLabel(sinkInput.device.icon, label);
          }
          return (window.SP_REACT.createElement(deckyFrontendLib.PanelSectionRow, null,
              window.SP_REACT.createElement(deckyFrontendLib.SliderField, { bottomSeparator: "none", min: 0, max: 1, step: 0.05, value: sinkInput.volume, label: label, disabled: !sinkInput.index, description: sinkInput.codec, onChange: (volume) => setInputVolume(sinkInput.index, volume) }),
              sinkInput.device &&
                  window.SP_REACT.createElement(deckyFrontendLib.Focusable, { style: { display: 'flex', alignItems: 'center', gap: '1rem' }, "flow-children": "horizontal" },
                      window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { style: { width: '33%', minWidth: 0 }, onClick: () => sendPlayerCommand(sinkInput.device.address, 'PREVIOUS') },
                          window.SP_REACT.createElement(MdSkipPrevious, null)),
                      window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { style: { width: '33%', minWidth: 0 }, onClick: () => sendPlayerCommand(sinkInput.device.address, 'TOGGLEPLAY') }, sinkInput.device.playerStatus === 'playing' ? window.SP_REACT.createElement(MdPause, null) : window.SP_REACT.createElement(MdPlayArrow, null)),
                      window.SP_REACT.createElement(deckyFrontendLib.DialogButton, { style: { width: '33%', minWidth: 0 }, onClick: () => sendPlayerCommand(sinkInput.device.address, 'NEXT') },
                          window.SP_REACT.createElement(MdSkipNext, null)))));
      })));
  };
  var index = deckyFrontendLib.definePlugin((serverApi) => {
      return {
          title: window.SP_REACT.createElement("div", { className: deckyFrontendLib.staticClasses.Title }, "Volume Mixer"),
          content: window.SP_REACT.createElement(Content, { serverAPI: serverApi }),
          icon: window.SP_REACT.createElement(CgLoadbarSound, null),
      };
  });

  return index;

})(DFL, SP_REACT);
