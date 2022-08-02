import Modal from "../modals/modal";
import React, { useState,useEffect } from 'react';
import "./summary.css";

const Summary =({closesummary})=>{
    const[viewalert,setviewalert] = useState(false);
    // useEffect
    // fetch
if(viewalert){
    return <Modal closesummary={setviewalert}/>
}
return(
    <>
    <div className="sumcontainer">
        
            <div className="header">
                <h2>Summary</h2>
                
            </div>
            <div className="topaddress">
            <ul type="none">
                <li className="Title">Store Address</li>
                <li className="tval">Jp Nagar</li>
            </ul>
            <ul type="none">
                <li className="Title">Store Address:</li>
                <li className="tval">Near Phone booth, 10th road,</li>
            </ul>
            <ul type="none" className="three">
                <li className="Title">Phone</li>
                <li className="tval">91-989898989</li>
            </ul>
            <button  className="close" onClick={() => closesummary(false)}> X </button>
            </div>
            <div className="statusbar">
                <p>area for progress bar</p>
            </div>
            <div className="ordersummary">
                <p>Order Details</p>
                <div className="totalbar">
                </div>
            </div>
            <div className="downaddress">
                <p> Address</p>
                <div className="home">
                    <p className="home1"><strong>Home</strong></p>
                    <p>#223, 10th road, Jp Nagar, Bangalore</p>
                </div>
            </div>
            <div className="footer">
                <button onClick={()=> setviewalert(true)}>Cancel order</button>
            </div>
        
    </div>
    </>
)
}

export default Summary;