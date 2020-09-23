const grpc = require('@grpc/grpc-js');

const {HelloRequest, HelloResponse} = require('./dist/hello_pb.js');
const {HelloClient, HelloPromiseClient} = require('./dist/hello_grpc_web_pb.js');

const protoLoader = require('@grpc/proto-loader');
let packageDefinition = protoLoader.loadSync(
  './hello.proto',
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
let {hello_proto} = grpc.loadPackageDefinition(packageDefinition);
console.log(hello_proto.Hello);

/* let server = new grpc.Server();
let sayHello = (call, callback) => {
  try {
    let response = new HelloResponse()
    response.setMessage('hello grpc');
    callback(null, response);
  } catch {
    console.error("服务器出错了~");
  }
}; */
const server = new grpc.Server();
server.addService(hello_proto.Hello.service, {
  // 实现方法
  sayHello:(call, callback) => {
    try {
      let {name, age} = call.request;
      callback && callback(null, {message: `我是${name}, 我${age}岁！`});
    } catch (err) {
      console.error("服务器出错了", err);
    }
  }
});

/* let response = new HelloResponse();
response.setMessage('this is grpc server message!');
let server = new grpc.Server();
server.addService(HelloClient, {
  sayHello: (call, callback) => {
    console.log(call);
    callback(null, response);
  }
}); */
server.bind('127.0.0.1:9999', grpc.credentials.createInsecure());
server.start();

console.log("server start: ...");