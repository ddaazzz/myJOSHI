import React, { useState, useEffect, useCallback } from 'react';
import NFTGrid from '../../components/mimoto/marketplace/NFTGrid';
import AdvancedFilters from '../../components/mimoto/marketplace/AdvancedFilters';
import MarketplaceBanner from '../../components/mimoto/marketplace/MarketplaceBanner';
import OfferBook from '../../components/mimoto/marketplace/OfferBook';
// TODO: Replace these with real data fetching or API integration
const NFT = { list: async () => [] };
const TradeOffer = { filter: async () => [] };

export default function MimotoMarketplace() {
  const [nfts, setNfts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    rarityMin: "",
    rarityMax: "",
    traits: [],
    listingStatus: "all",
    collections: [],
    salePeriod: "all"
  });

  const loadMarketplaceData = async () => {
    setIsLoading(true);
    try {
      const [nftData, offerData] = await Promise.all([
        NFT.list(),
        TradeOffer.filter()
      ]);
      setNfts(nftData);
      setOffers(offerData);
    } catch (error) {
      console.error("Error loading marketplace data:", error);
    }
    setIsLoading(false);
  };

  const applyFiltersAndSearch = useCallback(() => {
  let filtered: any[] = [...nfts];
    if (searchTerm) {
      filtered = filtered.filter(nft =>
        nft.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nft.collection_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredNfts(filtered);
  }, [nfts, searchTerm]);

  useEffect(() => { loadMarketplaceData(); }, []);
  useEffect(() => { applyFiltersAndSearch(); }, [applyFiltersAndSearch]);

  const handleRefresh = () => { loadMarketplaceData(); };

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MarketplaceBanner />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <AdvancedFilters 
              filters={filters}
              setFilters={setFilters}
              nfts={nfts}
              onApply={applyFiltersAndSearch}
            />
          </div>
          <div className="flex-1">
            <div className="bg-card-soft border-pink-200/50 shadow-sm p-6 mb-8 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <input
                    placeholder="Search NFTs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/60 border-pink-200/60 text-rose-700 placeholder:text-rose-400 focus:w-64 transition-all duration-300 rounded-xl"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={handleRefresh} disabled={isLoading} className="border-pink-300 text-rose-600 hover:bg-pink-100 px-4 py-2 rounded-xl">Refresh</button>
                  {/* Add sort and view mode controls here if needed */}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-rose-500">
                <span>{filteredNfts.length} NFTs found</span>
                <span>Floor: N/A</span>
              </div>
            </div>
            <NFTGrid nfts={filteredNfts} isLoading={isLoading} viewMode={viewMode} />
            <OfferBook offers={offers} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
