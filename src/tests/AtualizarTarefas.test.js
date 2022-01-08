import React from "react";
import ReactDOM from "react-dom";
import AtualizarTarefas from "../pages/AtualizarTarefas";

describe("Teste do componente de atualizar tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AtualizarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
