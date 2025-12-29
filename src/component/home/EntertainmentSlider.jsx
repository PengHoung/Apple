import { useState, useEffect, useRef, useCallback } from 'react'

// --- Asset Imports ---
// Using eager imports to ensuring order.
const bigImages = import.meta.glob('../../assets/imageBig/*.{jpeg,jpg,png}', { eager: true, as: 'url' })
const smallImages = import.meta.glob('../../assets/imgaeSmall/*.{jpeg,jpg,png}', { eager: true, as: 'url' })

const processImages = (imgObj) => Object.values(imgObj).sort()
const bigImgList = processImages(bigImages)
const smallImgList = processImages(smallImages)

const TOTAL_SLIDES = 9

// Static Metadata
const SLIDE_DATA = [
    { title: 'Foundation', type: 'Show', button: 'Stream now' },
    { title: 'AirPods Pro', type: 'Product', button: 'Buy' }, // Fallback logic handles standard text
    { title: 'NBA 2K24', type: 'Game', button: 'Play now' },
    { title: 'Killers of the Flower Moon', type: 'Movie', button: 'Stream now' },
    { title: 'Severance', type: 'Show', button: 'Stream now' },
    { title: 'Minecraft', type: 'Game', button: 'Play now' },
    { title: 'Monarch', type: 'Show', button: 'Stream now' },
    { title: 'Ted Lasso', type: 'Show', button: 'Stream now' },
    { title: 'Prehistoric Planet', type: 'Show', button: 'Stream now' },
]

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    bigImg: bigImgList[i % bigImgList.length],
    smallImg: smallImgList[i % smallImgList.length],
    ...SLIDE_DATA[i % SLIDE_DATA.length]
}))

// --- Constants ---

// Timings
const BIG_TRANSITION = 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
const SMALL_TRANSITION = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'

// Dimensions
const BIG_SLIDE_HEIGHT = 668
const BIG_SLIDE_WIDTH_DESKTOP = 1250
const BIG_SLIDE_GAP = 20

const SMALL_SLIDE_HEIGHT = 265
const SMALL_SLIDE_WIDTH_PX = 430
const SMALL_SLIDE_GAP = 20

// Clones
const CLONE_COUNT = 3 // Increased clone count to ensure safety with wide viewport

