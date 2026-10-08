let edad = parseInt(prompt(`Ingrese su edad: `));
const esAdulto = edad => edad >= 18;

if (esAdulto(edad)) {
    alert(`Acceso permitido`);
} else {
    alert(`Acceso denegado`);
};