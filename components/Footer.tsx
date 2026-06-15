import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Products",
    href: "/#products",
  },
  {
    title: "Contact Us",
    href: "contactUs",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-white py-8 pb-[350px] sm:py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Logo - responsive sizing */}
        <Link href="/" aria-label="go home" className="mx-auto block w-fit">
          <Image
            src={"/logo.png"}
            alt="Integr8 logo"
            width={870}
            height={400}
            className="h-auto w-36 sm:w-44 md:w-56"
            priority
          />
        </Link>

        {/* Navigation Links - vertical on mobile, horizontal on sm+ */}
        <nav className="my-6 sm:my-8 flex items-center gap-3 flex-row sm:flex-wrap justify-center sm:gap-4 md:gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block py-1 sm:py-0 transition-colors duration-150"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Social Icons - with touch-friendly padding */}
        <div className="my-6 sm:my-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {[
            // {
            //   label: "X/Twitter",
            //   path: "M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z",
            // },
            // {
            //   label: "LinkedIn",
            //   path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z",
            // },
            {
              label: "Facebook",
              href: "https://www.facebook.com/Integr8softwaresolutions",
              path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95",
            },
            // {
            //   label: "Instagram",
            //   path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3",
            // },
            // {
            //   label: "TikTok",
            //   path: "M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48",
            // },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary block p-2 rounded-lg transition-colors duration-150"
            >
              <svg
                className="size-5 sm:size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={social.path} />
              </svg>
            </Link>
          ))}
        </div>

        {/* Copyright - responsive text size */}
        <p className="text-muted-foreground text-center text-xs sm:text-sm px-4">
          © {new Date().getFullYear()} Integr8 Software Solutions, All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
