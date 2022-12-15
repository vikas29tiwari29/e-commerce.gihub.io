import React, { useContext, useState } from 'react'
import Card from './Card'
import { useEffect } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { valu } from '../App'

function ProductCard() {
  const imp = useContext(valu)
//   const imp2 = typeof(imp)
//   console.log(imp)
    console.log(imp)
    const[data ,setData]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then((data1)=> setData(data1))
          
    },[])
  return (
    <div>
  
    <div className='box'>
    {
        data
        .filter(value =>{
            if(imp === " "){
                return value
            }else if(value.category.toLowerCase().includes(imp.toLowerCase()) ){
                return value
            }else if(value.title.toLowerCase().includes(imp.toLowerCase())){
                return value
            }
        })
        .map((item)=>{
           const quantity= item.quantity = 1
            return(
                    
                <div className='card' key={item.id}>
                    <Card image={item.image}  title={item.title} category={item.category} rating={item.rating.rate} price={item.price} id={item.id} quantity={quantity} />
                </div>
                   
            )
        })
    }
    </div>

    </div>
  )
}

export default ProductCard
