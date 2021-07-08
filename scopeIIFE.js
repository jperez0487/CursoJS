
//PATRON IIFE: Expresión de función ejecutada inmediatamente
//Llamada de una funcion
//Poner nombre a la funcion IIFE para que no sea una funcion anonima

var foo = "foo";

(function Ejecutar(){

    var foo = "foo2";
    console.log(foo);

})();

console.log(foo);



//IIFE CON PARAMETRO
/*var foo = "foo";

(function Ejecutar(param){

    var foo = param;
    console.log(foo);

})(foo);

console.log(foo);*/