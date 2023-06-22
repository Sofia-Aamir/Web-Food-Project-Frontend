import React from "react";
import './LoginStyle.css';
import Navbar from './Navbar';
const   Login = () =>{
    return(
        <div>
        <Navbar/>
        <div className="main">
            <div className="sub-main">
                
                <div>
                    
                       

                    <div className="login-form">
                        <img src="images/personlogo.jpg" alt="person-logo" className="main-logo"></img>

                        <h1>Login Page</h1>
                        <div className="first-input">
                        <img src="images/email.png" alt="" className="email"></img>
                        <input type="text" placeholder="Username" className="name" id="username-input" style={{ borderRadius: '60px' }}/>
                       </div>
                       <div className="second-input">
                        <img src="images/password.png" alt="" className="password"></img>
                        <input type="passowrd" placeholder="Password" className="name" id="username-input"/>
                       </div>
                       <div class="button-container">
                       <button className="login-button">Login</button>
                       </div>
                       <div className="remainders">
                        {/* <a>Forgot Password?</a> or <a>sign-up</a> */}
                        <button>Forget passowrd</button>
                        <button>signup</button>
                       </div>
                    </div>
                </div>

            </div>
            
        </div>
        </div>
    )
}
export default Login;