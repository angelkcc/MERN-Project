import Button from "../ui/buttons/button";
import Input from "../ui/inputs/input";

const RegisterForm = () => {
    return (
        <form className="flex flex-col gap-4">

            {/* Full Name */}
            <Input
                placeholder="John Doe"
                name="full_name"
                id="full_name"
                label="Full Name"
                required={true}
            />

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

            {/* Phone Number */}
            <Input
                placeholder="98XXXXXXXX"
                name="phone_number"
                id="phone_number"
                label="Phone Number"
                required={false}
            />

            <div className="w-full mt-2">
                <Button
                    type="submit"
                    label="Register"
                />
            </div>

        </form>
    );
};

export default RegisterForm;