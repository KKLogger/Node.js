const fs = require('fs');

fs.writeFile('./writeme.txt','글이 입력 됩니다.',(err)=>{
    if(err){
        console.error(err);
        throw err;
    }
    fs.readFile('./writeme.txt',(err,data)=>{
        if(err){
            console.error(err);
            throw err;
        }
        console.log(data.toString());
    });
});