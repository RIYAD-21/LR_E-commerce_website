import React , { useState } from "react";
import { FaCartShopping ,FaRegHeart } from "react-icons/fa6"


export default function ProductCard(props) {
	const [isLiked, setIsLiked] = useState(false);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	const handleAddToFavorites = (e) => {
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
						<img src={props.product.image_url} alt={props.product.name} />	
						<button id="Favorites" onClick={handleAddToFavorites} ><span>♡</span></button>
					</div>
				  	<p id="Pname">{props.product.name}</p>
            		<p id="Pbrand">{props.product.brand}</p>
					<p id="Pprice">{props.product.price}$</p>
					<div id="Pcateg"> 
              			<span>{props.product.categorie}</span>	
            		</div>
					<p id="Psales">14k reviews</p>
					<div id="stars">⭐⭐⭐⭐⭐</div>
					<button id="addToCart" onClick={handleAddToCart} ><FaCartShopping size="1.5em" color="black" /></button>
				</div>
			</>

		)
}