//Blackjack Game
//prompt user to start game 
//player gets a random number between 4 & 21 iinclusive
//if player gets 21 they win
//deals a random number to the dealer between 2 & 11 inclusive
//player hit or pass - if hit --> deal 2-11
//if(player >21){lose;}
//if(player===21){ stay;}
//repeat game until player stays or bust
//if player stays add 2-11 to dealers hand
//if dealer<17 --> hit
//if dealer >21 --> lose
//if stay --> do compare hand()
//
var player = []; // keep track of every card in the array then add them to get scores
var dealer = [];
var player_total = 0; //keep added score in here
var dealer_total = 0;
var player_score = 0; //keep added score in here
var dealer_score = 0;

//prompt user to play game - if play = true start game otherwise reload prompt
function UserStart() {
  let play = "Would you like to play Blackjack ? \nEither OK or Cancel.";
  if (confirm(play) == true) {
    PlayGame();
  } else {
    UserStart();
  }
}
//start playing the game
function PlayGame() {
  if (player.length === 0) { //check if it is the first hand
    console.log("You started the game !");
    Deal();
    PrintScores();
    StickorTwist();
  }
  else {
    StickorTwist(); //if not first hand only use 1 card
  }
}

function StickorTwist() {
  console.log("Press OK to Twist or Cancel to Stick.....");
  let twist = "Press OK to Twist or Cancel to Stick \nEither OK or Cancel.";
  if (confirm(twist) == true) {
    Twist();
    EvalWinner();
    PrintScores();
  }
  else {
    EvalWinner();
  }
  PrintScores();
}

//function to deal cards- may split into payer and dealer later
function Deal() {
  console.log("Initial Deal for player and dealer.....");
  let min = 2;
  let max = 22;
  min = Math.ceil(min);
  max = Math.floor(max);
  player_score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  dealer_score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  player.push(player_score);
  dealer.push(dealer_score);
}
//function to generate a twist
function Twist() {
  DoTotals();
  if (player_total < 21) {
    let min = 4;
    let max = 12;
    min = Math.ceil(min);
    max = Math.floor(max);
  //Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  player_score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  player.push(player_score);
  }
  else if (dealer_total <= 17) {
    dealer_score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive 
    dealer.push(dealer_score);
  }
  dealer.push(0); //could break DoTotals() function otherwise
} //ensure the dealer and player arrays are the same length if player twists and dealer doesn't


//add up player scores - create add scores function to replace these and pass in arrays instead
function DoTotals() {
  player_total = 0;
  dealer_total = 0;
  for (let i = 0; i < player.length; i++) {
    player_total += player[i];
    dealer_total += dealer[i];
  }
}
//condition ? exprIfTrue : exprIfFalse
// function EvalWinner() {
//   DoTotals();
//   ((dealer_total > player_total) || (player_total > 21)) ? console.log("Dealer Wins") : console.log("Player Wins");
//   ((dealer_total < player_total) || (dealer_total > 21)) ? console.log("Player Wins") : console.log; ("Dealer Wins");
//   dealer_total === player_total ? console.log("Draw !!") : DoTotals();
// }
function EvalWinner() {
  DoTotals();
  if(player_total === 21) {console.log("Player Wins");}
  let eval = player_total - dealer_total;
  if (eval > 0) {console.log("Player Wins");}
  else if (eval < 0) {console.log("Dealer Wins");}
  else if(eval == 0) {console.log("Draw !!");}
}


//calculate the current totals and print scores out
function PrintScores() {
  DoTotals();
  console.log("Player Total : " + player_total);
  console.log("Dealer Total : " + dealer_total);
}

//running above functions to test behaviour by starting the game

// while ((player_total <= 21) && (dealer_total <= 21)) {
//   UserStart();
// }
UserStart();
