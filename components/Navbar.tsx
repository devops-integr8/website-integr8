import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='z-50 fixed top-0 w-full flex justify-between items-center px-8 py-2 bg-[#fafafa]'>
        <div className='flex flex-row items-center gap-8'>
          <Link href={'/#home'}>
            <Image src={'/logo.png'} 
              alt='Integr8 logo' 
              width={870} 
              height={400} 
              className='w-32'
            />
          </Link>
          <ul className='flex flex-row'>
            <li><Link href={'/#about'} className=''><Button className="px-5">About</Button></Link></li>
            <li><Link href={'/#products'} className=''><Button className="px-5">Products</Button></Link></li>
            <li><Link href={'/#pricing'} className=''><Button className="px-5">Pricing</Button></Link></li>
            <li><Link href={'/#faqs'} className=''><Button className="px-5">FAQs</Button></Link></li>
          </ul>
        </div>
        <div className='flex justify-between gap-x-4'>
          <Link href={'https://books.integr8.com.ph/Pages/Login.aspx'}>
            <Button variant={'ghost'} size={'lg'}>Login</Button>
          </Link>
          <Button variant={'outline'} size={'lg'}>Contact Us</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar