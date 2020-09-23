/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.hello_proto = (function() {

    /**
     * Namespace hello_proto.
     * @exports hello_proto
     * @namespace
     */
    var hello_proto = {};

    hello_proto.Hello = (function() {

        /**
         * Constructs a new Hello service.
         * @memberof hello_proto
         * @classdesc Represents a Hello
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Hello(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Hello.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Hello;

        /**
         * Creates new Hello service using the specified rpc implementation.
         * @function create
         * @memberof hello_proto.Hello
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Hello} RPC service. Useful where requests and/or responses are streamed.
         */
        Hello.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link hello_proto.Hello#sayHello}.
         * @memberof hello_proto.Hello
         * @typedef sayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {hello_proto.HelloResp} [response] HelloResp
         */

        /**
         * Calls sayHello.
         * @function sayHello
         * @memberof hello_proto.Hello
         * @instance
         * @param {hello_proto.IHelloReq} request HelloReq message or plain object
         * @param {hello_proto.Hello.sayHelloCallback} callback Node-style callback called with the error, if any, and HelloResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Hello.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.hello_proto.HelloReq, $root.hello_proto.HelloResp, request, callback);
        }, "name", { value: "sayHello" });

        /**
         * Calls sayHello.
         * @function sayHello
         * @memberof hello_proto.Hello
         * @instance
         * @param {hello_proto.IHelloReq} request HelloReq message or plain object
         * @returns {Promise<hello_proto.HelloResp>} Promise
         * @variation 2
         */

        return Hello;
    })();

    hello_proto.HelloReq = (function() {

        /**
         * Properties of a HelloReq.
         * @memberof hello_proto
         * @interface IHelloReq
         * @property {string} name HelloReq name
         * @property {number} age HelloReq age
         */

        /**
         * Constructs a new HelloReq.
         * @memberof hello_proto
         * @classdesc Represents a HelloReq.
         * @implements IHelloReq
         * @constructor
         * @param {hello_proto.IHelloReq=} [properties] Properties to set
         */
        function HelloReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloReq name.
         * @member {string} name
         * @memberof hello_proto.HelloReq
         * @instance
         */
        HelloReq.prototype.name = "";

        /**
         * HelloReq age.
         * @member {number} age
         * @memberof hello_proto.HelloReq
         * @instance
         */
        HelloReq.prototype.age = 0;

        /**
         * Creates a new HelloReq instance using the specified properties.
         * @function create
         * @memberof hello_proto.HelloReq
         * @static
         * @param {hello_proto.IHelloReq=} [properties] Properties to set
         * @returns {hello_proto.HelloReq} HelloReq instance
         */
        HelloReq.create = function create(properties) {
            return new HelloReq(properties);
        };

        /**
         * Encodes the specified HelloReq message. Does not implicitly {@link hello_proto.HelloReq.verify|verify} messages.
         * @function encode
         * @memberof hello_proto.HelloReq
         * @static
         * @param {hello_proto.IHelloReq} message HelloReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
            return writer;
        };

        /**
         * Encodes the specified HelloReq message, length delimited. Does not implicitly {@link hello_proto.HelloReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello_proto.HelloReq
         * @static
         * @param {hello_proto.IHelloReq} message HelloReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloReq message from the specified reader or buffer.
         * @function decode
         * @memberof hello_proto.HelloReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello_proto.HelloReq} HelloReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello_proto.HelloReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.age = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("age"))
                throw $util.ProtocolError("missing required 'age'", { instance: message });
            return message;
        };

        /**
         * Decodes a HelloReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello_proto.HelloReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello_proto.HelloReq} HelloReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloReq message.
         * @function verify
         * @memberof hello_proto.HelloReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.age))
                return "age: integer expected";
            return null;
        };

        /**
         * Creates a HelloReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello_proto.HelloReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello_proto.HelloReq} HelloReq
         */
        HelloReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hello_proto.HelloReq)
                return object;
            var message = new $root.hello_proto.HelloReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age | 0;
            return message;
        };

        /**
         * Creates a plain object from a HelloReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello_proto.HelloReq
         * @static
         * @param {hello_proto.HelloReq} message HelloReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.age = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            return object;
        };

        /**
         * Converts this HelloReq to JSON.
         * @function toJSON
         * @memberof hello_proto.HelloReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloReq;
    })();

    hello_proto.HelloResp = (function() {

        /**
         * Properties of a HelloResp.
         * @memberof hello_proto
         * @interface IHelloResp
         * @property {string|null} [message] HelloResp message
         */

        /**
         * Constructs a new HelloResp.
         * @memberof hello_proto
         * @classdesc Represents a HelloResp.
         * @implements IHelloResp
         * @constructor
         * @param {hello_proto.IHelloResp=} [properties] Properties to set
         */
        function HelloResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloResp message.
         * @member {string} message
         * @memberof hello_proto.HelloResp
         * @instance
         */
        HelloResp.prototype.message = "";

        /**
         * Creates a new HelloResp instance using the specified properties.
         * @function create
         * @memberof hello_proto.HelloResp
         * @static
         * @param {hello_proto.IHelloResp=} [properties] Properties to set
         * @returns {hello_proto.HelloResp} HelloResp instance
         */
        HelloResp.create = function create(properties) {
            return new HelloResp(properties);
        };

        /**
         * Encodes the specified HelloResp message. Does not implicitly {@link hello_proto.HelloResp.verify|verify} messages.
         * @function encode
         * @memberof hello_proto.HelloResp
         * @static
         * @param {hello_proto.IHelloResp} message HelloResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified HelloResp message, length delimited. Does not implicitly {@link hello_proto.HelloResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hello_proto.HelloResp
         * @static
         * @param {hello_proto.IHelloResp} message HelloResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloResp message from the specified reader or buffer.
         * @function decode
         * @memberof hello_proto.HelloResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hello_proto.HelloResp} HelloResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hello_proto.HelloResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hello_proto.HelloResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hello_proto.HelloResp} HelloResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloResp message.
         * @function verify
         * @memberof hello_proto.HelloResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a HelloResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hello_proto.HelloResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hello_proto.HelloResp} HelloResp
         */
        HelloResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hello_proto.HelloResp)
                return object;
            var message = new $root.hello_proto.HelloResp();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a HelloResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hello_proto.HelloResp
         * @static
         * @param {hello_proto.HelloResp} message HelloResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this HelloResp to JSON.
         * @function toJSON
         * @memberof hello_proto.HelloResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloResp;
    })();

    return hello_proto;
})();

module.exports = $root;
