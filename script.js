//DISNEY VILLAIN SCORES
var ScarScore = 0;
var GothelScore = 0;
var CruellaScore = 0;
var UrsulaScore = 0;
var DrFacilierScore = 0;
var HadesScore = 0;
var HookScore = 0;

//WHEN EACH QUESTION HAS AN ANSWER SELECTED
var QuestionCount = 0;

//result
var result = document.getElementById("result");

//accessing the answer buttons
var scar1 = document.getElementById("scar1");
var scar2 = document.getElementById("scar2");
var scar3 = document.getElementById("scar3");
var gothel1 = document.getElementById("gothel1");
var gothel2 = document.getElementById("gothel2");
var cruella1 = document.getElementById("cruella1");
var cruella2 = document.getElementById("cruella2");
var ursula1 = document.getElementById("ursula1");
var drFacilier2 = document.getElementById("drFacilier2");
var hades3 = document.getElementById("hades3");
var hook1 = document.getElementById("hook1");
var hook2 = document.getElementById("hook2");
var hook3 = document.getElementById("hook3");
var gothel11 = document.getElementById("gothel11");
var hades2 = document.getElementById("hades2");
var drFacilier3 = document.getElementById("drFacilier3");
var hook4 = document.getElementById("hook4");
var ursula5 = document.getElementById("ursula5");
var cruella6 = document.getElementById("cruella6");
var scar7 = document.getElementById("scar7");
var restart = document.getElementById("restart");


//Event listeners to update each villain score


scar1.addEventListener("click", function(){
 updateScarScore();
 addfootprint(scar1)
});
scar2.addEventListener("click", function(){
 updateGothelScore();
 addfootprint(scar2)
});
scar3.addEventListener("click", function(){
 updateHookScore();
 addfootprint(scar3)
});
gothel1.addEventListener("click", function(){
 updateGothelScore();
 addfootprint(gothel1)
});
gothel2.addEventListener("click", function(){
 updateCruellaScore();
 addfootprint(gothel2)
});
cruella1.addEventListener("click", function(){
 updateCruellaScore();
 addfootprint(cruella1)
});
cruella2.addEventListener("click", function(){
 updateHadesScore();
 addfootprint(cruella2)
});
ursula1.addEventListener("click", function(){
 updateUrsulaScore();
 addfootprint(ursula1)
});
drFacilier2.addEventListener("click", function(){
 updateDrFacilierScore();
 addfootprint(drFacilier2)
});
hades3.addEventListener("click",  function(){
 updateHadesScore();
 addfootprint(hades3)
});
hook1.addEventListener("click",  function(){
 updateHookScore();
 addfootprint(hook1)
});
hook2.addEventListener("click",  function(){
 updateUrsulaScore();
 addfootprint(hook2)
});
hook3.addEventListener("click",  function(){
 updateDrFacilierScore();
 addfootprint(hook3)
});
gothel11.addEventListener("click",  function(){
 updateGothelScore();
 addfootprint(gothel11)
});
hades2.addEventListener("click", function(){
 updateHadesScore();
 addfootprint(hades2)
});
drFacilier3.addEventListener("click",  function(){
 updateDrFacilierScore();
 addfootprint(drFacilier3)
});
hook4.addEventListener("click", function(){
 updateHookScore();
 addfootprint(hook4)
});
ursula5.addEventListener("click", function(){
 updateUrsulaScore();
 addfootprint(ursula5)
});
cruella6.addEventListener("click", function(){
 updateCruellaScore();
 addfootprint(cruella6)
});
scar7.addEventListener("click", function(){
 updateScarScore();
 addfootprint(scar7)
});
restart.addEventListener("click", restart1);


//defining functions
function addfootprint(element){
  element.classList.add("footprint");
}



function updateScarScore() {
  ScarScore += 1;
  QuestionCount += 1;
  console.log("ScarScore = " + ScarScore + " and QuestionCount = " + QuestionCount);

  if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }

  updateResult();

}


function updateGothelScore() {
  GothelScore += 1;
  QuestionCount += 1;
  console.log("GothelScore = " + GothelScore + " and QuestionCount = " + QuestionCount);
   if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }
  updateResult();
}

function updateCruellaScore() {
  CruellaScore += 1;
  QuestionCount += 1;
  console.log("CruellaScore = " + CruellaScore + " and QuestionCount = " + QuestionCount);
  if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }
  updateResult();
}


function updateUrsulaScore() {
  UrsulaScore += 1;
  QuestionCount += 1;
  console.log("UrsulaScore = " + UrsulaScore + " and QuestionCount = " + QuestionCount);
   if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }
  updateResult();
}

function updateDrFacilierScore() {
  DrFacilierScore += 1;
  QuestionCount += 1;
  console.log("DrFScore = " + DrFacilierScore + " and QuestionCount = " + QuestionCount);
  if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }
  updateResult();
}

function updateHadesScore() {
  HadesScore += 1;
  QuestionCount += 1;
  console.log("HadesScore = " + HadesScore + " and QuestionCount = " + QuestionCount);
 if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }
  updateResult();
}

function updateHookScore() {
  HookScore += 1;
  QuestionCount += 1;
  console.log("HookScore = " + HookScore + " and QuestionCount = " + QuestionCount);
 if(QuestionCount ==  6) {
    console.log("The quiz is over.")
  }
  updateResult();
}


function updateResult() {
  clickHere.addEventListener("click", displayResult);
  

}

function restart1() {
  console.log("restart");
  scar1.classList.remove("footprint");
  scar2.classList.remove("footprint");
  scar3.classList.remove("footprint");
  gothel1.classList.remove("footprint");
  gothel2.classList.remove("footprint");
  cruella1.classList.remove("footprint");
  cruella2.classList.remove("footprint");
  ursula1.classList.remove("footprint");
  drFacilier2.classList.remove("footprint");
  hades3.classList.remove("footprint");
  hook1.classList.remove("footprint");
  hook2.classList.remove("footprint");
  hook3.classList.remove("footprint");
  gothel11.classList.remove("footprint");
  hades2.classList.remove("footprint");
  drFacilier3.classList.remove("footprint");
  hook4.classList.remove("footprint");
  ursula5.classList.remove("footprint");
  cruella6.classList.remove("footprint");
  scar7.classList.remove("footprint");
  QuestionCount = 0;
  ScarScore = 0;
  GothelScore = 0;
  CruellaScore = 0;
  DrFacilierScore = 0;
  UrsulaScore = 0;
  HadesScore = 0;
  HookScore = 0;
  console.log("All scores = " + 0);
  result.innerHTML = ("Your result is... ");
}

//results button
var clickHere = document.getElementById("clickHere");


function displayResult() {
  if(ScarScore >=2) {
    result.innerHTML=("You are Scar from the Lion King!");
  } else if(GothelScore >=2) {
    result.innerHTML=("You are Mother Gothel from Tangled!");
  } else if(CruellaScore >=2) {
    result.innerHTML=("You are Cruella De Vil from 101 Dalmatians!");
} else if(UrsulaScore >=2) {
    result.innerHTML=("You are Ursula from the Little Mermaid!");
} else if(DrFacilierScore >=2 ) {
    result.innerHTML=("You are Dr Facilier from the Princess and the Frog!");
} else if(HadesScore >=2 ) {
    result.innerHTML=("You are Hades from Hercules!"); 
} else if(HookScore >=2) {
    result.innerHTML=("You are Captain Hook from Peter Pan!");
} else {
  result.innerHTML=("You're Yzma from the Emperor's New Groove!");
}
}
