console.log("Ola mundo!")

var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];

function changeBackground() {
  
  var randomIndex = Math.floor(Math.random() * colors.length);
 
  document.body.style.backgroundColor = colors[randomIndex];
}


setInterval(changeBackground, 1000); 