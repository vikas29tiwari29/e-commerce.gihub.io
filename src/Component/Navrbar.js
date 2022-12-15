import React, {  useContext, useEffect, useState } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { context } from './CartContext'

const context2=React.createContext()
function Navrbar({filterFunction}) {
   const[cartItems,setCartItems]=useState(0)
   const[input,setInput]=useState(" ")
    const globalState =  useContext(context)
    const number = globalState.state.length

filterFunction(input)
    
    useEffect(()=>{
        setCartItems(number)
    },[number])
    
  return (
    <context2.Provider value={input}>
    <div style={{zIndex:"10"}}>
        <nav>
        <div className='title'>
            <div><i className="bi bi-shop-window"></i></div>
            <h1 className='ShopName'>DRIP SHOP</h1>
        </div>
        <div className='search'>
            <input onChange={(e)=>setInput(e.target.value)} type="text" className='input'  placeholder='Search Products Here'/>
        </div>
        <div className='cart' >
            <Link to='/Cart'>
        <i className="bi bi-cart"></i>
            </Link>
        <p className='numItems'>{cartItems}</p>
        </div>
        <Link to='/Product'>
        <button className='Product-btn'>Back To Shopping</button>
        </Link>
        <div className='login'>
            <button className='lgsgBtn'>login</button>
            <button className='lgsgBtn'>sign Up</button>
        </div>
        <div></div>
        <div></div>
    </nav>
    </div>
    </context2.Provider>
  )
}

export default Navrbar
export {context2}
