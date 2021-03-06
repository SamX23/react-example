import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";

const App = () => (
  <Router>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
