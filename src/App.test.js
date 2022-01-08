import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("deve renderizar sem nenhum erros", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
