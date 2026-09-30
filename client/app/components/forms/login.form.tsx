'use client'

import Input from '../ui/inputs/input'
import Button from '../ui/buttons/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginInput } from '@/app/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/app/schema/auth.schema'
import { login } from '@/api/auth.api'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(loginSchema),
        mode: 'all'
    })


    const { isPending, mutate } = useMutation({
        mutationFn: login,
        onSuccess: (response) => {
            // Show a success message
            toast.success("Login successful! 🎉");
            console.log('on mutation success', response)
        },
        onError: (error) => {
            toast.error("Invalid email or password");
            console.log('on mutation error', error)
        }
    })




    // axios + react query
    const onSubmit: SubmitHandler<LoginInput> = (formData) => {
        mutate(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
            {/* email */}
            <Input
                placeholder='johndoe@gmail.com'
                name='email'
                id='email'
                label='Email'
                // onChange={onChange}
                register={register}
                required={true}
                error={errors?.email?.message}
            />
            {/*password */}
            <Input
                placeholder='enter your password '
                name='password'
                id='password'
                label='Password'
                type='password'
                register={register}
                required
                error={errors?.password?.message}


            />

            <div className='w-full mt-3'>
                <Button
                    type='submit'
                    disabled={isPending}
                    label={isPending ? 'Logging In....' : 'Login'}
                />
            </div>
        </form>
    )
}

export default LoginForm