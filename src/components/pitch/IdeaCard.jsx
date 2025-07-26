import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const IdeaCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">👤 Inventor username</div>
        <Bookmark className="text-purple-600" />
      </div>

      <h2 className="font-bold text-lg mt-1">{title}</h2>

      <div className="flex gap-2 mt-1">
        <span className="text-xs bg-gray-200 rounded-full px-2 py-0.5">
          🍴 Food and beverage
        </span>
        <span className="text-xs bg-gray-200 rounded-full px-2 py-0.5">
          # Ongoing
        </span>
      </div>

      <p className="text-sm text-gray-700 mt-2 line-clamp-3">{description}</p>

      <Image width={400} height={400} src={image} alt="preview" className="w-full rounded-md my-3" />

      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg text-sm font-semibold">
        ✈️ Explore Opportunity
      </button>
    </div>
  );
};

export default IdeaCard