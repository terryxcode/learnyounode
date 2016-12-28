let http = require('http');
let bl = require('bl');

let count = 3;
let contents = [];
for (let i = 0; i < 3; i++) {
    const k = i;
    http.get(process.argv[k + 2],
        res => {
            res.pipe(bl(
                (err, data) => {
                    if (err) {
                        console.error(err);
                    }
                    contents[k] = data.toString();
                    --count;

                    if (count === 0) {
                        contents.forEach(c => console.log(c));
                    }
                }
            ));
        }
    ).on('error', console.error);
}