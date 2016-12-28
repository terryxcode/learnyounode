let net = require('net');
let time = require('strftime');

net.createServer(s => {
    let data = time('%F %H:%M', new Date());
    s.end(data + '\n');
}).listen(process.argv[2]);