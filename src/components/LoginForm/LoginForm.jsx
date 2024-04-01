import React, { useState } from 'react'; 
import './LoginForm.css'
import Union from '../../assets/Union.png'
import Checkout from '../../assets/Checkout.png'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [menu, setMenu] = useState("login");

    const handleClick = () => {
        setMenu("login"); // Update the state with the value of props.nm1
      };

  return (
    <div className='form' style={{ backgroundImage:`url(${Union})`}}>
      <h1>Login</h1>
      {/* <img id='checkout' src={Checkout} alt="" /> */}
      {/* <h3>Home &lt; Sell</h3> */}
      <div className="container">
          <h1>Login Account</h1>
          <form action="">
          <label htmlFor="">Email address</label>
          <input type="email" placeholder='' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='' />
          <br />
          <button>Login</button>
          <br />
          {/* <p>Didn't created an Account? <a href='' onClick={handleClick}><Link to={`/createacc`} style={{ textDecoration: 'none' }}>Sign Up</Link></a></p> */}
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
