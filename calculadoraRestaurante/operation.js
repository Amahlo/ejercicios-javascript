export function calcularPropina(cuenta, porcentaje) {
    let valorPropina = cuenta * porcentaje;
    let totalPagar = cuenta + valorPropina;
    return totalPagar;
}