import React from 'react'
import GoogleButton from './GoogleButton';

const LoginForm = ({title, desc}) => {
  return (
    <form className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          USERNAME
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          PASSWORD
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex items-center justify-center my-2 text-sm text-gray-500">
        <span className="w-full border-b border-black"></span>
        <span className="px-2">Or</span>
        <span className="w-full border-b border-black"></span>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
        {title}
      </button>

      <GoogleButton title={"google"} />
    </form>
  );
}

export default LoginForm