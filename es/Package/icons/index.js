var _this = this,
    _jsxFileName = "/Users/james/FWork/frontend-helper/src/Package/icons/index.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/display-name */
import React from 'react';
import { Icon } from 'antd';
import Apps from './Apps';
import Attention from './Attention';
import Book from './Book';
import BookmarkLight from './BookmarkLight';
import BookmarkSolid from './BookmarkSolid';
import Border from './Border';
import BorderLg from './BorderLg';
import Car from './Car';
import Card from './Card';
import Close from './Close';
import Delete from './Delete';
import Down from './Down';
import Edit from './Edit';
import ErrorIcon from './Error';
import Export from './Export';
import File from './File';
import Filter from './Filter';
import Flower from './Flower';
import Heart from './Heart';
import Home from './Home';
import Icon_8 from './Icon_8';
import Left from './Left';
import Lock from './Lock';
import Manager1 from './Manager1';
import Manager2 from './Manager2';
import Menu from './Menu';
import Money from './Money';
import Move from './Move';
import Pennant from './Pennant';
import Print from './Print';
import Processing from './Processing';
import Right from './Right';
import Search from './Search';
import Setting from './Setting';
import Share from './Share';
import Star from './Star';
import Success from './Success';
import Tree from './Tree';
import Wait from './Wait';
import Email from './Email';
import Phone from './Phone';
import JobPosition from './JobPosition';
import CheckBox from './CheckBox';
import DateIcon from './DateIcon';
import DateTime from './DateTime';
import NumberIcon from './NumberIcon';
import Radio from './Radio';
import Table from './Table';
import Text from './Text';
import TextArea from './TextArea';
import Time from './Time';
import Upload from './Upload';
import Tag from './Tag';
import Question from './Question';
import MenuPoint from './MenuPoint';
import Copy from './Copy';
import Reset from './Reset';
import Devolve from './Devolve';
import Code from './Code';
import StartRate from './StartRate';
import StarRateChecked from './StarRateChecked';
export default (function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'apps' : _ref$type,
      size = _ref.size,
      rest = _objectWithoutPropertiesLoose(_ref, ["type", "size"]);

  var icons = {
    'checkbox': CheckBox,
    'date': DateIcon,
    'date_time': DateTime,
    'number': NumberIcon,
    'radio': Radio,
    'table': Table,
    'text': Text,
    'text_area': TextArea,
    'time': Time,
    'upload': Upload,
    'tag': Tag,
    'question': Question,
    'menu_point': MenuPoint,
    'copy': Copy,
    'reset': Reset,
    'devolve': Devolve,
    'code': Code,
    'apps': Apps,
    'attention': Attention,
    'book': Book,
    'book_mark_light': BookmarkLight,
    'book_mark_solid': BookmarkSolid,
    'border': Border,
    'border_lg': BorderLg,
    'car': Car,
    'card': Card,
    'close': Close,
    'delete': Delete,
    'down': Down,
    'edit': Edit,
    'error': ErrorIcon,
    'export': Export,
    'file': File,
    'filter': Filter,
    'flower': Flower,
    'heart': Heart,
    'home': Home,
    'icon_8': Icon_8,
    'left': Left,
    'lock': Lock,
    'manager1': Manager1,
    'manager2': Manager2,
    'menu': Menu,
    'money': Money,
    'move': Move,
    'pennant': Pennant,
    'print': Print,
    'processing': Processing,
    'right': Right,
    'search': Search,
    'setting': Setting,
    'share': Share,
    'star': Star,
    'success': Success,
    'tree': Tree,
    'wait': Wait,
    'phone': Phone,
    'email': Email,
    'job_position': JobPosition,
    'star-rate': StartRate,
    'star-rate-checked': StarRateChecked
  };
  var IconComponent = icons[type] || Apps;
  var width = size ? size : rest.width;
  var height = size ? size : rest.height;
  return /*#__PURE__*/React.createElement(Icon, _extends({
    component: function component() {
      return /*#__PURE__*/React.createElement(IconComponent, {
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
});