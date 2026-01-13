import { useState, useEffect, useCallback } from "react";
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

function getBestMove(squares: string[], aiSymbol: 'X' | 'O'): number {
  const humanSymbol = aiSymbol === 'X' ? 'O' : 'X';
  const emptySquares = squares
    .map((val, idx) => val === "" ? idx : -1)
    .filter(idx => idx !== -1);
  
  if (emptySquares.length === 0) return -1;

  // 1. Try to win
  for (const move of emptySquares) {
    const testSquares = squares.slice();
    testSquares[move] = aiSymbol;
    if (calculateWinner(testSquares) === aiSymbol) {
      return move;
    }
  }

  // 2. Block opponent from winning
  for (const move of emptySquares) {
    const testSquares = squares.slice();
    testSquares[move] = humanSymbol;
    if (calculateWinner(testSquares) === humanSymbol) {
      return move;
    }
  }

  // 3. Take center if available
  if (squares[4] === "") {
    return 4;
  }

  // 4. Take a corner if available
  const corners = [0, 2, 6, 8].filter(idx => squares[idx] === "");
  if (corners.length > 0) {
    return corners[Math.floor(Math.random() * corners.length)];
  }

  // 5. Take any available square
  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

interface BoardProps {
  opponentType: 'human' | 'ai';
  setGameState: (state: 'idle' | 'playing' | 'ended') => void;
  startingPlayer: 'X' | 'O';
  explorationRate: number;
}

export default function Board ({ opponentType, setGameState, startingPlayer, explorationRate }: BoardProps) {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [turnPlayer, setTurnPlayer] = useState(startingPlayer);
  
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== "");
  const gameOver = winner || isDraw;

  // Helper function to determine initial turn player
  const getInitialTurnPlayer = useCallback(() => {
    // In AI mode, if human chose O, the first turn is X (AI's turn)
    // Otherwise, first turn matches the starting player
    if (opponentType === 'ai' && startingPlayer === 'O') {
      return 'X'; // AI goes first
    }
    return startingPlayer;
  }, [opponentType, startingPlayer]);

  // Helper function to get AI's symbol (opposite of human's symbol)
  const getAiSymbol = useCallback((): 'X' | 'O' => {
    return startingPlayer === 'X' ? 'O' : 'X';
  }, [startingPlayer]);

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
    if (opponentType === 'ai' && !gameOver) {
      const aiSymbol = getAiSymbol();
      
      if (turnPlayer === aiSymbol) {
        const timer = setTimeout(() => {
          let aiMove: number;
          
          // Epsilon-greedy strategy:
          // explorationRate controls the balance between exploration and exploitation
          // - High explorationRate (e.g., 1.0): AI explores more with random moves
          // - Low explorationRate (e.g., 0.0): AI exploits more with best strategic moves
          // - Medium explorationRate (e.g., 0.5): Balanced approach
          if (Math.random() < explorationRate) {
            // Explore: make a random move
            aiMove = getRandomMove(squares);
          } else {
            // Exploit: make the best strategic move
            aiMove = getBestMove(squares, aiSymbol);
          }
          
          if (aiMove !== -1) {
            const newSquares = squares.slice();
            newSquares[aiMove] = aiSymbol;
            setSquares(newSquares);
            setTurnPlayer(aiSymbol === 'X' ? 'O' : 'X');
          }
        }, 500); // Small delay to make AI move visible
        return () => clearTimeout(timer);
      }
    }
  }, [opponentType, turnPlayer, squares, gameOver, getAiSymbol, explorationRate]);

  // Reset game when starting player changes
  useEffect(() => {
    setSquares(Array(9).fill(""));
    setTurnPlayer(getInitialTurnPlayer());
  }, [startingPlayer, opponentType, getInitialTurnPlayer]);

  const handleClick = (index: number) => {
    if (squares[index] || gameOver) return;
    
    // In AI mode, prevent clicking when it's AI's turn
    if (opponentType === 'ai') {
      const aiSymbol = getAiSymbol();
      if (turnPlayer === aiSymbol) return;
    }
    
    const newSquares = squares.slice();
    newSquares[index] = turnPlayer;
    setSquares(newSquares);
    setTurnPlayer(turnPlayer === "X" ? "O" : "X");
  };

  const handleReset = () => {
    if (gameOver) {
      setSquares(Array(9).fill(""));
      setTurnPlayer(getInitialTurnPlayer());
    }
  };

  return (
    <div onClick={handleReset} className="relative">
      <table className={`my-1.5 mx-2.5 max-[500px]:border-spacing-0 ${gameOver ? 'opacity-50' : 'opacity-100'}`}>
        <tbody>
          <tr>
            <td className="board-cell">
              <Square value={squares[0]} onClick={() => handleClick(0)}/>
            </td>
            <td className="board-cell border-l-2 border-r-2 border-white">
              <Square value={squares[1]} onClick={() => handleClick(1)}/>
            </td>
            <td className="board-cell">
              <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </td>
          </tr>
          <tr>
            <td className="board-cell border-t-2 border-b-2 border-white">
              <Square value={squares[3]} onClick={() => handleClick(3)}/>
            </td>
            <td className="board-cell border-l-2 border-r-2 border-t-2 border-b-2 border-white">
              <Square value={squares[4]} onClick={() => handleClick(4)}/>
            </td>
            <td className="board-cell border-t-2 border-b-2 border-white">
              <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </td>
          </tr>
          <tr>
            <td className="board-cell">
              <Square value={squares[6]} onClick={() => handleClick(6)}/>
            </td>
            <td className="board-cell border-l-2 border-r-2 border-white">
              <Square value={squares[7]} onClick={() => handleClick(7)}/>
            </td>
            <td className="board-cell">
              <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </td>
          </tr>
        </tbody>
      </table>
      {gameOver && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white py-[30px] px-[50px] rounded-[10px] text-[32px] font-bold text-center pointer-events-none">
          {winner ? `${winner} won!` : 'Draw!'}
        </div>
      )}
    </div>
  )
}