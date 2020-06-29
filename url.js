const url = require('url');

const URL = url.URL;
const myURL = new  URL("http://www.gilbut.co.kr/book/bokkList/aspx?sercate1=001001000#anchor");

console.log('new URL' , myURL);
console.log('url.format()',url.format(myURL));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const parsedUrl = url.parse("http://www.gilbut.co.kr/book/bokkList/aspx?sercate1=001001000#anchor");
console.log('new parseurl' , parsedUrl);
console.log('url.format()',url.format(parsedUrl));