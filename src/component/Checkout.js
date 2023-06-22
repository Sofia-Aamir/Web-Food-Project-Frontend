import React from 'react';
import './CheckoutStyle.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
// import { addOrder } from '../Service/api';


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    card: '',
    number: '',
    expiry: '',
    ccv: '',
  });

  const {name,card,number,expiry,ccv} = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log(formData); // Example: log the form data to the console
  };

  const handleChange = (e) =>{
    setFormData ({ ...formData, [e.target.name]: [e.target.value] })
  }

  // const addDetails = async (e) => {
  //   e.preventDefault();
  // await addOrder(formData);
  // };
  
  return (
    <div>
        <Navbar/>

<section class="component">
  <div class="total">
    <h3>TOTAL</h3>
    <p>187,00 €</p>
  </div>
  <div class="credit-card">
    <h2>Credit card</h2>
    <form className='checkout-form' onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Name"
    value={formData.name}
    // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    onChange={(e)=>handleChange(e)}
  />
  <div className="line">
    <input
      type="text"
      placeholder="Card"
      value={formData.card}
      // onChange={(e) => setFormData({ ...formData, card: e.target.value })}
      onChange={(e)=>handleChange(e)}
    />
    <input
      type="text"
      placeholder="Number"
      value={formData.number}
      // onChange={(e) => setFormData({ ...formData, number: e.target.value })}
      onChange={(e)=>handleChange(e)}
    />
  </div>
  <div className="line">
    <input
      className="litle"
      type="text"
      placeholder="Expiry"
      value={formData.expiry}
      // onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
      onChange={(e)=>handleChange(e)}
    />
    <input
      className="tall"
      type="text"
      placeholder="CCV"
      value={formData.ccv}
      // onChange={(e) => setFormData({ ...formData, ccv: e.target.value })}
      onChange={(e)=>handleChange(e)}
    />
  </div>
  <button type="submit" className="valid-button" >SUBMIT</button>
</form>

  </div>
</section>


    <Footer/>
    </div>
  );
};

export default Checkout;
