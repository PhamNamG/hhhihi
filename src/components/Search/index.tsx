"use client"

import type React from "react"
import MVLink from "../Location/Link"
import MVImage from "../MV/IMAGE"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import "./search-results.css"

export interface SuggestionItem {
  NAME: string
  URL: string
}

interface SearchResultsProps {
  data: any[]
  handleClick: (search?: string) => void
  popularSearches?: SuggestionItem[]
  searchValue?: string
  isFocused?: boolean
  isLoading?: boolean
}

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  handleClick,
  popularSearches = [],
  searchValue = "",
  isFocused,
  isLoading = false,
}) => {
  if (!isFocused || searchValue === "") {
    return null
  }

  return (
    <Card className="search-results-container absolute top-[50px] left-0 right-0 max-h-[400px] scroll-container overflow-y-scroll lg:left-0 w-full flex flex-col bg-[#2f2f33] shadow-lg rounded-xl z-10 m-2 border-gray-700">
      <div className="p-4 flex flex-col gap-2 font-sans text-base font-normal text-blue-gray-700">
        {searchValue.trim() ? (
          isLoading ? (
            <div className="loading-state p-4 text-center text-sm text-gray-400">
              <Loader2 className="inline-block w-5 h-5 mr-2 animate-spin" />
              <span>Đang tìm kiếm...</span>
            </div>
          ) : data.length > 0 ? (
            <div className="search-results-list">
              {data.map((item: any) => (
                <MVLink prefetch={false} to={`/q/${item.slug}`} key={item._id}>
                  <div className="search-result-item flex items-center gap-4 p-4 w-full max-w-full transition-all rounded-lg bg-[#2c2c2f] text-start hover:bg-[#1c1c1d] hover:text-white active:bg-blue-900">
                    {/* Thumbnail */}
                    <div className="search-result-thumbnail w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-500">
                      <MVImage
                        src={item.linkImg || "/default-thumbnail.png"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        width={150}
                        height={100}
                      />
                    </div>

                    {/* Content */}
                    <div className="search-result-content flex-1 overflow-hidden">
                      <h3 className="search-result-title text-base font-semibold text-white truncate max-w-[250px]">
                        {item.name}
                      </h3>

                      <p className="search-result-description text-sm text-gray-400 max-w-[280px] line-clamp-2 overflow-hidden">
                        {`FULL ${item.quality}/4K/Thuyết Minh` || "Không có mô tả chi tiết."}
                      </p>

                      <div className="search-result-meta flex items-center gap-2 mt-1 text-sm text-yellow-400">
                        <span className="search-result-type truncate">{item.type || "Thể loại không xác định"}</span>
                        <span className="text-gray-400">•</span>
                        <span className="search-result-views">
                          {item.views ? `${item.views.toLocaleString()} lượt xem` : "0 lượt xem"}
                        </span>
                      </div>
                    </div>
                  </div>
                </MVLink>
              ))}
            </div>
          ) : (
            <div className="empty-state p-4 text-center text-sm text-gray-400">
              <svg
                className="empty-state-icon mx-auto w-12 h-12 mb-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p>Không tìm thấy kết quả phù hợp.</p>
              <p className="mt-1 text-xs">Vui lòng thử từ khóa khác.</p>
            </div>
          )
        ) : (
          <div className="popular-searches p-2">
            <p className="text-gray-300 text-sm">Gợi ý tìm kiếm phổ biến:</p>
            <div className="popular-searches-list mt-2 flex flex-wrap gap-2 gap-y-5">
              {popularSearches?.map((search, index) => (
                <MVLink key={index} prefetch={false} to={search.URL || "#"}>
                  <span className="popular-search-item bg-[#444] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#666]">
                    {search.NAME}
                  </span>
                </MVLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default SearchResults
