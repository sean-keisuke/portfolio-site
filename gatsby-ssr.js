import React from "react";
import { element as _element } from "prop-types";
import { Page } from "./src/components";

// Wraps every page in a component
const WrapPageElement = ({ element }) => <Page>{element}</Page>;
WrapPageElement.propTypes = {
  element: _element.isRequired,
};

// eslint-disable-next-line
export const wrapPageElement = WrapPageElement;
