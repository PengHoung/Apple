import React from 'react'

export default function Footer() {
    const footerLinks = [
        {
            title: 'Shop and Learn',
            links: [
                'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'
            ]
        },
        {
            title: 'Apple Wallet',
            links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
        },
        {
            title: 'Account',
            links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
        },
        {
            title: 'Entertainment',
            links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
        },
        {
            title: 'Apple Store',
            links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']
        },
        {
            title: 'For Business',
            links: ['Apple and Business', 'Shop for Business']
        },
        {
            title: 'For Education',
            links: ['Apple and Education', 'Shop for K-12', 'Shop for College']
        },
        {
            title: 'For Healthcare',
            links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone']
        },
        {
            title: 'For Government',
            links: ['Shop for Government', 'Shop for Veterans and Military']
        },
        {
            title: 'Apple Values',
            links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility']
        },
        {
            title: 'About Apple',
            links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
        }
    ]

    return (
        <footer className="w-full bg-[#1d1d20] flex flex-col items-center justify-center font-sans">
            <div className="w-full max-w-[1006px] px-4 md:px-0 flex flex-col items-center">

                {/* 🔹 FOOTER PART 1 — LEGAL & DISCLAIMERS */}
                <div className="w-full max-w-[980px] h-auto pt-8 pb-4 border-b border-gray-700/40 text-[11px] leading-relaxed text-gray-400 font-light text-left">
                    <p className="mb-3">
                        1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
                    </p>
                    <p className="mb-3">
                        To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>
                    <p className="mb-3">
                        Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
                    </p>
                    <p className="mb-3">
                        If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
                    </p>
                    <p className="mb-3">
                        Learn more about how Apple Card applications are evaluated at <a href="https://support.apple.com/kb/HT209218" className="text-white hover:underline">support.apple.com/kb/HT209218</a>.
                    </p>
                    <p className="mb-3">
                        A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
                    </p>
                    <p className="mb-0">
                        Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
                    </p>
                </div>

                {/* 🔹 FOOTER PART 2 — NAVIGATION LINKS (MAIN FOOTER GRID) */}
                <div className="w-full max-w-[980px] h-auto pt-8 flex flex-col md:flex-row md:justify-between text-[11px]">
                    {/* Column 1 */}
                    <div className="w-full md:w-[196px] flex flex-col gap-6 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">Shop and Learn</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[0].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">Apple Wallet</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[1].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-[196px] flex flex-col gap-6 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">Account</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[2].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">Entertainment</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[3].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-[196px] flex flex-col gap-6 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">Apple Store</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[4].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="w-full md:w-[196px] flex flex-col gap-6 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">For Business</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[5].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">For Education</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[6].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">For Healthcare</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[7].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">For Government</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[8].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Column 5 */}
                    <div className="w-full md:w-[196px] flex flex-col gap-6 mb-6 md:mb-0">
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">Apple Values</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[9].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold mb-2">About Apple</h3>
                            <ul className="flex flex-col gap-1.5">
                                {footerLinks[10].links.map(link => <li key={link}><a href="#" className="text-[#a1a1a6] hover:underline hover:text-white">{link}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 🔹 FOOTER PART 3 — BOTTOM BAR */}
                <div className="w-full max-w-[980px] h-auto pt-8 pb-4 text-[11px] text-[#a1a1a6]">
                    <div className="border-b border-gray-700/40 pb-2 mb-2">
                        <p>More ways to shop: <a href="#" className="text-[#2997ff] hover:underline">Find an Apple Store</a> or <a href="#" className="text-[#2997ff] hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center pt-2 gap-4 md:gap-0">
                        <p className="order-2 md:order-1">Copyright © 2025 Apple Inc. All rights reserved.</p>
                        <div className="flex flex-wrap gap-2 md:gap-4 order-1 md:order-2">
                            <a href="#" className="hover:underline hover:text-white border-r border-[#424245] pr-4 last:border-0 last:pr-0">Privacy Policy</a>
                            <a href="#" className="hover:underline hover:text-white border-r border-[#424245] pr-4 last:border-0 last:pr-0">Terms of Use</a>
                            <a href="#" className="hover:underline hover:text-white border-r border-[#424245] pr-4 last:border-0 last:pr-0">Sales and Refunds</a>
                            <a href="#" className="hover:underline hover:text-white border-r border-[#424245] pr-4 last:border-0 last:pr-0">Legal</a>
                            <a href="#" className="hover:underline hover:text-white border-r border-[#424245] pr-4 last:border-0 last:pr-0">Site Map</a>
                        </div>
                        <a href="#" className="hover:underline hover:text-white order-3">United States</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}
