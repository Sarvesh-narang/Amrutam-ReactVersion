import React from 'react'
import Logo from "../assets/logo/logo.png"
import { Link } from 'react-router-dom';

export default function Header() {
    return (
            <div className="hero-container">
                <div id="nav-container">
                    <nav id="nav">
                        <div className="img-container">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <div id="content"> 
                            <Link to='/' className="home-tag">Home</Link>
                            <Link to="/find" className="search-tag">Find Doctors</Link>
                            <Link to="#" className="about-tag">About Us</Link>
                        </div>
                        <div id="register">
                            <button href="#" id="login-btn">Login</button>
                            <button href="#" id="register-btn">Sign-up</button>
                        </div>
                    </nav>
                </div>
            </div>   
    )
}

