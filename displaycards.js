var cardAmt = 8;

window.addEventListener("load", setupCards(cardAmt));

function getRandomItem() {
  var item = cardarray[Math.floor(Math.random() * cardarray.length)];
  if (randomarray != []) {
    //check if empty array already
    if (randomarray.includes(item)) {
      console.log("item repeated", item);
      item = getRandomItem();
    }
  }
  return item;
}

function shufflecards(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomindex;

  while (currentIndex !== 0) {
    randomindex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomindex];
    array[randomindex] = temporaryValue;
  }
  return array;
}

function createCardArray(currLength) {
  let index = 0;
  for (let i = 0; i < currLength; i++) {
    randomarray[index] = getRandomItem();
    randomarray[index + 1] = randomarray[index];
    index = index + 2;
  }
  console.log(randomarray);
  randomarray = shufflecards(randomarray);
  console.log(randomarray);
}

function setupCards(total) {
  randomarray = [];
  createCardArray(total / 2);
  let perrow = total / 2;

  if (perrow > 6) {
    perrow = 6;
console.log(perrow);
  }
  html = "<table align='center'><tr>";
  for (let i = 0; i < total; i++) {
    let imgID =i+randomarray[i].name;

    html +=
      "<td bgcolor='black'><div><img id='" +
      imgID +
      "' src='https://i.imgur.com/iSazVxA.png' onClick='revealCard(this.id)'></div>" +
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