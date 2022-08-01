import "./style.css"
const Summary=()=>{
    return (
        <>
        <div className="summary-page">
        <div className="summary-header">
            <h2 className="header-sum" >Summary</h2>
            <h2 className="header-close" >X</h2>
        </div>
        <div className="store-add">
            <input className="store-loc" placeholder="Store Location" type='option' />
            <span className="store-name">Store Address:</span>
            <span className="store-phone" >Phone:</span>
        </div>
        <div className="section-name" >Order Details</div>
        <div className="sec-sub" >Sub Total:</div>
        <div className="pickup" >Pickup-Charges:</div>
        <section className="total-bar">
            <span className="name-total">Total:</span>
        </section>
        <div className="user-add">Address</div>
        <div className="btn-bar" >
            <button className="btn-confirm" >Confirm</button>
        </div>
        </div>
        </>
    )
}
export default Summary