window.onload = function(){
	document.getElementById("defsb").addEventListener("click", defaultreplace);
	document.getElementById("sblayout").addEventListener("click", layoutreplace);
	document.getElementById("sbmedia").addEventListener("click", defaultreplace);
	document.getElementById("sbtext").addEventListener("click", layoutreplace);
	document.getElementById("sbanim").addEventListener("click", defaultreplace);
	document.getElementById("sbhelp").addEventListener("click", layoutreplace);
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

	document.getElementById("defsb").addEventListener("click", defaultreplace);
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

	document.getElementById("defsb").addEventListener("click", defaultreplace);
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

	document.getElementById("defsb").addEventListener("click", defaultreplace);
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
	})
	.catch(error => console.error('Error:', error));
}