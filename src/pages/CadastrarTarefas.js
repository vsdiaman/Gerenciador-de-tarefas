import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { navigate } from "hookrouter";
import { Link } from "react-router-dom";
import Tarefa from "../components/TarefaModel";

function CadastrarTarefas() {
  const [tarefa, setTarefa] = useState(""); // add tarefa
  const [formValidado, setFormValidado] = useState(false); // controlar a validacao, se nao esta validado, exibir msg de erro
  const [exibirModal, setExibirModal] = useState(false); // controlar exibicao da modal

  function cadastrar(event) {
    event.preventDefault(); // nao deixa a pagina att, inibe a att da pagina
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      // obtem as tarefas do localstorage
      const tarefasDb = localStorage["tarefas"]; // vai estar armazenada somente em texto
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : []; // converte texto para objeto texto
      // persiste a tarefa
      tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
      // temos o objeto tarefa, temos q converter pra texto e armazenar no localstorage
      localStorage["tarefas"] = JSON.stringify(tarefas); // add no localstorage
      setExibirModal(true);
    }
  }

  function handleTxtTarefa(event) {
    setTarefa(event.target.value); // funcao vai atualizando de acordo com o que for digitando no html
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  return (
    <div>
      <h3 className="text-center">Cadastrar</h3>
      <div>
        <Form validated={formValidado} noValidate onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="1"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}
              data-testid="txt-tarefa"
            />
            <div class="invalid-feedback">
              Deve contar pelo menos 1 caracter
            </div>
          </Form.Group>

          <Form.Group className="text-center">
            <Button variant="success" type="submit" data-testid="btn-cadastrar">
              Cadastrar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-light">
              Voltar
            </Link>
          </Form.Group>
        </Form>
        <Modal
          show={exibirModal}
          onHide={handleFecharModal}
          data-testid="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tarefa adicionada com sucesso!</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default CadastrarTarefas;
