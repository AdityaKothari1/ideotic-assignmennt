import React, { useState } from "react";
import axios from "axios";

import styles from "./user.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      const payload = {
        email: email,
        password: password,
      };

      axios.post("http://localhost:8000/login", payload).then((res) => {
        console.log(res);
        if (res.data.msg == "Login Sucess") {
          localStorage.setItem("isAuth", true);
          naviagte("/home");
        } else {
          alert(res.data.msg);
        }
      });
    } else {
      alert("Wrong Crendiatials");
      //
    }
  };
  return (
    <div className={styles.user}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
