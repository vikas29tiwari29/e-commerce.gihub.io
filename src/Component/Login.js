import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    // const history = useNavigate()
    const[visible,setVisible]=useState(false)
    function handleSubmit(){
        setVisible(pre=>!pre)
    }

    const style = {
        display:visible?"none":"flex"
    }
  return (
      <form action="">
            <div className='form'style={style} >
          <h1>LogIN</h1>

      
        <label htmlFor="fname">USER NAME :</label>
        <input type="text" name='fname' placeholder='Enter Your  Name' required /><br />
      
      
        <label htmlFor="email">ENTER EMAIL :</label>
        <input type="mail" name="email" id="email" placeholder='Enter Your Email' /><br />
      
      
        <label htmlFor="pwd">ENTER PASSWORD :</label>
        <input type="password" name="pwd" id="pwd" placeholder='Enter Your Password'/><br />
      
      
      <label htmlFor="submit"></label>
      <Link to='/Product' >
        <input type="submit" className='submit' onClick={handleSubmit} />
      </Link>
      
    </div>
        </form>
  )
}

export default Login
