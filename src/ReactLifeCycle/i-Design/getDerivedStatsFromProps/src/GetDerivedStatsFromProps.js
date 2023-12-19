import React, { Component } from "react";
import "../css/getDerivedStatsFromProps.css";

class GetDerivedStatsFromProps extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#ce90ce" };
  }

  render() {
    return (
      <div className="GetDerivedStatsFromProps-Container">
        <div className="GetDerivedStatsFromProps">
          <div className="GetDerivedStatsFromProps-ColorInput">
            <label htmlFor="color">Click here to change the color -&gt; </label>
            <input
              type="color"
              value={this.state.color}
              onChange={(e) => {
                this.setState({ color: e.target.value });
              }}
            />
          </div>
          <div>
            <ColorDiv color={this.state.color} />
          </div>
        </div>
      </div>
    );
  }
}

export default GetDerivedStatsFromProps;

class ColorDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    } else {
      return null;
    }
  }

  render() {
    return (
      <div
        className="GetDerivedStatsFromProps-ColorBox"
        style={{ backgroundColor: this.state.color }}
      >
        <p>{this.state.color}</p>
      </div>
    );
  }
}
