import FanPage from "./FanPage";
import {Switch, Route, Link, useHistory} from "react-router-dom";
import "./styles.css";

export default function App() {
  const history = useHistory();

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" style={{textDecoration: "none", color: "white"}}>
            About
          </Link>
        </li>

        <li>
          <Link to="/fanpage" style={{textDecoration: "none", color: "white"}}>
            Fan Page
          </Link>
        </li>
      </ul>

      <button onClick={() => history.goBack()}> Back </button>
      <button onClick={() => history.goForward()}> Forward </button>

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/fanpage">
          <FanPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="home">
        <h1>Welcome to Mobile Fan Page</h1>
      </div>
    </>
  );
}

function About() {
  return (
    <div className="about">
      <h1>Visit Fan Page to like your favourite mobile</h1>
    </div>
  );
}
