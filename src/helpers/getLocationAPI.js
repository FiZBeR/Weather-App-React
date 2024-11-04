
export const getLocationAPI = async ({busqueda}) => {

  console.log("busqueda en API " + busqueda);
  const respuesta = await fetch(`https://nominatim.openstreetmap.org/search?q=${busqueda}&format=json&limit=1`)
  const data = await respuesta.json();
  
  const coordenadas = {
    lat: data[0].lat,
    lon: data[0].lon
  };
  console.log("Info en coordenadas: ", coordenadas.lat + "lon: ", coordenadas.lon);
  return  coordenadas
}
