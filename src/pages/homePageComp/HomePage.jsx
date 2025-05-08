import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function HomePage() {
    return (
        <>
            <div className="homePage">
                <div className="firstCont">
                    <div className="searchBar">
                        <div className="searchBar__categories">
                            <IoMenu size="2.5em" color="white"/>
                        </div>  
                        <div className="searchBar__input">
                            <input type="text" placeholder="what are you loking for ?" />
                            <button><FaSearch size="1.2em" color="white"/></button>
                        </div>
                    </div>
                    <div className="info">
                        <span>
                            <h1>Shop, Buy and Enjoy</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, voluptatibus.</p>
                            <button className="btn">Shop Now</button>
                        </span>
                        <img src="/cart-sales-photo.png" alt="cart" />
                    </div>
                </div>
            </div>
        </>
    )
}
