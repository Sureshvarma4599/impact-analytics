import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Profile from "./components/profile/Profile";
import Filter from "./components/filters/Filter";
import { shortlist, rejected } from "./utils/api";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/id/" render={() => <Profile />} />
          <Route path="/shortlisted" render={() => <Filter type="1" />} />
          <Route path="/rejected" render={() => <Filter type="2" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
