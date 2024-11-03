//import React from 'react'
import './HeaderComponent.css';
import PropTypes from 'prop-types';
import findIcon from './Images/findIcon.png';
import buscar from './Images/icons8-búsqueda-50.png'
import iconbunny_removebg_preview from './Images/iconbunny-removebg-preview.png';
import { useState } from 'react';

export const HeaderComponent = ( {weatherData} ) => {

  if (!weatherData || !weatherData.location || !weatherData.current) {
    return <span class="loader"></span> // O muestra un mensaje de error, un spinner, etc.
  }

  const { location } = weatherData; 

  const [ city, setCity] = useState('');

  const conseguirDatosFormulario = e => {

    e.preventDefault();
    alert('Esta funcion aun no esta disponible');
    /* e es el objeto de nuestro evento conseguirDatosFormulario
    let datos = e.target; 
    let city = datos.city.value;
    console.log(city);
    setCity(city);
    */
  }

  return (
    <div className="header">
        <h1 className="tittle-one">Weather</h1>
        
        <div className="location-container">
          <img src={findIcon} className="icon-ubica" alt="location icon" />
          <p className="simple-text">{ location.name }, { location.region }</p>
        </div>

        <form onSubmit={conseguirDatosFormulario}  className="form-search-city">
        <input type="text" id="text-area" placeholder="Buscar ciudad aquí..." name="city" className="search-input"/>
          <button type="submit" className="search-btn">
              <img src={buscar} alt="Buscar" className="search-icon"/>
          </button>
        </form>
        
        <img src={iconbunny_removebg_preview} className="logo-weather"/>
    </div>
  )
}

HeaderComponent.propTypes = {
  weatherData: PropTypes.shape({
    current: PropTypes.shape({
      cloud: PropTypes.number,
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
        code: PropTypes.number
      }),
      dewpoint_c: PropTypes.number,
      dewpoint_f: PropTypes.number,
      feelslike_c: PropTypes.number,
      feelslike_f: PropTypes.number,
      gust_kph: PropTypes.number,
      gust_mph: PropTypes.number,
      heatindex_c: PropTypes.number,
      heatindex_f: PropTypes.number,
      humidity: PropTypes.number,
      is_day: PropTypes.number,
      last_updated: PropTypes.string,
      last_updated_epoch: PropTypes.number,
      precip_in: PropTypes.number,
      precip_mm: PropTypes.number,
      pressure_in: PropTypes.number,
      pressure_mb: PropTypes.number,
      temp_c: PropTypes.number,
      temp_f: PropTypes.number,
      uv: PropTypes.number,
      vis_km: PropTypes.number,
      vis_miles: PropTypes.number,
      wind_degree: PropTypes.number,
      wind_dir: PropTypes.string,
      wind_kph: PropTypes.number,
      wind_mph: PropTypes.number,
      windchill_c: PropTypes.number,
      windchill_f: PropTypes.number
    }),
    forecastday: PropTypes.arrayOf(
      PropTypes.shape({
        astro: PropTypes.shape({
          sunrise: PropTypes.string,
          sunset: PropTypes.string,
          moonrise: PropTypes.string,
          moonset: PropTypes.string,
          moon_phase: PropTypes.string,
        }),
        date: PropTypes.string,
        date_epoch: PropTypes.number,
        day: PropTypes.shape({
          avghumidity: PropTypes.number,
          avgtemp_c: PropTypes.number,
          avgtemp_f: PropTypes.number,
          avgvis_km: PropTypes.number,
          avgvis_miles: PropTypes.number,
          condition: PropTypes.shape({
            code: PropTypes.number,
            icon: PropTypes.string,
            text: PropTypes.string,
          }),
          daily_chance_of_rain: PropTypes.number,
          daily_chance_of_snow: PropTypes.number,
          daily_will_it_rain: PropTypes.number,
          daily_will_it_snow: PropTypes.number,
          maxtemp_c: PropTypes.number,
          maxtemp_f: PropTypes.number,
          maxwind_kph: PropTypes.number,
          maxwind_mph: PropTypes.number,
          mintemp_c: PropTypes.number,
          mintemp_f: PropTypes.number,
          totalprecip_in: PropTypes.number,
          totalprecip_mm: PropTypes.number,
          totalsnow_cm: PropTypes.number,
          uv: PropTypes.number,
        }),
        hour: PropTypes.arrayOf(
          PropTypes.shape({
            chance_of_rain: PropTypes.number,
            chance_of_snow: PropTypes.number,
            cloud: PropTypes.number,
            condition: PropTypes.shape({
              code: PropTypes.number,
              icon: PropTypes.string,
              text: PropTypes.string,
            }),
            dewpoint_c: PropTypes.number,
            dewpoint_f: PropTypes.number,
            feelslike_c: PropTypes.number,
            feelslike_f: PropTypes.number,
            gust_kph: PropTypes.number,
            gust_mph: PropTypes.number,
            heatindex_c: PropTypes.number,
            heatindex_f: PropTypes.number,
            humidity: PropTypes.number,
            is_day: PropTypes.number,
            precip_in: PropTypes.number,
            precip_mm: PropTypes.number,
            pressure_in: PropTypes.number,
            pressure_mb: PropTypes.number,
            snow_cm: PropTypes.number,
            temp_c: PropTypes.number,
            temp_f: PropTypes.number,
            time: PropTypes.string,
            time_epoch: PropTypes.number,
            uv: PropTypes.number,
            vis_km: PropTypes.number,
            vis_miles: PropTypes.number,
            will_it_rain: PropTypes.number,
            will_it_snow: PropTypes.number,
            wind_degree: PropTypes.number,
            wind_dir: PropTypes.string,
            wind_kph: PropTypes.number,
            wind_mph: PropTypes.number,
            windchill_c: PropTypes.number,
            windchill_f: PropTypes.number,
          }),
        ),
      }),
    ),
    location: PropTypes.shape({
      country: PropTypes.string,
      lat: PropTypes.number,
      localtime: PropTypes.string,
      localtime_epoch: PropTypes.number,
      lon: PropTypes.number,
      name: PropTypes.string,
      region: PropTypes.string,
      tz_id: PropTypes.string
    })
  })  
};

