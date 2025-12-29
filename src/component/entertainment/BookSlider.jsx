import { useState, useRef, useCallback, useEffect } from 'react'

// --- Asset Imports ---
const bookImages = import.meta.glob('../../assets/imageEntertain/book/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const bookImgList = processImages(bookImages)

const TOTAL_SLIDES = 18

// Static Metadata based on filenames
// Files are: Call Hart Brim Stone, A Marriage At Sea, Alchemmised, Andrew Ross Sorkin, Brandon Sanderson, Closing Time, Dan Brown, Heart The Lover, Janet Evanovich, Just A litile Desire, Michael Connelly, Seeing other people, The Correspondent, The God Of The Wood, The Mating Game, The New Times, The True True Story, Their Deadly Truth
const SLIDE_DATA = [
    { title: 'Call Hart Brim Stone', author: 'Mystery Author', button: 'Read now' },
    { title: 'A Marriage At Sea', author: 'Romance Author', button: 'Read now' },
    { title: 'Alchemised', author: 'Fantasy Author', button: 'Read now' },
    { title: 'Andrew Ross Sorkin', author: 'Business Author', button: 'Read now' },
    { title: 'Brandon Sanderson', author: 'Brandon Sanderson', button: 'Read now' },
    { title: 'Closing Time', author: 'Fiction Author', button: 'Read now' },
    { title: 'Dan Brown', author: 'Dan Brown', button: 'Read now' },
    { title: 'Heart The Lover', author: 'Romance Author', button: 'Read now' },
    { title: 'Janet Evanovich', author: 'Janet Evanovich', button: 'Read now' },
    { title: 'Just A Little Desire', author: 'Romance Author', button: 'Read now' },
    { title: 'Michael Connelly', author: 'Michael Connelly', button: 'Read now' },
    { title: 'Seeing Other People', author: 'Contemporary Author', button: 'Read now' },
    { title: 'The Correspondent', author: 'Thriller Author', button: 'Read now' },
    { title: 'The God Of The Wood', author: 'Fantasy Author', button: 'Read now' },
    { title: 'The Mating Game', author: 'Romance Author', button: 'Read now' },
    { title: 'The New Times', author: 'Non-Fiction Author', button: 'Read now' },
    { title: 'The True True Story', author: 'Memoir Author', button: 'Read now' },
    { title: 'Their Deadly Truth', author: 'Mystery Author', button: 'Read now' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    smallImg: bookImgList[i % bookImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

export default function BookSlider() {
    // Triple the slides to ensure coverage
    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                @keyframes marquee-book {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Move 1/3 since we have 3 sets */
                }
                .animate-marquee-book {
                    animation: marquee-book 70s linear infinite;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                {/* === BOOK SLIDER === */}
                <div className="w-full overflow-hidden" style={{ height: 380 }}>
                    <div
                        className="flex h-full animate-marquee-book"
                        style={{
                            gap: '20px',
                            width: 'max-content' // Ensure width fits all items
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}`}
                                className="relative shrink-0 flex flex-col cursor-pointer group"
                                style={{ width: '198px', height: '100%' }}
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
                                    <p className="text-gray-400 font-medium text-[12px] mt-0.5">{slide.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
