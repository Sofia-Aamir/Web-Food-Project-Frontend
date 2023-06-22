import React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import './SignupStyle.css';


const Signup = () =>{

    const[userRegistration,setUserRegistration] = useState(
        {
            username:"",
            Email:"",
            Phone:"",
            Password:""
        }
    )

    const [record,setRecord] = useState([]);


     const handleInput=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         console.log(name,value);

         setUserRegistration({...userRegistration,[name] : value})
     }

     const handleSubmit = (e) =>{
       e.preventDefault();

       const newRecord={...userRegistration, id : new Date().getTime.toString}
       console.log(record)
       setRecord([...record,newRecord])
       console.log(record)

       setUserRegistration({username:"",Email:"",Phone:"",Password:""})
     }


    return(
       <div>
        <Navbar/>
        <div className="signup-container" style={{ marginTop: '50px' }}>
            {/* <h1>Sign Up Page</h1> */}
            <h1 className="signupheading" style={{ marginBottom: '-10px' }}>
            <span style={{ color: "orange"}}>Sign Up </span>Page
            </h1> 
            <form action="" onSubmit={handleSubmit}>
         <div>
            <label htmlfor='username'>Fullname</label>
            <input type='text' autoComplete="off"
             value={userRegistration.username}
             onChange={handleInput} 
            name='username' id='username'></input>
         </div>

         <div>
            <label htmlfor='Email'>Email</label>
            <input type='text' autoComplete="off" 
            value={userRegistration.Email}
            onChange={handleInput}
            name='Email' id='Email'></input>
         </div>

         <div>
            <label htmlfor='Phone'>Phone</label>
            <input type='text' autoComplete="off" 
             value={userRegistration.Phone}
             onChange={handleInput}
            name='Phone' id='Phone'></input>
         </div>

         <div>
            <label htmlfor='Password'>Password</label>
            <input type='password' autoComplete="off" 
             value={userRegistration.Password}
             onChange={handleInput}
            name='Password' id='Password'></input>
         </div>

         <Link to="/Login">
        <button type="submit" className="button">Submit</button>
      </Link>
            </form>

         <div>
            {
                record.map((currentElement)=>{
                    const {id,username,Email,Phone,Password}=currentElement;
                    return(
                        <div className="showDataStyle" key={id}>
                            <p>{username}</p>
                            <p>{Email}</p>
                            <p>{Phone}</p>
                            <p>{Password}</p>
                        </div>
                    )
                })
            }
         </div>
        </div>
        </div>
      
    )
}

export default Signup;