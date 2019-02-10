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
import { Redirect } from '@reach/router';
import lacroix from '../../utils/lacroix';
import IconInput from '../../components/iconInput';

var Card = function Card(_ref) {
  var data = _ref.data,
      onClick = _ref.onClick;
  return React.createElement("div", {
    className: "item-card-container",
    onClick: onClick
  }, React.createElement("div", {
    className: "item-words"
  }, React.createElement("h3", {
    className: "item-title"
  }, data.name), React.createElement("p", {
    className: "item-desc"
  }, data.description)), React.createElement("div", {
    className: "item-image-container"
  }, React.createElement("img", {
    style: {
      height: '110px',
      width: '110px'
    },
    src: data.img
  })));
};

var Order =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Order, _React$Component);

  function Order(props) {
    var _this;

    _classCallCheck(this, Order);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Order).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCart", function (data) {
      var _this$props = _this.props,
          address = _this$props.address,
          setCart = _this$props.setCart;

      if (!address) {
        _this.setState({
          error: true
        });

        return;
      }

      setCart(data);
    });

    _this.state = {
      error: false
    };
    return _this;
  }

  _createClass(Order, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          cart = _this$props2.cart,
          address = _this$props2.address,
          onTextChange = _this$props2.onTextChange;

      if (cart) {
        return React.createElement(Redirect, {
          to: "/checkout"
        });
      }

      return React.createElement("div", {
        className: "order-parent"
      }, React.createElement("div", {
        className: "order-header"
      }, React.createElement("div", {
        style: {
          width: '70%',
          margin: 'auto'
        }
      }, React.createElement("h1", null, "LaCroix Sparkling Water"), React.createElement("p", null, "LaCroix - sparkling water perfected."))), React.createElement("div", {
        className: "order-body location"
      }, React.createElement("h2", {
        className: "order-drink-title",
        style: {
          maxWidth: '1024px'
        }
      }, "Location"), React.createElement("div", {
        className: "items-content",
        style: {
          maxWidth: '1024px'
        }
      }, React.createElement(IconInput, {
        iconType: "location",
        type: "text",
        placeholder: "760 Orchard Rd, Davis, CA 95616",
        name: "address",
        error: this.state.error && !address,
        errorMessage: "Please enter your address!",
        style: {
          maxWidth: '500px'
        },
        onChange: onTextChange,
        value: address
      }))), React.createElement("div", {
        className: "order-body"
      }, React.createElement("h2", {
        className: "order-drink-title"
      }, "Items"), React.createElement("div", {
        className: "items-content"
      }, lacroix.map(function (l, index) {
        return React.createElement(Card, {
          key: l.id + index,
          data: l,
          onClick: function onClick() {
            return _this2.setCart(l);
          }
        });
      }))));
    }
  }]);

  return Order;
}(React.Component);

export default Order;