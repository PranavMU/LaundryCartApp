import './pastorders.css'
import Header from "../common/header"
import NavBar from "../common/navbar"
import Footer from "../common/footer"
import Search from "../common/search"
import React, { useState,useEffect } from 'react';
import eyeIcon from "../assests/eyeicon.svg"
import warningIcon from "../assests/warning.svg"
import Summary from "../Summary/summary";
import axios from "axios";
import { Modal} from 'react-bootstrap';

const Pastorders =()=>{
        const [data,setpost]=useState([])
        useEffect(()=>{
            axios.get("http://localhost:3001/order/history")
            
            .then((res)=>{setpost(res.data)})
            .catch((err)=>{console.log(err)})
        },[])
        return( 
 
        <>
        <Header/>
        <NavBar/>
        <Search/>
        <div className='page-titlebar'>
            <span className='orderid'>Order Id</span>
            <span className='orderdatetime'>Order Date & Time</span>
            <span className='StoreLocation' >Store Location</span>
            <span className='City'>City</span>
            <span className='StorePhone'>Store Phone</span>
            <span className='TotalItems'>Total Items</span>
            <span className='Price'>Price</span>
            <span className='Status'>Status</span>
            <span className='canc'>"  "</span>
            <span className='view'>view"</span>
        </div>
        {
            data.map((order,i)=>{
                return (
        <div className='page-titlebar' key={i}>
            <span className='orderid'>Order Id</span>
            <span className='orderdatetime'>Order Date & Time</span>
            <span className='StoreLocation' >Store Location</span>
            <span className='City'>City</span>
            <span className='StorePhone'>Store Phone</span>
            <span className='TotalItems'>Total Items</span>
            <span className='Price'>Price</span>
            <span className='Status'>Status</span>
            <span className='canc'>"  "</span>
            <span className='view'>view</span>
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







