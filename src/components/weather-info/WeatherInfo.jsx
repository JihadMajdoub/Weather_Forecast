import React from 'react';
import InfoCont from '../InfoCont/InfoCont';
import './weatherInfo.css';

export default function WeatherInfo(props) {
    const {weather} = props;
    const isDay = weather.weather[0].icon.includes('d');
    Date.prototype.getFullMinutes = function() {
        if(this.getMinutes() < 10) {
            return '0' + this.getMinutes();
        }
        return this.getMinutes();
    }
    Date.prototype.getFullHours = function() {
        if(this.getHours() < 10) {
            return '0' + this.getHours();
        }
        return this.getHours();
    }
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getFullHours()} : ${new Date(timeStamp * 1000).getFullMinutes()}`;
    };
    
    return (
    <div className="container2">
        <h1 className='title2'><span className='title3'>Weather </span>Forecast</h1>
        <div className="weatherCondition">
            <span className='temp'>{`${Math.floor(weather.main.temp - 273)} °C |`}<span className='weatherType'> {`${weather.weather[0].description}`}</span></span>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />                
        </div>
        <span className='location'>{`${weather.name}, ${weather.sys.country}`}</span>
        <span className='weatherInfoLabel'>Weather Info.</span>
        <div className="weatherInfoContainer">
            <InfoCont name={isDay ? 'Sunrise' : 'Sunset'} value={getTime(weather.sys[isDay ? 'sunrise' : 'sunset'])} />
            <InfoCont name='Humidity' value={`${weather.main.humidity} %`} />
            <InfoCont name='Wind' value={`${weather.wind.speed} mph`} />
            <InfoCont name='Pressure' value={`${weather.main.pressure} hPa`} />         
        </div>
    </div>
    )
}
