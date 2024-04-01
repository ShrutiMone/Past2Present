import React from "react";
import { ReactDOM } from "react";
import './SellerForm.css'
import Union from '../../assets/Union.png'
import Checkout from '../../assets/Checkout.png'

const SellerForm = () => {
    return (
      <div className='form' style={{ backgroundImage:`url(${Union})`}}>
        <img id='checkout' src={Checkout} alt="" />
        <h3>Home &lt; Sell</h3>
        <div className="container">
            <h1>Seller Information</h1>
            <form action="">
            <label htmlFor="">Select Product Category</label>
            <select name="" id="" class="form-control">
            <option value="">Drafter</option>
            <option value="">Books</option>
            <option value="">Others(specify name)</option></select>
        
            <label htmlFor="">Email address</label>
            <input type="email" placeholder='' />
            <label htmlFor="">Phone no.</label>
            <input type="phone" placeholder='' />
            <label htmlFor="">Product price</label>
            <input type="product price" placeholder='' />
            <label htmlFor="">Years used</label>
            <input type="years used" placeholder='' />
            <label htmlFor="">Details</label>
            <input type="details" placeholder='' />

            <br />
            <button>Submit</button>
          </form>
          </div>
      </div>
    )
  }
  
  export default SellerForm;