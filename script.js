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

let player = [0]; // keep track of every card in the array then add them to get scores
let dealer = [0];

//prompt user to play game - if play = true start game otherwise reload prompt
function User_Start() {
  let play = "Would you like to play Blackjack ? \nEither OK or Cancel.";
  if (confirm(play) == true) {
    Start_Game();
  } else {
    prompt("You canceled!");
    User_Start();
  }
}

function Start_Game() {
  console.log("You started the game");
  Deal();
}

function Deal() {
  console.log("Dealing");
  player.push = Math.random(22);
}

//running above functions to test behaviour
User_Start();
