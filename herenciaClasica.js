'use strict';
console.log(":::::: HERENCIA ::::::")
function new_constructor(initializer,methods,extend){
   var prototype = Object.create(typeof extend === 'function'? extend.prototype: extend);
   if(methods){
       methods.keys().forEach(function(key){
        prototype[key] = methods[key];
       });  
   }
   function constructor(){
        var that = Object.create(prototype);
        if(typeof initializer === 'function'){
            initializer.apply(that,arguments);
        }
        return that;
    }

    constructor.prototype = prototype;
    prototype.constructor = constructor;
    return constructor;
}


// HERENCIA CLASICA

console.log("HERENCIA CLASICA");
//Ejemplo 01
//Se Define el objeto como un constructor 
function Perro(id,nombre,color){
    this.id = id;
    this.nombre = nombre;
    this.color = color;
}
//Prototype es un objeto dentro de un objeto.
//Mediante prototype se define nuevas propiedades incluidas en este objeto
Perro.prototype.Info = function(){
    return `El perro se llama ${this.nombre} y es de color ${this.color}`;
}

function Animal(raza){
    this.raza = raza;
}
//Mediante el uso de New se crear una nueva instancia del objeto, 
//El objeto Prototype almacena las nuevas propiedades del objeto instanciado (HERENCIA)
Animal.prototype = new Perro(101,'Chueco','Blanco');
Animal.prototype.TieneMismoNombre = function(nombre){
    return this.nombre === nombre;
}

const objAnimal = new Animal('Pastor');
console.log("Resultadoo : ");
console.log(`Valor Nueva propiedad Info : ${Animal.prototype.Info()}`);
console.log(`Valor Nueva propiedad TieneMismoNombre : ${Animal.prototype.TieneMismoNombre('Chueco')}`);


//Ejemplo 02

// HERENCIA FUNCIONAL
console.log("HERENCIA FUNCIONAL");
//Ejemplo 01
function gizmo(id){
    return{
        id : id,
        toString: function(){
            return "Valor Gizmo " + this.id;
        }
    }
}

function hoozit(id){
    var that = gizmo(id);
    that.test = function(testid){
        return testid === this.id;
    };
    return that;
}

console.log("Resultado : ");
console.log(hoozit("00001"));
console.log(hoozit("00002").toString());

//Ejemplo 02
const perro = () =>{
    const sonido = "Guau";
    return {
        hablar :() => {
         return sonido;   
        }
    }
}

const datos = (nombre)=>{
    const info = perro();
    info.nombre = nombre;
    return info;
}

//Recuperando Informacion
const objDatos = datos("Toffi");

console.log(objDatos.nombre);   //Toffi
console.log(objDatos.hablar()); //Guau


console.log("---------------------");