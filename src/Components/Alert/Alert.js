import React from "react";
import "./Alert.css";

const Alert = (props) => {
  return (
    <div className="alert">
      <div>
        <div className="alert_top">InValid input</div>
        <div className="alert_contents">
          <p>{props.alertText}</p>
          <button onClick={props.onClick}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
