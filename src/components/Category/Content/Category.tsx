import React, { memo } from "react";
import MVLink from "../../Location/Link";
import { PlayCircleOutlined } from "@ant-design/icons";
import MVImage from "../../MV/IMAGE";

interface CategoryContent {
  text?: string;
  title: string;
  link?: any;
  image?: string;
  sumSeri?: any;
  time?: string;
  typecm?: string;
  year?: string;
  products?: [];
}

const CategoryContents = memo(
  ({ title, link, image, sumSeri, products }: CategoryContent) => {
    const lastItem: any = products ? products[products.length - 1] : "";
    return (
      <div className="w-full">
      <div className="relative group rounded-md overflow-hidden shadow-lg transition-shadow duration-300">
        <MVLink to={link} prefetch={false} className="relative">
          <MVImage
            src={image}
            alt={title}
            width={300}
            height={400}
            className="w-full h-[272px] md:h-[300px] lg:h-[320px] transition-transform duration-300 group-hover:scale-105 object-cover rounded-md"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
          />
          {/* Tag Tập */}
          <div
            style={{
              background: "#000000b3",
            }}
            className="absolute top-2 left-2 text-white text-[10px] sm:text-xs rounded-sm px-2 py-[2px] font-medium shadow-md"
          >
            {sumSeri === lastItem?.seri
              ? "Full HD Vietsub"
              : lastItem
              ? `Tập ${lastItem?.seri}`
              : "Full"}
          </div>
          {/* Nút Play */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-opacity-50 rounded-full transition-transform duration-300">
              <PlayCircleOutlined className="text-white text-3xl" />
            </div>
          </div>
          {/* Tiêu đề */}
          <div
            className="absolute bottom-0 w-full left-0 text-white text-base font-semibold px-3 py-2
              truncate shadow-lg"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
            }}
          >
            {title}
          </div>
        </MVLink>
      </div>
    
      {/* Thông tin bổ sung */}
      {/* <div className="mt-3 px-2">
        <div className="text-gray-400 text-xs sm:text-sm font-medium">
          <div className="flex items-center justify-between">
            <span>{sumSeri ? `${sumSeri} Tập` : "N/A"}</span>
            <span>{typecm ?? "Thể loại"}</span>
            <span>{year ? `${year}` : "N/A"}</span>
          </div>
        </div>
      </div> */}
    </div>
    
    );
  }
);

export default CategoryContents;
