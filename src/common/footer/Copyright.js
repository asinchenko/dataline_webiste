import React from 'react'
import {RiMailLine, RiWhatsappLine, RiTelegramLine} from "react-icons/ri"
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
                                <li><a href="mailto:info@dtln24.kz"><RiMailLine /></a></li>
                                <li><a href="https://wa.me/77770793332"><RiWhatsappLine/></a></li>
                                <li><a href="https://t.me/+77770793332"><RiTelegramLine /></a></li>
                                
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