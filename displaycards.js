window.addEventListener("load", setupCards(8));

var cardarray=[];
var randomarray=[];

//for(var i=0; i<randomarray.length ;i++)
//{
//  var img=randomarray[i].image;
//  var imagecontainer=document.getElementById('image'+i);
//  imagecontainer.innerHTML='<img src="'+img+'">';
//  var copyimg=valuelist[i].image;
//  var imagecontainer=document.getElementById('copy'+i);
//  imagecontainer.innerHTML='<img src="'+copyimg+'">';
//}


function getRandomItem () {
  var item = cardarray[Math.floor(Math.random()*10)];
  if(randomarray != []) { //check if empty array already
    if (randomarray.includes(item)) {
      console.log("item repeated", item);
      item=getRandomItem();
    }
  }
    return item;
}

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

function createCardArray(currLength) {
  let index = 0;
  for (let i = 0; i < currLength; i++)
  {
    randomarray[index]=getRandomItem();
    randomarray[index+1]=getRandomItem();
    index=index+2;
  }
  console.log(randomarray);
  randomarray = shufflecards(randomarray);
  console.log(randomarray);
}

function setupCards(total) {
randomarray=[];
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

  createCardArray(total/2);
  let perrow = total/2;
  if (perrow > 6) {
    perrow = total/3;
  }
  html = "<table align='center'><tr>";
  for (let i = 0; i < total; i++) {
    let imgID = randomarray[i].name;
    html += "<td bgcolor='black'><div><img id='"+imgID+"' src='https://i.imgur.com/iSazVxA.png' onClick='revealCard(this.id)'></div>" + "</td>";
    var next = i+1;
    if (next%perrow==0 && next!=total) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";
  document.getElementById("container").innerHTML=html;
}
