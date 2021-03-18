"use strict";

exports.__esModule = true;
exports.setToken = setToken;
exports.setTokenExpire = setTokenExpire;
exports.getToken = getToken;
exports.removeToken = removeToken;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JWT_TOKEN = process.env.JWT_TOKEN || 'fwork-token';

function setToken(token) {
  _jsCookie["default"].set(JWT_TOKEN, token);
}

function setTokenExpire(token, day) {
  _jsCookie["default"].set(JWT_TOKEN, token, {
    expires: day
  });
}

function getToken() {
  return _jsCookie["default"].get(JWT_TOKEN);
}

function removeToken() {
  _jsCookie["default"].remove(JWT_TOKEN);
}