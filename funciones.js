'use strict';
console.log(":::::: FUNCIONES ::::::")
console.log("::-- Funcion en FOR --::")

/*var divs = document.getElementsByClassName("clase");
console.log("Divs : " + divs.length);
//La Variable div_id se queda con el ultimo valor asignado
let div_id  ;
for(var i = 0;i<divs.length;i++){
    div_id = divs[i].id;
    console.log("A:" + div_id);
    divs[i].onclick = function(){
        console.log(div_id);
    };
}*/

console.log("::-- Funcion en ForEach --::")
//el valor div de la funcion de flecha contiene todos los divs
//Por cada llamado al onclick obtiene su id
var divs2 = document.getElementsByClassName("clase");
var arr = Array.from(divs2)
arr.forEach(div => {
    div.onclick = function(){
        console.log(div.id);
    };
});


//ARGUMENTS
console.log("::-- USO DE ARGUMENTS --::")
function suma(){
    let i,
    n = arguments.length,
    total = 0;
    for(i = 0 ; i < n ; i ++){
        total += arguments[i];
    }
    return total;
}

console.log("Suma : " + suma(1,3,5,6,7));

//THIS
console.log("::-- USO DE THIS --::")
//METHOD FORM
//El this es la refencia del objeto,que tiene el metodo que se invoca
let yo = {
    nombre: "Method Form : Jhonny",
    edad: 27,
    hablar: function () {
      console.log(this.nombre);
    }
  };
  console.log("--------------------------------------------------------------");
yo.hablar();

//FUNCTION FORM
//Hace referencia al objeto Global .
//En modo estricto se tiene que poner el prefijo para no obtener Undefined
function global(){
    return this;
}
console.log("--------------------------------------------------------------");
console.log("Function Form : " + window.global());

//CONSTRUCTOR FORM

var music = 'classical';
var getMusic = function(){
	return this.music;
};
//Al crear una instancia de TypeMusic las propiedades pasan al metodo usado 
var typeMusic = function(){
	this.music = "jazz";
	this.getMusic = function(){
		return this.music;
	}
}

var bar = new typeMusic();
console.log("--------------------------------------------------------------");
console.log("Global : " + this.getMusic()); // 'classical'      (Realiza el llamado de forma global)
console.log("Constructor Form : " + bar.getMusic()); // 'jazz'  (propiedad de bar, que es una instancia de typeMusic)

//APPLY FORM
//El valor de This se pasa Explicitamente
console.log("--------------------------------------------------------------");
//APPLY
let practicar = function(par1,par2,par3){
    console.log(`Mi deporte favorito es ${this.deporte} 
    y practico los dias ${par1},${par2},${par3}`);
}

let opciones = {
    deporte : 'Ciclismo',
    tiempo : '1 Año'
}

let dias = ["Martes","Jueves","Sabado"];

console.log("Apply  : " );
practicar.call(opciones,dias[0],dias[1],dias[2]);

console.log("Call : " );
practicar.apply(opciones,dias);
