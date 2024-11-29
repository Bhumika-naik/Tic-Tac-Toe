import React, { useState } from 'react';
import '../App.css'; 
function TicTacToe() {
  const [board, setBoard] = useState(Array(16).fill(null)); 
  
  const [isXNext, setIsXNext] = useState(true); 
 
  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return; 
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O'; 
    setBoard(newBoard); 
    setIsXNext(!isXNext);
  };
 
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]} {/* Display X or O */}
      </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2,6,10],[1,2,3,7,11], [2,3,7,11,15],[0,4,8,9,10],
      [4,5,6,10,14],[5,6,7,11,15],[6,5,4,8,12],[7,6,5,9,13] ,
      [8,9,10,6,2],[9,10,11,7,3] ,[12,13,14,10,6],[13,14,15,11,7],
      [5,9,13,14,15],[4,8,9,10,11],[3,7,11,10,9],[14,10,6,2,1],
      [15,11,7,3,2], [2,1,5,9,13],[2,1,0,4,8,],[3,7,11,10,9],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c,d,e] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]  &&  squares[a] === squares[d]  && squares[a] === squares[e]) {
        return squares[a]; 
      }
    }
    return null; 
  };

  const resetGame = () => {
    setBoard(Array(16).fill(null)); 
    setIsXNext(true);
  };

  
  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe</h1>
      <h2>{status}</h2>
      <div className="board">
       
        {board.map((_, index) => renderSquare(index))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button> {/* Reset button */}
    </div>
  );
}

export default TicTacToe;
