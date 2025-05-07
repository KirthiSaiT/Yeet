import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { shadow } from '../styles/utils'
import { Button } from '../components/ui/button'
import { ModeToggle } from '../components/DarkModeToggle'
import LogOutButton from './LogOutButton'

function Header() {
  const user = 1 // Replace this with actual user state

  return (
    <header
      className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      {/* Logo & Title */}
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/goatius.png"  
          height={60} 
          width={60} 
          alt="logo" 
          className="rounded-full" 
          priority 
        />
        <div className="leading-tight">
          <h1 className="text-xl sm:text-2xl font-bold">YEET</h1>
          <span className="text-sm sm:text-base text-muted-foreground">Notes</span>
        </div>
      </Link>

      {/* Auth Buttons & Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
