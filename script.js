
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')


const updateGame = (p1,p2,gameState) => {
  p1NameDiv.innerText = p1.name
  p2NameDiv.innerText = p2.name
  p1HealthDiv.innerText = p1.health
  p2HealthDiv.innerText = p2.health
  if(p1.health <= 0 ||p2.health <= 0){
    game.isOver = true 
    gameState = game.isOver
    resultDiv.innerText = game.declareWinner(isOver,p1, p2)
    return gameState
  }
}


class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  
  strike (player, enemy, attackDmg) {
    
    let damageAmount = Math.ceil(Math.random() * 10)
    enemy.health -= damageAmount
    updateGame(player, enemy, game.isOver)
    return `${player.name} attacks ${enemy.name} for ${damageAmount} damage!!`
    
  }
 
  heal (player) {
    
    

  }
}


class Game {
  constructor() {
    this.isOver = false;
  }

  
  declareWinner(isOver,p1, p2) {
    
   

  }

  
  reset(p1,p2) {
   

  }
  
  
  play(p1, p2) {
    
    while (!this.isOver) {
     
    }
    
    
  }

}

let player1 = new Player('Anika',100,10)
let player2 = new Player('Abir',100,10)

let p1 = player1;
let p2 = player2;

let game = new Game()
//console.log(game)
updateGame(p1,p2,game.isOver)
let gameState;



document.addEventListener('keydown', function(e) {
 

});

document.addEventListener('keydown', function(e) {
  
  
});


document.addEventListener('keydown', function(e) {
  
 

});

document.addEventListener('keydown', function(e) {
 
});



console.log(p1.strike(p1,p2,10))
