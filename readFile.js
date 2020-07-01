const fs = require('fs');

fs.readFile('./readme.txt', (err,data)=>{
    if(err){
        console.error(err);
        throw err;
    }
    console.log(data); //  버퍼 형태로 존재 
    console.log(data.toString());
});