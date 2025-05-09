import React from 'react'
import { FaCartShopping } from "react-icons/fa6"
import { FaRegHeart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { Outlet } from 'react-router-dom'

function NavBar1() {

  return (
    <div className="navBar1__container">
      <div className="navBar1">
        <div className="navBar1_logo">
          <img src="/logo.png" alt="Logo LR E-commerce" />
          <p>LR E-commerce website <br /> Shop, Buy and Enjoy</p>
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
            <FaCartShopping size="2em"/>
            <p>Cart</p>
          </div>
          <div className="navBar1__menu__item">
            <FaRegHeart size="2em" color="red"/>
            <p>Favorites</p>
          </div>
          <div className="navBar1__menu__item">
            <CgProfile size="2.7em">
            </CgProfile>
            <p>LogIn / Register</p>
          </div>
        </div>
      </div>
    <Outlet />
    </div>
  
  )
}

export default NavBar1
