import React, { Component } from "react";
import "../css/Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "../assets/img/html.jpeg",
      buttonText: "skip",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("4000");
      this.setState({ buttonText: "Next" });
    }, 4000);
  }

  handleClick() {
    const btnText = document.getElementById("Timer-Btn").innerHTML;
    let bannerImage = document.getElementById("Banner-Image");
    console.log(bannerImage)
    if (btnText === "skip") {
      bannerImage.src = require("../assets/img/java.jpeg");
    } else {
      bannerImage.src = require("../assets/img/react.jpeg");
    }

    console.log(bannerImage);
  }

  render() {
    return (
      <>
        <div className="Timer">
          <img
            src={require("../assets/img/html.jpeg")}
            alt={"banner img "}
            className="Banner-Image"
            id="Banner-Image"
            height={"200"}
          />
          <button
            className="Timer-Btn"
            id="Timer-Btn"
            onClick={this.handleClick}
          >
            {this.state.buttonText}
          </button>
        </div>
      </>
    );
  }
}

export default Timer;
