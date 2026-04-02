import React, { useEffect, useState } from 'react'

export const API_URL = 'https://www.themealdb.com/api/json/v1/1'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    if (!url) {
      setLoading(false)
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(url)
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong')
        }
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [url])


  return { data, loading, error }
}
