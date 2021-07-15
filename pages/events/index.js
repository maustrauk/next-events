import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents, DUMMY_EVENTS } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";


const AllEventsPage = () => {
    const events = getAllEvents(DUMMY_EVENTS);
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEventsPage;