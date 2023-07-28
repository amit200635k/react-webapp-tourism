import React,{useState,useEffect,Fragment  } from 'react'
import {Link} from "react-router-dom";
export const Header = () => {
 
    const [LoaderState, setLoaderState] = useState(1);
    const [getTopMargin, setTopMargin] = useState({"marginTop": "0px"});
    const [getCClass, setCClass] = useState("xxxxxxxxxx");
    //get scroll height and set header to margin-top -0
    

    useEffect(() => { 

        return () => { 
            setTopMargin({"marginTop": "0px"});       
            setLoaderState(0); 
            setCClass("yyy");
            // window.removeEventListener('scroll', handleScroll)
        }
    }, []) 
    

    return (
        <>
        <Fragment>
        {LoaderState ? ('<div id="preloader"><div id="status"></div></div>'):"" }
        
        <header className="main_header_area">
            <div className="header-content py-1 bg-theme">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="links">
                        <ul>
                            <li>
                                <span className="white"><i className="icon-calendar white"></i> Monday, July 10, 2023</span>
                            </li>
                            <li>
                                <span className="white"><i className="icon-phone white"></i> 0651-2345678</span>
                            </li>
                            <li>
                                <span className="white"><i className="icon-clock white"></i> Mon-Fri: 10 AM – 5 PM</span>
                            </li>
                        </ul>
                    </div>
                    <div className="links float-right">
                        <ul>
                            <li>
                                <Link to="https://facebook.com" className="white"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="white"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="white"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="#" className="white"><i className="fab fa-linkedin" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`header_menu pt-1x pb-1x fixed-top  ${getCClass}`} id="header_menu" style={getTopMargin}>
                <nav className="navbar navbar-expand-lg navbar-lightx bg-lightx" aria-label="Offcanvas navbar large">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/images/logo.png" alt="APp Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-start text-bg-darkx" tabIndex="-1" id="offcanvasNavbar2"
                            aria-labelledby="offcanvasNavbar2Label">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body navbar-collapse1 d-flexx align-items-center"
                                id="bs-example-navbar-collapse-1">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id="responsive-menuX">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Link</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-1 mt-lg-0" role="search">
                                    <img src="assets/images/jharkhand-sarkar.png" alt="JH Sarkar Logo" />
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
               
            </div>
        </header> 

        <div className="mobile-nav">
            <Link to="/" className="bloc-icon">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </Link>
            <Link to="#" className="bloc-icon">
                <i className="fas fa-heart"></i>
                <span>Favorite</span>
            </Link>
            <Link to="#" className="bloc-icon">
                <i className="fas fa-search-location"></i>
                <span>Search</span>
            </Link>
            <Link to="#" className="bloc-icon">
                <i className="fas fa-plus"></i>
                <span>Contribute</span>
            </Link>
            <Link to="#" className="bloc-icon">
                <i className="fas fa-user"></i>
                <span>Profile</span>
            </Link>
            </div>
            </Fragment>
        </>
    )
}
