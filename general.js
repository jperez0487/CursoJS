

function test(){
    return {
        ok : true
    }
}


//Respuesta :  True

let valor = true;
let val = 0;
let tot;
function b(){
    tot = ++val;
    alert("B" + tot);
}
function c(){
    alert("C");
}
if(valor)b();c();


alert(test());

function test(){


    return // Insercion de punto y coma
    {
        ok : false
    }


}

//Respuesta : Undefined

if(a) b(); c();   //Solo B es parte de la condicional 

if(a) {b();c();}  // A y B son parte de la condicional

if(a) {b();} c(); //Solo B es parte de la condicional

++x;
++x;

x+=2;

alert(test2());



0 === ''        //false
0 === '0'       //false
0 === 0         //true
false === false //true
false === '0'   //false

var femo = "demo est pa \
quien es";

var demo2 = "demo esta para \ "

//CLOSURES

