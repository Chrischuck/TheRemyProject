function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var FAB =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FAB, _React$PureComponent);

  function FAB(props) {
    var _this;

    _classCallCheck(this, FAB);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FAB).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusChange", function () {
      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isInputFocus", function () {
      var t = document.activeElement.type;
      return t === 'text' || t === 'password' || t === 'email';
    });

    document.addEventListener('focusin', _this.focusChange, false);
    document.addEventListener('focusout', _this.focusChange, false);
    return _this;
  }

  _createClass(FAB, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('focusin', this.focusChange);
      document.removeEventListener('focusout', this.focusChange);
    }
  }, {
    key: "render",
    value: function render() {
      var onClick = this.props.onClick;
      return React.createElement("div", {
        className: "fab",
        onClick: onClick,
        style: {
          bottom: window.mobileType() === 'iOS' && this.isInputFocus() ? '5vh' : '2vh'
        }
      }, React.createElement("svg", {
        height: "15",
        "aria-hidden": "true",
        "data-prefix": "fas",
        "data-icon": "arrow-right",
        class: "svg-inline--fa fa-arrow-right fa-w-14",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512"
      }, React.createElement("path", {
        fill: "rgb(66, 90, 112)",
        d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
      })));
    }
  }]);

  return FAB;
}(React.PureComponent);

export default FAB;