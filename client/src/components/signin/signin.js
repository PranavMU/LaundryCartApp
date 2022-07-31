import  {Header}  from "../header/header";
import padlock from "../assests/padlock.svg";
import Referral from "../referral/referral";
import Aboutus from "../aboutusfooter/aboutus";
import Footer from "../footer/footer";
import "../signin/signin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signin = ()=>{
    const [signupState,setSignupstate] = useState({})
    const navigate = useNavigate();
    const gotoregister = ()=>{
        navigate("/register");
    }
    const checktheuser = (e)=>{
        if(e.target.value.includes("@")){
            setSignupstate({...signupState,email: e.target.value})
            console.log(e.target.value);
        }
        else{
            setSignupstate({...signupState, phone: e.target.value});
            console.log(e.target.value);
        }
    }
    const handleLogin = (event)=>{
        event.preventDefault();;
        console.log(signupState);
        axios.post("http://localhost:3001/user/login",signupState).then((logindata)=>{
            localStorage.setItem("authorization",logindata.data.authToken);
        }).catch((err)=>{
            console.log(err)
        })
        // navigate("/order")
    }

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
            <button className="register-button" onClick={gotoregister}>Register</button>

            </div>
        </section>
        <section className="signin-container-2">
            <div className="signin-card">
                <div className="signin-text">
                    <p className="signin-12">SIGN IN</p>
                </div>
                <div className="vl"></div>
                <form>
                <div className="input-section">
                        <input id="email" type="text" placeholder="Mobile/Email" onChange={(e)=>{checktheuser(e)}}/>
                        <hr className="hr1"></hr>
                </div>
                <div className="password-section">
                    <input id="password" placeholder="Password" type="password" onChange={(e)=>{setSignupstate({...signupState, password: e.target.value})}}/>
                    <hr className="hr2"></hr>
                </div>
                <div className="forgot-password">
                    <p className="pass12">Forgot Password?</p>
                </div>

                </form>
            </div>
            <div className="signin-button-container">
            <button className="signin-button" type="submit" onClick={handleLogin}>Sign In</button>
            <div className="padlock-container">
                <img src={padlock} alt="err"></img>
            </div>
            </div>

        </section>
        <Referral/>
        <Aboutus/>
        <Footer/>
        </div>
        </>
    )
}

export default Signin;