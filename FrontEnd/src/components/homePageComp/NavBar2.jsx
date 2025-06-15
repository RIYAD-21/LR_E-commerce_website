import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { IoLogOutOutline } from "react-icons/io5";
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';

function NavBar2() {
  useEffect(()=>{
    const p = document.getElementById('1');
    const ps = document.getElementById("ps");
    p.addEventListener('mouseover',()=>{
    ps.style.display="flex";
    })
    ps.addEventListener('mouseleave',()=>{
    ps.style.display="none";
    })
  })
  
  
  return (
    <>
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
              <FiShoppingCart size="1.75em" color='black'/>
              <div className="counter">0</div>
            </a>
          </div>
          <div className="navBar1__menu__item">
            <a href="favorites">
              <FaRegHeart size="1.7em" color="black"/>
              <div className="counter">0</div>
            </a>
            
          </div>
          <div className="navBar1__menu__item profile" id='1'>
            <CgProfile size="1.7em" />
            <p>Welcome,User</p>
          </div>
        </div>
      </div>
    <Outlet />
    </div>
    <div>
      <div className='profile_select' id="ps">
      <a href="client">
        <CgProfile size="1.5em"></CgProfile>
        <p>View Profile</p>
      </a>
      <a href="cart">
        <FiShoppingCart  size="1.5em" ></FiShoppingCart>
        <p>Cart</p>
      </a>
      <a href="favorites">
        <FaRegHeart size="1.5em" ></FaRegHeart>
        <p>Favorites</p>
      </a>
      <a href="home">
        <IoLogOutOutline size="1.5em" color='red' ></IoLogOutOutline>
        <p style={{color:"red"}}>LogOut</p>
      </a>
      </div>
    </div>
    
    </>
    
  )
}

export default NavBar2
