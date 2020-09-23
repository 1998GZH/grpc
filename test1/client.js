const {HelloRequest, HelloResponse} = require('./dist/hello_pb');
const {HelloClient} = require('./dist/hello_grpc_web_pb.js');

let request = new HelloRequest();
request.setName('guozhenghong');
request.setAge(18);

let client = new HelloClient('http://127.0.0.1:9999');
console.log(client);
client.sayHello(request, {}, (err, response) => {
  console.log(err, response);
});