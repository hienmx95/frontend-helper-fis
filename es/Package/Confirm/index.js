function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Modal } from 'antd';
var currentService = window.location.pathname.split('/')[1];
export default (function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      isHideOkButton = _ref.isHideOkButton,
      rest = _objectWithoutPropertiesLoose(_ref, ["type", "isHideOkButton"]);

  Modal.confirm(_extends({
    icon: false,
    autoFocusButton: null,
    okButtonProps: {
      className: "fwork-btn fwork-btn-" + type + " " + currentService + " " + (isHideOkButton ? 'display-none' : '')
    },
    cancelButtonProps: {
      className: 'fwork-btn fwork-btn-default'
    }
  }, rest));
});