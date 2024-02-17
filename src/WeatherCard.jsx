import React from "react";

const WeatherCard = ({ city, temperature, icon, text }) => {
    return (
        <div className="card">
            <img
                src={icon}
                className="WeatherImage card-img-top animate__animated animate__bounce"
                alt="Weather Image"
            />
            <div className="card-header">
                <h1>{text}</h1>
            </div>
            <div className="card-body text-center">
                <label htmlFor="city">{city}</label>
                <p>{temperature}°C</p>
            </div>
        </div>
    );
};

export default WeatherCard;
