import React from "react";
import Menudata from './Menudata';
import './MenuStyle.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useReducer } from "react";
const initialState = {
  carts: Menudata,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        carts: state.carts.map((cart, index) => {
          if (index === action.payload) {
            return {
              ...cart,
              quantity: cart.quantity + 1,
            };
          }
          return cart;
        }),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        carts: state.carts.map((cart, index) => {
          if (index === action.payload && cart.quantity > 1) {
            return {
              ...cart,
              quantity: cart.quantity - 1,
            };
          }
          return cart;
        }),
      };
    default:
      return state;
  }
};


const Menu = () => {
   
    const [state, dispatch] = useReducer(reducer, initialState);
    const { carts } = state;
  
    const handleIncreaseQuantity = (index) => {
      dispatch({ type: 'INCREASE_QUANTITY', payload: index });
    };
  
    const handleDecreaseQuantity = (index) => {
      dispatch({ type: 'DECREASE_QUANTITY', payload: index });
    };
     
    return (
      <div>
        <Navbar/>
        <section className="menu" id="menu">
          <h1 className="menuheading">
            Our <span>Menu</span>
          </h1>
          <div className="box-container">
            {carts.map((cart, index) => (
              <div className="box" key={index}>
                <img src={cart.img} alt="" />
                <h3>{cart.title}</h3>
                <div className="price">
                  {cart.price} <span className="price-span">20.99</span>
                </div>
                <div className="quantity">
                  <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                  <span className="quantity-span"  style={{ color: 'white', fontSize: '20px' }}>{cart.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
  
  export default Menu;
  