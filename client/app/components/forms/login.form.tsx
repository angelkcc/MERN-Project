"use client";
import Input from "../ui/inputs/input";
import Button from "../ui/buttons/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginInput } from "@/app/types/auth.types";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/app/schema/auth.schema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });
  console.log(errors);
 //axios+react query
  const onSubmit: SubmitHandler<LoginInput> = (formData) => {
    console.log("form submitted", formData);
    // api call
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {/* email */}
      <Input
        placeholder="johndoe@gmail.com"
        name="email"
        id="email"
        label="Email"
        // onChange={onChange}
        register={register}
        required={true}
        error={errors?.email?.message}
      />
      {/*password */}
      <Input
        placeholder="enter your password "
        name="password"
        id="password"
        label="Password"
        type="password"
        register={register}
        required={true}
        error={errors?.password?.message}
      />

      <div className="w-full mt-3">
        <Button type="submit" label="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
