import { useState } from 'react';
import PropTypes from 'prop-types';
import './DiaryComponent.css';
import lluvia from './Images/lluvia-32.png'
import humedad from './Images/higrómetro-30.png'
import viento from './Images/viento-30.png'
import temperatura from './Images/temperature.png'
import { HumedityComponent } from './ChooseComponent/HumedityComponent';
import { TemperatureComponent } from './ChooseComponent/TemperatureComponent';
import { WindComponent } from './ChooseComponent/WindComponent';
import { LluviaComponent } from './ChooseComponent/LluviaComponent';

export const DiaryComponent = ({ weatherData }) => {

    //const { location, forecastday, current } = weatherData;
    const [item, setItem] = useState("temperature");

    const handleTemperature = () => {
      setItem("temperature");
    };

    const handleWind = () => {
      setItem("wind");
    };

    const handlePrecipi = () => {
      setItem("lluvia");
      console.log("LL clicked");
    };

    const handleHumedity = () => {
      setItem("humedity");
      console.log("H clicked");
    };

    if (!weatherData || !weatherData.location || !weatherData.current) {
      return <></> // O muestra un mensaje de error, un spinner, etc.
    } else {
      return (
    
        <article className="conteiner-one">
            <section className="section-options">
              <div className='part'>
                <img src={temperatura} className="icon-section" />
                <button onClick={ handleTemperature }  className="boton">Temperature</button>
              </div>
                
              <div className='part'>
                <img src={viento} className="icon-section" />
                <button onClick={ handleWind }  className="boton">Wind</button>
              </div>  
    
              <div className='part'>
                <img src={lluvia} className="icon-section" />
                <button onClick={ handlePrecipi }  className="boton">Precipitation</button>
              </div>  
                
              <div className='part'>
                <img src={humedad} className="icon-section" />
                <button onClick={ handleHumedity }  className="boton">Humidity</button>
              </div>
            </section>
    
            <div className="conteiner-two">
              {/* <ChooseComponent weatherData={ weatherData } choose = {item} className='item'/> */}
              {item == "temperature" ? <TemperatureComponent weatherData={ weatherData }/> : item == "wind" ?  <WindComponent weatherData={ weatherData }/> : item == "lluvia" ? <LluviaComponent weatherData={ weatherData }/> : item == "humedity" ? <HumedityComponent weatherData={ weatherData }/> : <TemperatureComponent/>}
            </div>
        </article>
      )
    }
}

DiaryComponent.propTypes = {
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
