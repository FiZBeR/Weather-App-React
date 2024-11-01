import React from 'react';
import './WeeklyComponent.css';

export const WeeklyComponent = ({ weatherData }) => {

    const forecastday = weatherData?.forecast?.forecastday;

    if (!forecastday) {
        return <p>No hay datos disponibles.</p>;
    }

    return (
        <article className='contenedorWeek'>
            <div className='contenedorsubtitulo'>
                <h3 className='subtituloWeek'>Weekly Forecast</h3>
            </div>

            {forecastday.map((day, index) => (
                <section key={index} className="itemWeek">
                <div>
                    <p className='textWeek'>July 12</p>
                </div>

                <img src={day.day.condition.icon} alt="Weather icon" className='iconWeek'/>

                <div>
                    <p className='textWeek'>Max: {day.day.maxtemp_c}°    Min: {day.day.mintemp_c}°</p>
                </div>
                <div>
                    <p className='textWeek'>{day.day.condition.text}</p>
                    <p className='textWeek'>Precipitation: {day.day.totalprecip_mm} mm</p>
                    <p className='textWeek'>Humidity: {day.day.avghumidity} %</p>
                    <p className='textWeek'>Wind:{day.day.maxwind_kph} km/h</p>
                </div>
            </section>
            ))}
        </article>
    )
};

