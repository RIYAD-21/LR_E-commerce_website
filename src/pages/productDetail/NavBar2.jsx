import React from 'react'
import { FaCartShopping } from "react-icons/fa6"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import "./productDetail.css"

function NavBar2() {

  return (
    <div className="navBar1__container">
      <div className="navBar1">
        <div className="navBar1_logo">
          <img src="/logo.png" alt="Logo LR E-commerce" />
          <div className="searchBar__input2">
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
            <p>Welcome,<br />User</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar2
