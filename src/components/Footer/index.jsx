import React from 'react'
import './style.css'
import Logo from "../../assets/simsim_logo_white.png";


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo d-flex align-items-center">
                    <img src={Logo} alt="SimSim Logo" />
                    <span id='footer-icon'>SimSim</span>
                </div>
                <div className="email">
                    <p><span>Email :</span>info@simsim.az</p>
                </div>
                <div className="phone">
                    <p><span>Telefon :</span>+994 50 247 37 36</p>
                </div>
                <div className='copyright'>
                    <p > &copy; {new Date().getFullYear()} Bütün hüquqlar qorunur</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer