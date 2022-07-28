import "./header.css";
import { useNavigate } from "react-router-dom";
export function Header(){
    const navigate = useNavigate();
    const gotosignin = ()=>{
        navigate("/");
    }
    return (
        <>
        <div className="header-container">
            <div className="header-text-container">
                <h3 className="header-text">LAUNDRY</h3>
            </div>
            <div className="header-list-container">
                <ul className="ul-container">
                    <li className="home"><p>Home</p></li>
                    <li className="pricing"><p>Pricing</p></li>
                    <li className="career"><p>Career</p></li>
                    <li className="ul-singin"><p onClick={gotosignin}>Sign In</p></li>
                </ul>
            </div>
        </div>
        </>
    )
}