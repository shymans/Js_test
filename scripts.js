function dissapear() {
	document.getElementById("box").style.display="none";
}

function comeBack() {
  setTimeout(function() {
    document.getElementById("box").style.display="block";
  }, 5000);
}