"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Introduction2 = _interopRequireDefault(require("./Introduction"));

var _image_introduction = _interopRequireDefault(require("../images/image_introduction.svg"));

var _Introduction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  "Introduction": (_Introduction = {
    code: 'DB000',
    name: 'Introduction',
    description: 'There are a lot of libraries out there that allow for drag and drop interactions within React',
    image: _image_introduction["default"],
    component: _Introduction2["default"],
    minHeight: ''
  }, _Introduction["minHeight"] = '', _Introduction.minWidth = '', _Introduction.maxWidth = '', _Introduction)
};
exports["default"] = _default;
module.exports = exports.default;