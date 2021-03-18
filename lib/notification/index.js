"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _openNotification = _interopRequireDefault(require("./openNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleNotification = function handleNotification(method, response, options) {
  if (response === void 0) {
    response = {};
  }

  if (options === void 0) {
    options = {};
  }

  if (typeof options['show'] !== 'boolean') {
    if (method === 'GET') return;
  } else {
    if (!options['show']) return;
  }

  if (!options.hasOwnProperty('type')) {
    options.type = 'success';
  }

  if (!response.success) {
    options.type = 'error';
  }

  options.message = response.hasOwnProperty('message') ? response.message : options.message;
  if (!options.message) return;
  (0, _openNotification["default"])(options);
};

var _default = handleNotification;
exports["default"] = _default;
module.exports = exports.default;