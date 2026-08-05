const alumno = prompt("Cual es su nombre?");
const nota1 = prompt("Ingrese la nota 1");
const nota2 = prompt("Ingrese la nota 2");
const nota3 = prompt("Ingrese la nota 3");
const promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
if(promedio>=30){
    alert(`El alumno: ${alumno}, aprueba con un promedio de: ${promedio}`)
}else{
    alert(`El alumno: ${alumno}, No aprueba con un promedio de: ${promedio}`)
}
