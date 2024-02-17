import React, { useEffect, useReducer, useRef } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import WeatherLoading from "./WeatherLoading";
import "./WeatherApp.css";

const initialState = {
    loading: true,
    temperature: 0,
    city: "Ankara",
    error: null,
    icon: "",
    text: "",
};

function weatherReducer(state, action) {
    switch (action.type) {
        case "FETCH_WEATHER_SUCCESS":
            return {
                ...state,
                loading: false,
                temperature: action.payload.temperature,
                city: action.payload.city,
                icon: action.payload.icon,
                text: action.payload.text,
            };
        case "FETCH_WEATHER_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

const WeatherApp = () => {
    const [state, dispatch] = useReducer(weatherReducer, initialState);
    const { temperature, city, loading, icon, text } = state;
    const div = useRef(null);

    const fetchWeather = async () => {
        const url =
            "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Ankara&days=3";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "c53bd66443msh1a9acd0fa7f2c6bp1a41bbjsn905197453607",
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
        };

        try {
            const response = await axios(url, options);
            const result = await response;

            dispatch({
                type: "FETCH_WEATHER_SUCCESS",
                payload: {
                    temperature: result.data.current.temp_c,
                    city: result.data.location.name,
                    icon: result.data.current.condition.icon,
                    text: result.data.current.condition.text,
                },
            });
        } catch (error) {
            dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error });
            console.error(error);
        }
    };

    const WeatherComponent = loading ? (
        <WeatherLoading loading={loading} />
    ) : (
        <WeatherCard
            city={city}
            temperature={temperature}
            icon={icon}
            text={text}
        />
    );

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <section id="weather-app" className="WeatherApp container-fluid">
            <div
                ref={div}
                className="flex justify-content-center align-items-center vh-100"
            >
                {WeatherComponent}
            </div>
        </section>
    );
};

export default WeatherApp;
