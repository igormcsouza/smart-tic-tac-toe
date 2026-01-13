import { useState, useEffect } from "react";
import Square from "./square";

function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function getRandomMove(squares: string[]): number {
  const emptySquares = squares
    .map((val, idx) => val === "" ? idx : -1)
    .filter(idx => idx !== -1);
  if (emptySquares.length === 0) return -1;
  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

interface BoardProps {
  opponentType: 'human' | 'ai';
  setGameState: (state: 'idle' | 'playing' | 'ended') => void;
}

export default function Board ({ opponentType, setGameState }: BoardProps) {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [turnPlayer, setTurnPlayer] = useState("X");
  
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== "");
  const gameOver = winner || isDraw;

  // Update game state
  useEffect(() => {
    if (gameOver) {
      setGameState('ended');
    } else if (squares.some(square => square !== "")) {
      setGameState('playing');
    } else {
      setGameState('idle');
    }
  }, [squares, gameOver, setGameState]);

  // AI move logic
  useEffect(() => {
    if (opponentType === 'ai' && turnPlayer === 'O' && !gameOver) {
      const timer = setTimeout(() => {
        const aiMove = getRandomMove(squares);
        if (aiMove !== -1) {
          const newSquares = squares.slice();
          newSquares[aiMove] = 'O';
          setSquares(newSquares);
          setTurnPlayer('X');
        }
      }, 500); // Small delay to make AI move visible
      return () => clearTimeout(timer);
    }
  }, [opponentType, turnPlayer, squares, gameOver]);

  const handleClick = (index: number) => {
    if (squares[index] || gameOver) return;
    
    // In AI mode, only allow player X to click
    if (opponentType === 'ai' && turnPlayer === 'O') return;
    
    const newSquares = squares.slice();
    newSquares[index] = turnPlayer;
    setSquares(newSquares);
    setTurnPlayer(turnPlayer === "X" ? "O" : "X");
  };

  const handleReset = () => {
    if (gameOver) {
      setSquares(Array(9).fill(""));
      setTurnPlayer("X");
    }
  };

  return (
    <div onClick={handleReset} style={{ position: 'relative' }}>
      <table style={{ opacity: gameOver ? 0.5 : 1 }}>
        <tbody>
          <tr>
            <td>
              <Square value={squares[0]} onClick={() => handleClick(0)}/>
            </td>
            <td className="vert">
              <Square value={squares[1]} onClick={() => handleClick(1)}/>
            </td>
            <td>
              <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </td>
          </tr>
          <tr>
            <td className="hori">
              <Square value={squares[3]} onClick={() => handleClick(3)}/>
            </td>
            <td className="vert hori">
              <Square value={squares[4]} onClick={() => handleClick(4)}/>
            </td>
            <td className="hori">
              <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </td>
          </tr>
          <tr>
            <td>
              <Square value={squares[6]} onClick={() => handleClick(6)}/>
            </td>
            <td className="vert">
              <Square value={squares[7]} onClick={() => handleClick(7)}/>
            </td>
            <td>
              <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </td>
          </tr>
        </tbody>
      </table>
      {gameOver && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '30px 50px',
          borderRadius: '10px',
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          pointerEvents: 'none'
        }}>
          {winner ? `${winner} won!` : 'Draw!'}
        </div>
      )}
    </div>
  )
}