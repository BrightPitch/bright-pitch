// pages/_app.tsx
import '@/styles/globals.css' // Your global CSS
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
    </>
  )
}