import ProductContainer from '../productContainer.jsx'
import './productsCont.css'

export default function ProductsContainer() {
    return(
        <div id="global">
            <div className='products_container'>
                <div className='mini_bar'>
                    <h2>Top Categories</h2>
                    <div className='scroll_buttons'>
                        <button id="left">&#8592;</button>
                        <button id="right">&#8594;</button>
                    </div>
                </div>
                <div className='products_view'>
                    <ProductContainer />
                    <ProductContainer />
                    <ProductContainer />
                    <ProductContainer />
                    <ProductContainer />
                </div>
            </div>
        </div>
    );
}
