const space21 = document.getElementById("space21");
const space22 = document.getElementById("space22");
const space23 = document.getElementById("space23");
const space24 = document.getElementById("space24");
const space25 = document.getElementById("space25");
const space26 = document.getElementById("space26");
const end2 = document.getElementById("end2");
const level2 = document.getElementById("level2");
const level1 = document.getElementById("level1");
const startLvl1 = document.getElementById("startLvl1");
const startLvl2 = document.getElementById("startLvl2");
const endLvl1 = document.getElementById("endLvl1");
const endLvl2 = document.getElementById("endLvl2");
const space1 = document.getElementById("space1")
const content = document.getElementById("content")



const showLevel1 = () => {
    level1.style.display ="block";
    level2.style.display = "none";
  };

const showLevel2 = () => {
    level2.style.display ="block" ;
    level1.style.display = "none";
  };

const gameOver2 = () => {
  level2.classList.remove("level2");
  level2.classList.add("gameOverLevel2")

};
const gameOver1 = () => {
  level1.classList.remove("level1");
  level1.classList.add("gameOverLevel2")

};

const startLevel1 = () => {
  space1.addEventListener("mouseout",gameOver1);
  if (!space1.contains(startLevel1.target) && endLvl1.contains(startLevel1.target)) {
    space1.removeEventListener("mouseout",gameOver1)
  };
  };


const endLevel1 =() => {
  level1.style.display = "none";
  level2.style.display = "block"
}


startLvl1.addEventListener("click",startLevel1)

endLvl1.addEventListener("click",endLevel1)


const win2 = () => {
  level2.classList.remove("level2");
  level2.classList.add("win2")
};



const startLevel2 =() => {
space21.addEventListener("mouseout", gameOver2);
space21.oncontextmenu = function () {
  space21.removeEventListener("mouseout",gameOver2)
};
space22.addEventListener("mouseout", gameOver2);
space22.oncontextmenu = function () {
  space22.removeEventListener("mouseout",gameOver2)
};
space23.addEventListener("mouseout", gameOver2);
space23.oncontextmenu = function () {
  space23.removeEventListener("mouseout",gameOver2)
};
space24.addEventListener("mouseout", gameOver2);
space24.oncontextmenu = function () {
  space24.removeEventListener("mouseout",gameOver2)
};
space25.addEventListener("mouseout", gameOver2);
space25.oncontextmenu = function () {
  space25.removeEventListener("mouseout",gameOver2)
};
space26.addEventListener("mouseout", gameOver2);
space26.oncontextmenu = function () {
  space26.removeEventListener("mouseout",gameOver2)
};
//end2.addEventListener("click", (event) => {
  //event.target.classList.toggle("grow")
//})
};
startLvl2.addEventListener("click",startLevel2);

const endLevel2 = () => {
  end2.innerHTML=`Well Done!`
};
endLvl2.addEventListener("click",endLevel2);