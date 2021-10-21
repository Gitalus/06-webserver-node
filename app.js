// paquete http que permite crear un servidor http usando node
// luego lo reemplazaremos con express
const http = require('http');

const port = 8080;

// crea un servidor y lo levanta de inmediato, si hay un error se cae, por eso se usa nodemon
http.createServer((request, response) => {

    response.write('Hola Mundo');

}).listen(port); // abre el puerto

console.log('Escuchando el puerto', port);