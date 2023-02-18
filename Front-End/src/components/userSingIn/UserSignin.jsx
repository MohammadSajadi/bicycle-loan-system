import React, { useState } from "react";
import "./UserSignin.css"

export const UserSignin = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    }); 
    const data = await response.json();
    console.log(data);
  };

  return (
    
    <div className="userForm">
  <form onSubmit={handleSubmit} className="userSingin">
    <h1>User Sign-In</h1>
    <label>
      Email:
      <input
        type="email"
        value={email}
        placeholder="yourEmail@example.com"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
    <label>
      Username:
      <input
        type="text"
        value={username}
        placeholder="User Name"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />
    </label>
    <label>
      Password:
      <input
        type="password"
        value={password}
        placeholder="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </label>
    <div className="buttonContainer">
      <button type="submit">Sign In</button>
      <button className="linkBtn" onClick={()=>props.onFormSwitch("register")}>Don't have an account? Register here!</button>
    </div>
  </form>
</div>

    
  );   
};


