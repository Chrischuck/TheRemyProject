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

import React, { Fragment } from 'react';
import { navigate, Link } from '@reach/router';
import AWS from '../../utils/aws';
import { FadeInFromTop, FadeIn } from '../../components/animate';
import Ship from '../../svg/ship';
import Celebrate from '../../svg/celebrate';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "init",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var ddb, params, d1, interval;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.state.currentOrder) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              ddb = new AWS.DynamoDB({});
              params = {
                ExpressionAttributeValues: {
                  ":id": {
                    S: _this.state.currentOrder
                  }
                },
                KeyConditionExpression: "id = :id",
                TableName: "remy_orders"
              };
              _context2.next = 6;
              return ddb.query(params).promise().then(function (d) {
                return d.Items[0];
              }).catch(console.log);

            case 6:
              d1 = _context2.sent;

              if (!d1) {
                navigate('/');
              }

              if (!(d1.status.S !== 'pending')) {
                _context2.next = 11;
                break;
              }

              _this.setState({
                isComplete: true
              });

              return _context2.abrupt("return");

            case 11:
              interval = setInterval(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var data, _interval, phone;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return ddb.query(params).promise().then(function (d) {
                          return d.Items[0];
                        }).catch(console.log);

                      case 2:
                        data = _context.sent;

                        if (!data) {
                          _this.setState({
                            error: true
                          });
                        }

                        if (!(data.status.S !== 'pending')) {
                          _context.next = 15;
                          break;
                        }

                        _this.setState({
                          isComplete: true
                        });

                        _interval = window.localStorage.getItem('pending_order_poll');
                        clearInterval(_interval);
                        window.localStorage.setItem('pending_order_id', '');
                        window.localStorage.setItem('pending_order_flavor', '');
                        phone = window.localStorage.getItem('phone');

                        if (!phone) {
                          _context.next = 14;
                          break;
                        }

                        _context.next = 14;
                        return fetch("".concat(process.env.TWILLIO_SERVER, "/delivered"), {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            number: phone
                          })
                        }).catch(console.log);

                      case 14:
                        _this.setState({
                          isComplete: true
                        });

                      case 15:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              })), 2000);
              window.localStorage.setItem('pending_order_poll', interval);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this.state = {
      currentOrder: window.localStorage.getItem('pending_order_id'),
      currentFlavor: window.localStorage.getItem('pending_order_flavor'),
      name: window.localStorage.getItem('name'),
      isComplete: false
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {
      var interval = window.localStorage.getItem('pending_order_poll');
      clearInterval(interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var interval = window.localStorage.getItem('pending_order_poll');
      clearInterval(interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentOrder = _this$state.currentOrder,
          currentFlavor = _this$state.currentFlavor,
          name = _this$state.name,
          isComplete = _this$state.isComplete;

      if (!currentOrder) {
        navigate('/');
        return React.createElement("div", null);
      }

      return React.createElement(FadeIn, {
        className: "order-parent"
      }, React.createElement("div", {
        className: "order-header checkout",
        style: {
          paddingBottom: '12px',
          background: 'white',
          color: 'black'
        }
      }, React.createElement("h1", null, "Order Status")), !isComplete ? React.createElement(Fragment, null, React.createElement(Ship, {
        className: "onboarding-svg no-pad"
      }), React.createElement("h2", {
        style: {
          fontSize: '3vh',
          textAlign: 'center',
          marginTop: '25px',
          maxWidth: '70%'
        }
      }, "Hang tight", name ? ' ' + name : '', ", Your", currentFlavor ? ' ' + currentFlavor : '', " LaCroix is on the way!")) : React.createElement(FadeInFromTop, {
        style: {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'column'
        }
      }, React.createElement(Celebrate, {
        className: "onboarding-svg no-pad"
      }), React.createElement("h2", {
        style: {
          fontSize: '3vh',
          textAlign: 'center',
          marginTop: '25px',
          maxWidth: '70%'
        }
      }, "Your", currentFlavor ? ' ' + currentFlavor : '', " LaCroix has arrived. Enjoy!")), React.createElement("div", {
        className: "button-container",
        style: {
          display: 'flex',
          justifyContent: 'center'
        }
      }, React.createElement(Link, {
        to: "/",
        className: "order-submit"
      }, "Home")));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };