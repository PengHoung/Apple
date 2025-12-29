import { useState, useRef, useCallback, useEffect } from 'react'

const podcastImages = import.meta.glob('../../assets/imageEntertain/podcast/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const processImages = (imgObj) => Object.values(imgObj).sort()
const podcastImgList = processImages(podcastImages)

const TOTAL_SLIDES = 16

const SLIDE_DATA = [
    { title: "Beth's Dead", type: 'True Crime', button: 'Listen now' },
    { title: 'Digital Social Hour', type: 'Society & Culture', button: 'Listen now' },
    { title: 'Good Hang', type: 'Comedy', button: 'Listen now' },
    { title: 'Habits and Hustle', type: 'Health & Fitness', button: 'Listen now' },
    { title: 'MICK Unplugged', type: 'Business', button: 'Listen now' },
    { title: 'Money Rehab', type: 'Business', button: 'Listen now' },
    { title: 'Morbid', type: 'True Crime', button: 'Listen now' },
    { title: 'Realaf', type: 'Comedy', button: 'Listen now' },
    { title: 'Smartless', type: 'Comedy', button: 'Listen now' },
    { title: 'Stuff You Should Know', type: 'Education', button: 'Listen now' },
    { title: 'The Mel Robbins Podcast', type: 'Self-Improvement', button: 'Listen now' },
    { title: 'The Proven', type: 'Business', button: 'Listen now' },
    { title: 'The Rest Is History', type: 'History', button: 'Listen now' },
    { title: 'The Vault Unlocked', type: 'Sports', button: 'Listen now' },
    { title: 'Unblinded', type: 'Society & Culture', button: 'Listen now' },
    { title: 'Up First', type: 'News', button: 'Listen now' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    smallImg: podcastImgList[i % podcastImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

export default function PodcastSlider() {
    const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES]

    return (
        <div className="w-full pb-6 overflow-hidden font-sans pt-10">
            <style>{`
                :root {
                    --podcast-slide-size: 160px;
                }
                @media (min-width: 768px) {
                    :root {
                        --podcast-slide-size: 234px;
                    }
                }
                @keyframes marquee-podcast {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee-podcast {
                    animation: marquee-podcast 70s linear infinite;
                }
                .animate-marquee-podcast:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full relative flex flex-col gap-6">
                <div className="w-full overflow-hidden h-[250px] md:h-[320px]">
                    <div
                        className="flex h-full animate-marquee-podcast"
                        style={{
                            gap: '20px',
                            width: 'max-content'
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}`}
                                className="relative shrink-0 flex flex-col cursor-pointer group"
                                style={{ width: 'var(--podcast-slide-size)', height: '100%' }}
                            >
                                <div
                                    className="relative w-full rounded-xl overflow-hidden bg-gray-900 shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                                    style={{ height: 'var(--podcast-slide-size)' }}
                                >
                                    <img
                                        src={slide.smallImg}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                                    />

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
