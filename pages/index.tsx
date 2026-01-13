import type { NextPage } from 'next'
import { useState } from 'react'
import Board from '../components/board'
import ControlArea from '../components/controlarea'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [opponentType, setOpponentType] = useState<'human' | 'ai'>('human')
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle')
  const [startingPlayer, setStartingPlayer] = useState<'X' | 'O'>('X')
  const [explorationRate, setExplorationRate] = useState<number>(0.5)

  return (
    <div className={styles.container}>
      <div className={styles.gameLayout}>
        <ControlArea 
          opponentType={opponentType}
          setOpponentType={setOpponentType}
          gameState={gameState}
          startingPlayer={startingPlayer}
          setStartingPlayer={setStartingPlayer}
          explorationRate={explorationRate}
          setExplorationRate={setExplorationRate}
        />
        <Board 
          opponentType={opponentType}
          setGameState={setGameState}
          startingPlayer={startingPlayer}
          explorationRate={explorationRate}
        />
      </div>
    </div>
  )
}

export default Home
