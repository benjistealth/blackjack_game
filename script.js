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
    StartGame();
  } else {
    // re-ask the question "Would you like to play Blackjack?" to basically wait until someone wants to play
    UserStart();
  }
}

function StartGame() {
  console.log("You started the game");
  if (player.length === 0) {
    player_score = Deal();
    dealer_score = Deal();
    console.log("Player Initil Score : " + player_score);
    console.log("Dealer Initil Score : " + dealer_score);
  }
  else {
    player_score = Twist();
    dealer_score = Twist();
    console.log("Player total Score : " + player_total);
    console.log("Dealer total Score : " + dealer_total);
  }
}
//function to deal cards- may split into payer and dealer later
function Deal() {
  console.log("Initial Deal...");
  let min = 2;
  let max = 22;
  min = Math.ceil(min);
  max = Math.floor(max);
  // let player_score = Twist(2, 12);//need a condition here to swap between 2-21(2 cards initial deal) 4-11(twist)
  // player.push(player_score);//add a random score to the player array
  // console.log("player score : " + player_score);//keep last score in here
  let score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  // score = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  return score;
}
//function to generate a twist
function Twist() {
  let min = 4;
  let max = 12;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
//add up player scores
function PlayerTotal() {
  for (let i = 0; i < player.length; i++) {
    player_total += player[i];
  }
  return player_total;
}
//add up dealer scores
function DealerTotal() {
  for (let i = 0; i < dealer.length; i++) {
    dealer_total += dealer[i];
  }
  return dealer_total;
}



//running above functions to test behaviour by starting the game
UserStart();
