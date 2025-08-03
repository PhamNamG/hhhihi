"use client";

import React from "react";
import { FaFacebookF, FaYoutube, FaArrowUp, FaTiktok, FaTelegram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import MVImage from "./MV/IMAGE";
import { socialLinks } from "@/config/socialLinks";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#1a1a1f] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MVImage
                width={150}
                height={150}
                src="/images/logo.png"
                alt="Hoạt Hình Trung Quốc"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400">
              Website xem phim online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD875]">Liên hệ</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Email: hoathinh3dchinese@gmail.com</li>
              <li>Telegram: @myang_03</li>
              <li>Facebook: phanhhh3d</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD875]">Thể loại</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Phim Bộ</li>
              <li>Phim Lẻ</li>
              <li>Phim Chiếu Rạp</li>
              <li>Phim Hoạt Hình</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD875]">Theo dõi</h3>
            <div className="flex space-x-4">
              <a href={socialLinks.facebook} className="text-gray-400 hover:text-[#FFD875]">
                <FaFacebookF size={20} />
              </a>
              <a href={socialLinks.tiktok} className="text-gray-400 hover:text-[#FFD875]">
                <FaTiktok size={20} />
              </a>
              <a href={socialLinks.telegram} className="text-gray-400 hover:text-[#FFD875]">
                <FaTelegram size={20} />
              </a>
              <a href={socialLinks.zalo} className="text-gray-400 hover:text-[#FFD875]">
                <SiZalo size={20} />
              </a>
            </div>
            {/* QR Zalo */}
            {/* <div className="mt-4 flex flex-col items-center">
              <img
                src="/images/zalo-qr.png"
                alt="QR Zalo"
                className="w-28 h-28 object-contain border border-gray-700 rounded-lg"
              />
              <span className="text-xs text-gray-400 mt-2 text-center">
                Mở Zalo, bấm quét QR để quét và xem trên điện thoại
              </span>
            </div> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Ph Ang</p>
          <button
            onClick={() => scrollToTop()}
            className="mt-4 md:mt-0 bg-[#26262c] hover:bg-[#FFD875] text-white hover:text-black p-3 rounded-full transition-colors"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
