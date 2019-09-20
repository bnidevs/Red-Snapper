document.getElementById("sblayout").addEventListener("click", layoutreplace);

var layoutreplace = () => {
	fetch('js/sidebarmod/layout/layoutbar.html', {credentials: 'same-origin'})
	.then(response => response.text())
	.then(function(response){
		document.getElementById("sbreplloc").innerHTML = response;
	})
	.catch(error => console.error('Error:', error));
}