import React from 'react';
import './App.css';
import ProductCard from './Component/ProductCard';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cart from './Component/Cart';
import Navrbar from './Component/Navrbar';
import Login from './Component/Login';
import {  useState } from 'react';

const valu = React.createContext()
function App() {
  const [text , setText]=useState("")
  const filterFunction = (input)=>{
    setText(input)
  }
  return (
    <valu.Provider value={text}>
    <Router>
    <div className="App" >
      <Route>
      <Navrbar path='/' filterFunction={filterFunction}/>
      </Route>
      <Login/>
      <Route  path='/Product'>
      <ProductCard/>
      </Route>
      <Route exact path='/Cart'>
        <Cart/>
      </Route>
    </div>
    </Router>
    </valu.Provider>
  );
}

export default App;
export {valu}