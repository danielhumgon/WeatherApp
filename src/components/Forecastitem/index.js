import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';
import './styles.css';


const ForecastItem = ({ weekDay, hour, data }) => (

    <div className="forecast-item">
        <h2>{weekDay} - {hour} hrs.</h2>
        <WeatherData data={data} />

    </div>
    
    
);

ForecastItem.propTypes = {

    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;