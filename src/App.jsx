import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { DiaryComponent } from './components/DiaryComponent/DiaryComponent'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'
import { TodayComponent } from './components/TodayComponent/TodayComponent'
import { WeeklyComponent } from './components/WeeklyComponent/WeeklyComponent'
import { getLocation } from './helpers/getLocation'
import { getDataWeather } from './helpers/getDataWeather'

function App() {

  const [response, setResponse] = useState(""); //obteniendo
  const [location, setLocation] = useState({lat: null, lon: null});
  const [data, setData] = useState({});
  

  useEffect(() => {

    getLocation()
    .then((location) => {
      setLocation(location);
      console.log("Ubi: ", location);

      return getDataWeather(location)
    })
    .then((data) => {
      if (data) { // Verifica que los datos no estén vacíos
        console.log("Weather Data: ", data);
        setData(data);
        setResponse("");
      }
    })
    .catch((error) => {
        console.error("Error: ", error);
          setResponse("error")
    })
    
    
  }, []);

  if( response === "obteniendo"){

    return (
      <>
        <HeaderComponent />
  
        <h1>Cargando...</h1>
  
      </>
    )

  } else if (response === "error"){
    
    return (
      <>
        <HeaderComponent />
  
        <h1>Concede el permiso para obtenertu ubicación o ingresa el nombre de tu ciudad en nuestro buscador.</h1>
  
      </>
    )

  } else {

    return (
      <>
        <HeaderComponent weatherData={data} />
  
        <TodayComponent weatherData={data}/>
  
        <DiaryComponent weatherData={data}/>
  
        <WeeklyComponent weatherData={data}/>
        
      </>
    )

  }
  
}

export default App
