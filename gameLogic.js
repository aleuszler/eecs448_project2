//This file contains the the game logic for the memory game so it functions properly 

let card1IDHolder; //creating an ID called card1IDHolder to keep track of the first card that is flipped every turn
let card2IDHolder; //creating an ID called card2IDHolder to keep track of the second card that is flipped every turn
let matchCard = []; //creating a matchCard array 
var randomarray = []; //creating a random array 
var count=0; //creating count variable to keep track of the amount of moves
let isTimeout=false //isTimeout is a variable that is used to track the flipped and matched cards 
matchCard.length = randomarray.length; //setting matchCard array length to be the same as the randomarray length
var matchedcount = 0;

function Score (total, moves)
{
  this.scoreTotal= total;
  this.scoreMoves = moves;
}

if(JSON.parse(window.localStorage.getItem('arrayofscores'))!=null) {
  var  scoresArray =JSON.parse(window.localStorage.getItem('arrayofscores'))
}
else {
  var scoresArray = [];
}

//This function starts and controls the game
function revealCard(cardID) 
{
  console.log(randomarray);
  var image = document.getElementById(cardID); //defining the varaiable image by getting the getting the cardID
  console.log(cardID);
  console.log(cardarray);
  //enters if the card is face down (back of the card image is showing) and isTimeout is true 
  if (
    image.src == "https://i.imgur.com/iSazVxA.png" &&
    !isTimeout
  ) 
  {
    for (let i = 0; i < cardarray.length; i++) 
    {
      if (cardID.includes(cardarray[i].name)) //enters if the cardId includes the name that is specified in cardarray at index i 
      {
        image.src = cardarray[i].image; //defining image.src to be the cardarray image at index i
      }
    }
    if (card2IDHolder != null && card1IDHolder != image) //enters if the card2IDHolder is not null and the card1IDHolder does not equal the image 
    {
      //sets a cardholderID to check for a match 
      card1IDHolder = image;
    } 
    else if (card1IDHolder != image) //enters card1IDHolder does not equal the image 
    {
      //sets the second cardholderID for match
      card2IDHolder = image;
    }
    count=count+1; //increases the move counter by 1 
    document.getElementById("count").innerHTML=count; //displays the updated move counter
    console.log("card1");
    console.log(card1IDHolder.src);
    console.log("card2");
    console.log(card2IDHolder.src);
    if (card1IDHolder != undefined && card2IDHolder != undefined) //enters if both cardholderID's are not undefined
    {
      if (card1IDHolder.src != card2IDHolder.src) //only enters if the cards associated with each cardholderID's DO NOT match 
      {
        //after 2 seconds if the cards didn't match reflips them
        isTimeout=true //setting isTimeout to true 
        //setTimeout will flip the selected cards over
        setTimeout(() => {
          card1IDHolder.src = "https://i.imgur.com/iSazVxA.png"; //setting the card1IDHolder.src to the back of the card
          card2IDHolder.src = "https://i.imgur.com/iSazVxA.png"; //setting the card2IDHolder.src to the back of the card
          card1IDHolder = undefined; //sets card1IDHolder to undefined 
          card2IDHolder = undefined; //sets card2IDHolder to undefined 
          isTimeout=false //setting isTimeout to false so the if statement at line 19 ends 
        }, 1000);
      } 
      else //enters if the cards associated with each cardholderID's MATCH
      {
        card1IDHolder = undefined; //sets card1IDHolder to undefined so the game can continue 
        card2IDHolder = undefined; //sets card2IDHolder to undefined so the game can continue 
        matchedcount = matchedcount+2;
        console.log (matchedcount);
        console.log (cardAmt);
        if (matchedcount == cardAmt) {
            let newScore = new Score(cardAmt, count)
	        scoresArray.push(newScore);
          	window.localStorage.setItem('arrayofscores',JSON.stringify(scoresArray));
	        console.log(JSON.parse(window.localStorage.getItem('arrayofscores')));
		}
      }
    }
  } 
  else //enters when the img.src is not the back of the card and isTimeout is false 
  {
    if (card1IDHolder == image) //enters is card1IDHolder is equal to the image selected 
    {
      //below if functions make IDholder for said image undefined if unselected lines 22 to 27
      card1IDHolder = undefined;
    } 
    else if (card2IDHolder == image) //enters is card2IDHolder is equal to the image selected 
    {
      //below if functions make IDholder for said image undefined if unselected lines 22 to 27
      card2IDHolder = undefined; 
    }
  }
}
//NOT NEEDED FOR THE MOMENT
// function displayTwo() {
//   let notflippedCount = 0;
//   let imgs = document.getElementById("container").getElementsByTagName("img");
//
//   for (let i = 0; i < imgs.length - 1; i++) {
//     if (imgs[i].src == "https://i.imgur.com/iSazVxA.png") {
//       notflippedCount++;
//     }
//     }
//   console.log(notflippedCount);
//   if (imgs.length - notflippedCount > 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
