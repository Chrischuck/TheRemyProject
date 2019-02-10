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

import React, { Fragment } from 'react';
import { Router, navigate } from '@reach/router';
import Loadable from 'react-loadable';
import './index.css';
import Loading from '../components/loading';
var Landing = Loadable({
  loader: function loader() {
    return import('../routes/landing');
  },
  loading: Loading
});
var Onboarding = Loadable({
  loader: function loader() {
    return import('../routes/onboarding');
  },
  loading: Loading
});
var Login = Loadable({
  loader: function loader() {
    return import('../routes/login');
  },
  loading: Loading
});
var Order = Loadable({
  loader: function loader() {
    return import('../routes/order');
  },
  loading: Loading
});
var Checkout = Loadable({
  loader: function loader() {
    return import('../routes/checkout');
  },
  loading: Loading
});
var Current = Loadable({
  loader: function loader() {
    return import('../routes/current');
  },
  loading: Loading
});
var Pending = Loadable({
  loader: function loader() {
    return import('../routes/pending');
  },
  loading: Loading
});
var NotFound = Loadable({
  loader: function loader() {
    return import('../routes/notFound');
  },
  loading: Loading
});
import Header from '../components/header';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCart", function (item) {
      if (item) {
        window.localStorage.setItem('cart', JSON.stringify(item));
      } else {
        window.localStorage.setItem('cart', '');
      }

      _this.setState({
        cart: item
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTextChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "login", function (email) {
      _this.setState({
        isLoggedIn: true,
        email: email
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logout", function () {
      window.localStorage.setItem('email', '');

      _this.setState({
        isLoggedIn: false
      });

      navigate('/login');
    });

    var cart = window.localStorage.getItem('cart');

    var _email = window.localStorage.getItem('email');

    _this.state = {
      cart: cart ? JSON.parse(cart) : null,
      address: '',
      isLoggedIn: !!window.localStorage.getItem('email'),
      email: _email || null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          cart = _this$state.cart,
          address = _this$state.address,
          isLoggedIn = _this$state.isLoggedIn,
          email = _this$state.email;
      return React.createElement(Fragment, null, React.createElement(Header, {
        isLoggedIn: isLoggedIn,
        cart: cart,
        logout: this.logout
      }), React.createElement(Router, {
        style: {
          display: 'flex',
          flex: 1
        }
      }, React.createElement(Landing, {
        path: "/",
        isLoggedIn: isLoggedIn
      }), React.createElement(Onboarding, {
        path: "/onboarding",
        login: this.login
      }), React.createElement(Order, {
        path: "/order",
        setCart: this.setCart,
        cart: cart,
        onTextChange: this.onTextChange,
        address: address
      }), React.createElement(Checkout, {
        path: "/checkout",
        setCart: this.setCart,
        cart: cart,
        address: address
      }), React.createElement(Pending, {
        path: "/pending"
      }), React.createElement(Login, {
        path: "/login",
        login: this.login
      }), React.createElement(Current, {
        path: "/current",
        email: email
      }), React.createElement(NotFound, {
        default: true
      })));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };