const carritoCompras = [
    {id: 1, producto: "Laptop", precio: 1200, categoria: "Tecnologia"},
    {id: 2, producto: "Libro JavaScript", precio: 40, categoria: "Educacion"}
];

const nuevoProducto = {id: 3, producto: "Xbox-series X", categoria: "Tecnologia"};
carritoCompras.push(nuevoProducto);
console.log("Carrito compras actualizado", carritoCompras);

const productoTecnologia = carritoCompras.filter(item => item.categoria === "Tecnologia");
console.log("Productos tecnologia", productoTecnologia);

const primerItem = carritoCompras[0];
const {producto, precio} = primerItem;

console.log(`Lleve hoy la ${producto} por solo $${precio}`);