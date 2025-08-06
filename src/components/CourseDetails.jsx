import React from 'react'
import { useCourse } from '../context/CourseContext'

function CourseDetails() {
  const courseData = useCourse()

  const features = [
    {
      icon: "🎯",
      title: "Enfoque Práctico",
      description: "Aprende con proyectos reales y ejercicios hands-on"
    },
    {
      icon: "📚",
      title: "Material Completo",
      description: "Videos, documentos y recursos descargables"
    },
    {
      icon: "👥",
      title: "Comunidad",
      description: "Acceso a grupo exclusivo de estudiantes"
    },
    {
      icon: "🏆",
      title: "Certificación",
      description: "Obtén tu certificado al completar el curso"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Detalles del Curso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre este increíble curso de tecnología
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl card-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Duración</h3>
                    <p className="text-blue-600 font-bold">{courseData?.duracion_horas || 0} horas</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl card-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nivel</h3>
                    <p className="text-green-600 font-bold">{courseData?.nivel || 'Básico'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl card-shadow sm:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Categoría</h3>
                    <p className="text-purple-600 font-bold">{courseData?.categoria || 'Tecnología'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">¿Qué incluye este curso?</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-2xl card-shadow hover:bg-white transition-colors">
                <div className="text-3xl mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails