'use client'
import Button from '@/app/components/ui/buttons/button'
import Input from '@/app/components/ui/inputs/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginInput } from '@/app/types/auth.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/app/schema/auth.schema'
import { login } from '@/api/auth.api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Role } from '@/app/types/enum.types'


const LoginForm = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
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
            //* navigate user based on role
            if (response.data.user.role === Role.ADMIN) {
                router.replace('/admin')
            } else {
                router.replace('/')
            }
            toast.success(response.message ?? 'login successful!')
            console.log(response.data.user)
            queryClient.invalidateQueries({
                queryKey: ['profile']
            })
        },
        onError: (error) => {
            toast.error(error?.message ?? 'something went wrong')

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