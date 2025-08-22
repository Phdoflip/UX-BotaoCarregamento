import { useState } from "react";
import "./App.css";

// Componente Popup para reutilização
interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function handleClick() {
    setLoading(true);
    setMessage("");

    // Simula uma requisição (ex: login, salvar dados)
    setTimeout(() => {
      setLoading(false);
      setMessage("Ação concluída com sucesso!");
      setShowPopup(true); // Exibe o pop-up
    }, 2000);
  }

  function handleClosePopup() {
    setShowPopup(false);
    setMessage(""); // Opcional: limpa a mensagem para a próxima vez
  }

  return (
    <div className="app-container">
      <div className="content-box">
        <h1>Exercício: Botão de Carregamento</h1>
        <p>
          Esse código simula uma operação de envio de dados que demora 2 segundos.
        </p>
        <button className="btn" onClick={handleClick} disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {showPopup && <Popup message={message} onClose={handleClosePopup} />}
    </div>
  );
}

export default App;