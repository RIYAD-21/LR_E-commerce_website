import ProductCard from '../productCard.jsx'
import React from 'react'
import { useProductStore } from '../../store/useProductStore.jsx';
import './productsCont.css'

export default function ProductsContainer(props) {
    const { products } = useProductStore();

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
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
