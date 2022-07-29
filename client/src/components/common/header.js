import "./header.css"
const Header=()=>{
    return (
        <>
        <div className="header-main">
        <div className="header-logo" >
            <h1 className="header-name">Laundry</h1>
        </div>
        <div className="header-btn" >
            <ul className="header-ul">
                <li className="header-price"><p>Pricing</p></li>
                <li className="header-career"><p>Career</p></li>
                <div className="header-username">
                <img className="header-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvkLE9Ne2P3N_ZK-5vyXO4RKE3BDEe_26oA&usqp=CAU" alt="#"/>
                <h3 className="user-p">User Name</h3>
                </div>
            
                
            </ul>
        </div>
        </div>
        </>
    )
}
export default Header