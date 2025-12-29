import { useState, useRef, useCallback, useEffect } from 'react'

// --- Asset Imports ---
const newsImages = import.meta.glob('../../assets/imageEntertain/news/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const newsImgList = processImages(newsImages)

const TOTAL_SLIDES = 14

// Static Metadata based on filenames
// Files are: Best Swimsuit, Beware The Bubble, Car and Driver, New Yourker, Newsweek, People YearBook, Person Of the year, Poplular Mechaincs, Real Simple, Rolling Stone, The Hollywood, The Most Powerful, Women's Health, World's Most Beautiful
const SLIDE_DATA = [
    { title: 'Best Swimsuit', type: 'December 29, 2025', button: 'Read now' },
    { title: 'Beware The Bubble', type: 'January 15, 2026', button: 'Read now' },
    { title: 'Car and Driver', type: 'February 1, 2026', button: 'Read now' },
    { title: 'New Yorker', type: 'March 10, 2026', button: 'Read now' },
    { title: 'Newsweek', type: 'April 5, 2026', button: 'Read now' },
    { title: 'People YearBook', type: 'May 20, 2026', button: 'Read now' },
    { title: 'Person Of the Year', type: 'June 12, 2026', button: 'Read now' },
    { title: 'Popular Mechanics', type: 'July 8, 2026', button: 'Read now' },
    { title: 'Real Simple', type: 'August 25, 2026', button: 'Read now' },
    { title: 'Rolling Stone', type: 'September 14, 2026', button: 'Read now' },
    { title: 'The Hollywood Reporter', type: 'October 3, 2026', button: 'Read now' },
    { title: 'The Most Powerful', type: 'November 18, 2026', button: 'Read now' },
    { title: "Women's Health", type: 'December 7, 2026', button: 'Read now' },
    { title: "World's Most Beautiful", type: 'January 22, 2027', button: 'Read now' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    smallImg: newsImgList[i % newsImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

export default function NewsSlider() {
    // Triple the slides to ensure coverage
    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                @keyframes marquee-news {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Move 1/3 since we have 3 sets */
                }
                .animate-marquee-news {
                    animation: marquee-news 70s linear infinite;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                {/* === NEWS SLIDER === */}
                <div className="w-full overflow-hidden" style={{ height: 380 }}>
                    <div
                        className="flex h-full animate-marquee-news"
                        style={{
                            gap: '20px',
                            width: 'max-content' // Ensure width fits all items
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}`}
                                className="relative shrink-0 flex flex-col cursor-pointer group"
                                style={{ width: '230px', height: '100%' }}
                            >
                                <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gray-900 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                                    <img
                                        src={slide.smallImg}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                                    />

                                    {/* Read Now Overlay - Visible on Group Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                                            Read now
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 px-1 text-left">
                                    <p className="text-black font-bold text-[14px]">{slide.title}</p>
                                    <p className="text-gray-400 font-medium text-[12px] mt-0.5">{slide.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
