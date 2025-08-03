// import { useToast } from "@/hooks/use-toast";
// import { CheckCircleIcon, XCircleIcon } from "lucide-react";
// import React from "react";

// export const useToastMessages = () => {
//   const { toast } = useToast();

//   const handleSuccess = (message: string) => {
//     toast({
//       title: "Success!",
//       description: message,
//       action: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
//       duration: 4000,
//     });
//   };

//   const handleError = (message: string) => {
//     toast({
//       title: "Failure!",
//       variant: "destructive",
//       description: message,
//       action: <XCircleIcon className="h-6 w-6 text-red-500" />,
//       duration: 4000,
//     });
//   };

//   return {
//     handleSuccess,
//     handleError,
//   };
// };
