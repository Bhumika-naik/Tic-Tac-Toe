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
      [0, 1, 2,3], [4, 5,6,7], [8,9,10,11],[12,13,14,15],
      [0, 4, 8,12],[1,5,9,13],[2,6,10,14],[3,7,4,15] ,
      [0, 5,10,15],[3,6,9,12] ,
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c,d] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]  &&  squares[a] === squares[d] ) {
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
