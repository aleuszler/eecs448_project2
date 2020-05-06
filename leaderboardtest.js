console.log("=================");
console.log("Running Tests");
console.log("=================");

if(JSON.parse(window.localStorage.getItem('arrayofscores'))!=[])
{
  if((document.querySelector("#cards8").innerText)=="" && (document.querySelector("#cards10").innerText)=="" && (document.querySelector("#cards12").innerText)=="" && (document.querySelector("#cards14").innerText)=="" && (document.querySelector("#cards16").innerText)=="" && (document.querySelector("#cards18").innerText)=="")
  {
    console.log("Test for Local Storage - Failed: Data did not transfer");
  }
  else {
    console.log("Test for Local Storage - Passed: Data Transferred")
  }
}
else {
  console.log("The local storage is empty");
}



console.log("=============");
console.log("End of Testing");
console.log("==============");
