let card1IDHolder;
let card2IDHolder;
let matchCard = [];
var randomarray = [];
let isTimeout=false
matchCard.length = randomarray.length;
function revealCard(cardID) {
  console.log(randomarray);
  var image = document.getElementById(cardID);
  console.log(cardID);
  console.log(cardarray);
  if (
    image.src == "https://i.imgur.com/iSazVxA.png" &&
    !isTimeout
  ) {
    for (let i = 0; i < cardarray.length; i++) {
      if (cardID.includes(cardarray[i].name)) {
        image.src = cardarray[i].image;
      }
    }
    if (card2IDHolder != null && card1IDHolder != image) {
      //sets a cardholderID for checking match
      card1IDHolder = image;
    } else if (card1IDHolder != image) {
      //second cardholderID for match
      card2IDHolder = image;
    }
    console.log("card1");
    console.log(card1IDHolder.src);
    console.log("card2");
    console.log(card2IDHolder.src);
    if (card1IDHolder != undefined && card2IDHolder != undefined) {
      if (card1IDHolder.src != card2IDHolder.src) {
        //after 2 seconds if the cards didn't match reflips them
        isTimeout=true
        setTimeout(() => {
          card1IDHolder.src = "https://i.imgur.com/iSazVxA.png";
          card2IDHolder.src = "https://i.imgur.com/iSazVxA.png";
          card1IDHolder = undefined;
          card2IDHolder = undefined;
          isTimeout=false
        }, 1000);
      } else {
        card1IDHolder = undefined;
        card2IDHolder = undefined;
      }
    }
  } else {
    if (card1IDHolder == image) {
      //below if functions make IDholder for said image undefined if unselected lines 31 to 38
      card1IDHolder = undefined;
    } else if (card2IDHolder == image) {
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
