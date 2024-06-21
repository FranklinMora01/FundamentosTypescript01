"use strict";
//Reduce, es un metodo de arreglo que es un acumuladorm es decir toma una cantidad de datos y nos retorna el resultado acymuado
const carritos = [
    { nombre: 'Notebook MSI', precio: 1600000 },
    { nombre: 'Mouse Razer', precio: 50000 },
    { nombre: 'Audifonos Razer', precio: 30000 },
    { nombre: 'Monitor Asus', precio: 300000 }
];
//*CON FUNCION TRADICIONAL
//const resultadosCarritos = carritos.reduce(function(total: number, product: IProductos){
//    return total + product.precio;
//}, 0);
//*ARROW FUNCTIONS O FUNCIONES FLECHAS 
const resultadosCarritos = carritos.reduce((total, product) => total + product.precio, 0);
console.log(resultadosCarritos);
