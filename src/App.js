import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Component/Home";
import { Edit } from "./Component/Edit";
import { Navbar } from "./Component/Navbar";
  import { AddUser } from "./Component/AddUser";
import { NotFound } from "./Component/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
