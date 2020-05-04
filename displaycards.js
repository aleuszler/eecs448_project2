//This file displays the cards on the HTML table for the user to interact with

var cardAmt = 8; //cardAmt is the amount of cards that will be displayed on the board, the starting card amount is 8 cards 
var matchedcount = 0;

window.addEventListener("load", setupCards(cardAmt)); //loads the specified card amounts when function is called

//Pulls an card from arrayofcards.js
function getRandomItem()
{
  var item = cardarray[Math.floor(Math.random() * cardarray.length)]; //getting a random card from the array of cards
  if (randomarray != []) //enters when the array is not empty
  {
    //check if array has the current random card
    if (randomarray.includes(item))
    {
      //if card has already been picked it reruns function
      // console.log("item repeated", item);
      item = getRandomItem(); //setting the item as the function to get a card that is not a repeated card
    }
  }
  return item; //return the item card
}

//sets array to be different/shuffled for every level
function shufflecards(array)
{
  let currentIndex = array.length, //setting current index to array length
    temporaryValue, //creating a temporary value
    randomindex; //creating a random index value

  //sorts array into the new shuffled order
  while (currentIndex !== 0)
  {
    randomindex = Math.floor(Math.random() * currentIndex); //determining a random value and storing it in random index
    currentIndex -= 1; //subtracting current index by 1 so there is no infinite loop

    temporaryValue = array[currentIndex]; //setting temporaryValue to the array value at the currentIndex
    array[currentIndex] = array[randomindex]; //setting the array value at current index to the array value at a random index
    array[randomindex] = temporaryValue; //setting the randomvalue index card to the temporaryValue
  }
  return array; //returning the shuffled array
}

//creates initial array of cards for game
function createCardArray(currLength)
{
  let index = 0; //setting index to 0
  for (let i = 0; i < currLength; i++)
  {
    randomarray[index] = getRandomItem(); //pulls a random card see line 8
    randomarray[index + 1] = randomarray[index]; //duplicates the card pulled so there is a pair
    index = index + 2; //skips to the location of the next pair of cards so you are not duplicating the same card
  }
  // console.log(randomarray);
  randomarray = shufflecards(randomarray); //shuffles the array of paired cards see line 25
  // console.log(randomarray);
}

//sets up the Game.html screen
function setupCards(total)
{
  randomarray = []; //creating random array 
  matchedcount = 0;
  createCardArray(total / 2); //calling createCardArray to initialize the array of cards for the game
  let perrow = total / 2; //setting the perrow value for the board

  if (perrow > 6) //if perrow value is greater than 6
  {
    perrow = 6; //set perrow to 6
  }
  //creating the table to display the cards on the Game.html board
  html = "<table align='center'><tr>"; //aligning the table to the center of the page
  for (let i = 0; i < total; i++) {
    let imgID = i + randomarray[i].name; //defining imgID
    //creating the board/table
    html +=
      "<td bgcolor='black'><div><img id='" +
      imgID +
      "' src='https://i.imgur.com/iSazVxA.png' onClick='revealCard(this.id)'></div>" + //on click reveals the card
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
  count=0; //setting the counter to 0
  document.getElementById("count").innerHTML=count; //displaying the counter

  //Checking to see if the user is at level 1 (the game starts with 8 cards on the board)
  if (cardAmt == 8)
  {
    alert("No previous levels.");
  }
  else
  {
    cardAmt = cardAmt - 2; //decreased the card amount by 2 cards so the amount of cards stays even
    setupCards(cardAmt); //setting up the cards with the new updated card amount on the board
  }
}

//function goes to the next level and shows the correct number of cards on the board, the amount of cards differs by 2 cards per level
function nextLevel()
{
  count=0; //setting the counter to 0
  document.getElementById("count").innerHTML=count; //displaying the counter

  //Checking if the user has reached the max level and alerting the user that there is no other level
  if (cardAmt > 17)
  {
    alert("Max level reached!");
  }
  else
  {
    cardAmt = cardAmt + 2; //increasing the card amount by 2 cards so the amount of cards stays even
    setupCards(cardAmt); //setting up the cards with the new updated card amount on the board
  }
}
