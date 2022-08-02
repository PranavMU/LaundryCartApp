import './pastorders.css'
import Header from "../common/header"
import NavBar from "../common/navbar"
import Footer from "../common/footer"
import Search from "../common/search"
import { getToken } from '../../utility/utility'
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import eyeIcon from "../assests/eyeicon.svg"
// import warningIcon from "../assests/warning.svg"
// import Summary from "../Summary/summary";
import axios from "axios";
import Modal from "../modals/modal";
import Summary from '../summary/summary'

const Pastorders =()=>{
        const [orders,setorders]=useState([])
        const navigate = useNavigate();
        const [modalOpen, setModalOpen] = useState(false);
        const [summ,setsumm] = useState(false);
        const gotocreateorder = ()=>{
            navigate("/order");
        }
        useEffect(()=>{
        let token=getToken()
        console.log(token)
        let header={Authorization:token}

        axios.get('http://localhost:3001/order/history',{headers:header})
        .then(function (response) {
            console.log(response.body)

            setorders(response.data.orders)
           console.log(response.data)
            }).catch((err)=> {
                console.log(err)
            })
        
        const cancelOrderfunc=()=>{
            let token=getToken()
            let header={Authorization:"bearer "+token}
            
            axios.delete('http://localhost:3001/order/cancel/:id',{headers:header})
            .then(function (response) {
                console.log(response)
                if(response.status===200){           
                    console.log(response.data)
                    
                
                }
            })
        }
        },[]);
        return( 
 
        <>
        
        <Header/>
        <NavBar/>
        <Search/>
        
        <div><h2 className='topdiv' >Orders | 0</h2></div>
        <button className="goto" onClick={gotocreateorder}>Create</button>
        <div className='page-titlebar'>
            <span className='orderid'>Order Id</span>
            <span className='orderdatetime'>Order Date & Time</span>
            <span className='StoreLocation' >Store Location</span>
            <span className='City'>City</span>
            <span className='StorePhone'>Store Phone</span>
            <span className='TotalItems'>Total Items</span>
            <span className='Price'>Price</span>
            <span className='Status'>Status</span>
            <span className='canc'>   </span>
            <span className='view'>view</span>
            
        </div>
        {/* {
            data.map((orders,i)=>{
                return ( */}
        <div className='page-titlebar2 '>
            <span className='orderid2'>OR00001</span>
            <span className='orderdatetime2'>10 OCT 2021, 10:15</span>
            <span className='StoreLocation2' >Jp Nagar</span>
            <span className='City2'>Chennai</span>
            <span className='StorePhone2'>+91 9768647989</span>
            <span className='TotalItems2'>10</span>
            <span className='Price2'>470 Rs</span>
            <span className='Status2'>Redy to pickup</span>
            <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}>Cancel order</button>{modalOpen && <Modal setOpenModal={setModalOpen} />}

            <img src={eyeIcon} className='view2' alt="err" onClick={() => {
          setsumm(true);
        }}></img>{summ && <Summary closesummary={setsumm} />}

        </div>
                {/* )
            })} */}

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







