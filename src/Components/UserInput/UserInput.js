import React, { useState } from "react";
import "./UserInput.css";

const UserInput = (props) => {
  
  const [enteredValue, setEnteredValue] = useState({
    name: "",
    age: "",
  });

  const enteredNameHandler = (e) => {
    setEnteredValue({
      ...enteredValue,
      name: e.target.value,
    });
  };

  const enteredAgeHandler = (e) => {
    setEnteredValue({
      ...enteredValue,
      age: e.target.value,
    });
  };

  const forSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredValue);
    props.onAddUser(enteredValue);
  };

  return (
    <form className="form" onSubmit={forSubmitHandler}>
      <div className="textbox">
        <label>Username</label>
        <input
          type="text"
          value={enteredValue.name}
          onChange={enteredNameHandler}
        ></input>
      </div>
      <div className="textbox">
        <label>Age (Years)</label>
        <input
          type="text"
          value={enteredValue.age}
          onChange={enteredAgeHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
