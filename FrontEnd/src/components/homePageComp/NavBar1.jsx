import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { Outlet } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import LogIn from "../registrationForm/LogIn.jsx"
import Register from "../registrationForm/Register.jsx"
function NavBar1() {

  return (
    
    <div className="navBar1__container">
      <div className="navBar1">
        <div className="navBar1_logo">
          <a href="home"><img src="/logo.png" alt="Logo LR E-commerce" /></a>
          <div className="searchBar__input">
            <input type="text" placeholder="what are you loking for ?" />
            <button><FaSearch size="1.2em" color="white"/></button>
          </div>
        </div>
        <div className="navBar1__menu">
          <div className="FCL_info">
            <div className="flag"></div>
            <span>
                <p>Curr</p>
                <p>Lang</p>
            </span>
          </div>
          <div className="navBar1__menu__item">
            <a href="cart">
              <FiShoppingCart size="2em" color='black'/>
              <div className="counter">0</div>
            </a>
          </div>
          <div className="navBar1__menu__item">
            <a href="favorites">
              <FaRegHeart size="2em" color="black"/>
              <div className="counter">0</div>
            </a>
            
          </div>
          <div className="navBar1__menu__item btns">
            <div id='login'><a href="LogIn">Login</a></div>
            <div><a href="Register">Register</a></div>
          </div>
        </div>
      </div>
    <Outlet />
    </div>
  
  )
}

export default NavBar1
