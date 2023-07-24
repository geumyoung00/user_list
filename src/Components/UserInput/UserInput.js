import React, { useState } from "react";
import Alert from "../Alert/Alert";
import "./UserInput.css";

const UserInput = (props) => {
  /* null로 초기값을 잡으니 .trim().length 값을 불러들이지 못해서 오류가 발생합니다. */
  const [enteredValue, setEnteredValue] = useState({
    id: null,
    name: null,
    age: null
  });

  const [alertText, setAlertText] = useState(false);

  const ageLengHandler = (e) => {
    setEnteredValue({
      ...enteredValue,
      name: e.target.value,
    });
  };

  const nameLengHandler = (e) => {
    setEnteredValue({
      ...enteredValue,
      age: e.target.value,
    });
  };
  
  const forSubmitHandler = (e) => {
    e.preventDefault();
    const ageLeng = enteredValue.name?.trim().length;
    const nameLeng = enteredValue.age?.trim().length;
    // "?" : 값이 있을 때만 메소드 실행

    if(enteredValue.age < 0){
      setAlertText('Please enter a valid age (age>0)');
      return;
    }

    if (ageLeng > 0 && nameLeng > 0) {
      props.onAddUser(enteredValue);
    } else {
      setAlertText('Please enter a valid name and age (non-empty values)');
    }

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
            onChange={ageLengHandler}
          ></input>
        </div>
        <div className="textbox">
          <label>Age (Years)</label>
          <input
            type="number"
            value={enteredValue.age}
            onChange={nameLengHandler}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
      {alertText ? (<Alert alertText={alertText}
          onClick={() => {
            setAlertText(false);
          }}
        ></Alert>
      ) : null}
    </div>
  );
};

export default UserInput;
