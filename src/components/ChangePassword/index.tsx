// import { Button } from "@/components/ui/button";
// import { useDynamicForm } from "../../../../hook/useDynamicForm";
// import { changePasswordSchema } from "@/app/(auth)/schema";
// import { Form } from "@/components/ui/form";
// import { useToastMessages } from "../../../../hook/isToast";

// export function ChanngePassWord() {
//   const fields = [
//     {
//       name: "password",
//       label: "Password",
//       type: "password",
//       placeholder: "Mật khẩu hiện tại",
//     },
//     {
//       name: "newPassword",
//       label: "New Password",
//       type: "password",
//       placeholder: "Mật khẩu mới",
//     },
//   ];
//   const { handleSuccess } = useToastMessages();
//   const { form, renderFields, onSubmit } = useDynamicForm({
//     fields,
//     onSubmit: (data) => {
//         handleSuccess('Đang trong quá trình cập nhật')
//     },
//     schema: changePasswordSchema, // Đảm bảo sử dụng schema của bạn
//   });

//   return (
//     <Form {...form}>
//       <form onSubmit={onSubmit} className="space-y-5">
//         {renderFields()}
//         <Button type="submit">Save changes</Button>
//       </form>
//     </Form>
//   );
// }
