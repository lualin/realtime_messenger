'use client'

import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, set, useForm } from 'react-hook-form'

type Variant = 'LOGIN' | 'REGISTER'

export const AuthForm = () => {
  // useState for variant and loading
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  // useCallback for toggleVariant
  // when variant changes, toggleVariant will be re-created
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  // useForm for form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  // onSubmit for form
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      // Axios Register
    }

    if (variant === 'LOGIN') {
      // NextAuth Signin
    }
  }

  // socialAction for social sign in
  const socialAction = (action: string) => {
    setIsLoading(true)

    // NextAuth Social Sign In
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md"
    >
      <div
        className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10"
      >
        <form action=""></form>
      </div>
    </div>
  )
}
