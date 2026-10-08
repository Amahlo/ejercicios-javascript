export function calcularEdad(anioNacimiento){
    const anioActual = 2026;
    return anioActual - anioNacimiento;
};

export function esMayorDeEdad(edad){
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};