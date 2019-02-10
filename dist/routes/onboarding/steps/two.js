import React from 'react';
import { FadeInFromLeft, FadeIn } from '../../../components/animate';
import ProgressDots from '../../../components/progressDots';
import SVG from '../../../svg/finish';
import IconInput from '../../../components/iconInput';
export default (function (_ref) {
  var username = _ref.username,
      onChange = _ref.onChange,
      email = _ref.email,
      password = _ref.password,
      error = _ref.error,
      step = _ref.step,
      onKeyPress = _ref.onKeyPress;
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
  }, window.mobileType() === 'Desktop' && React.createElement(ProgressDots, {
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
  }, "Almost there, ", username, "!"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '0',
      marginBottom: '15px'
    }
  }, "Get ready to craft your perfect LaCroix"), React.createElement(IconInput, {
    name: "email",
    onChange: onChange,
    iconType: "email",
    type: "email",
    onKeyPress: onKeyPress,
    placeholder: "Chris@fullstacklacroix.co",
    error: error && !email,
    errorMessage: "Please enter an email.",
    value: email
  }), React.createElement(IconInput, {
    name: "password",
    onChange: onChange,
    iconType: "password",
    type: "password",
    onKeyPress: onKeyPress,
    placeholder: "Password",
    error: error && !password,
    errorMessage: "Please enter a password.",
    value: password
  }), window.mobileType() !== 'Desktop' && React.createElement(ProgressDots, {
    count: 3,
    step: step,
    className: "onboarding-progress"
  }))))) : React.createElement("div", {
    className: "flex-center onboarding-fade-in"
  }, React.createElement(ProgressDots, {
    count: 3,
    step: step,
    className: "onboarding-progress"
  }), React.createElement(FadeInFromLeft, {
    className: "onboarding-step-parent"
  }, React.createElement("div", {
    className: "onboarding-svg-parent"
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
  }, "Almost there, ", username, "!"), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '0',
      marginBottom: '15px'
    }
  }, "Get ready to craft your perfect LaCroix"), React.createElement(IconInput, {
    name: "email",
    onChange: onChange,
    iconType: "email",
    type: "email",
    placeholder: "Chris@fullstacklacroix.co",
    error: error && !email,
    errorMessage: "Please enter an email."
  }), React.createElement(IconInput, {
    name: "password",
    onChange: onChange,
    iconType: "password",
    type: "password",
    placeholder: "Password",
    error: error && !password,
    errorMessage: "Please enter a password."
  })))));
});