const {HelloRequest, HelloResponse} = require('./dist/hello_pb.js');
const {HelloClient} = require('./dist/hello_grpc_web_pb.js');

console.dir(HelloClient);

let client = new HelloClient('http://127.0.0.1:1998');
let request = new HelloRequest();
request.setName('guozhenghong');
request.setAge(18);

