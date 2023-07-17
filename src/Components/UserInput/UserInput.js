import React from "react";
import "./UserInput.css";

function UserInput() {
  return (
    <form className="form">
      <div className="textbox">
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div className="textbox">
        <label>Age (Years)</label>
        <input type="text"></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserInput;
