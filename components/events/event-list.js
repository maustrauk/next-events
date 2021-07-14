import EventItem from "./event-item";

const EventList = (props) => {
    const { items } = props;

    return (
        <ul>
            {items.map(item => {
                return <EventItem
                key={item.id}
                id={item.id}
                title={item.title}
                location={item.location}
                date={item.date}
                image={item.image}/>
            })}
        </ul>
    )
}

export default EventList;