import computer from "../../assets/computer.jpg";
import  "./Card-style.css";

function Card(){

    const product = [{
        name: "computer I7",
        price: "600$",
        rating: 4,
        image: computer
    },
    {
        name: "computer I7",
        price: "600$",
        rating: 4,
        image: computer
    }]
    return (
        <div className="card">
            <h2 className="card-title">Card</h2>
            {product.map(product=>
                <div className="card-item">
                    <img src={product.image} alt={product.name} className="product-image"/>
                    <p>{product.name}</p>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                    <p>{product.price}</p>
                    <button>🗑️</button>
                </div>
            )}
            <input type="text" placeholder="Enter coupon code"/>
            <button className="Apply">
                Apply
            </button>
            <div>
                <div>Subtotal:</div>
                <div>Shipping:</div>
                <div>Coupon: </div>
            </div>

            <div className={"total"}>
                Total:
            </div>

        </div>
    )

}

export default Card;