//card script
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];

function checkForMatch(){
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else{ alert("sorry try again.")}

}

function flipCard(cardId){
    var cardOne = cards[0];
    cardsInPlay.push(cardOne);

    var cardTwo = cards[2];
    cardsInPlay.push(cardTwo);

    if(cardsInPlay.length === 2){
        checkForMatch();

    }


}

