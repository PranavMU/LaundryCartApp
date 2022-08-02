import { useEffect, useState } from "react"
import washNormal from "../assests/washing-machine.svg"
import washBlue from "../assests/washing-machine (1).svg"
import ironingNormal from "../assests/ironing.svg"
import ironingBlue from "../assests/ironing (1).svg"
import towelNormal from "../assests/towel.svg"
import towelBlue from "../assests/towels.svg"
import bleachNormal from "../assests/bleach.svg"
import bleachBlue from "../assests/bleach (1).svg"
const Items=({content,state,setState})=>{
    const [quantity, setquantity] = useState(0);
    const [washSelected, setwashSelected] = useState(washNormal);
    const [ironingSelected, setironingSelected] = useState(ironingNormal);
    const [towelSelected, settowelSelected] = useState(towelNormal);
    const [bleachSelected, setbleachSelected] = useState(bleachNormal);
  
    let count = 0;
    if (washSelected === washBlue){
      count++
      if(content.name==="Shirts"){
        content.price=10
      }
      else if(content.name==="TShirts"){
        content.price=10
      }
      else if(content.name==="Trousers"){
        content.price=15
      }else if(content.name==="Jeans"){
        content.price=20
      }else if(content.name==="Boxers"){
        content.price=15
      }else if(content.name==="Joggers"){
        content.price=20
      }else{
        content.price=25
      }
    } 
    if (ironingSelected === ironingBlue){
      count++
      if(content.name==="Shirts"){
        content.price=10
      }
      else if(content.name==="TShirts"){
        content.price=10
      }
      else if(content.name==="Trousers"){
        content.price=15
      }else if(content.name==="Jeans"){
        content.price=20
      }else if(content.name==="Boxers"){
        content.price=15
      }else if(content.name==="Joggers"){
        content.price=20
      }else{
        content.price=25
      }
    } 
    if (towelSelected === towelBlue){
      count++
      if(content.name==="Shirts"){
        content.price=15
      }
      else if(content.name==="TShirts"){
        content.price=15
      }
      else if(content.name==="Trousers"){
        content.price=20
      }else if(content.name==="Jeans"){
        content.price=25
      }else if(content.name==="Boxers"){
        content.price=20
      }else if(content.name==="Joggers"){
        content.price=25
      }else{
        content.price=30
      }
    } 
    if (bleachSelected === bleachBlue){
      count++
    } 
  
    useEffect(() => {
      const newState = state;
      if (quantity * content.price * count === 0) {
        for (let i = 0; i < newState.length; i++) {
          if (newState[i].name === content.name) {
            newState.splice(i, 1);
            break;
          }
        }
  
        return;
      }
  
      const data = {
        name: content.name,
        washType: `${washSelected === washBlue ? 'Washing ' : ''}${ironingSelected === ironingBlue ? ',Ironing ' : ''}${towelSelected === towelBlue ? ',DryCleaning ' : ''}${bleachSelected === bleachBlue ? ',Bleaching ' : ''}`,
        multiple: `${quantity}X${content.price * count}`,
        price: quantity * content.price * count,
        count: Number(quantity),
      };
  
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].name === content.name) {
          newState.splice(i, 1);
          break;
        }
      }
      setState([...newState, data]);
    }, [quantity * content.price * count]);
  
    const handlereset = () => {
      setquantity(0);
      setwashSelected(washNormal);
      setironingSelected(ironingNormal);
      settowelSelected(towelNormal);
      setbleachSelected(bleachNormal);
    };
    return (
        <>
        <div className='product-item'>
        <div className='name-des'>
          <img className='product-img' src={content.image} alt=""/>
        </div>
          <div className='name-des'>
            <h3 className='product-name'>{content.name}</h3>
            <h4 className='product-des'>{content.description}</h4>
        </div>
        <div>
          <input className='product-quantity' type='number' min={1}  onChange={(e) => {setquantity(e.target.value)}}/>
        </div>
        <div className="name-de">
            <img className='wash-img'  src={washSelected} alt='washing_machine' onClick={() => setwashSelected(washSelected === washBlue ? washNormal : washBlue)}/>
            <img className='iron-img' src={ironingSelected} alt='ironing' onClick={() => setironingSelected(ironingSelected === ironingBlue ? ironingNormal : ironingBlue)}/>
            <img  className='fold-img' src={towelSelected} alt='towel' onClick={() =>settowelSelected(towelSelected === towelBlue ? towelNormal : towelBlue)}/>
            <img  className='bleach-img' src={bleachSelected} alt='bleach' onClick={() =>setbleachSelected(bleachSelected === bleachBlue ? bleachNormal : bleachBlue)}/>
        </div>
        <div className="order-price">
          {quantity * content.price * count ? (`${quantity}X${content.price * count}=${quantity * content.price * count}`) : ('—')}
        </div>
        <div className='main-btn'>
          {quantity * content.price * count ? <button className='btn-reset' onClick={handlereset}>Reset</button> : "" }
        </div>
      </div>
        </>
    )
}
export default Items