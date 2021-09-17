import type { NextPage } from 'next'
import Board from '../components/board'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  )
}

export default Home
