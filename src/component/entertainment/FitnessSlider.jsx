import { useState, useRef, useCallback, useEffect } from 'react'

const fitnessImages = import.meta.glob('../../assets/imageEntertain/fitness/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const fitnessImgList = processImages(fitnessImages)

const TOTAL_SLIDES = 7

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

const SMALL_TRANSITION = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
const SMALL_SLIDE_HEIGHT = 265
const SMALL_SLIDE_WIDTH_PX = 430
const SMALL_SLIDE_GAP = 20
const CLONE_COUNT = 3

export default function FitnessSlider() {

    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                :root {
                    --fitness-slide-width: 280px;
                    --fitness-slide-height: 160px;
                }
                @media (min-width: 768px) {
                    :root {
                        --fitness-slide-width: 430px;
                        --fitness-slide-height: 240px;
                    }
                }
                @keyframes marquee-fitness {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee-fitness {
                    animation: marquee-fitness 70s linear infinite;
                }
                .animate-marquee-fitness:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                <div className="w-full overflow-hidden h-[280px] md:h-[350px]">
                    <div
                        className="flex h-full animate-marquee-fitness"
                        style={{
                            gap: '20px',
                            width: 'max-content'
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}`}
                                className="relative shrink-0 flex flex-col cursor-pointer group"
                                style={{ width: 'var(--fitness-slide-width)', height: '100%' }}
                            >
                                <div
                                    className="relative w-full rounded-xl overflow-hidden bg-gray-900 shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                                    style={{ height: 'var(--fitness-slide-height)' }}
                                >
                                    <img
                                        src={slide.smallImg}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                                    />

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
