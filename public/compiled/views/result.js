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

var Player = function Player(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'resultInstance', id: props.id },
		props.name ? 'User ' + props.name + ' had ' + props.votes + ' votes. ' : null,
		props.goAgain ? _react2.default.createElement(
			'button',
			{ onClick: props.goAgain },
			'Play again?'
		) : _react2.default.createElement('img', { src: props.image })
	);
};

var Result = function (_React$Component) {
	_inherits(Result, _React$Component);

	function Result(props) {
		_classCallCheck(this, Result);

		var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

		_this.state = {
			renderInfo: []
		};
		return _this;
	}

	_createClass(Result, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			var info = [];
			socket.on('results', function (data) {
				//time for countdown
				var time = data.time;

				var images = [];
				data.images.forEach(function (blob) {
					var canvas = new fabric.Canvas('test');
					// images.push(blob.vectorDrawing);
					canvas.loadFromJSON(blob.vectorDrawing, function () {
						// canvas.renderAll.bind(canvas)
						// var blob = JSON.parse(json);
						console.log(blob);
						var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
							height: 375
						});
						canvas.clear();
						info.push({
							id: 'd' + info.length,
							name: blob.playerName,
							votes: blob.voteCount || 0,
							image: image
							//wins:blob.roundWins 
						});
					});
				});
				info.push({
					id: 'again',
					goAgain: this.goAgain
				});
				this.setState({
					renderInfo: info
				});
				//this.renderDrawings(images)
				socket.removeListener('results');
			}.bind(this));

			// listen to switch to readyView
			socket.on('readyView', function () {
				window.location.href = '#/ready';
			});
		}
	}, {
		key: 'goAgain',
		value: function goAgain() {
			socket.emit('again');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'vote', className: 'row' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Player, { id: data.id, name: data.name, votes: data.votes, image: data.image, goAgain: data.goAgain });
				})
			);
		}
	}]);

	return Result;
}(_react2.default.Component);

