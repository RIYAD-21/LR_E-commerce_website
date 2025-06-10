import ProductCard from '../productCard.jsx'
import React from 'react'
import './productsCont.css'

export default function ProductsContainer(props) {
    return(
        <div id="global">
            <div className='products_container'>
                <div className='mini_bar'>
                    <h2>{props.name}</h2>
                    <div className='scroll_buttons'>
                        <button id="left">&#8592;</button>
                        <button id="right">&#8594;</button>
                    </div>
                </div>
                <div className='products_view'>
                    {/* <ProductCard  product={null} />
                    <ProductCard  product={null} />
                    <ProductCard  product={null} />
                    <ProductCard  product={null} />
                    <ProductCard  product={null} /> */}
                </div>
            </div>
        </div>
    );
}
