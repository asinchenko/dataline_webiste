import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { BannerActivation } from "../utils/script";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Slider from "react-slick";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import TeamTwo from '../elements/team/TeamTwo';
import ServiceOne from '../elements/service/ServiceOne';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import SlpitOne from "../elements/split/SlpitOne";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import BrandTwo from "../elements/brand/BrandTwo";

const BannerData = [
    {
        image: "/images/it/dc_900_900.jpeg",
        title: "Сервис ЦОД",
        description: "Осуществляем сервисное обслуживание систем холодоснабжения, энергоснабжения, серверного и сетевого оборудования, слаботочных систем"
    },
    {
        image: "/images/it/installation_900_900.jpeg",
        title: "Монтаж",
        description: "Производим монтаж инженерных систем ЦОД и оборудования любого производителя"
    },
    {
        image: "/images/it/monitroing_900_900.jpeg",
        title: "Мониторинг",
        description: "Предоставляем удалённый или локальный мониторинг инфраструктуры для минимизации риска выхода оборудования из строя"
    },
    {
        image: "/images/it/diagnostics_900_900.jpeg",
        title: "Диагностика",
        description: "Производим полное обследование инженерных систем и даем рекомендации по модернизации ЦОД"
    },
    {
        image: "/images/it/supplies_900_900.jpeg",
        title: "Поставка",
        description: "Консультируем по оснащению ЦОД или серверной и осуществляем поставки оборудования под потребности заказчика"
    },
    {
        image: "/images/it/team_900_900.jpeg",
        title: "Команда",
        description: "Профессионализм специалистов компании подтвержден квалификационными сертификатами"
    }
    
]

const Company = () => {
    return (
        <>
            <SEO title="DataLine24" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-750">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <span className="subtitle">СЕРВИСНАЯ IT КОМПАНИЯ</span>
                                    <h1 className="title theme-gradient display-one">DATALINE24</h1>
                                    <ul className="list-icon">
                                        <li><span className="icon"><FiCheck /></span> Обеспечиваем надежный и качественный сервис инфраструктуры ЦОД </li>
                                        <li><span className="icon"><FiCheck /></span> Используем современные технологии и методы решения проблем </li>
                                        <li><span className="icon"><FiCheck /></span> Предлагаем необходимый уровень технической поддержки </li>
                                    </ul>
                                    <div className="button-group mt--40">
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Связаться с нами <i className="icon"><FiArrowRight /></i></Link>
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
                                                                <p className="description-new" dangerouslySetInnerHTML={{__html: data.description}}></p>
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
                                    <h3 className="title">Наш сервис – ваше спокойствие</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">DataLine24 – это надежная инженерная IT компания, предлагающая широкий спектр услуг поддержки с использованием современных технологий и методов решения проблем, высокую квалификацию и многолетний опыт работы.</p>
                                {/* <div className="readmore-btn">
                                    <Link className="btn-read-more" to="#"><span>View More</span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                <div id="about"></div>
                <Separator />
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" >
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = ""
                                    title = "Преимущества нашей компании"
                                    description = "Наряду с профессиональным опытом и успехами в реализации проектов разного масштаба и сложности наша компания также имеет ряд преимуществ:"
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
                <Separator />
                
                {/* <SlpitOne /> */}
                
                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = ""
                                        title = "Рабочий процесс"
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
                <div id="specialization"></div>
                <Separator/>
                
                
                {/* Start Portfolio Area  */}
                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    // subtitle = "Специализация"
                                    title = "Виды услуг"
                                    // description = "Наша компания является универсальной и разносторонней."
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio"  />
                    </div>
                </div>
                {/* End Portfolio Area  */}

                <Separator />
                {/* Start Team Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Заказчики"
                                        title = "Нам доверяют"
                                        description = ""
                                    />
                            </div>
                        </div>
                        <TeamTwo column="col-lg-4 col-md-3 col-12" teamStyle="team-style-default style-two" />
                    </div>
                </div>
                {/* End Team Area  */}
                <Separator />
                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--80 rn-section-gapBottom" id="partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Наши партнеры</h3>
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
                <Separator />
                {/* End Brand Area  */}
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default Company;
