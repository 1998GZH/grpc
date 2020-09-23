const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("hello.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const hello_proto = grpc.loadPackageDefinition(packageDefinition).hello_proto;

// 创建grpc服务
const server = new grpc.Server();
server.addService(hello_proto.Hello.service, {
  // 实现方法
  sayHello:(call, callback) => {
    try {
      console.log(call);
      let {name, age} = call.request;
      callback && callback(null, {message: `我是${name}, 我${age}岁！`});
    } catch (err) {
      console.error("服务器出错了", err);
    }
  }
});
server.bind('127.0.0.1:9999', grpc.ServerCredentials.createInsecure());
server.start();
console.log("server start: ...");