var carry = false;

function allowDrop(ev) {
  	ev.preventDefault();
}

async function drag(ev) {

	if(ev.target.id == "navdraggable"){

		var resp = await fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/insertions/layout/navbar.html');
		resp = await resp.text();

		// ev.dataTransfer.setData("text", '<nav class="navbar navbar-expand-lg brdr-hl"><p class="navbar-brand">E Pluribus Unum</p></nav>');
		ev.dataTransfer.setData("text", resp);
		carry = true;
		dtm();

	}

}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	iframedoc = document.getElementById("frame").contentDocument || document.getElementById("frame").contentWindow.document;
	iframedoc.body.insertAdjacentHTML('beforeend', data);
	iframedoc.body.lastChild.addEventListener('click', () => {
    	iframedoc.body.lastChild.classList.contains('brdr-sl')
      	? iframedoc.body.lastChild.classList.replace('brdr-sl', 'brdr-none')
      	: iframedoc.body.lastChild.classList.add('brdr-sl');
  	});
	carry = false;
	dtm();
}

function dtm(){
	if(carry){
		document.getElementById("drop_dest").style.zIndex = 1;
	}else{
		document.getElementById("drop_dest").style.zIndex = -1;
	}
}