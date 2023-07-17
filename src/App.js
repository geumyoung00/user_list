import React, { useState } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [Users, setUsers] = useState([{ name: "Max", age: "31", id: "user1" }]);

  const addUserHandler = (enteredText) => {
    // UserInput에서 가져온 enteredValue값을 추가해서 새로운 배열을 만든다.App
  };

  let content = <p style={{ textAlign: "center" }}>Not Found</p>;

  // 새롭게 만들어진 배열을 list로 뿌린다.

  return (
    <div>
      <section className="user_input">
        <UserInput onAddUser={addUserHandler}></UserInput>
      </section>
      <section className="users">
        <ul className="user_list">{content}</ul>
      </section>
    </div>
  );
};

export default App;
