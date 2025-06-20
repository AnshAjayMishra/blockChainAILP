import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <main className="bg-black text-white py-12 md:py-24 px-4 md:px-28">
      {/* Headings */}
      <div className="flex flex-col items-center text-center space-y-3 md:space-y-6 font-[Clash Grotesk]">
        <h1 className="text-4xl md:text-7xl font-semibold bg-gradient-to-r from-pink-500 via-orange-100 to-purple-500 bg-clip-text text-transparent">
          A Fast Blockchain.
        </h1>
        <h1 className="text-4xl md:text-7xl font-semibold">Scalable AI.</h1>
      </div>

      {/* Description */}
      <div className="flex flex-col items-center text-center py-6 md:py-8 font-[Cabinet Grotesk] leading-relaxed max-w-3xl mx-auto text-sm md:text-base">
        <p>
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed <br /> AI-based data security. Proof of Stake, its
          consensus algorithm enables <br /> unlimited speeds.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 bg-black">
        {/* Button 1 */}
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            Get Started
          </span>
        </button>

        {/* Button 2 */}
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#3f3f46_50%,#ffffff_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            Ecosystem
          </span>
        </button>
      </div>

      {/* Image and Blurs */}
      <div className="relative w-full mt-12">
        {/* Left blue blur */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-500/20 blur-3xl rounded-full z-0" />

        {/* Right pink blur */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-pink-500/20 blur-3xl rounded-full z-0" />

        {/* Main image */}
        <Image
          alt="main image"
          src="/images/absmain.png"
          width={1605}
          height={619}
          className="relative z-10 w-full max-w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </main>
  );
}

export default Hero;
