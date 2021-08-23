import Head from 'next/head';
import EventList from '../components/events/event-list';
import { Fragment } from 'react';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home(props) {

  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Some content"/>
      </Head>
      <EventList items={props.events}/>
    </Fragment>
  )
}


export async function getStaticProps() {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}