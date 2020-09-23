const {HelloReq, HelloResp} = require('./chunk.js')['hello_proto'];
const dgram = require('dgram');
const client = dgram.createSocket('udp4');
// console.log(HelloReq, HelloResp);

let obj = {namex: 'gzh', age1: 18};
let hr = new HelloReq({
  name: 'gzh',
  age: 18
});
let req = HelloReq.create(obj);

console.log(req);
let str = 'hello world!';
let num = 123;
console.log(HelloReq.verify(num));
let buffer = HelloReq.encode(req).finish();
console.log(buffer);
let buf = Buffer.from(JSON.stringify(obj));
console.log(HelloReq.decode(buffer));

client.send(buffer, 9999, '127.0.0.1', err => {
  client.close();
});
// client.close();