window.onload = function(){
	document.getElementById("defsb").addEventListener("click", defaultreplace);
	document.getElementById("sblayout").addEventListener("click", layoutreplace);
	document.getElementById("sbmedia").addEventListener("click", mediareplace);
	document.getElementById("sbtext").addEventListener("click", textreplace);
	document.getElementById("sbanim").addEventListener("click", animreplace);
	document.getElementById("sbprev").addEventListener("click", open_prev);
}

var layoutreplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/layout/layoutbar.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.then(function(){
		document.getElementById("defsb").addEventListener("click", defaultreplace);
	})
	.catch(error => console.error('Error:', error));
}

var mediareplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/media/mediabar.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.then(function(){
		document.getElementById("defsb").addEventListener("click", defaultreplace);
	})
	.catch(error => console.error('Error:', error));
}

var textreplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/text/textbar.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.then(function(){
		document.getElementById("defsb").addEventListener("click", defaultreplace);
	})
	.catch(error => console.error('Error:', error));
}

var animreplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/animation/animationbar.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.then(function(){
		document.getElementById("defsb").addEventListener("click", defaultreplace);
	})
	.catch(error => console.error('Error:', error));
}

var open_prev = () => {
	var new_win = window.open("", "Preview Page");
	var iframedoc = document.getElementById("frame").contentDocument || document.getElementById("frame").contentWindow.document;
	new_win.document.body.innerHTML = iframedoc;
}

var defaultreplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/default/default.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.then(function(){
		document.getElementById("defsb").addEventListener("click", defaultreplace);
		document.getElementById("sblayout").addEventListener("click", layoutreplace);
		document.getElementById("sbmedia").addEventListener("click", mediareplace);
		document.getElementById("sbtext").addEventListener("click", textreplace);
		document.getElementById("sbanim").addEventListener("click", animreplace);
		document.getElementById("sbprev").addEventListener("click", open_prev);
	})
	.catch(error => console.error('Error:', error));
}