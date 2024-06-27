'use client';
import Link from 'next/link';
import { useState } from 'react';

const MenuItem = ({ href, children }) => (
    <Link className="hover:text-primary" href={href}>
        {children}
    </Link>
);

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="flex justify-between p-5 font-poppins px-8">
                <div className="text-primary blippo text-[5vw] lg:text-[2vw] font-bold">
                    <Link href="/">witt.</Link>
                </div>
                <div className="hidden sm:flex items-center text-gray-600 gap-8 text-[1.5vw] lg:text-[1vw]">
                    <MenuItem href="/">Home</MenuItem>
                    <MenuItem href="/pricing">Price</MenuItem>
                    <MenuItem href="/blog">Blog</MenuItem>
                    <MenuItem href="/faqs">FAQs</MenuItem>
                    <MenuItem href="/about-us">About us</MenuItem>
                </div>
                <div className="hidden sm:block"></div>
                <div className="block sm:hidden">
                    <button
                        onClick={handleClick}
                        aria-label={click ? 'Close menu' : 'Open menu'}
                        className="focus:outline-none"
                    >
                        {click ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>

            {click && (
                <div className="absolute sm:hidden z-20 h-screen w-screen bg-white">
                    <div className="absolute bg-primary left-[5%] right-[5%] h-[80vh] rounded-[50px] flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-8 text-white text-[6vw] font-bold">
                            <MenuItem href="/">Home</MenuItem>
                            <MenuItem href="/pricing">Price</MenuItem>
                            <MenuItem href="/blog">Blog</MenuItem>
                            <MenuItem href="/faqs">FAQs</MenuItem>
                            <MenuItem href="/about-us">About us</MenuItem>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
