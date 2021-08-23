import { Fragment } from "react";
import Head from 'next/head';
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

const EventDetailPage = (props) => {
    const event = props.selectedEvent;


    if (!event) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No event found</p>
                </ErrorAlert>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.description}/>
            </Head>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage;

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
  }

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({params: {eventId: event.id}}));
    return {
        paths: paths,
        fallback: true
    };
}