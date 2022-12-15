import React, { createContext, useReducer } from 'react'

const context =React.createContext()
  function CartContext(props) {
  const[state,dispatch]=useReducer(reducer,[])
  const info ={state,dispatch};
  function reducer(state,action){
    switch (action.type) {
      case 'ADD':
        const temState = state.filter((item)=>action.payload.id==item.id)
        if(temState.length>0){
          return state
        }
        else{
          return [...state,action.payload]
        }
        case 'INCREASE':
        const tempState2  = state.map((item)=>{
          if(item.id==action.payload.id){
          return  {...item,quantity:item.quantity+1}
          }
          else{
            return item
          }
        });
        return tempState2;
        case 'DECREASE':
        const tempState3  = state.map((item)=>{
          if(item.id==action.payload.id){
          return  {...item,quantity:item.quantity-1}
          }
          else{
            return item
          }
        });
        return tempState3;
        case'REMOVE':
        const tempState4 = state.filter((item)=>item.id!=action.payload.id)
        return tempState4;

        default: return state
          
    }
  }
  return (
    <context.Provider value={info}> 
      {props.children}
    </context.Provider>
  )
}

export default CartContext
export {context}



