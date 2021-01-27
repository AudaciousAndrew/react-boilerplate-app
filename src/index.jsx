import React from "react";
import { render } from "react-dom";
import { Button } from "@progress/kendo-react-buttons";

import "@progress/kendo-theme-bootstrap/scss/button/_index.scss";
import "styles/base.scss";

const App = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <Button primary={true}>Primary</Button>
    </>
  );
};

render(<App />, document.getElementById("root"));
