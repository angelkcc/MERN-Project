'use client'

import Input from '../ui/inputs/input'
import Button from '../ui/buttons/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterInput } from '@/app/types/auth.types'
import { registerSchema } from '@/app/schema/auth.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Register } from '@/api/auth.api'
import toast from 'react-hot-toast'

const RegisterForm = () => {

    const { register, handleSubmit , formState: { errors } } = useForm<RegisterInput>({
        defaultValues: {
            full_name: '',
            email: '',
            password: '',
            c_password: '',
            phone: '',
        },
        resolver: yupResolver(registerSchema),
        mode: 'all',
    })
    const { isPending, mutate } = useMutation({
            mutationFn: Register,
            onSuccess: (response) => {
                toast.success("Registration successful! 🎉");
                console.log('on mutation success', response)
            },
            onError: (error) => {
                toast.error("Registration failed. Please check your input and try again.");
                console.log('on mutation error', error)
            }
        })
    

    const onSubmit: SubmitHandler<RegisterInput> = (formData) => {
        mutate(formData)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1">

            {/* Full Name */}
            <Input
                placeholder="John Doe"
                name="full_name"
                id="full_name"
                label="Full Name"
                register={register}
                required={true}
                error={errors?.full_name?.message}
            />

            {/* Email */}
            <Input
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                label="Email"
                register={register}
                required={true}
                error={errors?.email?.message}
            />

            {/* Password */}
            <Input
                placeholder="Enter your password"
                name="password"
                id="password"
                label="Password"
                type="password"
                register={register}
                required={true}
                error={errors?.password?.message}
            />
            {/* Confirm Password */}
            <Input
                placeholder="Confirm your password"
                name="c_password"
                id="c_password"
                label="Confirm Password"
                type="password"
                register={register}
                required={true}
                error={errors?.c_password?.message}
            />
            {/* Phone */}
            <Input
                placeholder="Enter your phone number"
                name="phone"
                id="phone"
                label="Phone"
                type="number"
                register={register}
                required={false}
                error={errors?.phone?.message}
            />  

            <div className="w-full mt-3">
                <Button
                    type="submit"
                    disabled={isPending}
                    label={isPending ? 'Registering....' : 'Register'}
                />
            </div>

        </form>
    )
}

export default RegisterForm