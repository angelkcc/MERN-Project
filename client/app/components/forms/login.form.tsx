import Button from "../ui/buttons/button"
import Input from "../ui/inputs/input"

const LoginForm = () => {
    return (
        <form className='flex flex-col gap-3'>
            {/* email */}
            <Input
                placeholder='johndoe@gmail.com'
                name='email'
                id='email'
                label='Email'
                required={true}
            />
            {/*password */}
            <Input
                placeholder='enter your password '
                name='password'
                id='password'
                label='Password'
                type='password'
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