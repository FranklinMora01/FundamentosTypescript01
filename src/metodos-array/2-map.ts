//* el metodo map(), crea un nuevo array, el array resultante tiene una modificacion por cada elemento del array devuelto 

const numeros = [10, 20, 30, 50];

const resultadoMap = numeros.map( ElNumber => ElNumber * 2);

console.log(resultadoMap);

const usuarios = [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Diego' },
];

const resultadoUsuarios = usuarios.map( userElemento =>  `<li> ${userElemento.name} </li>`);

console.log(resultadoUsuarios);