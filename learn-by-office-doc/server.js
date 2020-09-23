const grpc = require('grpc');

// const {HelloRequest, HelloResponse} = require('./dist/hello_pb.js');
// const {HelloClient, HelloPromiseClient} = require('./dist/hello_grpc_web_pb.js');

const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("hello.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const hello_proto = grpc.loadPackageDefinition(packageDefinition).hello_proto;

let response = hello_proto.HelloRequest;
// 创建grpc服务
const server = new grpc.Server();
server.addService(hello_proto.Hello.service, {
  // 实现方法
  sayHello:(call, callback) => {
    try {
      console.log(call);
      callback && callback(null, response);
    } catch (err) {
      console.error("服务器出错了", err);
    }
  }
});
// console.log(HelloClient, HelloPromiseClient);
/* function Hello(call, callback) {
  let reply = new HelloResp();
  callback(null, reply);
}
let mr = new HelloReq(); */
/* console.log(HelloClient);

const server = new grpc.Server();
server.addService(HelloClient, {
  sayHello:(call, callback) => {
    try {
      let {name, age} = call.request;
      callback && callback(null, {message: `我是${name}, 我${age}岁！`});
    } catch (err) {
      console.error("服务器出错了", err);
    }
  }
});
console.log(server); */

server.bind('127.0.0.1:1998', grpc.ServerCredentials.createInsecure());
server.start();
console.log("server start: ...");