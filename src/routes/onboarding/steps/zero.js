import React from "react";

import SVG from "../../../svg/logo";

import { FadeIn } from "../../../components/animate";
import ProgressDots from "../../../components/progressDots";

export default ({ next, step }) => (
  <FadeIn className="flex-center onboarding-fade-in">
    <div className="onboarding-step-parent">
      {window.mobileType() !== "Desktop" && (
        <ProgressDots count={3} step={step} className="onboarding-progress" />
      )}
      <div
        className="onboarding-svg-parent zero"
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SVG className="onboarding-svg" />
      </div>
      <div className="onboarding-content-parent">
        {window.mobileType() === "Desktop" && (
          <ProgressDots count={3} step={step} className="onboarding-progress" />
        )}
        <div className="onboarding-content">
          <h1 style={{ textAlign: "center", margin: "10px" }}>
            Forget everything you know about recycling
          </h1>
          <p
            style={{ textAlign: "center", marginTop: "10px", marginBottom: 0 }}
          >
            LaCroix delivered to your door.
          </p>
          <p style={{ textAlign: "center", marginTop: 0 }} v>
            Pick up and recycling of your finished cans.
          </p>
          <p style={{ textAlign: "center", marginTop: 0 }} v>
            Environmentalism made easy.
          </p>
          <a onClick={next} className="round-button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </FadeIn>
);
