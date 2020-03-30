const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    console.log(`Request was made: ${req.url}`);
    const readStream = fs.createReadStream(`${__dirname}/index.html`,'utf8');
    readStream.pipe(res);
}).listen(8080);

console.log('Listening on port 8080');