var f = document.getElementById('frame').contentWindow.document || document.getElementById('frame').contentDocument;

f.addEventListener("keydown", keyCheck);

function keyCheck(event)
{
   var keyID = event.keyCode;
   if((keyID == 8 || keyID == 46) && f.activeElement.nodeName != 'TEXTAREA'){
      wipeSelected();
   }
}

var wipeSelected = () => {
   var all = f.getElementsByClassName("brdr-sl");
   const all_len = all.length;
   for(var i = 0; i < all_len; i++){
      all[0].remove();
   }
}
