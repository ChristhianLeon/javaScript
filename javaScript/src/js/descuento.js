let nombreProducto = prompt("Cual es su nombre de producto");
let valor = parseFloat(prompt("Ingrese el precio del producto"));
let descuento = parseFloat(prompt("Ingrese el descuento del producto"));

/** FUNCION FECHA (ARROW FUNCTION) */
const calcularTotal = (valor, descuento)=>{
    let total;
    total =  valor - ((valor * descuento) / 100);
    console.log(`El precio final es ${total}`);
    alert(`El precio final es ${total}`);
}

calcularTotal(valor,descuento);