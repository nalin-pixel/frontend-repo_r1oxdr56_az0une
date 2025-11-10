export default function Demo() {
  const heroImage =
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-fuchsia-50 to-sky-50">
      <div className="pt-24 pb-16 max-w-2xl mx-auto px-4">
        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[32px] bg-gradient-to-tr from-fuchsia-200 via-purple-200 to-sky-200 blur-3xl animate-blob-slow" />

          <div className="rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden">
            {/* Cover image */}
            <div className="relative h-40 sm:h-56 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop"
                alt="Creator cover"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Profile + bio */}
            <div className="px-6 sm:px-8 pb-8 -mt-10">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop"
                  alt="Creator avatar"
                  className="h-24 w-24 rounded-2xl object-cover border-4 border-white shadow-xl animate-float-slow"
                />
                <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">@bluehour.studio</h1>
                <p className="mt-1 text-sm sm:text-base text-gray-600 max-w-xl">
                  Creator • Filmmaker • Presets • Weekly behind‑the‑scenes. New drops every Friday and
                  tutorials on color and motion.
                </p>

                {/* Stats */}
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

                {/* Single featured image (AI-inspired portrait) */}
                <div className="mt-8 w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Featured</h2>
                  </div>
                  <div className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
                    <img
                      src={heroImage}
                      alt="AI‑inspired portrait"
                      className="w-full h-[420px] object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>

                <div className="mt-6 text-xs text-gray-500">Built with LinkCast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
