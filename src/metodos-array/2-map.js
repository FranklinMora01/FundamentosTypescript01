"use strict";
//* el metodo map(), crea un nuevo array, el array resultante tiene una modificacion por cada elemento del array devuelto 
const numeros = [10, 20, 30, 50];
const resultadoMap = numeros.map(ElNumber => ElNumber * 2);
console.log(resultadoMap);
