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
import SVG from '../../svg/welcome';
import { FadeIn } from '../../components/animate';
import IconInput from '../../components/iconInput';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      if (!email, !password) {
        _this.setState({
          error: true
        });

        return;
      }

      window.localStorage.setItem('email', email);

      _this.props.login(email);

      navigate('/');
    });

    _this.state = {
      name: window.localStorage.getItem('name'),
      email: '',
      password: '',
      error: null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          error = _this$state2.error,
          email = _this$state2.email,
          password = _this$state2.password,
          name = _this$state2.name;
      return window.mobileType() === 'Desktop' ? React.createElement("div", {
        className: "flex-center onboarding-fade-in"
      }, React.createElement("div", {
        className: "onboarding-step-parent"
      }, React.createElement(FadeIn, {
        className: "onboarding-svg-parent",
        style: {
          background: 'linear-gradient(0, #654ea342, #eaafc885)'
        }
      }, React.createElement(SVG, {
        className: "onboarding-svg"
      })), React.createElement("div", {
        className: "onboarding-content-parent"
      }, React.createElement(FadeIn, {
        className: "onboarding-content"
      }, React.createElement("h1", {
        style: {
          textAlign: 'center',
          margin: '10px'
        }
      }, "Welcome back, ", name ? name : 'friend', "!"), React.createElement(IconInput, {
        name: "email",
        onChange: this.onChange,
        iconType: "email",
        type: "email",
        placeholder: "Chris@fullstacklacroix.com",
        error: error && !email,
        errorMessage: "Please enter an email."
      }), React.createElement(IconInput, {
        name: "password",
        onChange: this.onChange,
        iconType: "password",
        type: "password",
        placeholder: "Password",
        error: error && !password,
        errorMessage: "Please enter a password."
      }), React.createElement("a", {
        onClick: this.submit,
        className: "round-button",
        style: {
          width: '270px'
        }
      }, "Login"))))) : React.createElement("div", {
        className: " onboarding-fade-in",
        style: {
          justifyContent: 'baseline',
          alignItems: 'center',
          paddingTop: '10%',
          background: 'linear-gradient(0, #654ea342, #eaafc885)'
        }
      }, React.createElement(FadeIn, {
        className: "onboarding-step-parent"
      }, React.createElement("div", {
        className: "onboarding-svg-parent",
        style: {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }
      }, React.createElement(SVG, {
        className: "onboarding-svg"
      })), React.createElement("div", {
        className: "onboarding-content-parent"
      }, React.createElement("div", {
        className: "onboarding-content"
      }, React.createElement("h1", {
        style: {
          textAlign: 'center',
          margin: '10px'
        }
      }, "Welcome back, friend!"), React.createElement(IconInput, {
        name: "email",
        onChange: this.onChange,
        iconType: "email",
        type: "email",
        placeholder: "Chris@fullstacklacroix.com",
        error: error && !email,
        errorMessage: "Please enter an email."
      }), React.createElement(IconInput, {
        name: "password",
        onChange: this.onChange,
        iconType: "password",
        type: "password",
        placeholder: "Password",
        error: error && !password,
        errorMessage: "Please enter a password."
      }), React.createElement("a", {
        onClick: this.submit,
        className: "round-button",
        style: {
          width: '180px'
        }
      }, "Login")))));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };