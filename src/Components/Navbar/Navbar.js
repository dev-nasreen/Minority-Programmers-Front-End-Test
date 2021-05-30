import React from 'react';
import logo from '../../images/logo.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import './Navbar.css'
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="menu-bg">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="navbar-brand" to="https://minorityprogrammers.com/"><img src={logo} style={{ height: "50px" }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 social-menu">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="https://twitter.com/minorityprogram"><AiOutlineTwitter/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://www.facebook.com/MinorityProgrammers"><AiFillFacebook /></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="https://www.linkedin.com/company/minority-programmers/"><IoLogoLinkedin /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://www.instagram.com/accounts/login/"><IoLogoInstagram /></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main-menu">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/incubator">Incubator</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/learnPage" >Learn Page</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;