import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "¡Hola! ¿En qué puedo ayudarte con el curso?" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://aula-steam-back.onrender.com/api/cursos"
        );
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages([
      ...messages,
      { type: "user", text: inputMessage },
      {
        type: "bot",
        text: "Gracias por tu mensaje. Te ayudaré con información sobre el curso.",
      },
    ]);
    setInputMessage("");
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando curso...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span>🎓 Aula STEAM</span>
          </div>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="badge">{courseData?.categoria}</span>
              <h1>{courseData?.titulo}</h1>
              <p>{courseData?.descripcion}</p>

              <div className="course-info">
                <div className="info-item">
                  <span className="icon">⏱️</span>
                  <span>{courseData?.duracion_horas} horas</span>
                </div>
                <div className="info-item">
                  <span className="icon">📊</span>
                  <span>Nivel {courseData?.nivel}</span>
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={() => alert("¡Inscripción próximamente!")}
              >
                Inscribirse Ahora
              </button>
            </div>

            <div className="hero-image">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Impresora 3D"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="details">
        <div className="container">
          <h2>¿Qué aprenderás?</h2>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🔧</span>
              <h3>Fundamentos</h3>
              <p>Aprende los conceptos básicos de la impresión 3D</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <h3>Diseño</h3>
              <p>Crea tus propios modelos 3D desde cero</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⚙️</span>
              <h3>Práctica</h3>
              <p>Proyectos reales para aplicar lo aprendido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Aula STEAM - Transformando la educación</p>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="chatbot">
        <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
          {chatOpen ? "✕" : "💬"}
        </button>

        {chatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h4>Asistente Virtual</h4>
            </div>

            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
