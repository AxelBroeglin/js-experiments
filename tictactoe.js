let boxArray = [
    {
        'box' : 'box',
        'sign' : 'O'
    },    
    {
        'box' : 'box',
        'sign' : 'X'
    },    
    {
        'box' : 'box',
        'sign' : ''
    },    
    {
        'box' : 'box',
        'sign' : ''    
    },    
    {
        'box' : 'box',
        'sign' : ''    
    },    
    {
        'box' : 'box',
        'sign' : ''    
    },    
    {
        'box' : 'box',
        'sign' : ''    
    },    
    {
        'box' : 'box',
        'sign' : ''    
    },    
    {
        'box' : 'box',
        'sign' : ''        
    }
];
console.log(boxArray);
//BOARD
const board = (() => {
    const box = boxArray.forEach(box => {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        document.querySelector('#box-container').appendChild(boxDiv);
        });
    return {box};
})();


for (var i = 0; i < boxArray.length; i++){
    console.log(boxArray[i].sign);
  }



//PLAYERS
const playersFactory = (name, sign) => {
    return {name, sign};
};
const player1 = playersFactory('Player 1', 'X');
const player2 = playersFactory('Player 2', 'O');

//GAMEFLOW
//Only empty boxes can be clicked (lose <a> and cursor)
//Must contain add.eventlistener for each box, check if box occupied by checking sign in array, if not occupied, charge sign in array.
//checks if 3 in a row
//other player (count++, even/odd number to define who plays ?)

  const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy); // jim has damaged jeff

