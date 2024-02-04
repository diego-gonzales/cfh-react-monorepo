import { useEffect, useState } from 'react'

interface Props<T> {
  data: T | null
  isLoading: boolean
  hasError: string | null
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<Props<T>>({
    data: null,
    isLoading: false,
    hasError: null,
  })

  const getData = async () => {
    setState({
      ...state,
      isLoading: true,
    })

    const resp = await fetch(url)
    const data = await resp.json()

    setState({
      data,
      isLoading: false,
      hasError: null,
    })
  }

  useEffect(() => {
    getData()
  }, [url])

  return state
}
