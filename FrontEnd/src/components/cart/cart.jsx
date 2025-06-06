import computer from "/pshand1.png";
import  "./cartStyles.css";
// import check from "../checkOut&Payment/checkOut.jsx";
import React,{useState,useEffect} from "react";

function Cart(){
    const [Total, setTotal] = useState(0);
    const [Quantity,setQuantity] = useState(1);

    useEffect(() => {
        let i = 0;
        product.map(product =>  i+= product.price)
        setTotal(i)
    })
    

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
                    <img src={product.image} alt={product.name} className="product-image"/>
                    <p>{product.name}</p>
                    <button>-</button>
                    <p>{product.quantity}</p>
                    <button>+</button>
                    <p>{product.price}$</p>
                    <button onClick={() => {removeHandler(product.id)}}>🗑️</button>
                </div>
            )}
            <input type="text" placeholder="Enter coupon code"/>
            <button className="cart_btn">
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