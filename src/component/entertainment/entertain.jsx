import Footer from '../Footer'
import { useState, useRef } from 'react'
import Image1 from '../../assets/imageEntertain/l1.svg'
import Image2 from '../../assets/imageEntertain/l2.svg'
import Image3 from '../../assets/imageEntertain/l3.svg'
import Image4 from '../../assets/imageEntertain/l4.svg'
import Image5 from '../../assets/imageEntertain/l5.svg'
import Image6 from '../../assets/imageEntertain/l6.svg'
import Image7 from '../../assets/imageEntertain/l7.svg'
import Image8 from '../../assets/imageEntertain/l8.svg'
import Image9 from '../../assets/imageEntertain/l9.png'
import Video9 from '../../assets/imageEntertain/larg1.mp4'
import Image10 from '../../assets/imageEntertain/tv.png'
import Video11 from '../../assets/imageEntertain/larg2.mp4'
import Video12 from '../../assets/imageEntertain/larg3.mp4'
import Video13 from '../../assets/imageEntertain/larg4.mp4'
import MovieSlider from './MovieSlider'
import MusicSlider from './MusicSlider'
import GameSlider from './GameSlider'
import FitnessSlider from './FitnessSlider'
import NewsSlider from './NewsSlider'
import PodcastSlider from './PodcastSlider'
import BookSlider from './BookSlider'
import Image11 from '../../assets/imageEntertain/m1.png'
import Image12 from '../../assets/imageEntertain/g1.png'
import Image13 from '../../assets/imageEntertain/n1.png'
import Image14 from '../../assets/imageEntertain/pc1.png'
import Image15 from '../../assets/imageEntertain/b1.png'
import Image16 from '../../assets/imageEntertain/a1.png'
import Image17 from '../../assets/imageEntertain/one.png'

