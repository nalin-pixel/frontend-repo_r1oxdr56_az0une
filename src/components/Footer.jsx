import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">LC</div>
            <span className="font-semibold text-gray-900">LinkCast</span>
          </div>
          <p className="text-gray-600">The simplest way for creators to build beautiful link-in-bio pages and share everything in one place.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#features" className="hover:text-gray-900">Features</a></li>
            <li><a href="#how" className="hover:text-gray-900">How it works</a></li>
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gray-900">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Get the app</h4>
          <div className="flex gap-3">
            <div className="h-10 w-32 rounded bg-gray-900/90 text-white grid place-items-center text-xs">App Store</div>
            <div className="h-10 w-32 rounded bg-gray-900/90 text-white grid place-items-center text-xs">Google Play</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} LinkCast. All rights reserved.</div>
    </footer>
  )
}

export default Footer
