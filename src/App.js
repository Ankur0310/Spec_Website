import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notice from "./Components/homePage/Notice";
import Live_events from "./Components/homePage/Live_events";
import Sports from "./Components/homePage/Sports";
import Gallery from "./Components/sportsPage/Gallery";
import Events from "./Components/sportsPage/Events";
import Facilites from "./Components/sportsPage/Facilites";
import Events_desc from "./Components/eventsPage/Events_desc";
import Events_gallery from "./Components/eventsPage/Events_gallery";
import Footer from "./Components/homePage/Footer";
import Homeherosection from "./Components/homePage/Homeherosection";
import Navbar from "./Components/homePage/Navbar";
import Event_herosection from "./Components/eventsPage/Event_herosection";
import VerticalNavigator from "./Components/VerticalNavigator";

function App() {
  return (
    <div>
      <Router>
        <div></div>
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
            <Route
              path="/sports"
              element={
                <>
                  <Navbar />
                  {/* <br />
                  <br />
                  <br /> */}
                  <Gallery />
                  <Events />
                  <Facilites />
                </>
              }
            ></Route>
            <Route
              path="/events"
              element={
                <>
                  <Navbar /> <br />
                  <br />
                  <br />
                  <Event_herosection />
                  <Events_desc />
                  <Events_gallery />
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
{
  /* <Coaches/>
        <Rules/> */
}
