import React , { useState } from "react";
import { FaCartShopping ,FaRegHeart } from "react-icons/fa6"


export default function ProductContainer() {
	const [isLiked, setIsLiked] = useState(false);
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	
	const handleAddToFavorites = (e) =>{
		e.preventDefault();
		setIsLiked(!isLiked);
		if(isLiked){
			e.target.style.color = "red";
		}else{
			e.target.style.color = "black";
		}
	}

	const handleAddToCart = (e) =>{
		e.preventDefault();
		setIsAddedToCart(!isAddedToCart);
		if(isAddedToCart){
			e.target.style.color = "transparent";
		}else{
			e.target.style.color = "black";
		}
	}

		return(
			<>
				<div className="product-detail" id="21" >
					<div className="product-image">
						<img src="/carToy.jpg" alt="" />	
						<button id="Favorites" onClick={handleAddToFavorites} ><span>♡</span></button>
					</div>
				  	<p id="Pname">Product Namejklm</p>
            		<p id="Pbrand">Product Brand</p>
					<p id="Pprice">999.99$</p>
					<div id="Pcateg"> 
              			<span>Categorie</span>
            		</div>
					<p id="Psales">14k sales</p>
					<div id="stars">⭐⭐⭐⭐⭐</div>
					<button id="addToCart" onClick={handleAddToCart} ><FaCartShopping size="1.5em" color="black" /></button>
				</div>
			</>

		)
}