document.addEventListener("keydown", keyCheck);

function keyCheck(event)
{
   var keyID = event.keyCode;
   if(keyID == 8 || keyID == 46){
      wipeSelected();
   }
}

var wipeSelected = () => {
   var all = document.getElementsByClassName("brdr-sl");
   const all_len = all.length;
   for(var i = 0; i < all_len; i++){
      all[0].remove();
   }
}