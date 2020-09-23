const Koa = require('koa');
const request = require('request');
const app = new Koa();

const {HelloRequest, HelloResponse} = require('../dist/hello_pb.js');

let response = new HelloResponse();
response.setMessage('hello koa');
app.use(async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', '*');
  // ctx.set('content-type', 'application/grpc-web-text');
  // console.log(request(ctx.request));
  /* if (ctx.method === 'POST') {
    let {method, url, header: headers} = ctx.request;
    delete headers['host'];
    console.log(method, url, headers);
    // console.log(ctx.request);
    request({
      url: 'http://127.0.0.1:8888' + url,
      method,
      headers
    });
  } */
  // const time = 999999999;
  // await new Promise((resolve) => setTimeout(() => {resolve()}, time));
  // ctx.body = response;
})

app.listen(9999);