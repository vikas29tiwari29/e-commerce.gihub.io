import React, { useContext, useState } from 'react'
import './Card.css'
import  {context}  from './CartContext'
// import { context2 } from './Navrbar'

function Card({id, image, title, category, rating,price,quantity}) {
    const[add,setAdd]=useState(true)
//   const imp = useContext(context2)
// card of products
const addBtnStyle2 = {
    display:add?'none':'flex'
}

const addBtnStyle = {
    display:add?'flex':'none'
}

    const globalState = useContext(context)
    const dispatch = globalState.dispatch
    // console.log(imp)
    return (
        <div >
            <div className='product-data'>            
                    <img src={image} alt="" className='productImage' />
                <div style={{fontWeight:"bold"}} >{category}</div>
                <p style={{fontWeight:"bold"}} className='title-2'>{title}</p>
                <div style={{fontWeight:"bold"}}>Rating: {rating}/5</div>
                <div style={{fontWeight:"bold"}}>Cost:${price}</div>
                <button style={addBtnStyle} className='cart-btn' onClick={()=>dispatch({type:'ADD',payload:{id,image,category,title,rating,price,quantity}},setAdd(pre=>!pre))} ><i className="bi bi-cart-plus-fill"></i>ADD TO CART</button>
                <button style={addBtnStyle2} className='cart-btn2' onClick={()=>dispatch({type:'REMOVE',payload:{id,image,category,title,rating,price,quantity}},setAdd(pre=>!pre))} ><i class="bi bi-cart-dash"></i>REMOVE FROM CART</button>
                <div className='countItems'>
                </div>
            </div>

        </div>

    )
}

export default Card
