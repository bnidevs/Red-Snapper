var r_bg = 255, g_bg = 255, b_bg = 255;
var r_tx = 0, g_tx = 0, b_tx = 0;

var placement = true;

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

var update_placement = () => {
	placement = !placement;
	update('red', true, true);
	update('green', true, true);
	update('blue', true, true);
}

var update = (s, b, placement_changed = false) => {
	if(s == 'red'){

		if(placement_changed){
			document.getElementById("r_slider").value = (placement ? r_bg : r_tx);
			document.getElementById("r_value").value = (placement ? r_bg : r_tx);
		}

		if(b){
			if(placement){
				r_bg = document.getElementById("r_value").value;
			}else{
				r_tx = document.getElementById("r_value").value;
			}
			document.getElementById("r_slider").value = document.getElementById("r_value").value;
		}else{
			if(placement){
				r_bg = document.getElementById("r_slider").value;
			}else{
				r_tx = document.getElementById("r_slider").value;
			}
			document.getElementById("r_value").value = document.getElementById("r_slider").value;
		}
	}

	if(s == 'blue'){

		if(placement_changed){
			document.getElementById("b_slider").value = (placement ? b_bg : b_tx);
			document.getElementById("b_value").value = (placement ? b_bg : b_tx);
		}

		if(b){
			if(placement){
				b_bg = document.getElementById("b_value").value;
			}else{
				b_tx = document.getElementById("b_value").value;
			}
			document.getElementById("b_slider").value = document.getElementById("b_value").value;
		}else{
			if(placement){
				b_bg = document.getElementById("b_slider").value;
			}else{
				b_tx = document.getElementById("b_slider").value;
			}
			document.getElementById("b_value").value = document.getElementById("b_slider").value;
		}
	}

	if(s == 'green'){

		if(placement_changed){
			document.getElementById("g_slider").value = (placement ? g_bg : g_tx);
			document.getElementById("g_value").value = (placement ? g_bg : g_tx);
		}

		if(b){
			if(placement){
				g_bg = document.getElementById("g_value").value;
			}else{
				g_tx = document.getElementById("g_value").value;
			}
			document.getElementById("g_slider").value = document.getElementById("g_value").value;
		}else{
			if(placement){
				g_bg = document.getElementById("g_slider").value;
			}else{
				g_tx = document.getElementById("g_slider").value;
			}
			document.getElementById("g_value").value = document.getElementById("g_slider").value;
		}
	}

	document.getElementById("clr_view").backgroundColor = 'rgb(' + (placement ? r_bg : r_tx) + ',' + (placement ? b_bg : b_tx) + ',' + (placement ? g_bg : g_tx) + ')';
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