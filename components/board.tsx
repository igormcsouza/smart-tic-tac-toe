import { useState } from "react";
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

export default function Board () {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [turnPlayer, setTurnPlayer] = useState("X");
  
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== "");
  const gameOver = winner || isDraw;

  const handleClick = (index: number) => {
    if (squares[index] || gameOver) return;
    
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
    <table>
      <tbody>
        <tr>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="vert">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
        </tr>
        <tr>
          <td className="hori">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="vert hori">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="hori">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
        </tr>
        <tr>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td className="vert">
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
          <td>
            <Square turnPlayerName={turnPlayer} changeTurn={(playerName: string) => setTurnPlayer(playerName)}/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}