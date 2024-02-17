import React from "react";

const WeatherLoading = ({ loading }) => {
    if (!loading) return null;

    return (
        <div className="card">
            <div className="card-header">
                <h1>Loading</h1>
            </div>
            <div className="card-body text-center">
                <div
                    className="spinner-grow"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherLoading;
