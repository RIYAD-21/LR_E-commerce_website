import React from "react";
import { FaCartShopping } from "react-icons/fa6"

export default function ProductContainer() {
		return(
			<>
				<div className="product-detail">
          <img src="/carToy.jpg" alt="" />
				  <p id="Pname">Product Namejklm</p>
            <p id="Pbrand">Product Brand</p>
						<p id="Pprice">999.99$</p>
						<div id="Pcateg"> 
              <span>Categorie</span>
            </div>
						<p id="Psales">14k sales</p>
						<div>Stars</div>
						<button><FaCartShopping size="1.5em" color="black" /></button>
				</div>
			</>

		)
}