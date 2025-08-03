// "use client";
// import InputComponent from "@/app/components/MV/Input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { registerSchema } from "../schema";
// import { useToastMessages } from "../../../../hook/isToast";
// import { useAppDispatch } from "@/lib/hook";

// import { resgisterLogin } from "@/lib/features/auth/thunkActions";
// import { useRouter } from "next/navigation";

// type FormData = {
//   email: string;
//   password: string;
// };
// export default function RegisterPage() {
//   const { handleSuccess, handleError } = useToastMessages();
//   const dispath = useAppDispatch();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(registerSchema),
//   });

//   const onSubmit = async (data: FormData) => {
//     const res = await dispath(resgisterLogin(data));
//     if (res.payload.success == true) {
//       handleSuccess("Đăng kí thành công");
//       router.push("/login");
//     } else {
//       handleError("Đăng kí thất bại");
//     }
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#23232a] p-5">
//       <div className="w-full max-w-md p-8 bg-[#1a1a20] rounded-lg shadow-lg">
//         <h2 className="text-center text-white text-3xl font-semibold mb-8">
//           Đăng Ký
//         </h2>
//         <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//           <InputComponent
//             id="name"
//             name="username"
//             label="Họ và tên"
//             type="text"
//             placeholder="Nhập họ và tên của bạn"
//             register={register}
//             errors={errors}
//           />
//           <InputComponent
//             id="email"
//             name="email"
//             label="Email"
//             type="email"
//             placeholder="Nhập email của bạn"
//             register={register}
//             errors={errors}
//           />
//           <InputComponent
//             id="password"
//             name="password"
//             label="Mật khẩu"
//             type="password"
//             placeholder="Nhập mật khẩu của bạn"
//             register={register}
//             errors={errors}
//           />

//           {/* <InputComponent
//             id="repassword"
//             name="repassword"
//             label="Xác nhân mật khẩu"
//             type="password"
//             placeholder="Xác nhân mật khẩu"
//             register={register}
//             errors={errors}
//           /> */}

//           <button
//             className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Đăng Ký
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-white">
//             Đã có tài khoản?{" "}
//             <a href="/login" className="text-yellow-500 hover:text-yellow-400">
//               Đăng nhập ngay
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
