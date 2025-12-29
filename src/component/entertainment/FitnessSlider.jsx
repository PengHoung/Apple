import { useState, useRef, useCallback, useEffect } from 'react'

// --- Asset Imports ---
const fitnessImages = import.meta.glob('../../assets/imageEntertain/fitness/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const fitnessImgList = processImages(fitnessImages)

const TOTAL_SLIDES = 7

// Static Metadata based on filenames
// Files are: Dumbel, Massage the legs, Scratching, Turn the back, Warm Up, Yoga with Melly, Yoga
const SLIDE_DATA = [
    { title: 'Dumbbell', type: 'Strength', duration: '30 minutes', button: 'Start workout' },
    { title: 'Massage the Legs', type: 'Recovery', duration: '15 minutes', button: 'Start workout' },
    { title: 'Stretching', type: 'Flexibility', duration: '20 minutes', button: 'Start workout' },
    { title: 'Turn the Back', type: 'Core', duration: '25 minutes', button: 'Start workout' },
    { title: 'Warm Up', type: 'Cardio', duration: '10 minutes', button: 'Start workout' },
    { title: 'Yoga with Melly', type: 'Yoga', duration: '45 minutes', button: 'Start workout' },
    { title: 'Yoga', type: 'Mindfulness', duration: '30 minutes', button: 'Start workout' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    smallImg: fitnessImgList[i % fitnessImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

// --- Constants ---
const SMALL_TRANSITION = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
const SMALL_SLIDE_HEIGHT = 265
const SMALL_SLIDE_WIDTH_PX = 430
const SMALL_SLIDE_GAP = 20
const CLONE_COUNT = 3

export default function FitnessSlider() {
    // We need enough duplicates to ensure smooth looping.
    // CSS Keyframe animation will handle the movement.

    // Triple the slides to ensure coverage
    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full  pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                @keyframes marquee-fitness {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); } /* Move 1/3 since we have 3 sets */
                }
                .animate-marquee-fitness {
                    animation: marquee-fitness 70s linear infinite;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                {/* === FITNESS SLIDER === */}
                <div className="w-full overflow-hidden" style={{ height: 350 }}>
                    <div
                        className="flex h-full animate-marquee-fitness"
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

                                    {/* Start Workout Overlay - Visible on Group Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                                            Start workout
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 px-1 text-left">
                                    <p className="text-black font-bold text-[16px]">{slide.title}</p>
                                    <p className="text-gray-400 font-medium text-[14px] mt-0.5">{slide.type} | {slide.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
