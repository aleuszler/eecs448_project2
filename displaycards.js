let cardElements = document.getElementsByClassName('gamecard');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('imgcard');
let imgElementsArray = [...imgElements];

function shufflecards(array)
{
    let currentIndex = array.length,
        temporaryValue,
        randomindex;

    while(currentIndex !== 0)
    {
        randomindex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    }
}

for(let i = 0; i < cardElementsArray.length; i++)
{
    cardElementsArray[i].addEventListener("click", displayCard);
}

function displayCard
{

}
