'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a simple description.
 *
 * @api public
 */

exports.default = function (props) {
  //itms-apps
  return _react2.default.createElement(
    'a',
    { href: 'https://play.google.com/store/apps/details?id=' + props.id },
    _react2.default.createElement('img', { src: 'https://tether.github.io/react-download-android/badge.png' })
  );
}; /**
    * Dependencies.
    */