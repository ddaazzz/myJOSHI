import React from 'react';
import styles from '../../styles/Home.module.css';

const YutoPage = () => (
  <div className={styles.container}>
    <div className="tw-flex tw-flex-col tw-items-center tw-mt-8">
      <img src="/img/2.png" alt="Yuto Tanaka" className="tw-w-40 tw-h-40 tw-object-cover tw-rounded-full tw-mb-4" />
      <h1 className="tw-text-3xl tw-font-bold tw-mb-2">Yuto Tanaka</h1>
      <p className="tw-text-lg tw-mb-4 tw-text-center">Gaming influencer and streamer. Yuto offers unique NFT collectibles and interactive livestreams.</p>
      <button className="tw-bg-pink-500 tw-text-white tw-px-6 tw-py-2 tw-rounded tw-mb-4 hover:tw-bg-pink-600 tw-transition">Donate Coin</button>
      <div className="tw-bg-gray-100 tw-p-6 tw-rounded-lg tw-shadow-md tw-w-full md:tw-w-2/3 tw-mb-8">
        <h2 className="tw-text-xl tw-font-semibold tw-mb-2">Featured NFT</h2>
        <img src="/img/5.png" alt="Yuto NFT" className="tw-w-48 tw-h-48 tw-object-cover tw-rounded tw-mb-2" />
        <p className="tw-text-gray-700">"Pixel Power" - Exclusive NFT by Yuto. Grab yours and join the gaming revolution!</p>
      </div>
    </div>
  </div>
);

export default YutoPage;
