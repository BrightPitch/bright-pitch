import React, { useState } from 'react'
import GoogleButton from './GoogleButton';
import supabase from '@/lib/db';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();

  const handleEmailPasswordLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    router.push("/your-account"); // redirect setelah login
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/your-account`, // redirect setelah login
      },
    });

    if (error) {
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleEmailPasswordLogin} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          EMAIL
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your registered email"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          PASSWORD
        </label>
        <input
          name="password"
          type="password"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded mb-0">
        Login
      </button>

      <div className="flex items-center justify-center my-2 text-sm text-gray-500">
        <span className="w-full border-b border-black"></span>
        <span className="px-2">Or</span>
        <span className="w-full border-b border-black"></span>
      </div>

      <GoogleButton onClick={handleGoogleLogin} title={"google"} />
     
    </form>
  );
};


const RegisterForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleEmailPasswordRegister = async (event) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const username = formData.get('username')

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      setLoading(false)
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    })

    if (error) {
      alert('Error registering: ' + error.message)
      setLoading(false)
      return
    }

    if (data.user) {
      const { error: insertError } = await supabase.from('profiles').insert([
        {
          id: data.user.id,
          username: username,
        },
      ])

      if (insertError) {
        console.error('Failed to save username:', insertError.message)
      }
    }

    alert('Register successful! Redirecting to login...')
    router.push('/login')
    setLoading(false)
  }

  const handleGoogleRegister = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      alert('Google login failed: ' + error.message)
    }
  }

  return (
    <form onSubmit={handleEmailPasswordRegister} className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">USERNAME</label>
        <input
          type="text"
          name="username"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">EMAIL</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">PASSWORD</label>
        <input
          type="password"
          name="password"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">CONFIRM PASSWORD</label>
        <input
          type="password"
          name="confirmPassword"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Retype your password"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded my-0"
      >
        {loading ? 'Registering...' : 'Register'}
      </button>

      <div className="flex items-center justify-center my-2 text-sm text-gray-500">
        <span className="w-full border-b border-black"></span>
        <span className="px-2">Or</span>
        <span className="w-full border-b border-black"></span>
      </div>

      <GoogleButton onClick={handleGoogleRegister} title="Google" />
    </form>
  )
}




export {LoginForm, RegisterForm}