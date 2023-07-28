import React from 'react'
import {Link} from 'react-router-dom'
import { Header } from './Header'
//import { Footersection } from './Footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
export const Home = () => {

    

    return (
        <>
            <Header/>
            <section className="banner pt-10 pb-0 overflow-hidden" style={{"backgroundImage": "url(assets/images/testimonial.png)"}}>
            <div className="container">
                <div className="banner-in">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mt-1">
                            <div className="banner-content text-lg-start text-center">
                                <h4 className="theme mb-0">dekho hamara </h4>
                                <h1>JHARKHAND</h1>
                                <h2>Shravani Mela 2023</h2>
                                <h3>Baba Baidyanath Dham</h3>
                                <p className="mb-4">
                                    The holy union of The Jyotirling and the Shakti Peeth at Deoghar
                                </p>
                                <div className="book-form">
                                    <div className="row d-flex align-items-center justify-content-between">
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <select className="niceSelect">
                                                        <option value="1">Destination</option>
                                                        <option value="2">Destination2</option>
                                                        <option value="3">Destination3</option>
                                                        <option value="4">Destination4</option>
                                                        <option value="5">Destination5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="date" name="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <select className="niceSelect">
                                                        <option value="1">Travel Type</option>
                                                        <option value="2">City Tour</option>
                                                        <option value="3">Family Tour</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <select className="niceSelect">
                                                        <option value="1">Tour Duration</option>
                                                        <option value="2">2 days</option>
                                                        <option value="3">3 Days</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-0 text-center">
                                                <Link to="#" className="nir-btn w-100"><i className="fa fa-search mr-2"></i> View
                                                    Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="banner-image">
                                <img src="assets/images/mela.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="category-main-inner border-t pt-1">
                        <div className="col-md-12">
                            <h3 className="text-center">Experience Jharkhand</h3>
                        </div>
                        <div className="row owl-carousel owl-theme side-slider">
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content">
                                        <img src="assets/images/icons/004-camping-tent.png" className="mb-1 d-inline-block"
                                            alt="" />
                                        <h4 className="mb-0"><Link to="#">Adventure</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content text-center">
                                        <img src="assets/images/icons/003-hiking.png" className="mb-1 d-inline-block" alt="" />
                                        <h4 className="mb-0"><Link to="#">Ecology</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content text-center">
                                        <img src="assets/images/icons/festival.png" className="mb-1 d-inline-block" alt="" />
                                        <h4 className="mb-0"><Link to="#">Festivals</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content">
                                        <img src="assets/images/icons/005-waterfall.png" className="mb-1 d-inline-block"
                                            alt="" />
                                        <h4 className="mb-0">
                                            <Link to="#">Waterfalls</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content">
                                        <img src="assets/images/icons/006-surf.png" className="mb-1 d-inline-block" alt="" />
                                        <h4 className="mb-0"><Link to="#">Heritage</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content">
                                        <img src="assets/images/icons/002-safari.png" className="mb-1 d-inline-block" alt="" />
                                        <h4 className="mb-0"><Link to="#">Safari</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content">
                                        <img src="assets/images/icons/sprituality.png" className="mb-1 d-inline-block"
                                            alt =""/>
                                        <h4 className="mb-0"><Link to="#">Spirituality</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <div className="trending-topic-content">
                                        <img src="assets/images/icons/religious.png" className="mb-1 d-inline-block" alt="" />
                                        <h4 className="mb-0"><Link to="#">Religious</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 my-4 item">
                                <div
                                    className="category-item box-shadow p-3 py-4 text-center bg-white rounded overflow-hidden">
                                    <img src="assets/images/icons/tribal.png" className="mb-1 d-inline-block" alt="" />
                                    <div className="trending-topic-content">
                                        <h4 className="mb-0"><Link to="#">Culture</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <section className="trending pb-5 pt-0">
            <div className="container">
                <div className="section-title mb-6 w-50 mx-auto text-center">
                    <h4 className="mb-1 theme1 d-none">Top Destinations</h4>
                    <h2 className="mb-1">
                        Explore <span className="theme">Top Destinations</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <OwlCarousel items={3}  
                    className="row align-items-center owl-carousel owl-theme destination-slider"  
                    loop 
                    responsive={{0:{items:1},600:{items:2},1000:{items:3}}}
                    margin={8} >
                         <div className="col-lg-5 mb-4 item">
                            <Link to="/dest" state={{ destId:1,destname: "Betla National Park|Tigers|Latehar" }}>
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/destination/destination1.jpg" alt="Betla National Park" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        <h5 className="mb-0">
                                            Latehar
                                        </h5>
                                        <h3 className="mb-0 white">Betla National Park</h3>
                                    </div>
                                    <span className="white bg-theme p-1 px-2 rounded">Tigers</span>
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="col-lg-7 item">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                            <Link to="/dest" state={{ destId:2,destname: "McCluskieganj|Anglo-Indian Architecture|Ranchi" }}>
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/destination15.jpg" alt="McCluskieganj" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                    Ranchi
                                                </h5>
                                                <h3 className="mb-0 white">McCluskieganj</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Anglo-Indian
                                                Architecture</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/destination16.jpg" alt="The Forest Guest House" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                   Latehar
                                                </h5>
                                                <h3 className="mb-0 white">The Forest Guest House</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Sunset</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/destination/ranchi-sc-center.jpg" alt="Science Center" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        <h5 className="mb-0">
                                          Ranchi
                                        </h5>
                                        <h3 className="mb-0 white">Science Center</h3>
                                    </div>
                                    <span className="white bg-theme p-1 px-2 rounded">Amusement</span>
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 item">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/dewri-mandir.jpg" alt="देउड़ी मंदिर" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                  Ranchi
                                                </h5>
                                                <h3 className="mb-0 white">देउड़ी मंदिर</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Religious</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/Maa-Chhinmastika-Devi-Mandir.jpg"
                                            alt="Maa Chhinmastika Devi Mandir" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                    Ramgarh
                                                </h5>
                                                <h3 className="mb-0 white">Maa Chhinmastika Devi Mandir</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Religious</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </OwlCarousel>
                {/* <div className="row align-items-center owl-carousel owl-theme destination-slider">
                    <div className="col-lg-5 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/destination/destination1.jpg" alt="image" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        <h5 className="mb-0">
                                            <a href="#" className="theme1">Latehar</a>
                                        </h5>
                                        <h3 className="mb-0 white">Betla National Park</h3>
                                    </div>
                                    <span className="white bg-theme p-1 px-2 rounded">Tigers</span>
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 item">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/destination15.jpg" alt="image" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                    <a href="#" className="theme1">Ranchi</a>
                                                </h5>
                                                <h3 className="mb-0 white">McCluskieganj</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Anglo-Indian
                                                Architecture</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/destination16.jpg" alt="image" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                    <a href="#" className="theme1">Latehar</a>
                                                </h5>
                                                <h3 className="mb-0 white">The Forest Guest House</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Sunset</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/destination/ranchi-sc-center.jpg" alt="image" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        <h5 className="mb-0">
                                            <a href="#" className="theme1">Ranchi</a>
                                        </h5>
                                        <h3 className="mb-0 white">Science Center</h3>
                                    </div>
                                    <span className="white bg-theme p-1 px-2 rounded">Amusement</span>
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 item">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/dewri-mandir.jpg" alt="image" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                    <a href="#" className="theme1">Ranchi</a>
                                                </h5>
                                                <h3 className="mb-0 white">देउड़ी मंदिर</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Religious</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="assets/images/destination/Maa-Chhinmastika-Devi-Mandir.jpg"
                                            alt="image" />
                                        <div
                                            className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0">
                                                    <a href="#" className="theme1">Ramgarh</a>
                                                </h5>
                                                <h3 className="mb-0 white">Maa Chhinmastika Devi Mandir</h3>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">Religious</span>
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="text-center">
                    <Link to="#" className="btn btn-success">Explore More Destinations</Link>
                </div>
            </div>
        </section>
        <section className="trending activities-section pb-5 pt-0 mb-3">
            <div className="container">
                <div className="section-title mb-6 w-50 mx-auto text-center">
                    <h4 className="mb-1 theme1 d-none text-white">Activities</h4>
                    <h2 className="mb-1 text-white">
                        <span className="theme">Things to do in </span> Jharkhand
                    </h2>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                {/* <div className="row align-items-center owl-carousel owl-theme activity-slider"> */}
                <OwlCarousel items={3}  
                    className="row align-items-center owl-carousel owl-theme activity-slider"  
                    loop 
                    responsive={{0:{items:1},600:{items:2},1000:{items:3}}}
                    margin={8} >
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/parasailing.jpg" alt="Parasailing" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">

                                        <h3 className="mb-0 white">Parasailing</h3>
                                    </div>

                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    
                        <div className="trend-item1 mt-1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/rock-climbing.jpg" alt="Rock Climbing" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                    <div className="trend-content-title"> 
                                        <h3 className="mb-0 white">Rock Climbing</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/kayaking.jpg" alt="Kayaking" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                         
                                        <h3 className="mb-0 white">Kayaking</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                   
                        <div className="trend-item1 mt-1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/banana-ride.jpg" alt="Banana Ride" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        
                                        <h3 className="mb-0 white">Banana Ride</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/jet-skiing.jpg" alt="Jet Skiing" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Jet Skiing</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                  
                        <div className="trend-item1 mt-1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/aero-sports.jpg" alt="Aero Sports" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Aero Sports (Glider)</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
                {/* </div> */}
            </div> 
            <div className="text-center">
                <Link to="#" className="btn btn-success">Explore More Activities</Link>
            </div> 
        </section>
        <section className="trending hotels-section pb-5 pt-0 mb-3">
            <div className="container">
                <div className="section-title mb-6 w-50 mx-auto text-center">
                   <h2 className="mb-1">
                        <span className="theme">Featured </span> Hotels
                    </h2>
                    <p className="text-white">
                        Best Government Accomodations
                    </p>
                </div>
                <OwlCarousel items={3}  
                    className="row align-items-center owl-carousel owl-theme activity-slider"  
                    loop 
                    responsive={{0:{items:1},600:{items:2},1000:{items:3}}}
                    margin={8} >
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/birsa-vihar-rnc.jpg" alt="Hotel Birsa Vihar, Ranchi" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">

                                        <h3 className="mb-0 white">Hotel Birsa Vihar, Ranchi</h3>
                                    </div>

                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Hotel-Prabhat-Vihar.jpg" alt="Hotel Prabhat Vihar Deluxe, Netarhat" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                    <div className="trend-content-title"> 
                                        <h3 className="mb-0 white">Hotel Prabhat Vihar Deluxe, Netarhat</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Hotel-Van-Vihar,-Betla.jpg" alt="Hotel Van Vihar, Betla" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                         
                                        <h3 className="mb-0 white">Hotel Van Vihar, Betla</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Hotel-Natraj-Vihar,-Deoghar.jpg" alt="Hotel Natraj Vihar, Deoghar" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        
                                        <h3 className="mb-0 white">Hotel Natraj Vihar, Deoghar</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Hotel-Baidyanath-Vihar,-Deoghar.jpg" alt="Hotel Baidyanath Vihar, Deoghar" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Hotel Baidyanath Vihar, Deoghar</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Hotel-Ratan-Vihar,-Dhanbad.jpg" alt="Hotel Ratan Vihar, Dhanbad" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Hotel Ratan Vihar, Dhanbad</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Tourist-Complex,-Tenughat.jpg" alt="Tourist Complex, Tenughat" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Tourist Complex, Tenughat</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Tourist-Complex,-Itkhori.jpg" alt="Tourist Complex, Itkhori" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Tourist Complex, Itkhori</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Margiya-Suvidha-Kendra-Bagodar,-Giridih.jpg" alt="Margiya Suvidha Kendra Bagodar, Giridih" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Margiya Suvidha Kendra Bagodar, Giridih</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Swiss-Cottage-Tent,-Netarhat.jpg" alt="Swiss Cottage Tent, Netarhat" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Swiss Cottage Tent, Netarhat</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/Sarovar-Vihar,-Patratu-Lake-Resort.jpg" alt="Sarovar Vihar, Patratu Lake Resort" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Sarovar Vihar, Patratu Lake Resort</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/hotels/PARYATAN-VIHAR-PATRATU.jpg" alt="PARYATAN VIHAR PATRATU" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">PARYATAN VIHAR PATRATU</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div> 
            <div className="text-center">
                <Link to="#" className="btn btn-success">Book Now </Link>
            </div> 
        </section>
        <section className="trending pb-5 pt-0 mb-3">
            <div className="container">
                <div className="section-title mb-6 w-50 mx-auto text-center">
                    <h4 className="mb-1 theme1 d-none text-white">Events</h4>
                    <h2 className="mb-1">
                        <span className="theme">What's happening in </span> Jharkhand
                    </h2>
                    
                </div>
                <OwlCarousel items={3}  
                    className="row align-items-center owl-carousel owl-theme activity-slider"  
                    loop 
                    responsive={{0:{items:1},600:{items:2},1000:{items:3}}}
                    margin={8} >
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/parasailing.jpg" alt="Parasailing" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">

                                        <h3 className="mb-0 white">Parasailing</h3>
                                    </div>

                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/rock-climbing.jpg" alt="Rock Climbing" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                    <div className="trend-content-title"> 
                                        <h3 className="mb-0 white">Rock Climbing</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/kayaking.jpg" alt="Kayaking" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                         
                                        <h3 className="mb-0 white">Kayaking</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/banana-ride.jpg" alt="Banana Ride" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        
                                        <h3 className="mb-0 white">Banana Ride</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/jet-skiing.jpg" alt="Jet Skiing" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Jet Skiing</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/aero-sports.jpg" alt="Aero Sports" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Aero Sports (Glider)</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div> 
            <div className="text-center">
                <Link to="#" className="btn btn-success">Explore More Events</Link>
            </div> 
        </section>
        <section className="discount-action pt-6" style={{"backgroundImage":"url(assets/images/bg-explore.jpg)","backgroundPosition": "center"}}>
            <div className="section-shape section-shape1 top-inherit bottom-0"
                style={{"backgroundImage":"url(assets/images/shape8.png)"}}></div>
            <div className="container">
                <div className="call-banner rounded pt-10 pb-14">
                    <div className="call-banner-inner w-75 mx-auto text-center px-5">
                        <div className="trend-content-main">
                            <div className="trend-content mb-5 pb-2 px-5">
                                <h5 className="mb-1 theme">Explore the natural beauty of Jharkhand in motion</h5>
                                <h2>
                                   EXPLORE 
                                        <span className="theme1"> VIDEOS</span>
                                </h2>
                                 
                            </div>
                            <div className="video-button text-center position-relative">
                                <div className="call-button text-center">
                                    <button type="button" className="play-btn js-video-button" data-video-id="152879427"
                                        data-channel="vimeo">
                                        <i className="fa fa-play bg-blue"></i>
                                    </button>
                                </div>
                                <div className="video-figure"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-overlay"></div>
        </section>
        <section className="trending gallery-section pb-5 pt-0 mb-3">
            <div className="container">
                <div className="section-title mb-6 w-50 mx-auto text-center">
                    <h4 className="mb-1 theme1x d-nonex text-whitex theme">Explore Jharkhand in Photos Gallery</h4>
                    <h2 className="mb-1">
                        <span className="themex">Gallery </span> 
                    </h2>
                    
                </div>
                <OwlCarousel items={3}  
                    className="row align-items-center owl-carousel owl-theme activity-slider"  
                    loop 
                    responsive={{0:{items:1},600:{items:2},1000:{items:3}}}
                    margin={8} >
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/parasailing.jpg" alt="Hills" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">

                                        <h3 className="mb-0 white">Hills</h3>
                                    </div>

                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    
                        <div className="trend-item1 mt-3">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/rock-climbing.jpg" alt="Waterfalls" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                    <div className="trend-content-title"> 
                                        <h3 className="mb-0 white">Waterfalls</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/kayaking.jpg" alt="Monuments" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                         
                                        <h3 className="mb-0 white">Monuments</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    
                        <div className="trend-item1 mt-3">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/banana-ride.jpg" alt="Religious" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                        
                                        <h3 className="mb-0 white">Religious</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/jet-skiing.jpg" alt="Wild Life" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">WildLife</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    
                        <div className="trend-item1 mt-3">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/aero-sports.jpg" alt="Festivals" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Festivals</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-4 item">
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/jet-skiing.jpg" alt="Resorts" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Resorts</h3>
                                    </div>
                                    
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    
                        <div className="trend-item1 mt-3">
                            <div className="trend-image position-relative rounded">
                                <img src="assets/images/activities/aero-sports.jpg" alt="Culture" />
                                <div
                                    className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div className="trend-content-title">
                                       
                                        <h3 className="mb-0 white">Culture</h3>
                                    </div>
                                   
                                </div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    </div>
               </OwlCarousel>
            </div> 
            <div className="text-center">
                <Link to="#" className="btn btn-success">Explore More Gallery</Link>
            </div> 
        </section>

            {/* <Footersection/> */}
        </>
    )
}
