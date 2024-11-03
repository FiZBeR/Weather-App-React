import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import './ChooseComponent.css'

export const HumedityComponent = ({weatherData}) => {

  const forecastday = weatherData?.forecast?.forecastday[0];

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
              data: [forecastday.hour[2].humidity, forecastday.hour[5].humidity, forecastday.hour[8].humidity, forecastday.hour[11].humidity, forecastday.hour[14].humidity, forecastday.hour[17].humidity, forecastday.hour[20].humidity, forecastday.hour[23].humidity]
            },
          ]}
          width={600}
          height={160}
          xAxis={[{ data: [0, 3, 6, 9, 12, 3, 6, 9, 12]}]}
        />
      </Stack>
    )
  }
}

