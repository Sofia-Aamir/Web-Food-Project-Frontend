import Navbar from './Navbar';
import styles from './ContactStyle.module.css';
import Footer from './Footer';
const Contact=()=>{
    // const [count,setCount]=useState(0);

    // const [bucketstate,setBucketstate]=useState("Add to Bucket");
        // const navigate =useNavigate();
        // function goToLogin(){
        //     navigate("/Login");
        // };

    return(
        <div>
            <div style={{height:"100px"}}>
                <Navbar/>
           
            </div>
            <div className={styles.item_container}>
            <h1 className='contact-us-heading' style={{ color: 'white' ,fontSize:'50px',marginLeft:'500px'}}>
            <span style={{ color: 'orange' }}>contact </span> us
            </h1>
            <div className={styles.item_details}>
                <div className={styles.item_image}>
                <div className={styles.iframe_container}>
                {/* <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.88753409019!2d73.16589825312104!3d34.175203280322336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111557ac517%3A0x6e59a635b12e952c!2sAbbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680711702925!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe> */}
            </div>
                </div>
                <div className={styles.item_desc}>
                <form className={styles.form_container}>
            <h1>get in touch</h1>
            <div className={styles.inputBox}>
                <span id='usericon' className='fas fa-user' style={{color:'white', fontSize:'20px' , marginLeft:'20px'}} ></span>
                <input type='name' placeholder='name'/>
            </div>
            <div className={styles.inputBox}>
                <span className='fas fa-envelope' style={{color:'white', fontSize:'20px' , marginLeft:'20px'}}></span>
                <input type='email' placeholder='email'/>
            </div>
            <div className={styles.inputBox}>
                <span className='fas fa-phone' style={{color:'white', fontSize:'20px' , marginLeft:'20px'}}></span>
                <input type='phone' placeholder='phone'/>
            </div>
            {/* < type='submit' value='contact now' className='btn'/> */}

            <button className={styles.Contactnowbutton}>Contact Now</button>
          </form>
                </div>
            </div>
            </div>
            <Footer/>
           
        </div>
    )
}

export default Contact;
