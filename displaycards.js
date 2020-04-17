var cardAmt = 8;

window.addEventListener("load", setupCards(cardAmt));

// var randomarray = [];

function getRandomItem() {//Pulls an card from arrayofcards.js
  var item = cardarray[Math.floor(Math.random() * cardarray.length)];
  if (randomarray != []) {
    //check if empty array already
    if (randomarray.includes(item)) {//if card has already been picked it reruns function
      console.log("item repeated", item);
      item = getRandomItem();
    }
  }
  return item;
}

function shufflecards(array) {//sets array to be different for every level
  let currentIndex = array.length,
    temporaryValue,
    randomindex;

  while (currentIndex !== 0) {//sorts array into the new shuffled order
    randomindex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomindex];
    array[randomindex] = temporaryValue;
  }
  return array;
}

function createCardArray(currLength) {//creates initial array of cards for game
  let index = 0;
  for (let i = 0; i < currLength; i++) {
    randomarray[index] = getRandomItem();//pulls a random card see line5
    randomarray[index + 1] = randomarray[index];//duplicates the card pulled so there is a pair
    index = index + 2;//skips to the location for the next pair
  }
  console.log(randomarray);
  randomarray = shufflecards(randomarray);//shuffles the array of paired cards see line 17
  console.log(randomarray);
}

function setupCards(total) {//sets up the Game.html screen
  randomarray = [];
  createCardArray(total / 2);
  let perrow = total / 2;

  if (perrow > 6) {
    perrow = 6;
  }
  html = "<table align='center'><tr>";
  for (let i = 0; i < total; i++) {
    let imgID = i + randomarray[i].name;

    html +=
      "<td bgcolor='black'><div><img id='" +
      imgID +
      "' src='https://i.imgur.com/iSazVxA.png' onClick='revealCard(this.id)'></div>" +//on click reveals the card
      "</td>";
    var next = i + 1;
    if (next % perrow == 0 && next != total) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";
  document.getElementById("container").innerHTML = html;
}

function prevLevel()
{
  if (cardAmt == 8) {
    alert("No previous levels.");
  }
  else {
    cardAmt = cardAmt - 2;
    setupCards(cardAmt);
  }
}

function nextLevel()
{
  if (cardAmt > 17) {
    alert("Max level reached!");
  }
  else {
    cardAmt = cardAmt + 2;
    setupCards(cardAmt);
  }
}