var randomarray=new Array(4);
var cardarray=new Array();
var valuelist=new Array();
var final;
cardarray = [
{name: 'spade A', image: 'https://i.imgur.com/MeM9CHv.png'},
{name: 'spade 2', image: 'https://i.imgur.com/0uGlxc9.png'},
{name: 'spade 3', image: 'https://i.imgur.com/8WKqNzB.png'},
{name: 'spade 4', image: 'https://i.imgur.com/MxJQMOy.png'},
{name: 'spade 5', image: 'https://i.imgur.com/fzTqJ3V.png'},
{name: 'spade 6', image: 'https://i.imgur.com/zzTpG1B.png'},
{name: 'spade 7', image: 'https://i.imgur.com/w7ceS1R.png'},
{name: 'spade 8', image: 'https://i.imgur.com/VzOg1cK.png'},
{name: 'spade 9', image: 'https://i.imgur.com/JFjcU47.png'},
{name: 'spade 10', image: 'https://i.imgur.com/NjDAVPG.png'}
];

for(var i=0; i<randomarray.length;i++)
{
  // var card=getRandomItem();
  randomarray[i]=getRandomItem();
  // randomarray[i]='<img src="'+card.image+'">';
}
console.log("randomarray", randomarray);

for(var i=0; i<randomarray.length;i++)
{
  // var card=getRandomItem();
  valuelist[i]=randomarray[i];
  // randomarray[i]='<img src="'+card.image+'">';
}
shufflecards(valuelist);
console.log("valuelist",valuelist);



for(var i=0; i<randomarray.length;i++)
{
  var img=randomarray[i].image;
  var imagecontainer=document.getElementById('image'+i);
  imagecontainer.innerHTML='<img src="'+img+'">';
  var copyimg=valuelist[i].image;
  var imagecontainer=document.getElementById('copy'+i);
  imagecontainer.innerHTML='<img src="'+copyimg+'">';
  // imagecontainer.innerHTML="";
  //
  // var itm = imagecontainer;
  // var cln =itm.cloneNode(true);

}


function getRandomItem () {
  var item = cardarray[Math.floor(Math.random()*cardarray.length)];

  if(randomarray.includes(item))
  {
      console.log("item repeated", item);
      // getRandomItem();
      item+=getRandomItem();
    }
    return item;

  }
//
//
// function randomplace (min,max)
// {
//   for(var i=0;i<valuelist.length;i++)
//   {
//   min=Math.ceil(min);
//   max=Math.floor(max);
//   var value=Math.floor(Math.random()*(max-min+1))+min;
//   if (valuelist.includes(value))
//   {
//   value=Math.floor(Math.random()*(max-min+1))+min;
// }
// else{
//   valuelist[i]=value;
// }
// }
// console.log(valuelist);
// var item = valuelist[Math.floor(Math.random() * valuelist.length)]
// return item;
// }
//
// function copyplace (min,max)
// {
//   for(var i=0;i<valuelist.length;i++)
//   {
//   min=Math.ceil(min);
//   max=Math.floor(max);
//   var value=Math.floor(Math.random()*(max-min+1))+min;
//   if (valuelist.includes(value))
//   {
//   value=Math.floor(Math.random()*(max-min+1))+min;
// }
// else{
//   valuelist[i]=value;
// }
// }
// console.log(valuelist);
// var item = valuelist[Math.floor(Math.random() * valuelist.length)]
// return item;
// }




// let cardElements = document.getElementsByClassName('gamecard');
// let cardElementsArray = [...cardElements];
// let imgElements = document.getElementsByClassName('imgcard');
// let imgElementsArray = [...imgElements];

function shufflecards(array)
{
    let currentIndex = array.length,temporaryValue,randomindex;

    while(currentIndex !== 0)
    {
        randomindex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue=array[currentIndex];
        array[currentIndex]=array[randomindex];
        array[randomindex]=temporaryValue;
    }
    return array;
}
//
// for(let i = 0; i < cardElementsArray.length; i++)
// {
//     cardElementsArray[i].addEventListener("click", displayCard);
// }

// function displayCard
// {
//
// }
