function foo(){
    //Los valores definidos con const y let ,
    // solo seran recuperados dentro de la funcion bloque 
    
    //Los valores definidos con var seran 
    //recuperados dentro del ambito global , local para la funcion
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}




function foo2(){
    var bar = "bar";
    for (let i=0; i < bar.length;i++){
        console.log(bar.charAt(i));
    }
    console.log(i);//Error Referencia - i no esta dentro del alcance
}

function foo3(bar){
    if(bar){
        let baz = bar;
        if(baz){
            let bam = baz;
            console.log("val : " + bam);
        }
        console.log(bam);//Error - bam no esta dentro del alcance
    }
    console.log(baz);//Error - baz no esta dentro del alcance
}

foo();
console.log("Ejemplo 2");
foo2();
console.log("Ejemplo 3");
foo3("bar");



