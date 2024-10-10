//var numeroUno = parseInt(prompt("ingrese el  primer numero: "));
//var numeroDos = parseInt(prompt("ingrese el segundo numero: "));

//console.log(numeroUno+numeroDos)

//var variable = 23
//console.log(typeof(variable))
//var variable ='23'
//console.log(typeof(variable))
//var variable =true
//console.log(typeof(variable))
//var variable  // valor undefined
//console.log(typeof(variable))
//var variable = null
//console.log(typeof(variable))

//condicionales
if(5 < 5){
    console.log('Esto es un condicional simple')
}else if(5 > 5) {
    console.log('Este es el condicional anidado')
}else {
    console.log('esti es un condicional compuesto')
}

//let opcion = prompt('seleccione la opcion: 1,2,3,4')
//switch(opcion){
  //  case '1':
    //    console.log('esta es la opcion 1')
     //   break;
    //case '2':
    //    console.log('esta es la opcion 2')
     //   break;
    //case '3':
      //  console.log('esta es la opcion 3')
   //     //break;
    //case '4':
      //  console.log('esta es la opcion 4')
        //break;
   // default:
     //   console.log('no existe el caso')
       // break;
//}


//let edad = 18
//let resultado = edad > 18 ? true : false
//console.log(resultado
//)

var num = 0
if(num < 0 ){
    console.log('negativo')
}else if(num === 0){
    console.log('es cero')
}else {
    console.log('positivo')
}

var tarifa = 6
if(tarifa <= 2){
    console.log('gratis')
}else {
    console.log('cada hora adicional cuesta 5 dolares')
}

let edad = 18
let edadrest = 18-edad
if(edad >= 18){
    console.log('puede votar')
}else{
    console.log('te falta' + edadrest + edad)
}

var num1 

var num2

var resultado = num1 + num2

let calculadora = prompt('seleccione la opcion: 1,2,3,4')
switch(calculadora){
case '1':
    num1 + num2 + resultado
    break;
case '2':
    num1 - num2 + resultado
    break;
case '3':
    num1 * num2 + resultado
    break;
case '4':
    num1 / num2 + resultado
    break;
default:
    console.log('escoge una operacion')
    break;
}