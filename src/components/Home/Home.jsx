import React from 'react';

// health icons
import WomenHealth from "../assets/health-icons/women health.png"
import SkinCare from "../assets/health-icons/skin-care.png"
import Immunity from "../assets/health-icons/immunity.png"
import HairCare from "../assets/health-icons/hair-care.png"
import DocImg from "../assets/images/doctor-image.png"

// social media icons
import Facebook from "../assets/social-icons/facebook.png"
import Instagram from "../assets/social-icons/instagram.png"
import Youtube from "../assets/social-icons/youtube.png"
import Twitter from "../assets/social-icons/twitter.png"

// reviewer image 
import Reviewer from "../assets/images/rev-img.jpeg"

// working exp image 
import Experience from "../assets/social-icons/working-exp.png"

// calender image 
import Calender from "../assets/social-icons/calendar.png"

// arrows image 
import ArrowOne from "../assets/social-icons/back.png"
import ArrowTwo from "../assets/social-icons/next.png"

export default function Home() {
    return (
        <div id="main">    
            <div id="page-2">
                <div id="profile">
                    <div className="img-jar">
                        <img src={DocImg} alt="Dr. Bruce Wills"/>
                    </div>
                    <div id="self-desc">
                        <h3>Dr. Bruce Willis</h3>
                        <h5>Gynecologist</h5>
                        <h6>4.2 
                                <span className="stars" data-value="1">&#9733;</span>
                                <span className="stars" data-value="2">&#9733;</span>
                                <span className="stars" data-value="3">&#9733;</span>
                                <span className="stars" data-value="4">&#9733;</span>
                        </h6>
                        
                    </div>
                    <div id="follower"> Followers
                        <div id="follow-num">850</div>
                    </div>
                    <div id="following">Following
                        <div id="following-num">18K</div>
                    </div>
                    <div id="post">Posts
                        <div id="post-num">250</div>
                    </div>
                    <button>Book an Appointment</button>
                </div>
            </div>
            <div id="page-3">
                <div id="page-3-1">
                    <div id="first">
                        <div id="heading">
                            <h2>A Little About me</h2>
                            <button>Follow</button>
                        </div>    
                        <p>Hello I am Dr. Bruce Willis a Gynecologist in Sanjivni Hospital, Surat. Love to work with all my Hospital staff and seniour Doctors. Completed my graduation in Gynecologist medicine from the</p>
                        <div id="break">
                            <div className="line"></div>
                            <a href="./next.html">Read More</a>
                        </div>
                        <div id="language">
                            <h4>Language Spoken</h4>
                            <div className="languages">
                                <h4>English</h4>
                                <h4>Hindi</h4>
                                <h4>Telugu</h4>
                            </div>
                        </div>
                        <div id="social-icons">
                            <img src={Facebook} alt="facebook"/>
                            <img src={Instagram} alt="instagram"/>
                            <img src={Youtube} alt="youtube"/>
                            <img src={Twitter} alt="twitter"/>
                        </div>
                    </div>
                    <div id="second">
                        <div id="heading-2">
                            <h2>I Speacialize In</h2>
                        </div>
                        <div id="speaciality">
                            <div id="speaciality-1">
                                <img src={WomenHealth} alt="women's health"/>
                                <h4>Women's Health</h4>
                            </div>
                            <div id="speaciality-2">
                                <img src={SkinCare} alt="skin care"/>
                                <h4>Skin Care</h4>
                            </div>
                            <div id="speaciality-3">
                                <img src={Immunity} alt="immunity"/>
                                <h4>Immunity</h4>
                            </div>
                            <div id="hair-care">
                                <img src={HairCare} alt=""/>
                                <h4>Hair Care</h4>
                            </div>
                        </div>
                    </div>
                    <div id="third">
                        <div id="heading-3">
                            <h2>The Concerns I Treat</h2>
                        </div>
                        <div id="concerns">
                            <h3>Skin Treatment</h3>
                            <h3>Pregnancy</h3>
                            <h3>Period Doubts</h3>
                            <h3>Endometriosis</h3>
                            <h3>Pelvic Paint</h3>
                            <h3>Ovarian Cysts</h3>
                            <button>+ 5 More</button>
                        </div>
                    </div>
                    <div id="fourth">
                        <div id="heading-4">
                            <h2>My Work Experience</h2>
                        </div>
                        <h2 id="exp-years">I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</h2>
                        <div className="finish-line"></div>
                        <div id="experience">
                            <div id="exp-1">
                                <img src={Experience} alt=""/>
                                <div>
                                    <h2>Midtown medical Clinic
                                        <h3>Senior doctor</h3>
                                    </h2>
                                </div>
                                <h1>2016 - Present</h1>                    
                            </div>
                            <div id="exp-2">
                                <img src={Experience} alt=""/>
                                <div>
                                    <h2>Midtown medical Clinic
                                        <h3>Senior doctor</h3>
                                    </h2>
                                </div>
                                <h1>2010 - 2015</h1>  
                            </div>
                        </div>
                    </div>
                    <div id="fifth">
                        <div id="heading-5">
                            <h2>Featured Reviews (102)</h2>
                        </div>
                        <div id="reviews">
                            <div id="review-1">
                                <div className="rev-dtl">
                                    <div className="img-tub">
                                        <img src={Reviewer} alt=""/>
                                    </div>
                                    <div className="rev-info">
                                        <h2>Alicent Hightower
                                            <p>Consulted for Skin care</p>
                                        </h2>
                                    </div>
                                    <h3 className="date">20 January 2023</h3>
                                </div>
                                <div className="stars-2">
                                    <span className="star" data-value="1">&#9733;</span>
                                    <span className="star" data-value="2">&#9733;</span>
                                    <span className="star" data-value="3">&#9733;</span>
                                    <span className="star" data-value="4">&#9733;</span>
                                    <span className="star" data-value="4">&#9733;</span>
                                </div>
                                <p className="para">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.</p>
                            </div>
                            <div id="review-2">
                                <div className="rev-dtl">
                                    <div className="img-tub">
                                        <img src={Reviewer} alt=""/>
                                    </div>
                                    <div className="rev-info">
                                        <h2>Alicent Hightower
                                            <p>Consulted for Pregnancy</p>
                                        </h2>
                                    </div>
                                    <h3 className="date">20 January 2023</h3>
                                </div>
                                <div className="stars-2">
                                    <span className="star" data-value="1">&#9733;</span>
                                    <span className="star" data-value="2">&#9733;</span>
                                    <span className="star" data-value="3">&#9733;</span>
                                    <span className="star" data-value="4">&#9733;</span>
                                    <span className="star" data-value="4">&#9733;</span>
                                </div>
                                <p className="para">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-3-2">
                    <div id="sixth">
                        <div id="fees">
                            <h1>Appointment Fee</h1>
                            <h2>Rs.699.00</h2>
                        </div>
                        <div className="selection">
                            <h1>Select your mode of session</h1>
                            <div id="line-break"></div>
                        </div>
                        <div id="modes">
                            <div className="clinic mode">
                                <h2>In-Clinic
                                    <h3>45 Mins</h3>
                                </h2>
                            </div>
                            <div className="video mode">
                                <h2>Video
                                    <h3>45 Mins</h3>
                                </h2>
                            </div>
                            <div className="chat mode">
                                <h2>Chat
                                    <h3>10 Mins</h3>
                                </h2>
                            </div>
                        </div>
                        <div id="slot">
                            <h1>Pick a time slot</h1>
                            <div id="line-brk-2"></div>
                            <div id="cal-img">
                                <img src={Calender} alt=""/>
                            </div>
                        </div>
                        <div id="timing">
                            <img src={ArrowOne} alt=""/>
                            <div className="mon day">
                                <h2>Mon, 10 Oct</h2>
                                <h3>10 slots</h3>
                            </div>
                            <div className="tue day">
                                <h2>Tue, 11 Oct</h2>
                                <h3>02 slots</h3>
                            </div>
                            <div className="wed day">
                                <h2>Wed, 12 Oct</h2>
                                <h3>05 slots</h3>
                            </div>
                            <img src={ArrowTwo} alt=""/>
                        </div>
                        <div className="quarter">
                            <h2>Morning</h2>
                        </div>
                        <div className="hour">
                            <h2>09:00 AM</h2>
                            <h2>09:30 AM</h2>
                            <h2>10:00 AM</h2>
                            <h2>10:15 AM</h2>
                            <h2>10:45 AM</h2>
                            <h2 id="slc-hour">11:00 AM</h2>
                        </div>
                        <div className="quarter">
                            <h2>Evening</h2>
                        </div>
                        <div className="hour">
                            <h2>04:00 PM</h2>
                            <h2>04:15 PM</h2>
                            <h2>04:30 PM</h2>
                            <h2>04:45 PM</h2>
                            <h2>05:15 PM</h2>
                        </div>
                        <button id="book">Make an Appointment</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

