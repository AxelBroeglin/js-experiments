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
console.log(boxArray.length)

function createBoard () {
    boxArray.forEach(box => {
    console.log(boxArray.length)
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');
    // boxDiv.addEventListener('click', fillBox);
    document.querySelector('#box-container').appendChild(boxDiv);
    });
}
createBoard ();