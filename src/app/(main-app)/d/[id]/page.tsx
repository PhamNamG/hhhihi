import { notFound } from "next/navigation";
import "./style.css"; // Nhúng tệp CSS
import ShowDescriptions from "@/components/ShowContent/showDescriptions";
import { Metadata, ResolvingMetadata } from "next";
import SeriDetailProducts from "@/components/Episode/SeriDetail";
import VideoPlayer from "../component/VideoPlayer";
import Save from "../component/Save";
import { fetchProduct } from "@/sevices/products/productsSevices";
import { socialLinks } from "@/config/socialLinks";
import { SiZalo } from "react-icons/si";
import dynamic from "next/dynamic";
import { FaCalendarAlt, FaClock, FaFilm, FaHighlighter, FaPlay } from "react-icons/fa";

const QRCode = dynamic(() => import('qrcode.react').then(mod => mod.QRCodeSVG), {
  ssr: false
});


type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const res: any = await fetchProduct(id);
  return {
    title:
      res.category?.isMovie == "drama"
        ? res?.category?.name + " Tập " + res?.seri
        : res?.category?.name,
    description: res?.category?.des,
    openGraph: {
      images: res?.category?.linkImg,
      type: "video.episode",
      url: `https://hhhihi.site/d/${res?.category?.slug}-episode-${res?.seri}`,
    },
  };
}

const DetailWatched = async ({
  params,
}: {
  params: { id: string; c: string };
}) => {
  const getOneProductDetail = await fetchProduct(params.id);

  if (!getOneProductDetail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16161a] to-[#26262c] text-white pb-10 h-full">
      <div className="container mx-auto pl-3 sm:pl-3 lg:pl-3 my-2">
        {/* Video Player Section */}
        <div className="mb-4 sm:mb-6">

          <VideoPlayer getOneProductDetail={getOneProductDetail} />
        </div>
        <div className="bg-[#1a1a1f] p-3 rounded-lg border border-[#FFD875]/20 hover:border-[#FFD875]/40 transition-all duration-300 mb-4">
          <p className="text-sm text-center lg:text-left flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
            <span className="text-gray-400 text-center sm:text-left">Tham gia nhóm Zalo để nhận thông báo phim mới nào: </span>
            <a
              href={socialLinks.zalo}
              className="text-[#FFD875] hover:text-[#ffc107] font-semibold hover:underline inline-flex items-center gap-1 whitespace-nowrap bg-[#26262c] hover:bg-[#2d2d35] px-3 py-1.5 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiZalo className="w-4 h-4" />
              Nhóm Zalo
            </a>
          </p>
        </div>
        {/* Movie Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Movie Details */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-[#1a1a1f] rounded-lg overflow-hidden">
              {/* Title Bar */}
              <div className="bg-[#1f1f24] p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <h1 className="text-lg sm:text-xl font-bold">
                  {getOneProductDetail?.category?.name}
                  {getOneProductDetail?.category?.isMovie === "drama" && (
                    <span className="text-[#FFD875] ml-2">
                      Tập {getOneProductDetail?.seri}
                    </span>
                  )}
                </h1>
                <Save
                  movieId={params.id}
                  movieData={{
                    id: params.id,
                    name: getOneProductDetail?.name || '',
                    thumbnail: getOneProductDetail?.category?.linkImg || '',
                    slug: getOneProductDetail?.slug || '',
                  }}
                />
              </div>

              {/* Episode List */}
              <div className="p-3 sm:p-4">
                <SeriDetailProducts
                  getOneProductDetail={getOneProductDetail}
                  productId={getOneProductDetail._id}
                  seriProducts={getOneProductDetail?.category?.products}
                  name={getOneProductDetail.name}
                  isMovie={getOneProductDetail?.category?.isMovie}
                />
              </div>

              {/* Movie Description */}
              <div className="p-3 sm:p-4 border-t border-gray-700">
                <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Nội dung phim</h2>
                <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <ShowDescriptions content={getOneProductDetail?.category?.des} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="movie-sidebar">
            <div className="movie-details-card">
              <h2 className="sidebar-title">
                <FaFilm className="sidebar-title-icon" />
                Thông tin phim
              </h2>
              <div className="movie-details-list">
                <div className="movie-detail-item">
                  <span className="detail-label">
                    <FaPlay className="detail-icon" />
                    Trạng thái:
                  </span>
                  <span className="detail-value highlight">
                    {getOneProductDetail?.category?.isMovie === "drama"
                      ? `Tập ${getOneProductDetail?.seri}`
                      : "Full HD"}
                  </span>
                </div>
                <div className="movie-detail-item">
                  <span className="detail-label">
                    <FaClock className="detail-icon" />
                    Thời lượng:
                  </span>
                  <span className="detail-value">{getOneProductDetail?.category?.time || "N/A"}</span>
                </div>
                <div className="movie-detail-item">
                  <span className="detail-label">
                    <FaCalendarAlt className="detail-icon" />
                    Năm phát hành:
                  </span>
                  <span className="detail-value">{getOneProductDetail?.category?.year || "N/A"}</span>
                </div>
                <div className="movie-detail-item">
                  <span className="detail-label">
                    <FaHighlighter className="detail-icon" />
                    Chất lượng:
                  </span>
                  <span className="detail-value highlight">HD Vietsub</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1f] p-2 rounded-lg shadow-lg flex flex-col items-center">
              <QRCode
                value={socialLinks.zalo}
                level="H"
                includeMargin={true}
                className="rounded-lg"
              />
              <p className="text-white text-center mt-1 text-xs font-medium">Quét để tham gia nhóm Zalo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWatched;
