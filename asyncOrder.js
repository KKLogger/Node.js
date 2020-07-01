const fs = require('fs');


console.log('Start');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('First', data.toString());
    fs.readFile('./readme2.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('Second', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('Third', data.toString());
        });
    });
});
console.log('End');