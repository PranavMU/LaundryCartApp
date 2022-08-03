import Modal from "../modals/modal";
import React, { useState,useEffect } from 'react';
import "./summary.css";

const Summary =({closesummary,orders})=>{
    console.log(orders)
    const[viewalert,setviewalert] = useState(false);
    // useEffect
    // fetch
if(viewalert){
    return <Modal setOpenModal ={setviewalert}/>
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
            <div className="track">
                    <ul type="none" className="track_v">
                        <li className="t_dis"><input type="radio"/>Pickedup<span className="line">------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Washed<span className="line">-------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Ironed<span className="line">-------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Delivered</li>
                    </ul>
                </div>
            <div className="ordersummary">
            {orders.producttype.map((obj,i)=>{
                return (
                <div className="order-details" key={i}>     
                    <span className="item-type">{obj.name}</span>
                    <span className="item-method">{obj.washType} </span>
                    <span className="item-eq">{obj.multiple}=</span>
                    <span className="item-price">{obj.price}</span>
                </div>
                )
            })}
        <span className="sec-sub" >Sub Total:</span>
        <span className="sec-val">{orders.subtotal}</span>
        <span className="pickup" >Pickup-Charges:</span>
        <span className="pick-val">90</span>
        
        <section className="total-bar">
            <span className="name-total">Total:</span>
            <div className="total-val">Rs {orders.subtotal+90}</div>
        </section>
            </div>
           
            <div className="downaddress">
                <p> Address</p>
                <div className="home">
                    <p className="home1"><strong>Home</strong></p>
                    <p>#223, 10th road, Jp Nagar, Bangalore</p>
                    <button onClick={()=> setviewalert(true)}>Cancel order</button>
                </div>
            </div>
           
        
    </div>
    </>
)
}

export default Summary;
