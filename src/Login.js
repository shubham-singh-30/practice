import "./login.css";
import React, { useState } from "react";

export const Login=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="app">
      <div className="root">
      <form className="formdiv">
        <h2 className="heading">Login</h2>
        <div className="form-group mt-5">
          <input
            type="email"
            className="form-control customfield"
            aria-describedby="emailHelp"
            placeholder="Username / E-mail ID"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}      
          />
        </div>
        <div className="form-group mt-4">
          <input
            type="password"
            className="form-control customfield"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}      
          />
        </div>

        <button type="submit" className="mt-5 customButton">
          login
        </button>
      </form>
    </div>
    </div>
  );
}

