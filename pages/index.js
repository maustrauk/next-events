import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Events App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventList items={featuredEvents}/>
      <Footer/>
    </div>
  )
}
