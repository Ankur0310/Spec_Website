import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Gallery from "./Components/sportsPage/Gallery";
// import Events from "./Components/sportsPage/Events";
// import Facilites from "./Components/sportsPage/Facilites";
import Events_desc from "./pages/EventsPage_JS/Events_desc";
import Events_gallery from "./pages/EventsPage_JS/Events_gallery";
import Footer from "./pages/Footer";
import Navbar from "./pages/HomePage_JS/Navbar";
import Event_herosection from "./pages/EventsPage_JS/Events_herosection";
import VerticalNavigator from "./pages/VerticalNavigator";
import EventsBg from "./pages/EventsPage_JS/EventsBg";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <VerticalNavigator />
                </>
              }
            ></Route>
            {/* <Route
              path="/sports"
              element={
                <>
                  <Navbar />
                  <Gallery />
                  <Events />
                  <Facilites />
                </>
              }
            ></Route> */}
            <Route
              path="/events"
              element={
                <>
                  {/* <Navbar />

                  <Event_herosection />
                  <Events_desc />
                  <Events_gallery /> */}
                  <EventsBg />
                </>
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
