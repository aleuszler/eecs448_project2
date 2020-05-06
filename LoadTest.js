console.log("=================");
console.log("Running Tests");
console.log("=================");


checkmovescount();
checklevels();
checkmatches();
//make sure all values in array are unique
//https://www.techiedelight.com/check-array-contains-duplicates-javascript/
function checkuq () {
  return new Set(randomarray).size !== randomarray.length;
}

if(!checkuq(randomarray))
{
  console.log("Test for Duplicates in Array - Passed: No Duplicates Found")
}
else if(checkuq(randomarray))
{
  console.log("Test for Duplicates in Array - Failed: Duplicates Found");
}


function checkmovescount () {
  if(document.getElementById("count")<1 ||document.getElementById("count").innerHTML==0)
  {
    console.log("Test for Counter - Passed : The counter for moves is clear");
  }
  else{
    console.log("Test for Counter - Failed : The counter for moves is not clear");
    console.log(document.getElementById("count").innerHTML);
  }
}

function checkmatches () {
  if(matchedcount==0)
  {
    console.log("Test for Matches - Passed : All of the matches are cleared")
  }
  else {
    console.log("Test for Matches - Failed : All of the matches are not cleared");
  }
}


//check number of cards with new level

function checklevels () {
  document.getElementById("next").click();
  if(cardAmt>cardAmt+2)
  {
    console.log("Check Failed -- Too many cards");
  }
  else {
    console.log("nextlevel() function passed");
  }
  document.getElementById("prev").click();
  if(cardAmt<8)
  {
    console.log("There are not enough cards");
  }
  else {
    console.log("prevlevel() function passed");
  }

}

console.log("=============");
console.log("End of Testing");
console.log("==============");
