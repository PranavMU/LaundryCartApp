import { useState } from "react"
import "./style.css"
const Summary=(props)=>{
    console.log(props)
    const [add, setAdd]=useState(false)
    return props.trigger ? (
        <>
        <div className="summary-page">
        <div className="summary-header">
            <h2 className="header-sum" >Summary</h2>
            <h2 className="header-close" onClick={()=>{props.setTrigger(false); props.setCan(false)}} >X</h2>
        </div>
        <div className="store-add">
            <select className="store-loc" onChange={(e)=>{if(e.target.selectedIndex===1){setAdd(true)}else{setAdd(false)}}}>
                <option value="" >Store Location</option>
                <option>Jp Nagar</option>
            </select>
            <span className="store-name">Store Address:</span>
            <span className="store-phone" >Phone:</span>
            <span className="store-add-val" >{add ? 'Near Phone booth, 10th road,' :"—"}</span>
            <span className="store-phone-val" >{add ? "91 9999999999" :"—"}</span>
        </div>
        <div className="section-name" >Order Details</div>
            {props.state.map((obj,i)=>{
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
        <span className="sec-val">{props.subtotal}</span>
        <span className="pickup" >Pickup-Charges:</span>
        <span className="pick-val">90</span>
        
        <section className="total-bar">
            <span className="name-total">Total:</span>
            <div className="total-val">Rs {props.subtotal+90}</div>
        </section>
        <div className="user-add">Address</div>
        <div className="btn-bar" >
            <button className="btn-confirm" onClick={()=>{props.setconfirm(true); props.setTrigger(false) ;setTimeout(() => {props.setConfirm(false);}, 5000);}} >Confirm</button>
        </div>
        </div>
        </>
    ) : ""
}
export default Summary