function TvHome() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex flex-col ">
            <div className="text-white bg-[#000] w-full min-h-[169px] flex flex-col items-center justify-center text-center px-4 py-8">
                <div className="w-full h-12"></div>
                <div className="w-full text-white flex flex-wrap items-center justify-center gap-3 md:gap-8 max-w-full px-2">
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image1} alt="Apple One" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple One</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image2} alt="Apple TV" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple TV</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image3} alt="Apple Music" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple Music</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image4} alt="Apple Arcade" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple Arcade</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image5} alt="Apple Fitness+" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple Fitness+</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image6} alt="Apple News+" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple News+</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image7} alt="Apple Podcasts" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple Podcasts</a>
                    </div>
                    <div className="w-[70px] md:w-[85px] flex flex-col items-center">
                        <a href="" className="w-full flex justify-center"><img src={Image8} alt="Apple Books" className="h-[35px] md:h-[55px] object-contain" /></a>
                        <a href="" className="text-white text-[9px] md:text-[11px] hover:text-[#369cd2] mt-1 text-center">Apple Books</a>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[520px] bg-[#000] flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-full max-w-[1200px] text-white flex flex-col items-center justify-center text-center p-4 gap-8">
                    <div className="w-full max-w-[861px] text-4xl md:text-6xl lg:text-8xl font-semibold"><h1>Meet the A-list of entertainment.</h1></div>
                    <div className="w-full max-w-[861px] text-lg md:text-xl lg:text-2xl font-semibold px-4">
                        <h1>Award‑winning movies. Binge‑worthy shows. Your favorite music mastered in Spatial Audio.
                            The most epic collection of mobile games. And the world’s largest library of 4K Ultra HD fitness content.
                            The best entertainment and experiences live here — only on Apple.</h1>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[148px] bg-[#161616] text-white flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-full max-w-[980px] px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <div className="w-[125px] flex items-center justify-center">
                        <a href=""><img src={Image9} className="h-8 md:h-[40px] w-auto" /></a>
                    </div>
                    <h1 className="text-lg md:text-[20px] max-w-[400px]">Get up to six services in one subscription with Apple One.</h1>
                    <a href="" className="text-[14px] px-8 py-3 flex items-center justify-center border border-white rounded-[28px] hover:bg-white hover:text-black transition" >Learn more</a>
                </div>
            </div>
            <div className="w-full min-h-[1330px] bg-[#ffffff] flex flex-col items-center text-center">
                <div id='bg' className="relative bg-black w-full h-[600px] md:h-[832px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video9} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16 text-white w-full h-full bg-black/20">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image10} alt="Apple TV" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl whitespace-nowrap">Apple TV</span>
                                    <button className="border border-white rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium hover:bg-white/10 transition whitespace-nowrap">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    Stream award-winning <br className="hidden md:block" />
                                    Apple Originals on every screen.
                                </h2>
                                <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-2 text-white/80">
                                    FOUNDATION
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm">
                                    Try it free¹
                                </button>
                                <button className="border border-white text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-white/10 transition text-sm">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <MovieSlider />
            </div>
            <div className="w-full min-h-[1468px] bg-[#ffffff] flex flex-col items-center text-center">
                <div id='bg' className="relative bg-black w-full h-[600px] md:h-[1000px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video11} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16 text-white w-full h-full bg-black/20">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image11} alt="Apple Music" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl whitespace-nowrap">Apple Music</span>
                                    <button className="border border-white rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium hover:bg-white/10 transition whitespace-nowrap">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    All music. Highest audio <br className="hidden md:block" /> quality. Zero ads.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm">
                                    Get Apple Music
                                </button>
                                <button className="border border-white text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-white/10 transition text-sm">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <MusicSlider />
            </div>
            <div className="w-full min-h-[1330px] bg-[#ffffff] flex flex-col items-center text-center">
                <div id='bg' className="relative bg-black w-full h-[600px] md:h-[832px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video12} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16 text-white w-full h-full bg-black/20">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image12} alt="Apple Arcade" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl whitespace-nowrap">Apple Arcade</span>
                                    <button className="border border-white rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium hover:bg-white/10 transition whitespace-nowrap">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    The best collection of mobile <br className="hidden md:block" />games, now in the Apple Games app.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm">
                                    Get the app
                                </button>
                                <button className="border border-white text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-white/10 transition text-sm">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <GameSlider />
            </div>
            <div className="w-full min-h-[1330px] bg-[#ffffff] flex flex-col items-center text-center">
                <div id='bg' className="relative bg-black w-full h-[600px] md:h-[832px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video13} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16 text-white w-full h-full bg-black/20">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image12} alt="Apple Fitness+" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl whitespace-nowrap">Apple Fitness+</span>
                                    <button className="border border-white rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium hover:bg-white/10 transition whitespace-nowrap">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    From Strength to Meditation,<br className="hidden md:block" />
                                    there’s something for everyone.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm">
                                    Try it free
                                </button>
                                <button className="border border-white text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-white/10 transition text-sm">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <FitnessSlider />
            </div>
            <div className="w-full min-h-[400px] py-12 flex flex-col items-center text-center">
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col justify-center px-6 md:px-16 text-black w-full h-full">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image13} alt="Apple News+" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl">Apple News+</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    Hundreds of magazines <br className="hidden md:block" />
                                    and leading newspapers. <br className="hidden md:block" />
                                    One subscription.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-[#1d1d20] text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black transition text-sm">
                                    Try it free
                                </button>
                                <button className="border border-black text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black/5 transition text-sm">
                                    Learn more <span className="text-[20px] ml-1 mt-[2px]"> &gt; </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[445px] flex flex-col items-center  text-center ">
                    <NewsSlider />
                </div>
            </div>
            <div className="w-full min-h-[400px] py-12 flex flex-col items-center text-center">
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col justify-center px-6 md:px-16 text-black w-full h-full">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image14} alt="Apple Podcast" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl">Apple Podcast</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    Millions of shows, from <br className="hidden md:block" />
                                    the biggest names to the <br className="hidden md:block" />
                                    best independents.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-[#1d1d20] text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black transition text-sm">
                                    Open the app
                                </button>
                                <button className="border border-black text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black/5 transition text-sm">
                                    Learn more <span className="text-[20px] ml-1 mt-[2px]"> &gt; </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[445px] flex flex-col items-center  text-center ">
                    <PodcastSlider />
                </div>
            </div>
            <div className="w-full min-h-[400px] py-12 flex flex-col items-center text-center">
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col justify-center px-6 md:px-16 text-black w-full h-full">
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <img src={Image15} alt="Apple Books" className="h-6 md:h-8 w-auto" />
                                    <span className="font-semibold text-lg md:text-2xl">Apple Books</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                    Read, listen, discover. <br className="hidden md:block" />
                                    All in one place.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-0 md:mb-12">
                                <button className="bg-[#1d1d20] text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black transition text-sm">
                                    Open the app
                                </button>
                                <button className="border border-black text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-black/5 transition text-sm">
                                    Learn more <span className="text-[20px] ml-1 mt-[2px]"> &gt; </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[445px] flex flex-col items-center  text-center ">
                    <BookSlider />
                </div>
            </div>
            <div className="w-full bg-[#f9f9f9] min-h-[500px] py-16 flex flex-col justify-center items-center text-center px-4">
                <div className="w-full max-w-[980px] flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-3/5 text-left flex flex-col gap-6">
                        <div className="flex items-center justify-start h-[55px]">
                            <img src={Image17} alt="Apple One" className="h-[40px] md:h-[60px] lg:h-[75px] w-auto object-contain" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Bundle up to six Apple services and enjoy more for less.
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <button className="bg-[#1d1d20] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition text-sm">
                                Try Apple One free
                            </button>
                            <button className="border border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black/5 transition text-sm">
                                Learn more
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 flex justify-center md:justify-end">
                        <img src={Image16} alt="Devices" className="max-h-[300px] md:max-h-[338px] w-auto object-contain" />
                    </div>
                </div>
                <div className="w-full flex h-12 mt-16 bg-white"></div>
            </div>

            <Footer />
        </div>
    )
}

export default TvHome
