// "use client";
// import React from "react";
// import { message } from "antd";
// import * as yup from "yup";
// import { redirect, useRouter } from "next/navigation";
// import { resetPassword } from "@/sevices/user";
// import { MVError, MVSuccess } from "@/app/components/Message";
// import AuthForm from "@/app/components/Form";
// const array = [
//   {
//     type: "password",
//     field: "password",
//     disable: false,
//   },
//   {
//     type: "password",
//     field: "repassword",
//     disable: false,
//   },
// ];
// const ResetPassword = () => {
//   const router: any = useRouter();
//   const { id, token } = router.query;
//   const schema = yup.object().shape({
//     password: yup.string().required().min(6, "Password tối thiểu 6 kí tự"),
//     repassword: yup
//       .string()
//       .required()
//       .oneOf([yup.ref("password")], "Passwords must match"),
//   });
//   const onsubmit = async (data: any) => {
//     const response = await resetPassword(id, token, data);
//     if (response.data.success) {
//       MVSuccess(response.data.message);
//       redirect("/signin");
//     } else {
//       MVError(response.data.message);
//     }
//   };
//   const handleMessage = () => {
//     message.success("Đang cập nhật!");
//   };
//   return (
//     <AuthForm
//       onSubmit={onsubmit}
//       formTitle={"Reset Password"}
//       formDescription={"Just some details to get you in.!"}
//       submitButtonText={"Send"}
//       formIntro={"Skip the lag ?"}
//       formHeader={"Roll the Carpet.!"}
//       checkedAccount={"Already Registered? Login"}
//       handleMessage={handleMessage}
//       redirect={"/reset-password"}
//       array={array}
//       schemaPage={schema}
//     />
//   );
// };

// export default ResetPassword;

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
