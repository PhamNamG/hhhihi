'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema";
// import { loginForm } from "@/lib/features/auth/thunkActions";
// import { useAppDispatch } from "@/lib/hook";
import useToast from "@/hooks/use-toast";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import MVImage from "../MV/IMAGE";

type FormData = {
  email: string;
  password: string;
};

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const toast = useToast();
  // const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // const res = await dispatch(loginForm(data));
      toast.success('AD đang cập nhật');
      // if (res.payload.success === true) {
      //   reset();
      //   onClose();
      // } else {
      //   toast.error(res.payload.message);
      // }
    } catch (error) {
      toast.error('Đã có lỗi xảy ra');
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] items-center z-50 w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] rounded-lg border border-gray-800 bg-[#1a1a20] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] grid grid-cols-2">
          {/* Image Section */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 rounded-l-lg" />
            <MVImage
              width={300}
              height={300}
              src="/images/df333a5512113bbb276f27676b75eb23.jpg"
              alt="Movie Background"
              className="w-full h-full object-cover rounded-l-lg"
            />
            <div className="absolute bottom-0 left-0 p-10 z-20 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 w-full rounded-bl-lg">
              <h2 className="text-3xl font-bold mb-2">Chào mừng trở lại!</h2>
              <p className="text-gray-200">Đăng nhập để trải nghiệm những bộ phim hay nhất.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-10">
            <Dialog.Title className=" text-white text-2xl font-semibold mb-2">
              Đăng nhập
            </Dialog.Title>

            <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#FFD875] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4 text-gray-400" />
              <span className="sr-only">Close</span>
            </Dialog.Close>

            <div className="text-gray-400 text-sm  mb-6">
              Nếu bạn chưa có tài khoản, <a href="#" className="text-[#FFD875] hover:text-[#ffc107]">đăng ký ngay</a>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full bg-[#26262c] border border-gray-700 rounded-md px-2 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD875] focus:ring-1 focus:ring-[#FFD875] transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                <input
                  type="password"
                  placeholder="Mật khẩu"
                  {...register("password")}
                  className="w-full bg-[#26262c] border border-gray-700 rounded-md px-2 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD875] focus:ring-1 focus:ring-[#FFD875] transition-colors"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>


              <button
                type="submit"
                className="w-full py-3 bg-[#FFD875] text-black px-2 py-2 text-sm rounded-md hover:bg-[#ffc107] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD875]/50 font-medium"
              >
                Đăng nhập
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => { }}
                className="text-sm text-gray-400 hover:text-[#FFD875] transition-colors"
              >
                Quên mật khẩu?
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 