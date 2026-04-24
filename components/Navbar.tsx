"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    const triggerAnimation = () => {
      setVisible(false); // reset
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(true); // slide down
      }, 40);
    };

    const handleScroll = () => {
      const atHero = window.scrollY < window.innerHeight * 0.8;

      if (atHero) {
        triggerAnimation();
      } else {
        setVisible(false); // hide when leaving hero
      }
    };

    // run on first load
    triggerAnimation();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products/productsLanding" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQs", href: "/#faqs" },
  ];

  return (
    <div
      data-navbar
      className={`
  absolute left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-50
  transition-all duration-700 ease-out
 
  ${visible ? "top-4 opacity-100 scale-100" : "-top-20 opacity-0 scale-95"}
`}
    >
      <div
        className={`
      backdrop-blur-2xl
      bg-gradient-to-r from-[#808080]/30 via-[#808080]/30 to-[#808080]/30
      shadow-[0_10px_40px_rgba(37,99,235,0.25)]
      border border-white/10
      rounded-2xl
      flex justify-between items-center
      px-6 py-4 md:py-5 transition-all duration-500
    `}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Integr8 logo"
            width={870}
            height={400}
            className="w-32 md:w-36 brightness-150 contrast-150 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row border border-white/20 font-semibold absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>
                <button
                  className={`relative px-5 py-1 gap-x-4 transition-all duration-300 cursor-pointer group ${
                    pathname === link.href
                      ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      : "text-[#9db4ff] hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                  }`}
                >
                  {link.label}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-x-3">
          <Link href="https://books.integr8.com.ph/Pages/Login.aspx">
            <Button
              variant="outline"
              size="sm"
              className="
        border border-white/20
        text-[#9db4ff]
        bg-white/5
        backdrop-blur-sm
        hover:bg-white/30
        hover:text-white
        transition-all duration-300
      "
            >
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#fafafa] border-t border-[#0437f2]/20 px-8 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#0437f2]/90 font-semibold py-2 border-b border-[#0437f2]/10 hover:text-[#0437f2]/90 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-3 mt-2">
            <Link
              href="https://books.integr8.com.ph/Pages/Login.aspx"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full border-[#0437f2]/80 text-[#0437f2]/90 hover:bg-[#0437f2]/90 hover:text-white"
              >
                Login
              </Button>
            </Link>

            <Button
              size="sm"
              className="flex-1 bg-gradient-to-b from-[#0437f2] to-[#224d9a] text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
