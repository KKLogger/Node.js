const fs =require('fs');

console.log('시작');

fs.readFile('./readme2.txt',(err,data)=>{
    if(err)
        throw err;
    console.log('first', data.toString());
})

fs.readFile('./readme2.txt',(err,data)=>{
    if(err)
        throw err;
    console.log('second', data.toString());
})

fs.readFile('./readme2.txt',(err,data)=>{
    if(err)
        throw err;
    console.log('third', data.toString());
})

console.log('끝');