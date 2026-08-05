const nombre = prompt("Cual es su nombre");
console.log(`hola ${nombre}`);
const edad = prompt("Cual es su edad");
if(parseInt(edad)>=18){
    console.log(`${nombre} es mayor de edad`);
}else{
    console.log(`${nombre} es nemor de edad`);
}