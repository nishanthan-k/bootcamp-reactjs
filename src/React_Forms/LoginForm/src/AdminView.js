import React, { useState } from "react";
import { userList } from "./userList";
import "../css/adminView.css";

const AdminView = () => {
  const [headings, setHeadings] = useState([Object.keys(userList[0])]);

  return (
    <div className="AdminView-container">
      <div className="AdminView">
        <h1>UserDetails</h1>
        <table className="table">
          <thead>
            <tr className="tr">
              {headings[0].map((heading, index) => (
                <th className="th" key={index}>
                  {heading.slice(0)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr className="tr">
                <td className="td" key={`id${index}`}>{user.id}</td>
                <td className="td" key={`name${index}`}>{user.name}</td>
                <td className="td" key={`username${index}`}>{user.username}</td>
                <td className="td" key={`password${index}`}>{user.password}</td>
                <td className="td" key={`email${index}`}>{user.email}</td>
                <td className="td" key={`mobileNumber${index}`}>{user.mobileNumber}</td>
                <td className="td" key={`address${index}`}>{user.address}</td>
                <td className="td" key={`role${index}`}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminView;
