'use client'

import Button from '@/app/components/ui/buttons/button'
import Input from '@/app/components/ui/inputs/input'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { createBrand } from '@/api/brands.api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface BrandInput {
    name: string
    description: string
    logo: FileList
}

const BrandForm = () => {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<BrandInput>({
        defaultValues: {
            name: '',
            description: '',
        }
    })

    const { mutate, isPending } = useMutation({
        mutationFn: createBrand,

        onSuccess: (response) => {
            toast.success(response.message ?? 'Brand created successfully!')

            router.push('/admin/brands')
        },

        onError: (error) => {
            toast.error(error?.message ?? 'Failed to create brand')
        }
    })

    const onSubmit: SubmitHandler<BrandInput> = (data) => {

        const formData = new FormData()

        formData.append('name', data.name)
        formData.append('description', data.description)

        if (data.logo && data.logo.length > 0) {
            formData.append('logo', data.logo[0])
        }

        mutate(formData)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-10 flex flex-col gap-2 max-w-100 h-fit py-8 p-7 border border-gray-200 mx-auto rounded'
        >

            {/* Name */}
            <Input
                name='name'
                register={register}
                label='Name'
                id='name'
                placeholder='Brand name'
                error={errors?.name?.message}
                type='text'
                required
            />

            {/* Description */}
            <Input
                name='description'
                register={register}
                label='Description'
                id='description'
                placeholder='Describe brand'
                error={errors?.description?.message}
                type='text'
                multiline
                required
            />

            {/* Logo */}
            <div className='w-full mt-3'>
                <label
                    htmlFor='logo'
                    className='block text-sm font-medium mb-2'
                >
                    Logo <span className='text-red-500'>*</span>
                </label>

                <input
                    id='logo'
                    type='file'
                    accept='image/*'
                    {...register('logo', {
                        required: 'Brand logo is required'
                    })}
                    className='w-full border border-gray-300 rounded p-2'
                />

                {errors.logo && (
                    <p className='text-red-500 text-sm mt-1'>
                        {errors.logo.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <div className='w-full mt-3'>
                <Button
                    label={isPending ? 'Creating...' : 'Create'}
                    type='submit'
                    disabled={isPending}
                />
            </div>

        </form>
    )
}

export default BrandForm