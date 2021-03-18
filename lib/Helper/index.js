"use strict";

exports.__esModule = true;
exports["default"] = Helper;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _userAction = require("../redux/actions/userAction");

var _authorizationAction = require("../redux/actions/authorizationAction");

var _settingsAction = require("../redux/actions/settingsAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PROJECT_CODE = process.env.PROJECT_CODE;

function Helper(_ref) {
  var store = _ref.store;
  store.dispatch((0, _userAction.setCurrentUser)());

  if (PROJECT_CODE) {
    store.dispatch((0, _authorizationAction.getPermissionForUser)());
    store.dispatch((0, _settingsAction.getSettings)());
  }

  return null;
}

Helper.propTypes = {
  store: _propTypes["default"].object
};
module.exports = exports.default;