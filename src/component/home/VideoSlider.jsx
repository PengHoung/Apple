import { useState, useEffect, useRef, useCallback } from 'react'

// --- Asset Imports ---
import v1 from '../../assets/video/xlarge.mp4'
import v2 from '../../assets/video/xlarge (1).mp4'
import v3 from '../../assets/video/xlarge (2).mp4'
import v4 from '../../assets/video/xlarge (4).mp4'
import v5 from '../../assets/video/xlarge (5).mp4'
import v6 from '../../assets/video/xlarge (6).mp4'

const VIDEO_LIST = [v1, v2, v3, v4, v5, v6]

const TOTAL_SLIDES = 6

// Static Metadata
// Note: User said "Replace all images with videos... Total videos: 6... Each slide contains exactly one video"
// User also said "Overlay Changes... Button text: 'Watch the film'"
// Titles: Title remains per-slide. The previous data had titles. I will try to map loosely or just use generic/placeholder titles if not specified? 
// "Title remains per-slide (video title)". I will use titles from the previous data or invent logical ones if the count 9 -> 6 mismatches.
// Previous had 9 items. I have 6 videos. I'll pick the first 6 titles or relevant ones.
const SLIDE_DATA = [
    { title: 'Foundation', button: 'Watch the film' },
    { title: 'AirPods Pro', button: 'Watch the film' },
    { title: 'NBA 2K24', button: 'Watch the film' },
    { title: 'Killers of the Flower Moon', button: 'Watch the film' },
    { title: 'Severance', button: 'Watch the film' },
    { title: 'Minecraft', button: 'Watch the film' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    video: VIDEO_LIST[i],
    ...SLIDE_DATA[i]
}))

// --- Constants ---

// Timings
const BIG_TRANSITION = 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'

// Dimensions
const BIG_SLIDE_HEIGHT = 668
const BIG_SLIDE_WIDTH_DESKTOP = 1250
const BIG_SLIDE_GAP = 20

// Clones
const CLONE_COUNT = 3

