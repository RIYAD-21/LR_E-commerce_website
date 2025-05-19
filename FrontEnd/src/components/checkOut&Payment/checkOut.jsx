import './checkOut&Payment.css'

export default function CheckOut(){
    return(
        <div className='big_cont'>
            <div className='check_container'>
                <div className='billing_detail'>
                    <h2>Billing details</h2>
                    <form action="">
                        <label htmlFor="">Full Name*</label>
                        <input type="text" required/>
                        <label htmlFor="">Adress*</label>
                        <input type="text" required/>
                        <label htmlFor="">City*</label>
                        <input type="text" required/>
                        <label htmlFor="">Country*</label>
                        <input type="text" required/>
                        <label htmlFor="">Phone Number*</label>
                        <input type="tel" placeholder='+999 9999999' required />
                        <label htmlFor="">E-mail*</label>
                        <input type="email" required/>
                    </form>
                </div>
                <div className='cont2'>
                    <div className='cart_products'>

                    </div>
                    <h4>Subtotal: <span>999$</span></h4>
                    <hr />
                    <h4>Shipping: <span>free</span></h4>
                    <hr />
                    <h4>Coupon: <span>-50%</span></h4>
                    <hr />
                    <h4 id="total">Total: <span>599$</span></h4>
                    <form action="">
                        <input type="radio" />
                        <label htmlFor="">Cash on delivery</label>
                        <input type="radio" />
                        <label htmlFor="">Pay by credit card</label>
                    </form>
                </div>
            </div>
            <div className='conf_btns'>
                <button id="cancel">Cancel and Return</button>
                <button id="confirm">Confirm Payment</button>
            </div>
        </div>
    );
};