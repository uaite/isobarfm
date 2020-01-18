import React, { Fragment } from "react";
import Header from "../Header";
import { BAND } from "../../constants/routes.js";

const Template = ({ children }) => (
  <Fragment>
    <Header routes={[{ displayName: "Band", to: BAND }]} />
    {children}
  </Fragment>
);

export default Template;
