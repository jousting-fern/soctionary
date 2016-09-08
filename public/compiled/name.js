'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Name = function (_React$Component) {
	_inherits(Name, _React$Component);

	function Name(props) {
		_classCallCheck(this, Name);

		return _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this, props));
	}

	_createClass(Name, [{
		key: 'sendName',
		value: function sendName(player) {
			socket.emit('name', player);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			socket.on('readyView', function () {
				window.location.href = '#/ready';
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ 'class': 'user-register' },
				React.createElement('input', { type: 'text', id: 'player', placeholder: 'stumpy the kitty' }),
				React.createElement('button', { value: 'Submit', onClick: sendName(document.getElementbyId('player').value) })
			);
		}
	}]);

	return Name;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEk7OztBQUNMLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFHQUNaLEtBRFk7QUFFbEI7Ozs7MkJBRVEsTSxFQUFRO0FBQ2hCLFVBQU8sSUFBUCxDQUFZLE1BQVosRUFBb0IsTUFBcEI7QUFDQTs7O3VDQUVvQjtBQUNwQixVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFlBQVk7QUFDbEMsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFNBQXZCO0FBQ0EsSUFGRDtBQUdBOzs7MkJBSVE7QUFDUixVQUNFO0FBQUE7QUFBQSxNQUFLLFNBQU0sZUFBWDtBQUNDLG1DQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEVBQStCLGFBQVksa0JBQTNDLEdBREQ7QUFFQyxvQ0FBUSxPQUFNLFFBQWQsRUFBdUIsU0FBUyxTQUFTLFNBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxLQUEzQyxDQUFoQztBQUZELElBREY7QUFVQTs7OztFQTVCaUIsTUFBTSxTIiwiZmlsZSI6Im5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHNlbmROYW1lKHBsYXllcikge1xuXHRcdHNvY2tldC5lbWl0KCduYW1lJywgcGxheWVyKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHNvY2tldC5vbigncmVhZHlWaWV3JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeSdcblx0XHR9KTtcblx0fSBcblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ1c2VyLXJlZ2lzdGVyXCI+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGlkPSdwbGF5ZXInIHBsYWNlaG9sZGVyPSdzdHVtcHkgdGhlIGtpdHR5JyAvPlxuXHRcdFx0XHRcdDxidXR0b24gdmFsdWU9J1N1Ym1pdCcgb25DbGljaz17c2VuZE5hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudGJ5SWQoJ3BsYXllcicpLnZhbHVlKX0gLz5cblxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufVxuXG4iXX0=