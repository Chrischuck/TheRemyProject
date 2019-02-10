function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';

var IconInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconInput, _React$Component);

  function IconInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderIcon", function (type) {
      switch (type) {
        case 'user':
          return React.createElement("svg", {
            height: "19",
            "aria-hidden": "true",
            "data-prefix": "far",
            "data-icon": "user",
            class: "svg-inline--fa fa-user fa-w-14",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512"
          }, React.createElement("path", {
            fill: "rgb(66, 90, 112)",
            d: "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
          }));

        case 'email':
          return React.createElement("svg", {
            height: "19",
            "aria-hidden": "true",
            "data-prefix": "far",
            "data-icon": "envelope",
            class: "svg-inline--fa fa-envelope fa-w-16",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }, React.createElement("path", {
            fill: "rgb(66, 90, 112)",
            d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
          }));

        case 'password':
          return React.createElement("svg", {
            height: "19",
            "aria-hidden": "true",
            "data-prefix": "fas",
            "data-icon": "key",
            class: "svg-inline--fa fa-key fa-w-16",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }, React.createElement("path", {
            fill: "rgb(66, 90, 112)",
            d: "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
          }));

        case 'location':
          return React.createElement("svg", {
            height: "19",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "map-marker-alt",
            class: "svg-inline--fa fa-map-marker-alt fa-w-12",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512"
          }, React.createElement("path", {
            fill: "rgb(66, 90, 112)",
            d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          }));

        case 'time':
          return React.createElement("svg", {
            height: "19",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "far",
            "data-icon": "clock",
            class: "svg-inline--fa fa-clock fa-w-16",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }, React.createElement("path", {
            fill: "rgb(66, 90, 112)",
            d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
          }));

        case 'phone':
          return React.createElement("svg", {
            height: "19",
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "phone",
            class: "svg-inline--fa fa-phone fa-w-16",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }, React.createElement("path", {
            fill: "rgb(66, 90, 112)",
            d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          }));
      }
    });

    return _this;
  }

  _createClass(IconInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? '' : _this$props$value,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          name = _this$props.name,
          label = _this$props.label,
          iconType = _this$props.iconType,
          type = _this$props.type,
          error = _this$props.error,
          errorMessage = _this$props.errorMessage,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      var err = label ? ' - ' + errorMessage : errorMessage;
      return React.createElement("div", {
        style: _objectSpread({
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }, style)
      }, React.createElement("p", {
        style: {
          margin: 0,
          textAlign: 'left'
        }
      }, label, " ", React.createElement("span", {
        style: {
          color: 'red'
        }
      }, " ", error ? err : '', " ")), React.createElement("div", {
        className: "icon-input-container"
      }, React.createElement("div", {
        className: "input-icon-container"
      }, this.renderIcon(iconType)), value ? React.createElement("input", {
        value: value,
        type: type,
        name: name,
        className: "text-input icon-input",
        onChange: onChange,
        placeholder: placeholder
      }) : React.createElement("input", {
        type: type,
        name: name,
        className: "text-input icon-input",
        onChange: onChange,
        placeholder: placeholder
      })));
    }
  }]);

  return IconInput;
}(React.Component);

export default IconInput;