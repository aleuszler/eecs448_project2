window.addEventListener("load", sortScores());

function sortArray() { //sort array from least to greatest, also set maximum length/size of 5
  
}

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
  
if (array8 != null) {
  for (let i = 0; i < array8.length; i++) {
    if (i > 0) {
	    document.querySelector("#cards8").innerText += ", " + array8[i];
	}
	else {
	    document.querySelector("#cards8").innerText = array8[i];
	}
  }
}
if (array10 != null) {
  for (let i = 0; i < array10.length; i++) {
    if (i > 0) {
	    document.querySelector("#cards10").innerText += ", " + array10[i];
	}
	else {
	    document.querySelector("#cards10").innerText = array10[i];
	}
  }
}
if (array12 != null) {
  for (let i = 0; i < array12.length; i++) {
    if (i > 0) {
	    document.querySelector("#cards12").innerText += ", " + array12[i];
	}
	else {
	    document.querySelector("#cards12").innerText = array12[i];
	}
  }
}
if (array14 != null) {
  for (let i = 0; i < array14.length; i++) {
    if (i > 0) {
	    document.querySelector("#cards14").innerText += ", " + array14[i];
	}
	else {
	    document.querySelector("#cards14").innerText = array14[i];
	}
  }
}
if (array16 != null) {
  for (let i = 0; i < array16.length; i++) {
    if (i > 0) {
	    document.querySelector("#cards16").innerText += ", " + array16[i];
	}
	else {
	    document.querySelector("#cards16").innerText = array16[i];
	}
  }
}
if (array18 != null) {
  for (let i = 0; i < array18.length; i++) {
    if (i > 0) {
	    document.querySelector("#cards18").innerText += ", " + array18[i];
	}
	else {
	    document.querySelector("#cards18").innerText = array18[i];
	}
  }
}
}