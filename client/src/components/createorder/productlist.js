import "./productlist.css"
import shirt from "../assests/images.jpeg"
import tshirt from "../assests/tshirt.jpeg"
import trouser from "../assests/trouser.jpg"
import jeans from "../assests/jeans.jpg"
import boxers from "../assests/boxers.jpg"
import joggers from "../assests/joggers.jpeg"
import others from "../assests/others.jpg"
import {useState} from "react"

let arr=[shirt,tshirt,trouser,jeans,boxers,joggers,others]
const productList={
                type:[
                    {
                        "name":"Shirts",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[0]
                    },
                    {
                        "name":"TShirts",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[1]
                    },{
                        "name":"Trousers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[2]
                    },{
                        "name":"Jeans",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[3]
                    },{
                        "name":"Boxers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[4]
                    },{
                        "name":"Joggers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[5]
                    },{
                        "name":"Others",
                        "description":"Lorem Ipsum is simply dummy text",
                        "img":arr[6]
                    },
                ]
}           



const Productlist=()=>{
    const [isactive,setisactive]=useState({wash:false,iron:false,fold:false,bleach:false})
    const [alldata,setdata]=useState({})
    const handleclick=()=>{
        console.log("hi")
    }
    const handlewash=(e)=>{
        setisactive(current => !current);
        if(isactive){
            e.target.setAttribute("style", 'background-image:url(/washing-machine.svg')
            setdata({...alldata,washing:""})
        }else{
            e.target.setAttribute("style", 'background-image:url(/washing-machin.svg)')
            setdata({...alldata,washing:10})
        }
    
    }
    const handleiron=(e)=>{
        
    }

    return (
        <>
            {
                productList.type.map((data,i)=>{
                    
                    return(
                        <>
                        <div className="product-item" >
                        <div className='name-des'>
                            <img className="product-img" src={data.img} alt=""/>
                        </div>
                        <div className='name-des'>
                        <h3 className='product-name'>{data.name}</h3>
                        <h4 className='product-des' >{data.description}</h4>
                        </div>
                        <div>
                            <input className='product-quantity' min='1' type='number' onChange={(e)=>{setdata({...alldata, quantity: e.target.value})}} />
                        </div>
                        {/* style={{backgroundImage: isactive ? "url(/washing-machine.svg)": "url(/washing-machin.svg)"}} */}
                        <div className='name-de'>
                            <span className='wash-img' key={i}  onClick={handlewash}  ></span>
                            <span className='iron-img' onClick={handleiron}></span>
                            <span className='fold-img' onClick={handlefold}></span>
                            <span className='bleach-img' onClick={handlebleach}></span>
                        </div>
                        <div className="order-price" >{ isactive && alldata.quantity ? `${alldata.quantity}x${alldata.washing}=${alldata.quantity*alldata.washing}` : '_'}</div>
                        <div className='main-btn'>
                        <button className='btn-reset' onClick={handleclick}>Reset</button>
                        </div>
                        </div>
                        </>
                    )

                })
            }
            <div>
                <button className='btn-cancel' >Cancel</button>
                <button className='btn-proceed' >Proceed</button>
            </div>
        </>
    )
}
export default Productlist