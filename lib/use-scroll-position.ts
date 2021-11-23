import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleOnScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
    handleOnScroll()

    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return scrollPosition
}

export default useScrollPosition
