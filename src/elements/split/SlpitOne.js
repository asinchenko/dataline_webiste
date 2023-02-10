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
                                        <p className="description">
                                        <br/>
                                        </p>
                                    </ScrollAnimation>

                                    
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <ul className="split-list">
                                            <li>- Сервисное обслуживание инженерной инфраструктуры ЦОД</li>
                                            <li>- Монтаж и пусконаладочные работы инженерных систем</li>
                                            <li>- Ввод оборудования в эксплуатацию</li>
                                            <li>- Мониторинг состояния и ремонт оборудования</li>
                                            <li>- Планирование обслуживания центров обработки данных</li>
                                            <li>- Гарантийный контроль и надзор за техническим состоянием</li>
                                            <li>- Развитие существующей инженерной инфраструктуры предприятия</li>
                                            <li>- Консультации по вопросам строительства и оснащения дата-центров</li>
                                        </ul>
                                        <p className="description">
                                        <br/>
                                        </p>
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
