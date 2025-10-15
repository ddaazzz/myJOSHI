import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const influencers = [
  {
    id: 'sakura',
    name: 'Sakura Hoshino',
    description: 'J-Pop idol, dancer, and NFT creator. Sakura loves connecting with fans and sharing exclusive digital art.',
    image: '/img/1.png',
  },
  {
    id: 'yuto',
    name: 'Yuto Tanaka',
    description: 'Gaming influencer and streamer. Yuto offers unique NFT collectibles and interactive livestreams.',
    image: '/img/2.png',
  },
  {
    id: 'mika',
    name: 'Mika Arai',
    description: 'Fashion model and digital artist. Mika shares her latest NFT fashion drops and behind-the-scenes content.',
    image: '/img/3.png',
  },
];

const MimotoArtHome = () => {
  return (
    <div className={styles.container}>
      <h1 className="tw-text-3xl tw-font-bold tw-mb-8 tw-text-center">Mimoto NFT Marketplace</h1>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mb-12">
        {influencers.map((influencer) => (
          <div key={influencer.id} className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-flex tw-flex-col tw-items-center">
            <img src={influencer.image} alt={influencer.name} className="tw-w-32 tw-h-32 tw-object-cover tw-rounded-full tw-mb-4" />
            <h2 className="tw-text-xl tw-font-semibold tw-mb-2">{influencer.name}</h2>
            <p className="tw-text-gray-600 tw-mb-4 tw-text-center">{influencer.description}</p>
            <Link href={`/mimoto/${influencer.id}`}>
              <a className="tw-bg-pink-500 tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-bg-pink-600 tw-transition">Visit Page</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="tw-text-center tw-text-gray-500">* All content is for demonstration purposes only.</div>
    </div>
  );
};

export default MimotoArtHome;
