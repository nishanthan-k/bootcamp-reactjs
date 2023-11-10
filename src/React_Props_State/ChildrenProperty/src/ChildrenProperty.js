import React, { Component } from "react";
import ChildrenProfile from "./ChildrenProfile";

class ChildrenProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Profile",
      profileicon: require("../assets/img/profileicon.png"),
      name: "William",
      email: "william@gmail.com",
      mobilenumber: "8976541234",
      age: 27,
      address: "Great Street,London",
    };
  }
  render() {
    return (
      <>
        <div className="ChildrenProperty">
          <ChildrenProfile
            // title={this.state.title}
            // profileicon={this.state.profileicon}
            // name={this.state.name}
            // email={this.state.email}
            // mobilenumber={this.state.mobilenumber}
            // age={this.state.age}
            // address={this.state.address}
            {...this.state}
          />
        </div>
      </>
    );
  }
}

export default ChildrenProperty;
