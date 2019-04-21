//card script
var cards = [
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png",
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png",
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png",
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png",
    },


];
var cardsInPlay =[];

function checkForMatch(){
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else{ alert("sorry try again.")}

}

function flipCard(cardId){
    var cardOne = cards[0];
    cardsInPlay.push(cards[0].rank);

    var cardTwo = cards[2];
    cardsInPlay.push(cards[2].rank);

    console.log("user flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if(cardsInPlay.length === 2){
        checkForMatch();

    }


}

