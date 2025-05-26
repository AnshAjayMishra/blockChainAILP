import React from 'react'
import { FaDiscord, FaGithub, FaReddit, } from "react-icons/fa";
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

function Nav() {
  return (
    <nav className="bg-black text-white py-8 px-28 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-medium font-[Chillax]">Serendale</div>

      {/* Navigation Links */}
      <div className="space-x-8 hidden md:flex font-[Clash Grotesk] ">
        <Link href="#" className="hover:text-gray-400">Smart Contracts</Link>
        <Link href="#" className="hover:text-gray-400">Services</Link>
        <Link href="#" className="hover:text-gray-400">Solutions</Link>
        <Link href="#" className="hover:text-gray-400">Roadmap</Link>
        <Link href="#" className="hover:text-gray-400">Whitepaper</Link>
      </div>

      {/* Icons */}
      <div className="space-x-4 flex items-center">
        <Link href="https://github.com" target="_blank">
          <FaGithub className="hover:text-gray-400" size={15} />
        </Link>
        <Link href="https://discord.com" target="_blank">
          <FaDiscord
          className="hover:text-gray-400" size={15} />
        </Link>
        <Link href="https://serendale.app" target="_blank">
          <FaReddit
            className="hover:text-gray-400" size={15} />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter className="hover:text-gray-400" size={15} />
        </Link>
      </div>
    </nav>
  )
}

export default Nav