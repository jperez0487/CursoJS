//Funcion Expresion
var foo = function bar(){
    
    var foo = "baz";
    console.log("B1");
    //Funcion Declaration
    function baz(foo){
        console.log("D1");
        //JS al no ser declarado con VAR,busca el ambito superior 
        //y encuentra el valor como definicio de funcion
        foo = bar;
        //el valor bar al no llevar () se toma como un texto 
        //si usara () se ejecutaria la funcion
        console.log("D2 : " + bar);
        foo;
    }
    console.log("C1");
    baz();
};
console.log("A1");
foo();
//LA funcion bar() no puede ser usado porque esta fuera del ambito
// y esta siendo asignada a una variable
bar();
console.log("F1");


// El nombre de la funcion no cambia, sin importar Expresion o Declaracion
function foo() {}
console.log(foo); // el string alterado contiene el nombre
            // de la función "foo"
var bar = foo;
console.log(bar); // el string todavía contiene el nombre
            // de la función "foo"