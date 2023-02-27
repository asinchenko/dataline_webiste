import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../logo/Logo";
import {Link} from "react-router-dom";
const callToActionData = {
    title: "",
    subtitle: "Остались еще вопросы? Позвоните нам!",
    btnText: "Обратная связь",
}

const CalltoActionSeven = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-7">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-md-8">
                        <div className="inner">
                            <div className="content text-start">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/dataline/dl_logo_388x100.png`}
                                    image2={`${process.env.PUBLIC_URL}/images/dataline/dl_logo_388x100_white_white.png`}
                                />
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p className="subtitle">{callToActionData.subtitle}</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="call-to-btn text-start mt_sm--20 text-md-end">
                                <Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Связаться с нами <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSeven;