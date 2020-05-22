function set(){
var bt1 = document.getElementById("ctr1");
var pl1 = document.getElementById("score1");
var score1 = 0;

var bt2 = document.getElementById("ctr2");
var pl2 = document.getElementById("score2");
var score2 = 0;

var res = document.getElementById("reset");


  bt1.addEventListener("click", function () {
    var lim = document.getElementById("limit").value;
    score1++;
    pl1.textContent = score1;
    if (score1 == lim || (score1 > score2 && score1 > lim)) {
      pl1.classList.add("green");
      bt1.setAttribute("disabled", true);
      bt2.setAttribute("disabled", true);
      winnner();
    }
  });


  bt2.addEventListener("click", function () {
    var lim = document.getElementById("limit").value;
    score2++;
    pl2.textContent = score2;
    if (score2 == lim || (score2 > score1 && score2 > lim)) {
      pl2.classList.add("green");
      bt1.setAttribute("disabled", true);
      bt2.setAttribute("disabled", true);
      winnner();
    }
  });

  res.addEventListener("click", function () {
    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");

    pl1.classList.remove("green");
    pl2.classList.remove("green");

    score1 = 0;
    score2 = 0;

    pl1.textContent = score1;
    pl2.textContent = score2;

    document.getElementById("limit").value = 5;

    winn.textContent = "";
  });

var winn = document.getElementById("win");

function winnner() {
  if (score1 > score2) {
    winn.textContent = "player 1";
  } else {
    winn.textContent = "player 2";
  }
}

}

window.onload = function(){
  this.set();

}