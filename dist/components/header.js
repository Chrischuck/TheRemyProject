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
import ReactDom from 'react-dom';
import { Location, Link } from '@reach/router';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleModal", function () {
      _this.setState(function (state) {
        return {
          isModalOpen: !state.isModalOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal", function () {
      _this.setState({
        isModalOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "outsideClick", function (e) {
      if (_this.state.isModalOpen && !ReactDom.findDOMNode(_this.dropdown.current).contains(e.target) && !ReactDom.findDOMNode(_this.icon.current).contains(e.target)) {
        _this.closeModal();
      }
    });

    _this.state = {
      isModalOpen: false
    };
    _this.dropdown = React.createRef();
    _this.icon = React.createRef();
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.outsideClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.outsideClick, false);
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {
      document.removeEventListener('mousedown', this.outsideClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isModalOpen = this.state.isModalOpen;
      var _this$props = this.props,
          isLoggedIn = _this$props.isLoggedIn,
          cart = _this$props.cart;
      return React.createElement(Location, null, function (_ref) {
        var location = _ref.location;
        return location.pathname !== '/onboarding' ? React.createElement("div", {
          className: "header"
        }, React.createElement("div", {
          className: "header-inner"
        }, React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, React.createElement("h1", {
          className: "header-title"
        }, "Full Stack Lacroix")), isLoggedIn ? React.createElement("div", {
          className: "header-container-one"
        }, React.createElement("svg", {
          ref: _this2.icon,
          onClick: _this2.toggleModal,
          style: {
            cursor: 'pointer'
          },
          width: "32",
          height: "32",
          class: "css-5rum3v eu6360k0"
        }, React.createElement("g", {
          fill: "none",
          "fill-rule": "evenodd"
        }, React.createElement("circle", {
          fill: "#ECEDEF",
          cx: "16",
          cy: "16",
          r: "16"
        }), React.createElement("path", {
          d: "M12.886 10.824A3.222 3.222 0 0 1 16.1 7.6a3.22 3.22 0 0 1 3.214 3.224v1.052A3.222 3.222 0 0 1 16.1 15.1a3.22 3.22 0 0 1-3.214-3.224v-1.052zm3.214 6.419c5.357 0 7.5 2.143 7.5 2.143V22.6h-15v-3.214s2.143-2.143 7.5-2.143z",
          fill: "#C6CAD1"
        }))), React.createElement("div", {
          ref: _this2.dropdown,
          className: "dropdown",
          style: {
            display: isModalOpen ? 'block' : 'none'
          }
        }, React.createElement(Link, {
          onClick: _this2.closeModal,
          to: "/order",
          className: "dropdown-content"
        }, "Pending Orders"), React.createElement(Link, {
          onClick: _this2.closeModal,
          to: "/current",
          className: "dropdown-content"
        }, "Current Drinks"), React.createElement(Link, {
          onClick: _this2.closeModal,
          to: "/order",
          className: "dropdown-content"
        }, "Order"), React.createElement("a", {
          className: "dropdown-content",
          style: {
            borderBottom: '0px'
          },
          onClick: _this2.props.logout
        }, "Logout")), React.createElement(Link, {
          to: "/checkout"
        }, cart && React.createElement("div", {
          class: "cart-notif"
        }, "1"), React.createElement("svg", {
          style: {
            cursor: 'pointer'
          },
          width: "22",
          height: "22",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "shopping-cart",
          class: "svg-inline--fa fa-shopping-cart fa-w-18",
          role: "img",
          viewBox: "0 0 576 512"
        }, React.createElement("path", {
          fill: "#c5cad1",
          d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
        })))) : React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            width: '200px'
          }
        }, React.createElement(Link, {
          to: "/onboarding",
          className: "order-submit"
        }, "Signup"), React.createElement(Link, {
          to: "/login",
          className: "order-submit",
          style: {
            margin: '0px 5px',
            width: 'auto',
            color: '#ffa9ce',
            backgroundColor: 'transparent',
            border: '2px solid #ffa9ce',
            padding: '12px 20px',
            marginRight: 0
          }
        }, "Login")))) : null;
      });
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };