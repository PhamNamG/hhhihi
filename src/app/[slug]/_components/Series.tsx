"use client";

import React from "react";
import { useSeriesBySlug } from "@/hooks/app/series";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MVImage from "@/components/MV/IMAGE";

interface Category {
  des: string;
  name: string;
  sumSeri: number;
  slug: string;
  linkImg: string;
  _id: string;
  lastProduct: {
    slug: string;
    seri: number;
  };
}

const Series = ({ params }: { params: { slug: string } }) => {
  const { data: seriesData, isLoading, error } = useSeriesBySlug(params.slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#FFD875] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Có lỗi xảy ra khi tải dữ liệu
      </div>
    );
  }

  // Get first 5 categories for the slider
  const sliderCategories = seriesData?.data?.categories?.slice(0, 5) || [];
  return (
    <div className="relative">
      {/* Hero Slider Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          allowTouchMove={false}
          threshold={20}
          longSwipesRatio={0.3}
          touchRatio={1}
          preventClicks={false}
          preventClicksPropagation={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          watchSlidesProgress={true}
          preventInteractionOnTransition={false}
          className="h-full w-full mySwiper"
        >
          <div className="swiper-button-prev">
            <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
              <ChevronLeft className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="swiper-button-next">
            <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {sliderCategories.map((category: Category) => (
            <SwiperSlide key={category._id} >
              <div className="relative h-full w-full">
                {/* Background Image with Blur */}
                <div className="absolute inset-0">
                  <MVImage
                    width={200}
                    height={200}
                    src={category.linkImg}
                    alt={category.name}
                    className="w-full h-full object-cover opacity-60 blur-sm"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-transparent to-[#1a1a1f]" />
                </div>

                {/* Main Content Container */}
                <div className="absolute inset-0 flex items-center justify-center z-20 ">
                  <div className="container mx-auto px-4 flex gap-8 items-center">
                    <div className="flex-1 max-w-2xl">
                      <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        {category.name}
                      </h2>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 bg-[#FFD875] text-black rounded-full text-sm font-medium">
                          {category.sumSeri} tập
                        </span>
                        <span className="text-gray-300 text-lg">HD Vietsub</span>
                      </div>
                      <Link
                        href={`/d/${category?.lastProduct?.slug}`}
                        className="inline-flex items-center gap-2 bg-[#FFD875] text-black px-8 py-4 rounded-full font-medium hover:bg-[#ffc107] transition-all hover:scale-105"
                      >
                        <Play className="w-5 h-5" />
                        {`Tập ${category.lastProduct?.seri}`}
                      </Link>
                      <p className="text-gray-300 text-sm line-clamp-2 mt-5 ">{category.des}</p>
                    </div>

                    <div className="hidden md:block w-[300px] h-[450px] relative group">
                      <MVImage
                        width={300}
                        height={450}
                        src={category.linkImg}
                        alt={category.name}
                        className="w-full h-full object-cover rounded-lg shadow-2xl transform transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1f] via-transparent to-transparent rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 100%;
        }

          .swiper-slide {
      opacity: 0 !important;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.8s ease;
    }

    .swiper-slide-active {
      opacity: 1 !important;
      visibility: visible;
      pointer-events: auto;
    }


        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s;
        }
        
        .swiper-pagination-bullet-active {
          width: 24px;
          background: #FFD875;
          border-radius: 4px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 40px !important;
          height: 40px !important;
          margin: 0 24px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }

        .swiper-button-next:hover > div,
        .swiper-button-prev:hover > div {
          background: rgba(0, 0, 0, 0.7);
          border-color: #FFD875;
        }

        .swiper-button-next > div,
        .swiper-button-prev > div {
          transition: all 0.3s ease;
        }

        .swiper-button-disabled {
          opacity: 0 !important;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative">
        {/* Blur Gradient Background */}
        <div className="absolute inset-0 " />

        <div className="container mx-auto -mt-32 relative z-30 rounded-lg mt-[0px] bg-[#76767617] p-4">
          {/* Grid Layout for Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4  ">
            {seriesData?.data?.categories?.map((category: Category) => (
              <Link
                href={`/q/${category.slug}`}
                key={category._id}
                className="group relative bg-[#1a1a1f] rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[2/3]">
                  <MVImage
                    width={300}
                    height={300}
                    src={category.linkImg}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#FFD875] text-black p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-3 bg-[#1a1a1f]">
                  <h3 className="text-white font-medium text-sm line-clamp-2 mb-1 group-hover:text-[#FFD875] transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {category.sumSeri} tập
                    </span>
                    <span className="text-xs px-2 py-1 bg-[#FFD875] text-black rounded-full">
                      HD
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Description Section */}
          <div className="mt-12 bg-[#1a1a1f] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Giới thiệu về {seriesData?.data.name}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400">
                Tuyển tập các bộ phim {seriesData?.data.name} hay nhất, được tuyển chọn và cập nhật liên tục.
                Với chất lượng HD và phụ đề tiếng Việt, chúng tôi mang đến cho bạn trải nghiệm xem phim tốt nhất.
              </p>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#26262c] text-gray-400 rounded-full text-sm">
                #{seriesData?.data.name}
              </span>
              <span className="px-3 py-1 bg-[#26262c] text-gray-400 rounded-full text-sm">
                #Anime
              </span>
              <span className="px-3 py-1 bg-[#26262c] text-gray-400 rounded-full text-sm">
                #Vietsub
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
