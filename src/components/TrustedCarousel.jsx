import { useEffect, useRef } from 'react'

const creators = [
  {
    name: 'Ava Streams',
    img: 'https://images.unsplash.com/photo-1536548665027-b96d34a005ae?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Kai Dances',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Maya Makes',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Leo Codes',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Noa Vlogs',
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Zara Sings',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
  },
]

// Duplicate list for seamless loop
const slides = [...creators, ...creators]

function TrustedCarousel({ speed = 3000 }) {
  const trackRef = useRef(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame
    let start = null
    const slideWidth = () => track.firstElementChild?.getBoundingClientRect().width || 220

    const animate = (ts) => {
      if (start === null) start = ts
      const progress = ts - start
      const px = (progress / 16) /* ~60fps */
      track.style.transform = `translateX(${-((indexRef.current * slideWidth()) + (px % slideWidth()))}px)`
      if (progress >= speed) {
        indexRef.current = (indexRef.current + 1) % creators.length
        start = ts
      }
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [speed])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex items-center gap-6 will-change-transform" ref={trackRef}>
        {slides.map((c, i) => (
          <div key={i} className="flex items-center gap-3 min-w-[220px]">
            <img
              src={c.img}
              alt={c.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-md"
              loading="lazy"
            />
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">{c.name}</div>
              <div className="text-xs text-gray-500">Verified creator</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedCarousel
