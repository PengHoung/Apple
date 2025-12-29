import Footer from '../Footer'
import { useState, useRef } from 'react'
import Image1 from '../../assets/imageTv/4k.svg'
import Image2 from '../../assets/imageTv/appleTv.svg'
import Image3 from '../../assets/imageTv/appleL.png'
import Image4 from '../../assets/imageTv/bas.svg'
import Image5 from '../../assets/imageTv/home.svg'
import Image7 from '../../assets/imageTv/homeL.svg'
import Image6 from '../../assets/imageTv/lam.svg'
import Image8 from '../../assets/imageTv/jb.jpeg'
import Image9 from '../../assets/imageTv/jb1.jpeg'
import Image11 from '../../assets/imageTv/p1.jpeg'
import Image12 from '../../assets/imageTv/p2.jpeg'
import Image13 from '../../assets/imageTv/t1.png'
import Image14 from '../../assets/imageTv/tt1.jpg'
import Image15 from '../../assets/imageTv/tt2.jpg'
import Image16 from '../../assets/imageTv/tt3.jpg'
import Image17 from '../../assets/imageTv/pp1.jpg'
import Image18 from '../../assets/imageTv/pp2.jpg'
import Image19 from '../../assets/imageTv/pp3.jpg'
import Image20 from '../../assets/imageTv/pp4.jpg'
import Image21 from '../../assets/imageTv/m1.png'
import Image22 from '../../assets/imageTv/border.png'
import Image23 from '../../assets/imageTv/v1.mp4'



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
            <div className="text-white w-full h-[169px] flex flex-col items-center justify-center text-center pl-4 pr-4">
                <div className=" w-full h-[60px]"></div>
                <div className=" w-full h-[147px] flex flex-row items-center justify-center gap-4">
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image1} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">Apple TV 4K</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image2} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">Apple TV App</a>
                    </div>
                    <div className=" w-[85px] h-[78px] flex flex-col gap-2">
                        <a href=""><img src={Image3} className=" h-[22px] mt-[33px]  w-full  bg-[length:260px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">Apple TV </a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image4} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">HomePod</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image5} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">HomePod Mini</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image7} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">Home App</a>
                    </div>
                    <div className=" w-[85px] h-[78px]">
                        <a href=""><img src={Image6} className=" h-[55px] w-full  bg-[length:190px] bg-no-repeat bg-center " /></a>
                        <a href="" className="text-black text-[11px] hover:text-[#369cd2]">Accessories</a>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1706px] bg-[#f5f5f7] flex flex-col items-center justify-center text-center p-4 gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className=" h-[799px] w-[654px] bg-[#000000] rounded-[20px] flex flex-col items-center pt-16">
                        <div className="w-full h-[399px] flex flex-col items-center gap-2">
                            <p className="text-white text-xl mt-3">HomePod</p>
                            <h2 className="text-white text-4xl font-bold text-center max-w-[400px] leading-tight mt-2">Profound sound.</h2>
                            <p className="text-white text-xl mt-3">$299</p>
                            <div className="flex gap-4 mt-4">
                                <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0077ED] transition-colors">
                                    Buy
                                </button>
                                <a href="#" className="text-[#2997ff] text-[17px] flex items-center gap-1 hover:underline mt-2">
                                    Learn more <span className="text-[14px] mt-[2px]">&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[400px] " >
                            <img src={Image8} className=" h-[400px] w-full rounded-b-[20px] " />
                        </div>
                    </div>
                    <div className=" h-[799px] w-[654px] bg-[#ffffff] rounded-[20px] flex flex-col items-center pt-16">
                        <div className="w-full h-[399px] flex flex-col items-center gap-2">
                            <p className="text-black text-xl mt-3">HomePod Mini</p>
                            <h2 className="text-black text-4xl font-bold text-center max-w-[300px] leading-tight mt-2">Surprising sound for its size.</h2>
                            <p className="text-black text-xl mt-3">$99</p>
                            <div className="flex gap-4 mt-4">
                                <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0077ED] transition-colors">
                                    Buy
                                </button>
                                <a href="#" className="text-[#2997ff] text-[17px] flex items-center gap-1 hover:underline mt-2">
                                    Learn more <span className="text-[14px] mt-[2px]">&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[450px] overflow-hidden rounded-b-[20px]" >
                            <img src={Image9} className=" h-[450px] w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className=" h-[799px] w-[654px] bg-[#ffffff] rounded-[20px] flex flex-col items-center ">
                        <div className="w-full h-[399px] flex flex-col items-center ">
                            <p className="text-back font-[600]  w-[144px] h-[35px] text-4xl mb-8max-w-3xl mt-6 bg-[length:110px] bg-no-repeat bg-center " style={{ backgroundImage: `url(${Image13})` }}></p>
                            <h2 className="text-black text-4xl font-bold text-center max-w-[400px] leading-tight mt-2">The Apple experience.</h2>
                            <h2 className="text-black text-4xl font-bold text-center max-w-[500px] leading-tight ">Cinematic in every sense.</h2>
                            <p className="text-black text-xl mt-3">Starting at $129</p>
                            <div className="flex gap-4 mt-4">
                                <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0077ED] transition-colors">
                                    Buy
                                </button>
                                <a href="#" className="text-[#2997ff] text-[17px] flex items-center gap-1 hover:underline mt-2">
                                    Learn more <span className="text-[14px] mt-[2px]">&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[500px] rounded-[20px]" >
                            <img src={Image12} className=" h-[500px] w-full rounded-[20px] object-cover" />
                        </div>
                    </div>
                    <div className=" h-[799px] w-[654px] bg-[#ffffff] rounded-[20px] flex flex-col items-center ">
                        <div className="w-full h-[399px] flex flex-col items-center ">
                            <p className="text-black font-[600]  w-[144px] h-[45px] text-4xl mb-8max-w-3xl mt-6 bg-[length:40px] bg-no-repeat bg-center " style={{ backgroundImage: `url(${Image21})` }}></p>
                            <p className="text-black text-xl mt-3">Home app</p>
                            <h2 className="text-black text-4xl font-bold text-center max-w-[400px] leading-tight mt-2">The foundation for a smarter home.</h2>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="text-[#2997ff] text-[17px] flex items-center gap-1 hover:underline mt-2">
                                    Learn more <span className="text-[14px] mt-[2px]">&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[500px] rounded-[20px]" >
                            <img src={Image11} className=" h-[500px] w-full rounded-[20px] object-cover" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full h-[888px] bg-[#f5f5f7] flex flex-col items-center justify-center text-center p-4 gap-8">
                <div className="flex flex-col items-center justify-center text-center p-4">
                    <div className="w-[980px] h-[120px] flex items-center justify-center text-center font-bold text-6xl">
                        <h1>Every reason to turn your house into a smart home.</h1>
                    </div>
                    <div className="w-full h-[600px] flex items-center justify-center text-center p-4 gap-8">
                        <div className="w-[380px] h-[480px] bg-[#ffffff] flex flex-col items-center justify-center text-center rounded-[20px] ">
                            <div className='w-[380px] h-[200px] flex flex-col items-center justify-center text-center'>
                                <h2 className="text-black text-2xl font-bold text-center max-w-[300px] leading-tight mt-2">Easily control your home
                                    from anywhere with your
                                    favorite devices.</h2>
                                <div className="flex gap-4 mt-4">
                                    <a href="#" className="text-[#2997ff] text-[17px] flex justify-center items-center gap-1 hover:underline mt-2">
                                        Learn more about the Home page<span className="text-[14px] mt-[2px]">&gt;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[380px] h-[280px] rounded-[20px]" >
                                <img src={Image14} className=" h-[280px] w-full rounded-[20px] object-cover" />
                            </div>
                        </div>
                        <div className="w-[380px] h-[480px] bg-[#ffffff] flex flex-col items-center justify-center text-center rounded-[20px] ">
                            <div className='w-[380px] h-[200px] flex flex-col items-center justify-center text-center'>
                                <h2 className="text-black text-2xl font-bold text-center max-w-[350px] leading-tight mt-2">Seamlessly connected entertainment in every room.</h2>
                                <div className="flex gap-4 mt-4">
                                    <a href="#" className="text-[#2997ff] text-[17px] flex justify-center items-center gap-1 hover:underline mt-2">
                                        Learn more about the HomePod<span className="text-[14px] mt-[2px]">&gt;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[380px] h-[280px] rounded-[20px]" >
                                <img src={Image15} className=" h-[280px] w-full rounded-[20px] object-cover" />
                            </div>
                        </div>
                        <div className="w-[380px] h-[480px] bg-[#ffffff] flex flex-col items-center justify-center text-center rounded-[20px] ">
                            <div className='w-[380px] h-[200px] flex flex-col items-center justify-center text-center'>
                                <h2 className="text-black text-2xl font-bold text-center max-w-[300px] leading-tight mt-2">Run it all with your voice.</h2>
                                <div className="flex gap-4 mt-4">
                                    <a href="#" className="text-[#2997ff] text-[17px] flex justify-center items-center gap-1 hover:underline mt-2">
                                        Learn more about Siri<span className="text-[14px] mt-[2px]">&gt;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[380px] h-[280px] rounded-[20px] p-6">
                                <h1 className="text-[47px] font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-[#ff8e70] via-[#e570ab] to-[#8892e6] bg-clip-text text-transparent">
                                    Hey Siri, turn off the lights downstairs
                                </h1>
                            </div>
                        </div>
                        <div className="w-[380px] h-[480px] bg-[#ffffff] flex flex-col items-center justify-center text-center rounded-[20px] ">
                            <div className='w-[380px] h-[200px] flex flex-col items-center justify-center text-center'>
                                <h2 className="text-black text-2xl font-bold text-center max-w-[300px] leading-tight mt-2">All with the security and privacy of Apple.</h2>
                                <div className="flex gap-4 mt-4">
                                    <a href="#" className="text-[#2997ff] text-[17px] flex justify-center items-center gap-1 hover:underline mt-2">
                                        Learn more about Privacy<span className="text-[14px] mt-[2px]">&gt;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[380px] h-[280px] rounded-[20px]" >
                                <img src={Image16} className=" h-[280px] w-full rounded-[20px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[888px] bg-[#f5f5f7] flex flex-col items-center justify-center text-center p-4 gap-8">
                <div className="flex flex-col items-center justify-center text-center p-4">
                    <div className="w-[980px] h-[220px] flex flex-col items-center justify-center text-center font-bold text-6xl gap-8">
                        <h1>Accessories. Around your home and across your devices.</h1>
                        <a href="#" className="text-[#2997ff] text-[18px] flex justify-center items-center gap-1 hover:underline mt-2">
                            Shop accessories<span className="text-[14px] mt-[2px]">&gt;</span>
                        </a>
                    </div>
                    <div className="w-full h-[600px] flex items-center justify-center text-center p-4 gap-8">
                        <div className="w-[380px] h-[600px] bg-white flex flex-col items-center rounded-[24px] p-3 shadow-sm">
                            <div className="flex flex-col items-center text-center mb-[-6rem] z-[1]">
                                <h2 className="text-black text-[28px] font-semibold tracking-tight leading-tight">Lighting</h2>
                                <p className="text-[#6e6e73] text-[17px] leading-snug mt-2 max-w-[280px]">Put your routine on a timer. Or set the mood with bulbs and switches.</p>
                                <a href="#" className="text-[#0066cc] text-[17px] font-normal hover:underline mt-3 flex items-center group">Shop Lights & Bulbs, Outlets, and Switches<span className="text-[12px] ml-1 transition-transform group-hover:translate-x-1"> &gt; </span></a>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <img src={Image18} alt="Nanoleaf A19 Bulb" className="h-[740px] w-full mt-[-6rem] object-contain" />
                                <p className="text-[#6e6e73] text-[14px] mt-[-10rem] ">Nanoleaf A19 Bulb</p>
                            </div>
                        </div>
                        <div className="w-[380px] h-[600px] bg-white flex flex-col items-center rounded-[24px] p-3 shadow-sm">
                            <div className="flex flex-col items-center text-center mb-[-6rem] z-[1]">
                                <h2 className="text-black text-[28px] font-semibold tracking-tight leading-tight">Security</h2>
                                <p className="text-[#6e6e73] text-[17px] leading-snug mt-2 max-w-[280px]">Keep an eye on what matters most with cameras, doorbells, and more.</p>
                                <a href="#" className="text-[#0066cc] text-[17px] font-normal hover:underline mt-3 flex items-center group">Shop Cameras and Sensors<span className="text-[12px] ml-1 transition-transform group-hover:translate-x-1"> &gt; </span></a>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <img src={Image19} alt="Nanoleaf A19 Bulb" className="h-[740px] w-full mt-[-6rem] object-contain" />
                                <p className="text-[#6e6e73] text-[14px] mt-[-10rem] ">Logitech Circle View Wired Doorbell</p>
                            </div>
                        </div>
                        <div className="w-[380px] h-[600px] bg-white flex flex-col items-center rounded-[24px] p-3 shadow-sm">
                            <div className="flex flex-col items-center text-center mb-[-6rem] z-[1]">
                                <h2 className="text-black text-[28px] font-semibold tracking-tight leading-tight">Comfort</h2>
                                <p className="text-[#6e6e73] text-[17px] leading-snug mt-2 max-w-[280px]">Turn up the heat or keep your cool with temperature controls and fans.</p>
                                <a href="#" className="text-[#0066cc] text-[17px] font-normal hover:underline mt-3 flex items-center group">Shop Thermostats<span className="text-[12px] ml-1 transition-transform group-hover:translate-x-1"> &gt; </span></a>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <img src={Image20} alt="Nanoleaf A19 Bulb" className="h-[740px] w-full mt-[-6rem] object-contain" />
                                <p className="text-[#6e6e73] text-[14px] mt-[-10rem] ">ecobee Smart Thermostat Premium with Siri and Built‑In Air Quality Monitor</p>
                            </div>
                        </div>
                        <div className="w-[380px] h-[600px] bg-white flex flex-col items-center rounded-[24px] p-3 shadow-sm">
                            <div className="flex flex-col items-center text-center mb-[-6rem] z-[1]">
                                <h2 className="text-black text-[28px] font-semibold tracking-tight leading-tight">Entry</h2>
                                <p className="text-[#6e6e73] text-[17px] leading-snug mt-2 max-w-[280px]">Unlock more ways to access your home.</p>
                                <a href="#" className="text-[#0066cc] text-[17px] font-normal hover:underline mt-3 flex items-center group">Shop Thermostats<span className="text-[12px] ml-1 transition-transform group-hover:translate-x-1"> &gt; </span></a>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <img src={Image17} alt="Nanoleaf A19 Bulb" className="h-[740px] w-full mt-[-6rem] object-contain" />
                                <p className="text-[#6e6e73] text-[14px] mt-[-10rem] ">Level Lock+ with Home Key Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[1234px] bg-[#f5f5f7] flex flex-col items-center justify-center text-center ">
                <div className="w-[900px] h-[990px] pb-22 flex flex-col items-center justify-center text-center font-bold text-6xl gap-8">
                    <h1>Watch, sing, play, and work out. On the big screen.</h1>
                </div>
                <div className="relative w-full h-[720px]  flex flex-col items-center justify-center mt-12 text-center">

                    <div className="absolute z-10 w-[1400px] h-[612px] flex items-center justify-center pointer-events-none">
                        <img src={Image22} className=" w-[1300px] h-[712px] mt-[6rem]  bg-no-repeat bg-center " />
                    </div>
                    <div className="absolute z-0 w-[1090px] h-[612px] group cursor-pointer overflow-hidden " onClick={togglePlay}>
                        <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover"
                            src={Image23} loop autoPlay muted playsInline>
                        </video>
                        <div className={`absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 ${!isPlaying ? 'bg-black/30' : ''}`}></div>
                        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center gap-3 text-white">
                                <div className="flex items-center gap-1 font-semibold text-[21px] tracking-tight">
                                    <svg className="h-[54px] w-auto fill-current" viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 
                                            2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 
                                            1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 
                                            -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 
                                            0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 
                                            3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                                    </svg>
                                    <span>Fitness+</span>
                                </div>
                                <div className="h-4 w-[1px] bg-white/60 mx-1"></div>
                                <div className="text-[17px] font-medium tracking-wide text-white/90">HIIT with Bakari</div>
                            </div>

                            <div className="flex items-center">
                                <button onClick={togglePlay} className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/60 hover:bg-white/20 transition-all backdrop-blur-sm">
                                    {isPlaying ? (
                                        <svg className="w-4 h-4 fill-white" viewBox="0 0 16 16">
                                            <path d="M5 3.5h2v9h-2v-9zm4 0h2v9h-2v-9z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 fill-white translate-x-[1px]" viewBox="0 0 16 16">
                                            <path d="M5.5 3.5v9l7-4.5-7-4.5z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1200px]  mt-20 pt-12">
                    <div className="w-full py-24 flex justify-center">
                        <div className="max-w-[1200px] w-full grid grid-cols-4 gap-8 px-4">

                            <div className="flex flex-col items-center text-center h-full">
                                <div className="flex items-center gap-1 mb-3 text-4xl font-bold text-black">
                                    <span className="text-4xl"></span>tv+
                                </div>
                                <p className="text-[19px] leading-snug mb-7 max-w-[210px] text-black font-medium">
                                    Stream award-winning Apple Originals on every screen.
                                </p>
                                <div className="flex flex-col items-center gap-3 mt-auto">
                                    <button className="bg-[#0071e3] text-white px-7 py-2.5 rounded-full text-[16px] font-medium hover:bg-[#0077ed]">
                                        Try it free²
                                    </button>
                                    <a href="#" className="text-[#0066cc] text-[16px] hover:underline flex items-center">
                                        Learn more <span className="text-[11px] ml-1 mt-[2px]"> &gt; </span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center h-full">
                                <div className="flex items-center gap-1 mb-3 text-4xl font-bold text-black">
                                    <span className="text-4xl"></span>Music
                                </div>
                                <p className="text-[19px] leading-snug mb-7 max-w-[260px] text-black font-medium">
                                    All music. Highest audio quality. Zero ads.
                                </p>
                                <div className="flex flex-col items-center gap-3 mt-auto">
                                    <button className="bg-[#0071e3] text-white px-7 py-2.5 rounded-full text-[16px] font-medium hover:bg-[#0077ed]">
                                        Get Apple Music
                                    </button>
                                    <a href="#" className="text-[#0066cc] text-[16px] hover:underline flex items-center">
                                        Learn more <span className="text-[11px] ml-1 mt-[2px]"> &gt; </span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center h-full">
                                <div className="flex items-center gap-1 mb-3 text-4xl font-bold text-black">
                                    <span className="text-4xl"></span>Arcade
                                </div>
                                <p className="text-[19px] leading-snug mb-7 max-w-[260px] text-black font-medium">
                                    Best collection of mobile games for every player.
                                </p>
                                <div className="flex flex-col items-center gap-3 mt-auto">
                                    <button className="bg-[#0071e3] text-white px-7 py-2.5 rounded-full text-[16px] font-medium hover:bg-[#0077ed]">
                                        Try it free⁴
                                    </button>
                                    <a href="#" className="text-[#0066cc] text-[16px] hover:underline flex items-center">
                                        Learn more <span className="text-[11px] ml-1 mt-[2px]"> &gt; </span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center h-full">
                                <div className="flex items-center gap-1 mb-3 text-4xl font-bold text-black">
                                    <span className="text-4xl"></span>Fitness+
                                </div>
                                <p className="text-[19px] leading-snug mb-7 max-w-[280px] text-black font-medium">
                                    From HIIT to Meditation, there’s something for everyone.
                                </p>
                                <div className="flex flex-col items-center gap-3 mt-auto">
                                    <button className="bg-[#0071e3] text-white px-7 py-2.5 rounded-full text-[16px] font-medium hover:bg-[#0077ed]">
                                        Try it free⁵
                                    </button>
                                    <a href="#" className="text-[#0066cc] text-[16px] hover:underline flex items-center">
                                        Learn more <span className="text-[11px] ml-1 mt-[2px]"> &gt; </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#f5f5f7] py-16 px-4 flex flex-col items-center">
                <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <svg className="w-14 h-14 text-[#1d1d1f]" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M464 224L412.3 130.9C407.5 122.2 398.3 116.9 388.4 116.9H328V96.4C328 78.5 313.5 64 295.6 64H103.6C85.7 64 71.2 78.5 71.2 96.4V368H32V400H108.3C116 432.5 145.2 456 179.6 456C213.9 456 243.2 432.5 250.8 400H350.8C358.5 432.5 387.7 456 422.1 456C456.4 456 485.6 432.5 493.3 400H512V368H495.6V249.1C495.6 238.2 482.4 224 464 224ZM179.6 424C161.9 424 147.6 409.7 147.6 392C147.6 374.3 161.9 360 179.6 360C197.2 360 211.6 374.3 211.6 392C211.6 409.7 197.2 424 179.6 424ZM388.4 148.9H402.1L443.7 224H388.4V148.9ZM422.1 424C404.4 424 390.1 409.7 390.1 392C390.1 374.3 404.4 360 422.1 360C439.7 360 454.1 374.3 454.1 392C454.1 409.7 439.7 424 422.1 424ZM463.6 368H282.8C275.1 335.5 245.9 312 211.5 312H192H147.6H103.2V96.4C103.2 96.2 103.4 96 103.6 96H295.6C295.8 96 296 96.2 296 96.4V240C296 248.8 303.2 256 312 256H356.4H463.6V368Z" fill="currentColor" />
                            </svg>
                        </div>

                        <h3 className="text-black text-[24px] font-bold tracking-tight mb-2">
                            Fast, free delivery
                        </h3>
                        <p className="text-[#1d1d1f] text-[17px] leading-relaxed max-w-[280px] mb-4">
                            Or pick up available items at an Apple Store.
                        </p>
                        <a href="#" className="text-[#0066cc] text-[17px] hover:underline flex items-center group">
                            Learn more <span className="ml-1 text-[12px] transition-transform group-hover:translate-x-1">&gt;</span>
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <svg className="w-14 h-14 text-[#1d1d1f]" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 32C114.6 32 0 125.1 0 240C0 293.7 20.3 343.4 56.4 382.4C44 420 15 448.3 11.5 451.7C3.1 459.9 2.5 473.3 10.3 482C18.1 490.8 31.7 491.7 40.5 484.2C45.2 480.2 99.8 434 140.7 404.8C175.7 423.4 214.8 433.1 256 433.1C397.4 433.1 512 340 512 225.1C512 110.2 397.4 32 256 32ZM256 401.1C220.1 401.1 185.8 392.2 154.9 375.4L140 367.4L123.7 377.3C104.1 389.2 81.3 404.7 61 418.9C79 397.6 94.7 372.4 105.8 345.5L112.9 328.2L98.5 315.3C68.9 288.7 51.6 254.4 51.6 218.4C51.6 123.2 143.3 45.7 256 45.7C368.7 45.7 460.4 123.2 460.4 218.4C460.4 313.6 368.7 401.1 256 401.1Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-black text-[24px] font-bold tracking-tight mb-2">
                            Get help buying
                        </h3>
                        <p className="text-[#1d1d1f] text-[17px] leading-relaxed max-w-[300px] mb-4">
                            Have a question? Call a Specialist or chat online.
                        </p>
                        <a href="#" className="text-[#0066cc] text-[17px] hover:underline flex items-center group">
                            Contact us <span className="ml-1 text-[12px] transition-transform group-hover:translate-x-1">&gt;</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TvHome
         