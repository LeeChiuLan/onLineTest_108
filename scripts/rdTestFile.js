var fs = require('fs');
 
fs.readFile('records.txt', function (err, data) {
    if (err) throw err;
 
    console.log(data.toString());
});

fs.appendFile('test.txt', '我很好！', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});