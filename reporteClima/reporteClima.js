const reporteClima = { 
    ciudad: "Medellín", 
    temp: { actual: 24, max: 28, min: 18 }, 
    humedad: 60 };

let {ciudad, temp: {actual: temperaturaActual = 40}, viento = "10 km/h"} = reporteClima;

console.log(`En la ciudad ${ciudad} hace ${temperaturaActual} grados, con vientos a ${viento}`);

temperaturaActual = 40;

console.log(`En la ciudad ${ciudad} hace ${temperaturaActual} grados, con vientos a ${viento}`);