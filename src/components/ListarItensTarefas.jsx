import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ConcluirTarefa from "./ConcluirTarefa";
import RemoverTarefas from "./RemoverTarefas";

function ListarItensTarefas(props) {
  function marcarConcluida(tarefa) {
    return tarefa.concluida ? "line-through" : "none";
  }

  function atualizarConcluido(tarefa) {
    return tarefa.concluida ? "hidden" : "btn btn-warning btn-sm";
  }

  return props.tarefas.map((tarefa) => (
    <tr key={tarefa.id} data-testid="tarefa">
      <td
        width="75%"
        data-testid="nome-tarefa"
        style={{ textDecoration: marcarConcluida(tarefa) }}
      >
        {tarefa.nome}
      </td>
      <td className="text-right">
        <ConcluirTarefa
          tarefa={tarefa}
          recarregarTarefas={props.recarregarTarefas}
          className={tarefa.concluida ? "hidden" : "null"}
        />
        &nbsp;
        <Link to={`/atualizar/${tarefa.id}`} className={atualizarConcluido}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        &nbsp;
        <RemoverTarefas
          tarefa={tarefa}
          recarregarTarefas={props.recarregarTarefas}
        />
      </td>
    </tr>
  ));
}

ListarItensTarefas.PropTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ListarItensTarefas;
