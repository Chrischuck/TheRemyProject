import React from 'react';
import SVG from '../../../svg/logo';
import { FadeIn } from '../../../components/animate';
import ProgressDots from '../../../components/progressDots';
export default (function (_ref) {
  var next = _ref.next,
      step = _ref.step;
  return React.createElement(FadeIn, {
    className: "flex-center onboarding-fade-in"
  }, React.createElement("div", {
    className: "onboarding-step-parent"
  }, window.mobileType() !== 'Desktop' && React.createElement(ProgressDots, {
    count: 3,
    step: step,
    className: "onboarding-progress"
  }), React.createElement("div", {
    className: "onboarding-svg-parent zero",
    style: {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(SVG, {
    className: "onboarding-svg"
  })), React.createElement("div", {
    className: "onboarding-content-parent"
  }, window.mobileType() === 'Desktop' && React.createElement(ProgressDots, {
    count: 3,
    step: step,
    className: "onboarding-progress"
  }), React.createElement("div", {
    className: "onboarding-content"
  }, React.createElement("h1", {
    style: {
      textAlign: 'center',
      margin: '10px'
    }
  }, "Forget Everything You Know About Recycling"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '10px',
      marginBottom: 0
    }
  }, "Delivery and Recycling"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 0
    },
    v: true
  }, "powered by LaCroix"), React.createElement("a", {
    onClick: next,
    className: "round-button"
  }, "Get Started")))));
});