import { useEffect, useState } from 'react'

const themes = {
  aurora: {
    name: 'Aurora',
    primary: 'from-fuchsia-600 to-purple-600',
    accent: 'from-indigo-600 to-blue-600',
    soft: 'from-rose-50 via-fuchsia-50 to-sky-50',
  },
  ocean: {
    name: 'Ocean',
    primary: 'from-cyan-600 to-blue-600',
    accent: 'from-indigo-600 to-purple-600',
    soft: 'from-sky-50 via-cyan-50 to-indigo-50',
  },
  sunset: {
    name: 'Sunset',
    primary: 'from-amber-500 to-rose-600',
    accent: 'from-fuchsia-600 to-purple-700',
    soft: 'from-amber-50 via-rose-50 to-fuchsia-50',
  },
}

export default function ThemeToggle({ onChange }) {
  const [key, setKey] = useState(localStorage.getItem('theme') || 'aurora')

  useEffect(() => {
    localStorage.setItem('theme', key)
    onChange?.(themes[key])
  }, [key])

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white/80 backdrop-blur px-1 py-1 shadow-sm">
      {Object.entries(themes).map(([k, v]) => (
        <button
          key={k}
          onClick={() => setKey(k)}
          className={`text-xs px-2.5 py-1.5 rounded-full transition font-medium ${key === k ? 'bg-gradient-to-r text-white ' + v.primary : 'text-gray-700 hover:bg-gray-100'}`}
        >
          {v.name}
        </button>
      ))}
    </div>
  )
}
