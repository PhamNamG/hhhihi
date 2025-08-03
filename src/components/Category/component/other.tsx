// "use client";
// import React, { useEffect } from "react";
// import { Spiner } from "../../Message/Notification";
// import MVGridCategory from "../../Grid/component";
// import MVTitle from "../../MV/Title";
// import { useSWRWithAxios } from "@/hook/Swr";
// import { urlSwr } from "@/app/function";
// const GetAllCategoryNotRequest = ({ id }: any) => {
//   const { data: categorys, isLoading } = useSWRWithAxios(
//     urlSwr + "/category/getAllCategoryNotRequest/" + id
//   );

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   if (isLoading) {
//     return <Spiner size={undefined} children={undefined} />;
//   }
//   return (
//     <React.Fragment>
//       <MVTitle
//         level={3}
//         strong
//         underline
//         style={{ color: "#fff" }}
//         className="underline my-2"
//       >
//         Liên quan
//       </MVTitle>
//       <MVGridCategory type="category" gutter={[16, 16]} child={categorys} />
//     </React.Fragment>
//   );
// };

// export default GetAllCategoryNotRequest;
