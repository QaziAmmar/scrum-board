import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { AuthProvider } from './services/Auth'
import Login from './components/Login/Login';
import Users from './components/Users/Users';
import PrivateRoute from "./services/PrivateRoute"


function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/users" component={Users} />
            {/* Place new routes over this */}
            <Route path="/" component={Dashboard} />
            {/* <PrivateRoute path="/" component={Dashboard} /> */}
            {/* If you have an index page, you can remothis Redirect */}
            <Redirect exact from="/" to="/users" />
          </Switch>

        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
