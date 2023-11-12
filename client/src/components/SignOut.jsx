import axios from "axios";

function SignOut() {
  function logout() {
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/auth/logout",
    }).then((res) => {
      console.log(res.data.message);
    });
  }

  return <button onClick={logout}>Logout</button>;
}

export default SignOut;