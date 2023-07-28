import React from 'react'
import {Link} from "react-router-dom";
import {ErrorBoundary } from 'react-error-boundary' // useErrorHandler


export const Footersection = () => {
    return (
        <div>
            <div className="footerclass pt-20 pb-4"
            style={{"backgroundImage":"url(assets/images/background_pattern.png)","marginBottom": "4rem"}}>
                <div className="section-shape top-0" style={{"backgroundImage":"url(assets/images/shape8.png)"}}></div> 
                    <div className="footer-upper pb-4">
                        <div className="container">
                            <div className="row">
                            
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-4">
                                    <img src="assets/images/logo-white.png" alt="Tourism Logo" />
                                    <h3 className="text-white mt-5x">Directorate of Tourism</h3> 
                                        <ul className="contact-ul"> 
                                            <li className="white">
                                                <strong>Address:</strong> MDI Building, 3rd Floor, Dhurva, Ranchi-834004
                                            </li>
                                            <li className="white">
                                                <strong>Email:</strong>
                                                dirjharkhandtourism[at]gmail[dot]com
                                            </li>
                                        
                                        </ul>
                                        <h3 className="text-white mt-1">Department of Tourism</h3> 
                                        <ul  className="contact-ul"> 
                                            <li className="white">
                                                <strong>Address:</strong> FFP Building 2nd Floor Dhurva, Ranchi-834004
                                            </li>
                                            <li className="white">
                                                <strong>Email:</strong>
                                                govjharkhandtourism[at]gmail[dot]com
                                            </li>
                                        
                                        </ul>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-4">
                                    <h3 className="text-white">Online Booking, Feedback & Support</h3> 
                                        <ul  className="contact-ul"> 
                                            
                                            <li className="white">
                                                <strong>Call:</strong>
                                                0651-2331828, 2331643
                                            </li>
                                            <li className="white">
                                                <strong>Email:</strong>
                                                jtdcltd[at]gmail[dot]com
                                            </li>
                                        
                                        </ul>
                                        <h3 className="text-white">Jharkhand Tourism Development Corporation Ltd</h3> 
                                        <ul className="contact-ul"> 
                                            <li className="white">
                                                <strong>Address:</strong> Tourist Complex 5, Mahatma Gandhi Marg Ranchi 834001
                                            </li>
                                            <li className="white">
                                                <strong>Call:</strong>
                                                +91 651-2331828
                                            </li>
                                            <li className="white">
                                                <strong>Email:</strong>
                                                jtdcltd[at]gmail[dot]com
                                            </li>
                                        
                                        </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>             
                        <div className="footer-copyright">
                            <div className="container">
                                <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
                                    <div className="copyright-text">
                                        <p className="m-0 white">2023 Jharkhand Tourism . All rights reserved.</p>
                                    </div>
                                    <div className="social-links">
                                        <ErrorBoundary fallback={<div>Oh no</div>}>
                                        <ul className="socialMedia-links">
                                            <li className='single-social-links'>
                                                <Link to="#"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                                            </li>
                                            <li className='single-social-links'>
                                                <Link to="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                                            </li>
                                            <li className='single-social-links'>
                                                <Link to="#"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                                            </li>
                                            <li className='single-social-links'>
                                                <Link to="#"><i className="fab fa-linkedin" aria-hidden="true"></i></Link>
                                            </li>
                                        </ul>
                                        </ErrorBoundary>
                                    </div>
                                </div>
                            </div>
                        </div>          
        </div>
        </div>
    )
}
