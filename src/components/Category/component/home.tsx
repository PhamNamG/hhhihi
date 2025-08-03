"use client";
import dynamic from "next/dynamic";
import WeekComponent from "../../Week";
import LoadingUsagyuuun from "../../Loading";
import { useCategories } from "@/hooks/app/categories";

const RecentlyUpdated = dynamic(() => import("../../RecentlyUpdated"), {
  loading: () => <LoadingUsagyuuun />
});

const CategoryHomePage = () => {
  // const { categorys: val, setCategory } = useCategoryStore((state: any) => ({
  //   categorys: state.categorys,
  //   setCategory: state.setCategory,
  // }));

  const { data: val, isLoading, error: isError, refetch } = useCategories();

  // useLayoutEffect(() => {
  //   // Đảm bảo dữ liệu được tải trước khi render
  //   if (!isLoading && val) {
  //     refetch();
  //   }
  // }, [isLoading, val, refetch]);

  if (isLoading || !val) {
    return <LoadingUsagyuuun />;
  }

  if (isError) {
    return <div>Server error</div>;
  }

  return (
    <div className="p-3">
      <RecentlyUpdated
        data={val?.data}
        title="MỚI CẬP NHẬT"
        loadmore="Xem Thêm"
      />
      <WeekComponent title={"Lịch Chiếu"} />
    </div>
  );
};

export default CategoryHomePage;