import {RegisterForm} from '@/components/AuthForm';
import Image from 'next/image';
import React from 'react'

const RegisterPage = () => {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-yellow-500 pb-3">
      <div className="flex flex-col items-center gap-y-4 text-4xl font-bold text-gray-800 my-8 px-3">
        <Image src={'/images/logo.png'} width={150} height={150} />
        <p className='text-center'>
          Register your account
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[80%] max-w-sm">
        <RegisterForm/>
      </div>
        <p className="text-center text-sm text-gray-600 my-6">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 font-semibold hover:underline ">
                Sign in instead
            </a>
        </p>
    </main>
  );
}

export default RegisterPage