let fs = require('fs');
let path = require('path');

function filter(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }
        let filtered = files.filter(file => path.extname(file) === '.' + ext);
        callback(null, filtered);
    });
}

module.exports = filter;