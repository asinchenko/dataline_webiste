import React from 'react';
import { BsListTask } from "react-icons/bs";
import { AiOutlineCustomerService } from "react-icons/ai";
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <BsListTask />,
        title: 'Комплексность Услуг',
        description: 'Предоставляем полный цикл услуг: от анализа, оптимизации и обслуживания существующих систем до проектирования, поставки и монтажа новых решений'
    },
    {
        icon: <AiFillSafetyCertificate />,
        title: 'Профессионализм',
        description: 'Немалый опыт работы и наличие квалифицированных специалистов позволяют осуществлять работы любой сложности, обслуживая оборудование широкого списка производителей'
    },
    {
        icon: <AiOutlineCustomerService />,
        title: '3.	Service Desk 24/7',
        description: 'Осуществляем техническую поддержку необходимого уровня в режиме 24/7/365'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;