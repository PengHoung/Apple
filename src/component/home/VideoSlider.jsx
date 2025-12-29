import { useState, useEffect, useRef, useCallback } from 'react'

const videoFiles = import.meta.glob('../../assets/video/*.{mp4,webm}', { eager: true, as: 'url' })

const processVideos = (obj) => Object.entries(obj).map(([path, url]) => {
    const filename = path.split('/').pop() || ''
    const name = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
    return { url, name }
}).sort((a, b) => a.name.localeCompare(b.name))

const VIDEO_LIST = processVideos(videoFiles)

const TOTAL_SLIDES = VIDEO_LIST.length || 0

const DEFAULT_BUTTON = 'Watch the film'

const SLIDES = Array.from({ length: TOTAL_SLIDES }).map((_, i) => ({
    id: i,
    video: VIDEO_LIST[i].url,
    title: VIDEO_LIST[i].name || `Video ${i + 1}`,
    button: DEFAULT_BUTTON
}))


const BIG_TRANSITION = 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'

const BIG_SLIDE_HEIGHT = 668
const BIG_SLIDE_WIDTH_DESKTOP = 1250
const BIG_SLIDE_GAP = 20

const CLONE_COUNT = 3

export default function VideoSlider() {
    const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    const bigTrackRef = useRef(null)
    const videoRefs = useRef([])

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const extendedSlides = [
        ...SLIDES.slice(-CLONE_COUNT),
        ...SLIDES,
        ...SLIDES.slice(0, CLONE_COUNT)
    ]

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

    useEffect(() => {
        videoRefs.current.forEach(video => {
            if (video) {
                video.pause();
                video.muted = true;
            }
        });

        const activeVideo = videoRefs.current[currentIndex];
        if (activeVideo) {
            activeVideo.currentTime = 0;
            activeVideo.play().catch(e => {
                console.log("Autoplay prevented:", e)
            });
        }
    }, [currentIndex])



    const isDesktop = windowWidth > 768
    const bigSlideWidth = isDesktop ? BIG_SLIDE_WIDTH_DESKTOP : (windowWidth * 0.85)
    const bigGap = isDesktop ? BIG_SLIDE_GAP : 10

    const bigCenterOffset = (windowWidth - bigSlideWidth) / 2
    const bigTrackTranslate = bigCenterOffset - (currentIndex * (bigSlideWidth + bigGap))

    const VISIBLE_DOTS = 6
    const dotItemWidth = 20
    const maxShift = (TOTAL_SLIDES - VISIBLE_DOTS) * dotItemWidth

    let targetShift = (realIndex - 3) * dotItemWidth
    if (targetShift < 0) targetShift = 0
    if (targetShift > maxShift) targetShift = maxShift


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

            <div className="w-full flex justify-center pt-8 pb-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">More from Apple.</h2>
            </div>

            <div
                className="w-full relative flex flex-col gap-6"
                onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
            >

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
                                        onEnded={() => {
                                            if (isActive) {
                                                handleSlideChange(currentIndex + 1)
                                            }
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>

                                    <div className="absolute bottom-12 left-12 flex items-center gap-6 z-20">
                                        <button className={`bg-white text-black px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:bg-gray-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            {slide.button}
                                        </button>
                                        <span className={`text-white font-bold text-4xl drop-shadow-md transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                            {slide.title}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

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
                                            ? 'w-8 h-2.5 bg-white'
                                            : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400'
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
