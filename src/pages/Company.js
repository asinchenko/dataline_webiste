import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { BannerActivation } from "../utils/script";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Slider from "react-slick";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';

import ServiceOne from '../elements/service/ServiceOne';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import SlpitOne from "../elements/split/SlpitOne";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import TeamFour from "../elements/team/TeamFour";
import BrandTwo from "../elements/brand/BrandTwo";

const BannerData = [
    {
        image: "/images/it/main.png",
        title: "Серверы",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
    {
        image: "/images/it/main1.png",
        title: "Системы Охлождения",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
    {
        image: "/images/it/main2.png",
        title: "СКУД",
        description: "We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
    },
]

const Company = () => {
    return (
        <>
            <SEO title="Company" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-750">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <span className="subtitle">СЕРВИСНАЯ IT КОМПАНИЯ</span>
                                    <h1 className="title theme-gradient display-one">DataLine24</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                        <li><span className="icon"><FiCheck /></span> Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <Slider className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                                    {BannerData.map((data, index) => (
                                        <div key={index} className="single-slide">
                                            <div className="bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>
                                                <div className="container">
                                                    <div className="row row--30 align-items-center">    
                                                        <div className="col-lg-12">
                                                            <div className="inner text-center">
                                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Service Area  */}
                <div className="service-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">We are creative digital agency working for our company brands.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quis. Ullam accusantium dignissimos repellendus nemo fugiat numquam, nisi odio adipisci. Veniam neque itaque expedita officiis rem ipsa! Ratione, rem reiciendis?</p>
                                <div className="readmore-btn">
                                    <Link className="btn-read-more" to="#"><span>View More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Services provide for you."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>

                        <ServiceOne 
                            serviceStyle = "service__style--1 icon-circle-style"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <SlpitOne />
                
                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Working Process"
                                        title = "Our Working Process."
                                    />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <TimelineTwo classVar="no-gradient"  />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="rwt-portfolio-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Project"
                                        title = "Why People Choose Us!"
                                        description = ""
                                    />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-6 col-md-6 col-sm-12 col-12 mt--50 portfolio" />
                    </div>
                </div>

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="wrapper plr--65">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Our Experts."
                                        title = "Companies Team"
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Our Awesome Customer Relation Build a <br /> Long Term Relationship.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Company;
