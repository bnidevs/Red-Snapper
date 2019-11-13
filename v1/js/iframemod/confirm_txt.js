var f = document.getElementById('frame').contentWindow.document || document.getElementById('frame').contentDocument;

f.addEventListener("keydown", keyCheck);

function keyCheck(event)
{
   var keyID = event.key;
   if(keyID === "Escape" || ((keyID === "Enter" || keyID === "Return") && !event.shiftKey)){
      confirmSelected();
   }
}

var confirmSelected = () => {
   var all = f.getElementsByTagName("textarea");
   const all_len = all.length;
   for(var i = 0; i < all_len; i++){
      var t = all[0].value;
      all[0].parentNode.innerHTML += t;
      all[0].remove();
   }
}
