var flipped=new Array();
var count=0;

function revealCard(cardID) {
  console.log(randomarray);
  var image = document.getElementById(cardID);
  console.log("cardID",cardID);
  // console.log("cardarray",cardarray);

  var res=cardID.slice(1,15);
  if(flipped.length > 2)
  {
    flipped=[];
  }
  else {
    flipped.push(res);
  }
  console.log(res);
  console.log("flipped array",flipped)



  if (
   image.src == "https://i.imgur.com/iSazVxA.png" &&
   !displayTwo(randomarray)
 ) {
   for (let i = 0; i < cardarray.length; i++) {
     if (cardID.includes(cardarray[i].name)) {
       image.src = cardarray[i].image;
       if(flipped[0]==flipped[1])
       {
         document.getElementById("Match").innerHTML="Match Made";
         count=count+1;
         document.getElementById("count").innerHTML=count;
         displayTwo();

       }
       else {
        document.getElementById("Match").innerHTML="Match Not Found";
       }
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
