var allel = document.getElementsByClassName("brdr-hl");

var el;

for(var i = 0; i < allel.length; i++){
	allel[i].addEventListener("click", refcs);
}

var refcs = (e) => {
	el.style.outline = "";
	el = e.target;
	el.style.outline = "solid 3px black !important";
}