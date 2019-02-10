function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " .8s;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfrom {\n  opacity: 0;\n  transform: translate3d(0, -100%, 0);\n}\n\nto {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1s;\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nfrom {\n  transform: scale3d(1, 1, 1);\n}\n\n50% {\n  transform: scale3d(1.05, 1.05, 1.05);\n}\n\nto {\n  transform: scale3d(1, 1, 1);\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " .8s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfrom {\n  opacity: 0;\n  transform: translate3d(100%, 0, 0);\n}\n\nto {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1.3s;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nfrom {\n  opacity: .0;\n}\nto {\n  opacity 1;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { keyframes } from 'styled-components';
var fadeIn = keyframes(_templateObject());
export var FadeIn = styled.div(_templateObject2(), fadeIn);
var fadeInFromLeft = keyframes(_templateObject3());
export var FadeInFromLeft = styled.div(_templateObject4(), fadeInFromLeft);
var pulse = keyframes(_templateObject5());
export var Pulse = styled.div(_templateObject6(), pulse);
var fadeInFromTop = keyframes(_templateObject7());
export var FadeInFromTop = styled.div(_templateObject8(), fadeInFromTop);