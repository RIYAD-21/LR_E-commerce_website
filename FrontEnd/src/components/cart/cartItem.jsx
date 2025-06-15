import React from 'react';
import { useCartStore } from '../../store/useCartStore.jsx';
import './cartStyles.css'

export default function CartItem({product}){
    
    const {increment,decrement,deleteFromCart} = useCartStore()
     
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
                    <button onClick={() => deleteFromCart(product?.id)}>Remove</button>
                </div>
            </div>
        </>
    )
}