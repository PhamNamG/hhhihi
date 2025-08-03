"use client";
import { IProduct } from "@/interfaces/product";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { serverBtns } from "@/constant";
import ErrorsMessage from './ErrorsMessage';

const VideoPlayer = ({
  getOneProductDetail,
}: {
  getOneProductDetail: IProduct;
}) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoStatus, setVideoStatus] = useState("loading");
  const [currentServer, setCurrentServer] = useState("daily");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const secretKey =
    process.env.NEXT_PUBLIC_SECERT_CRYPTO_KEY_PRODUCTS_DAILYMOTION_SERVER || "";
  const data = CryptoJS.AES.decrypt(
    getOneProductDetail.dailyMotionServer,
    secretKey
  ).toString(CryptoJS.enc.Utf8);

  const handleChangeServer = (serverType: string) => {
    setVideoStatus("loading");
    setCurrentServer(serverType);
    let newUrl = "";
    switch (serverType) {
      case "daily":
        newUrl = getOneProductDetail.dailyMotionServer ? data : "";
        break;
      case "assby":
        newUrl = getOneProductDetail.server2 || "";
        break;
      case "drive":
        newUrl = getOneProductDetail.link || "";
        break;
    }
    if (newUrl && newUrl.trim() !== "") {
      setVideoUrl(newUrl);
      setVideoStatus("ready");
    } else {
      setVideoStatus("unavailable");
    }
  };

  useEffect(() => {
    handleChangeServer("daily");
  }, [getOneProductDetail]);

  const renderVideo = () => {
    switch (videoStatus) {
      case "ready":
      case "playing":
        return (
          <iframe
            allowFullScreen
            title="video-player"
            className="absolute inset-0 w-full h-full max-w-full"
            src={videoUrl}
            onLoad={() => setVideoStatus("playing")}
            onError={() => setVideoStatus("error")}
          />
        );
      case "loading":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Đang tải video...
          </div>
        );
      case "unavailable":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Video đang trong quá trình cập nhật.
          </div>
        );
      case "error":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            Có lỗi xảy ra khi tải video.
          </div>
        );
      default:
        return (
          <iframe
            allowFullScreen
            title="video-player"
            className="absolute inset-0 w-full h-full"
            src={getOneProductDetail.trailer}
          />
        );
    }
  };
  const arrLink = [
    getOneProductDetail.dailyMotionServer,
    getOneProductDetail.server2,
    getOneProductDetail.link,
  ];
  return (
    <div className="space-y-4">
      {/* Video Player */}
      <div className="relative aspect-video w-full rounded overflow-hidden bg-black">
        {renderVideo()}
      </div>

      {/* Chọn Server */}
      <div className="bg-[#1a1a1f] rounded-lg overflow-hidden">
        <div className="bg-[#1f1f24] p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <h2 className="text-base sm:text-lg font-semibold text-white">Chọn Server</h2>
          <button 
            onClick={() => setIsErrorModalOpen(true)}
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-[#FFD875] bg-[#26262c] rounded-full hover:bg-[#2d2d33] transition-colors border border-[#FFD875]/20"
          >
            Báo lỗi
          </button>
        </div>

        <div className="p-3 sm:p-4">
          <div className="flex flex-wrap gap-2">
            {serverBtns
              .filter((server, index) => arrLink[index])
              .map((server, index) => (
                <button
                  key={server}
                  onClick={() => handleChangeServer(server)}
                  className={`flex items-center px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors text-xs sm:text-sm ${
                    currentServer === server
                      ? "bg-[#FFD875] text-[#1a1a1f]"
                      : "bg-[#26262c] text-gray-300 hover:bg-[#2d2d33] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-1.5 sm:gap-2 font-medium whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Server #{index + 1}
                  </span>
                </button>
              ))}
          </div>

          <p className="text-xs sm:text-sm text-[#FFD875] mt-3 sm:mt-4">
            *Nếu server hiện tại không xem được, vui lòng chọn server khác hoặc tải lại trang
          </p>
        </div>
      </div>

      {/* Loading States */}
      {videoStatus === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-sm sm:text-base text-white">Đang tải video...</div>
        </div>
      )}
      
      {videoStatus === "unavailable" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-sm sm:text-base text-white">Video đang trong quá trình cập nhật.</div>
        </div>
      )}
      
      {videoStatus === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-sm sm:text-base text-white">Có lỗi xảy ra khi tải video.</div>
        </div>
      )}

      {/* Error Modal */}
      <ErrorsMessage 
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        movieName={getOneProductDetail?.category?.name || ""}
        productId={getOneProductDetail?._id?.toString() || ""}
        setIsErrorModalOpen={setIsErrorModalOpen}
      />
    </div>
  );
};

export default VideoPlayer;
