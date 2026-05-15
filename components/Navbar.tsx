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
      setVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(true);
      }, 40);
    };

    const handleScroll = () => {
      const atHero = window.scrollY < window.innerHeight * 0.8;
      if (atHero) {
        triggerAnimation();
      } else {
        setVisible(false);
      }
    };

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
    { label: "Contact Us", href: "/contactUs" },
  ];

  return (
    <div
      data-navbar
      className={`
        absolute left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-50
        transition-all duration-700 ease-out
        ${visible ? "top-4 opacity-100 scale-100" : "-top-20 opacity-0 scale-95"}
      `}
    >
      {/* Dynamic Island pill */}
      <div
        className={`
          bg-white/10
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_0.5px_rgba(255,255,255,0.08)]
          rounded-full
          flex justify-between items-center
          px-4 py-2
          transition-all duration-500
        `}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Integr8 logo"
            width={870}
            height={400}
            className="w-24 md:w-28 brightness-150 contrast-150 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          />
        </Link>

        {/* Desktop Nav Links — no box, just the links */}
        <ul className="hidden md:flex flex-row items-center gap-1 font-semibold absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>
                <button
                  className={`relative px-4 py-1.5 text-sm transition-all duration-300 cursor-pointer group rounded-full ${
                    pathname === link.href
                      ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      : "text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                  }`}
                >
                  {link.label}

                  {/* Underline animation — kept intact */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${
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

        {/* Login button — borderless, minimal */}
        <div className="hidden md:flex items-center">
          <Link href="https://books.integr8.com.ph/Pages/Login.aspx">
            <button
              className="
                text-sm font-semibold text-white
                
                transition-all duration-300
                px-3 py-1
                rounded-full
                hover:bg-white/60
                cursor-pointer
              "
            >
              Log in
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1.5 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown — expands below pill */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 font-semibold py-2 border-b border-white/10 hover:text-[#0437f2] transition-colors"
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
                className="w-full border-white/20 text-[#2563EB] hover:bg-white/10 hover:text-[#0437f2] rounded-full"
              >
                Login
              </Button>
            </Link>

            {/* <Button
              size="sm"
              className="flex-1 bg-gradient-to-b from-[#0437f2] to-[#224d9a] text-white rounded-full"
            >
              Sign Up
            </Button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;