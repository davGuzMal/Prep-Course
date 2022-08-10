// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x<y){return y;}
  else if (x>y){return x;}
  else {return x;}
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var output
  if(edad>=18){
    output='Allowed';
  }
  else{
    output='Not allowed';
  }
  return output;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var output
  if(status===1){
    output='Online';
  }
  else if (status===2){
    output='Away';
  }
  else{
    output='Offline';
  }
  return output;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var output
  if(idioma==='aleman'){
    output='Guten Tag!';
  }
  else if (idioma==='mandarin'){
    output='Ni Hao!';
  }
  else if (idioma==='ingles'){
    output='Hello!';
  }
  else{
    output='Hola!';
  }
  return output;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var colorFinal;
  if(color==='blue' || color==='red' || color==='green' || color==='orange'){
    colorFinal='This is '+color;
  }
  else {
    colorFinal='Color not found';
  }
  return colorFinal;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero===5 || numero===10 ){
    return true;
  }
  else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero>50 || numero<20 ){
    return true;
  }
  else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if(Math.floor(numero)===numero){
    return true;
  }
  else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var output
  switch(numero){
    case(numero%3===0 && numero%5===0):
      output='fizzbuzz';
    break;
    case(numero%3===0):
      output='fizz';
    break;
    case(numero%5===0):
      output='buzz';
    break;    
    default:
      output=numero;
    break;
  }
  return output;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  var output;
  if((num1>num2)&&(num1>num3)&&(num1>0)){
    output='Número 1 es mayor y positivo';
  }
  else if ((num1<0)||(num2<0)||(num2<0)){
    output='Hay negativos';
  }
  else if((num3>num2)&&(num3>num1)){
    output=num3++;    
  }
  else if ((num1===0)||(num2===0)||(num2===0)){
    output='Error';
  }
  else{
    output=false;
  }
  return output;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var contador=0;
  if(numero===1 || numero===0){
    contador=3;
  }
  else{
    for(var i=1; i<=numero;i++){
      if(numero%i===0){
        contador++;
      }
    }
  }
  if(contador===2){
    return true;
  }
  else{
    return false
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var output;
  switch(valor){
    case true :
    output='Soy verdadero';
    break;
    case false :
    output='Soy falso';
    break;
  }
  return output;
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tablaSeis=new Array(11);
  for(var i=0; i<11; i++){
    tablaSeis[i]=i*6;
  }
  return tablaSeis;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero-100>=0){
    return true;
  }
  else{
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i=0;
  do{
    numero=+5;
    i++;
  }while(i<7)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
