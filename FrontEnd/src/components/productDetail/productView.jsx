import React from 'react';
import { FaRegHeart } from "react-icons/fa"

export default function ProductView(){
    return(
        <>
            <div className="productView_container">
                <div className="miniImaes">
                    <img src="./pshand1.png" alt="p1" />
                    <img src="./pshand2.png" alt="p2" />
                    <img src="./pshand3.png" alt="p3" />
                    <img src="./pshand4.png" alt="p4" />
                </div>
                <div className="mainImage">
                    <img src="./pshandBig.png" alt="Product" />
                </div>
                <div className="productInfo">
                    <h1>Product Name</h1>
                    <p id='desc'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Eligendi esse consectetur, quos minus excepturi quis nihil, doloremque 
                        hic minima vitae ea repellendus autem provident beatae aliquam quasi perspiciatis et. 
                        Expedita.
                    </p>
                    <div className="rating">
                        <span>⭐⭐⭐⭐⭐</span>
                        <p id="reviews">(100 reviews)</p>
                        <p id='disponibility'>In Stock</p>
                    </div>
                    <div className="price">
                        <span>$99.99</span>
                    </div>
                    <hr className='separator' />
                    <div className="miniCont _color">
                        <p>Colors :</p>
                        <button id="red"></button>
                        <button id='blue' ></button>
                        <button id="green"></button>
                    </div>
                    <div className="miniCont _size">
                        <p>Size :</p>
                        <div className='sizeChoice'>s</div>
                        <div className='sizeChoice'>m</div>
                        <div className='sizeChoice'>l</div>
                        <div className='sizeChoice'>xl</div>
                        <div className='sizeChoice'>xxl</div>
                    </div>
                    <div className="miniCont">
                        <div className="quantity">
                            <button id='minus'>-</button>
                            <div><p>5</p></div>
                            <button id='plus'>+</button>
                        </div>
                        <div className="favorites">
                            <FaRegHeart size="1.5em"/>
                        </div>
                    </div>
                    <div className='miniCont _btnCont'>
                        <button className="addToCart">Add to Cart</button>
                        <button className="buyNow">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}