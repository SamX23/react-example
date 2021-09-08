import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const App = () => (
  <Router>
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
