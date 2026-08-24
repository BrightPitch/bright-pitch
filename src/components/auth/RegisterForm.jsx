import React, { useState } from 'react'
import GoogleButton from './GoogleButton';
import supabase from '@/lib/db';
import { useRouter } from 'next/router';

export default function RegisterForm() {
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
                <label className="block text-sm font-bold mt-0">USERNAME</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-bold">EMAIL</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-bold">PASSWORD</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-bold">CONFIRM PASSWORD</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Retype your password"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary font-bold py-2 rounded my-0"
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