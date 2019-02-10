function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
import { Redirect, navigate } from '@reach/router';
import Loadable from 'react-loadable';
import Loading from '../../components/loading';
import Zero from './steps/zero';
var One = Loadable({
  loader: function loader() {
    return import('./steps/one');
  },
  loading: Loading
});
var Two = Loadable({
  loader: function loader() {
    return import('./steps/two');
  },
  loading: Loading
});
import FAB from '../../components/fab';

var Onboarding =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Onboarding, _React$Component);

  function Onboarding(props) {
    var _this;

    _classCallCheck(this, Onboarding);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Onboarding).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "next",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$state, step, name, email, password;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, step = _this$state.step, name = _this$state.name, email = _this$state.email, password = _this$state.password;

              if (!(step === 1 && !name)) {
                _context.next = 4;
                break;
              }

              _this.setState({
                error: true
              });

              return _context.abrupt("return");

            case 4:
              if (!(step === 2 && (!email || !password))) {
                _context.next = 7;
                break;
              }

              _this.setState({
                error: true
              });

              return _context.abrupt("return");

            case 7:
              if (step === 2) {
                localStorage.setItem('email', email);
                localStorage.setItem('name', name);

                _this.props.login(email);
              }

              _this.setState(function (prevState) {
                return {
                  step: prevState.step + 1,
                  error: false
                };
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderStep", function () {
      var _this$state2 = _this.state,
          error = _this$state2.error,
          email = _this$state2.email,
          password = _this$state2.password,
          step = _this$state2.step,
          fromLanding = _this$state2.fromLanding;

      switch (step) {
        case 0:
          return React.createElement(Zero, {
            next: _this.next,
            step: step
          });

        case 1:
          return React.createElement(One, {
            fromLanding: fromLanding,
            onKeyPress: _this.onKeyPress,
            onChange: _this.onChange,
            step: step,
            error: error
          });

        case 2:
          return React.createElement(Two, {
            onKeyPress: _this.onKeyPress,
            email: email,
            password: password,
            username: _this.state.name,
            step: step,
            error: error,
            onChange: _this.onChange
          });

        case 3:
          return React.createElement(Redirect, {
            to: "/order"
          });

        default:
          return null;
      }
    });

    var _fromLanding = !!localStorage.getItem('from_landing');

    localStorage.setItem('from_landing', '');
    _this.state = {
      step: _fromLanding ? 1 : 0,
      name: '',
      email: '',
      password: '',
      error: false,
      fromLanding: _fromLanding
    };
    return _this;
  }

  _createClass(Onboarding, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      One.preload();
      Two.preload();
    }
  }, {
    key: "render",
    value: function render() {
      if (window.localStorage.getItem('email')) {
        navigate('/');
      }

      return React.createElement("div", {
        className: "onboarding-parent"
      }, this.renderStep(), this.state.step !== 0 && React.createElement(FAB, {
        onClick: this.next
      }));
    }
  }]);

  return Onboarding;
}(React.Component);

export default Onboarding;