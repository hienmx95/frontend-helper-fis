"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _Apps = _interopRequireDefault(require("./Apps"));

var _Attention = _interopRequireDefault(require("./Attention"));

var _Book = _interopRequireDefault(require("./Book"));

var _BookmarkLight = _interopRequireDefault(require("./BookmarkLight"));

var _BookmarkSolid = _interopRequireDefault(require("./BookmarkSolid"));

var _Border = _interopRequireDefault(require("./Border"));

var _BorderLg = _interopRequireDefault(require("./BorderLg"));

var _Car = _interopRequireDefault(require("./Car"));

var _Card = _interopRequireDefault(require("./Card"));

var _Close = _interopRequireDefault(require("./Close"));

var _Delete = _interopRequireDefault(require("./Delete"));

var _Down = _interopRequireDefault(require("./Down"));

var _Edit = _interopRequireDefault(require("./Edit"));

var _Error = _interopRequireDefault(require("./Error"));

var _Export = _interopRequireDefault(require("./Export"));

var _File = _interopRequireDefault(require("./File"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _Flower = _interopRequireDefault(require("./Flower"));

var _Heart = _interopRequireDefault(require("./Heart"));

var _Home = _interopRequireDefault(require("./Home"));

var _Icon_ = _interopRequireDefault(require("./Icon_8"));

var _Left = _interopRequireDefault(require("./Left"));

var _Lock = _interopRequireDefault(require("./Lock"));

var _Manager = _interopRequireDefault(require("./Manager1"));

var _Manager2 = _interopRequireDefault(require("./Manager2"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Money = _interopRequireDefault(require("./Money"));

var _Move = _interopRequireDefault(require("./Move"));

var _Pennant = _interopRequireDefault(require("./Pennant"));

var _Print = _interopRequireDefault(require("./Print"));

var _Processing = _interopRequireDefault(require("./Processing"));

var _Right = _interopRequireDefault(require("./Right"));

var _Search = _interopRequireDefault(require("./Search"));

var _Setting = _interopRequireDefault(require("./Setting"));

var _Share = _interopRequireDefault(require("./Share"));

var _Star = _interopRequireDefault(require("./Star"));

var _Success = _interopRequireDefault(require("./Success"));

var _Tree = _interopRequireDefault(require("./Tree"));

var _Wait = _interopRequireDefault(require("./Wait"));

var _Email = _interopRequireDefault(require("./Email"));

var _Phone = _interopRequireDefault(require("./Phone"));

var _JobPosition = _interopRequireDefault(require("./JobPosition"));

var _CheckBox = _interopRequireDefault(require("./CheckBox"));

var _DateIcon = _interopRequireDefault(require("./DateIcon"));

var _DateTime = _interopRequireDefault(require("./DateTime"));

var _NumberIcon = _interopRequireDefault(require("./NumberIcon"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _Table = _interopRequireDefault(require("./Table"));

var _Text = _interopRequireDefault(require("./Text"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

var _Time = _interopRequireDefault(require("./Time"));

var _Upload = _interopRequireDefault(require("./Upload"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _Question = _interopRequireDefault(require("./Question"));

var _MenuPoint = _interopRequireDefault(require("./MenuPoint"));

var _Copy = _interopRequireDefault(require("./Copy"));

var _Reset = _interopRequireDefault(require("./Reset"));

var _Devolve = _interopRequireDefault(require("./Devolve"));

var _Code = _interopRequireDefault(require("./Code"));

var _StartRate = _interopRequireDefault(require("./StartRate"));

var _StarRateChecked = _interopRequireDefault(require("./StarRateChecked"));

var _this = void 0,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/icons/index.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'apps' : _ref$type,
      size = _ref.size,
      rest = _objectWithoutPropertiesLoose(_ref, ["type", "size"]);

  var icons = {
    'checkbox': _CheckBox["default"],
    'date': _DateIcon["default"],
    'date_time': _DateTime["default"],
    'number': _NumberIcon["default"],
    'radio': _Radio["default"],
    'table': _Table["default"],
    'text': _Text["default"],
    'text_area': _TextArea["default"],
    'time': _Time["default"],
    'upload': _Upload["default"],
    'tag': _Tag["default"],
    'question': _Question["default"],
    'menu_point': _MenuPoint["default"],
    'copy': _Copy["default"],
    'reset': _Reset["default"],
    'devolve': _Devolve["default"],
    'code': _Code["default"],
    'apps': _Apps["default"],
    'attention': _Attention["default"],
    'book': _Book["default"],
    'book_mark_light': _BookmarkLight["default"],
    'book_mark_solid': _BookmarkSolid["default"],
    'border': _Border["default"],
    'border_lg': _BorderLg["default"],
    'car': _Car["default"],
    'card': _Card["default"],
    'close': _Close["default"],
    'delete': _Delete["default"],
    'down': _Down["default"],
    'edit': _Edit["default"],
    'error': _Error["default"],
    'export': _Export["default"],
    'file': _File["default"],
    'filter': _Filter["default"],
    'flower': _Flower["default"],
    'heart': _Heart["default"],
    'home': _Home["default"],
    'icon_8': _Icon_["default"],
    'left': _Left["default"],
    'lock': _Lock["default"],
    'manager1': _Manager["default"],
    'manager2': _Manager2["default"],
    'menu': _Menu["default"],
    'money': _Money["default"],
    'move': _Move["default"],
    'pennant': _Pennant["default"],
    'print': _Print["default"],
    'processing': _Processing["default"],
    'right': _Right["default"],
    'search': _Search["default"],
    'setting': _Setting["default"],
    'share': _Share["default"],
    'star': _Star["default"],
    'success': _Success["default"],
    'tree': _Tree["default"],
    'wait': _Wait["default"],
    'phone': _Phone["default"],
    'email': _Email["default"],
    'job_position': _JobPosition["default"],
    'star-rate': _StartRate["default"],
    'star-rate-checked': _StarRateChecked["default"]
  };
  var IconComponent = icons[type] || _Apps["default"];
  var width = size ? size : rest.width;
  var height = size ? size : rest.height;
  return /*#__PURE__*/_react["default"].createElement(_antd.Icon, _extends({
    component: function component() {
      return /*#__PURE__*/_react["default"].createElement(IconComponent, {
        width: width,
        height: height,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 28
        }
      });
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }));
};

exports["default"] = _default;
module.exports = exports.default;