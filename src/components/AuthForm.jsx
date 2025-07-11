import React from 'react'
import GoogleButton from './GoogleButton';
import supabase from '@/lib/db';
import { useRouter } from 'next/router';

const LoginForm = () => {

  const router = useRouter()

  // TODO: Handle email/password login
  const handleEmailPasswordLogin = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    router.push('/your-account')
  }

  const handleGoogleLogin = () => {
    // TODO: Trigger Google OAuth login
    console.log('Sign in with Google')
  }

  return (
    <form onSubmit={handleEmailPasswordLogin} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          EMAIL
        </label>
        <input
          name='email'
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your registered email"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          PASSWORD
        </label>
        <input
          name='password'
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your password"
        />
      </div>

      <button
        type='submit'
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded mb-0">
        Login
      </button>

      <div className="flex items-center justify-center my-2 text-sm text-gray-500">
        <span className="w-full border-b border-black"></span>
        <span className="px-2">Or</span>
        <span className="w-full border-b border-black"></span>
      </div>

      <GoogleButton title={"google"} />
    </form>
  );
}

const RegisterForm = () => {
  // TODO: Handle email/password register
  const handleEmailPasswordRegister = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

  }

  const handleGoogleRegister = () => {
    // TODO: Trigger Google OAuth register
    console.log('Register with Google')
  }

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          USERNAME
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          EMAIL
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          PASSWORD
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          CONFIRM PASSWORD
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Retype your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded my-0">
        Register
      </button>
      <div className="flex items-center justify-center my-2 text-sm text-gray-500">
        <span className="w-full border-b border-black"></span>
        <span className="px-2">Or</span>
        <span className="w-full border-b border-black"></span>
      </div>
      <GoogleButton title={"google"} />
    </form>
  );
}

export {LoginForm, RegisterForm}