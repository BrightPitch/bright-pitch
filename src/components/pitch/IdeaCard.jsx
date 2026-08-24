import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const IdeaCard = ({ image, title, description }) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm">👤   Inventor username</div>
        <Bookmark className="text-accent" />
      </div>
      <h2 className="font-bold text-lg mt-1">{title}</h2>
      <div className="flex gap-2 mt-2">
        <span className="text-xs bg-secondary rounded-full px-2 py-0.5">
          🍴 Food and beverage
        </span>
        <span className="text-xs bg-secondary rounded-full px-2 py-0.5">
          # Ongoing
        </span>
      </div>

      <p className="my-4 line-clamp-3">{description}</p>

      <Image width={400} height={400} src={image} alt="preview" className="w-full rounded-md my-4" />

      <button className="w-full bg-primary rounded-md font-semibold">
        ✈️ Explore Opportunity
      </button>
    </section>
  );
};

export default IdeaCard