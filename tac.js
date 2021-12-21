const gameBoard = (()=>{
    board = ['X','X','X','X','O','X','O','O','O']
    return board
})();

const players = function(name) {
    return {name}
};

for (let i = 0; i < board.length; i++){
    row = table.insertRow(-1); //creates tr 
    for (choice in board[i]){
        //const top = document.getElementById('top');
        //top.textContent = board[i];
        let row ='';
        let cell = row.insertCell(-1);
        cell.textContent=`${choice}: ${board[i][choice]}`
    }
}