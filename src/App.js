import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Notice from './Components/Notice'
import Live_events from './Components/Live_events'
import Gallery from './Components/sportsPage/Gallery';
import Events from './Components/sportsPage/Events'
import Facilites from './Components/sportsPage/Facilites';
import Events_desc from './Components/eventsPage/Events_desc';
import Events_gallery from './Components/eventsPage/Events_gallery';

function App() {
  return (
    <div className="App">
            <div className="parallax-1">
              <h2>Welcome to SPEC</h2>
              <br />
              <h2>IIT (ISM), DHANBAD</h2>
             
          </div>

        <div className="para-1">
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
        </div><hr />
        <Notice/>
        <hr />
        <Live_events/>
      <Gallery/>
      <Events/>
      <Facilites/>
        <Events_desc/>
        <Events_gallery/>
    </div>
    
  );
}

export default App;
