import React, { useState } from 'react'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', content: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte con el curso?' }
  ])
  const [inputText, setInputText] = useState('')

  const quickReplies = [
    "¿Cuál es la duración del curso?",
    "¿Qué nivel se necesita?",
    "¿Incluye certificado?",
    "¿Cómo me inscribo?"
  ]

  const handleSendMessage = (message) => {
    if (!message.trim()) return

    const newMessages = [...messages, { type: 'user', content: message }]
    setMessages(newMessages)
    setInputText('')

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Gracias por tu pregunta. Un especialista te contactará pronto para brindarte información detallada."
      
      if (message.toLowerCase().includes('duración') || message.toLowerCase().includes('tiempo')) {
        botResponse = "El curso tiene una duración de 8 horas, distribuidas en módulos que puedes tomar a tu propio ritmo."
      } else if (message.toLowerCase().includes('nivel') || message.toLowerCase().includes('requisito')) {
        botResponse = "Este es un curso de nivel básico, no necesitas experiencia previa. Solo ganas de aprender!"
      } else if (message.toLowerCase().includes('certificado') || message.toLowerCase().includes('diploma')) {
        botResponse = "¡Sí! Al completar el curso recibirás un certificado digital que acredita tus conocimientos."
      } else if (message.toLowerCase().includes('inscrib') || message.toLowerCase().includes('registro')) {
        botResponse = "Para inscribirte, haz clic en el botón 'Inscribirse Ahora'. El proceso es muy sencillo y rápido."
      }

      setMessages(prev => [...prev, { type: 'bot', content: botResponse }])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg transition-all z-50 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
      >
        <svg 
          className="w-8 h-8 text-white mx-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-semibold">Asistente Virtual</h3>
                <p className="text-xs opacity-90">Siempre aquí para ayudarte</p>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="grid grid-cols-1 gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(reply)}
                    className="text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors text-gray-600"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot