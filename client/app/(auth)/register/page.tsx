import RegisterForm from "@/app/components/forms/register.form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Register | Ecommerce",
    description: "Register page for Ecommerce",
};

const RegisterPage = () => {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-50 px-4">

            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-6 shadow-sm">

                {/* Title */}
                <div className="flex flex-col gap-2 mb-6">
                    <h1 className="text-3xl text-gray-700 text-center font-semibold">
                        Register
                    </h1>

                    <p className="text-sm text-gray-500 text-center">
                        Fill the form below to create your account
                    </p>
                </div>

                {/* Form */}
                <RegisterForm />

            </div>

        </main>
    );
};

export default RegisterPage;