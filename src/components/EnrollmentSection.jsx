import React from 'react'

function EnrollmentSection() {
  const handleEnrollment = () => {
    alert('¡Gracias por tu interés! La funcionalidad de inscripción estará disponible próximamente.')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para comenzar tu aventura en la impresión 3D?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a cientos de estudiantes que ya han transformado sus ideas en realidad con tecnología 3D
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 inline-block">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-90">Estudiantes</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4.9/5</div>
                <div className="text-sm opacity-90">Calificación</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Online</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex items-center justify-center">
            <button 
              onClick={handleEnrollment}
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Inscribirse Ahora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Más Información
            </button>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            💳 Sin compromisos • 📱 Acceso móvil • 🎓 Certificado incluido
          </p>
        </div>
      </div>
    </section>
  )
}

export default EnrollmentSection