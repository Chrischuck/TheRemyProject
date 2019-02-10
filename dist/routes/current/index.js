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
import AWS from '../../utils/aws';
import lacroixMap from '../../utils/lacroixMap';
import { FadeIn } from '../../components/animate';

var Card = function Card(_ref) {
  var lacroix = _ref.lacroix,
      updateItem = _ref.updateItem;
  return React.createElement("div", {
    className: "checkout-box",
    style: {
      marginBottom: '10px'
    }
  }, React.createElement("div", {
    className: "item-words",
    style: {
      display: 'block'
    }
  }, React.createElement("h3", {
    className: "item-title"
  }, lacroix.name), React.createElement("p", {
    className: "item-desc"
  }, lacroix.description), !lacroix.pickup ? React.createElement("a", {
    onClick: updateItem,
    className: "round-button",
    style: {
      position: 'absolute',
      fontWeight: 'bold',
      padding: '7px 30px'
    }
  }, "Pickup") : React.createElement(FadeIn, null, React.createElement("p", {
    style: {
      marginTop: '20px'
    }
  }, "Awesome! We're on our way to pick up your LaCroix."))), React.createElement("div", {
    className: "item-image-container"
  }, React.createElement("img", {
    style: {
      height: '110px',
      width: '110px'
    },
    src: lacroix.img
  })));
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var ddb, params, d;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ddb = new AWS.DynamoDB({});
              params = {
                ExpressionAttributeValues: {
                  ":email": {
                    S: _this.props.email
                  },
                  ":pending": {
                    S: 'pending'
                  }
                },
                FilterExpression: "pending <> :pending AND email = :email",
                ProjectionExpression: "drink, pickup, id",
                TableName: "remy_orders"
              };
              _context.next = 4;
              return ddb.scan(params).promise().then(function (d) {
                return d.Items;
              }).catch(console.log);

            case 4:
              d = _context.sent;

              if (d) {
                _this.setState({
                  current: d.map(function (c) {
                    return {
                      aws_id: c.id.S,
                      drink: c.drink.S,
                      pickup: c.pickup ? c.pickup.S : null
                    };
                  })
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderLacroix", function () {
      var current = _this.state.current;

      if (current.length < 1) {
        return React.createElement("div", {
          className: "checkout-box"
        }, React.createElement("div", {
          className: "item-words",
          style: {
            display: 'block'
          }
        }, React.createElement("h3", {
          className: "item-title"
        }, "Uh Oh."), React.createElement("p", {
          className: "item-desc"
        }, "You don't have any LaCroix! Let's change that.")));
      }

      return current.map(function (c) {
        var s = lacroixMap[c.drink];
        s.pickup = c.pickup;
        s.aws_id = c.aws_id;
        return s;
      }).map(function (c) {
        return React.createElement(Card, {
          lacroix: c,
          updateItem: function updateItem() {
            return _this.updateItem(c.aws_id);
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateItem",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        var ddb, params, phone;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ddb = new AWS.DynamoDB({});
                params = {
                  TableName: "remy_orders",
                  Key: {
                    id: {
                      S: id
                    }
                  },
                  UpdateExpression: "set pickup = :pickup",
                  ExpressionAttributeValues: {
                    ":pickup": {
                      S: 'true'
                    }
                  },
                  ReturnValues: "UPDATED_NEW"
                };
                _context2.next = 4;
                return ddb.updateItem(params).promise().then(function () {
                  return _this.fetchData();
                }).catch(console.log);

              case 4:
                phone = window.localStorage.getItem('phone');

                if (!phone) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 8;
                return fetch("".concat(process.env.TWILLIO_SERVER, "/pickup-pending"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    number: phone
                  })
                }).catch(console.log);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.state = {
      current: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      var interval = setInterval(this.fetchData, 2000);
      window.localStorage.setItem('current_drink_poll', interval);
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {
      var interval = window.localStorage.getItem('current_drink_poll');
      clearInterval(interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var interval = window.localStorage.getItem('current_drink_pollsssss');
      clearInterval(interval);
    }
  }, {
    key: "render",
    value: function render() {
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
      }, React.createElement("h1", null, "Current LaCroix"), React.createElement("p", null))), React.createElement("div", {
        className: "checkout-section-parent"
      }, React.createElement("h4", null, "Drink List"), this.renderLacroix()));
    }
  }]);

  return _default;
}(React.Component);

export { _default as default };