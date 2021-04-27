import React from "react";
import Footer from "./components/Footer";
import CommunityPage from "./pages/CommunityPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login.component";
import Signup from "./components/Signup/register.component";
import Jumbotron from "./components/Jumbotron";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import EventFormPage from "./pages/Events";
import "./App.css";
import ActualEvent from "./components/ActualEvent";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <Jumbotron />
            <Home />
          </Route>

          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />

          <Route
            exact
            path={["/YourCommunity", "/events"]}
            component={CommunityPage}
          />

          <Route exact path="/CreateEvent" component={EventFormPage} />
          {/* Should connect to specific id for each event coming from database. */}
          <Route exact path="/events/:id" component={ActualEvent} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
