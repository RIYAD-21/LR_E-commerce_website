import React from 'react';
import './sign.css'; 

export default function LogIn() {
    return (
        <div className="container">
            <div className="logIn_side1">
                <div className="_form">
                    <h6>Welcome back !!!</h6>
                    <h1>Log In</h1>
                    <form>
                        <label htmlFor="">UserName</label>
                        <input type="text" placeholder="" required />
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="" required />
                        <button type="submit">Log In &rarr;</button>
                    </form>
                    <p>Don't have an account? <a href="/register">Register</a></p>
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