const invetarioLibros = [
    {titulo: "El lobo Estepario", autor: "Hermann Hesse", disponible: true},
    {titulo: "Aves Migratorias", autor: "Mariana Oliver", disponible: false},
    {titulo: "La Casa de los Espirus", autor: "Isabell Allende", disponible: true},
    {titulo: "Primer Amor", autor: "Samuel Berckeet", disponible: false}
];

invetarioLibros.push({titulo: "El Programador Pragmatico", autor: "David Thomas", disponible: true});
console.log(invetarioLibros);

const librosDisponibles = invetarioLibros.filter(dispobible => dispobible.disponible === true);
console.log(librosDisponibles);

const {titulo, autor} = librosDisponibles[0];
console.log(`El libro dispobile es ${titulo} del autor ${autor}`);