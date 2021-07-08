var foo = "bar";

function bar(){
    var foo = "baz";

    function baz(foo){
        console.log("B : " + foo);
        foo = "bam";
        //bam al no declarse con var, buscara fuera de su ambito , 
        //de esa forma hasta el final , si no encuentra creara variable global.
        bam = "yay"
        //Parametro seteado dentro de su ambito
        console.log("B1 : " + foo)
    }
    console.log("A")
    baz();
    console.log("C : " + foo)
}

bar()
foo;
console.log("D : " + foo);

bam;
console.log("E : " + bam);

//Function que no esta disponible fuera del ambito de la funcion bar
baz();