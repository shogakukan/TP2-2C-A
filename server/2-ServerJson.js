const http = require('http');

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

http.createServer((req, res) =>{
    res.writeHead(200, {'Conten-Type': 'application/json'});
    //res.write('Hola mundo');
    //console.log('se realizo una petición');
    res.write(JSON.stringify(inventors));
    res.end();
}).listen(3000,'127.0.0.1', () => 
    console.log('Server escuchando el puerto 3000')
);