import MVLink from "../Location/Link";
import dynamic from "next/dynamic";
import { IoFilmOutline } from "react-icons/io5";
import { Title } from "../MV/Title";
const CategoryContents = dynamic(() => import("../Category/Content/Category"));
type CategoryContentType = {
  loadmore?: string;
  title: string;
  data: any[];
};
export default function RecentlyUpdated({
  title,
  data,
  loadmore,
}: CategoryContentType) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <Title icon={<IoFilmOutline />}>{title}</Title>
        <div className="group relative inline-block">
          <MVLink
            prefetch={false}
            to={"/loadmore"}
            aria-label="Xem thêm"
            title="Xem thêm"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-200 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="text-sm font-medium">{loadmore}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="absolute inset-0 rounded-full bg-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </MVLink>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {data &&
          data.map((item) => (
            <CategoryContents
              key={item._id}
              time={item.time}
              title={item.name}
              image={item.linkImg}
              link={"/q/" + item.slug}
              products={item.products}
              typecm={item.typecm}
              text={item.text}
              sumSeri={item.sumSeri}
              year={item.year}
            />
          ))}
      </div>
    </div>
  );
}
