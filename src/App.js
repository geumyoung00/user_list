import React from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  return (
    <div>
      <section className="user_input">
        <UserInput></UserInput>
      </section>
      <section className="users">
        <UserList></UserList>
      </section>
    </div>
  );
}

export default App;
