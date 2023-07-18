import React, { useDeferredValue, useState } from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const users = [];

  const [newUsers, setNewUsers] = useState(users);

  const addUserHandler = (enteredText) => {
    // UserInput에서 가져온 enteredValue값을 추가해서 새로운 배열을 만든다.App
    setNewUsers((newUsers) => [
      ...newUsers,
      { ...enteredText, id: "u" + newUsers.length + (1).toString() },
    ]);
  };

  // let emptyContent = <p style={{ textAlign: "center" }}>Not Found</p>;

  // 새롭게 만들어진 배열을 list로 뿌린다.

  return (
    <div>
      <section className="user_input">
        <UserInput onAddUser={addUserHandler} users={newUsers}></UserInput>
      </section>
      <section className="users">
        <UserList users={newUsers}></UserList>
      </section>
    </div>
  );
};

export default App;
