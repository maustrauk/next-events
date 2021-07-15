import { getFeaturedEvents, DUMMY_EVENTS } from '../dummy-data';
import EventList from '../components/events/event-list';
import { Fragment } from 'react';

export default function Home() {

  const featuredEvents = getFeaturedEvents(DUMMY_EVENTS);

  return (
    <Fragment>
      <EventList items={featuredEvents}/>
    </Fragment>
  )
}
