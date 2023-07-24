import React from "react";
import "./UserList.css";


const UserList = (props) => {

  return props.users.length ? (
    <ul className="user_list">
      {props.users.map((el, id) => {
        return (
          <li className="user_info" key={el.id}>
            {/* {el.name.toString() + ' (' + el.age.toString() + ' years old)'} */}
            {`${el.name.toString()} (${el.age.toString()} years old)`}
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default UserList;
