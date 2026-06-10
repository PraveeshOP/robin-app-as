"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/servicePage" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full px-20">
      <div className="flex items-center h-20 mt-4">
        <a href="/">
          <img src="/robinLogo.png" alt="Robin App AS Logo" className="h-16" />
        </a>
      </div>
      <div>
        <ul className="flex space-x-20 text-lg font-bold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`pb-1 transition-colors ${
                  pathname === item.href
                    ? "text-[#42a9b8] border-b-2 border-[#42a9b8]"
                    : "text-white hover:text-[#42a9b8]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a href="/contact">
          <button className="text-[#42a9b8] px-5 py-3 rounded-lg border border-[#42a9b8] hover:bg-[#42a9b8] hover:text-white transition-colors text-lg font-bold">
            Get in Touch →
          </button>
        </a>
      </div>
    </div>
  );
}
