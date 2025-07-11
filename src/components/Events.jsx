import EventCard from "./EventCard";


export default function Events() {
  return (
    <section id="events" className="bg-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center text-white ">Upcoming Events</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
      </div>
    </section>
  );
}
