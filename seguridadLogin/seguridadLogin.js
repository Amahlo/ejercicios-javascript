const CONTRASENA_CORRECTA = "admin123";
const INTENTOS_MAXIMOS = 3;
let accesoConcedido = false;
let intentosActuales = 0; 

while (!accesoConcedido && intentosActuales < INTENTOS_MAXIMOS) {
    let intento = prompt("Escribe tu contraseña:");

    intentosActuales++;

    if (intento === CONTRASENA_CORRECTA) {
        alert("Contraseña correcta, ingreso exitoso. ¡Bienvenido!");
        accesoConcedido = true;
    } else {
        let intentosRestantes = INTENTOS_MAXIMOS - intentosActuales;

        if (intentosRestantes > 0) {
            alert(`Contraseña incorrecta. Te quedan ${intentosRestantes} intentos.`);
        }
    }
} 
if (!accesoConcedido) {
    alert("Te quedaste sin intentos. Cuenta bloqueada por 8 horas.");
}