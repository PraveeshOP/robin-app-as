"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/servicePage" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 w-full px-4 sm:px-6 lg:px-10 xl:px-20">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between">
        <Link href="/" aria-label="Robin App AS home">
          <img
            src="/robinLogo.png"
            alt="Robin App AS Logo"
            className="h-12 w-auto sm:h-14"
          />
        </Link>
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8 text-base font-bold xl:gap-16 xl:text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`pb-1 transition-colors ${
                    pathname === item.href
                      ? "text-[#42a9b8] border-b-2 border-[#42a9b8]"
                      : "text-[var(--foreground)] hover:text-[#42a9b8]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-lg border border-[#42a9b8] px-5 py-3 text-base font-bold text-[#42a9b8] transition-colors hover:bg-[#42a9b8] hover:text-white lg:block xl:text-lg"
        >
          Get in Touch →
        </Link>
        <button
          type="button"
          className="rounded-md p-2 text-[#42a9b8] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute left-4 right-4 top-20 rounded-xl border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-lg font-bold">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-3 ${pathname === item.href ? "bg-[color:var(--surface-elevated)] text-[#42a9b8]" : "text-[var(--foreground)] hover:bg-[color:var(--surface-elevated)]"}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-[#42a9b8] px-4 py-3 text-center text-white"
              >
                Get in Touch →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
