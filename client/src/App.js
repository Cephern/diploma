import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./comps/Login";
import Reg from "./comps/Reg";
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reg">
            <Reg />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
