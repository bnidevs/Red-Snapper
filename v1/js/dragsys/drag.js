// allowDrop doesn't trigger when navigation bar is dragged over the iframe
function allowDrop(ev) {
	console.log("over");
  	ev.preventDefault();
}

// drag works and is triggered when navigation bar is dragged
function drag(ev) {
	if(ev.target.id == "navdraggable"){
		console.log("triggered");

		fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/iframemod/layoutadd/navbar.html')
		.then(response => response.text())
		.then(function(response){
			console.log(response);
			ev.dataTransfer.setData("text/html", response);
		})
		.catch(error => console.error('Error:', error));

		console.log("dataTransfer successful");

		return;
	}

	ev.dataTransfer.setData("text/html", "temp");
}

// drop doesn't trigger when navigation bar is dragged over the iframe
function drop(ev) {
	console.log("dropped");
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text/html");
	iframedoc = ev.target.contentDocument || ev.target.contentWindow.document;
	iframedoc.body.insertAdjacentHTML('beforeend', data);
}

document.getElementById("frame").addEventListener('ondrop', drop, false);
document.getElementById("frame").addEventListener('ondragenter', allowDrop);
document.getElementById("frame").addEventListener('ondragover', allowDrop);