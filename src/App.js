import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import { Edit } from "./Component/Edit";
import { Navbar } from "./Component/Navbar";
import { AddUser } from "./Component/AddUser";
import { NotFound } from "./Component/NotFound";
import { View } from "./Component/View";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//App component
const App = () => {
  //create a state to store the users
  const [users, setUsers] = useState([]);

  //addUsers to add users to users state
  const addUsers = (field) => {
    setUsers([...users, field]);
  };

  //update to update the user
  const update = (user, id) => {
    const index = users.findIndex((user) => user.Empid === id);
    var tempuserss = [...users];
    tempuserss[index] = user;
    setUsers(tempuserss);
  };

  //delUser to delete the user
  const delUser = (user, id) => {
    setUsers(users.filter((user) => user.Empid !== id));
  };

  // Routing All Components
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home users={users} delUser={delUser} />}
        />
        <Route
          exact
          path="/adduser"
          element={<AddUser addUsers={addUsers} />}
        />
        <Route
          exact
          path="/edit/:id"
          element={<Edit users={users} update={update} />}
        />
        <Route exact path="/view/:id" element={<View users={users} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
