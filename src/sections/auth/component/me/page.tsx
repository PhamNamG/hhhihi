// "use client";
// import { Controller, useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect } from "react";
// // import { meForm } from "@/app/(auth)/schema";
// import { useToastMessages } from "../../../../../../../hook/isToast";
// import { useAppDispatch, useAppSelector } from "@/lib/hook";
// import { RootState } from "@/lib/store";
// import { uploadImage } from "@/lib/features/auth/thunkActions";

// export default function ProfileForm({ userId }: any) {
//   const { handleSuccess, handleError } = useToastMessages();
//   const dispatch = useAppDispatch();
//   const form = useForm({
//     resolver: zodResolver(meForm),
//     defaultValues: {
//       username: "",
//       file: null,
//     },
//   });
//   useEffect(() => {
//     if (userId) {
//       form.reset(userId.user);
//     }
//   }, []);
//   const isLoading = useAppSelector((state: RootState) => state.user.isLoading);
//   const userInfor = useAppSelector((state: RootState) => state.user);
  
//   const onSubmit = async (data: any) => {
//     const formData = new FormData();
//     formData.append("file", data.file[0]);
//     formData.append("username", data.username);
//     const datas = {
//       id: userInfor?.user?._id,
//       formData: formData,
//     };
//     const responese = await dispatch(uploadImage(datas));
//     if (responese.payload?.success) {
//       handleSuccess("Image saved successfully");
//     } else {
//       handleError("Image saved failed");
//     }
//   };
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Controller
//                   name="username"
//                   control={form.control}
//                   render={({ field }) => (
//                     <Input placeholder="Tên của bạn" {...field} />
//                   )}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="file"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Avartar</FormLabel>
//               <FormControl>
//                 <Input
//                   id="picture"
//                   type="file"
//                   {...field}
//                   onChange={(e) => field.onChange(e.target.files)}
//                   onBlur={field.onBlur}
//                   ref={field.ref}
//                   value={undefined}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Save changes</Button>
//       </form>
//     </Form>
//   );
// }
