var clickedTime; var createdTime; var reactionTime;

function dissapear() {
  clickedTime=Date.now();
  reactionTime=(clickedTime-createdTime)/1000;
  alert(reactionTime);
	document.getElementById("box").style.display="none";
}

function comeBack() {
  var time=Math.random();
  time=time*5000;

  setTimeout(function() {
    document.getElementById("box").style.display="block";
    createdTime=Date.now();
  }, time);
}