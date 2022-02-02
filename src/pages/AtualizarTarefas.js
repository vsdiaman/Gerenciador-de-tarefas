import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function AtualizarTarefas(props) {
  const [exibirModal, setExibitModal] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [tarefa, setTarefa] = useState("");
  const [carregarTarefa, setCarregarTarefa] = useState(true);

  useEffect(() => {
    if (carregarTarefa) {
      const tarefasDb = localStorage["tarefas"];
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      const tarefa = tarefas.filter((t) => t.id === parseInt(props.id)[0]);
      setTarefa(tarefa.nome);
      setCarregarTarefa(false);
    }
  }, [carregarTarefa, props]);

  function back(event) {
    event.preventDefault();
    Link("/");
  }

  function handleFecharModal() {
    Link("/");
  }

  function atualizar(event) {
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      //obtem as tarefas do localstorage
      const tarefasDb = localStorage["tarefas"];
      let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      //persistir a tarefa atualizada
      tarefas = tarefas.map((tarefaObj) => {
        if (tarefaObj.id === parseInt(props.id)) {
          tarefaObj.nome = tarefa;
        }
        return tarefaObj;
      });
      localStorage["tarefas"] = JSON.stringify(tarefas);
      setExibitModal(true);
    }
  }

  function handleTxtTarefa(event) {
    setTarefa(event.target.value);
  }

  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Form onSubmit={atualizar} noValidate validated={formValidado}>
        <Form.Group>
          <Form.Label>Tarefa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a tarefa"
            minLength="5"
            maxLength="100"
            required
            data-testid="txt-tarefa"
            value={tarefa}
            onChange={handleTxtTarefa}
          />
          <Form.Control.Feedback type="invalid">
            A tarefa deve conter ao menos 5 caracteres !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="center">
          <Button variant="success" type="submit" data-testid="btn-atualizar">
            Atualizar
          </Button>
          &nbsp;
          <Link to="/" className="btn btn-light" onClick={back}>
            Voltar
          </Link>
        </Form.Group>
      </Form>
      <Modal show={exibirModal} onHide={handleFecharModal} data-testi="modal">
        <Modal.Header closeButton>
          <Modal.Title>Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tarefa atualizada com sucesso !</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleFecharModal}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

AtualizarTarefas.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AtualizarTarefas;
