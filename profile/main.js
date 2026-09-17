const NOMBRE = "hernan";
const APELLIDO = "perez";

const NACIMIENTO = 1992;
const ANIOACTUAL = 2026;

let edad = ANIOACTUAL - NACIMIENTO;

const NOMBRECOMPLETO = NOMBRE + APELLIDO;

const MENSAJEPERFIL = `El usuario ${NOMBRECOMPLETO} tiene ${edad} años.`;
console.log(MENSAJEPERFIL);