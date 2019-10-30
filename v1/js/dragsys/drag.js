function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
	if(ev.target.id == "navdraggable"){
		fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/iframemod/layoutadd/navbar.html')
		.then(response => response.text())
		.then(function(response){
			ev.dataTransfer.setData("text", response);
		})
		.catch(error => console.error('Error:', error));
	}
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.childNodes[0].childNodes[0].insertAdjacentHTML('afterend', data);
}