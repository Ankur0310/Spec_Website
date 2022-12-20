import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import VerticalNavigator from "./pages/VerticalNavigator";
import EventsBg from "./pages/EventsPage_JS/EventsBg";
import SportsBg from "./pages/SportsPage_JS/SportsBg";
import Events_S from "./pages/EventsPage_JS/Events_Section";
import TeamBg from "./pages/TeamPage_JS/TeamBg";
import AboutUsBg from "./pages/AboutUs_JS/AboutUsBg";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
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
            path="/events"
            element={
              <>
                <EventsBg />
              </>
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <>
                <SportsBg />
              </>
            }
          ></Route>
          <Route
            path="/team"
            element={
              <>
                <TeamBg />
              </>
            }
          ></Route>
          <Route
            path="/EventsS/:id"
            element={
              <>
                <Events_S />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <AboutUsBg />
              </>
            }
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
