import React from 'react';
import { FiActivity } from "react-icons/fi";
import { FcFactory } from "react-icons/fc";
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Комплексность Услуг',
        description: 'Разработк, монтаж и установка различных технологических решений – полный цикл услуг от анализа и оптимизации существующих систем, до проектирования, поставки, монтажа и обслуживания новых решений'
    },
    {
        icon: <FcFactory />,
        title: 'Прямые Поставки',
        description: 'Прямые поставки от заводов-изготовителей – собственная налаженная система дистрибуции в каждом рабочем направлении, ВЭД и логистики'
    },
    {
        icon: <AiFillSafetyCertificate />,
        title: 'Профессионализм и Надежность',
        description: 'Немалый опыт работы и квалифицированные специалисты позволяют производить работы любой сложности'
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