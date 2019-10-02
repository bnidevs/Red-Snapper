var el = document.body;

var refcs = (e) => {
	el.style.outline = null;
	el = e.target;
	el.style.outline = "solid 3px black !important";
}

window.onload = function() {
	var allel = document.getElementsByClassName("brdr-hl");

	for(var i = 0; i < allel.length; i++){
		allel[i].addEventListener("click", function(e){refcs(e)});
	}
}