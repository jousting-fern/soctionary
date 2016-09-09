import React from 'react'

export default class Vote extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {

		// removed this for the one below b/c we're already on vote :. listener should not be waiting for vote 
		// socket.on('vote', function (images) {
		//   // redirect to voting view
		//   // images is an array of JSON.stringify(canvas) objects to vote on
		//   this.renderDrawings(images);
		// }.bind(this));
    
		// listen for emit when we redirect to results view 
    socket.on('results', function () {
		  window.location.href = '#/result' 
		});
	}

	renderDrawings(arr){

		// rasterize each image from vector blob and append to page
		arr.forEach(function(pic) {

		  	canvas.loadFromJSON( pic, function(blob) {
		  		var image = new Image();
		  		image.src = blob.toDataUrl("image/png");
		  		document.getElementById('vote').appendChild(image);
		  		
		  		// <button value="Vote" onClick={this.chooseVote}></button>

		  		//place image on canvas/page appropriately
		  	});
			//canvas.renderAll.bind(canvas)
		})

	}

	chooseVote(){
	   
	}

	render() {
		//Need to decide if we use one big canvas, or just render images of all the drawings
		return (
			<div id="vote">
			</div>

			)
	}
}

