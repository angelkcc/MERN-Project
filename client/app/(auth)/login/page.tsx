import LoginForm from "@/app/components/forms/login.form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Login | Ecommerce",
    description: "Login page for Ecommerce",
};

const LoginPage = () => {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-50 px-4">

            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

                {/* Title */}
                <div className="flex flex-col gap-2 mb-6">
                    <h1 className="text-3xl text-gray-700 text-center font-semibold">
                        Login
                    </h1>

                    <p className="text-sm text-gray-500 text-center">
                        Fill the form below to continue
                    </p>
                </div>

                {/* Form */}
                <LoginForm />

            </div>

        </main>
    );
};

export default LoginPage;