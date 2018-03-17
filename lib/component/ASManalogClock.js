'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAnalogClock = require('react-analog-clock');

var _reactAnalogClock2 = _interopRequireDefault(_reactAnalogClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var width = 200;

var ASManalogClock = function (_Component) {
  _inherits(ASManalogClock, _Component);

  function ASManalogClock() {
    _classCallCheck(this, ASManalogClock);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ASManalogClock.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactAnalogClock2.default, { theme: _reactAnalogClock.Themes.lime, width: width })
    );
  };

  return ASManalogClock;
}(_react.Component);

exports.default = ASManalogClock;
module.exports = exports['default'];