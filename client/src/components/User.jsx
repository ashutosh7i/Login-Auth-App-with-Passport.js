import { useState } from "react";
import axios from "axios";

function User() {
  const [data, setData] = useState(null);

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
      <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
      {data ? (
        <>
          <h1>Welcome Back {data.username}</h1>
        </>
      ) : null}
    </>
  );
}

export default User;
