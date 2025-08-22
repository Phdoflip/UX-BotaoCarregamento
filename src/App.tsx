import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    setLoading(true);
    setMessage("");

    // Simula uma requisição (ex: login, salvar dados)
    setTimeout(() => {
      setLoading(false);
      setMessage("Ação concluída com sucesso!");
    }, 2000);
  }

  return (
    <div>
      <h1>Exercício: Botão de Carregamento</h1>
      <br />
      <p>Esse código simula uma operação de envio de dados que demora 2 segundos. </p>
      <button
        className="btn"
        onClick={handleClick}
      >
        {loading ? "Enviar" : "Enviar"}
      </button>
      <br />
      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default App;