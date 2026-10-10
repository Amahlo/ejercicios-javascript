const listaTareas = [
    { id: 1, texto: "Aprender HTML", completada: true },
    { id: 2, texto: "Aprender CSS", completada: true },
    { id: 3, texto: "Dominar React", completada: false }
];

const tareasActualizadas = {id: 4, texto: "Estudiar APIs", completada: false};

const nuevaLisaTareas = [...listaTareas, tareasActualizadas];
console.log(nuevaLisaTareas);

const tareasPendientes = nuevaLisaTareas.filter(pendiente => pendiente.completada === false);
console.log(tareasPendientes);

const renderizarHTML = tareasPendientes.map(({texto}) => {
    return `<li class='pendiente'>${texto}</li>`
});

console.log(renderizarHTML);