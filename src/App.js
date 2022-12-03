import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Gallery from "./Components/sportsPage/Gallery";
// import Events from "./Components/sportsPage/Events";
// import Facilites from "./Components/sportsPage/Facilites";
// import Events_desc from "./Components/eventsPage/Events_desc";
// import Events_gallery from "./Components/eventsPage/Events_gallery";
import Footer from "./pages/Footer";
// import Homeherosection from "./Components/homePage/Homeherosection";
// import Navbar from "./Components/homePage/Navbar";
// import Event_herosection from "./Components/eventsPage/Event_herosection";
import VerticalNavigator from "./pages/VerticalNavigator";

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
            {/* <Route
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
            ></Route> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
