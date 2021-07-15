import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById, DUMMY_EVENTS } from "../../dummy-data";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId, DUMMY_EVENTS);

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