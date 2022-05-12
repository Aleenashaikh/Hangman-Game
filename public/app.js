var main = document.getElementById("main")
// var playButton = document.getElementById("play")
var section1 = document.getElementById("section-1")
var section2 = document.getElementById("section-2")
var section3 = document.getElementById("section-3")
var section4 = document.getElementById("section-4")
var section5 = document.getElementById("section-5")
var head = document.getElementById("head")

function start() {
  main.style.backgroundImage = 'url("images/background.webp")';
  section1.className += " hidden";
  section2.className += " hidden"
  section3.className += " hidden"
  section4.className -= " hidden"
  section5.className += " hidden"

}

function backToMain() {
  main.style.backgroundImage = 'url("images/background.webp")';
  section1.className -= " hidden";
  section2.className += " hidden"
  section3.className += " hidden"
  section4.className += " hidden"
  section5.className += " hidden"
  head.className += " my-div"

}

function instruction() {
  main.style.backgroundImage = 'url("images/background.webp")';
  section1.className += " hidden"
  section2.className -= " hidden"
  section5.className += " hidden"
  section3.className += " hidden"
  section4.className += " hidden"

}


var value;
function btnText(btn) {
  btn.className += " btn-click"
  btn.disabled = true
  value = btn.innerHTML.toLowerCase();
  Match(value)


}

function results(failed) {
  var ex = document.getElementById("ex")
  var res = document.getElementById("res")
  main.style.backgroundImage = 'url("images/background.webp")';
  section1.className += " hidden"
  section2.className += " hidden"
  section5.className -= " hidden"
  section3.className += " hidden"
  section4.className += " hidden"


  if (failed == true) {
    ex.innerHTML = "Oops!"
    ex.className += " red"
    res.innerHTML = " lost!<br> The correct word is: " + selectWord2
    res.innerHTML = " won! <br> The correct word is: " + selectWord2 + "<br> Your score is: " + won + "/" + played;
  }
  else if (failed == false) {
    ex.innerHTML = "Wohooo!"
    ex.className += " green"
    res.innerHTML = " won! <br> The correct word is: " + selectWord2 + "<br> Your score is: " + won + "/" + played;
  }
}

function reset() {
  main.style.backgroundImage = 'url("images/background.webp")';
  section1.className += " hidden"
  section5.className += " hidden"
  section2.className += " hidden"
  section4.className -= " hidden"
  section3.className += " hidden"
}


const general = new Map([
  ["abscond", "To leave quickly and secretly and hide oneself, often to avoid arrest or prosecution."], ["abacus", "Also known as a counting frame"], ["adolescence", "A period in human development"], ["scandal", "A disgraceful action or event"], ["improvise", "To invent, compose, or perform with little or no preparation"], ["acceptable", "Adequate to satisfy a need"], ["accidentally", "Something that happens by mistake"], ["accommodate", "To provide a place to stay"], ["acquire", "To get something"], ["acquit", "To release from a duty, obligation"], ["amateur", "Not yet skilled"], ["apparent", "Something that is easy to see or comprehend"], ["argument", "Reason(s) why you are for or against something"], ["believe", "Have confidence in the truth of something"], ["bellwether", "Something that is an indicator of future trends"], ["category", "Any sort of division or class"], ["changeable", "Something that can be altered"], ["collectible", "Able to be brought together into a series"], ["column", "A vertical arrangement of things"], ["committed", "Being dedicated or loyal to something"], ["conscience", "A personal awareness of right and wrong"], ["conscientious", "Following what you know to be right or true"], ["conscious", "Awareness that something is happening"], ["consensus", "An agreement made by a group"], ["definite", "Something that's clear in meaning"], ["discipline", "A field of study"], ["embarrass", "To make someone feel self-conscious"]
])

const generalWords = [...general.keys()]



const movie = new Map([
  ["Ghost"], ["Speed"], ["The Godfather"], ["The Shawshank Redemption"], ["Mission Impossible"], ["Pulp Fiction"], ["Fight Club"], ["Goodfellas"], ["The Matrix"], ["Star Wars"], ["Casablanca"], ["American History X"], ["Psycho"], ["Saving Private Ryan"], ["The Untouchables"], ["Memento"], ["The Pianist"], ["Gladiator"], ["Me before you"], ["Alien"], ["Django Unchained"], ["The avengers"], ["American Beauty"], ["Citizen Kane"], ["Vertigo"], ["A Clockwork Orange"]
])

