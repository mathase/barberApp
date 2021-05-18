import React from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Feed from "./Feed.jsx";
import Profile from "./Profile.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import UpdateProfile from  './UpdateProfile.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../contexts/OauthContext.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.js";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/feed" component={Feed} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passwordReset" component={ForgotPassword} />
          <Route exact path="/update" component={UpdateProfile} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
