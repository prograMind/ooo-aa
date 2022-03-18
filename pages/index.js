import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stage from './Stage'
import Item from './Item'
import {data} from './data'

export default function Home() {

  return (
    <div className={styles.container}>
      <main>
        <h1>My Startup Progress</h1>
      </main>
      <div>
        <Stage />
      </div>
    </div>
  )
}