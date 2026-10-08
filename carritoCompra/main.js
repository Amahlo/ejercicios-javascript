import {calcularPrecioFinal, formatearMoneda} from "./funciones.js";

const precioLapto = 1500;
const descEstudiante = 0.10; 
const ivaLocal = 0.19;       

const precioNeto = calcularPrecioFinal(precioLapto, descEstudiante, ivaLocal);

const etiquetaPrecio = formatearMoneda(precioNeto);

console.log(`El cliente debe pagar: ${etiquetaPrecio}`);