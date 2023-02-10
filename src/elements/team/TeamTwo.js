import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiGlobe } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'prokyratyra.png',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'Астана, Казахстан', 
        description: 'ГУ «Управление материально-технического обеспечения при Генеральной прокуратуре Республики Казахстан»',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: 'https://www.instagram.com/prokuratura.govkz/?hl=ru'
            },
            {
                icon: <FiGlobe />,
                url: 'https://www.gov.kz/memleket/entities/prokuror'
            },
            {
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/prokuratura.govkz/'
            },
        ]
       
    },
    {
        image: 'nitec.png',
        name: 'Afsana Nila',
        designation: 'App Developer',
        location: 'Астана, Казахстан', 
        description: 'АО «Национальные информационные технологии»',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: 'https://web.facebook.com/nitec.kz/?_rdc=1&_rdr'
            },
            {
                icon: <FiGlobe />,
                url: 'https://www.nitec.kz/ru'
            },
            {
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/nitec_kz/?hl=ru'
            },
        ]
      
    },
    {
        image: 'gerb.png',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
        location: 'Астана, Казахстан', 
        description: "ГУ «Комитет по правовой статистике и специальным учетам Генеральной прокуратуры Республики Казахстан»",
        socialNetwork: [
            {
                icon: <FiGlobe />,
                url: 'https://www.gov.kz/memleket/entities/pravstat?lang=ru'
            },
        ]
        
    },
    {
        image: 'anticor.png',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'Астана, Казахстан', 
        description: "ГУ «Агентство Республики Казахстан по противодействию коррупции (Антикоррупционная служба)»",
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: 'https://web.facebook.com/antikor.kaz/?_rdc=1&_rdr'
            },
            {
                icon: <FiGlobe />,
                url: 'https://www.gov.kz/memleket/entities/anticorruption?lang=ru'
            },
            {
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/antikor.kaz/'
            },
        ]
       
    },
    {
        image: 'kazagrofin.png',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'Астана, Казахстан',
        description: 'АО «КазАгроФинанс»',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: 'https://web.facebook.com/kaf.kz/?_rdc=1&_rdr'
            },
            {
                icon: <FiGlobe />,
                url: 'https://www.kaf.kz/'
            },
            {
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/kazagrofinance/'
            },
        ]
       
    },
    {
        image: 'mycar.png',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'Астана, Казахстан', 
        description: '«MyCar Astana»',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: 'https://web.facebook.com/mycar.astana/?_rdc=1&_rdr'
            },
            {
                icon: <FiGlobe />,
                url: 'https://mycar.kz/'
            },
            {
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/mycar.astana/'
            },
        ]
       
    },
]

const TeamTwo = ({column , teamStyle}) => {
    return (
        <div className="row row--15 ">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner ">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}`} alt="Image not found" />
                                </figure>
                                <figcaption className="content">
                                    <p className="description-new">{data.description}</p>
                                    <div className="position-bottom">
                                        <span className="team-form">
                                            <img src="./images/team/location.svg" alt="Corporate React Template" />
                                            <span className="location">{data.location}</span>
                                        </span>
                                        
                                        <ul className="social-icon social-default icon-naked mt--20" >
                                            {data.socialNetwork.map((social, index) =>
                                                <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                            )}
                                        </ul>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TeamTwo;
