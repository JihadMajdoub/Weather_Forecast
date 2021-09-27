import React from 'react'
import './infoCont.css'
export default function infoCont(props) {

    const {name, value} = props;

    const weatherInfoIcons = {
        Sunset: '../assets/sun.png',
        Sunrise: '../assets/sun.png',
        Humidity: '../assets/humidity.png',
        Wind: '../assets/wind.png',
        Pressure: '../assets/pressure.png',
    }

    return (
        <div className='infoCont'>
            <img className='infoIcon' src={weatherInfoIcons[name]} />
            <span className='infoLabel'>{value}<span>{name}</span></span>
        </div>
    )
}
