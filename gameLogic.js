let card1IDHolder;
let card2IDHolder;
function revealCard(cardID) {
  console.log(randomarray);
  var image = document.getElementById(cardID);
  console.log(cardID);
  console.log(cardarray);
  if (
     image.src == "https://i.imgur.com/iSazVxA.png" //&&
    // !displayTwo(randomarray)
  ) {
    for (let i = 0; i < cardarray.length; i++) {
      if (cardID.includes(cardarray[i].name)) {
        image.src = cardarray[i].image;
      }
    }
    if(card2IDHolder!=null && card1IDHolder!=image)//sets a cardholderID for checking match
    {
      card1IDHolder= image;
    }
    else if(card1IDHolder !=image)//second cardholderID for match
    {
      card2IDHolder=image;
    }
    console.log("card1");
    console.log(card1IDHolder);
    console.log("card2");
    console.log(card2IDHolder);
    if(card1IDHolder!=undefined && card2IDHolder!=undefined && card1IDHolder.src==card2IDHolder.src)//if cards match execute
    {
      card1IDHolder.removeEventListener('click', revealCard);//removes onclick from matched cards
      card2IDHolder.removeEventListener('click', revealCard);//removes onclick from matched cards
      card1IDHolder=undefined;//resets cardholder ID for next pair
      card2IDHolder=undefined;//resets cardholder ID for next pair
      console.log("did this happen?");
    }
    else{//after .75 seconds if the cards didn't match reflips them
      setTimeout(() =>{
      card1IDHolder.src="https://i.imgur.com/iSazVxA.png";
      card2IDHolder.src="https://i.imgur.com/iSazVxA.png";
      card1IDHolder=undefined;
      card2IDHolder=undefined;
    }, 750);
    }
  } else {
    if(card1IDHolder==image)//below if functions make IDholder for said image undefined if unselected lines 31 to 38
    {
      card1IDHolder=undefined;
    }
    else if(card2IDHolder==image)
    {
      card2IDHolder=undefined;
    }
    image.src = "https://i.imgur.com/iSazVxA.png";
    console.log("card1else");
    console.log(card1IDHolder);
    console.log("card2else");
    console.log(card2IDHolder);
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
