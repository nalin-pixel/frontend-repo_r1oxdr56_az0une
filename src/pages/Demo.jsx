export default function Demo() {
  const links = [
    { label: 'Subscribe on YouTube', color: 'from-rose-500 to-fuchsia-600' },
    { label: 'Follow on TikTok', color: 'from-fuchsia-600 to-purple-600' },
    { label: 'Listen on Spotify', color: 'from-emerald-500 to-teal-600' },
    { label: 'Shop digital presets', color: 'from-indigo-500 to-blue-600' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-fuchsia-50 to-sky-50">
      <div className="pt-24 pb-16 max-w-lg mx-auto px-4">
        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[28px] bg-gradient-to-tr from-fuchsia-200 via-purple-200 to-sky-200 blur-3xl animate-blob-slow" />
          <div className="rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-xl p-8 shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop" alt="Creator avatar" className="h-24 w-24 rounded-2xl object-cover border-4 border-white shadow-xl animate-float-slow" />
              <h1 className="mt-4 text-2xl font-extrabold tracking-tight">@bluehour.studio</h1>
              <p className="mt-1 text-sm text-gray-600">Creator • Filmmaker • Presets • Weekly behind‑the‑scenes</p>

              <div className="mt-6 w-full space-y-3">
                {links.map((l) => (
                  <a key={l.label} href="#" className={`block w-full rounded-xl bg-gradient-to-r ${l.color} text-white py-3.5 px-5 font-semibold shadow-lg hover:brightness-110 transition`}>{l.label}</a>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 w-full">
                <div className="rounded-xl bg-white border border-gray-200 p-3 shadow-sm">
                  <div className="text-xs text-gray-500">Clicks</div>
                  <div className="font-bold text-lg">1,204</div>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-3 shadow-sm">
                  <div className="text-xs text-gray-500">Views</div>
                  <div className="font-bold text-lg">8,930</div>
                </div>
                <div className="rounded-xl bg-white border border-gray-200 p-3 shadow-sm">
                  <div className="text-xs text-gray-500">Top</div>
                  <div className="font-bold text-lg">YouTube</div>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500">Built with LinkCast</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
