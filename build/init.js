"use strict";

require("regenerator-runtime");
require("dotenv/config");
require("./db");
require("./models/Video");
require("./models/User");
require("./models/Comment");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 8080;
var handleListening = function handleListening() {
  return console.log("\u2705 server listening on port http://localhost:".concat(PORT));
};
_server["default"].listen(PORT, handleListening);