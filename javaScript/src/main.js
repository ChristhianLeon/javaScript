//variables
let nombre = "Pepito";
let apellido = "Tayu"
let edad = 20;
//Constantes
const carrera = "Desarrollo software";

console.log("Mi nombre es:", nombre);
//interrelacion de cadenas
console.log(`mi nombre es: ${nombre} ${apellido} y tengo: ${edad}`);
//alert(`mi nombre es: ${nombre} ${apellido} y tengo: ${edad}`)
let res = 5/10;
console.log(`El resultado de dividir 5/10 es: ${res}`);
const alumnos=['Cristian','Mauricio','Xavier'];
console.log(alumnos[1]);
console.log(alumnos);
for(const alumno of alumnos){
  console.log(alumno);
}
//objetos
const persona = {
  nombre:"Cristian",
  edad:25,
  ciudad:"Riobamba"
}
console.log(persona);
console.log(`El nombre de la persona es: ${persona.nombre}, tiene: ${persona.edad} y vivo en: ${persona.ciudad}`);