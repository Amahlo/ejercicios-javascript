export function sumar (a, b){
    alert(`El resultado es ${a + b}`);
}

export function restar (a, b){
    alert(`El resultado es ${a - b}`);
}

export function multiplicar (a, b){
    alert(`El resultado es ${a * b}`);
}

export function dividir (a, b){
    if (b === 0) {
        alert(`Error: No es posible dividir entre cero`);
        return;
    } 
    alert(`El resultado es ${a / b}`);
}

export function potenciar (a, b){
    alert(`El resultado es ${a ** b}`);
}