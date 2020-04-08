function revealCard(cardID) {
  var image = document.getElementById(cardID);
  console.log(cardID);
  console.log(cardarray);
  if (image.src == "https://i.imgur.com/iSazVxA.png") {
    for (let i = 0; i < cardarray.length; i++) {
      if (cardID.includes(cardarray[i].name)) {
        image.src = cardarray[i].image;
      }
    }
  }
  else
  {
    image.src = "https://i.imgur.com/iSazVxA.png";
  }
}