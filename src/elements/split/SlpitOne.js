import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import Typed from 'react-typed';

const SlpitOne = () => {
    return (
            <div className="rn-splite-style ">
                <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="thumbnail image-left-content">
                                    <img src="./images/it/submain.jpeg" alt="split Images" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner">
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <h4 className="title"></h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="inner">
                                        <h1 className="title theme-gradient-original">
                                            <Typed
                                                strings={[
                                                    "Консультация.",
                                                    "Разработка.",
                                                    "Поставка.",
                                                    "Монтаж.",
                                                    "Сервисное Обслуживание.",
                                                    "Техническая поддержка.",
                                                ]}
                                                typeSpeed={80}
                                                backSpeed={5}
                                                backDelay={1000}
                                                loop
                                            />
                                        </h1>
                                    </div>
                                    <p className="description">Штат компании состоит из сертифицированных специалистов, охватывающих инженерную инфраструктуру ЦОД в направлениях:
                                    <br/>
                                        </p>
                                    </ScrollAnimation>

                                    
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <ul className="split-list">
                                            <li>- Монтаж, пуско-наладочные работы, сервисное обслуживание и ремонт:</li>
                                            <li>- Бесперебойного питания Eaton</li>
                                            <li>- Систем охранно-пожарных сигнализаций, тушения и слаботочным системам СКД и видеонаблюдения ИСО «Орион» </li>
                                            <li>- Систем прецизионного кондиционирования Conteg, Montair, DT Group, Hokkaido</li>
                                            <li>- Подбор, интеграцию, монтаж, настройку и последующее сервисное сопровождение систем мониторинга Conteg инженерных систем ЦОД</li>
                                            <li>- Архитектура и инженерная инфраструктура ЦОД, Эксплуатация ЦОД.</li>
                                        </ul>
                                    </ScrollAnimation>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <div className="view-more-button mt--35">
                                            <a className="btn-default" href="/contact">Связаться с нами</a>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SlpitOne