const movieWords = [...movie.keys()]

const famous = new Map([
  ["Madonna", "Singer"], ["Michael Jackson", "Singer"], ["Tom Cruise", "Actor"], ["The Beetles", "Group"], ["Elvis Presley", "Singer/Actor"], ["The Rolling Stones", "Group"], ["Guns n' Roses", "Group"], ["Diana Ross", "Singer"], ["Jay-Z", "Rapper"], ["Tupac Shakur", "Rapper"], ["Black Sabbath", "Group"], ["Eminem", "Rapper"], ["The Drifters", "Group"], ["The Four Tops", "Group"], ["Beastie Boys", "Group"], ["The Eagles", "Group"], ["Radiohead", "Group"], ["The Temptations", "Group"], ["The Kinks", "Group"], ["Tina Turner", "Singer"], ["Aerosmith", "Group"], ["Eric Clapton", "Singer"], ["Queen", "Group"], ["Pink Floyd", "Group"]
])

const famousWords = [...famous.keys()]

const country = new Map([
  ["Australia", "Continent"], ["Afghanistan", "Asian Country"], ["Armenia", "Asia Country"], ["The Bahamas", "North American Country"], ["Barbados", "North American Country"], ["Belgium", "European Country"], ["Bolivia", "Country"], ["Brazil", "South American Country"], ["Burkina Faso", "African Country"], ["Bangladesh", "Asian Country"], ["Cambodia", "Asian Country"], ["Cameroon", "African Country"], ["Chile", "South American Country"], ["China", "Asian Country"], ["Colombia", "South American Country"], ["Cuba", "North American Country"], ["Czech Republic", "European Country"], ["Cyprus", "European Country"], ["Dominican Republic", "North American Country"], ["Denmark", "European Country"], ["Ecuador", "South American Country"], ["Egypt", "African and Asian Country"], ["Estonia", "Europe Country"], ["Ethiopia", "African Country"], ["Fiji", "Oceanian/Australian Country"], ["Finland", "European Country"], ["Germany", "European Country"], ["Guatemala", "North American Country"], ["Haiti", "North American Country"], ["Honduras", "North American Country"], ["Hungary", "European Country"], ["Iceland", "European Country"], ["India", "Asian Country"]
])

const countryWords = [...country.keys()]



var choosenCat;


function getRandomWord(choosenCat) {
  return choosenCat[Math.floor(Math.random() * choosenCat.length)]
}



var lives;
var hintArr;
var type;
var selectWord;
var selectWord2;
var letters = [];
var wordDiv = document.getElementById("wordDiv")
var remLives = document.getElementById("remLives")
var hint = document.getElementById("hint")
var buttonsDiv = document.getElementById("buttonsDiv")
var played = 0;
var won = 0;

