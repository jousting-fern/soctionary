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
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement('input', { type: 'text', id: 'player', placeholder: 'stumpy the kitty' }),
				React.createElement('button', { value: 'Submit', onClick: sendName(document.getElementbyId('player').value) })
			);
		}
	}]);

	return Name;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sSTs7O0FBQ0wsZUFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1osS0FEWTtBQUVsQjs7OzsyQkFFUSxNLEVBQVE7QUFDaEIsVUFBTyxJQUFQLENBQVksTUFBWixFQUFvQixNQUFwQjtBQUNBOzs7MkJBSVE7QUFDUixVQUNFO0FBQUE7QUFBQTtBQUNDLG1DQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEVBQStCLGFBQVksa0JBQTNDLEdBREQ7QUFFQyxvQ0FBUSxPQUFNLFFBQWQsRUFBdUIsU0FBUyxTQUFTLFNBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxLQUEzQyxDQUFoQztBQUZELElBREY7QUFVQTs7OztFQXRCaUIsTUFBTSxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0c2VuZE5hbWUocGxheWVyKSB7XG5cdFx0c29ja2V0LmVtaXQoJ25hbWUnLCBwbGF5ZXIpXG5cdH1cblxuXHRcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3BsYXllcicgcGxhY2Vob2xkZXI9J3N0dW1weSB0aGUga2l0dHknIC8+XG5cdFx0XHRcdFx0PGJ1dHRvbiB2YWx1ZT0nU3VibWl0JyBvbkNsaWNrPXtzZW5kTmFtZShkb2N1bWVudC5nZXRFbGVtZW50YnlJZCgncGxheWVyJykudmFsdWUpfSAvPlxuXG5cdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59XG5cbiJdfQ==