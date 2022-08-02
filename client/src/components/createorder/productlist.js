import "./productlist.css"
import shirt from "../assests/images.jpeg"
import tshirt from "../assests/tshirt.jpeg"
import trouser from "../assests/trouser.jpg"
import jeans from "../assests/jeans.jpg"
import boxers from "../assests/boxers.jpg"
import joggers from "../assests/joggers.jpeg"
import others from "../assests/others.jpg"
import {useState} from "react"
import Items from "./items"
import Alert from "./alert"
import Summary from "./summary"
import { useNavigate } from "react-router-dom"

let arr=[shirt,tshirt,trouser,jeans,boxers,joggers,others]
const productList={
                type:[
                    {
                        "name":"Shirts",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[0],
                        price:10,
                    },
                    {
                        "name":"TShirts",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[1],
                        price:10,
                    },{
                        "name":"Trousers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[2],
                        price:15,
                    },{
                        "name":"Jeans",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[3],
                        price:20,
                    },{
                        "name":"Boxers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[4],
                        price:15,
                    },{
                        "name":"Joggers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[5],
                        price:20,
                    },{
                        "name":"Others",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[6],
                        price:25,
                    },
                ]
}           



const Productlist=()=>{
    const navigate =useNavigate()
    const [buttonpopup, setbuttonpopup]=useState(false)
    const [state,setState]=useState([])
    const [confirm,setconfirm]=useState(false)

    const subtotal=state.reduce((v,obj)=>v +obj.price,0)
    // const totalcount =state.reduce((v,obj)=> v+obj.count,0)

    const handlecancel=()=>{
        navigate('/order/history')

    }
    const handlesummary=()=>{
        setbuttonpopup(true)
    }

    return (
        <>
            {confirm && <Alert/>}
            {
                productList.type.map((content,i)=>{
                    
                    return(
                        <Items content={content} key={i} state={state} setState={setState} />
                    )

                })
            }
            <div>
                <button className='btn-cancel'onClick={handlecancel} >Cancel</button>
                <button className='btn-proceed' onClick={handlesummary} >Proceed</button>
            </div>
            <Summary trigger={buttonpopup} setTrigger={setbuttonpopup} state={state} subtotal={subtotal} setconfirm={setconfirm} sett />
        </>
    )
}
export default Productlist