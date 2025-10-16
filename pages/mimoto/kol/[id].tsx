import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Demo KOL data (should match the main KOL_LIST)
const KOL_LIST = Array.from({ length: 20 }).map((_, i) => ({
  id: `kol${i+1}`,
  name: `KOL ${i+1}`,
  attribute: [
    'Fashion Icon', 'Tech Guru', 'Fitness Coach', 'Travel Blogger', 'Chef', 'Artist', 'Musician', 'Entrepreneur', 'Gamer', 'Influencer',
    'Photographer', 'Model', 'Actor', 'Comedian', 'Writer', 'Dancer', 'Podcaster', 'Teacher', 'Designer', 'Vlogger'
  ][i % 20],
  image_url: `/img/${(i % 9) + 1}.png`,
  mimoto: `Mimoto #${i+1}`,
  interactions: Math.floor(Math.random() * 1000),
  content: [
    { type: 'photo', url: `/img/${(i % 9) + 1}.png`, locked: true },
    { type: 'video', url: `/video/Miku.mp4`, locked: true }
  ]
}));

const KolPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const kol = KOL_LIST.find(k => k.id === id);
  const [unlocked, setUnlocked] = useState(false);

  if (!kol) return <div className="p-8">KOL not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow">
      <div className="flex flex-col items-center">
        <img src={kol.image_url} alt={kol.name} className="w-32 h-32 object-cover rounded-full mb-4" />
        <h1 className="text-3xl font-bold mb-2">{kol.name}</h1>
        <div className="text-pink-500 font-bold mb-2">{kol.mimoto}</div>
        <div className="text-gray-600 mb-2">{kol.attribute}</div>
        <div className="text-rose-700 text-sm mb-4">Interactions: {kol.interactions}</div>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 tw-transition mb-4"
          onClick={() => setUnlocked(true)}
        >
          Donate Coin to Unlock Content
        </button>
        <div className="w-full mt-4">
          <h2 className="text-xl font-semibold mb-2">Exclusive Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kol.content.map((item, idx) => (
              <div key={idx} className="bg-gray-100 rounded p-4 flex flex-col items-center">
                {item.type === 'photo' ? (
                  <img src={item.url} alt="KOL Photo" className="w-40 h-40 object-cover rounded mb-2" />
                ) : (
                  <video src={item.url} controls className="w-40 h-40 rounded mb-2" />
                )}
                {(!unlocked && item.locked) ? (
                  <div className="text-red-500 font-bold">Locked - Donate to Unlock</div>
                ) : (
                  <div className="text-green-600 font-bold">Unlocked!</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolPage;
