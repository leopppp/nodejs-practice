const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

readStream.pipe(writeStream);

(async function test() {
    console.log("test");
})()
