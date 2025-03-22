"use client"
import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"

const signUpPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const newUser = {
            email: data.email,
            password: data.password
        }
        const res = await axios.post('/api/signup', newUser)
        console.log(res.data)
    }

    return (
        <div className='flex justify-center items-center h-[600px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-80 border border-[#bbb] p-3  flex flex-col justify-center items-center gap-3'>
                <h1 className='text-4xl'>SignUp</h1>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor="">Email</label>
                    <input {...register("email", { required: true })} className={`${errors.email && 'border-red-500'} input w-full focus:outline-0`} type="email" />
                    {errors.email && <span className='text-red-500'>Email must be required</span>}
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor="">Password</label>
                    <input {...register("password", { required: true, minLength: 6 })} className={`${errors.password && 'border-red-500'} input w-full focus:outline-0`} type="password" />
                    {errors.password && <span className='text-red-500'>Password is required and must be 6 characters.</span>}
                </div>
                <button type='submit' className='btn'>SignUp</button>
            </form>
        </div>
    )
}

export default signUpPage