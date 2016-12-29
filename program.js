let http = require('http');
let url = require('url');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        let reqUrl = url.parse(req.url, true);
        let iso = new Date(reqUrl.query.iso);
        let result;
        switch (reqUrl.pathname) {
            case '/api/parsetime':
                result = parsetime(iso);
                break;
            case '/api/unixtime':
                result = unixtime(iso);
                break;
        }
        if (result) {
            // res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.end('please send a get request');
    }
}).listen(Number(process.argv[2]));

function parsetime(date) {
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
}

function unixtime(date) {
    return {
        "unixtime": date.getTime()
    }
}