'use client'

import Button from '@/app/components/ui/buttons/button'
import Input from '@/app/components/ui/inputs/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterInput } from '@/app/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@/app/schema/auth.schema'
import { createAccount } from '@/api/auth.api'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterInput>({
        defaultValues: {
            full_name: '',
            email: '',
            password: '',
            c_password: '',
            phone: ''
        },
        resolver: yupResolver(registerSchema),
        mode: 'all'
    })

    const { isPending, mutate } = useMutation({
        mutationFn: createAccount,

        onSuccess: (response) => {
            toast.success(response.message ?? 'Registration successful!')

            router.replace('/login')
        },

        onError: (error) => {
            toast.error(error?.message ?? 'Something went wrong')
        }
    })

    const onSubmit: SubmitHandler<RegisterInput> = (formData) => {
        mutate(formData)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-1'
        >
            {/* Full Name */}
            <Input
                placeholder='John Doe'
                name='full_name'
                id='full_name'
                label='Full Name'
                register={register}
                required
                error={errors?.full_name?.message}
            />

            {/* Email */}
            <Input
                placeholder='johndoe@gmail.com'
                name='email'
                id='email'
                label='Email'
                register={register}
                required
                error={errors?.email?.message}
            />

            {/* Password */}
            <Input
                placeholder='Enter your password'
                name='password'
                id='password'
                label='Password'
                type='password'
                register={register}
                required
                error={errors?.password?.message}
            />

            {/* Confirm Password */}
            <Input
                placeholder='Confirm your password'
                name='c_password'
                id='c_password'
                label='Confirm Password'
                type='password'
                register={register}
                required
                error={errors?.c_password?.message}
            />

            {/* Phone */}
            <Input
                placeholder='98XXXXXXXX'
                name='phone'
                id='phone'
                label='Phone Number'
                register={register}
                required
                error={errors?.phone?.message}
            />

            <div className='w-full mt-3'>
                <Button
                    type='submit'
                    disabled={isPending}
                    label={isPending ? 'Registering....' : 'Register'}
                />
            </div>
        </form>
    )
}

export default RegisterForm