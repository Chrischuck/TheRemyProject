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
import { navigate } from '@reach/router';
import AWS from '../../utils/aws';
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
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$state, address, name, time, phone, ddb, cart, email, id, params, number, formattedNumber;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, address = _this$state.address, name = _this$state.name, time = _this$state.time, phone = _this$state.phone;

              if (!(!address || !name || !time)) {
                _context.next = 4;
                break;
              }

              _this.setState({
                error: true
              });

              return _context.abrupt("return");

            case 4:
              _this.setState({
                loading: true
              });

              ddb = new AWS.DynamoDB({});
              cart = _this.props.cart;
              email = window.localStorage.getItem('email');

              if (email) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              id = email + ':' + Date.now();
              params = {
                Item: {
                  "id": {
                    S: id
                  },
                  email: {
                    S: email
                  },
                  "drink": {
                    S: cart.id
                  },
                  address: {
                    S: address
                  },
                  name: {
                    S: name
                  },
                  time: {
                    S: time
                  },
                  status: {
                    S: 'pending'
                  }
                },
                TableName: "remy_orders"
              };
              _context.next = 14;
              return ddb.putItem(params).promise().catch(console.log);

            case 14:
              window.localStorage.setItem('pending_order_id', id);
              window.localStorage.setItem('pending_order_flavor', cart.name);

              _this.props.setCart(null);

              _this.setState({
                loading: false,
                complete: true
              });

              if (!phone) {
                _context.next = 26;
                break;
              }

              number = phone.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);

              if (!number) {
                _context.next = 26;
                break;
              }

              formattedNumber = '1' + number[2] + number[3] + number[4];
              window.localStorage.setItem('phone', formattedNumber);

              if (!formattedNumber) {
                _context.next = 26;
                break;
              }

              _context.next = 26;
              return fetch("".concat(process.env.TWILLIO_SERVER, "/confirm"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  number: formattedNumber
                })
              }).catch(console.log);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      address: props.address,
      name: window.localStorage.getItem('name'),
      time: '',
      phone: '',
      loading: false,
      error: false,
      complete: false
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          address = _this$state2.address,
          name = _this$state2.name,
          time = _this$state2.time,
          phone = _this$state2.phone,
          error = _this$state2.error,
          loading = _this$state2.loading,
          complete = _this$state2.complete;
      var cart = this.props.cart;

      if (complete) {
        navigate('/pending');
        return React.createElement("div", null);
      }

      return React.createElement("div", {
        className: "order-parent"
      }, React.createElement("div", {
        className: "order-header",
        style: {
          paddingBottom: '12px'
        }
      }, React.createElement("div", {
        style: {
          width: '70%',
          margin: 'auto'
        }
      }, React.createElement("h1", null, "Checkout"), React.createElement("p", null, "Confirm your order."))), React.createElement("div", {
        className: "checkout-section-parent"
      }, React.createElement("h4", null, "Delivery Details"), React.createElement("div", {
        className: "checkout-box"
      }, React.createElement(IconInput, {
        iconType: "location",
        type: "text",
        placeholder: "760 Orchard Rd, Davis, CA 95616",
        name: "address",
        label: "Address",
        errorMessage: "Please enter your address!",
        style: {
          flex: 1,
          margin: '5px',
          minWidth: '250px'
        },
        value: address,
        onChange: this.onChange,
        error: error && !address
      }), React.createElement(IconInput, {
        iconType: "time",
        type: "text",
        placeholder: "10:00 AM",
        name: "time",
        label: "Time",
        errorMessage: "Please enter a delivery time!",
        style: {
          flex: 1,
          margin: '5px',
          minWidth: '250px'
        },
        value: time,
        onChange: this.onChange,
        error: error && !time
      }), React.createElement(IconInput, {
        iconType: "user",
        type: "text",
        placeholder: "Chris",
        name: "name",
        label: "Name",
        errorMessage: "Please enter your name!",
        style: {
          flex: 1,
          margin: '5px',
          minWidth: '250px'
        },
        value: name,
        onChange: this.onChange,
        error: error && !name
      }), React.createElement(IconInput, {
        iconType: "phone",
        type: "tel",
        placeholder: "650-332-9928",
        name: "phone",
        label: "Phone Number",
        errorMessage: "Please enter a phone number!",
        style: {
          flex: 1,
          margin: '5px',
          minWidth: '250px'
        },
        value: phone,
        onChange: this.onChange
      }))), React.createElement("div", {
        className: "checkout-section-parent",
        style: {
          marginBottom: '10px'
        }
      }, React.createElement("h4", null, "Order Details"), React.createElement("div", {
        className: "checkout-box"
      }, cart ? React.createElement(Fragment, null, React.createElement("div", {
        className: "item-words",
        style: {
          display: 'block'
        }
      }, React.createElement("h3", {
        className: "item-title"
      }, cart.name), React.createElement("p", {
        className: "item-desc"
      }, cart.description)), React.createElement("div", {
        className: "item-image-container"
      }, React.createElement("img", {
        style: {
          height: '110px',
          width: '110px'
        },
        src: cart.img
      }))) : React.createElement("div", {
        className: "item-words",
        style: {
          display: 'block'
        }
      }, React.createElement("h3", {
        className: "item-title"
      }, "Uh Oh."), React.createElement("p", {
        className: "item-desc"
      }, "You don't have any LaCroix!")))), React.createElement("div", {
        className: "button-container"
      }, React.createElement("a", {
        onClick: this.onSubmit,
        type: "button",
        className: "order-submit",
        disabled: !cart || loading
      }, loading ? React.createElement("span", null, "Loading...") : React.createElement("span", null, "Schedule Delivery"))), React.createElement("div", {
        style: {
          height: '20px',
          color: 'transparent',
          marginTop: '10px'
        }
      }, "stupid ios..."));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };