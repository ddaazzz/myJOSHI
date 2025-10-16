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
        <div key={nft.token_id || nft.id || idx} className="bg-white rounded-lg shadow p-4">
          <img src={nft.image_url || '/img/1.png'} alt={nft.name} className="w-full h-48 object-cover rounded mb-2" />
          <h3 className="font-semibold text-lg mb-1">{nft.name}</h3>
          <div className="text-gray-500 text-sm mb-1">{nft.collection_name}</div>
          <div className="text-pink-500 font-bold">{nft.current_price ? `${nft.current_price} ETH` : 'Not Listed'}</div>
        </div>
      ))}
    </div>
  );
};

export default NFTGrid;
