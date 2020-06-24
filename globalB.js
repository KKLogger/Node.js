let  A = require('./globalA');

global.message = '안녕하세요';

console.log(global.message);
console.log(A());