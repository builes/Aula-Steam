import { useState, useEffect } from 'react'

const COURSE_API_URL = 'https://raw.githubusercontent.com/builes/Reto/refs/heads/main/curso.json'

export function useCourseData() {
  const [courseData, setCourseData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(COURSE_API_URL)
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        
        const data = await response.json()
        setCourseData(data)
      } catch (err) {
        setError(err.message || 'Error al obtener los datos del curso')
        console.error('Error fetching course data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourseData()
  }, [])

  return { courseData, loading, error }
}