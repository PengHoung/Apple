import largetallVideo from '../../assets/largetall_2x.mp4'
import heroImage from '../../assets/image/hero.jpg'
import heroImage2 from '../../assets/image/airpod.jpg'
import heroImage3 from '../../assets/image/ipad.jpeg'
import heroImage4 from '../../assets/image/tap.jpeg'
import heroImage5 from '../../assets/image/watch.jpeg'
import heroImage6 from '../../assets/image/ip.jpeg'
import heroImage7 from '../../assets/image/phone.jpeg'
import heroImage8 from '../../assets/image/sim.jpeg'
import heroImage9 from '../../assets/image/ipt.png'
import heroImage10 from '../../assets/image/series.png'
import heroImage11 from '../../assets/image/trad.png'
import heroImage12 from '../../assets/image/card.png'
import EntertainmentSlider from './EntertainmentSlider'
import VideoSlider from './VideoSlider'
import Footer from '../Footer'

function Home() {
    return (
        <div className="flex flex-col gap-4">
            <div id='bg' className="relative bg-amber-200 w-full h-[692px] overflow-hidden">
                <video className="absolute inset-0 h-full w-full object-cover"
                    src={largetallVideo} autoPlay muted playsInline>
                </video>
                <div className="banner gap-4 flex h-[100%] w-[100%] flex-col items-center mt-22 absolute ">
                    <p className="text-back font-[600]  text-5xl mb-8max-w-3xl">Wrapping Up This Special Season.</p>
                    <p className="text-back font-[300]  text-3xl mb-8max-w-3xl">There's still time to make their holiday one of a kind.</p>
                    <div className="flex ">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                            Show Gifts
                        </button>
                    </div>
                </div>
            </div>
            <div id='bg2' className="w-full h-[692px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="banner gap-4 flex  w-[100%] flex-col items-center mt-22 absolute ">
                    <p className="text-back font-[600]  text-5xl mb-8max-w-3xl">iPhone</p>
                    <p className="text-back font-[300]  text-3xl mb-8max-w-3xl">Say hello to the latest generation of iPhone.</p>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                            Learn More
                        </button>
                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                            Shop Iphone
                        </button>
                    </div>
                </div>
            </div>
            <div id='bg3' className="w-full h-[692px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage2})` }}>
                <div className="banner gap-4 flex  w-[100%] flex-col items-center mt-22 absolute ">
                    <p className="text-back font-[600]  text-5xl mb-8max-w-3xl">AirPods Pro3</p>
                    <p className="text-back font-[300]  text-3xl mb-8max-w-3xl">The world's best in-ear Active Noise Cancellation.</p>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                            Learn More
                        </button>
                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                            Buy
                        </button>
                    </div>

                </div>
            </div>
            <div id='bg4' className="w-full h-auto bg-cover bg-center flex flex-col gap-4 sm:flex-col md:flex-col lg:flex-col xl:flex-row">
                <div className=" w-[100%] h-[100%] flex flex-col gap-4">
                    <a href="">
                        <div className="bg-amber-200 w-[100%] h-[580px]">
                            <div id='bg3' className="w-[100%] h-[580px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage3})` }}>
                                <div className="banner gap-4 flex w-[100%] flex-col items-center   ">
                                    <p className="text-back font-[600]  text-4xl mb-8max-w-3xl mt-6">AirPods Pro3</p>
                                    <p className="text-back font-[300]  text-2xl mb-8max-w-3xl">The world's best in-ear Active Noise Cancellation.</p>
                                    <div className="flex gap-4">
                                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-[0.8rem] font-medium transition-colors duration-200">
                                            Learn More
                                        </button>
                                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-amber-200 w-[100%] h-[580px]">
                            <div id='bg3' className="w-[100%] h-[580px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage5})` }}>
                                <div className="banner gap-4 flex w-[100%] flex-col items-center   ">
                                    <p className="text-back font-[600]  w-[344px] h-[35px] bg-cover bg-center text-4xl mb-8max-w-3xl mt-6 " style={{ backgroundImage: `url(${heroImage10})` }}></p>
                                    <p className="text-back font-[300]  text-2xl mb-8max-w-3xl">The ultimate way to watch your health.</p>
                                    <div className="flex gap-4">
                                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-[0.8rem] font-medium transition-colors duration-200">
                                            Learn More
                                        </button>
                                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-amber-200 w-[100%] h-[580px]">
                            <div id='bg3' className="w-[100%] h-[580px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage7})` }}>
                                <div className="banner gap-4 flex w-[100%] flex-col items-center   ">
                                    <p className="text-back font-[300]   h-[65px]  text-4xl mb-8max-w-3xl mt-6 w-full  bg-[length:190px] bg-no-repeat bg-center " style={{ backgroundImage: `url(${heroImage11})` }}></p>
                                    <p className="text-back font-[300]  text-2xl mb-8max-w-3xl text-center">Get up to $180-$670<br />in credit when you trade in <br /> iPhone 13 or higher.</p>
                                    <div className="flex gap-4">
                                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-[0.8rem] font-medium transition-colors duration-200">
                                            Learn More
                                        </button>
                                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className=" w-[100%] h-[100%] flex flex-col gap-4">
                    <a href="">
                        <div className="bg-amber-200 w-[100%] h-[580px]">
                            <div id='bg3' className="w-[100%] h-[580px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage4})` }}>
                                <div className="banner gap-4 flex w-[100%] flex-col items-center   ">
                                    <p className="text-back font-[600]  w-[144px] h-[35px] text-4xl mb-8max-w-3xl mt-6 " style={{ backgroundImage: `url(${heroImage9})` }}></p>
                                    <p className="text-back font-[300]  text-2xl mb-8max-w-3xl">Now supercharged by the M3 chip.</p>
                                    <div className="flex gap-4">
                                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-[0.8rem] font-medium transition-colors duration-200">
                                            Learn More
                                        </button>
                                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-amber-200 w-[100%] h-[580px]">
                            <div id='bg3' className="w-[100%] h-[580px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage6})` }}>
                                <div className="banner gap-4 flex w-[100%] flex-col items-center   ">
                                    <p className="text-back font-[600]  text-4xl mb-8max-w-3xl mt-6">iPad</p>
                                    <p className="text-back font-[300]  text-2xl mb-8max-w-3xl text-center">Now with the speed of the A16 chip <br />and double the starting storage.</p>
                                    <div className="flex gap-4">
                                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-[0.8rem] font-medium transition-colors duration-200">
                                            Learn More
                                        </button>
                                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="bg-amber-200 w-[100%] h-[580px]">
                            <div id='bg3' className="w-[100%] h-[580px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage8})` }}>
                                <div className="banner gap-4 flex w-[100%] flex-col items-center   ">
                                    <p className="text-back font-[300]   h-[65px]  text-4xl mb-8max-w-3xl mt-6 w-full  bg-[length:120px] bg-no-repeat bg-center " style={{ backgroundImage: `url(${heroImage12})` }}></p>
                                    <p className="text-back font-[300]  text-2xl mb-8max-w-3xl text-center">Get up to 3% Daily Cash Back <br /> with every purchase.</p>
                                    <div className="flex gap-4">
                                        <button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-[0.8rem] font-medium transition-colors duration-200">
                                            Learn More
                                        </button>
                                        <button className=" hover:bg-blue-500 border-2 hover:text-white border-blue-500 text-blue-900 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="flex flex-col gap-0">
                <EntertainmentSlider />
                <VideoSlider />
                <Footer />
            </div>
        </div>
    )
}

export default Home
