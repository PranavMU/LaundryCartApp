import { Header } from "../header/header";
import padlock from "../assests/padlock.svg";
import "../signin/signin.css";
const Signin = ()=>{
    return(
        <>
        <div className="signin-container">
        <Header/>
        <section className="left-section-container">
            <div>
                <p className="core-text">Laundry Service</p>
                <p className="slogan">Doorstep Wash & Dryclean Service</p>
            </div>
            <div className="da-1">
                <p className="da-12">Don't have An Account?</p>
            </div>
            <div className="button-container">
            <button className="register-button">Register</button>

            </div>
        </section>
        <section className="signin-container-2">
            <div className="signin-card">
                <div className="signin-text">
                    <p className="signin-12">SIGN IN</p>
                </div>
                <div className="vl"></div>
                <div className="input-section">
                        <input id="email" placeholder="Mobile/Email"/>
                        <hr className="hr1"></hr>
                </div>
                <div className="password-section">
                    <input id="password" placeholder="Password"/>
                    <hr className="hr2"></hr>
                </div>
                <div className="forgot-password">
                    <p className="pass12">Forgot Password?</p>
                </div>
            </div>
            <div className="signin-button-container">
            <button className="signin-button">Sign In</button>
            <div className="padlock-container">
                <img src={padlock} alt="err"></img>
            </div>
            </div>

        </section>

        </div>
        </>
    )
}

export default Signin;