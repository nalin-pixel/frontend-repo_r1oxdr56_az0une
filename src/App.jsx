import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">Build your link-in-bio in minutes</h1>
              <p className="mt-4 text-lg text-gray-600">LinkCast helps creators and influencers share all their links, products, and socials with a beautiful, customizable page.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/signup" className="rounded-md bg-gray-900 text-white px-5 py-3 hover:bg-gray-800">Get started free</a>
                <a href="#features" className="rounded-md border border-gray-300 px-5 py-3 hover:border-gray-400">Learn more</a>
              </div>
              <div className="mt-4 text-xs text-gray-500">No credit card needed</div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-purple-200 via-blue-200 to-transparent blur-2xl rounded-3xl" />
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                <div className="text-sm font-semibold mb-3">Demo creator page</div>
                <div className="space-y-3">
                  <div className="h-24 rounded-xl bg-gray-100" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-10 rounded-lg bg-gray-100" />
                    <div className="h-10 rounded-lg bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 rounded-lg bg-gray-100" />
                    <div className="h-12 rounded-lg bg-gray-100" />
                    <div className="h-12 rounded-lg bg-gray-100" />
                  </div>
                </div>
              </div>
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
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Sign up', desc: 'Create your free account in seconds.' },
              { step: '2', title: 'Add links', desc: 'Drop in your links, socials, and products.' },
              { step: '3', title: 'Share', desc: 'Put your page everywhere: Instagram, TikTok, YouTube, and more.' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-gray-900 text-white grid place-items-center font-bold mb-3">{s.step}</div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
              </div>
            ))}
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
