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
import { navigate } from '@reach/router';
import Landingsvg from '../../svg/landing';

var Landing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Landing);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Landing)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      var isLoggedIn = _this.props.isLoggedIn;

      if (isLoggedIn) {
        navigate('/order');
        return;
      }

      localStorage.setItem('from_landing', true);
      navigate('/onboarding');
    });

    return _this;
  }

  _createClass(Landing, [{
    key: "render",
    value: function render() {
      var isLoggedIn = this.props.isLoggedIn;
      return React.createElement("div", {
        className: "landing-parent"
      }, React.createElement("div", {
        className: "landing-content"
      }, React.createElement("h1", {
        style: {
          fontSize: '4em'
        }
      }, "Friends don't let friends waste. Recycle. "), React.createElement("p", {
        style: {
          fontSize: '20px'
        }
      }, "The leading service to deliver and recycle your LaCroix"), React.createElement("a", {
        onClick: this.onClick,
        style: {
          margin: '0',
          width: '170px'
        },
        className: "round-button"
      }, isLoggedIn ? 'Order Now' : 'Get Started')), React.createElement("div", {
        className: "landing-svg"
      }, React.createElement(Landingsvg, null)));
    }
  }]);

  return Landing;
}(React.Component);

export default Landing;