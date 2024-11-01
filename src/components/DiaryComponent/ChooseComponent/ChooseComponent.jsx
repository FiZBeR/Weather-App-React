import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsTooltip, ChartsXAxis } from '@mui/x-charts';
import PropTypes from 'prop-types';
import './ChooseComponent.css'

export const ChooseComponent = ( {weatherData, choose}) => {

  const forecastday_0 = weatherData?.forecast?.forecastday[0];

  if (!forecastday_0) {
    return <p>No hay datos disponibles.</p>;
  }
    
  console.log("item: " + choose);

  if(choose === "temperature"){
    return (
      <article className='contenedorDay'>
        {forecastday_0.hour.map((hour, index) => (
          <section key={index} className="itemInterno">
            <div>
              {index < 12 ? (
                <p className="textotempe">{index} AM</p>
              ) : (
                <p className="textotempe">{index} PM</p>
              )}
            </div>
  
            {forecastday_0.hour[index]?.condition && (
              <img
                src={forecastday_0.hour[index].condition.icon}
                className="imagentempe"
                alt={`Weather icon for ${index} hour`}
              />
            )}
  
            {forecastday_0.hour[index] && (
              <div>
                <p className="textotempe">{forecastday_0.hour[index].temp_c}°</p>
              </div>
            )}
          </section>
        ))
        .filter((_, index) => index % 2 !== 0) // Filtrar índices impares
        }
      </article>
    );
  } else if (choose === "wind" ){
    return (
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        width={500}
        height={300}
      />
    );
  } else if (choose === "precipity"){
    return (
      <article className='contenedorDay'>
      {forecastday_0.hour.map((hour, index) => (
        <section key={index} className="item">
          <div>
            {index < 12 ? (
              <p className="textoChoose">{index} AM</p>
            ) : (
              <p className="textoChoose">{index} PM</p>
            )}
          </div>

          {forecastday_0.hour[index]?.condition && (
            <img
              src={forecastday_0.hour[index].condition.icon}
              className="imagen"
              alt={`Weather icon for ${index} hour`}
            />
          )}

          {forecastday_0.hour[index] && (
            <div>
              <p className="textoChoose">{forecastday_0.hour[index].precip_mm} mm</p>
            </div>
          )}
        </section>
      ))
      .filter((_, index) => index % 2 !== 0) // Filtrar índices impares
      }
    </article>
    )
  } else {
    return (
      {/*<LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />*/}
    )
  }
}

ChooseComponent.propTypes = {
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
    }),
    choose: PropTypes.string.isRequired, 
};