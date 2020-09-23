const grpc = require('grpc');
const protoLoder = require('@grpc/proto-loader');
const {HelloRequest, HelloResponse} = require('./dist/hello_pb.js');

let packageDefinition = protoLoder.loadSync('./hello.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
let {hello_proto} = grpc.loadPackageDefinition(packageDefinition);

let server = new grpc.Server();
let response = new HelloResponse();
response.setMessage('hello grpc');
console.log(response.toObject());
server.addService(hello_proto.Hello.service, {
  sayHello: (call, callback) => {
    try {
      console.log(call);
      callback(null, {message: 'hello grpc'});
    } catch(err) {
      console.error('服务器出错~', err);
    }
  }
})
server.bind('127.0.0.1:9999', grpc.ServerCredentials.createInsecure());
server.start();
// console.log(hello_proto);