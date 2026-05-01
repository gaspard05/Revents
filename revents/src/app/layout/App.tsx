import EventDashboard from "../../features/events/dashboard/EventDashboard";
import NavBar from "./nav/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mmx-auto px-10 mt-24">
        <EventDashboard />
      </div>
    </div>
  );
}

export default App;
