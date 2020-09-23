/**
 * @fileoverview gRPC-Web generated client stub for hello_proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hello_proto = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.hello_proto.HelloClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.hello_proto.HelloPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hello_proto.HelloRequest,
 *   !proto.hello_proto.HelloResponse>}
 */
const methodDescriptor_Hello_sayHello = new grpc.web.MethodDescriptor(
  '/hello_proto.Hello/sayHello',
  grpc.web.MethodType.UNARY,
  proto.hello_proto.HelloRequest,
  proto.hello_proto.HelloResponse,
  /**
   * @param {!proto.hello_proto.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello_proto.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.hello_proto.HelloRequest,
 *   !proto.hello_proto.HelloResponse>}
 */
const methodInfo_Hello_sayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.hello_proto.HelloResponse,
  /**
   * @param {!proto.hello_proto.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello_proto.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.hello_proto.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.hello_proto.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hello_proto.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hello_proto.HelloClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hello_proto.Hello/sayHello',
      request,
      metadata || {},
      methodDescriptor_Hello_sayHello,
      callback);
};


/**
 * @param {!proto.hello_proto.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hello_proto.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.hello_proto.HelloPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hello_proto.Hello/sayHello',
      request,
      metadata || {},
      methodDescriptor_Hello_sayHello);
};


module.exports = proto.hello_proto;

