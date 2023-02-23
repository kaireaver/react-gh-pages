import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga4';
import Contact from './ContactUs'
const TRACKING_ID = "G-TG2HM26PD9"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
