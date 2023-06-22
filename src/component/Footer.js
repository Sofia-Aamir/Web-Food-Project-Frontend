import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
      
        <footer>
            <div className="footer-container">
                <div className="logo-social-section">
                    <div className="logo">
                        <img src={'/images/logo.jpg'} alt="Food Logo" />
                    </div>
                    <div className="separator">
                        <span className="separator-icon">|</span>
                    </div>
                    <div className="social-icons">
                        <img src={'/images/youtube.png'} alt="Facebook Icon" />
                        <img src={'/images/instagram.jpg'} alt="Twitter Icon" />
                        <img src={'/images/facebook.jpg'} alt="Instagram Icon" />
                    </div>
                </div>
                <div className="columns-section">
                    <div className="column">
                        <h3>Information</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Mitao Bhook</li>
                            <li>Mitao Bhook - Scholarship</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Locations</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Get in Touch</li>
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Get in Touch</h3>
                        <ul>
                            <li>Terms & conditions</li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="social-icons-block">
                            <img src={'/images/app-store.png'} alt="Facebook Icon" />
                            <img src={'/images/google-store.png'} alt="Twitter Icon" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        
    )
};

export default Footer;