function getImgs() {
  let p1img = document.getElementById("p1img").value;
  let p2img = document.getElementById("p2img").value;
  let p3img = document.getElementById("p3img").value;
  let p4img = document.getElementById("p4img").value;
  let p5img = document.getElementById("p5img").value;
  let p6img = document.getElementById("p6img").value;
}

const score = [0, 0, 0, 0, 0, 0];

//updates the HTML to match the score array
function scoreUpdate() {
  document.getElementById("p1scr").innerHTML = "Score: " + score[0];
  document.getElementById("p2scr").innerHTML = "Score: " + score[1];
  document.getElementById("p3scr").innerHTML = "Score: " + score[2];
  document.getElementById("p4scr").innerHTML = "Score: " + score[3];
  document.getElementById("p5scr").innerHTML = "Score: " + score[4];
  document.getElementById("p6scr").innerHTML = "Score: " + score[5];
}

//changes the score
function scoreChng(playerind, amt) {
  let newScore = score.at(playerind) + amt;
  score[playerind] = newScore;
  scoreUpdate();
}

function scoreReset(playerS) {
  playerS = 0;
  return playerS;
}

function changeColour(colour, block) {
   
  document.getElementById(block).style.backgroundColor =
    document.getElementById(colour).value;
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function confirmNames() {
 let boom = removeElementsByClass;
    document.getElementById("p1fn").innerHTML =
    "<h2>" + document.getElementById("player1").value + "</h2>";
  document.getElementById("p2fn").innerHTML =
    "<h2>" + document.getElementById("player2").value + "</h2>";
  document.getElementById("p3fn").innerHTML =
    "<h2>" + document.getElementById("player3").value + "</h2>";
  document.getElementById("p4fn").innerHTML =
    "<h2>" + document.getElementById("player4").value + "</h2>";
  document.getElementById("p5fn").innerHTML =
    "<h2>" + document.getElementById("player5").value + "</h2>";
  document.getElementById("p6fn").innerHTML =
    "<h2>" + document.getElementById("player6").value + "</h2>";
    boom("bye")
}
