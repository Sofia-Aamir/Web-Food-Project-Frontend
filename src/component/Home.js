import React from "react";
import './Style.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Content from './Content';
const Home=()=>{

    
    return(
    <div>
        <Navbar/>
       <section className="frontpage" id="home" >
            <div className="foodinmorning">
                <h3>
                    fresh<span> food in the </span>morning
                </h3>
             <p>
             Food is an essential part of our lives, providing nourishment, pleasure, and cultural significance. It encompasses a vast array of flavors, textures, and aromas that vary across different cuisines and regions. Food not only serves as a source of energy and sustenance for our bodies but also holds the power to evoke memories, bring people together, and express cultural identity. 
             </p>
             <button href="#" className="btn">get yours now</button>
            </div>

        </section> 
        <Content/>
        <Footer/>
    </div> 
   
    );
}
export default Home;