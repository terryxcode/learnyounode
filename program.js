let http = require('http');
let bl = require('bl');

http.get(process.argv[2],
    res => {
        res.setEncoding('utf8');
        res.pipe(bl(
            (err, data) => {
                if (err) {
                    console.error(err);
                }
                data = data.toString();
                console.log(data.length);
                console.log(data);
            }
            ));
    }
).on('error', console.error);