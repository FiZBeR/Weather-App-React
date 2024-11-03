# Weather App 🌦️

Esta es una aplicación de clima desarrollada en React que muestra el pronóstico del tiempo en la ubicación actual del usuario. Al iniciar la app, esta detecta automáticamente la ubicación y la envía a una API de clima, la cual nos devuelve la información del clima de ese lugar en tiempo real.

![Interfaz de la Weather App](./assets/Captura1.JPG)


## Características 🚀

- Obtención automática de la ubicación del usuario.
- Muestra el clima actual basado en la ubicación.
- Interfaz sencilla y amigable.

## Tecnologías utilizadas 🛠️

- **React** para la creación de componentes e interfaz de usuario.
- **Geolocalización** para obtener la ubicación automáticamente.
- **API de clima** para obtener datos en tiempo real.

##Configura tu API Key 🔑

La aplicación requiere una API Key para obtener datos del clima. Puedes obtener una clave gratuita registrándote en un proveedor de API de clima, como OpenWeatherMap.

- Regístrate en el sitio y obtén tu API Key.
- Crea un archivo .env en la raíz del proyecto.
- Agrega tu clave al archivo con el siguiente formato: VITE_WEATHER_API_KEY=TU_API_KEY_AQUI
