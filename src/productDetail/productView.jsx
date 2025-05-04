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
                    <p id='desc'>Product description goes here. It should be detailed and informative.</p>
                    <div className="rating">
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>(100 reviews)</p>
                        <p>In Stock</p>
                    </div>
                    <div className="price">
                        <span>$99.99</span>
                    </div>
                    <hr />
                    <div className="colors">
                        <p>Colors</p>
                        <label htmlFor="red" className="red"></label>
                        <input type="radio" htmlFor="red" id="red" className="red"/>
                        <input type="radio" id="blue" />
                        <input type="radio" id="green" />
                        <input type="radio" id="black" />
                    </div>
                    <div className="sizes">
                        <p>Size:</p>
                        <select name="size" id="size">
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>
                    <div className="miniCont">
                        <div className="quantity">
                            <p>Quantity:</p>
                            <input type="number" min="1" max="10" defaultValue="1" />
                        </div>
                        <div className="favorites">
                            <FaRegHeart size="1.5em"/>
                        </div>
                    </div>
                    <div className='miniCont'>
                        <button className="addToCart">Add to Cart</button>
                        <button className="buyNow">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}