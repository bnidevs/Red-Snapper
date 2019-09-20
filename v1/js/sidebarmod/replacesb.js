document.getElementById("defsb").addEventListener("click", defaultreplace);
document.getElementById("sblayout").addEventListener("click", layoutreplace);

var layoutreplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/layout/layoutbar.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.catch(error => console.error('Error:', error));
}

var defaultreplace = () => {
	fetch('https://raw.githubusercontent.com/bnidevs/Red-Snapper/master/v1/js/sidebarmod/default/default.html')
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.catch(error => console.error('Error:', error));
}