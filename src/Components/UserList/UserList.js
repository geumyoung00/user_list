import React from "react";
import "./UserList.css";


const UserList = (props) => {

  return (

    <ul className="user_list">
      {props.users.map((el, id)=>{
        return(
          <li className="user_info" key={el.id}>
            {el.name.toString()+ " (" + el.age.toString() + " years old)"}
          </li>
        )
        
      })}
    </ul>
      // <li className="user_info">
      //   {props.users.map((el, id) => {
      //     console.log(props.users[2].name)
      //     return
      //   })}
      //   {console.log(props.users[0].name)}
      // </li>
  );
};

export default UserList;
