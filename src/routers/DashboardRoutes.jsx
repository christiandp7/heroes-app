import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";

const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardRoutes;
