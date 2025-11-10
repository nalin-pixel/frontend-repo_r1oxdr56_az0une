import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We received your message and will reach out soon.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="pt-24 max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact us</h1>
        <p className="text-gray-600 mb-8">Questions, partnerships, or press? Send us a note.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" required className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="5" required className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">Send</button>
          {status && <p className="text-green-600 text-sm">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
