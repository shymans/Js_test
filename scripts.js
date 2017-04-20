function dissapear() {
	document.getElementById("box").style.display="none";
}

function comeBack() {
  var time=Math.random();
  time=time*5000;

  setTimeout(function() {
    document.getElementById("box").style.display="block";
  }, time);
}