
import React, { useState, useEffect, useMemo } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ handleRemoveItem, cart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const totalAmount = useMemo(() => {
    return cartItems.reduce((accumulator, item) => {
      const quantity = item.quantity || 1; // Assume quantity of 1 if missing
      return accumulator + item.price * quantity;
    }, 0);
  }, [cartItems]);
  const navigate=useNavigate();

  const handleCheckout = () => {
    // Add your logic for handling the checkout process here
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div>
      <div className='cartpagefirstdiv'>
        <div className="cart-page">
          <h2 className='cartpagenameheading'>Cart Page</h2>
          {
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <h3>{item.title}</h3>
                <p style={{ fontSize: '20px' }}>Price: ${item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)} className='removebutton'>Remove</button>
              </div>
            ))
          }
          <div className="total-amount">
            <h4 style={{color:'white'}}>Total Amount: ${totalAmount}</h4>
            <button style={{background:'orange',borderRadius:'60px',color:'black'}} onClick={handleCheckout}>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