function init(cat) {
  played++;
  main.style.backgroundImage = 'url("images/background.webp")';
  section1.className += " hidden"
  section4.className += " hidden"
  section4.className += " hidden"
  section3.className -= " hidden"
  wordDiv.innerHTML = ''
  lives = 10;
  hint.innerHTML = "HINT!"

  buttonsDiv.innerHTML = '<button class="aplas" onclick="btnText(this)">A</button><button class="aplas" onclick="btnText(this)">B</button><button class="aplas" onclick="btnText(this)">C</button><button class="aplas" onclick="btnText(this)">D</button><button class="aplas" onclick="btnText(this)">E</button><button class="aplas" onclick="btnText(this)">F</button><button class="aplas" onclick="btnText(this)">G</button><button class="aplas" onclick="btnText(this)">H</button><button class="aplas" onclick="btnText(this)">I</button><button class="aplas" onclick="btnText(this)">J</button><button class="aplas" onclick="btnText(this)">K</button><button class="aplas" onclick="btnText(this)">L</button><button class="aplas" onclick="btnText(this)">M</button><button class="aplas" onclick="btnText(this)">N</button><button class="aplas" onclick="btnText(this)">O</button><button class="aplas" onclick="btnText(this)">P</button><button class="aplas" onclick="btnText(this)">Q</button><button class="aplas" onclick="btnText(this)">R</button><button class="aplas" onclick="btnText(this)">S</button><button class="aplas" onclick="btnText(this)">T</button><button class="aplas" onclick="btnText(this)">U</button><button class="aplas" onclick="btnText(this)">V</button><button class="aplas" onclick="btnText(this)">W</button><button class="aplas" onclick="btnText(this)">X</button><button class="aplas" onclick="btnText(this)">Y</button><button class="aplas" onclick="btnText(this)">Z</button>'
  canvas()
  context.clearRect(0, 0, 400, 400);
  type = cat.innerHTML
  if (type == "GENERAL") {
    choosenCat = generalWords;
    hintArr = general;
  }
  else if (type == "FAMOUS") {
    choosenCat = famousWords;
    hintArr = famous;
  }
  else if (type == "COUNTRY") {
    choosenCat = countryWords;
    hintArr = country;
  }
  else {
    choosenCat = movieWords;
    hintArr = 0;
  }

  selectWord2 = getRandomWord(choosenCat)
  selectWord = selectWord2.toLowerCase()
  var abc = 0;



  lives = 10;
  remLives.innerHTML = lives;


  for (let i = 0; i < selectWord.length; i++) {
    if (selectWord[i] != " " && selectWord[i] != "-") {
      wordDiv.innerHTML += '<p class="blank">_</p>'
    }
    else {
      wordDiv.innerHTML += "<br>"
      wordDiv.className += " wordDiv2"
    }

  }


}
var failed;
function Match(abc) {


  canvas()
  for (let i = 0; i < selectWord.length; i++) {
    if (selectWord[i] == abc) {
      letters.push(i)
    }

  }

  if (letters.length === 0) {
    lives = lives - 1;
    animate()
    remLives.innerHTML = lives

  } else {
    for (let j = 0; j < letters.length; j++) {
      if (letters[j] == 0 || wordDiv.childNodes[letters[j - 1]] == "<br>") {
        wordDiv.childNodes[letters[j]].innerHTML = abc.toUpperCase();
      }
      else {
        wordDiv.childNodes[letters[j]].innerHTML = abc;
      }

    }
    letters = []
  }
  if (lives == 0) {
    failed = true;
    results(failed)

  }
  var checking = checkWord();
  if (checking == true) {
    won++;
    results(failed)
  }


}

function checkWord() {
  var val = true;
  for (let i = 0; i < wordDiv.children.length; i++) {
    if (wordDiv.children[i].textContent == "_")
      val = false;
  }
  failed = false;
  return val;
}

var context;

// Hangman
canvas = function () {

  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 3;
};

head = function () {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.arc(80, 44, 15, 0, Math.PI * 2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 3;
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

frame1 = function () {
  draw(0, 150, 200, 150);
};

frame2 = function () {
  draw(10, 0, 10, 600);
};

frame3 = function () {
  draw(0, 5, 100, 5);
};

frame4 = function () {
  draw(80, 5, 80, 30);
};

torso = function () {
  draw(80, 60, 80, 100);
};

rightArm = function () {
  draw(80, 60, 120, 80);
};

leftArm = function () {
  draw(80, 60, 40, 80);
};

rightLeg = function () {
  draw(80, 100, 120, 120);
};

leftLeg = function () {
  draw(80, 100, 40, 120);
};



var animate = function () {
  if (lives == 9) {
    frame1()
  }
  if (lives == 8) {
    frame2()
  }
  if (lives == 7) {
    frame3()
  }
  if (lives == 6) {
    frame4()
  }
  if (lives == 5) {
    head()
  }
  if (lives == 4) {
    torso()
  }
  if (lives == 3) {
    leftArm()
  }
  if (lives == 2) {
    rightArm()
  }
  if (lives == 1) {
    leftLeg()
  }
  if (lives == 0) {
    rightLeg()
  }
}

function getHint() {
  if (hintArr == 0) {
    hint.innerHTML = "Hint: None!"
  }

  var hintText = hintArr.get(selectWord2)
  hint.innerHTML = "Hint: " + "</br>" + hintText
}


