window.addEventListener("load", sortScores());

function sortScores() { //pulls from local storage and sorts based on how many cards the game had
  var scoreArray = JSON.parse(window.localStorage.getItem('arrayofscores'));
  var array8 = [];
  var array10 = [];
  var array12 = [];
  var array14 = [];
  var array16 = [];
  var array18 = [];
  console.log(scoreArray);
  for (let i = 0; i < scoreArray.length; i++) {
	if (scoreArray[i].scoreTotal === 8) {
	  array8.push(scoreArray[i].scoreMoves);
	}
    else if (scoreArray[i].scoreTotal === 10) {
	  array10.push(scoreArray[i].scoreMoves);
	}
    else if (scoreArray[i].scoreTotal === 12) {
	  array12.push(scoreArray[i].scoreMoves);
	}
    else if (scoreArray[i].scoreTotal === 14) {
	  array14.push(scoreArray[i].scoreMoves);
	}
    else if (scoreArray[i].scoreTotal === 16) {
	  array16.push(scoreArray[i].scoreMoves);
	}
    else if (scoreArray[i].scoreTotal === 18) {
	  array18.push(scoreArray[i].scoreMoves);
	}
  }
let max5 = 0;
if (array8 != null) {
array8.sort();
  if (array8.length < 6) {
    max5 = array8.length;
  }
  else {
    max5 = 5;
  }
    for (let i = 0; i < max5; i++) {
      if (i > 0) {
	    document.querySelector("#cards8").innerText += ", " + array8[i];
	}
	else {
	    document.querySelector("#cards8").innerText = array8[i];
	}
    }
}
if (array10 != null) {
array10.sort();
if (array10.length < 6) {
    max5 = array10.length;
  }
  else {
    max5 = 5;
  }
  for (let i = 0; i < max5; i++) {
    if (i > 0) {
	    document.querySelector("#cards10").innerText += ", " + array10[i];
	}
	else {
	    document.querySelector("#cards10").innerText = array10[i];
	}
  }
}
if (array12 != null) {
array12.sort();
if (array12.length < 6) {
    max5 = array12.length;
  }
  else {
    max5 = 5;
  }
  for (let i = 0; i < max5; i++) {
    if (i > 0) {
	    document.querySelector("#cards12").innerText += ", " + array12[i];
	}
	else {
	    document.querySelector("#cards12").innerText = array12[i];
	}
  }
}
if (array14 != null) {
array14.sort();
if (array14.length < 6) {
    max5 = array14.length;
  }
  else {
    max5 = 5;
  }
  for (let i = 0; i < max5; i++) {
    if (i > 0) {
	    document.querySelector("#cards14").innerText += ", " + array14[i];
	}
	else {
	    document.querySelector("#cards14").innerText = array14[i];
	}
  }
}
if (array16 != null) {
array16.sort();
if (array16.length < 6) {
    max5 = array16.length;
  }
  else {
    max5 = 5;
  }
  for (let i = 0; i < max5; i++) {
    if (i > 0) {
	    document.querySelector("#cards16").innerText += ", " + array16[i];
	}
	else {
	    document.querySelector("#cards16").innerText = array16[i];
	}
  }
}
if (array18 != null) {
array18.sort();
if (array18.length < 6) {
    max5 = array18.length;
  }
  else {
    max5 = 5;
  }
  for (let i = 0; i < max5; i++) {
    if (i > 0) {
	    document.querySelector("#cards18").innerText += ", " + array18[i];
	}
	else {
	    document.querySelector("#cards18").innerText = array18[i];
	}
  }
}
}