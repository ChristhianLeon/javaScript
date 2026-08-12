let alumno = prompt("Cual es el nombre del alumno");
let notaExamen = parseFloat(prompt("Ingrese nota del examen"));
let notaTaller = parseFloat(prompt("Ingrese nota del Taller"));
let notaProyecto = parseFloat(prompt("Ingrese nota del Proyecto"));

const calcularPromedio = (alumno, notaExamen, notaTaller, notaProyecto)=>{
    let promedio;
    promedio =  ((notaExamen+notaTaller+notaProyecto)/3);
    if(promedio>=7){
        console.log(`${alumno} esta aprobado con ${promedio}`);
        alert(`${alumno} esta aprobado con ${promedio}`);
    }else{
        console.log(`${alumno} No esta aprobado con ${promedio}`);
        alert(`${alumno} No esta aprobado con ${promedio}`);
    }
}

calcularPromedio(alumno, notaExamen, notaTaller, notaProyecto);