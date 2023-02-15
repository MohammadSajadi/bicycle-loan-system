import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="user-form">
      <form className="login-form" onSubmit={handleSubmite}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@abcd.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button>Login</button>
      </form>
      <button className="btn-link" onClick={() => props.onFormSwitch("Register")}>
        Don't have an account? Register here!
      </button>
      </div>
  );
};
