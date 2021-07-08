"TEORIA ALCANCE DINAMICO"

function foo(){
    //Deberia imprimir el valor de la variable bar ,
    // al buscar la variable en un ambito superior de donde es llamado
    console.log(bar);
}

function baz(){
    var bar = "bar";
    foo();
}

baz();