import { useEffect } from 'react'

export const Message = () => {
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <div>This is a message</div>
}
