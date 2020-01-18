import React from "react";
import { Route, Switch } from "react-router";

import Home from "../components/Home";
import Template from "../components/Template/index";
import BandPage from "../components/BandPage";

import { BAND } from "../constants/routes";
import { connect } from "react-redux";

const Routes = () => (
  <Template>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={`${BAND}/:id`}>
        <BandPage />
      </Route>
    </Switch>
  </Template>
);

export default connect()(Routes);
