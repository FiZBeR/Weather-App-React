export const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                console.log("Ubicacion en helper ", location);
                resolve(location);
            },
            (error) => {
                console.error("Error obteniendo la ubicación: ", error);
                reject(error);
            }
        )
    });
}