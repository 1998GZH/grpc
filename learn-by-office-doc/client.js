const {HelloRequest, HelloResponse} = require('./dist/hello_pb.js');
const {HelloClient} = require('./dist/hello_grpc_web_pb.js');

console.dir(HelloClient);

let client = new HelloClient('http://127.0.0.1:1998');
let request = new HelloRequest();
request.setName('guozhenghong');
request.setAge(18);

// console.log(request, client);
client.sayHello(request, {metaData: {'hello': 'world'}}, (err, response) => {
  console.log(err, response);
});
// client.
// client = 
/* console.log(s);
var echoService = new EchoServiceClient('http://localhost:8080');

var request = new EchoRequest();
request.setMessage('Hello World!');

echoService.echo(request, {}, function(err, response) {
  // ...
  console.log(response);
}); */