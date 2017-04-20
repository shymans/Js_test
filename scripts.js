var clickedTime; var createdTime; var reactionTime;

function dissapear() {
  clickedTime=Date.now();
  reactionTime=(clickedTime-createdTime)/1000;
  document.getElementById("time").innerHTML=reactionTime;
	document.getElementById("box").style.display="none";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i=0; i<6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function comeBack() {
  var time=Math.random();
  time=time*5000;

  setTimeout(function() {
    document.getElementById("box").style.backgroundColor=getRandomColor();
    document.getElementById("box").style.display="block";
    createdTime=Date.now();
  }, time);
}

function clickMe() {
  document.getElementById("box").onclick=function() {
    dissapear();

    comeBack();
    }
}

