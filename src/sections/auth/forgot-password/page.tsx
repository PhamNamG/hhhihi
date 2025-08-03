// "use client"
// import React from "react";
// import { message } from "antd";
// import * as yup from "yup";
// import { redirect } from "next/navigation";
// import { forgotPassword } from "@/sevices/user";
// import { MVError, MVSuccess } from "../components/Message";
// import AuthForm from "../components/Form";
// const array = [
//   {
//     type: "email",
//     field: "email",
//     disable: false,
//   },
// ];
// const ForgotPassword = () => {
//   const schema = yup.object().shape({
//     email: yup.string().required().email(),
//   });
//   const onsubmit = async (data: any) => {
//     const response = await forgotPassword(data);
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
//       formTitle={"Forgot Password"}
//       formDescription={"Just some details to get you in.!"}
//       submitButtonText={"Send"}
//       formIntro={"Skip the lag ?"}
//       formHeader={"Roll the Carpet.!"}
//       checkedAccount={"Already Registered? Login"}
//       handleMessage={handleMessage}
//       redirect={"/forgot-password"}
//       array={array}
//       schemaPage={schema}
//     />
//   );
// };

// export default ForgotPassword;

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
