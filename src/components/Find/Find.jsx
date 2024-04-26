import React from 'react';
import DocNar from '../assets/images/doc-narang.png'
import Cap from '../assets/social-icons/capsule.png'
import Com from '../assets/social-icons/comment.png'
import Grad from '../assets/social-icons/graduation-cap.png'


export default function Find() {
    return (
        <div>
            <div id="section-1">
            <div class="rectangle">
                <h1>Find Expert Doctors For an In-Clinic Session Here</h1>
                <div class="dot" id="dot-1"></div>
                <div class="dot" id="dot-2"></div>
                <div class="dot" id="dot-3"></div>
                <div class="dot" id="dot-4"></div>
                <div id="location">
                    <input id="sel-location" placeholder="Select Location"/>
                    <img src="" alt=""/>
                    <input id="search" placeholder="eg. Doctor, speacialisation, clinic name"/>
                    <img src="" alt=""/>
                </div>
            </div>
        </div> 
        <div id="section-2">
            <div id="options">
                <select id="Expertise" name="Expertise">
                    <option value="Expertise">Expertise</option>
                    <option value="Namaste">Namaste</option>
                    <option value="Ola">Ola</option>
                </select>

                <select id="Gender" name="Gender">
                    <option value="Gender">Gender</option>
                    <option value="Male">Namaste</option>
                    <option value="Female">Ola</option>
                </select>

                <select id="Fees" name="Fees">
                    <option value="Fees">Fees</option>
                    <option value="Namaste">Namaste</option>
                    <option value="Ola">Ola</option>
                </select>

                <select id="Languages" name="Languages">
                    <option value="Languages">Languages</option>
                    <option value="English">Namaste</option>
                    <option value="Hindi">Ola</option>
                </select>

                <select id="All filters" name="All filters">
                    <option value="All filters">All filter</option>
                    <option value="Namaste">Namaste</option>
                    <option value="Ola">Ola</option>
                </select>
            </div>
        </div>
        <div id="section-3">
            <div id="services">
                <div>Hair Care   X</div>
                <div>Female   X</div>
                <div>Rs.0-Rs.500   X</div>
                <div>Hindi   X</div>
            </div>
        </div>
        <div id="section-4">
            <div id="card-container">
                <div id="card">
                    <div id="doc-container">
                        <img id="doc-img" src={DocNar} alt=""/>
                    </div>
                    <div id="rating">4.5
                        <span class="stars" data-value="1">&#9733;</span>
                    </div>
                    <h1 class="doc-name">Dr. Prerna Narang</h1>
                    <div id="about">
                        <div class="type-1">
                            <img src={Cap} alt=""/>
                            <h3>Male-Female Infertility</h3>
                        </div>
                        <div class="type-1">
                            <img src={Grad} alt=""/>
                            <h3>7 years of Experience</h3>
                        </div>
                        <div class="type-1">
                            <img src={Com} alt=""/>
                            <h3>Speaks: English, Hindi, Marathi</h3>
                        </div>
                    </div>
                    <div id="consultation">
                        <div class="type" id="video">
                            <h1>Video Consultation</h1>
                            <h3>Rs.800</h3>
                        </div>
                        <div class="type">
                            <h1>Chat Consultation</h1>
                            <h3>Free</h3>
                        </div>
                    </div>
                    <button id="profile-btn">View Profile</button>
                    <button id="book-btn">Book a consultation</button>
                </div>
                <div id="card">
                    <div id="doc-container">
                        <img id="doc-img" src={DocNar} alt=""/>
                    </div>
                    <div id="rating">4.5
                        <span class="stars" data-value="1">&#9733;</span>
                    </div>
                    <h1 class="doc-name">Dr. Prerna Narang</h1>
                    <div id="about">
                        <div class="type-1">
                            <img src={Cap} alt=""/>
                            <h3>Male-Female Infertility</h3>
                        </div>
                        <div class="type-1">
                            <img src={Grad} alt=""/>
                            <h3>7 years of Experience</h3>
                        </div>
                        <div class="type-1">
                            <img src={Com} alt=""/>
                            <h3>Speaks: English, Hindi, Marathi</h3>
                        </div>
                    </div>
                    <div id="consultation">
                        <div class="type" id="video">
                            <h1>Video Consultation</h1>
                            <h3>Rs.800</h3>
                        </div>
                        <div class="type">
                            <h1>Chat Consultation</h1>
                            <h3>Free</h3>
                        </div>
                    </div>
                    <button id="profile-btn">View Profile</button>
                    <button id="book-btn">Book a consultation</button>
                </div>
                <div id="card">
                    <div id="doc-container">
                        <img id="doc-img" src={DocNar} alt=""/>
                    </div>
                    <div id="rating">4.5
                        <span class="stars" data-value="1">&#9733;</span>
                    </div>
                    <h1 class="doc-name">Dr. Prerna Narang</h1>
                    <div id="about">
                        <div class="type-1">
                            <img src={Cap} alt=""/>
                            <h3>Male-Female Infertility</h3>
                        </div>
                        <div class="type-1">
                            <img src={Grad} alt=""/>
                            <h3>7 years of Experience</h3>
                        </div>
                        <div class="type-1">
                            <img src={Com} alt=""/>
                            <h3>Speaks: English, Hindi, Marathi</h3>
                        </div>
                    </div>
                    <div id="consultation">
                        <div class="type" id="video">
                            <h1>Video Consultation</h1>
                            <h3>Rs.800</h3>
                        </div>
                        <div class="type">
                            <h1>Chat Consultation</h1>
                            <h3>Free</h3>
                        </div>
                    </div>
                    <button id="profile-btn">View Profile</button>
                    <button id="book-btn">Book a consultation</button>
                </div>
            </div>
        </div>
        </div>
    )

}

