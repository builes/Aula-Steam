import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AS</span>
            </div>
            <span className="text-xl font-bold gradient-text">Aula STEAM</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#cursos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Cursos
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
            <button className="btn-secondary">
              Iniciar Sesión
            </button>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header