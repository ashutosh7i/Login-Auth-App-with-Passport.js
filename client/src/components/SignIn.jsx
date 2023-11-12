import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function login() {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/login",
    }).then((res) => {
      console.log(res.data.message);
    });
  }

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setLoginUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button onClick={login}>Submit</button>
    </>
  );
}

export default SignIn;
