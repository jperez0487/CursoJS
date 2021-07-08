
//EVAL : Tomara el codigo pero hara que se ejecute lentamente
//En modo estricto puede ejecutarse un poco mas rapido ya que el codigo tiene una mejor optimizacion
var bar = "bar";

function foo(str){
    eval(str);
    console.log(bar);
}

foo("var bar = 42;");


console.log("-------------------------");

var obj = {
    a: 2,
    b: 3,
    c: 4
};

obj.a =  obj.b + obj.c;
obj.c =  obj.b - obj.a;

with (obj){
    a = b + c;
    d = b - a;
    d = 3;
}

console.log(obj.d);
console.log(d);
