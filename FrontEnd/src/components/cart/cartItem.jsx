import React from 'react';

export default function cartItem({product}){
    const increment = (id) => {
        // Logic to increment the quantity of the product in the cart
        console.log(`Incrementing product with id: ${id}`);
    }; 
    const decrement = (id) => {
        // Logic to decrement the quantity of the product in the cart
        console.log(`Decrementing product with id: ${id}`);
    };
    const deleteItem = (id) => {
        // Logic to remove the product from the cart
        console.log(`Removing product with id: ${id}`);
    };
    return(
        <>
            <div className="cart-item">
                <img src={product?.image} alt={product?.name} />
                <div className="cart-item-details">
                    <h3>{product?.name}</h3>
                    <p>Price: ${product?.price}</p>
                    <p>Quantity: {product?.quantity}</p>
                </div>
                <div className="cart-item-actions">
                    <button onClick={() => increment(product?.id)}>+</button>
                    <button onClick={() => decrement(product?.id)}>-</button>
                    <button onClick={() => deleteItem(product?.id)}>Remove</button>
                </div>
            </div>
        </>
    )
}