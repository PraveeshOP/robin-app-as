"use client";

import Link from "next/link";

export default function ButtomNavBar() {
  return (
    <div className="flex flex-row items-center w-full px-20 pb-30 mt-10">
      <div className="flex-1 items-center h-20 mt-4 gap-4">
        <div className="items-center">
          <img src="/robinLogo.png" alt="Robin App AS Logo" className="h-12" />
        </div>
        <div className="mt-4">
          <p className="text-gray-400">
            Building Innovative IT Solutions <br /> that drive business growth.
          </p>
        </div>
        <div className="flex flex-row gap-8 mt-4">
          <img src="/instagramLogo.png" alt="Twitter" className="h-6" />
          <img src="/linkedinLogo.png" alt="LinkedIn" className="h-6" />
          <img src="/facebookLogo.png" alt="Facebook" className="h-6" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-1 items-center h-20 mt-4">
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Quick Links</h1>
          </div>
          <ul className="flex flex-col space-x-20 text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-1 items-center h-20 mt-4">
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Services</h1>
          </div>
          <ul className="flex flex-col space-x-20 text-gray-400">
            <li>
              <Link href="/">Web Development</Link>
            </li>
            <li>
              <Link href="/services">Mobile Development</Link>
            </li>
            <li>
              <Link href="/about">Accounting Systems</Link>
            </li>
            <li>
              <Link href="/contact">IT Consulting</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-1 items-center h-20 mt-4">
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Contact Us</h1>
          </div>
          <p className="text-gray-400">
            hello@robinitsolutions.com <br />
            +47 486 72 406 <br />
            Stovner senter 26 <br />
            0985, Oslo
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-1 items-center h-20 mt-4">
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Newsletter</h1>
          </div>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#42a9b8]"
            />
            <button className="bg-[#42a9b8] text-white px-5 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//<ul className="flex space-x-20 text-lg font-bold">
//<li></li>
// </ul>
