"use client";

import Link from "next/link";
import { useState } from "react";

export default function ButtomNavBar() {
  const [email, setEmail] = useState("");

  function handleSubscribe() {
    const subscribeToNewsletter = async () => {
      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("Failed to subscribe to newsletter");
        }

        alert("Subscribed successfully!");
      } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        alert("Failed to subscribe. Please try again.");
      }
      setEmail("");
    };

    subscribeToNewsletter();
  }

  return (
    <footer className="mt-16 w-full px-4 pb-12 pt-4 sm:px-6 lg:px-10 xl:px-20">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
      <div className="min-w-0">
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
          <a
            href="https://www.linkedin.com/company/robin-app-as"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedinLogo.png" alt="LinkedIn" className="h-6" />
          </a>
          <img src="/facebookLogo.png" alt="Facebook" className="h-6" />
        </div>
      </div>
      <div className="min-w-0">
        <div>
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Quick Links</h1>
          </div>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/servicePage">Services</Link>
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
      <div className="min-w-0">
        <div>
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Services</h1>
          </div>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link href="/">Web Development</Link>
            </li>
            <li>
              <Link href="/servicePage">Mobile Development</Link>
            </li>
            <li>
              <Link href="/servicePage">Accounting Systems</Link>
            </li>
            <li>
              <Link href="/servicePage">IT Consulting</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-w-0">
        <div>
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
      <div className="min-w-0 sm:col-span-2 lg:col-span-1">
        <div>
          <div className="items-center mb-4">
            <h1 className="text-lg font-bold">Newsletter</h1>
          </div>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <div className="flex flex-col gap-3 xl:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#42a9b8]"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#42a9b8] text-white px-5 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
