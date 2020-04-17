var flipped= [];
var flippedID= [];
var count=0;
var matched= [];
var randomarray = [];

function revealCard(cardID) {
  console.log(randomarray);
  var image = document.getElementById(cardID);
  console.log("cardID",cardID);
  // console.log("cardarray",cardarray);

  // var res=cardID.slice(1,15);


  if (
   image.src == "https://i.imgur.com/iSazVxA.png" &&
  !displayTwo()
 ) {
    for (let i = 0; i < cardarray.length; i++) {
      if (cardID.includes(cardarray[i].name)) {
        image.src = cardarray[i].image;
if(flipped.length > 1)
  {
    flipped=[];
    flipped.push(image.src);
    flippedID=[];
    flippedID.push(cardID);
  }
  else {
    flipped.push(image.src);
    flippedID.push(cardID);
  }
        if(flipped[0]==flipped[1])
        {
         document.getElementById("Match").innerHTML="Match Made";
         count=count+1;
         document.getElementById("count").innerHTML=count;
         // document.getElementById(cardID).style.display="none";
	 matched.push(flipped[0]);
        }
        else {
          document.getElementById("Match").innerHTML="Match Not Found";
        // setTimeout(function(){ image.src = "https://i.imgur.com/iSazVxA.png"},2000);
        }
      }
    }
    setTimeout(function(){ if (flipped.length == 2) {
  for (let c = 0; c < flippedID.length; c++) {
    var cimage = document.getElementById(flippedID[c]);
    if (matched.length > 0) {
      for (let m = 0; m < count; c++) {
        if (cimage.src != matched[m]) {
	  cimage.src = "https://i.imgur.com/iSazVxA.png";
	}
      }
    }
    else {
      cimage.src = "https://i.imgur.com/iSazVxA.png";
      console.log ("reached");
    }
  }
  }},2000);
  }
  else {
    if (matched.length > 0) {
      for (let m = 0; m < count; c++) {
        if (image.src != matched[m]) { //if image is not one of the matched pairs
	  image.src = "https://i.imgur.com/iSazVxA.png";
   	  flipped=[];
	}
      }
    }
    else {
      image.src = "https://i.imgur.com/iSazVxA.png";
      flipped=[];
    }
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
  if ((imgs.length - notflippedCount - (2*count)) > 2) {
    return true;
  } else {
    return false;
  }

}
