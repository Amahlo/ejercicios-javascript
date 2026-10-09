const productos = [
    {id: 1, nombre: "camisestas", precio: 80},
    {id: 2, nombre: "pantalon", precio: 50},
    {id: 3, nombre: "gorra", precio: 150},
    {id: 4, nombre: "medias", precio: 20},
    {id: 5, nombre: "tangas", precio: 200},
    {id: 6, nombre: "tenis", precio: 300}
];

const ofertas = productos.filter(producto => producto.precio >= 100);
console.log("Los porductos en oferta son: ofertas", ofertas);