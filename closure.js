'use string';
console.log(":::::: CLOUSURE ::::::")
//EJEMPLO CLOUSURE 01

function crearSumador(x){
    console.log("Parametros Ingreso funcion externa : " + x)
    return function(y){
        return x + y;
    };
}
//Valor 5 enviado como valor
//Nuevo Entorno para el valor X
let suma5 = crearSumador(5);
//Nuevo Entorno para el valor X
let suma10 = crearSumador(10);

console.log(suma5(2));  // Retorna 7
console.log(suma5(1));  // Retorna 6
console.log(suma10(4)); // Retorna 14


//EJEMPLO CLOUSURE 02
console.log("--------------------------------------------------------------");
//
let nombreDigito = function(n){
    let nombre = ["Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete",]

    return nombre[n];
}
console.log("Sin Aplicar Clousure : " + nombreDigito(2));

let nombreDigitoB = ( function(n){
    let nombre = ["Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete",]

    return function(n){
        return nombre[n];
    };
} ) () ;
console.log("Aplicando Clousure : " + nombreDigitoB(5));