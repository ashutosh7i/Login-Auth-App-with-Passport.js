import React from "react";
//
import { Route, Routes } from "react-router-dom";
//
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import User from "./components/User";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signout" exact element={<SignOut />} />
        <Route path="/user" exact element={<User />} />
        <Route path="*" exact element={<><h1>404 check route</h1></>}/>
      </Routes>
    </>
  );
}
