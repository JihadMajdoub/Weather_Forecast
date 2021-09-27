import React from 'react';
import './page.css';

export default function Page(props) {

    const {setCity, fetchWeather} = props;

    const handleChange = event => {
        setCity(event.target.value);
    }
    return (
    <div className='container'>
        <h1 className='header'><span className='weatherTitle'>Weather</span> Forecast</h1>
        <h1 className='searchBarTitle'>Find the weather of your city</h1>
        <form action="" className='searchBox' onSubmit={fetchWeather}>
            <input placeholder='Type in a city...' type="text" onChange={handleChange} />
            <button type='submit'>Search</button>
        </form>
    </div>
    )
}
