const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("hello.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
console.log(packageDefinition);
const hello_proto = grpc.loadPackageDefinition(packageDefinition).hello_proto;

console.log("init client");
const client = new hello_proto.Hello('127.0.0.1:6666', grpc.credentials.createInsecure());

client.sayHello({name: 'guozhenghong', age: 22}, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response);
})