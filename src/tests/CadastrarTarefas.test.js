import React from "react";
import ReactDOM from "react-dom";
import CadastrasTarefas from "../pages/CadastrarTarefas";
import { render, fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Teste do componente de cadastro de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CadastrasTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("deve cadastrar uma nova tarefa", () => {
    const { getByTestId } = render(<CadastrasTarefas />);
    fireEvent.change(getByTestId("txt-tarefa"), {
      target: { value: "Testar componente" },
    });
    fireEvent.click(getByTestId("btn-cadastrar"));
    expect(getByTestId("modal")).toHaveTextContent("Sucesso");
    expect(getByTestId("modal")).toHaveTextContent(
      "Tarefa adicionada com sucesso!"
    );
  });
});
