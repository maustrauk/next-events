import { Fragment } from "react";

import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { dataToPropsById } from "../../utils/dataToProps";

const EventDetailPage = (params) => {
    const event = params.loadedEvent;

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
    return dataToPropsById(context);
  }

export async function getStaticPaths() {
    return {
        paths: [
            { params: { eventId: 'e1' } },
            { params: { eventId: 'e2' } },
            { params: { eventId: 'e3' } },
        ],
        fallback: false,
    }
}