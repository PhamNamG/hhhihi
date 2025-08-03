"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  total: number;
  pages: number[];
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Paginations = ({
  page,
  total,
  pages,
  onPageChange,
  onPreviousPage,
  onNextPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onPreviousPage}
          disabled={page === 1}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1">
          {pages.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`flex items-center justify-center w-10 h-10 text-sm font-medium transition-colors rounded-md ${
                pageNumber === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <button
          className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onNextPage}
          disabled={page === total}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Paginations;
