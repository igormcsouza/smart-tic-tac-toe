import type { NextPage } from 'next'
import { useState } from 'react'
import Board from '../components/board'
import ControlArea from '../components/controlarea'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [opponentType, setOpponentType] = useState<'human' | 'ai'>('human')
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle')

  return (
    <div className={styles.container}>
      <div className={styles.gameLayout}>
        <ControlArea 
          opponentType={opponentType}
          setOpponentType={setOpponentType}
          gameState={gameState}
        />
        <Board 
          opponentType={opponentType}
          setGameState={setGameState}
        />
      </div>
    </div>
  )
}

export default Home
