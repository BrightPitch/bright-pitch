import LoginForm from '@/components/AuthForm';
import Image from 'next/image';
import React from 'react'

const login = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-400 via-yellow-500 to-gray-300">
      <div className="text-4xl font-bold text-gray-800 mb-8">
        <Image src={'/images/logo.png'} width={150} height={150} />
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-sm">
        <LoginForm title={'LOGIN'} desc={'Input your username and password to continue'}/>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t Have Account?{" "}
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}

export default login