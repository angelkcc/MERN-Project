
import LoginForm from "@/app/components/forms/login.form";
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
   title: 'Login | E Commerce',
     description: ''
 }

//const client = new QueryClient()

const Login = () => {
    return (
        <main className='tracking-wider h-screen flex justify-center items-center flex-col '>
            {/* container */}
            <div className='border border-gray-300 px-3 py-4 rounded-md min-h-75 w-75'>
                {/* title */}
                <div className='flex flex-col gap-1 mb-5'>
                    <h1 className='text-2xl font-semibold text-gray-600 text-center'>Login</h1>
                    <p className=' text-xs text-gray-500 text-center'>Fill the from below to continue shopping.</p>
                </div>

                {/* form */}
               

                    <LoginForm />
                
                {/* link */}
                <div className='text-center'>
                    <Link href={'/forgot-password'} ><small className='text-blue-500 text-center '>forgot password?</small></Link>
                    <p className='text-xs'>
                        Don&apos;t have an Account? <Link href={'/register'} ><span className='text-blue-500 text-center italic'>Create Account</span></Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
export default Login