export default function VideoSlider() {
    // Track Index includes clones
    const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    const bigTrackRef = useRef(null)
    const videoRefs = useRef([])

    // --- Init ---
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // --- Logic ---
    const extendedSlides = [
        ...SLIDES.slice(-CLONE_COUNT),
        ...SLIDES,
        ...SLIDES.slice(0, CLONE_COUNT)
    ]

    // Real Index (0-5)
    // Adjust logic for 6 slides
    const realIndex = (currentIndex - CLONE_COUNT + SLIDES.length) % SLIDES.length

    const handleSlideChange = useCallback((newIndex, smooth = true) => {
        if (!smooth) {
            setIsTransitioning(false)
            setCurrentIndex(newIndex)
            return
        }
        setIsTransitioning(true)
        setCurrentIndex(newIndex)
    }, [])

    const handleTransitionEnd = () => {
        setIsTransitioning(false)
        if (currentIndex < CLONE_COUNT) {
            const realIdx = SLIDES.length - (CLONE_COUNT - currentIndex)
            handleSlideChange(CLONE_COUNT + realIdx, false)
        }
        if (currentIndex >= CLONE_COUNT + SLIDES.length) {
            const offset = currentIndex - (CLONE_COUNT + SLIDES.length)
            handleSlideChange(CLONE_COUNT + offset, false)
        }
    }

    // --- Video Logic ---
    useEffect(() => {
        // Pause all videos
        videoRefs.current.forEach(video => {
            if (video) {
                video.pause();
                video.muted = true; // Ensure muted
            }
        });

        // Play the active video
        const activeVideo = videoRefs.current[currentIndex];
        if (activeVideo) {
            // Reset time if needed? "Starts playing that video from the beginning" - explicitly requested for dot click.
            // For auto-slide (video end), it naturally starts from beginning if we loop? 
            // Wait, if we slide to next, next is 0:00.
            activeVideo.currentTime = 0;
            activeVideo.play().catch(e => {
                console.log("Autoplay prevented:", e)
            });
        }
    }, [currentIndex])


    // --- Layout Calculations ---

    // Big Slider - Centered
    const isDesktop = windowWidth > 768
    const bigSlideWidth = isDesktop ? BIG_SLIDE_WIDTH_DESKTOP : (windowWidth * 0.85)
    const bigGap = isDesktop ? BIG_SLIDE_GAP : 10

    const bigCenterOffset = (windowWidth - bigSlideWidth) / 2
    const bigTrackTranslate = bigCenterOffset - (currentIndex * (bigSlideWidth + bigGap))

    // --- Dot Logic ---
    const VISIBLE_DOTS = 6 // Updated to 6
    const dotItemWidth = 20
    const maxShift = (TOTAL_SLIDES - VISIBLE_DOTS) * dotItemWidth

    let targetShift = (realIndex - 3) * dotItemWidth
    // Logic for 6 dots? Center is 3ish.
    // Use similar logic:
    if (targetShift < 0) targetShift = 0
    if (targetShift > maxShift) targetShift = maxShift


    // Swipe
    const touchStartX = useRef(0)
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const onTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) {
            if (diff > 0) handleSlideChange(currentIndex + 1)
            else handleSlideChange(currentIndex - 1)
        }
    }


    return (
        <div className="w-full bg-[#000000] pb-6 overflow-hidden font-sans ">

            {/* --- Section Title --- */}
            <div className="w-full flex justify-center pt-8 pb-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">More from Apple.</h2>
            </div>

            {/* --- Main Container --- */}
            <div
                className="w-full relative flex flex-col gap-6"
                onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
            >

                {/* === BIG SLIDER === */}
                <div className="w-full overflow-visible" style={{ height: BIG_SLIDE_HEIGHT }}>
                    <div
                        ref={bigTrackRef}
                        className="flex h-full"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `translate3d(${bigTrackTranslate}px, 0, 0)`,
                            transition: isTransitioning ? BIG_TRANSITION : 'none',
                            gap: `${bigGap}px`,
                            willChange: 'transform'
                        }}
                    >
                        {extendedSlides.map((slide, i) => {
                            const isActive = i === currentIndex
                            return (
                                <div
                                    key={`${slide.id}-${i}-big`}
                                    className="relative shrink-0 rounded-xl overflow-hidden shadow-2xl bg-black cursor-pointer group"
                                    style={{
                                        width: `${bigSlideWidth}px`,
                                        height: '100%',
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                    onClick={() => {
                                        if (!isActive) handleSlideChange(currentIndex + (i - currentIndex))
                                    }}
                                >
                                    <video
                                        ref={el => videoRefs.current[i] = el}
                                        src={slide.video}
                                        className="w-full h-full object-cover"
                                        muted
                                        playsInline
                                        // Loop logic: when video ends, go next
                                        onEnded={() => {
                                            if (isActive) {
                                                handleSlideChange(currentIndex + 1)
                                            }
                                        }}
                                    />

                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>

                                    {/* Content: Bottom Left */}
                                    <div className="absolute bottom-12 left-12 flex items-center gap-6 z-20">
                                        <span className={`text-white font-bold text-4xl drop-shadow-md transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                            {slide.title}
                                        </span>
                                        <button className={`bg-white text-black px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:bg-gray-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            {slide.button}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* --- DOTS (PILL STYLE) --- */}
                <div className="w-full flex justify-center pt-6 overflow-hidden">
                    <div
                        className="overflow-hidden"
                        style={{ width: '180px' }}
                    >
                        <div
                            className="flex items-center gap-3 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${targetShift}px)`,
                                paddingLeft: '5px'
                            }}
                        >
                            {SLIDES.map((_, idx) => {
                                const isActive = idx === realIndex
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSlideChange(CLONE_COUNT + idx)}
                                        className={`shrink-0 rounded-full transition-all duration-300 ${isActive
                                            ? 'w-8 h-2.5 bg-white' // Active Pill (White on black bg)
                                            : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400' // Inactive Circle
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
