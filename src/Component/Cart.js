import React, { useContext } from 'react'
import { context } from './CartContext'
import './Cart.css'
function Cart() {


    const globalState = useContext(context)
    const state = globalState.state
    const dispatch = globalState.dispatch

    //  function handleEmptyCart(){
    //     state.length=0
    //  }

    //  const number = globalState.state.length
    //  console.log(number)

    const total = state.reduce((total,item)=>{
        return (total+item.price*item.quantity)
    },0)

    return (
      <div className='cart'>
        <div className='cart2'>
        {state.map((item,index )=>{
            return(
                <div className='carditems' key={index}>
                    <p>{index+1}</p>
                    <img className='ig' src={item.image} alt="" />
                    <p className='title2'>{item.title}</p>
                    <p>${item.quantity*item.price}</p>
                    <div className="quantity">
                        <button className='b' onClick={()=>dispatch({type:"INCREASE",payload:item})}>+</button>
                        <p className='quan'>{item.quantity}</p>
                        <button className='b'onClick={()=>{
                            if(item.quantity>1){
                                dispatch({type:"DECREASE",payload:item})
                            }else{
                                dispatch({type:"REMOVE",payload:item})
                            }
                        }} >-</button>
                    </div>
                    <h2 onClick={()=>dispatch({type:"REMOVE",payload:item})}><i className="bi bi-trash"></i></h2>
                </div>
            )
        })}
        <div className='total'>
        {state.length>0&&<div ><h2>Total=${total}</h2>
        
        {/* <button onClick={handleEmptyCart} className='clearCart'>Clear Cart</button> */}
        </div>}
        
        </div>
        </div>
      </div>
    )
}

export default Cart
