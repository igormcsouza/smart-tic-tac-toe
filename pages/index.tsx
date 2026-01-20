import type { NextPage } from 'next'
import { useState } from 'react'
import Board from '../components/board'
import ControlArea from '../components/controlarea'

const Home: NextPage = () => {
  const [opponentType, setOpponentType] = useState<'human' | 'ai'>('human')
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle')
  const [startingPlayer, setStartingPlayer] = useState<'X' | 'O'>('X')
  const [explorationRate, setExplorationRate] = useState<number>(0.5)
  const [noDrawMode, setNoDrawMode] = useState<boolean>(false)

  return (
    <div className="min-h-screen p-2 flex flex-col justify-center items-center h-screen max-md:overflow-y-auto max-md:overflow-x-hidden max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
      <div className="flex flex-row items-center justify-center gap-8 max-md:flex-col-reverse max-md:gap-4">
        <ControlArea 
          opponentType={opponentType}
          setOpponentType={setOpponentType}
          gameState={gameState}
          startingPlayer={startingPlayer}
          setStartingPlayer={setStartingPlayer}
          explorationRate={explorationRate}
          setExplorationRate={setExplorationRate}
          noDrawMode={noDrawMode}
          setNoDrawMode={setNoDrawMode}
        />
        <Board 
          opponentType={opponentType}
          setGameState={setGameState}
          startingPlayer={startingPlayer}
          explorationRate={explorationRate}
          noDrawMode={noDrawMode}
        />
      </div>
    </div>
  )
}

export default Home
