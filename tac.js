const players = function(name, marker) {
    return {name, marker}
};
// factory for making players and symbols

const playerOne = players("player1", "X");
const playerTwo = players("player2", "O");
//actual creation of players


const gameBoard = (()=>{
    board = [];
    for (let i = 0; i < 9; i++){
       board.push('');
    }
    let openSpaces = board.length;
    //makes the board
    for (let i = 0; i < board.length; i++){
        const div = document.createElement('div');
        div.dataset.id = i;
        //unique identifer to get array position
        div.classList.add('box');
        if (i < 3){
            const top = document.getElementById('top');
            top.appendChild(div);
        } else if (i < 6){
            const middle = document.getElementById('middle');
            middle.appendChild(div);
        } else if (i < 9){
            const bottom = document.getElementById('bottom');
            bottom.appendChild(div);
        };
    }
    //renders board
    let activePlayer = '';
    this.activePlayer = playerOne;
    //the original this needs to be defined cuz you are using it 
    let box = document.querySelectorAll('.box');
    for (let i =0; i < box.length; i++){
        box[i].addEventListener('click', ()=>{
            if (box[i].textContent == false){
                let t = document.createTextNode(this.activePlayer.marker);
                box[i].appendChild(t);
                let dataId = parseInt(box[i].dataset.id);
                board.splice(dataId,1,t.textContent);
                // to actually splice into the array and insert data
                switchPlayer(activePlayer);
                game.openSpaces = game.openSpaces - 1;
                game.checkWinner();
            } 
        })
    }  

    return {
        board,
    }



})();

const game = (() => {
    let openSpaces = board.length;
    function checkWinner (){
            if ((board[0] == game.activePlayer.marker && board[1] == this.activePlayer.marker) && (board[0] == this.activePlayer.marker && board[2] == this.activePlayer.marker)){
                return console.log('winner');
            } else if (board[0] == board[3] && board[0] == board[6]){
                return console.log('winner');
            } else if (board[0] == board[4] && board[0] == board[8]){
                return console.log('winner');
            } else if (board[2] == board[5] && board[2] == board[8]){
                return console.log('winner');
            } else if (board[2] == board[4] && board[2] == board[6]){
                return console.log('winner');
            } else if (board[6] == board[7] && board[6] == board[8]){
                return console.log('winner');
            } else if (board[1] == board[4] && board[1] == board[7]){
                return console.log('winner');
            } else if (board[3] == board[4] && board[3] == board[5]){
                return console.log('winner');
            }
        
    }
    return {
        openSpaces,
        checkWinner,
    }

})();

function switchPlayer (activePlayer){
    this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
}
//needs this. to tie the change to the window otherwise the change never saves
//THIS IS BECAUSE the function and object are pointing to the window

