import { Compass, Home, PlusCircle } from 'lucide-react';
import React from 'react'

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t shadow-md flex justify-around py-2 z-50">
      <div className="flex flex-col items-center text-xs">
        <Home size={20} />
        Dashboard
      </div>
      <div className="flex flex-col items-center text-xs">
        <PlusCircle size={20} />
        ADD POST
      </div>
      <div className="flex flex-col items-center text-xs">
        <Compass size={20} />
        Explore
      </div>
    </div>
  );
}

export default BottomNav