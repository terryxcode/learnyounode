let http = require('http');
let fs = require('fs');
let map = require('through2-map');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map(chunk => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        return res.end('send me a POST\n');
    }
}).listen(Number(process.argv[2]));