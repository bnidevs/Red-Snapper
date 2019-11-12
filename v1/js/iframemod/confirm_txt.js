var f = document.getElementById('frame').contentWindow.document || document.getElementById('frame').contentDocument;

f.addEventListener("keydown", keyCheck);

function keyCheck(event)
{
   var keyID = event.keyCode;
   if(keyID == 13){
      confirmSelected();
   }
}

var confirmSelected = () => {
   var all = f.getElementsByTagName("input");
   const all_len = all.length;
   for(var i = 0; i < all_len; i++){
      var t = all[0].value;
      all[0].parentNode.innerHTML += t;
      all[0].remove();
   }
}
