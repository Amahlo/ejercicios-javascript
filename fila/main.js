const filaBanco = ["Manuel", "Juan", "Valentina"];
filaBanco.push("Valentino");
console.log(filaBanco);

filaBanco.unshift("Roberta");
console.log(filaBanco);

const clienteAtendido = filaBanco.shift();
console.log(clienteAtendido);
console.log(filaBanco);