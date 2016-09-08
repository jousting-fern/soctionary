'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _name = require('./name');

var _name2 = _interopRequireDefault(_name);

var _ready = require('./views/ready');

var _ready2 = _interopRequireDefault(_ready);

var _drawing = require('./views/drawing');

var _drawing2 = _interopRequireDefault(_drawing);

var _result = require('./views/result');

var _result2 = _interopRequireDefault(_result);

var _vote = require('./views/vote');

var _vote2 = _interopRequireDefault(_vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _name2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/ready', component: _ready2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/drawing', component: _drawing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/vote', component: _vote2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/result', component: _result2.default })
), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxzQkFDRTtBQUFBO0FBQUEsSUFBUSxpQ0FBUjtBQUNFLHNEQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEIsR0FERjtBQUVFLHNEQUFPLE1BQUssUUFBWixFQUFxQiwwQkFBckIsR0FGRjtBQUdFLHNEQUFPLE1BQUssVUFBWixFQUF1Qiw0QkFBdkIsR0FIRjtBQUlFLHNEQUFPLE1BQUssT0FBWixFQUFvQix5QkFBcEIsR0FKRjtBQUtFLHNEQUFPLE1BQUssU0FBWixFQUFzQiwyQkFBdEI7QUFMRixDQURGLEVBUUcsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBUkgiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBOYW1lIGZyb20gJy4vbmFtZSdcbmltcG9ydCBSZWFkeSBmcm9tICcuL3ZpZXdzL3JlYWR5J1xuaW1wb3J0IERyYXdpbmcgZnJvbSAnLi92aWV3cy9kcmF3aW5nJ1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3ZpZXdzL3Jlc3VsdCdcbmltcG9ydCBWb3RlIGZyb20gJy4vdmlld3Mvdm90ZSdcblxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e05hbWV9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi9yZWFkeVwiIGNvbXBvbmVudD17UmVhZHl9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi9kcmF3aW5nXCIgY29tcG9uZW50PXtEcmF3aW5nfS8+XG4gICAgPFJvdXRlIHBhdGg9XCIvdm90ZVwiIGNvbXBvbmVudD17Vm90ZX0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc3VsdFwiIGNvbXBvbmVudD17UmVzdWx0fS8+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==