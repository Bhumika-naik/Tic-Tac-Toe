import React, { useState } from 'react';
import '../App.css'; // Correct path to import App.css from the src folder

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid as a flat array of 9 elements
  const [isXNext, setIsXNext] = useState(true); // Tracks which player's turn it is

 
  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return; 
    const newBoard = board.slice(); // Copy current board
    newBoard[index] = isXNext ? 'X' : 'O'; // Set the current player (X or O)
    setBoard(newBoard); // Update the board state
    setIsXNext(!isXNext); // Toggle turn to the next player
  };

  // Function to render each square (button)
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]} {/* Display X or O */}
      </button>
    );
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
      [0, 4, 8], [2, 4, 6], // Diagonal lines
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return winner ('X' or 'O')
      }
    }
    return null; // No winner yet
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reset the board to all null values
    setIsXNext(true); // Reset the turn to X
  };

  
  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1> {/* Title */}
      <h2>{status}</h2> {/* Display the status (winner or current player) */}
      <div className="board">
        {/* Render 9 squares */}
        {board.map((_, index) => renderSquare(index))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button> {/* Reset button */}
    </div>
  );
}

export default TicTacToe;
