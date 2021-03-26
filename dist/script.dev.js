"use strict";

var space21 = document.getElementById("space21");
var space22 = document.getElementById("space22");
var space23 = document.getElementById("space23");
var space24 = document.getElementById("space24");
var space25 = document.getElementById("space25");
var space26 = document.getElementById("space26");
var end2 = document.getElementById("end2");
var level2 = document.getElementById("level2");
var level1 = document.getElementById("level1");
var startLvl1 = document.getElementById("startLvl1");
var startLvl2 = document.getElementById("startLvl2");
var endLvl1 = document.getElementById("endLvl1");
var endLvl2 = document.getElementById("endLvl2");
var space1 = document.getElementById("space1");
var content = document.getElementById("content");

var showLevel1 = function showLevel1() {
  level1.style.display = "block";
  level2.style.display = "none";
};

var showLevel2 = function showLevel2() {
  level2.style.display = "block";
  level1.style.display = "none";
};

var gameOver2 = function gameOver2() {
  level2.classList.remove("level2");
  level2.classList.add("gameOverLevel2");
};

var gameOver1 = function gameOver1() {
  level1.classList.remove("level1");
  level1.classList.add("gameOverLevel2");
};

var startLevel1 = function startLevel1() {
  space1.addEventListener("mouseout", gameOver1);

  if (!space1.contains(startLevel1.target) && endLvl1.contains(startLevel1.target)) {
    space1.removeEventListener("mouseout", gameOver1);
  }

  ;
};

var endLevel1 = function endLevel1() {
  level1.style.display = "none";
  level2.style.display = "block";
};

startLvl1.addEventListener("click", startLevel1);
endLvl1.addEventListener("click", endLevel1);

var win2 = function win2() {
  level2.classList.remove("level2");
  level2.classList.add("win2");
};

var startLevel2 = function startLevel2() {
  space21.addEventListener("mouseout", gameOver2);

  space21.oncontextmenu = function () {
    space21.removeEventListener("mouseout", gameOver2);
  };

  space22.addEventListener("mouseout", gameOver2);

  space22.oncontextmenu = function () {
    space22.removeEventListener("mouseout", gameOver2);
  };

  space23.addEventListener("mouseout", gameOver2);

  space23.oncontextmenu = function () {
    space23.removeEventListener("mouseout", gameOver2);
  };

  space24.addEventListener("mouseout", gameOver2);

  space24.oncontextmenu = function () {
    space24.removeEventListener("mouseout", gameOver2);
  };

  space25.addEventListener("mouseout", gameOver2);

  space25.oncontextmenu = function () {
    space25.removeEventListener("mouseout", gameOver2);
  };

  space26.addEventListener("mouseout", gameOver2);

  space26.oncontextmenu = function () {
    space26.removeEventListener("mouseout", gameOver2);
  }; //end2.addEventListener("click", (event) => {
  //event.target.classList.toggle("grow")
  //})

};

startLvl2.addEventListener("click", startLevel2);

var endLevel2 = function endLevel2() {
  end2.innerHTML = "Well Done!";
};

endLvl2.addEventListener("click", endLevel2);