import React, { PropTypes } from "react";
import Header from "./Header";

export default function Layout({ children, ...props }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {};
