const players = function(name, marker) {
    return {name, marker}
};
// factory for making players and symbols

const playerOne = players("Player 1", "X");
const playerTwo = players("Player 2", "O");
//actual creation of players


const gameBoard = (()=>{
    board = [];
    for (let i = 0; i < 9; i++){
       board.push('');
    }
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

    let box = document.querySelectorAll('.box');
    for (let i =0; i < box.length; i++){
        box[i].addEventListener('click', ()=>{
            if (box[i].textContent == false){
                let t = document.createTextNode(game.activePlayer.marker);
                box[i].appendChild(t);
                let dataId = parseInt(box[i].dataset.id);
                board.splice(dataId,1,t.textContent);
                // to actually splice into the array and insert data
                game.openSpaces = game.openSpaces - 1;
                game.checkWinner();
                game.switchPlayer();
            } 
        })
    }  

    function finshGame() {
        let box = document.querySelectorAll('.box');
        for (let i = 0; i < board.length; i++){
            if (box[i].textContent == false){
                box[i].classList.add('filler');
                box[i].textContent = '.';
            }
        }
        let message = document.getElementById('message');
        let t = document.createTextNode(`Congratulations ${game.activePlayer.name}`);
        message.appendChild(t);
        const button = document.createElement('button');
        message.appendChild(button);
        buttonSelector = document.querySelector('button');
        button.addEventListener('click', ()=>{
            for (let i = 0; i < board.length; i++){
                box[i].textContent = '';
            }
            message.removeChild(button);
            message.removeChild(t);
            game.openSpaces = board.length;
            game.activePlayer = playerOne;
            for (let i = 0; i<board.length; i++){
                board.splice(i,1,'');
                box[i].classList.remove('filler');
            }
        });
    }   
    // overall logic
    return {
        board,
        finshGame,
    }



})();

const game = (() => {
    let openSpaces = board.length;
    let activePlayer = playerOne;

    function checkWinner (){
            if ((board[0] == game.activePlayer.marker && board[1] == this.activePlayer.marker) && (board[0] == this.activePlayer.marker && board[2] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[0] == game.activePlayer.marker && board[3] == this.activePlayer.marker) && (board[0] == this.activePlayer.marker && board[6] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[0] == game.activePlayer.marker && board[4] == this.activePlayer.marker) && (board[0] == this.activePlayer.marker && board[8] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[2] == game.activePlayer.marker && board[5] == this.activePlayer.marker) && (board[2] == this.activePlayer.marker && board[8] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[2] == game.activePlayer.marker && board[4] == this.activePlayer.marker) && (board[2] == this.activePlayer.marker && board[6] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[6] == game.activePlayer.marker && board[7] == this.activePlayer.marker) && (board[6] == this.activePlayer.marker && board[8] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[1] == game.activePlayer.marker && board[4] == this.activePlayer.marker) && (board[1] == this.activePlayer.marker && board[7] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if ((board[3] == game.activePlayer.marker && board[4] == this.activePlayer.marker) && (board[3] == this.activePlayer.marker && board[5] == this.activePlayer.marker)){
                console.log('winner');
                gameBoard.finshGame();
            } else if (game.openSpaces == 0){
                console.log('Tie Game');
            }
        
    }

    function switchPlayer (){
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
    }
    return {
        openSpaces,
        activePlayer,
        checkWinner,
        switchPlayer
    }

})();


//needs this. to tie the change to the window otherwise the change never saves
//THIS IS BECAUSE the function and object are pointing to the window