exports.default = Result;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsSUFBSSxNQUFNLEVBQTFDO0FBQ0MsUUFBTSxJQUFOLGFBQXFCLE1BQU0sSUFBM0IsYUFBdUMsTUFBTSxLQUE3QyxnQkFBK0QsSUFEaEU7QUFFQyxRQUFNLE9BQU4sR0FBaUI7QUFBQTtBQUFBLEtBQVEsU0FBUyxNQUFNLE9BQXZCO0FBQUE7QUFBQSxHQUFqQixHQUF3RSx1Q0FBSyxLQUFLLE1BQU0sS0FBaEI7QUFGekUsRUFEWTtBQUFBLENBQWI7O0lBU3FCLE07OztBQUNwQixpQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixlQUFXO0FBREMsR0FBYjtBQUZrQjtBQUtsQjs7Ozt1Q0FFb0I7O0FBR3BCLE9BQUksT0FBTyxFQUFYO0FBQ0EsVUFBTyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFVLElBQVYsRUFBZ0I7QUFDcEM7QUFDQSxRQUFJLE9BQU8sS0FBSyxJQUFoQjs7QUFHQSxRQUFJLFNBQVMsRUFBYjtBQUNBLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbkMsU0FBSSxTQUFTLElBQUksT0FBTyxNQUFYLENBQWtCLE1BQWxCLENBQWI7QUFDQTtBQUNBLFlBQU8sWUFBUCxDQUFxQixLQUFLLGFBQTFCLEVBQXlDLFlBQVc7QUFDakQ7QUFDQTtBQUNBLGNBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxVQUFJLFFBQVEsT0FBTyxTQUFQLENBQWlCO0FBQzdCLGVBQVEsV0FEcUI7QUFFN0IsbUJBQVksSUFGaUI7QUFHN0IsY0FBTyxHQUhzQjtBQUk1QixlQUFRO0FBSm9CLE9BQWpCLENBQVo7QUFNQSxhQUFPLEtBQVA7QUFDRixXQUFLLElBQUwsQ0FBVTtBQUNULFdBQUksTUFBTSxLQUFLLE1BRE47QUFFVCxhQUFLLEtBQUssVUFGRDtBQUdULGNBQU0sS0FBSyxTQUFMLElBQWtCLENBSGY7QUFJVCxjQUFPO0FBQ1A7QUFMUyxPQUFWO0FBT0EsTUFsQkQ7QUFtQkEsS0F0QkQ7QUF1QkEsU0FBSyxJQUFMLENBQVU7QUFDVCxTQUFJLE9BREs7QUFFVCxjQUFRLEtBQUs7QUFGSixLQUFWO0FBSUEsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7QUFHQTtBQUNBLFdBQU8sY0FBUCxDQUFzQixTQUF0QjtBQUNBLElBdENvQixDQXNDbkIsSUF0Q21CLENBc0NkLElBdENjLENBQXJCOztBQXdDQztBQUNBLFVBQU8sRUFBUCxDQUFVLFdBQVYsRUFBdUIsWUFBWTtBQUNqQyxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsU0FBdkI7QUFDRCxJQUZEO0FBSUE7Ozs0QkFFUztBQUNULFVBQU8sSUFBUCxDQUFZLE9BQVo7QUFDQTs7OzJCQUtPO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVIsRUFBZSxXQUFVLEtBQXpCO0FBQ0UsU0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxPQUFPLEtBQUssS0FBcEQsRUFBMkQsT0FBTyxLQUFLLEtBQXZFLEVBQThFLFNBQVMsS0FBSyxPQUE1RixHQUQwQjtBQUFBLEtBQTFCO0FBREYsSUFERDtBQVVBOzs7O0VBN0VrQyxnQkFBTSxTOztrQkFBckIsTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnZhciBQbGF5ZXIgPSAocHJvcHMpID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJyZXN1bHRJbnN0YW5jZVwiIGlkPXtwcm9wcy5pZH0gPlxuXHR7cHJvcHMubmFtZSA/IGBVc2VyICR7cHJvcHMubmFtZX0gaGFkICR7cHJvcHMudm90ZXN9IHZvdGVzLiBgIDogbnVsbH1cblx0e3Byb3BzLmdvQWdhaW4gPyAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nb0FnYWlufT5QbGF5IGFnYWluPzwvYnV0dG9uPiA6IDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPiB9XG4gXG5cdDwvZGl2PlxuXHQpXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcdFx0XG5cblxuXHRcdHZhciBpbmZvID0gW107XG5cdFx0c29ja2V0Lm9uKCdyZXN1bHRzJywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdC8vdGltZSBmb3IgY291bnRkb3duXG5cdFx0XHR2YXIgdGltZSA9IGRhdGEudGltZTtcblxuXG5cdFx0XHR2YXIgaW1hZ2VzID0gW107XG5cdFx0XHRkYXRhLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHRcdC8vIGltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHRcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cdFx0XHQgIFx0XHQvLyBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdFx0ICBcdFx0Ly8gdmFyIGJsb2IgPSBKU09OLnBhcnNlKGpzb24pO1xuXHRcdFx0ICBcdFx0Y29uc29sZS5sb2coYmxvYik7XG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0ICBcdFx0Y2FudmFzLmNsZWFyKCk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLFxuXHRcdFx0XHRcdFx0dm90ZXM6YmxvYi52b3RlQ291bnQgfHwgMCxcblx0XHRcdFx0XHRcdGltYWdlOiBpbWFnZVxuXHRcdFx0XHRcdFx0Ly93aW5zOmJsb2Iucm91bmRXaW5zIFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0aWQ6ICdhZ2FpbicsXG5cdFx0XHRcdGdvQWdhaW46dGhpcy5nb0FnYWluXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cdFx0XHQvL3RoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKVxuXHRcdFx0c29ja2V0LnJlbW92ZUxpc3RlbmVyKCdyZXN1bHRzJyk7XG5cdFx0fS5iaW5kKHRoaXMpKVxuXG4gIFx0Ly8gbGlzdGVuIHRvIHN3aXRjaCB0byByZWFkeVZpZXdcbiAgXHRzb2NrZXQub24oJ3JlYWR5VmlldycsIGZ1bmN0aW9uICgpIHsgXG4gIFx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3JlYWR5JyBcbiAgXHR9KTtcblxuICB9XG5cbiAgZ29BZ2FpbigpIHtcbiAgXHRzb2NrZXQuZW1pdCgnYWdhaW4nKTtcbiAgfVxuXG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxQbGF5ZXIgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rlcz17ZGF0YS52b3Rlc30gaW1hZ2U9e2RhdGEuaW1hZ2V9IGdvQWdhaW49e2RhdGEuZ29BZ2Fpbn0vPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHQpXG5cdH1cbn0iXX0=