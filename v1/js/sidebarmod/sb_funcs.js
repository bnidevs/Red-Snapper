window.onload = function(){
	document.getElementById("defsb").addEventListener("click", defaultreplace);
	document.getElementById("sblayout").addEventListener("click", layoutreplace);
	document.getElementById("sbmedia").addEventListener("click", mediareplace);
	document.getElementById("sbstyle").addEventListener("click", stylereplace);
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

var stylereplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/style/stylebar.html')
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
	var prev_content = iframedoc.body;
	prev_content.childNodes[0].remove();
	new_win.document.head.innerHTML = iframedoc.head.innerHTML;
	new_win.document.body.innerHTML = prev_content.innerHTML;
}

var update = (s, b) => {
	if(s == 'red'){
		if(b){
			document.getElementById("r_slider").value = document.getElementById("r_value").value;
		}else{
			document.getElementById("r_value").value = document.getElementById("r_slider").value;
		}
	}

	if(s == 'blue'){
		if(b){
			document.getElementById("b_slider").value = document.getElementById("b_value").value;
		}else{
			document.getElementById("b_value").value = document.getElementById("b_slider").value;
		}
	}

	if(s == 'green'){
		if(b){
			document.getElementById("g_slider").value = document.getElementById("g_value").value;
		}else{
			document.getElementById("g_value").value = document.getElementById("g_slider").value;
		}
	}
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
		document.getElementById("sbstyle").addEventListener("click", stylereplace);
		document.getElementById("sbanim").addEventListener("click", animreplace);
		document.getElementById("sbprev").addEventListener("click", open_prev);
	})
	.catch(error => console.error('Error:', error));
}