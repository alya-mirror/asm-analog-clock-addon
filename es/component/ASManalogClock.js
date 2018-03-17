function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import AnalogClock, { Themes } from 'react-analog-clock';
var width = 200;

var ASManalogClock = function (_Component) {
  _inherits(ASManalogClock, _Component);

  function ASManalogClock() {
    _classCallCheck(this, ASManalogClock);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ASManalogClock.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogClock, { theme: Themes.lime, width: width })
    );
  };

  return ASManalogClock;
}(Component);

export default ASManalogClock;