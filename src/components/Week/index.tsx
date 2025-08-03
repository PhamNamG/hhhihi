"use client";

import React, { useState } from "react";
import { WEEKDAY } from "@/constant";
import CategoryContents from "../Category/Content/Category";
import LazyLoadOtherComponents from "../LazyOtherComponents";
import { IoCalendarOutline } from "react-icons/io5";
import { useWeeks, useWeeksByCategory } from "@/hooks/app/week";
import { Title } from "../MV/Title";

interface WeekComponentProps {
  title: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  linkImg: string;
  time: string;
  sumSeri: string;
  products: any;
}

interface WeekData {
  _id: string;
  name: string;
}

interface CategoryResponse {
  content: Category[];
}

export default function WeekComponent({ title }: WeekComponentProps) {
  const today = new Date();
  const day = today.getDay();
  const [tabs, setTabs] = useState(WEEKDAY[day]);
  const { data: weeks, error } = useWeeks();
  const { data: categorys, isLoading } = useWeeksByCategory(tabs);
  const handleTabClick = (tabId: string) => {
    setTabs(tabId);
  };

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading schedule data
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white-500"></div>
      </div>
    );
  }

  return (
    <LazyLoadOtherComponents>
      <div className=" text-white py-8">
        <div className="max-w-7xl mx-auto">
          <Title icon={<IoCalendarOutline />}>
            Lịch Phát Sóng
          </Title>

          {/* Week days tabs */}
          <div className="mt-6 mb-8 overflow-hidden">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 md:gap-3">
              {weeks?.map((item: WeekData) => (
                <button
                  key={item._id}
                  onClick={() => handleTabClick(item.name)}
                  className={`
                    py-2 md:py-3 px-2 md:px-4 rounded-lg transition-all duration-300
                    text-center whitespace-nowrap
                    ${tabs === item.name
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg"
                      : "bg-gradient-to-r from-[#2F3343] to-[#3F4357] text-gray-200 hover:from-gray-600 hover:to-gray-700 hover:text-white"
                    }
                  `}
                >
                  <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {categorys?.data?.content?.map((item: Category) => (
                <div key={item._id} className="transform transition-transform duration-300 hover:scale-105">
                  <CategoryContents
                    title={item.name}
                    link={`/q/${item.slug}`}
                    image={item.linkImg}
                    time={item.time}
                    sumSeri={item.sumSeri}
                    products={item.products}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LazyLoadOtherComponents>
  );
}
