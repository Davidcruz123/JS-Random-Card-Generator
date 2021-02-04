let simbolos=["\u2660","\u2663","\u2665","\u2666"];
let numeros=[1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
let colores=["red","black"];


let simboloSeleccionado=simbolos[Math.floor(Math.random() * simbolos.length) ];
let numeroseleccionado=numeros[Math.floor(Math.random() * numeros.length) ];
let colorseleccionado=colores[Math.floor(Math.random() * colores.length) ];



document.getElementById("divsup").innerHTML=simboloSeleccionado;
document.getElementById("divsup").style.color=colorseleccionado;

document.getElementById("divcentral").innerHTML=numeroseleccionado;
document.getElementById("divcentral").style.color=colorseleccionado;


document.getElementById("divinf").innerHTML=simboloSeleccionado;
document.getElementById("divinf").style.color=colorseleccionado;


