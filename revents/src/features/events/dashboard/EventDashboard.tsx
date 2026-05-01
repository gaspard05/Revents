import { events } from "../../../lib/data/sampleData";
import EventCard from "./EventCard";
import EventForm from "./form/EventForm";

export default function EventDashboard() {
  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-3/5 flex flex-col gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event}/>
        ))}
      </div>
      <div className="w-2/5">
        <EventForm />
      </div>
    </div>
  );
}
