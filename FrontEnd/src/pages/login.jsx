import '../components/registrationForm/sign.css'; 
import Register from "./register.jsx";
import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios.config.js";
import { useState } from 'react';
import { useUserStore } from "../store/useUserStore.jsx";
import toast from "react-hot-toast"; 

export default function LogIn() {

    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserStore();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const res = await API.post("/Auth/login", { email, password });
      const token = res.data.accessToken;
      const user = res.data.user;

      login(token, user);
      navigate("/home"); 
      toast.success("Login Successful")
    } catch (err) {
      if (err) {
        setError(err.message);
      } else {
        setError("Login failed");
        toast.error("Login failed")
      }
    }
  };

    return (
        <div className="sign_container">
            <div className="logIn_side1">
                <div className="_form">
                    <h6>Welcome back !!!</h6>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">email</label>
                        <input type="text" placeholder="" required  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">Log In &rarr;</button>
                    </form>
                    <p>Don't have an account? <a href="/Register">Register</a></p>
                </div>
            </div>
            <div className="logIn_side2">
                <div className="logIn_image">
                    <img src="./image1.png" alt="Log In" />
                </div>
            </div>
            
        </div>
    )
}