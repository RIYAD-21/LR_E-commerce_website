import computer from "/pshand1.png";
import  "./cartStyles.css";
import cartItem from "../components/cart/cartItem.jsx"
// import check from "../checkOut&Payment/checkOut.jsx";
import React,{useState,useEffect} from "react";

function Cart(){
    

    const removeHandler = (i) => {
        document.getElementById(`${i}`).innerHTML="";
    }

    const product = [{
        id:1,
        name: "computer I7",
        price: 600,
        rating: 4,
        image: computer,
        quantity:1,
    },
    {
        id:2,
        name: "computer I7",
        price: 600,
        rating: 4,
        image: computer,
        quantity:1,
    }]

    return (
        <div className="card">
            <h2 className="card-title">Cart</h2>
            {product.map(product=>
                <div className="card-item" id={product.id}>
                    <cartItem product={product}></cartItem>
                </div>
            )}
            <input type="text" placeholder="Enter coupon code"/>
            <button className="cart_btn" >
                Apply
            </button>
            <div>
                <div>Subtotal: {Total}$</div>
                <div>Shipping:</div>
                <div>Coupon: </div>
            </div>

            <div className={"total"}>
                Total: {Total}$
            </div>
            <a className="cart_btn check" href="check">Proceed To CheckOut</a>

        </div>
    )

}

export default Cart;