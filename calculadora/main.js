import { sumar, restar, multiplicar, dividir, potenciar } from "./math.js";

const SALIR = `mayday`;
let palabra;
let contador = 0;
let numero1;
let numero2;

do {
    let opcion = parseInt(prompt(`Qué deseas realizar, selecciona una opción: \n1. Sumar. \n2. Restar \n3. Multiplicar \n4. Dividir \n5. Potenciar \n6. Salir`)); 

    if(opcion > 0 && opcion < 6){
        numero1 = parseInt(prompt(`Ingrese el primer número`));
        numero2 = parseInt(prompt(`Ingrese el segundo número`));
    }
    
    switch (opcion) {
        case 1:
            sumar(numero1, numero2);
            break;
            
        case 2:
            restar(numero1, numero2);
            break;

        case 3:
            multiplicar(numero1, numero2);
            break;

        case 4:
            dividir(numero1, numero2);
            break;

        case 5:
            potenciar(numero1, numero2)
            break;

        case 6:
            palabra = prompt(`Ingrese palabra clave para salir: `).toLocaleLowerCase();
            break;

        default:
            alert(`Opcion incorrecta, intente nuevamente`);
            break;
    }
    
    contador++; 
    console.log(`Estoy en el ciclo`);

} while (!(palabra === SALIR));

alert(`Saliste de la aplicación, la usaste ${contador} vece(s)`);