// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import { useCategoriesStore } from '@/store/useCategories';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useCategories } from '@/hooks/useCategories';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const CategorySlider = () => {
//   const { categories, isLoading, error } = useCategoriesStore();
//   useCategories(); // Trigger fetch data

//   if (isLoading) {
//     return (
//       <div className="w-full h-[400px] bg-gray-800 animate-pulse rounded-lg">
//         <div className="w-full h-full flex items-center justify-center">
//           <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
//         <p className="text-red-500">Đã có lỗi xảy ra: {error.message}</p>
//       </div>
//     );
//   }

//   if (!categories?.data.length) {
//     return (
//       <div className="w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
//         <p className="text-gray-400">Không có dữ liệu</p>
//       </div>
//     );
//   }
//   return (
//     <div className="relative w-full">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         className="w-full h-[400px] rounded-lg overflow-hidden"
//       >
//         {categories?.data.map((category) => (
//           <SwiperSlide key={category._id}>
//             <Link href={`/category/${category.slug}`}>
//               <div className="relative w-full h-full group">
//                 <Image
//                   src={category.linkImg}
//                   alt={category.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <h2 className="text-2xl font-bold text-white mb-2">
//                       {category.name}
//                     </h2>
//                     <p className="text-gray-200 line-clamp-2">
//                       {category.des}
//                     </p>
//                     <div className="mt-4">
//                       <span className="px-4 py-2 bg-primary text-black rounded-full text-sm font-medium">
//                         {category.isMovie === 'drama' ? 'Phim Bộ' : 'Phim Lẻ'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="absolute top-1/2 left-4 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors swiper-button-prev after:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//         </svg>
//       </button>
//       <button className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors swiper-button-next after:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default CategorySlider;
