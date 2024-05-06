let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "green", "red", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 1000);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function() {
    btn.classList.remove("userflash");
  }, 1000);
}

function levelUp() {
    userSeq =[];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * btns.length);
  let randomColor = btns[randomIndex];
  let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
  console.log(gameSeq);
  btnFlash(randomBtn);
}

function checkAns(idx) {
//   let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length){
        levelUp();
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level} </b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userflash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userColor);
  checkAns( userSeq.length -1);


}

document.addEventListener("keypress", function() {
  if (!started) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
    started =false;
    gameSeq =[];
    userSeq =[];
    level= 0;
}