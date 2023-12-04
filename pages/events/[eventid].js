import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-details/EventContent";
import EventLogistics from "../../components/event-details/EventLogistics";
import EventSummary from "../../components/event-details/EventSummary";
import { getEventById } from "../../dummy-data";

function SingleEventsPage() {
  const router = useRouter();
  const eventId = router.query.eventid;
  const event = getEventById(eventId);
  console.log(event);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default SingleEventsPage;
