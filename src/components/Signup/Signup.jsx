import React from 'react'
import './Signup.css'
import Union from '../../assets/Union.png'
import Checkout from '../../assets/Checkout.png'

const Signup = () => {
  return (
    <div className='form' style={{ backgroundImage:`url(${Union})`}}>
      <img id='checkout' src={Checkout} alt="" />
      <h3>Home &lt; Sell</h3>
      <div className="container">
          <h1>Create Account</h1>
          <form action="">
          <label htmlFor="">Enter Name</label>
          <input type="name" placeholder='enter your name' />
          <label htmlFor="">Registration no. of PICT</label>
          <input type="text" placeholder='' />
          <label htmlFor="">Department</label>
          <select name="" id="" class="form-control">
          <option value="">Computer Science</option>
          <option value="">Information Technology</option>
          <option value="">EnTC</option></select>
          <label htmlFor="">Street Address</label>
          <input type="text" placeholder='' />
          <label htmlFor="">Town/City</label>
          <input type="text" placeholder='' />
          <label htmlFor="">Email address</label>
          <input type="email" placeholder='' />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
