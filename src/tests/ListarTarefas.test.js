import React from "react";
import ReactDOM from "react-dom";
import ListarTarefa from "../pages/ListarTarefas";

describe("Teste do componente de listagem de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListarTarefa />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
