import React from "react";

const OfferBook = ({ offers, isLoading }: { offers: any[], isLoading: boolean }) => {
  // Placeholder: Render a simple offer book for now
  if (isLoading) {
    return <div>Loading offers...</div>;
  }
  if (!offers || offers.length === 0) {
    return <div>No Active Offers</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-8">
      <h2 className="font-bold mb-2">Active Offers</h2>
      <ul>
        {offers.map((offer, idx) => (
          <li key={offer.id || idx} className="mb-2">
            <span className="font-semibold">{offer.nftName || 'NFT'}:</span> {offer.price || 'N/A'} ETH from {offer.from || 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferBook;
