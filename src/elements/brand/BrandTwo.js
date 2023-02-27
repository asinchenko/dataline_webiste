import React from 'react';

const BrandList = [
    {
        image: './images/brand/brand-dl-01.png',
        link: "https://www.hpe.com/us/en/home.html"
    },
    {
        image: './images/brand/brand-dl-02.png',
        link: `https://www.conteg.com/`
    },
    {
        image: './images/brand/brand-dl-03.png',
        link: `https://www.hokkaido.it/`
    },
    {
        image: './images/brand/brand-dl-04.png',
        link: `https://montair.it/ru/`
    },
    {
        image: './images/brand/brand-dl-05.png',
        link: `https://dtgroup.io/`
    },
    {
        image: './images/brand/brand-dl-06.png',
        link: `https://www.tecoenergy.com/`
    },
    {
        image: './images/brand/brand-dl-07.png',
        link: `https://www.socomec.com/Home_en.html`
    },
    {
        image: './images/brand/brand-dl-08.png',
        link: `https://www.delta.com/`
    },
    {
        image: './images/brand/brand-dl-09.png',
        link: `https://www.eaton.com/us/en-us.html`
    },
    {
        image: './images/brand/cuba.png',
        link: `https://cuba.tocloud.kz/`
    }
]

const BrandTwo = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href={`${data.link}`}><img src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandTwo;
