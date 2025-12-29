function DropNav({ activeDropdown, showDropdown, hideDropdown, theme }) {
  const bgClass = theme === 'dark' ? 'bg-[#161617]' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-[#E8E8ED]' : 'text-[#1d1d1f]';
  const subTextClass = theme === 'dark' ? 'text-[#86868b]' : 'text-[#6e6e73]';

  // Specific overrides if needed, but general text color should work on container

  return (
    <>
      {/* Store Dropdown */}
      <div className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'store' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('store')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop</p>
            <p className="text-[24px] font-medium ">Shop Gifts</p>
            <p className="text-[24px] font-medium ">Mac</p>
            <p className="text-[24px] font-medium ">Ipad</p>
            <p className="text-[24px] font-medium ">Iphone</p>
            <p className="text-[24px] font-medium ">Apple Watch</p>
            <p className="text-[24px] font-medium ">Apple Watch Pro</p>
            <p className="text-[24px] font-medium ">AirPods</p>
            <p className="text-[24px] font-medium ">Accessories</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Quick Links</p>
            <p className="text-[12px] font-medium mb-3 ">Find a Store</p>
            <p className="text-[12px] font-medium mb-3 ">Order Status</p>
            <p className="text-[12px] font-medium mb-3 ">Applle Trade In</p>
            <p className="text-[12px] font-medium mb-3 ">Financing</p>
            <p className="text-[12px] font-medium mb-3 ">Personal Setup</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop Special Stores</p>
            <p className="text-[12px] font-medium mb-3 ">Certified Refurbished</p>
            <p className="text-[12px] font-medium mb-3 ">Edcation</p>
            <p className="text-[12px] font-medium mb-3 ">Business</p>
            <p className="text-[12px] font-medium mb-3 ">Veterans and Military</p>
            <p className="text-[12px] font-medium mb-3 ">Government</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* Mac Dropdown */}
      <div id='dropMac' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'mac' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('mac')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Mac</p>
            <p className="text-[24px] font-medium ">Explore All Mac</p>
            <p className="text-[24px] font-medium ">MacBook Air</p>
            <p className="text-[24px] font-medium ">MacBook Pro</p>
            <p className="text-[24px] font-medium ">iMac</p>
            <p className="text-[24px] font-medium ">Mac mini</p>
            <p className="text-[24px] font-medium ">Mac Studio</p>
            <p className="text-[24px] font-medium ">Mac Pro</p>
            <p className="text-[24px] font-medium ">Displays</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop Mac</p>
            <p className="text-[12px] font-medium mb-3 ">Shop Mac</p>
            <p className="text-[12px] font-medium mb-3 ">Mac Accessories</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Trade In</p>
            <p className="text-[12px] font-medium mb-3 ">Financing</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from Mac</p>
            <p className="text-[12px] font-medium mb-3 ">Mac Support</p>
            <p className="text-[12px] font-medium mb-3 ">macOS Sonoma</p>
            <p className="text-[12px] font-medium mb-3 ">Continuity</p>
            <p className="text-[12px] font-medium mb-3 ">iCloud</p>
            <p className="text-[12px] font-medium mb-3 ">Mac for Business</p>
            <p className="text-[12px] font-medium mb-3 ">Education</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* iPad Dropdown */}
      <div id='dropIpad' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'ipad' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('ipad')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore iPad</p>
            <p className="text-[24px] font-medium ">Explore All iPad</p>
            <p className="text-[24px] font-medium ">iPad Pro</p>
            <p className="text-[24px] font-medium ">iPad Air</p>
            <p className="text-[24px] font-medium ">iPad</p>
            <p className="text-[24px] font-medium ">iPad mini</p>
            <p className="text-[24px] font-medium ">Apple Pencil</p>
            <p className="text-[24px] font-medium ">Keyboards</p>
            <p className="text-[24px] font-medium ">Accessories</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop iPad</p>
            <p className="text-[12px] font-medium mb-3 ">Shop iPad</p>
            <p className="text-[12px] font-medium mb-3 ">iPad Accessories</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Trade In</p>
            <p className="text-[12px] font-medium mb-3 ">Financing</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from iPad</p>
            <p className="text-[12px] font-medium mb-3 ">iPad Support</p>
            <p className="text-[12px] font-medium mb-3 ">iPadOS 17</p>
            <p className="text-[12px] font-medium mb-3 ">Final Cut Pro for iPad</p>
            <p className="text-[12px] font-medium mb-3 ">Logic Pro for iPad</p>
            <p className="text-[12px] font-medium mb-3 ">Apple One</p>
            <p className="text-[12px] font-medium mb-3 ">Education</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* iPhone Dropdown */}
      <div id='dropIphone' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'iphone' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('iphone')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore iPhone</p>
            <p className="text-[24px] font-medium ">Explore All iPhone</p>
            <p className="text-[24px] font-medium ">iPhone 15 Pro</p>
            <p className="text-[24px] font-medium ">iPhone 15</p>
            <p className="text-[24px] font-medium ">iPhone 14</p>
            <p className="text-[24px] font-medium ">iPhone 13</p>
            <p className="text-[24px] font-medium ">iPhone SE</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop iPhone</p>
            <p className="text-[12px] font-medium mb-3 ">Shop iPhone</p>
            <p className="text-[12px] font-medium mb-3 ">iPhone Accessories</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Trade In</p>
            <p className="text-[12px] font-medium mb-3 ">Financing</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from iPhone</p>
            <p className="text-[12px] font-medium mb-3 ">iPhone Support</p>
            <p className="text-[12px] font-medium mb-3 ">iOS 17</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Intelligence</p>
            <p className="text-[12px] font-medium mb-3 ">iCloud</p>
            <p className="text-[12px] font-medium mb-3 ">Apple One</p>
            <p className="text-[12px] font-medium mb-3 ">Education</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* Watch Dropdown */}
      <div id='dropWatch' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'watch' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('watch')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Watch</p>
            <p className="text-[24px] font-medium ">Explore All Apple Watch</p>
            <p className="text-[24px] font-medium ">Apple Watch Series 9</p>
            <p className="text-[24px] font-medium ">Apple Watch SE</p>
            <p className="text-[24px] font-medium ">Apple Watch Ultra 2</p>
            <p className="text-[24px] font-medium ">Apple Watch Nike</p>
            <p className="text-[24px] font-medium ">Apple Watch Hermès</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop Watch</p>
            <p className="text-[12px] font-medium mb-3 ">Shop Apple Watch</p>
            <p className="text-[12px] font-medium mb-3 ">Watch Bands</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Trade In</p>
            <p className="text-[12px] font-medium mb-3 ">Financing</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from Watch</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Watch Support</p>
            <p className="text-[12px] font-medium mb-3 ">watchOS 10</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Fitness+</p>
            <p className="text-[12px] font-medium mb-3 ">iCloud</p>
            <p className="text-[12px] font-medium mb-3 ">Apple One</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* Vision Dropdown */}
      <div id='dropVision' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'vision' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('vision')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Vision</p>
            <p className="text-[24px] font-medium ">Explore Apple Vision Pro</p>
            <p className="text-[12px] font-medium mb-3 ">Tech Specs</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop Vision</p>
            <p className="text-[12px] font-medium mb-3 ">Shop Apple Vision Pro</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Vision Pro Accessories</p>
            <p className="text-[12px] font-medium mb-3 ">Book a Demo</p>
            <p className="text-[12px] font-medium mb-3 ">Financing</p>
            <p className="text-[12px] font-medium mb-3 ">Personal Setup</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from Vision</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Vision Pro Support</p>
            <p className="text-[12px] font-medium mb-3 ">AppleCare</p>
            <p className="text-[12px] font-medium mb-3 ">visionOS 26</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* AirPods Dropdown */}
      <div id='dropAirpods' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'airpods' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('airpods')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore AirPods</p>
            <p className="text-[24px] font-medium ">Explore All AirPods</p>
            <p className="text-[24px] font-medium ">AirPods 4</p>
            <p className="text-[24px] font-medium ">AirPods Pro 3</p>
            <p className="text-[24px] font-medium ">AirPods Max</p>
            <p className="text-[12px] font-medium mb-3 ">Compare AirPods</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop AirPods</p>
            <p className="text-[12px] font-medium mb-3 ">Shop AirPods</p>
            <p className="text-[12px] font-medium mb-3 ">AirPods Accessories</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from AirPods</p>
            <p className="text-[12px] font-medium mb-3 ">AirPods Support</p>
            <p className="text-[12px] font-medium mb-3 ">AppleCare</p>
            <p className="text-[12px] font-medium mb-3 ">Hearing Health</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Music</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Fitness+</p>
          </div>
          <div className="flex-1 w-70  "></div>
        </div>
      </div>

      {/* TV & Home Dropdown */}
      <div id='dropTv' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'tv' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('tv')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="flex-1 w-80 flex flex-col ">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore TV & Home</p>
            <p className="text-[24px] font-medium ">Explore TV & Home</p>
            <p className="text-[24px] font-medium ">Apple TV 4K</p>
            <p className="text-[24px] font-medium ">HomePod</p>
            <p className="text-[24px] font-medium ">HomePod mini</p>
          </div>
          <div className="flex-1 w-40  ">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop TV & Home</p>
            <p className="text-[12px] font-medium mb-3 ">Shop Apple TV 4K</p>
            <p className="text-[12px] font-medium mb-3 ">Shop HomePod</p>
            <p className="text-[12px] font-medium mb-3 ">Shop HomePod mini</p>
            <p className="text-[12px] font-medium mb-3 ">Shop Siri Remote</p>
            <p className="text-[12px] font-medium mb-3 ">TV & Home Accessories</p>
          </div>
          <div className="flex-1 w-60  ">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>More from TV & Home</p>
            <p className="text-[12px] font-medium mb-3 ">Apple TV Support</p>
            <p className="text-[12px] font-medium mb-3 ">HomePod Support</p>
            <p className="text-[12px] font-medium mb-3 ">AppleCare for Apple TV</p>
            <p className="text-[12px] font-medium mb-3 ">AppleCare for HomePod</p>
            <p className="text-[12px] font-medium mb-3 ">Apple TV app</p>
            <p className="text-[12px] font-medium mb-3 ">Apple TV</p>
            <p className="text-[12px] font-medium mb-3 ">Home app</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Music</p>
            <p className="text-[12px] font-medium mb-3 ">Siri</p>
            <p className="text-[12px] font-medium mb-3 ">AirPlay</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* Entertainment Dropdown */}
      <div id='dropEntertainment' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'entertainment' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('entertainment')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Entertainment</p>
            <p className="text-[24px] font-medium ">Explore Entertainment</p>
            <p className="text-[24px] font-medium ">Apple One</p>
            <p className="text-[24px] font-medium ">Apple TV</p>
            <p className="text-[24px] font-medium ">Apple Music</p>
            <p className="text-[24px] font-medium ">Apple Arcade</p>
            <p className="text-[24px] font-medium ">Apple Fitness+</p>
            <p className="text-[24px] font-medium ">Apple News+</p>
            <p className="text-[24px] font-medium ">Apple Podcasts</p>
            <p className="text-[24px] font-medium ">Apple Books</p>
            <p className="text-[24px] font-medium ">App Store</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Support</p>
            <p className="text-[12px] font-medium mb-3 ">Apple TV Support</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Music Support</p>
          </div>
          <div className="w-60"></div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* Accessories Dropdown */}
      <div id='dropAccessories' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'accessories' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('accessories')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Shop Accessories</p>
            <p className="text-[24px] font-medium ">Shop All Accessories</p>
            <p className="text-[24px] font-medium ">Mac</p>
            <p className="text-[24px] font-medium ">iPad</p>
            <p className="text-[24px] font-medium ">iPhone</p>
            <p className="text-[24px] font-medium ">Apple Watch</p>
            <p className="text-[24px] font-medium ">Apple Vision Pro</p>
            <p className="text-[24px] font-medium ">AirPods</p>
            <p className="text-[24px] font-medium ">TV & Home</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Accessories</p>
            <p className="text-[12px] font-medium mb-3 ">Made by Apple</p>
            <p className="text-[12px] font-medium mb-3 ">Beats</p>
            <p className="text-[12px] font-medium mb-3 ">AirTag</p>
            <p className="text-[12px] font-medium mb-3 ">Assistive Technologies</p>
          </div>
          <div className="w-60"></div>
          <div className="w-70"></div>
        </div>
      </div>

      {/* Support Dropdown */}
      <div id='dropSupport' className={`${bgClass} ${textClass} fixed top-12 left-0 z-50 flex w-full justify-center items-start overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${activeDropdown !== 'support' ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'}`} onMouseEnter={() => showDropdown('support')} onMouseLeave={hideDropdown}>
        <div className="w-5xl flex-none flex justify-center items-start py-8">
          <div className="w-80 flex flex-col">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Support</p>
            <p className="text-[24px] font-medium ">iPhone</p>
            <p className="text-[24px] font-medium ">Mac</p>
            <p className="text-[24px] font-medium ">iPad</p>
            <p className="text-[24px] font-medium ">Watch</p>
            <p className="text-[24px] font-medium ">Apple Vision Pro</p>
            <p className="text-[24px] font-medium ">AirPods</p>
            <p className="text-[24px] font-medium ">Music</p>
            <p className="text-[24px] font-medium ">TV</p>
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Explore Support</p>
          </div>
          <div className="w-40">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Get Help</p>
            <p className="text-[12px] font-medium mb-3 ">Community</p>
            <p className="text-[12px] font-medium mb-3 ">Check Coverage</p>
            <p className="text-[12px] font-medium mb-3 ">Genius Bar</p>
            <p className="text-[12px] font-medium mb-3 ">Repair</p>
          </div>
          <div className="w-60">
            <p className={`text-[11px] font-normal mb-3 ${subTextClass}`}>Helpful Topics</p>
            <p className="text-[12px] font-medium mb-3 ">Get AppleCare</p>
            <p className="text-[12px] font-medium mb-3 ">Apple Account and Password</p>
            <p className="text-[12px] font-medium mb-3 ">Billing & Subscriptions</p>
            <p className="text-[12px] font-medium mb-3 ">Accessibility</p>
          </div>
          <div className="w-70"></div>
        </div>
      </div>
    </>
  )
}


export default DropNav
