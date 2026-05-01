import { useState } from "react";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import NavBar from "./nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div>
      <NavBar setFormOpen={setFormOpen} />
      <div className="container mmx-auto px-10 mt-24">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </div>
    </div>
  );
}

export default App;
