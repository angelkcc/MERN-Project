import Button from "../ui/buttons/button";
import Input from "../ui/inputs/input";

const LoginForm = () => {
    return (
        <form className="flex flex-col gap-4">

            {/* Email */}
            <Input
                placeholder="johndoe@gmail.com"
                name="email"
                id="email"
                label="Email"
                required={true}
            />

            {/* Password */}
            <Input
                placeholder="Enter your password"
                name="password"
                id="password"
                label="Password"
                type="password"
                required={true}
            />

            <div className="w-full mt-2">
                <Button
                    type="submit"
                    label="Login"
                />
            </div>

        </form>
    );
};

export default LoginForm;