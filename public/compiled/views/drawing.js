"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function Board() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement("canvas", { id: "canvas", width: "1400", height: "480" })
	);
};

var Drawing = function (_React$Component) {
	_inherits(Drawing, _React$Component);

	function Drawing(props) {
		_classCallCheck(this, Drawing);

		var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, props));

		_this.state = {
			drawCanvas: false
		};
		return _this;
	}

	_createClass(Drawing, [{
		key: "componentWillMount",
		value: function componentWillMount() {

			// create canvas
			var image = null;

			socket.on('draw', function () {

				this.setState({
					drawCanvas: true
				});

				var canvas = new fabric.Canvas('canvas', {
					isDrawingMode: true
				});

				// set brush size
				canvas.freeDrawingBrush.width = 10;

				//redirect to draw view
				canvas.on('path:created', function (options) {
					image = JSON.stringify(canvas);
					console.log('Saving drawing to image variable...');
					console.log(JSON.stringify(canvas));
				});
			}.bind(this));

			socket.on('end', function () {
				//send image to server
				socket.emit('image', image);
				window.location.href = '#/vote';
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					window.Animal
				),
				this.state.drawCanvas ? _react2.default.createElement(Board, null) : null
			);
		}
	}]);

	return Drawing;
}(_react2.default.Component);

exports.default = Drawing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbIkJvYXJkIiwiRHJhd2luZyIsInByb3BzIiwic3RhdGUiLCJkcmF3Q2FudmFzIiwiaW1hZ2UiLCJzb2NrZXQiLCJvbiIsInNldFN0YXRlIiwiY2FudmFzIiwiZmFicmljIiwiQ2FudmFzIiwiaXNEcmF3aW5nTW9kZSIsImZyZWVEcmF3aW5nQnJ1c2giLCJ3aWR0aCIsIm9wdGlvbnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJlbWl0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiQW5pbWFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLE1BQTFCLEVBQWlDLFFBQU8sS0FBeEM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFNcUJDLE87OztBQUNwQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsZUFBWTtBQURBLEdBQWI7QUFGa0I7QUFLbEI7Ozs7dUNBRW9COztBQUVwQjtBQUNBLE9BQUlDLFFBQVEsSUFBWjs7QUFFQUMsVUFBT0MsRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTs7QUFFN0IsU0FBS0MsUUFBTCxDQUFjO0FBQ2JKLGlCQUFZO0FBREMsS0FBZDs7QUFJQSxRQUFJSyxTQUFTLElBQUlDLE9BQU9DLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEI7QUFDdkNDLG9CQUFlO0FBRHdCLEtBQTVCLENBQWI7O0FBSUE7QUFDQUgsV0FBT0ksZ0JBQVAsQ0FBd0JDLEtBQXhCLEdBQWdDLEVBQWhDOztBQUVDO0FBQ0FMLFdBQU9GLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNRLE9BQVQsRUFBa0I7QUFDMUNWLGFBQVFXLEtBQUtDLFNBQUwsQ0FBZVIsTUFBZixDQUFSO0FBQ0FTLGFBQVFDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBRCxhQUFRQyxHQUFSLENBQVlILEtBQUtDLFNBQUwsQ0FBZVIsTUFBZixDQUFaO0FBQ0QsS0FKRDtBQUtELElBbkJpQixDQW1CaEJXLElBbkJnQixDQW1CWCxJQW5CVyxDQUFsQjs7QUFxQkFkLFVBQU9DLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLFlBQVk7QUFDM0I7QUFDQUQsV0FBT2UsSUFBUCxDQUFZLE9BQVosRUFBcUJoQixLQUFyQjtBQUNBaUIsV0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRCxJQUpEO0FBS0E7OzsyQkFJUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUtGLFlBQU9HO0FBQVosS0FEQTtBQUVDLFNBQUt0QixLQUFMLENBQVdDLFVBQVgsR0FBd0IsOEJBQUMsS0FBRCxPQUF4QixHQUFvQztBQUZyQyxJQUREO0FBT0E7Ozs7RUFuRG1DLGdCQUFNc0IsUzs7a0JBQXRCekIsTyIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xudmFyIEJvYXJkID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjE0MDBcIiBoZWlnaHQ9XCI0ODBcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblxuXHRcdHNvY2tldC5vbignZHJhdycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRyYXdDYW52YXM6IHRydWVcblx0XHRcdH0pXG5cblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJywge1xuXHRcdFx0ICBpc0RyYXdpbmdNb2RlOiB0cnVlXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gc2V0IGJydXNoIHNpemVcblx0XHRcdGNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLndpZHRoID0gMTA7XG5cblx0XHQgIC8vcmVkaXJlY3QgdG8gZHJhdyB2aWV3XG5cdFx0ICBjYW52YXMub24oJ3BhdGg6Y3JlYXRlZCcsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHQgICAgaW1hZ2UgPSBKU09OLnN0cmluZ2lmeShjYW52YXMpO1xuXHRcdCAgICBjb25zb2xlLmxvZygnU2F2aW5nIGRyYXdpbmcgdG8gaW1hZ2UgdmFyaWFibGUuLi4nKTtcblx0XHQgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2FudmFzKSk7XG5cdFx0ICB9KTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0ICAvL3NlbmQgaW1hZ2UgdG8gc2VydmVyXG5cdFx0ICBzb2NrZXQuZW1pdCgnaW1hZ2UnLCBpbWFnZSk7IFxuXHRcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy92b3RlJyBcblx0XHR9KTtcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8aDE+e3dpbmRvdy5BbmltYWx9PC9oMT5cblx0XHRcdHt0aGlzLnN0YXRlLmRyYXdDYW52YXMgPyA8Qm9hcmQgLz4gOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG5cblxuXG5cbiJdfQ==