var flipped=new Array();
var count=0;
var matched=new Array();

function revealCard(cardID) {
  console.log(randomarray);
  var image = document.getElementById(cardID);
  console.log("cardID",cardID);
  // console.log("cardarray",cardarray);
  var res=cardID.slice(1,15);
  if(flipped.length > 1)
  {
    flipped=[];
    flipped.push(res);
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
       }
       else {
        document.getElementById("Match").innerHTML="Match Not Found";
        // setTimeout(function(){ image.src = "https://i.imgur.com/iSazVxA.png"},2000);
       }
     }
   }
      setTimeout(function(){ if(document.getElementById("Match").innerHTML=="Match Not Found"){image.src = "https://i.imgur.com/iSazVxA.png"; flipped=[];}},2000);
       // else {
       //  image.src = "https://i.imgur.com/iSazVxA.png";
       //  flipped=[];
       // }
       console.log(count);
}

    if(count>=1)
    {
      console.log("here");
      for (let i = 0; i < cardarray.length; i++) {
      if (cardID.includes(cardarray[i].name)) {
        image.src = cardarray[i].image;
        if(flipped[0]==flipped[1])
        {
          document.getElementById("Match").innerHTML="Match Made";
          document.getElementById("count").innerHTML=count;
          if(count!=1 && count>0)
          {
            count=count+1;
          }
        }
        else {
         document.getElementById("Match").innerHTML="Match Not Found";
         // setTimeout(function(){ image.src = "https://i.imgur.com/iSazVxA.png"},2000);
        }
      }
    }
       setTimeout(function(){ if(document.getElementById("Match").innerHTML=="Match Not Found"){image.src = "https://i.imgur.com/iSazVxA.png"; flipped=[];}},2000);
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
