var carry = false;

function allowDrop(ev) {
  	ev.preventDefault();
}

async function drag(ev) {

	if(ev.target.id == "navdraggable"){

		// var resp = await fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/insertions/layout/navbar.html');
		// resp = await resp.text();

		ev.dataTransfer.setData("text", '<nav class="navbar navbar-expand-lg brdr-hl"><p class="navbar-brand">E Pluribus Unum</p></nav>');
		//ev.dataTransfer.setData("text", resp);
		carry = true;
		dtm();

	}else if(ev.target.id == "divdraggable"){

		ev.dataTransfer.setData("text", '<div class="row brdr-hl"><div class="col-1"></div><div class="col-10"><p>Doggo ipsum puggorino most angery pupper I have ever seen borkf heckin good boys, lotsa pats. He made many woofs corgo fluffer fat boi the neighborhood pupper borkdrive, you are doing me a frighten ruff pupperino borking doggo. Long bois adorable doggo puggorino wow very biscit shibe waggy wags shibe, heckin good boys tungg very hand that feed shibe extremely cuuuuuute borking doggo. adorable doggo fluffer. Shooberino doggorino blep smol shooberino wrinkler, super chub doge waggy wags sub woofer. Boof maximum borkdrive many pats h*ck yapper, long doggo vvv many pats. Noodle horse adorable doggo heckin good boys, corgo.</p></div><div class="col-1"></div></div>');
		carry = true;
		dtm();

	}

}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	iframedoc = document.getElementById("frame").contentDocument || document.getElementById("frame").contentWindow.document;
	iframedoc.body.insertAdjacentHTML('beforeend', data);

	var that = iframedoc.body.lastChild;

	that.addEventListener('click', () => {
    	that.classList.contains('brdr-sl')
      	? that.classList.replace('brdr-sl', 'brdr-none')
      	: that.classList.add('brdr-sl');
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