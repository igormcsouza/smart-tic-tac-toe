import type { NextPage } from 'next'
import Board from '../components/board'
import ControlArea from '../components/controlarea'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameLayout}>
        <ControlArea />
        <Board />
      </div>
    </div>
  )
}

export default Home
