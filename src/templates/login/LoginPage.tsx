import Image from 'next/image'
import Head from 'next/head'
import LoginForm from '@/organisms/Login/LoginForm'
import { Playfair_Display } from 'next/font/google'
import { useState } from 'react'
import RegisterForm from '@/organisms/Register/RegisterForm'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' })

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
        <Head>
            <title>{isLogin ? 'Login' : 'Cadastro'} - Revaly</title>
        </Head>

        <div className="flex min-h-screen">
            <div className="relative hidden w-1/2 lg:block">
            <Image
                src="/library.jpg"
                alt="Library"
                layout="fill"
                objectFit="cover"
            />
            </div>

            <div className="flex flex-1 flex-col justify-center items-center px-8 py-12 bg-zinc-900 text-white">
            <div className="w-full max-w-md space-y-6">
                <h1 className={`${playfair.className} text-3xl font-bold text-center`}>
                {isLogin ? 'Welcome to Revaly' : 'Create account'}
                </h1>
                <p className="text-center text-gray-400">
                {isLogin
                    ? 'Log in to access your review shelf. 📚'
                    : 'Start your literary journey now!'}
                </p>

                {isLogin ? <LoginForm /> : <RegisterForm />}

                <p className="text-sm text-center text-gray-400">
                {isLogin ? (
                    <>
                    Don't have an account?{' '}
                    
                    <button
                        onClick={() => setIsLogin(false)}
                        className="text-indigo-400 hover:underline cursor-pointer"
                    >
                        Register
                    </button>
                    </>
                ) : (
                    <>
                    Already have an account?{' '}
                    <button
                        onClick={() => setIsLogin(true)}
                        className="text-indigo-400 hover:underline cursor-pointer"
                    >
                        Login
                    </button>
                    </>
                )}
                </p>
            </div>
            </div>
        </div>
        </>
    )
}


