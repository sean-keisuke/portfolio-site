import React from "react";
import { element as _element } from "prop-types";
import { Page } from "./src/components";
import "@fontsource/bebas-neue"

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
  // eslint-disable-next-line no-console
  console.log("new pathname", location.pathname);
  // eslint-disable-next-line no-console
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
}

// Wraps every page in a component
const WrapPageElement = ({ element }) => <Page>{element}</Page>;
WrapPageElement.propTypes = {
  element: _element.isRequired,
};

export const wrapPageElement = WrapPageElement;
