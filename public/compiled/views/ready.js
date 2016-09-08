'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ready = function (_React$Component) {
	_inherits(ready, _React$Component);

	function ready(props) {
		_classCallCheck(this, ready);

		return _possibleConstructorReturn(this, (ready.__proto__ || Object.getPrototypeOf(ready)).call(this, props));
	}

	_createClass(ready, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			socket.on('countdown', function (animalName) {
				window.Animal = animalName;
				window.location.href = '#/drawing';
				//redirect to countdown view
			});
		}
	}, {
		key: 'start',
		value: function start() {
			socket.emit('ready');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					' Everyone Ready? '
				),
				React.createElement('button', { value: 'Press this button when everyone is in', onClick: this.start })
			);
		}
	}]);

	return ready;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxLOzs7QUFDTCxnQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUdBQ1osS0FEWTtBQUVsQjs7Ozt1Q0FFb0I7QUFDcEIsVUFBTyxFQUFQLENBQVUsV0FBVixFQUFzQixVQUFVLFVBQVYsRUFBc0I7QUFDM0MsV0FBTyxNQUFQLEdBQWdCLFVBQWhCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFdBQXZCO0FBQ0M7QUFDRCxJQUpEO0FBS0E7OzswQkFFTztBQUNQLFVBQU8sSUFBUCxDQUFZLE9BQVo7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQ7QUFFQyxvQ0FBUSxPQUFNLHVDQUFkLEVBQXNELFNBQVMsS0FBSyxLQUFwRTtBQUZELElBREE7QUFRQzs7OztFQTFCaUIsTUFBTSxTIiwiZmlsZSI6InJlYWR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgcmVhZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHNvY2tldC5vbignY291bnRkb3duJyxmdW5jdGlvbiAoYW5pbWFsTmFtZSkge1xuXHRcdFx0d2luZG93LkFuaW1hbCA9IGFuaW1hbE5hbWU7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL2RyYXdpbmcnXG5cdFx0ICAvL3JlZGlyZWN0IHRvIGNvdW50ZG93biB2aWV3XG5cdFx0fSk7XG5cdH0gXG5cblx0c3RhcnQoKSB7XG5cdFx0c29ja2V0LmVtaXQoJ3JlYWR5Jyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPiBFdmVyeW9uZSBSZWFkeT8gPC9oMT5cblx0XHRcdDxidXR0b24gdmFsdWU9XCJQcmVzcyB0aGlzIGJ1dHRvbiB3aGVuIGV2ZXJ5b25lIGlzIGluXCIgb25DbGljaz17dGhpcy5zdGFydH0+PC9idXR0b24+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdFxuXHQpfVxuXHR9Il19