import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function register() {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/register",
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setRegisterUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <button onClick={register}>Submit</button>
    </>
  );
}

export default SignUp;