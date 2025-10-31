import React from 'react';
import TreeView from './components/TreeView';
import data from './data.json';

import './App.css'; // Importe o arquivo de estilos CSS

function App() {
  return (
    <div className="App">
      <h1 className="title">Árvore de Visualização do JSON</h1>
      <div className="treeview-container">
        <TreeView data={data} />
      </div>
    </div>
  );
}

export default App;