import { useEffect, useState } from 'react'

const clean = (p) => p.replace(/\/+$/, '') || '/'

export function navigate(to) {
  if (clean(to) !== clean(window.location.pathname)) {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  window.scrollTo(0, 0)
}

export function usePath() {
  const [path, setPath] = useState(clean(window.location.pathname))
  useEffect(() => {
    const onPop = () => setPath(clean(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}
