"use client";
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full flex justify-center bg-[#fafafa] transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <Link href={'/home'}>
          <Image src={'/logo.png'}
            alt='Integr8 logo'
            width={870}
            height={400}
            className='w-32'
          />
        </Link>

        {/* Centered Nav Links with border */}
        <ul className='flex flex-row border border-primary text-primary font-semibold absolute left-1/2 -translate-x-1/2'>
          <li>
            <Link href={'/about'}>
              <button className="px-5 py-1 hover:bg-primary/90 hover:text-white cursor-pointer">About</button>
            </Link>
          </li>
          <li>
            <Link href={'/products'}>
              <button className="px-5 py-1 hover:bg-primary/90 hover:text-white cursor-pointer">Products</button>
            </Link>
          </li>
          <li>
            <Link href={'/#pricing'}>
              <button className="px-5 py-1 hover:bg-primary/90 hover:text-white cursor-pointer">Pricing</button>
            </Link>
          </li>
          <li>
            <Link href={'/#faqs'}>
              <button className="px-5 py-1 hover:bg-primary/90 hover:text-white cursor-pointer">FAQs</button>
            </Link>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className='flex items-center gap-x-3'>
          <Link href={'https://books.integr8.com.ph/Pages/Login.aspx'}>
            <Button variant={'outline'} size={'sm'}>Login</Button>
          </Link>
          <Button size={'sm'}>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar