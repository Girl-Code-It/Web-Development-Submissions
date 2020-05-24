var cont = document.getElementById("content");
var bt = document.getElementById("button");

bt.onclick = function () {
  if (cont.className == "open") {
    //shrink the box
    cont.className = "";
    bt.innerHTML = "Learn More";
  } else {
    //expand the box
    cont.className = "open";
    bt.innerHTML = "Learn Less";
  }
};
