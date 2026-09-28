'use client'
import Input from '../ui/inputs/input'
import Button from '../ui/buttons/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginInput } from '@/app/types/auth.types'


const LoginForm = () => {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // })
    // {value , onChange , name}
    const { register, handleSubmit } = useForm<LoginInput>({
        defaultValues: {
            email: '',
            password: ''
        }
    })



    // const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    //     console.log('input change')
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     })

    // }

    const onSubmit: SubmitHandler<LoginInput> = (formData) => {

        console.log('form submitted', formData)
        // api call
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            {/* email */}
            <Input
                placeholder='johndoe@gmail.com'
                name='email'
                id='email'
                label='Email'
                // onChange={onChange}
                register={register}
                required={true}
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

            />

            <div className='w-full mt-3'>
                <Button
                    type='submit'
                    label='Login'
                />
            </div>
        </form>
    )
}

export default LoginForm