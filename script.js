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
    // re-ask the question "Would you like to play Blackjack?" to basically wait until someone wants to play
    UserStart();
  }
}

function PlayGame() {
  console.log("You started the game !");
  if (player.length === 0) {
    Deal();
    PrintScores();
  }
  else {
    StickorTwist();
  }
  PrintScores();
}

function StickorTwist() {
  let twist = "would you like to Twist or Stick ? \nEither OK or Cancel.";
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

function PrintScores() {
  PlayerTotal();
  DealerTotal();
  console.log("Player Total : " + player_total);
  console.log("Dealer Total : " + dealer_total);
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
  let min = 4;
  let max = 12;
  min = Math.ceil(min);
  max = Math.floor(max);
  Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  player_score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  player.push(player_score);
  if (dealer_score < 17) {
    dealer_score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive 
    dealer.push(dealer_score);
  }
}
//add up player scores - create add scores function to replace these and pass in arrays instead
function PlayerTotal() {
  for (let i = 0; i < player.length; i++) {
    player_total += player[i];
  }
  // PrintScores();
}
//add up dealer scores
function DealerTotal() {
  for (let i = 0; i < dealer.length; i++) {
    dealer_total += dealer[i];
  }
  // PrintScores();
}
//condition ? exprIfTrue : exprIfFalse
function EvalWinner() {
  dealer_total > player_total ? console.log("Dealer Wins") : console.log("Player Wins");
  dealer_total < player_total ? console.log("Player Wins") : console.log; ("Dealer Wins");
  dealer_total === player_total ? console.log("Draw !!") : PrintScores();
}

//running above functions to test behaviour by starting the game
UserStart();
