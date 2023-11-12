import { useState } from "react";
import axios from "axios";

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [data, setData] = useState(null);

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
  function logout() {
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/auth/logout",
    }).then((res) => {
      console.log(res.data.message);
    });
  }
  function getUser() {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/auth/user",
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  return (
    <>
      <h1>register</h1>
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

      <h1>login</h1>
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

      <h1>get user</h1>
      <button onClick={getUser}>Submit</button>
      {data ? (
        <>
          <h1>Welcome Back {data.username}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : null}
    </>
  );
}

export default App;
