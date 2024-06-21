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
