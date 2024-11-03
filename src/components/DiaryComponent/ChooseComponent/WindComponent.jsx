import React, { useEffect } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import './ChooseComponent.css'

export const WindComponent = ({weatherData}) => {

    let forecastday = weatherData?.forecast?.forecastday[0];

    
    if(!forecastday){
      return (
        <></>
      )
    } else {
      return (
        <Stack direction="column" spacing={2} alignItems="center">
          <LineChart
            series={[
              {
                data: [forecastday.hour[2].wind_kph, forecastday.hour[5].wind_kph, forecastday.hour[8].wind_kph, forecastday.hour[11].wind_kph, forecastday.hour[14].wind_kph, forecastday.hour[17].wind_kph, forecastday.hour[20].wind_kph, forecastday.hour[23].wind_kph]
              },
            ]}
            width={800}
            height={160}
            xAxis={[{ data: [0, 3, 6, 9, 12, 3, 6, 9, 12]}]}
          />
        </Stack>
      )
    }
}
