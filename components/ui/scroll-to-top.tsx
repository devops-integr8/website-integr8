"use client"
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className='bg-primary hover:bg-primary/90 fixed bottom-8 right-8 cursor-pointer z-50'
        >
          <ArrowUp />
        </Button>
      )}
    </>
  )
}

export default ScrollToTopButton