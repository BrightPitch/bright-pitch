import {LoginForm} from '@/components/AuthForm';
import Image from 'next/image';
import React from 'react'

const LoginPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-400 via-yellow-500 to-gray-300 pb-2">
      <div className="flex flex-col items-center gap-y-4 text-4xl font-bold text-gray-800 my-8 px-3">
        <Image src={'/images/logo.png'} width={150} height={150} />
        <p className='text-center'>
          Sign in to your account
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[80%] max-w-sm">
        <LoginForm/>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t Have Account?{" "}
          <a href="/register" className="text-purple-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}

export default LoginPage