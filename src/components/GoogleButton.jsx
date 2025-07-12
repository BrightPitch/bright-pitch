import React from 'react'
import { FcGoogle } from 'react-icons/fc';

const GoogleButton = ({title, onClick}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full flex items-center justify-center gap-2 border border-yellow-500 py-2 rounded hover:bg-gray-100">
      <FcGoogle className='text-2xl' />
      Continue with {title}
    </button>
  );
}

export default GoogleButton