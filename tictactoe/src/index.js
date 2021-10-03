import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({ value, makeMove }) {

  return (
    <button className="square"
      onClick={makeMove}
    >
      {value}
    </button>
  );
}

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isPlayerOnesTurn , setIsPlayerOnesTurn] = useState(true)

  const [playerOneName, setPlayerOneName] = useState('none yet')
  const [playerTwoName, setPlayerTwoName] = useState('none yet')

  const [currentPlayerName, setCurrentPlayerName] = useState(playerOneName)

  const gameOver = (s) => {
    const isWinningCombination = (line) => {
      if (line[0] !== null) {
        return line.every(e => e === line[0])
      }
      return false
    }
    const winningCombinations = 
    [
     [s[0], s[1], s[2]], [s[3], s[4], s[5]], [s[6], s[7], s[8]], //rows
     [s[0], s[3], s[6]], [s[1], s[4], s[7]], [s[2], s[5], s[8]], // columns
     [s[0], s[4], s[8]], [s[2], s[4], s[6]] // diagonals
   ] 
    
    const winningPlayer = winningCombinations.findIndex(line => {
      return isWinningCombination(line)
    })

    if (winningPlayer != -1) {
      alert(s[winningPlayer] + ' is the winner')
    }
  }

  const updatePlayerName = (i) => (e) => {
    i === 0 ? setPlayerOneName(e.target.value) : setPlayerTwoName(e.target.value)
  }

  function renderSquare(i) {
    
    return <Square
      value={squares[i]}
      makeMove={ 
        () => {
          const nextSquares = squares.slice()
          nextSquares[i] = isPlayerOnesTurn ? 'x' : 'o'
          setIsPlayerOnesTurn(!isPlayerOnesTurn)
          setSquares(nextSquares)
          setCurrentPlayerName(!isPlayerOnesTurn ? playerOneName : playerTwoName)
          gameOver(nextSquares)
        }
      } />;
  }

  return (  
    <div>
      <div className="status">Enter first player name:<input name="playerOne" onChange={updatePlayerName(0)}/></div>
      <div className="status">Player 1:{playerOneName}</div>

      <div className="status">Enter second player name:<input name="playerTwo" onChange={updatePlayerName(1)}/></div>
      <div className="status">Player 2:{playerTwoName}</div>

      <div className="status">Up now:{currentPlayerName}</div>

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


