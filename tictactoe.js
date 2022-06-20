let boxArray = [
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
    },    
    {
        'box' : 'box'
        
    }
];


//BOARD
const board = (() => {
    const box = boxArray.forEach(box => {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        // boxDiv.addEventListener('click', fillBox);
        document.querySelector('#box-container').appendChild(boxDiv);
        });
    return {box};
})();



//PLAYERS
const playersFactory = (name, sign) => {
    return { name, sign};
};
  
const player1 = playersFactory('Player 1', 'X');
const player2 = playersFactory('Player 2', 'O');
  
console.log(player1.name);
