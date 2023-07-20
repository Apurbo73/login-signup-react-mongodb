import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    async function submit(e) {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8000/", {
          name,
          email
        });
      } catch (e) {
        console.log(e);
      }
    }
  return (
    <div>
      <h1> login</h1>
      <form action="POST">
        <input
          type="text"
          placeholder="name"
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>Or</p>
      <Link to="/signup">signup</Link> <br />
    </div>
  );
};

export default Signup;
