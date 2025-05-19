
export default function Register() {
    return(
        <>
            <div className="sign_container">
                
                <div className="registration_side2">
                    <div className="registration_image">
                        <img src="./image2.png" alt="Register" />
                    </div>
                </div>
                <div className="registration_side1">
                    <div className="_form">
                        <h6>Welcome to our website !!!</h6>
                        <h1>Register</h1>
                        <form>
                            <label htmlFor="">UserName</label>
                            <input type="text" placeholder="" required />
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="" required />
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="" required />
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" placeholder="" required />
                            <button type="submit">Register &rarr;</button>
                        </form>
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}