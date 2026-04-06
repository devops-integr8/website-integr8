"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQs", href: "/#faqs" },
  ];

  return (
    <div
      data-navbar
      className={`w-full bg-[#fafafa] transition-transform duration-300 ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Integr8 logo"
            width={870}
            height={400}
            className="w-32"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row border border-[#0437f2]/80 text-[#0437f2]/80 font-semibold absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>
                <button className="px-5 py-1 hover:bg-gradient-to-b from-[#0437f2] to-[#224d9a] hover:text-white cursor-pointer">
                  {link.label}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-x-3">
          <Link href={"https://books.integr8.com.ph/Pages/Login.aspx"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className="border-[#0437f2]/90 text-[#0437f2]/90 hover:bg-gradient-to-b from-[#0437f2] to-[#224d9a] hover:text-white"
            >
              Login
            </Button>
          </Link>

          <Button
            size={"sm"}
            className="bg-gradient-to-b from-[#0437f2] to-[#224d9a] hover:bg-gradient-to-b from-[#0437f2] to-[#224d9a] text-white"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-p p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
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
              href={"https://books.integr8.com.ph/Pages/Login.aspx"}
              className="flex-1"
            >
              <Button
                variant={"outline"}
                size={"sm"}
                className="w-full border-[#0437f2]/80 text-[#0437f2]/90 hover:bg-[#0437f2]/90 hover:text-white"
              >
                Login
              </Button>
            </Link>
            <Button
              size={"sm"}
              className="flex-1 bg-gradient-to-b from-[#0437f2] to-[#224d9a] hover:bg-gradient-to-b from-[#0437f2] to-[#224d9a] text-white"
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
