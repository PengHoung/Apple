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
            <div className="text-white bg-[#000] w-full h-[169px] flex flex-col items-center justify-center text-center pl-4 pr-4">
                <div className=" w-full h-[60px]"></div>
                <div className=" w-full text-white h-[147px] flex flex-row items-center justify-center gap-4">
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image1} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple One</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image2} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple TV</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image3} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple Music</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image4} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple Arcade</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image5} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple Fitness+</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image6} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple News+</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image7} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple Podcasts</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image8} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-white text-[11px] hover:text-[#369cd2]">Apple Books</a>
                    </div>
                </div>
            </div>
            <div className="w-full h-[520px] bg-[#000] flex flex-col items-center justify-center text-center gap-4">
                <div className="w-full h-[330px] text-white flex flex-col items-center justify-center text-center p-4 gap-8">
                    <div className="w-[861px] h-[192px]  text-8xl font-semibold"><h1>Meet the A-list of entertainment.</h1></div>
                    <div className="w-[861px] h-[138px]  text-2xl font-semibold">
                        <h1>Award‑winning movies. Binge‑worthy shows. Your favorite music mastered in Spatial Audio.
                            The most epic collection of mobile games. And the world’s largest library of 4K Ultra HD fitness content.
                            The best entertainment and experiences live here — only on Apple.</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-[148px] bg-[#161616] text-white flex flex-col items-center justify-center text-center gap-4">
                <div className="w-[980px] h-[148px]  text-8xl font-semibold flex flex-row items-center justify-center gap-12">
                    <div className=" w-[125px] h-full flex flex-col items-center justify-center">
                        <a href=""><img src={Image9} className=" h-[40px] w-full  bg-[length:290px] bg-no-repeat bg-center " /></a>
                    </div>
                    <h1 className="text-[20px]">Get up to six services in one subscription with Apple One.</h1>
                    <a href="" className="text-[14px] h-[40px] w-[134px] flex items-center justify-center border border-white rounded-[28px] " >Learn more</a>
                </div>

            </div>
            <div className="w-full h-[1330px] bg-[#ffffff] flex flex-col items-center  text-center ">
                <div id='bg' className="relative bg-amber-200 w-full h-[832px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video9} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-16 text-white w-full h-full">
                        <div className="flex items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image10} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple TV</span>
                                    <button className="border border-white rounded-full px-3 py-1 text-xs font-medium hover:bg-white/10 transition">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    Stream award-winning<br />
                                    Apple Originals on every screen.
                                </h2>
                                <p className="text-xs font-semibold tracking-widest uppercase mt-2 text-white/80">
                                    FOUNDATION
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                                    Try it free¹
                                </button>
                                <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <MovieSlider />
            </div>
            <div className="w-full h-[1468px] bg-[#ffffff] flex flex-col items-center  text-center ">
                <div id='bg' className="relative bg-amber-200 w-full h-[1000px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video11} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-16 text-white w-full h-full">
                        <div className="flex items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image11} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple Music</span>
                                    <button className="border border-white rounded-full px-3 py-1 text-xs font-medium hover:bg-white/10 transition">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    All music. Highest audio <br /> quality. Zero ads.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                                    Get Apple Music
                                </button>
                                <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <MusicSlider />
            </div>
            <div className="w-full h-[1330px] bg-[#ffffff] flex flex-col items-center  text-center ">
                <div id='bg' className="relative bg-amber-200 w-full h-[832px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video12} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-16 text-white w-full h-full">
                        <div className="flex items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image12} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple Arcade</span>
                                    <button className="border border-white rounded-full px-3 py-1 text-xs font-medium hover:bg-white/10 transition">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    The best collection of mobile <br />games, now in the Apple Games app.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                                    Get the app
                                </button>
                                <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <GameSlider />
            </div>
            <div className="w-full h-[1330px] bg-[#ffffff] flex flex-col items-center  text-center ">
                <div id='bg' className="relative bg-amber-200 w-full h-[832px] overflow-hidden">
                    <video className="absolute inset-0 h-full w-full object-cover"
                        src={Video13} loop autoPlay muted playsInline>
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-end pb-12 px-16 text-white w-full h-full">
                        <div className="flex items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image12} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple Fitness+</span>
                                    <button className="border border-white rounded-full px-3 py-1 text-xs font-medium hover:bg-white/10 transition">
                                        Bundle with Apple One
                                    </button>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    From Strength to Meditation,<br />
                                    there’s something for everyone.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                                    Try it free
                                </button>
                                <button className="border border-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <FitnessSlider />
            </div>
            <div className="w-full h-[700px]  flex flex-col items-center  text-center ">
                <div className=" w-full h-[185px] flex flex-col items-center justify-center  text-center ">
                    <div className="flex flex-col justify-center  px-16 text-white w-full h-full">
                        <div className="flex text-black items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image13} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple News+</span>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    Hundreds of magazines <br />
                                    and leading newspapers. <br />
                                    One subscription.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-[#1d1d20] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1d1d20] transition">
                                    Try it free
                                </button>
                                <button className="border border-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
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
            <div className="w-full h-[630px]  flex flex-col items-center  text-center ">
                <div className=" w-full h-[185px] flex flex-col items-center justify-center  text-center ">
                    <div className="flex flex-col justify-center  px-16 text-white w-full h-full">
                        <div className="flex text-black items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image14} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple Podcast</span>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    Millions of shows, from <br />
                                    the biggest names to the <br />
                                    best independents.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-[#1d1d20] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1d1d20] transition">
                                    Open the app
                                </button>
                                <button className="border border-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
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
            <div className="w-full h-[830px]  flex flex-col items-center  text-center ">
                <div className=" w-full h-[185px] flex flex-col items-center justify-center  text-center ">
                    <div className="flex flex-col justify-center  px-16 text-white w-full h-full">
                        <div className="flex text-black items-end flex flex-row justify-center gap-[180px] w-full max-w-[1400px] mx-auto">
                            <div className="flex flex-col gap-4 max-w-4xl text-left">
                                <div className="flex items-center gap-3">
                                    <img src={Image15} alt="Apple TV" className="h-8 w-auto" />
                                    <span className="font-semibold text-2xl">Apple Books</span>
                                </div>
                                <h2 className="text-4xl font-bold leading-tight">
                                    Read, listen, discover. <br />
                                    All in one place.
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <button className="bg-[#1d1d20] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1d1d20] transition">
                                    Open the app
                                </button>
                                <button className="border border-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
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
            <div className="w-full bg-[#f9f9f9] h-[600px]  flex flex-col justify-center items-center  text-center ">
                <div className="w-[980px] mt-auto  h-[338px] bg-[#f9f9f9] flex flex-row items-center justify-center  text-center ">
                    <div className=" w-1/2 h-full">
                        <div className="flex flex-col text-black justify-end  w-full h-full">
                            <div className="flex flex-col justify-center gap-2 w-full max-w-[1400px] mx-auto">
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="flex items-center gap-3 h-[55px] ">
                                        <img src={Image17} alt="Apple TV" className="h-[75px] w-[240px]  bg-[length:190px] bg-no-repeat bg-center" />
                                    </div>
                                    <h2 className="text-4xl w-11/12 font-bold leading-tight ">
                                        Bundle up to six Apple services and enjoy more for less.


                                    </h2>
                                </div>

                                <div className="flex items-center flex-row   gap-4 mb-12">
                                    <button className="bg-[#1d1d20] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                                        Try Apple One free
                                    </button>
                                    <button className="border border-black text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[390px] h-full">
                        <div className="flex justify-end items-center gap-3 h-[338px] ">
                            <img src={Image16} alt="Apple TV" className="h-[338px] w-[240px]  bg-[length:190px] bg-no-repeat bg-center" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex h-[50px] flex mt-auto bg-white"></div>
            </div>
            
            <Footer />
        </div>
    )
}

export default TvHome
