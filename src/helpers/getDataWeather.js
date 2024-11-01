export const getDataWeather = async (locationPC) => { 
    
    const coordenadas = locationPC.lat + "," + locationPC.lon;
    console.log("Coordenadas: ",coordenadas);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    console.log(API_KEY);
    const days = 5;

    const respuesta = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${coordenadas}&days=${days}`)
    const data = await respuesta.json();
    console.log("Info en helper: ", data);

    return data
}

