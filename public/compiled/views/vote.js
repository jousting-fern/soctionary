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

//show prompt for thing
var Select = function Select(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'voteInstance', id: props.id, value: props.name, onClick: function onClick() {
				return props.voting(props.id);
			} },
		_react2.default.createElement('img', { src: props.image })
	);
};

//voted is the id tag for the current voted drawing

var Vote = function (_React$Component) {
	_inherits(Vote, _React$Component);

	function Vote(props) {
		_classCallCheck(this, Vote);

		var _this = _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).call(this, props));

		_this.state = {
			renderInfo: [],
			remainingTime: 10

		};
		return _this;
	}

	_createClass(Vote, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.getElementsByClassName('votingCountdown')[0].style.display = 'none';
			document.getElementsByClassName('waitTime')[0].style.display = 'inline';

			// componentWillUnmount() {
			// 	clearInterval(this.timer);
		}
	}, {
		key: 'tick',
		value: function tick() {
			this.setState({ remainingTime: this.state.remainingTime - 1 });
			console.log('tick: ' + this.state.remainingTime);
			if (this.state.remainingTime <= 1) {
				clearInterval(this.timer);
				this.setState({ remainingTime: '!' });
				setTimeout(this.hideCountDown.bind(this), 1000);
				;
			}
		}
	}, {
		key: 'hideCountDown',
		value: function hideCountDown() {
			document.getElementsByClassName('votingCountdown')[0].style.display = 'none';
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var info = [];
			socket.on('vote', function (data) {
				//time for countdown
				var time = data.time;
				this.setState({ remainingTime: time });
				var canvas = new fabric.Canvas('test');
				//var images = [];
				data.images.forEach(function (blob) {
					//images.push(blob.vectorDrawing);
					canvas.loadFromJSON(blob.vectorDrawing, function () {

						var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
							height: 375
						});
						info.push({
							id: 'd' + info.length,
							name: blob.playerName,
							image: image
						});
						canvas.clear();
					});
				});

				this.setState({
					renderInfo: info
				});

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

				console.log('vote countdown started...');
				this.timer = setInterval(this.tick.bind(this), 1000);
				document.getElementsByClassName('votingCountdown')[0].style.display = 'inline';
				document.getElementsByClassName('waitTime')[0].style.display = 'none';
			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				socket.emit('vote', this.getVotedName());
				socket.removeListener('countVotes');
				window.location.href = '#/result';
			}.bind(this));
		}
	}, {
		key: 'getVotedName',
		value: function getVotedName() {

			if (document.getElementsByClassName('voted')[0]) {
				return document.getElementsByClassName('voted')[0].getAttribute('value');
			} else {
				return null;
			}
		}
	}, {
		key: 'voting',
		value: function voting(id) {
			if (document.getElementsByClassName('voted')[0]) {
				var vote = document.getElementsByClassName('voted')[0].id;
				document.getElementsByClassName('voted')[0].classList.remove("voted");
				document.getElementById(vote).className += "voteInstance";
			}
			document.getElementById(id).classList.remove("voteInstance");
			document.getElementById(id).className += "voted";
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
				'div',
				{ id: 'vote', className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'waitTime' },
					'Loading...'
				),
				_react2.default.createElement(
					'div',
					{ className: 'votingCountdown valign' },
					_react2.default.createElement(
						'div',
						{ className: 'votePrompt' },
						'Pick your favorite!'
					),
					_react2.default.createElement(
						'div',
						{ className: 'voteCountdown' },
						' ',
						this.state.remainingTime,
						' '
					)
				),
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2), image: data.image });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3ZvdGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLFdBQVUsY0FBZixFQUE4QixJQUFJLE1BQU0sRUFBeEMsRUFBNEMsT0FBTyxNQUFNLElBQXpELEVBQStELFNBQVM7QUFBQSxXQUFNLE1BQU0sTUFBTixDQUFhLE1BQU0sRUFBbkIsQ0FBTjtBQUFBLElBQXhFO0FBQ0MseUNBQUssS0FBSyxNQUFNLEtBQWhCO0FBREQsRUFEWTtBQUFBLENBQWI7O0FBTUE7O0lBRXFCLEk7OztBQUNwQixlQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVksRUFEQTtBQUVaLGtCQUFlOztBQUZILEdBQWI7QUFGa0I7QUFPbEI7Ozs7c0NBRW1CO0FBQ25CLFlBQVMsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELEVBQXNELEtBQXRELENBQTRELE9BQTVELEdBQXNFLE1BQXRFO0FBQ0EsWUFBUyxzQkFBVCxDQUFnQyxVQUFoQyxFQUE0QyxDQUE1QyxFQUErQyxLQUEvQyxDQUFxRCxPQUFyRCxHQUErRCxRQUEvRDs7QUFFRDtBQUNBO0FBQ0M7Ozt5QkFFTztBQUNOLFFBQUssUUFBTCxDQUFjLEVBQUMsZUFBZSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEdBQTJCLENBQTNDLEVBQWQ7QUFDQSxXQUFRLEdBQVIsQ0FBWSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQWxDO0FBQ0MsT0FBSSxLQUFLLEtBQUwsQ0FBVyxhQUFYLElBQTRCLENBQWhDLEVBQW1DO0FBQ2xDLGtCQUFjLEtBQUssS0FBbkI7QUFDQSxTQUFLLFFBQUwsQ0FBYyxFQUFDLGVBQWUsR0FBaEIsRUFBZDtBQUNBLGVBQVcsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQVgsRUFBMEMsSUFBMUM7QUFDQztBQUNEO0FBQ0Y7OztrQ0FFYztBQUNmLFlBQVMsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELEVBQXNELEtBQXRELENBQTRELE9BQTVELEdBQXNFLE1BQXRFO0FBQ0E7Ozt1Q0FFb0I7QUFDcEIsT0FBSSxPQUFPLEVBQVg7QUFDQSxVQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFVBQVUsSUFBVixFQUFnQjtBQUNqQztBQUNBLFFBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0EsU0FBSyxRQUFMLENBQWMsRUFBQyxlQUFlLElBQWhCLEVBQWQ7QUFDQSxRQUFJLFNBQVMsSUFBSSxPQUFPLE1BQVgsQ0FBa0IsTUFBbEIsQ0FBYjtBQUNBO0FBQ0EsU0FBSyxNQUFMLENBQVksT0FBWixDQUFxQixVQUFTLElBQVQsRUFBZTtBQUNuQztBQUNFLFlBQU8sWUFBUCxDQUFxQixLQUFLLGFBQTFCLEVBQXlDLFlBQVc7O0FBRW5ELFVBQUksUUFBUSxPQUFPLFNBQVAsQ0FBaUI7QUFDN0IsZUFBUSxXQURxQjtBQUU3QixtQkFBWSxJQUZpQjtBQUc3QixjQUFPLEdBSHNCO0FBSTVCLGVBQVE7QUFKb0IsT0FBakIsQ0FBWjtBQU1GLFdBQUssSUFBTCxDQUFVO0FBQ1QsV0FBSSxNQUFNLEtBQUssTUFETjtBQUVULGFBQUssS0FBSyxVQUZEO0FBR1QsY0FBTztBQUhFLE9BQVY7QUFLRSxhQUFPLEtBQVA7QUFDQSxNQWREO0FBZUYsS0FqQkQ7O0FBbUJBLFNBQUssUUFBTCxDQUFjO0FBQ2IsaUJBQVk7QUFEQyxLQUFkOztBQUlDO0FBQ0E7QUFDQTs7QUFFQyxZQUFRLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLFNBQUssS0FBTCxHQUFhLFlBQVksS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBWixFQUFrQyxJQUFsQyxDQUFiO0FBQ0EsYUFBUyxzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUQsQ0FBbkQsRUFBc0QsS0FBdEQsQ0FBNEQsT0FBNUQsR0FBc0UsUUFBdEU7QUFDQSxhQUFTLHNCQUFULENBQWdDLFVBQWhDLEVBQTRDLENBQTVDLEVBQStDLEtBQS9DLENBQXFELE9BQXJELEdBQStELE1BQS9EO0FBRUYsSUF0Q2lCLENBc0NoQixJQXRDZ0IsQ0FzQ1gsSUF0Q1csQ0FBbEI7O0FBd0NBLFVBQU8sRUFBUCxDQUFVLFlBQVYsRUFBd0IsWUFBWTtBQUNuQztBQUNBLFdBQU8sSUFBUCxDQUFZLE1BQVosRUFBb0IsS0FBSyxZQUFMLEVBQXBCO0FBQ0EsV0FBTyxjQUFQLENBQXNCLFlBQXRCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFVBQXZCO0FBQ0EsSUFMdUIsQ0FLdEIsSUFMc0IsQ0FLakIsSUFMaUIsQ0FBeEI7QUFNQTs7O2lDQUVjOztBQUVkLE9BQUksU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFKLEVBQWlEO0FBQy9DLFdBQU8sU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxFQUE0QyxZQUE1QyxDQUF5RCxPQUF6RCxDQUFQO0FBQ0QsSUFGRCxNQUVPO0FBQ0osV0FBTyxJQUFQO0FBQ0Y7QUFDRDs7O3lCQUdNLEUsRUFBSTtBQUNWLE9BQUcsU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxDQUFILEVBQWdEO0FBQy9DLFFBQUksT0FBTyxTQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLEVBQTRDLEVBQXZEO0FBQ0EsYUFBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QyxDQUF6QyxFQUE0QyxTQUE1QyxDQUFzRCxNQUF0RCxDQUE2RCxPQUE3RDtBQUNBLGFBQVMsY0FBVCxDQUF3QixJQUF4QixFQUE4QixTQUE5QixJQUEyQyxjQUEzQztBQUNBO0FBQ0QsWUFBUyxjQUFULENBQXdCLEVBQXhCLEVBQTRCLFNBQTVCLENBQXNDLE1BQXRDLENBQTZDLGNBQTdDO0FBQ0EsWUFBUyxjQUFULENBQXdCLEVBQXhCLEVBQTRCLFNBQTVCLElBQXlDLE9BQXpDO0FBQ0E7OzsyQkFHUTtBQUFBOztBQUNSO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVIsRUFBZSxXQUFVLEtBQXpCO0FBQ0U7QUFBQTtBQUFBLE9BQUssV0FBVSxVQUFmO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLE9BQUssV0FBVSx3QkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUFBO0FBQWlDLFdBQUssS0FBTCxDQUFXLGFBQTVDO0FBQUE7QUFBQTtBQUZELEtBRkY7QUFNRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLFlBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLFFBQVEsT0FBSyxNQUFMLENBQVksSUFBWixRQUFoRCxFQUF3RSxPQUFPLEtBQUssS0FBcEYsR0FEMEI7QUFBQSxLQUExQjtBQU5GLElBREQ7QUFnQkE7Ozs7RUExSGdDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6InZvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vc2hvdyBwcm9tcHQgZm9yIHRoaW5nXG52YXIgU2VsZWN0ID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwidm90ZUluc3RhbmNlXCIgaWQ9e3Byb3BzLmlkfSB2YWx1ZT17cHJvcHMubmFtZX0gb25DbGljaz17KCkgPT4gcHJvcHMudm90aW5nKHByb3BzLmlkKX0+XG5cdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfS8+XG5cdDwvZGl2PlxuXHQpXG5cbi8vdm90ZWQgaXMgdGhlIGlkIHRhZyBmb3IgdGhlIGN1cnJlbnQgdm90ZWQgZHJhd2luZ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzogW10sXG5cdFx0XHRyZW1haW5pbmdUaW1lOiAxMFxuXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGluZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhaXRUaW1lJylbMF0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXG5cdC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHQvLyBcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdH1cblxuICB0aWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6IHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSAtIDF9KTtcbiAgXHRjb25zb2xlLmxvZygndGljazogJyArIHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSk7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSA8PSAxKSB7XG4gICAgXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogJyEnfSk7XG4gICAgXHRzZXRUaW1lb3V0KHRoaXMuaGlkZUNvdW50RG93bi5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgIDtcbiAgICB9XG4gIH1cblxuXHRoaWRlQ291bnREb3duKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGluZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogdGltZX0pO1xuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdC8vdmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHQvL2ltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHQgIFx0Y2FudmFzLmxvYWRGcm9tSlNPTiggYmxvYi52ZWN0b3JEcmF3aW5nLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCh7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdG11bHRpcGxpZXI6IDAuMjUsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNzUsXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogMzc1XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsIFxuXHRcdFx0XHRcdFx0aW1hZ2U6IGltYWdlXG5cdFx0XHRcdFx0fSlcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXHRcdFx0ICBcdH0pXG5cdFx0XHR9KVxuIFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblx0XHQgIC8vIHJlZGlyZWN0IHRvIHZvdGluZyB2aWV3XG5cdFx0ICAvLyBpbWFnZXMgaXMgYW4gYXJyYXkgb2YgSlNPTi5zdHJpbmdpZnkoY2FudmFzKSBvYmplY3RzIHRvIHZvdGUgb25cblx0XHQgIC8vdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuICBcbiAgICBcdGNvbnNvbGUubG9nKCd2b3RlIGNvdW50ZG93biBzdGFydGVkLi4uJyk7XG4gICAgXHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90aW5nQ291bnRkb3duJylbMF0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICBcdCAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2FpdFRpbWUnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgXG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNvY2tldC5vbignY291bnRWb3RlcycsIGZ1bmN0aW9uKCkgIHtcblx0XHRcdC8vRW1pdCBuYW1lIHZvdGVkIG9uIHRvIHNlcnZlci5cblx0XHRcdHNvY2tldC5lbWl0KCd2b3RlJywgdGhpcy5nZXRWb3RlZE5hbWUoKSlcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignY291bnRWb3RlcycpXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3Jlc3VsdCcgXG5cdFx0fS5iaW5kKHRoaXMpKVxuXHR9IFxuXG5cdGdldFZvdGVkTmFtZSgpIHtcblxuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdCAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHR9IGVsc2Uge1xuICAgICByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXG5cdHZvdGluZyhpZCkge1xuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0XHRcdHZhciB2b3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5pZFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwidm90ZWRcIilcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZvdGUpLmNsYXNzTmFtZSArPSBcInZvdGVJbnN0YW5jZVwiIFxuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnJlbW92ZShcInZvdGVJbnN0YW5jZVwiKVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc05hbWUgKz0gXCJ2b3RlZFwiXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHQvL05lZWQgdG8gZGVjaWRlIGlmIHdlIHVzZSBvbmUgYmlnIGNhbnZhcywgb3IganVzdCByZW5kZXIgaW1hZ2VzIG9mIGFsbCB0aGUgZHJhd2luZ3Ncblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9J3dhaXRUaW1lJz5Mb2FkaW5nLi4uPC9kaXY+XG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPSd2b3RpbmdDb3VudGRvd24gdmFsaWduJz5cblx0XHRcdCAgXHQ8ZGl2IGNsYXNzTmFtZT1cInZvdGVQcm9tcHRcIj5QaWNrIHlvdXIgZmF2b3JpdGUhPC9kaXY+XG5cdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJ2b3RlQ291bnRkb3duXCI+IHt0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWV9IDwvZGl2PlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxTZWxlY3QgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rpbmc9e3RoaXMudm90aW5nLmJpbmQodGhpcyl9IGltYWdlPXtkYXRhLmltYWdlfS8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19