import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AtualizarTarefas from "./pages/AtualizarTarefas";
import CadastrarTarefas from "./pages/CadastrarTarefas";
import ListarTarefas from "./pages/ListarTarefas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/atualizar" exact element={<AtualizarTarefas />} />
        <Route path="/cadastrar" element={<CadastrarTarefas />} />
        <Route path="/" element={<ListarTarefas />} />
      </Routes>
    </Router>
  );
}

export default App;
