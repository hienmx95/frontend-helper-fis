var _jsxFileName = "/Users/james/FWork/frontend-helper/src/DateTimeFormat/index.js";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import moment from 'moment-timezone';
import { connect } from 'react-redux';

var DateTimeFormat = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DateTimeFormat, _React$Component);

  var _super = _createSuper(DateTimeFormat);

  var _proto = DateTimeFormat.prototype;

  _proto.getDatetime = function getDatetime(props) {
    var date = props.date,
        tz = props.tz,
        authUser = props.authUser;

    if (!authUser.setting) {
      return null;
    }

    date = date || props.children;
    tz = tz || authUser.setting.timeZone;
    var datetime = moment(date);

    if (tz) {
      datetime = datetime.tz(tz);
    }

    return datetime;
  };

  _proto.componentDidMount = function componentDidMount() {
    this.getContent();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    this.getContent();
  };

  _proto.getTimeAgo = function getTimeAgo(datetime, format) {
    var diffHours = moment().diff(datetime, 'h');

    if (diffHours > 23) {
      return datetime.format(format);
    }

    if (diffHours > 0) {
      return diffHours + " gi\u1EDD tr\u01B0\u1EDBc";
    }

    var diffMinutes = moment().diff(datetime, 'm');

    if (diffMinutes > 0) {
      return diffMinutes + " ph\xFAt tr\u01B0\u1EDBc";
    }

    return "V\u1EEBa xong";
  };

  function DateTimeFormat(_props) {
    var _this;

    _this = _React$Component.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_this), "getContent", function () {
      var props = _this.props;
      var format = props.format,
          authUser = props.authUser,
          ago = props.ago,
          time = props.time;

      if (!authUser.setting) {
        return null;
      }

      var datetime = _this.getDatetime(props);

      var content;
      var formatSetting = authUser.setting.dateFormat;

      if (time) {
        formatSetting = authUser.setting.dateFormat + " " + authUser.setting.timeFormat;
      }

      format = format || formatSetting;

      if (ago) {
        content = _this.getTimeAgo(datetime, format);
      } else {
        content = datetime.format(format);
      }

      _this.setState({
        content: content
      });
    });

    _this.state = {
      content: ''
    };
    return _this;
  }

  _proto.render = function render() {
    var content = this.state.content;
    return /*#__PURE__*/React.createElement("time", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }, content);
  };

  return DateTimeFormat;
}(React.Component);

function mapStateToProps(state) {
  var authUser = state.authUser;
  return {
    authUser: authUser
  };
}

export default connect(mapStateToProps, null)(DateTimeFormat);