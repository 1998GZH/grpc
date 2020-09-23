const dgram = require('dgram');
const {HelloReq, HelloResp} = require('./chunk.js')['hello_proto'];

const server = dgram.createSocket('udp4', (msg, rInfo) => {
  // console.log(msg, rInfo);
  let data = HelloReq.decode(msg);
  console.log(data);
}).bind(9999, '127.0.0.1', console.log('server listening...'));