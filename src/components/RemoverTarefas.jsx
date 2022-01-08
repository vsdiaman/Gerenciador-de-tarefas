import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function RemoverTarefas(props) {
  const [exibirModal, setExibirModal] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  function handleRemoverTarefa(event) {
    event.preventDefault();
    const tarefasDb = localStorage["tarefas"];
    let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
    tarefas = tarefas.filter(tarefa => tarefa.id !== props.tarefa.id);
    localStorage["tarefas"] = JSON.stringify(tarefas);
    setExibirModal(false);
    props.recarregarTarefas(true);
  }

  return (
    <span>
      <button
        variant="danger"
        className="btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Remover Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente a seguite tarefa ?
          <br />
          <strong>{props.nome}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleRemoverTarefa}
            data-testid="btn-remover"
          >
            Sim
          </Button>
          <Button
            variant="light"
            onClick={handleFecharModal}
            data-testid="btn-remover"
          >
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

RemoverTarefas.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default RemoverTarefas;
