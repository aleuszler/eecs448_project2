//This file displays the cards on the HTML table for the user to interact with 

var cardAmt = 8; //cardAmt is the amount of cards that will be displayed on the board, the starting card amount is 8 cards 

window.addEventListener("load", setupCards(cardAmt)); //loads the specified card amounts when function is called 

//Pulls an card from arrayofcards.js
function getRandomItem() 
{
  var item = cardarray[Math.floor(Math.random() * cardarray.length)];
 
  //check if empty array already
  if (randomarray != []) 
  {
    //if card has already been picked it reruns function
    if (randomarray.includes(item)) 
    {
      console.log("item repeated", item);
      item = getRandomItem();
    }
  }
  return item;
}

//sets array to be different/shuffled for every level
function shufflecards(array) 
{
  let currentIndex = array.length,
    temporaryValue,
    randomindex;
    
  //sorts array into the new shuffled order
  while (currentIndex !== 0) 
  {
    randomindex = Math.floor(Math.random() * currentIndex); //determining a random value 
    currentIndex -= 1;

    temporaryValue = array[currentIndex]; //setting temporaryValye to the array value at the currentIndex
    array[currentIndex] = array[randomindex]; //setting the array value at current index to the array value at a random index 
    array[randomindex] = temporaryValue; //setting the randomvalue index card to the temporaryValue 
  }
  return array;
}

//creates initial array of cards for game
function createCardArray(currLength) 
{
  let index = 0;
  for (let i = 0; i < currLength; i++)
  {
    randomarray[index] = getRandomItem();//pulls a random card
    randomarray[index + 1] = randomarray[index];//duplicates the card pulled so there is a pair
    index = index + 2;//skips to the location for the next pair
  }
  console.log(randomarray);
  randomarray = shufflecards(randomarray);//shuffles the array of paired cards 
  console.log(randomarray);
}

//sets up the Game.html screen/game board 
function setupCards(total) 
{
  randomarray = []; 
  createCardArray(total / 2); //calling createCardArray to initialize the array of cards for the game 
  let perrow = total / 2;

  if (perrow > 6) 
  {
    perrow = 6; 
  }
  
  //creating the table to display the cards on the Game.html board 
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

//function goes back to the previous level and shows the correct number of cards on the board, the amount of cards differs by 2 cards per level
function prevLevel()
{
  //Checking to see if the user is at level 1 (the game starts with 8 cards on the board) 
  if (cardAmt == 8) 
  {
    alert("No previous levels.");
  }
  else 
  {
    cardAmt = cardAmt - 2; //decrease the card amount by 2 cards so the amount of cards stays even 
    setupCards(cardAmt); //setting up the cards with the new updated card amount on the board 
  }
}

//function goes to the next level and shows the correct number of cards on the board, the amount of cards differs by 2 cards per level 
function nextLevel()
{
  if (cardAmt > 17) //Checking if the user has reached the max level and alerting the user that there is no other level
  {
    alert("Max level reached!");
  }
  else 
  {
    cardAmt = cardAmt + 2; //increasing the card amount by 2 cards so the amount of cards stays even 
    setupCards(cardAmt); //setting up the cards with the new updated card amount on the board
  }
}
