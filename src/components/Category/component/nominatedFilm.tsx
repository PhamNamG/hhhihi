import React from "react";
import RecentlyUpdated from "../../RecentlyUpdated";
import { useFetchCategoryNominated } from "@/sevices/products/productsSevices";
const NominatedFilm = async ({ seriesId, categoryId }: any) => {
  const data: any = await useFetchCategoryNominated(seriesId, categoryId);
  return (
    <div className="p-3">
      <RecentlyUpdated data={data?.data} title="Phim đề cử" loadmore="Xem Thêm" />
    </div>
  );
};

export default NominatedFilm;
