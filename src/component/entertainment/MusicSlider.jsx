import { useState, useRef, useCallback, useEffect } from 'react'

// --- Asset Imports ---
const musicImages = import.meta.glob('../../assets/imageEntertain/music/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const musicImgList = processImages(musicImages)

const TOTAL_SLIDES = 7

// Static Metadata based on filenames
// Files are: A list Pop, Alpha, New Music Daily, Rap Life, Sabrina Carpenter, Today's Hits, iDail Play
const SLIDE_DATA = [
    { title: 'A list Pop', type: 'Apple Music Pop', button: 'Listen now' },
    { title: 'Alpha', type: 'Apple Music', button: 'Listen now' },
    { title: 'New Music Daily', type: 'Apple Music', button: 'Listen now' },
    { title: 'Rap Life', type: 'Apple Music Hip-Hop', button: 'Listen now' },
    { title: 'Sabrina Carpenter', type: 'Apple Music', button: 'Listen now' },
    { title: "Today's Hits", type: 'Apple Music', button: 'Listen now' },
    { title: 'iDail Play', type: 'Apple Music Country', button: 'Listen now' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    smallImg: musicImgList[i % musicImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

export default function MusicSlider() {
    // Triple the slides to ensure coverage for smooth looping
    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full  pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                @keyframes marquee-music {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee-music {
                    animation: marquee-music 35s linear infinite;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                {/* === MUSIC SLIDER === */}
                <div className="w-full overflow-hidden" style={{ height: 320 }}>
                    <div
                        className="flex h-full animate-marquee-music"
                        style={{
                            gap: '20px',
                            width: 'max-content'
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}`}
                                className="relative shrink-0 flex flex-col cursor-pointer group"
                                style={{ width: '234px', height: '100%' }}
                            >
                                <div className="relative w-full h-[234px] rounded-xl overflow-hidden bg-gray-900 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                                    <img
                                        src={slide.smallImg}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                                    />

                                    {/* Listen Now Overlay - Visible on Group Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                                            Listen now
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
