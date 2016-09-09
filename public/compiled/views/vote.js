'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vote = function (_React$Component) {
	_inherits(Vote, _React$Component);

	function Vote(props) {
		_classCallCheck(this, Vote);

		return _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).call(this, props));
	}

	_createClass(Vote, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			// removed this for the one below b/c we're already on vote :. listener should not be waiting for vote 
			// socket.on('vote', function (images) {
			//   // redirect to voting view
			//   // images is an array of JSON.stringify(canvas) objects to vote on
			//   this.renderDrawings(images);
			// }.bind(this));

			// listen for emit when we redirect to results view 
			socket.on('results', function () {
				window.location.href = '#/result';
			});
		}
	}, {
		key: 'renderDrawings',
		value: function renderDrawings(arr) {

			// rasterize each image from vector blob and append to page
			arr.forEach(function (pic) {

				canvas.loadFromJSON(pic, function (blob) {
					var image = new Image();
					image.src = blob.toDataUrl("image/png");
					document.getElementById('vote').appendChild(image);

					// <button value="Vote" onClick={this.chooseVote}></button>

					//place image on canvas/page appropriately
				});
				//canvas.renderAll.bind(canvas)
			});
		}
	}, {
		key: 'chooseVote',
		value: function chooseVote() {}
	}, {
		key: 'render',
		value: function render() {
			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement('div', { id: 'vote' });
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3ZvdGUuanN4Il0sIm5hbWVzIjpbIlZvdGUiLCJwcm9wcyIsInNvY2tldCIsIm9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXJyIiwiZm9yRWFjaCIsInBpYyIsImNhbnZhcyIsImxvYWRGcm9tSlNPTiIsImJsb2IiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwidG9EYXRhVXJsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUNwQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1pBLEtBRFk7QUFFbEI7Ozs7dUNBRW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDRUMsVUFBT0MsRUFBUCxDQUFVLFNBQVYsRUFBcUIsWUFBWTtBQUNqQ0MsV0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsVUFBdkI7QUFDRCxJQUZDO0FBR0Y7OztpQ0FFY0MsRyxFQUFJOztBQUVsQjtBQUNBQSxPQUFJQyxPQUFKLENBQVksVUFBU0MsR0FBVCxFQUFjOztBQUV2QkMsV0FBT0MsWUFBUCxDQUFxQkYsR0FBckIsRUFBMEIsVUFBU0csSUFBVCxFQUFlO0FBQ3hDLFNBQUlDLFFBQVEsSUFBSUMsS0FBSixFQUFaO0FBQ0FELFdBQU1FLEdBQU4sR0FBWUgsS0FBS0ksU0FBTCxDQUFlLFdBQWYsQ0FBWjtBQUNBQyxjQUFTQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxXQUFoQyxDQUE0Q04sS0FBNUM7O0FBRUE7O0FBRUE7QUFDQSxLQVJEO0FBU0Y7QUFDQSxJQVpEO0FBY0E7OzsrQkFFVyxDQUVYOzs7MkJBRVE7QUFDUjtBQUNBLFVBQ0MsdUNBQUssSUFBRyxNQUFSLEdBREQ7QUFLQTs7OztFQWxEZ0MsZ0JBQU1PLFM7O2tCQUFuQnBCLEkiLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyByZW1vdmVkIHRoaXMgZm9yIHRoZSBvbmUgYmVsb3cgYi9jIHdlJ3JlIGFscmVhZHkgb24gdm90ZSA6LiBsaXN0ZW5lciBzaG91bGQgbm90IGJlIHdhaXRpbmcgZm9yIHZvdGUgXG5cdFx0Ly8gc29ja2V0Lm9uKCd2b3RlJywgZnVuY3Rpb24gKGltYWdlcykge1xuXHRcdC8vICAgLy8gcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQvLyAgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdC8vICAgdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuXHRcdC8vIH0uYmluZCh0aGlzKSk7XG4gICAgXG5cdFx0Ly8gbGlzdGVuIGZvciBlbWl0IHdoZW4gd2UgcmVkaXJlY3QgdG8gcmVzdWx0cyB2aWV3IFxuICAgIHNvY2tldC5vbigncmVzdWx0cycsIGZ1bmN0aW9uICgpIHtcblx0XHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVzdWx0JyBcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlckRyYXdpbmdzKGFycil7XG5cblx0XHQvLyByYXN0ZXJpemUgZWFjaCBpbWFnZSBmcm9tIHZlY3RvciBibG9iIGFuZCBhcHBlbmQgdG8gcGFnZVxuXHRcdGFyci5mb3JFYWNoKGZ1bmN0aW9uKHBpYykge1xuXG5cdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIHBpYywgZnVuY3Rpb24oYmxvYikge1xuXHRcdCAgXHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdCAgXHRcdGltYWdlLnNyYyA9IGJsb2IudG9EYXRhVXJsKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdCAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3RlJykuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdCAgXHRcdFxuXHRcdCAgXHRcdC8vIDxidXR0b24gdmFsdWU9XCJWb3RlXCIgb25DbGljaz17dGhpcy5jaG9vc2VWb3RlfT48L2J1dHRvbj5cblxuXHRcdCAgXHRcdC8vcGxhY2UgaW1hZ2Ugb24gY2FudmFzL3BhZ2UgYXBwcm9wcmlhdGVseVxuXHRcdCAgXHR9KTtcblx0XHRcdC8vY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHR9KVxuXG5cdH1cblxuXHRjaG9vc2VWb3RlKCl7XG5cdCAgIFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vTmVlZCB0byBkZWNpZGUgaWYgd2UgdXNlIG9uZSBiaWcgY2FudmFzLCBvciBqdXN0IHJlbmRlciBpbWFnZXMgb2YgYWxsIHRoZSBkcmF3aW5nc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwidm90ZVwiPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuXG4iXX0=