export function calcularPrecioFinal(precioBase, descuento, impuesto) {
    const valorConDescuento = precioBase - (precioBase * descuento);
    const totalConImpuestos = valorConDescuento + (valorConDescuento * impuesto);
    return totalConImpuestos; 
}

export function formatearMoneda(valorNumerico) {
    return "$" + valorNumerico.toFixed(2);
}