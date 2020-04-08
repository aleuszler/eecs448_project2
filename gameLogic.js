function revealCard(cardID) {
  var image = document.getElementById(cardID);
  console.log(cardarray);
  for (let i = 0; i < cardarray.length; i++) {
    if (cardarray[i].name = cardID) {
      image.src = cardarray[i].image;
    }
  }
}