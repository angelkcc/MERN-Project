import z from "zod";
export const loginValidatorSchema = z.object({
    //body
    body: z.object({
    email: z.email("email is required"),
    password: z.string("password is required").regex(/[A-Z]/,"password must contain at least one uppercase letter")
    .
    regex(/[a-z]/,"password must contain at least one lowercase letter").regex(/[0-9]/,"password must contain at least one number")
    .regex(/[^A-Za-z0-9]/,"password must contain at least one special character").min(6,"password must be at least 6 characters long")
}),
});

//register


//change password


//number--- length 10 and value must be digit not character and must be optional
export const numberValidatorSchema= z.object({
    body: z.object({
        number: z.string().regex(/^\d{10}$/,"number must be 10 digits long and contain only numbers").optional(),
    }),
});

