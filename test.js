const url = require('url');

const url1 = url.URL;
const url2 = new URL('http://ww.naver.com');
const url3= url.parse('http://www.naver.com');

console.log(url1);
console.log(url2);
console.log(url3);