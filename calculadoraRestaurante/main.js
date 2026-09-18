import { calcularPropina } from "./operation.js";

const PORCENTAJE_PROPINA = 0.10;
let valorTotal = parseFloat(prompt("Ingrese el valor total de la cuenta: "));

if (isNaN(valorTotal)) {
    alert(`Por favor, ingresa un número válido para la cuenta.`)
} else {
    let totalPagar = calcularPropina(valorTotal, PORCENTAJE_PROPINA)

    console.log(`El tipo de dato de totalPagar es: `, typeof totalPagar);
    alert(`El valor a pagar sin propina es: ${valorTotal} y con propina es de: ${totalPagar}`);
}