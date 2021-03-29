import React from "react";
import Main from "./MainBackground";
import Login from "../pages/Login";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RoutingPath = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutingPath;
