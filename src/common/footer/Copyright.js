import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover flex justify-center">                 
                            <ul className="social-icon social-default">
                                <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                            </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text">DATALINE24 {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;