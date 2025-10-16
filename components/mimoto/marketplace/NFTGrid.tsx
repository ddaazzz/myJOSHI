import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { createPageUrl } from "@/components/utils";

const NFTGrid = ({ nfts, isLoading, viewMode }: { nfts: any[], isLoading: boolean, viewMode: string }) => {
  // Placeholder: Render a simple grid for now
  if (isLoading) {
    return <div>Loading NFTs...</div>;
  }
  if (!nfts || nfts.length === 0) {
    return <div>No NFTs Found</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nfts.map((nft, idx) => (
        <a href={`/mimoto/kol/${nft.id}`} key={nft.id || idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:tw-shadow-xl tw-transition">
          <img src={nft.image_url || '/img/1.png'} alt={nft.name} className="w-32 h-32 object-cover rounded-full mb-2" />
          <h3 className="font-semibold text-lg mb-1">{nft.name}</h3>
          <div className="text-gray-500 text-sm mb-1">{nft.attribute}</div>
          <div className="text-pink-500 font-bold mb-1">{nft.mimoto}</div>
          <div className="text-rose-700 text-sm mb-2">Interactions: {nft.interactions}</div>
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 tw-transition mb-2"
            onClick={e => { e.preventDefault(); alert(`Send tokens to ${nft.name}'s address!`); }}
          >
            Donate Coin
          </button>
          <div className="tw-text-xs tw-text-gray-400 tw-mt-2">Click card for more details</div>
        </a>
      ))}
    </div>
  );
};

export default NFTGrid;
