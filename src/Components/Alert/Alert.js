import React from "react";
import "./Alert.css";

const Alert = (props) => {
  return (
    <div className="alert">
      <form>
        <div className="alert_top">InValid input</div>
        <div className="alert_contents">
          <p>Please enter a valid name and age (non-empty values)</p>
          <button>Okay</button>
        </div>
      </form>
    </div>
  );
};

export default Alert;
