import Navbar from './Navbar';
import './AboutStyle.css';
import Footer from './Footer';
import React from 'react';
const About = () =>{
    // const navigate=useNavigate();
       

    return (
        <div>
            <Navbar/>
            <section className='about' id='about'>
          
            <h1 className='heading' style={{ color: 'white' ,fontSize:'50px'}}>
            <span style={{ color: 'orange' }}>About </span> Us
            </h1>
            <div className='row'>
                <div className='image'>
                    <img src='images/aboutpageimg.jpg' alt='about-page'></img>
                </div>
                <div className='content'>
                    <div className='innerContent'>
               <h3>What makes our food special?</h3>
               <p>
               Our team of talented chefs brings years of experience and a passion for gastronomy 
              
               </p>
                <p> Their culinary expertise and creativity result in unique flavors and exceptional 
                    
               </p>
               <p>
               Our food is crafted with love and attention to detail, using signature recipes that       
               </p>
               <p> have been perfected over time. These recipes reflect our culinary heritage and</p>
               <p>
               showcase the authentic flavors and techniques that make our dishes unforgettable.
               </p>
               <p> Their culinary expertise and creativity result in unique flavors and exceptional 
                    
                    </p>
               <button href='#' className='learn-more'>Learn More</button>
               </div> 
                </div>
            </div>

           </section> 
<Footer/>
        </div>
    )
}

export default About;