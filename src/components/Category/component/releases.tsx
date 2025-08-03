// "use client";
// import Autoplay from "embla-carousel-autoplay";
// import React, { useEffect } from "react";
// import Title from "../../MV/Title";
// import { useAppDispatch, useAppSelector } from "@/lib/hook";
// import { getReleasesCategorys } from "@/lib/features/categorys/thunkActions";
// import CategoryContents from "../Content/Category";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Trend from "@/assets/icons/trend-up-svgrepo-com.svg";
// const Releases = ({ data }: any) => {
//   const dispatch = useAppDispatch();
//   // const { data } = useAppSelector((state) => state.category.releases);
//   useEffect(() => {
//     dispatch(getReleasesCategorys());
//   }, []);
//   const arrImg = [
//     {
//       name: "Tiên Nghịch",
//       src: "https://pic-bstarstatic.akamaized.net/ugc/c594945796f2da606dfbc02d1082c18b.jpg",
//     },
//     {
//       name: "Tiên Nghịch",
//       src: "https://hoathinh3d.sh/wp-content/uploads/2023/06/thuong-nguyen-do-poster-1-1.jpg",
//     },
//     {
//       name: "Tiên Nghịch",
//       src: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/460925778_122184783746207744_3514228114758993389_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpcosRTyslrKa04If84xLcodmknCti_jeh2aScK2L-N9Sgm61-aXvFnU3bP0jLbBHoxKPlkhh6O6KXH_n44wTI&_nc_ohc=jzOvCeEvsd0Q7kNvgFitC3A&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=Agbc-xRlBD3hB7OdcUG3_Ua&oh=00_AYCEl7zr1KPyeVOKZBocktYIx_4I-IT0b2rTvhd3SN418A&oe=674FBA84",
//     },
//   ];
//   return (
//     <>
//       <Carousel
//         opts={{
//           align: "start",
//         }}
//         className="w-full max-w-full" // Đảm bảo chiều rộng là 100%
//       >
//         <CarouselContent>
//           {data &&
//             data.map((item: any, index: any) => (
//               <CarouselItem
//                 key={item._id}
//                 className="w-full md:basis-1/5 lg:basis-1/6"
//               >
//                 <div className="p-1">
//                   <div className="flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden hover:scale-105 hover:bg-gray-700 transition-all duration-300">
//                     {/* Hình ảnh */}
//                     <div className="w-full h-40 relative">
//                       <img
//                         src={item.linkImg}
//                         alt={item.name}
//                         className="w-full h-full object-cover rounded-t-lg"
//                       />
//                     </div>

//                     {/* Nội dung */}
//                     <div className="p-4 text-center">
//                       <h3 className="text-lg font-semibold text-white truncate">
//                         {item.name}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//         </CarouselContent>
//         <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
//           ◀
//         </CarouselPrevious>
//         <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
//           ▶
//         </CarouselNext>
//       </Carousel>

//       {/* <div className="w-9/12 rounded-lg  p-3  ">
//         <div className="flex items-center justify-center">
//           <Carousel className="w-full h-auto rounded-lg overflow-hidden  bg-gray-700">
//             <CarouselContent className="hover:cursor-grab">
//               {arrImg?.map((item, index) => (
//                 <CarouselItem key={index}>
//                   <div className="relative group">
//                     <img
//                       src={item.src}
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div>
//                         <h3 className="text-white text-xl font-semibold">
//                           {item.name}
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
            
//           </Carousel>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Releases;
