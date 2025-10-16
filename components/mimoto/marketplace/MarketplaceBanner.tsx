import React from "react";

const MarketplaceBanner = () => (
  <div className="relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-xl border border-pink-100/80 mb-8 shadow-lg p-8">
    <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Joshiryoku</span> Collection
    </h1>
    <p className="text-xl text-stone-600 mb-8 max-w-2xl">
      Discover legendary warriors, mystical mages, and powerful guardians. Each NFT tells a unique story in the Joshiryoku universe.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-sky-100/60 rounded-lg">💎</div>
        <div>
          <p className="text-lg font-bold text-rose-800">42.8K ETH</p>
          <p className="text-sm text-rose-600">Total Volume</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-100/60 rounded-lg">📈</div>
        <div>
          <p className="text-lg font-bold text-rose-800">0.85 ETH</p>
          <p className="text-sm text-rose-600">Floor Price</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-rose-100/60 rounded-lg">👥</div>
        <div>
          <p className="text-lg font-bold text-rose-800">1,247</p>
          <p className="text-sm text-rose-600">Owners</p>
        </div>
      </div>
    </div>
  </div>
);

export default MarketplaceBanner;
