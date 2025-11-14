import { Link } from '@tanstack/react-router'
import logo from '../logo.svg'

export default function Header() {
  const routes = [
    { to: '/', label: 'Home' },
    { to: '/blogs', label: 'Blogs' },
  ]

  return (
    <header className="p-4 flex items-center bg-linear-to-r from-[#1E90FF] to-indigo-500 text-white shadow-lg">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>
      <nav className=" flex gap-4 w-full justify-center">
        {routes.map((route) => (
          <Link
            key={route.to}
            to={route.to}
            activeProps={{ className: 'font-bold text-blue-300' }}
            className="text-lg hover:text-blue-200 transition-colors"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
