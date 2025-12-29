import { useState, useRef, useCallback, useEffect } from 'react'

// --- Asset Imports ---
const movieImages = import.meta.glob('../../assets/imageEntertain/movie/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const movieImgList = processImages(movieImages)

const TOTAL_SLIDES = 10

// Static Metadata based on filenames
// Files are: BAD SISTER, INVASION, KNIFE EDGE, MURDER BOT, SHRINKING, SILO, SMOKE, THE BUCCANTEERS, THE LOST BUS, YOUR FRIENDS
const SLIDE_DATA = [
    { title: 'Bad Sister', type: 'Drama', button: 'Stream now' },
    { title: 'Invasion', type: 'Sci-Fi', button: 'Stream now' },
    { title: 'Knife Edge', type: 'Documentary', button: 'Stream now' },
    { title: 'Murder Bot', type: 'Sci-Fi', button: 'Stream now' },
    { title: 'Shrinking', type: 'Comedy', button: 'Stream now' },
    { title: 'Silo', type: 'Sci-Fi', button: 'Stream now' },
    { title: 'Smoke', type: 'Mystery', button: 'Stream now' },
    { title: 'The Buccaneers', type: 'Drama', button: 'Stream now' },
    { title: 'The Lost Bus', type: 'Action', button: 'Stream now' },
    { title: 'Your Friends', type: 'Comedy', button: 'Stream now' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    smallImg: movieImgList[i % movieImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

// --- Constants ---
const SMALL_TRANSITION = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
const SMALL_SLIDE_HEIGHT = 265
const SMALL_SLIDE_WIDTH_PX = 430
const SMALL_SLIDE_GAP = 20
const CLONE_COUNT = 3

export default function MovieSlider() {
    // We need enough duplicates to ensure smooth looping.
    // CSS Keyframe animation will handle the movement.
    // Hover pauses animation and shows button.

    // Triple the slides to ensure coverage
    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full  pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Move 1/3 since we have 3 sets */
                }
                .animate-marquee {
                    animation: marquee 70s linear infinite;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                {/* === MOVIE SLIDER === */}
                <div className="w-full overflow-hidden" style={{ height: 350 }}>
                    <div
                        className="flex h-full animate-marquee"
                        style={{
                            gap: '20px',
                            width: 'max-content' // Ensure width fits all items
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}`}
                                className="relative shrink-0 flex flex-col cursor-pointer group"
                                style={{ width: '430px', height: '100%' }}
                            >
                                <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-900 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                                    <img
                                        src={slide.smallImg}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                                    />

                                    {/* Stream Now Overlay - Visible on Group Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                                            Stream now
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 px-1 text-left">
                                    <p className="text-black font-bold text-[16px]">{slide.title}</p>
                                    <p className="text-gray-400 font-medium text-[14px] mt-0.5">{slide.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
