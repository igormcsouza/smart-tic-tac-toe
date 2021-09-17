import { useState } from "react"

interface SquareType {
  turnPlayerName: string,
  changeTurn: (palyerName: string) => void
}

export default function Square ({turnPlayerName, changeTurn}: SquareType) {
  const [player, setPlayer] = useState("")
  
  return (
    <button 
      className="btn btn-overlay text-white square" 
      onClick={() => { 
        setPlayer(turnPlayerName)
        changeTurn(turnPlayerName === "X"? "O" : "X")
      }}
    >
      {player}
    </button>
  )
}