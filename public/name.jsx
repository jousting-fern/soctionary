import React from 'react'

//the starting view shown when you load the game

export default class Name extends React.Component {
	constructor(props) {
		super(props)
	}

	sendName(player) {
		socket.emit('name', player)
	}

	componentWillMount() {
		socket.on('readyView', function (room) {
			console.log('got room: ', room);
			window.location.href = '#/ready'
		});
	} 



	render() {
		
		
		return (
			    
				<div className="user-register z-depth-1 valign">
					<h1>what's your name?</h1>
					<input type='text' id='player' placeholder='stumpy the kitty' />
          <h1>enter a room (or one will generate)</h1>
					<input type='text' id='room' placeholder='5 letters' />
					<button className="btn waves-effect waves-light" value='Submit' onClick={function () {this.sendName({name: document.getElementById('player').value, room: document.getElementById('room').value})}.bind(this)}>
                      submit
					</button>

				</div>



			)
	}
}

