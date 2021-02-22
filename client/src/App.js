import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./comps/Home";
import About from "./comps/About";
import Doctors from "./comps/Doctors";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
