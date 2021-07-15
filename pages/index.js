import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { Fragment } from 'react';
import dataToProps from '../utils/dataToProps';

export default function Home(props) {

  const featuredEvents = getFeaturedEvents(props.dummyData);

  return (
    <Fragment>
      <EventList items={featuredEvents}/>
    </Fragment>
  )
}


export async function getStaticProps(context) {
  return dataToProps(context);
}