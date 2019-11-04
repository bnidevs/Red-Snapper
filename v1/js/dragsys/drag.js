var carry = false;

function allowDrop(ev) {
  	ev.preventDefault();
}

function drag(ev) {

	if(ev.target.id == "navdraggable"){

		// fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/iframemod/layoutadd/navbar.html')
		// .then(response => response.text())
		// .then(function(response){
		// 	console.log(response);
		// 	ev.dataTransfer.setData("text", response);
		// }).then(function(){
		// 	return;
		// })
		// .catch(error => console.error('Error:', error));

		ev.dataTransfer.setData("text", '<nav class="navbar navbar-expand-lg brdr-hl"><p class="navbar-brand">E Pluribus Unum</p></nav>');
		carry = true;
		dtm();
	}

}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	iframedoc = document.getElementById("frame").contentDocument || document.getElementById("frame").contentWindow.document;
	iframedoc.body.insertAdjacentHTML('beforeend', data);
	carry = false;
}

function dtm(){
	if(carry){
		document.getElementById("drop_dest").style.pointerEvents = "auto";
	}else{
		document.getElementById("drop_dest").style.pointerEvents = "none";
	}
}