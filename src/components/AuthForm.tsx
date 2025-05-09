'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

export default function AuthForm() {
  const router = useRouter()
  const [isPending, setIsPending] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    setIsPending(true)
    toast.success('Logging in...')

    // Simulate async auth
    setTimeout(() => {
      setIsPending(false)
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-[#0d1117] overflow-hidden flex items-start justify-center px-4 pt-24">

      <Toaster richColors />
      
      <div className="w-full max-w-md bg-[#161b22] text-white rounded-2xl p-10 shadow-2xl border border-[#30363d] backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome Back
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              disabled={isPending}
              className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm text-gray-400">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              disabled={isPending}
              className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 focus:outline-none"
          >
            {isPending ? (
              <Loader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-400">
          Don’t have an account?{' '}
          <Link
            href="/sign-up"
            className={`text-blue-500 hover:underline transition ${
              isPending ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
