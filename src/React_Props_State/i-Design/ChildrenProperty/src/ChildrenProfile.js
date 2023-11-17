import React, { Component } from "react";
import "../css/ChildrenProperty.css"

class ChildrenProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="ChildrenProfile">
          <h1 className="ChildrenProfileH1">TechCrunch</h1>
          <div className="ChildrenProfileContainer">
            <h2 className="ChildrenProfileH2">{this.props.title}</h2>
            <img src={this.props.profileicon} alt="Profile Icon" />
            <table className="ChildrenProfileTable">
              <tbody>
                <tr className="ChildrenProfileTableRow">
                  <td className="ChildrenProfileTableData">Name : </td>
                  <td className="ChildrenProfileTableData">{this.props.name}</td>
                </tr>
                <tr className="ChildrenProfileTableRow">
                  <td className="ChildrenProfileTableData">Email : </td>
                  <td className="ChildrenProfileTableData">{this.props.email}</td>
                </tr>
                <tr className="ChildrenProfileTableRow">
                  <td className="ChildrenProfileTableData">Mobile : </td>
                  <td className="ChildrenProfileTableData">{this.props.mobilenumber}</td>
                </tr>
                <tr className="ChildrenProfileTableRow">
                  <td className="ChildrenProfileTableData">Age : </td>
                  <td className="ChildrenProfileTableData">{this.props.age}</td>
                </tr>
                <tr className="ChildrenProfileTableRow">
                  <td className="ChildrenProfileTableData">Address : </td>
                  <td className="ChildrenProfileTableData">{this.props.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default ChildrenProfile;
