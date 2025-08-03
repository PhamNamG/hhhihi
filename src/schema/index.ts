import * as z from "zod";
export const registerSchema = z.object({
  username: z.string().min(3, { message: "Tên phải có ít nhất 3 ký tự" }),
  email: z.string().email({ message: "Bắt buộc" }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
  // repassword: z
  //   .string()
  //   .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
  //   .superRefine((val: any, ctx: any) => {
  //     console.log(ctx.parent)
  //     if (val !== ctx.parent?.password) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.custom,
  //         message: "Mật khẩu không khớp",
  //       });
  //     }
  //   }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Bắt buộc" }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
  // repassword: z
  //   .string()
  //   .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
  //   .superRefine((val: any, ctx: any) => {
  //     console.log(ctx.parent)
  //     if (val !== ctx.parent?.password) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.custom,
  //         message: "Mật khẩu không khớp",
  //       });
  //     }
  //   }),
});

export const meForm = z.object({
  username: z.string().min(3, { message: "Tên phải có ít nhất 3 ký tự" }),
  file: z.any().optional(),
  // repassword: z
  //   .string()
  //   .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
  //   .superRefine((val: any, ctx: any) => {
  //     console.log(ctx.parent)
  //     if (val !== ctx.parent?.password) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.custom,
  //         message: "Mật khẩu không khớp",
  //       });
  //     }
  //   }),
});

export const changePasswordSchema = z.object({
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
  newPassword: z
    .string()
    .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
  // repassword: z
  //   .string()
  //   .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
  //   .superRefine((val: any, ctx: any) => {
  //     console.log(ctx.parent)
  //     if (val !== ctx.parent?.password) {
  //       ctx.addIssue({
  //         code: z.ZodIssueCode.custom,
  //         message: "Mật khẩu không khớp",
  //       });
  //     }
  //   }),
});
