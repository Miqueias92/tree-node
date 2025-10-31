import React, { useState } from "react";
import TreeView from "./components/TreeView";
import "./App.css";

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleParse = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setParsedData(parsed);
      setError(null);
    } catch (err) {
      setError("JSON inválido. Verifique a formatação.");
      setParsedData(null);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Árvore de Visualização do JSON</h1>

      <div className="input-section">
        <textarea
          className="json-input"
          placeholder="Cole ou digite seu JSON aqui..."
          value={jsonInput}
          onChange={handleChange}
          rows={10}
        />
        <button className="parse-button" onClick={handleParse}>
          Visualizar
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="treeview-container">
        {parsedData ? (
          <TreeView data={parsedData} />
        ) : (
          <p className="placeholder">
            Insira um JSON válido e clique em "Visualizar"
          </p>
        )}
      </div>
    </div>
  );
}

export default App;