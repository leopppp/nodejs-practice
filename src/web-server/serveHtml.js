const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    console.log(`Request was made: ${req.url}`);
    res.writeHead(200, {'Content-Type':'text/html'});
    const readStream = fs.createReadStream(`${__dirname}/anotherIndex.html`,'utf8');
    readStream.pipe(res);
}).listen(8080);

console.log('Listening on port 8080');