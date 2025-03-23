"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

const loginPage = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
   const JWT_SECRET = "53616aee0f6083d17b5e5631f81d1754224b62068dad5eeeb51468b6d8a0d5ffdf22c7d3d3881472d78099a890aaac4788e05f23f76eb08350c5021278152caf"
    localStorage.setItem('token', JWT_SECRET)
    Swal.fire({
      title: "Login Successfuly",
      icon: "success",
      draggable: true
    });
    router.push('/dashboard')
  }

  return (
    <div className='flex justify-center items-center h-[600px]'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-80 border border-[#bbb] p-3  flex flex-col justify-center items-center gap-3'>
        <h1 className='text-4xl'>Login</h1>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor="">Email</label>
          <input {...register("email", { required: true })} className={`${errors.email && 'border-red-500'} input w-full border focus:outline-0`} type="email" />
          {errors.email && <span className='text-red-500'>Email must be required</span>}
        </div>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor="">Password</label>
          <input {...register("password", { required: true, minLength: 6 })} className={`${errors.password && 'border-red-500'} input w-full border focus:outline-0`} type="password" />
          {errors.password && <span className='text-red-500'>Password is required and must be 6 characters.</span>}
        </div>
        <button type='submit' className='btn'>Login</button>
      </form>
    </div>
  )
}

export default loginPage