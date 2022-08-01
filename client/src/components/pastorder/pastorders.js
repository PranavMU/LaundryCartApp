import './pastorders.css'
import Header from "../common/header"
import NavBar from "../common/navbar"
import Footer from "../common/footer"
import Search from "../common/search"
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import eyeIcon from "../assests/eyeicon.svg"
// import warningIcon from "../assests/warning.svg"
// import Summary from "../Summary/summary";
// import axios from "axios";
// import { Modal} from 'react-bootstrap';

const Pastorders =()=>{
        const [data,setpost]=useState([])
        const navigate = useNavigate();
        const gotocreateorder = ()=>{
            navigate("/order");
        }
        useEffect(()=>{
            const authToken = localStorage.getItem("authorization");
            //fetch(url, "")
            fetch("http://localhost:3001/order/history",{
                method: "GET",
                // body: JSON.stringify(payload),
                headers: {
                    authorization: authToken,
                    "Content-Type": "application/json"
                }
            }).then((data)=>data.json()).then((res)=> {
                setpost(res.data.orders);
            }).catch((err)=> {
                console.log(err)
            })
        
        },[])
        return( 
 
        <>
        <Header/>
        <NavBar/>
        <Search/>
        <div><h2 className='topdiv' >Orders | 0</h2></div>
        <button onClick={gotocreateorder}>Create</button>
        <div className='page-titlebar'>
            <span className='orderid'>Order Id</span>
            <span className='orderdatetime'>Order Date & Time</span>
            <span className='StoreLocation' >Store Location</span>
            <span className='City'>City</span>
            <span className='StorePhone'>Store Phone</span>
            <span className='TotalItems'>Total Items</span>
            <span className='Price'></span>
            <span className='Status'>Status</span>
            <span className='canc'>"  "</span>
            <span className='view'>view</span>
        </div>
        {
            data.map((orders,i)=>{
                return (
        <div className='page-titlebar2 ' key={i}>
            <span className='orderid2'>OR00001</span>
            <span className='orderdatetime2'>10 OCT 2021, 10:15</span>
            <span className='StoreLocation2' >Jp Nagar</span>
            <span className='City2'>Chennai</span>
            <span className='StorePhone2'>+91 9768647989</span>
            <span className='TotalItems2'>10</span>
            <span className='Price2'>470 Rs</span>
            <span className='Status2'>Redy to pickup</span>
            <span className='canc2'>   </span>
            <img src={eyeIcon} className='view2' alt="err"></img>
        </div>
                )
            })}

        <Footer/>
      
            
        
        </>
        )
        
    };
export default Pastorders


//function PastOrder() {
    
//     const [orders, setOrders] = useState([]);
//     const [summary, setSummary] = useState(false);
//     const [cancelOrder, setCancelOrder] = useState(false);
//     const [cancelOrderIndex, setcancelOrderIndex] = useState();
//     const [Alert, AlertWrong] = useState(false)
//     const getData=()=>{
//         const authToken = localStorage.getItem("authorization");
        
//         axios.get('http://localhost:3001/order/history', {
//             headers: {
//                 authorization: authToken
//             }
//         }).then(function (response) {
//             this.setState({posts:response.data.posts.reverse()})//queue order sort
//             setOrders(response.data.order)
//             console.log(response.data)
//         })
//         .catch(function (error) {
//             AlertWrong(true)
//             // handle error
//             console.log(error);
//         })
    
//     }
//     const cancelOrderfunc=()=>{
//         const authToken = localStorage.getItem("authorization");   
//         let body={
//             id:orders[cancelOrderIndex]._id
//         }
        
//         axios.post('http://localhost:3001/order/cancel/:id', {
//             headers: {
//                 authorization: authToken
//             }
//         }).then(function (response) {
//             console.log(response)
//             if(response.status===200){           
//                 console.log(response.data)
//                 getData()
            
//             }
//         })
//         .catch(function (error) {
//             setWentWrong(true)
//             // handle error
//             console.log(error);
//         })
//     }

//     useEffect(() => {
//         getData()
//       },[]);
//       return
//       a
// }







