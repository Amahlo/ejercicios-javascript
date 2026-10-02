const peliculasAPI = [
    { id: 1, titulo: "Interstellar", genero: "Sci-Fi", rating: 8.6 },
    { id: 2, titulo: "Son como niños", genero: "Comedia", rating: 5.9 },
    { id: 3, titulo: "Inception", genero: "Sci-Fi", rating: 8.8 }
];

const peliculasTop = peliculasAPI.filter((pelicula => pelicula.rating > 8.0));
console.log(peliculasTop);

const recomendaciones = peliculasTop.map(({titulo, genero}) => {
    return {Recomendada: `${titulo}`, Categoría: `${genero}`}
})

console.log(recomendaciones);