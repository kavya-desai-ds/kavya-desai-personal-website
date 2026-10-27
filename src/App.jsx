import { useEffect } from 'react'
import './App.css'
import Link from './Link.jsx'
import { usePath } from './router.js'
import { Home, About, Projects, Experience, Contact, NotFound } from './pages.jsx'

const routes = {
  '/': { title: 'Kavya Desai Personal Website', Page: Home },
  '/about': { title: 'About | Kavya Desai', Page: About },
  '/projects': { title: 'Projects | Kavya Desai', Page: Projects },
  '/experience': { title: 'Experience | Kavya Desai', Page: Experience },
  '/contact': { title: 'Contact | Kavya Desai', Page: Contact },
}

const navItems = [
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/experience', 'Experience'],
  ['/contact', 'Contact'],
]

function App() {
  const path = usePath()
  const route = routes[path] ?? { title: 'Not found | Kavya Desai', Page: NotFound }

  useEffect(() => {
    document.title = route.title
  }, [route.title])

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-name">Kavya Desai</Link>
        <div className="nav-links">
          {navItems.map(([to, label]) => (
            <Link key={to} to={to} aria-current={path === to ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="main">
        <route.Page />
      </main>
    </div>
  )
}

export default App