export default function EntertainmentSlider() {
    // Track Index includes clones
    const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    const bigTrackRef = useRef(null)

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

    // Real Index (0-8)
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

    // --- Layout Calculations ---

    // Big Slider - Centered
    // If desktop (width > 1250 + padding), use fixed 1250. Else use %
    const isDesktop = windowWidth > 768 // Simple breakpoint
    const bigSlideWidth = isDesktop ? BIG_SLIDE_WIDTH_DESKTOP : (windowWidth * 0.85)
    const bigGap = isDesktop ? BIG_SLIDE_GAP : 10

    const bigCenterOffset = (windowWidth - bigSlideWidth) / 2
    const bigTrackTranslate = bigCenterOffset - (currentIndex * (bigSlideWidth + bigGap))

    // Small Slider - Centered
    const smallSlideWidth = isDesktop ? SMALL_SLIDE_WIDTH_PX : (windowWidth * 0.45)
    const smallGap = isDesktop ? SMALL_SLIDE_GAP : 10
    const smallCenterOffset = (windowWidth - smallSlideWidth) / 2
    const smallTrackTranslate = smallCenterOffset - (currentIndex * (smallSlideWidth + smallGap))

    // --- Dot Logic (Windowing) ---
    const DOT_WIDTH = 8 // base dot spacing unit
    const VISIBLE_DOTS = 7
    // We want the dots container to shift so the 'realIndex' dot is approx centered in the window
    // But we clamp it so we don't show empty space at ends.

    // 0 1 2 [3] 4 5 6  (Index 3 active)

    let dotTranslate = 0
    const dotGap = 12
    const dotContainerWidth = VISIBLE_DOTS * (dotGap + 12) // approx width

    // If 7 visible. Center is index 3 (0-indexed relative to window).
    // We want realIndex to be at position 3.
    // Shift = - (realIndex - 3) * (dotWidth + gap)

    // Clamped Logic:
    // If realIndex < 3: Shift = 0
    // If realIndex > Total-4: Shift = Max
    // Else: Shift based on index

    if (realIndex > 3 && realIndex < SLIDES.length - 4) {
        dotTranslate = (realIndex - 3) * (12 + 16) // roughly shift by item width
    } else if (realIndex >= SLIDES.length - 4) {
        dotTranslate = (SLIDES.length - 7) * (12 + 16)
    }
    // Wait, simplified:
    // Layout: [Dot][Dot]...
    // We just translate the specific track of dots
    // Actually simpler: 
    // Let's just translate based on index with clamping.
    const dotItemWidth = 20 // Approx space per dot (8px dot + 12px gap)
    const maxShift = (TOTAL_SLIDES - VISIBLE_DOTS) * dotItemWidth

    let targetShift = (realIndex - 3) * dotItemWidth
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
        <div className="w-full bg-[#f5f5f7] pb-6 overflow-hidden font-sans ">

            {/* --- Section Title --- */}
            <div className="w-full flex justify-center pt-16 pb-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Endless entertainment.</h2>
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
                                        // Optional: Click slide to center logic
                                        if (!isActive) handleSlideChange(currentIndex + (i - currentIndex))
                                    }}
                                >
                                    <img
                                        src={slide.bigImg}
                                        alt={slide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>

                                    {/* Content: Bottom Left */}
                                    <div className="absolute bottom-12 left-12 flex items-center gap-6 z-20">
                                        <span className={`text-white font-bold text-4xl drop-shadow-md transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                            {slide.button === 'Button' ? slide.category : slide.title}
                                        </span>
                                        <button className={`bg-white text-black px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:bg-gray-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            Stream now
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* === SMALL SLIDER === */}
                <div className="w-full overflow-visible" style={{ height: SMALL_SLIDE_HEIGHT }}>
                    <div
                        className="flex h-full"
                        style={{
                            transform: `translate3d(${smallTrackTranslate}px, 0, 0)`,
                            transition: isTransitioning ? SMALL_TRANSITION : 'none',
                            gap: `${smallGap}px`,
                            willChange: 'transform'
                        }}
                    >
                        {extendedSlides.map((slide, i) => (
                            <div
                                key={`${slide.id}-${i}-small`}
                                className="relative shrink-0 rounded-xl overflow-hidden bg-gray-200 cursor-pointer group"
                                style={{ width: `${smallSlideWidth}px`, height: '100%' }}
                                onClick={() => handleSlideChange(currentIndex + (i - currentIndex))}
                            >
                                <img
                                    src={slide.smallImg}
                                    alt={slide.title}
                                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                />

                                {/* Overlay: Title Left, Button Right */}
                                <div className="absolute inset-x-0 bottom-0 p-5 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-white font-bold text-lg">{slide.title}</span>
                                    <button className="bg-white/95 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {slide.type === 'Game' ? 'Play Now' : 'Watch Now'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* === DOTS (PILL STYLE + 7 VISIBLE) === */}
                <div className="w-full flex justify-center pt-6 overflow-hidden">
                    {/* Mask container for 7 dots approx width */}
                    <div
                        className="overflow-hidden"
                        style={{ width: '180px' }} // Approx width for 7 dots
                    >
                        <div
                            className="flex items-center gap-3 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${targetShift}px)`,
                                paddingLeft: '5px' // Initial visual padding
                            }}
                        >
                            {SLIDES.map((_, idx) => {
                                const isActive = idx === realIndex
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSlideChange(CLONE_COUNT + idx)}
                                        className={`shrink-0 rounded-full transition-all duration-300 ${isActive
                                            ? 'w-8 h-2.5 bg-gray-900' // Active Pill
                                            : 'w-2.5 h-2.5 bg-gray-400 hover:bg-gray-600' // Inactive Circle
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
