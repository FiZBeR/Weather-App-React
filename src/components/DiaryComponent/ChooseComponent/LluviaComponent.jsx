import React from 'react'
import './ChooseComponent.css'

export const LluviaComponent = ({weatherData}) => {

    const forecastday_0 = weatherData?.forecast?.forecastday[0];

    if (!forecastday_0) {
        return <p>No hay datos disponibles.</p>;
    } else {
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
                <p className="textotempe">{forecastday_0.hour[index].precip_mm} mm</p>
              </div>
            )}
          </section>
        ))
        .filter((_, index) => index % 2 !== 0) // Filtrar índices impares
        }
      </article>
      )
    }
}
