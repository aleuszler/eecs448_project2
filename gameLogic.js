function revealCard(cardID) {
  console.log(randomarray);
  var image = document.getElementById(cardID);
  console.log(cardID);
  console.log(cardarray);

  if (
    image.src == "https://i.imgur.com/iSazVxA.png" &&
    !displayTwo(randomarray)
  ) {
    for (let i = 0; i < cardarray.length; i++) {
      if (cardID.includes(cardarray[i].name)) {
        image.src = cardarray[i].image;
      }
    }
  } else {
    image.src = "https://i.imgur.com/iSazVxA.png";
  }
}
function displayTwo() {
  let notflippedCount = 0;
  let imgs = document.getElementById("container").getElementsByTagName("img");

  for (let i = 0; i < imgs.length - 1; i++) {
    if (imgs[i].src == "https://i.imgur.com/iSazVxA.png") {
      notflippedCount++;
    }
  }
  console.log(notflippedCount);
  if (imgs.length - notflippedCount > 2) {
    return true;
  } else {
    return false;
  }
}
