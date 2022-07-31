import "./productlist.css"
const productList={
                type:[
                    {
                        "name":"Shirts",
                        "description":"Lorem Ipsum is simply dummy text"
                    },
                    {
                        "name":"TShirts",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Trousers",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Jeans",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Boxers",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Joggers",
                        "description":"Lorem Ipsum is simply dummy text"
                    },{
                        "name":"Others",
                        "description":"Lorem Ipsum is simply dummy text"
                    },
                ]
}           

const Productlist=()=>{
    const handleclick=()=>{
        console.log("hi")
    }

    return (
        <>
            {
                productList.type.map((data,i)=>{
                    return(
                        <>
                        <div className="product-item">
                        <div className='name-des'>
                        <h4 className='product-name'>{data.name}</h4>
                        <h5 className='product-des' >{data.description}</h5>
                        </div>
                        <div>
                            <input className='product-quantity' type='number' />
                        </div>
                        <div className='name-de'>
                            <span className='wash-img' onClick={handleclick} ></span>
                            <span className='iron-img' onClick={handleclick}></span>
                            <span className='fold-img' onClick={handleclick}></span>
                            <span className='bleach-img' onClick={handleclick}></span>
                        </div>
                        <div className='main-btn'>
                        <button className='btn-reset' onClick={handleclick}>Reset</button>
                        </div>
                        </div>
                        </>
                    )

                })
            }
        </>
    )
}
export default Productlist