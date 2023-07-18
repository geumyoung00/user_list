import React, { useState } from "react";
import Alert from '../Alert/Alert';
import "./UserInput.css";

const UserInput = (props) => {
  const [enteredValue, setEnteredValue] = useState({
    id: "",
    name: "",
    age: "",
  });

  const [isValid, setIsValid] = useState(true);

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

  let enteredName = enteredValue.name.trim().length;
  let enteredAge = enteredValue.age.trim().length;

  const forSubmitHandler = (e) => {
    e.preventDefault();
    if ((enteredName > 0, enteredAge > 0)) {
      setIsValid(true);
      props.onAddUser(enteredValue);
    } else {
      setIsValid(false);
    }
    //
    // console.log(isValid);

    setEnteredValue({
      name: "",
      age: "",
      id: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={forSubmitHandler}>
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
            type="number"
            value={enteredValue.age}
            onChange={enteredAgeHandler}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
      { isValid ? "" : <Alert></Alert> }
    </div>
  );
};

export default UserInput;
