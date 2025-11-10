import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState({
    primary: 'from-fuchsia-600 to-purple-600',
    accent: 'from-indigo-600 to-blue-600',
    soft: 'from-rose-50 via-fuchsia-50 to-sky-50',
  })

  useEffect(() => {
    const t = localStorage.getItem('theme')
    if (t) {
      try {
        // Mirror keys from ThemeToggle map
        const map = {
          aurora: { primary: 'from-fuchsia-600 to-purple-600', accent: 'from-indigo-600 to-blue-600', soft: 'from-rose-50 via-fuchsia-50 to-sky-50' },
          ocean: { primary: 'from-cyan-600 to-blue-600', accent: 'from-indigo-600 to-purple-600', soft: 'from-sky-50 via-cyan-50 to-indigo-50' },
          sunset: { primary: 'from-amber-500 to-rose-600', accent: 'from-fuchsia-600 to-purple-700', soft: 'from-amber-50 via-rose-50 to-fuchsia-50' },
        }
        if (map[t]) setTheme(map[t])
      } catch {}
    }
  }, [])

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-gradient-to-tr from-fuchsia-300/60 via-purple-300/60 to-blue-300/60 blur-3xl rounded-full animate-blob-slow" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-gradient-to-tr from-cyan-300/60 via-sky-300/60 to-indigo-300/60 blur-3xl rounded-full animate-blob-slow" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <ThemeToggle onChange={(t) => setTheme(t)} />
                <span className={`hidden sm:inline-block text-xs font-medium bg-gradient-to-r ${theme.primary} text-transparent bg-clip-text`}>Pick a vibe</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Built for trusted creators. Ready to grow your audience.
              </h1>
              <p className="mt-4 text-lg text-gray-600">Create your link‑in‑bio, showcase everything you do, and make it pop with youthful colors and motion.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/signup" className={`rounded-md bg-gray-900 text-white px-5 py-3 hover:bg-gray-800`}>Get started free</a>
                <a href="#features" className="rounded-md border border-gray-300 px-5 py-3 hover:border-gray-400">Learn more</a>
              </div>
              <div className="mt-4 text-xs text-gray-500">No credit card needed</div>
            </div>
            <div className="relative">
              <div className={`absolute -inset-6 -z-10 bg-gradient-to-tr ${theme.primary} to-transparent blur-2xl rounded-3xl animate-pulse-soft`} />
              <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-6 backdrop-blur">
                <div className="text-sm font-semibold mb-3">Demo creator page</div>
                <div className="space-y-3">
                  <div className="h-24 rounded-xl bg-gray-100" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className={`h-10 rounded-lg bg-gradient-to-r ${theme.primary} text-white grid place-items-center font-semibold`}>YouTube</div>
                    <div className={`h-10 rounded-lg bg-gradient-to-r ${theme.accent} text-white grid place-items-center font-semibold`}>TikTok</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 rounded-lg bg-gray-100" />
                    <div className="h-12 rounded-lg bg-gray-100" />
                    <div className="h-12 rounded-lg bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 rounded-xl bg-white shadow-lg border border-gray-100 px-4 py-2 text-sm font-semibold animate-float-slow">+12 clicks</div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-12 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500">Trusted by creators</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400">
              <div className="h-8 bg-gray-200 rounded" />
              <div className="h-8 bg-gray-200 rounded" />
              <div className="h-8 bg-gray-200 rounded" />
              <div className="h-8 bg-gray-200 rounded" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="text-gray-600 mt-2">Create, customize, and share your page anywhere.</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Drag & drop', desc: 'Add links, buttons, products, and media with ease.' },
                { title: 'Themes', desc: 'Pick a theme or fine‑tune colors, fonts, and backgrounds.' },
                { title: 'Analytics', desc: 'See clicks and conversions on every link.' },
                { title: 'Embeds', desc: 'YouTube, TikTok, Spotify, podcasts, and more.' },
                { title: 'Monetization', desc: 'Sell digital files and accept tips directly.' },
                { title: 'Fast & SEO‑friendly', desc: 'Pages load fast and look great everywhere.' },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${theme.primary} mb-4`} />
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - colorful with motion */}
        <section id="how" className="relative py-20 overflow-hidden">
          <div className={`absolute -top-24 -left-24 h-72 w-72 bg-gradient-to-tr ${theme.primary} blur-3xl opacity-60 rounded-full animate-blob-slow`} />
          <div className={`absolute -bottom-24 -right-24 h-72 w-72 bg-gradient-to-tr ${theme.accent} blur-3xl opacity-60 rounded-full animate-blob-slow`} />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-transparent bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl p-1">
              <div className="rounded-3xl bg-white/80 p-8 sm:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left: steps */}
                  <div>
                    <p className={`text-sm font-semibold tracking-widest uppercase bg-gradient-to-r ${theme.primary} text-transparent bg-clip-text`}>How it works</p>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">Go live in 3 vibrant steps</h2>
                    <p className="mt-3 text-gray-600">Create your profile, drop in your links, and share your page everywhere. It’s fast, fun, and looks stunning.</p>

                    <div className="mt-8 relative">
                      <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-blue-500" />
                      {[
                        { step: '1', title: 'Sign up in seconds', desc: 'Create your free account and pick a unique handle.' },
                        { step: '2', title: 'Add your content', desc: 'Links, socials, videos, products — customize the look and feel.' },
                        { step: '3', title: 'Share everywhere', desc: 'Drop it in your bio on Instagram, TikTok, YouTube, and more.' },
                      ].map((s, i) => (
                        <div key={s.step} className="relative pl-16 pb-6">
                          <div
                            className={
                              `absolute left-0 top-0 h-10 w-10 grid place-items-center rounded-xl text-white font-bold shadow-lg ${
                                i === 0
                                  ? `bg-gradient-to-br ${theme.primary}`
                                  : i === 1
                                  ? `bg-gradient-to-br ${theme.accent}`
                                  : 'bg-gradient-to-br from-indigo-600 to-blue-600'
                              }`
                            }
                          >
                            {s.step}
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
                            <h3 className="font-semibold">{s.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                            <div className="mt-3 flex gap-2">
                              <span className="inline-flex items-center gap-1 text-xs text-fuchsia-600 bg-fuchsia-50 px-2 py-1 rounded-md">✨ Easy</span>
                              <span className="inline-flex items-center gap-1 text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">🎨 Custom</span>
                              {i === 2 && (
                                <span className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-md">🚀 Fast</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="/signup" className="rounded-md bg-gray-900 text-white px-5 py-3 hover:bg-gray-800">Start free</a>
                      <a href="/login" className="rounded-md border border-gray-300 px-5 py-3 hover:border-gray-400">I already have an account</a>
                    </div>
                  </div>

                  {/* Right: colorful person/creator image with accents */}
                  <div className="relative">
                    <div className={`absolute -inset-6 -z-10 bg-gradient-to-tr ${theme.accent} blur-3xl rounded-3xl animate-pulse-soft`} />
                    <img
                      src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1200&auto=format&fit=crop"
                      alt="Creator smiling with phone"
                      className="w-full h-[420px] object-cover rounded-2xl shadow-2xl border border-white/60"
                    />
                    {/* Floating badges */}
                    <div className="absolute -top-4 right-6 rounded-xl bg-white shadow-lg border border-gray-100 px-4 py-2 text-sm font-semibold animate-float-slow">+3 new clicks</div>
                    <div className="absolute bottom-6 -left-4 rounded-xl bg-white shadow-lg border border-gray-100 px-4 py-2 text-sm font-semibold flex items-center gap-2 animate-float-slow" style={{animationDelay:'-1.5s'}}>
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Live
                    </div>
                    <div className={`absolute top-6 -left-4 rounded-full bg-gradient-to-br ${theme.primary} text-white text-xs px-3 py-1 shadow-lg`}>Creator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="pricing" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to grow your audience?</h2>
            <p className="text-gray-600 mt-2">Start free. Upgrade anytime.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="/signup" className="rounded-md bg-gray-900 text-white px-5 py-3 hover:bg-gray-800">Create your page</a>
              <a href="/login" className="rounded-md border border-gray-300 px-5 py-3 hover:border-gray-400">Log in</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
