let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);