import { Fragment } from "react";

import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { dataToPropsById, propsPath } from "../../utils/dataToProps";

const EventDetailPage = (params) => {
    const { loadedEvent } = params;


    if (!loadedEvent) {
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
            <EventSummary title={loadedEvent.title}/>
            <EventLogistics
                date={loadedEvent.date}
                address={loadedEvent.location}
                image={loadedEvent.image}
                imageAlt={loadedEvent.title}/>
            <EventContent>
                <p>{loadedEvent.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage;

export async function getStaticProps(context) {
    return dataToPropsById(context);
  }

export async function getStaticPaths() {
    return propsPath();
}