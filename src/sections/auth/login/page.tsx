// "use client";
// import InputComponent from "@/app/components/MV/Input";
// import { useForm } from "react-hook-form";
// import { loginSchema } from "@/app/components/schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginForm } from "@/lib/features/auth/thunkActions";
// import { useAppDispatch } from "@/lib/hook";
// import { useRouter } from "next/navigation";
// import useToast from "@/hooks/use-toast";
// type FormData = {
//   email: string;
//   password: string;
// };
// export default function LoginPage() {
//   const toast  = useToast();
//   const dispath = useAppDispatch();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = async (data: FormData) => {
//     const res = await dispath(loginForm(data));
//     if (res.payload.success == true) {
//       toast.success(res.payload.message);
//       router.push("/");
//     } else {
//       toast.error(res.payload.message);
//     }
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#23232a] p-5">
//       <div className="w-full max-w-md p-8 bg-[#1a1a20] rounded-lg shadow-lg">
//         <h2 className="text-center text-white text-3xl font-semibold mb-8">
//           Đăng Nhập
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <InputComponent
//             id="name"
//             name="username"
//             label="Họ và tên"
//             type="text"
//             placeholder="Nhập họ và tên của bạn"
//             register={register}
//             errors={errors}
//           />
//           {/* <InputComponent
//             id="email"
//             name="email"
//             label="Email"
//             type="email"
//             placeholder="Nhập email của bạn"
//             register={register}
//             errors={errors}
//           /> */}

//           <InputComponent
//             id="password"
//             name="password"
//             label="Mật khẩu"
//             type="password"
//             placeholder="Nhập mật khẩu của bạn"
//             register={register}
//             errors={errors}
//           />

//           <button className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//             Đăng Nhập
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-white">
//             Chưa có tài khoản?{" "}
//             <a
//               href="/register"
//               className="text-yellow-500 hover:text-yellow-400"
//             >
//               Đăng ký ngay
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
