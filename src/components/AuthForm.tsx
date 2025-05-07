'use client'
import React from 'react'
type Props={
    type:"login"|"signUp";
}
function AuthForm({type}:Props) {
    const isLoginForm = type ==="login"
    const router = useRouter();
  return (
    <div>
      AuthForm
    </div>
  )
}

export default AuthForm
