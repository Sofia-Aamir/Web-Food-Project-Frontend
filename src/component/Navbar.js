import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {

    const searchRef=useRef();
    const cartRef=useRef();
    const navbarRef=useRef();
    const searchHandler=()=>{
      searchRef.current.classList.toggle("active");
     
      navbarRef.current.classList.remove("active");
    }


    const navbarHandler=()=>{
      navbarRef.current.classList.toggle("active");
   
      searchRef.current.classList.remove("active");
    }
   

    

  return (
    <div>
    <header className='header'>
      <button href='#' className="mainlogo">
        <img src="./images/logo.jpg" alt="Logo" /> 
      </button>
      
       <nav className='navbar' ref={navbarRef}>
       <Link to='/addproduct'>Admin</Link>
       {/* <Link to='/userform'>User</Link> */}
        <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='/menu'>menu</Link>
        
          <Link to='/contact'>contact</Link>
        <div className="buttons">
        <Link to='/userform'>
              <button>Sign Up</button>
            </Link>
            <Link to='/login'>
              <button>Login</button>
            </Link>
      </div>
       </nav>      

<div className='icons'>
  <div className='fas fa-search' onClick={searchHandler}></div>
 
  <div className="cart-icon" ref={cartRef}>
    {/* <span className="cart-label"></span> */}
    <div className="fas fa-shopping-cart"></div>
  </div>
 
  <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
</div>
          <div className='search-form' ref={searchRef}>
            <input type='search' placeholder='search here....' id='search-box'></input>
            <label htmlFor='search-box' className='fas fa-search'></label>
          </div>   
    </header> 
    
    </div>
  
  );
};

export default Navbar;



