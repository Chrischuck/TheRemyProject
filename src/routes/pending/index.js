import React, { Fragment } from "react";
import { navigate, Link } from "@reach/router";
import Confetti from "react-dom-confetti";
import { FadeInFromTop, FadeIn } from "../../components/animate";

import Ship from "../../svg/ship";
import Celebrate from "../../svg/celebrate";

const confettiConfig1 = {
  angle: 45,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const confettiConfig2 = {
  angle: 135,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrder: window.localStorage.getItem("order"),
      currentFlavor: window.localStorage.getItem("pending_order_flavor"),
      name: window.localStorage.getItem("name"),
      isComplete: false,
      index: 1,
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    const currentOrder = JSON.parse(this.state.currentOrder);

    if (!currentOrder) {
      navigate("/");
    }

    const orderOnTheWay = setTimeout(() => {
      this.setState({ index: 2 });
    }, 2000);

    const orderApproaching = setTimeout(() => {
      this.setState({ index: 3 });
    }, 4000);

    const orderComplete = setTimeout(() => {
      if (currentOrder.status === "pending") {
        this.setState({ isComplete: true, index: 4 });
        const interval = window.localStorage.getItem("pending_order_poll");
        clearInterval(interval);

        window.localStorage.setItem("cart", "");
      }
    }, 6000);

    window.localStorage.setItem("pending_order_poll", orderComplete);
    window.localStorage.setItem("on_the_way", orderOnTheWay);
    window.localStorage.setItem("approaching", orderApproaching);
  };

  componentDidCatch() {
    this.cleanup();
  }
  componentWillUnmount() {
    this.cleanup();
  }

  cleanup = () => {
    clearTimeout(window.localStorage.getItem("pending_order_poll"));
    clearTimeout(window.localStorage.getItem("on_the_way"));
    clearTimeout(window.localStorage.getItem("approaching"));
  };
  render() {
    const { currentOrder, currentFlavor, name, isComplete } = this.state;
    if (!currentOrder) {
      navigate("/");
      return <div></div>;
    }

    const statuses = ["Received", "On the way", "Approaching", "Delivered!"];
    return (
      <FadeIn className="order-parent">
        <div
          className="order-header checkout"
          style={{ background: "white", color: "black", padding: "16px 0" }}
        >
          <h1 style={{ marginBottom: 0 }}>Order Status</h1>
        </div>
        <div
          style={{
            height: 25,
            width: "100%",
            maxWidth: 800,
            position: "relative",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              borderRadius: 6,
              position: "absolute",
              maxWidth: "calc(100% - 4px)",
              width: `calc(${this.state.index * 25}% - 4px)`,
              height: "3px",
              backgroundColor: "rgba(255, 86, 158)",
              margin: "0 2px",
              marginTop: 1,
              zIndex: 100,
            }}
          />
          <div
            style={{
              borderRadius: 6,
              position: "absolute",
              width: "calc(100% - 4px)",
              height: "3px",
              backgroundColor: "#ECEDEF",
              margin: "0 2px",
              marginTop: 1,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {statuses.map((title, index) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: 26,
                  width: 120,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: "50%",
                    backgroundColor:
                      this.state.index > index
                        ? "rgba(255, 86, 158)"
                        : "#ECEDEF",
                    marginTop: -5,
                  }}
                />
                <div
                  style={{
                    color: this.state.index > index ? "black" : "#b3b4b6",
                  }}
                >
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isComplete ? (
          <Fragment>
            <Ship className="onboarding-svg no-pad" />
            <h2
              style={{
                fontSize: "3vh",
                textAlign: "center",
                maxWidth: "70%",
              }}
            >
              Hang tight{name ? ` ${name}` : ""}, your
              {currentFlavor ? " " + currentFlavor : ""} LaCroix is on the way!
            </h2>
          </Fragment>
        ) : (
          <FadeInFromTop
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <Celebrate className="onboarding-svg no-pad" />
            <h2
              style={{
                fontSize: "3vh",
                textAlign: "center",
                marginTop: "25px",
                maxWidth: "70%",
              }}
            >
              Your{currentFlavor ? " " + currentFlavor : ""} LaCroix has
              arrived. Enjoy!
            </h2>
          </FadeInFromTop>
        )}

        <div style={{ position: "absolute", top: "50%", left: "20px" }}>
          <Confetti active={isComplete} config={confettiConfig1} />
        </div>
        <div style={{ position: "absolute", top: "50%", right: "20px" }}>
          <Confetti active={isComplete} config={confettiConfig2} />
        </div>
        <div
          className="button-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/" className="order-submit">
            Home
          </Link>
        </div>
      </FadeIn>
    );
  }
}
