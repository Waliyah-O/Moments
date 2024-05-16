import * as z from "zod";

// export const signupValidation = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "name must be at least 2 characters." }),
  username: z.string().min(2, {
    message: "username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters." }),
});

export const SignInValidation = z.object({
  email: z.string().email({ message: "Please enter your email address." }),
  password: z.string().min(8, { message: "Please enter your password." }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
