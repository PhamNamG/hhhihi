import React from "react";
import CategoryProductSidebar from "../components/Category/component/sidebar";
import BannerDisplay from "../components/banners";

const MainLayout = ({ children }: any) => {
  return (
    <div className="mt-[80px]">
      <BannerDisplay />
      <main className="container mx-auto">
        <div className="text-white min-h-screen lg:px-[8%] md:px-[8%] px-[3%] py-[10px] ">
          <div className="bg-gradient-to-r from-[#16161a] to-[#26262c] rounded-lg">
            <div className="flex gap-5 ">
              <div className="w-full lg:w-9/12">{children}</div>
              <div className="w-3/12 hidden lg:block">
                <CategoryProductSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
