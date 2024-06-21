"use strict";
;
//*Creamos el Objeto
const sitioWeb = {
    nombre: 'Google',
    link: {
        enlace: 'www.google.com'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/google',
            nombre: 'Google'
        }
    }
};
console.log('');
console.log('ACCEDER A LAS PROPIEDADES DE UN OBJETO');
console.log(`nombre del sitio ${sitioWeb.nombre}`);
console.log(`enlace del sitio ${sitioWeb.link.enlace}`);
console.log(`redes sociales ${sitioWeb.redesSociales.youtube.nombre}`);
console.log('');
console.log('ACCEDER A LAS PROPIEDADES DE UN OBJETO CON EL DESTRUCTURE (DESMENUZAR EL OBJETO)');
const { enlace, nombre: nombreYoutube } = sitioWeb.redesSociales.youtube;
console.log(enlace);
console.log(nombreYoutube);
//* puedes acceder de la siguiente forma; los nombres primero, segundo, tercero pueden ser cualquier otro nombre
const valores = [10, 20, 30];
const [primero, segundo, tercero] = valores;
console.log('');
console.log(primero);
console.log(segundo);
console.log(tercero);
//* si quiero obtener solo el ultimo valos puedo viajar dentro del arreglo de la siguiente forma
const valoresDos = [10, 20, 30];
const [, , ultimo] = valores;
console.log('');
console.log(ultimo);
