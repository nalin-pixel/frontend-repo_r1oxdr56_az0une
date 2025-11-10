import { useState } from 'react'

export function Login() {
  return (
    <AuthLayout title="Welcome back" subtitle="Log in to manage your links">
      <AuthForm button="Log in" />
    </AuthLayout>
  )
}

export function Signup() {
  return (
    <AuthLayout title="Create your account" subtitle="Start building your link-in-bio">
      <AuthForm button="Create account" />
    </AuthLayout>
  )
}

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="pt-24 max-w-md mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

function AuthForm({ button }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${button} clicked for ${email}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">{button}</button>
    </form>
  )
}
