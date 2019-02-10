import React from 'react';
import SVG from '../../../svg/friends';
import { FadeInFromLeft, FadeIn } from '../../../components/animate';
import ProgressDots from '../../../components/progressDots';
import IconInput from '../../../components/iconInput';
export default (function (_ref) {
  var onChange = _ref.onChange,
      error = _ref.error,
      step = _ref.step,
      onKeyPress = _ref.onKeyPress,
      name = _ref.name;
  return window.mobileType() === 'Desktop' ? React.createElement("div", {
    className: "flex-center onboarding-fade-in"
  }, React.createElement("div", {
    className: "onboarding-step-parent"
  }, React.createElement(FadeIn, {
    className: "onboarding-svg-parent"
  }, React.createElement(SVG, {
    className: "onboarding-svg"
  })), React.createElement("div", {
    className: "onboarding-content-parent"
  }, React.createElement(ProgressDots, {
    count: 3,
    step: step,
    className: "onboarding-progress"
  }), React.createElement(FadeIn, {
    className: "onboarding-content"
  }, React.createElement("h1", {
    style: {
      textAlign: 'center',
      margin: '10px'
    }
  }, "Welcome to the party!"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '0',
      marginBottom: '15px'
    }
  }, "I'm Full Stack LaCroix, what's your name?"), React.createElement(IconInput, {
    iconType: "user",
    type: "text",
    placeholder: "Chris",
    onChange: onChange,
    onKeyPress: onKeyPress,
    name: 'name',
    error: error,
    errorMessage: "Please enter your name!"
  }))))) : React.createElement("div", {
    className: "flex-center onboarding-fade-in"
  }, React.createElement(ProgressDots, {
    count: 3,
    step: step,
    className: "onboarding-progress"
  }), React.createElement(FadeInFromLeft, {
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
  }, "Welcome to the party!"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '0',
      marginBottom: '15px'
    }
  }, "What's your name?"), React.createElement(IconInput, {
    iconType: "user",
    type: "text",
    placeholder: "Chris",
    onChange: onChange,
    name: 'name',
    error: error,
    errorMessage: "Please enter your name!"
  })))));
});