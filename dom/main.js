const nombreUsuario = document.getElementById(`nombre`);

nombreUsuario.textContent = `Felipe el Travieso`;

const descripcionUsuario = document.getElementById(`descripcion`);

descripcionUsuario.innerHTML = 'Esta es una <strong>descripcion actualizada</strong> y en negrita';

const imagen = document.getElementById(`mi-imagen`);

imagen.setAttribute(`alt`, `Una descripcion mucho mas descriptiva`);
imagen.setAttribute(`class`, `imagen-principal`);

const enlace = document.getElementById(`mi-enlace`);
const destinoEnlace = enlace.getAttribute(`href`);

console.log(destinoEnlace);

const titulo = document.getElementById(`titulo`);
titulo.style.color = `crimson`;
titulo.style.fontSize = `32px`;

const parrafo = document.getElementById(`parrafo`);
parrafo.classList.add("destacado");