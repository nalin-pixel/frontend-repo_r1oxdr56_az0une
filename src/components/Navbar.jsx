import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">LC</div>
            <span className="font-bold text-gray-900 text-lg">LinkCast</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how" className="text-gray-600 hover:text-gray-900">How it works</a>
            <NavLink to="/contact" className="text-gray-600 hover:text-gray-900">Contact</NavLink>
            <NavLink to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <NavLink to="/login" className="text-sm text-gray-700 hover:text-gray-900">Log in</NavLink>
            <NavLink to="/signup" className="text-sm rounded-md bg-gray-900 text-white px-3 py-2 hover:bg-gray-800">Sign up</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
