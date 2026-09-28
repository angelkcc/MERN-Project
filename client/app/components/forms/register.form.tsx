'use client'

import Input from '../ui/inputs/input'
import Button from '../ui/buttons/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterInput } from '@/app/types/auth.types'

const RegisterForm = () => {

    const { register, handleSubmit } = useForm<RegisterInput>({
        defaultValues: {
            full_name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<RegisterInput> = (formData) => {
        console.log('form submitted', formData)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
        >

            {/* Full Name */}
            <Input
                placeholder="John Doe"
                name="full_name"
                id="full_name"
                label="Full Name"
                register={register}
                required={true}
            />

            {/* Email */}
            <Input
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                label="Email"
                register={register}
                required={true}
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
            />

            <div className="w-full mt-3">
                <Button
                    type="submit"
                    label="Register"
                />
            </div>

        </form>
    )
}

export default RegisterForm