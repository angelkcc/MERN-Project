'use client'
import Button from '@/app/components/ui/buttons/button'
import Input from '@/app/components/ui/inputs/input'
import React from 'react'
import { useForm } from 'react-hook-form'


const BrandForm = () => {
    const { register, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: '',
            logo: null
        }
    })
    return (
        <form className=' mt-10 flex flex-col gap-2 max-w-100 h-fit py-8 p-7 border border-gray-200 mx-auto rounded'>
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

            <div className='w-full mt-3'>
                <Button
                    label='Create'
                    type='submit'
                />
            </div>
        </form>
    )
}

export default BrandForm