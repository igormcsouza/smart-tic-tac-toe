import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Tic Tac Toe</title>
        <meta name="description" content="Play tic tac toe against npcs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        Igor Souza
      </footer>
    </div>
  )
}

export default Home
