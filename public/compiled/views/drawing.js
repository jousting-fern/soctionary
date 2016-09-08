'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawing = function (_React$Component) {
	_inherits(Drawing, _React$Component);

	function Drawing(props) {
		_classCallCheck(this, Drawing);

		return _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, props));
	}

	_createClass(Drawing, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			// create canvas
			var image = null;

			document.getElementById('canvas').socket.on('draw', function () {

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
			});

			socket.on('end', function () {
				//send image to server
				socket.emit('image', image);
			});

			// set brush size

			// MVP Rough Draft - render all drawings to the canvas

		}

		// renderDrawings([testImage, testImage2, testImage3, testImage, testImage2, testImage3

	}, {
		key: 'sendDrawing',
		value: function sendDrawing(image) {}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					window.Animal
				)
			);
		}
	}]);

	return Drawing;
}(React.Component);

var canvas = function canvas() {
	return React.createElement(
		'div',
		null,
		React.createElement('canvas', { id: 'canvas', width: '1400', height: '480' })
	);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNLE87OztBQUNMLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWixLQURZO0FBRWxCOzs7O3VDQUVvQjs7QUFFcEI7QUFDQSxPQUFJLFFBQVEsSUFBWjs7QUFFQSxZQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFFQSxNQUZBLENBRU8sRUFGUCxDQUVVLE1BRlYsRUFFa0IsWUFBWTs7QUFFN0IsUUFBSSxTQUFTLElBQUksT0FBTyxNQUFYLENBQWtCLFFBQWxCLEVBQTRCO0FBQ3ZDLG9CQUFlO0FBRHdCLEtBQTVCLENBQWI7O0FBSUE7QUFDQSxXQUFPLGdCQUFQLENBQXdCLEtBQXhCLEdBQWdDLEVBQWhDOztBQUVDO0FBQ0EsV0FBTyxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFTLE9BQVQsRUFBa0I7QUFDMUMsYUFBUSxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBQVI7QUFDQSxhQUFRLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBLGFBQVEsR0FBUixDQUFZLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBWjtBQUNELEtBSkQ7QUFLRCxJQWpCRDs7QUFtQkEsVUFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCO0FBQ0EsV0FBTyxJQUFQLENBQVksT0FBWixFQUFxQixLQUFyQjtBQUNELElBSEQ7O0FBS0E7O0FBRUE7O0FBSUE7O0FBRUE7Ozs7OEJBQ1csSyxFQUFPLENBRWxCOzs7MkJBR1E7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLLFlBQU87QUFBWjtBQURBLElBREQ7QUFPQTs7OztFQXhEb0IsTUFBTSxTOztBQTJENUIsSUFBSSxTQUFTLFNBQVQsTUFBUztBQUFBLFFBQ1o7QUFBQTtBQUFBO0FBQ0Msa0NBQVEsSUFBRyxRQUFYLEVBQW9CLE9BQU0sTUFBMUIsRUFBaUMsUUFBTyxLQUF4QztBQURELEVBRFk7QUFBQSxDQUFiIiwiZmlsZSI6ImRyYXdpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gY3JlYXRlIGNhbnZhc1xuXHRcdHZhciBpbWFnZSA9IG51bGw7XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuXG5cdFx0XG5cdFx0c29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycsIHtcblx0XHRcdCAgaXNEcmF3aW5nTW9kZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHNldCBicnVzaCBzaXplXG5cdFx0XHRjYW52YXMuZnJlZURyYXdpbmdCcnVzaC53aWR0aCA9IDEwO1xuXG5cdFx0ICAvL3JlZGlyZWN0IHRvIGRyYXcgdmlld1xuXHRcdCAgY2FudmFzLm9uKCdwYXRoOmNyZWF0ZWQnLCBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0ICAgIGltYWdlID0gSlNPTi5zdHJpbmdpZnkoY2FudmFzKTtcblx0XHQgICAgY29uc29sZS5sb2coJ1NhdmluZyBkcmF3aW5nIHRvIGltYWdlIHZhcmlhYmxlLi4uJyk7XG5cdFx0ICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNhbnZhcykpO1xuXHRcdCAgfSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQgIC8vc2VuZCBpbWFnZSB0byBzZXJ2ZXJcblx0XHQgIHNvY2tldC5lbWl0KCdpbWFnZScsIGltYWdlKTsgIFxuXHRcdH0pO1xuXG5cdFx0Ly8gc2V0IGJydXNoIHNpemVcblxuXHRcdC8vIE1WUCBSb3VnaCBEcmFmdCAtIHJlbmRlciBhbGwgZHJhd2luZ3MgdG8gdGhlIGNhbnZhc1xuXG5cblxuXHR9XG5cblx0XHQvLyByZW5kZXJEcmF3aW5ncyhbdGVzdEltYWdlLCB0ZXN0SW1hZ2UyLCB0ZXN0SW1hZ2UzLCB0ZXN0SW1hZ2UsIHRlc3RJbWFnZTIsIHRlc3RJbWFnZTNcblx0c2VuZERyYXdpbmcoaW1hZ2UpIHtcblxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8aDE+e3dpbmRvdy5BbmltYWx9PC9oMT5cblxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG52YXIgY2FudmFzID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjE0MDBcIiBoZWlnaHQ9XCI0ODBcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5cblxuIl19