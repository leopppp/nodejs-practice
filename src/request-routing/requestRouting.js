const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(`Request was made: ${req.url}`)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        const readStream = fs.createReadStream(`${__dirname}/index.html`,'utf8');
        readStream.pipe(res);
    } else if(req.url === '/api/contacts'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        const ninjas = [{name: 'Tom', age: 28},{name: 'Jason', age:32}];
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        const readStream = fs.createReadStream(`${__dirname}/404.html`,'utf8');
        readStream.pipe(res);
    }
}).listen(3000);

console.log('Listening on port 3000...');
