let filter = require('./mymodule');
filter(process.argv[2], process.argv[3], ls);

function ls(err, files) {
    if (err) {
        console.error(err);
    }
    files.forEach(f => console.log(f));
}