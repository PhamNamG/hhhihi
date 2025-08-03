"use client";
import React, { useEffect, useState } from "react";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
  FaHeart,
  FaBookmark,
  FaShare,
} from "react-icons/fa";
import MVLink from "../Location/Link";
import { useRouter } from "next/navigation";
import useToast from "@/hooks/use-toast";

type SeriDetailPropsType = {
  seriProducts: any;
  productId: string;
  name: string;
  isMovie: string;
  getOneProductDetail: any;
};

const SeriDetailProducts = ({
  seriProducts,
  productId,
  isMovie,
}: SeriDetailPropsType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    const index = seriProducts.findIndex(
      (product: any) => product._id === productId
    );
    setCurrentIndex(index !== -1 ? index : 0);
  }, [productId, seriProducts]);

  const handleNext = () => {
    if (currentIndex < seriProducts.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      router.push(`/d/${seriProducts[nextIndex].slug}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      router.push(`/d/${seriProducts[prevIndex].slug}`);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Episode Navigation */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between bg-[#1f1f24] p-3 rounded-lg">
        <button
          onClick={handlePrevious}
          disabled={currentIndex <= 0}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all w-full sm:w-auto text-sm sm:text-base ${
            currentIndex <= 0
              ? "bg-[#1a1a1f] text-gray-500 cursor-not-allowed"
              : "bg-[#FFD875] text-black hover:bg-[#ffc107]"
          }`}
        >
          <FaCircleLeft className="text-base sm:text-lg" /> Tập sau
        </button>

        <div className="flex items-center gap-3 sm:gap-4 order-first sm:order-none">
            <button 
            onClick={() => toast.success("Đang cập nhật")} 
            className="flex items-center gap-1.5 sm:gap-2 text-[#FFD875] hover:text-[#ffc107]"
          >
            <FaHeart className="text-base sm:text-lg" /> 
            <span className="text-xs sm:text-sm hidden sm:inline">Yêu thích</span>
          </button>
          <button 
            onClick={() => toast.success("Đang cập nhật")} 
            className="flex items-center gap-1.5 sm:gap-2 text-[#FFD875] hover:text-[#ffc107]"
          >
            <FaBookmark className="text-base sm:text-lg" /> 
            <span className="text-xs sm:text-sm hidden sm:inline">Lưu</span>
          </button>
          <button 
            onClick={() => toast.success("Đang cập nhật")} 
            className="flex items-center gap-1.5 sm:gap-2 text-[#FFD875] hover:text-[#ffc107]"
          >
            <FaShare className="text-base sm:text-lg" /> 
            <span className="text-xs sm:text-sm hidden sm:inline">Chia sẻ</span>
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= seriProducts.length - 1}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all w-full sm:w-auto text-sm sm:text-base ${
            currentIndex >= seriProducts.length - 1
              ? "bg-[#1a1a1f] text-gray-500 cursor-not-allowed"
              : "bg-[#FFD875] text-black hover:bg-[#ffc107]"
          }`}
        >
          Tập trước <FaCircleRight className="text-base sm:text-lg" />
        </button>
      </div>

      {/* Episode List */}
      {isMovie === "drama" && (
        <div className="bg-[#1f1f24] p-3 sm:p-4 rounded-lg">
          <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <MdOutlineMenu className="text-[#FFD875] text-lg sm:text-xl" /> Danh sách tập
          </h2>
          <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 max-h-[200px] overflow-y-auto custom-scrollbar">
            {seriProducts.map((item: any) => (
              <MVLink
                prefetch={false}
                to={`/d/${item.slug}`}
                key={item._id}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all text-center ${
                  item._id === productId
                    ? "bg-[#FFD875] text-black"
                    : "bg-[#1a1a1f] hover:bg-[#26262c] text-white"
                }`}
              >
                {item.seri}
              </MVLink>
            ))}
          </div>
        </div>
      )}

      {/* Social Share */}
      <div className="bg-[#1f1f24] p-3 sm:p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <span className="text-sm sm:text-base text-gray-400">Chia sẻ phim:</span>
          <div className="flex gap-2">
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#1877f2] hover:opacity-80 transition-opacity">
              <FaFacebookF className="text-white text-sm sm:text-base" />
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#1da1f2] hover:opacity-80 transition-opacity">
              <FaTwitter className="text-white text-sm sm:text-base" />
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#e60023] hover:opacity-80 transition-opacity">
              <FaPinterestP className="text-white text-sm sm:text-base" />
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#25d366] hover:opacity-80 transition-opacity">
              <FaWhatsapp className="text-white text-sm sm:text-base" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriDetailProducts;

// Add this CSS to your global styles or a CSS module
/*
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #FFD875 #2d2d2d;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #2d2d2d;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #FFD875;
  border-radius: 3px;
}
*/
