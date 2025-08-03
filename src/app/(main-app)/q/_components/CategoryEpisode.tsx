'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from "@/sevices/categories/categorySevices";
import {
	FaFacebookF,
	FaPinterestP,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa6";
import MVImage from "@/components/MV/IMAGE";
import MVLink from "@/components/Location/Link";
import { Badge } from "@/components/ui/badge";
import SeriNumberMovie from "@/components/Episode/SeriCategory";
import ShowDescriptions from "@/components/ShowContent/showDescriptions";
import CommentSection from "@/components/Comments/CommentSection";
import { useCategoriesId } from '@/hooks/app/categories';
import NominatedFilm from '@/components/Category/component/nominatedFilm';

const CategoryEpisode = ({ id }: { id: string }) => {

	const { data: category, isLoading, error, refetch } = useCategoriesId(id)
	
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading category</div>;
	if (!category) return <div>Category not found</div>;

	return (
		<>
			<div className="text-white bg-gradient-to-b from-[#16161a] to-[#26262c] p-6 rounded-sm">
				<div className="flex flex-col lg:flex-row gap-6 lg:items-start items-center">
					{/* Hình ảnh anime */}
					<div className="w-full md:w-1/2 lg:w-1/4">
						<div className="relative mx-auto max-w-[200px] sm:max-w-[200px] md:max-w-[200px]">
							<MVImage
								title={category.name}
								src={category?.linkImg}
								alt={category?.name}
								width={300}
								height={400}
								className="rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300 w-full"
							/>
						</div>
						{category.isMovie === "drama" && (
							<MVLink
								prefetch={false}
								to={`/d/${category?.products[category.products.length - 1]?.slug
									}`}
							>
								<button className="mt-4 bg-[#FFD875] hover:bg-[#ffc107] text-black w-full font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
									► Xem Ngay
								</button>
							</MVLink>
						)}
					</div>

					{/* Thông tin anime */}
					<div className="w-full lg:w-3/4 space-y-4">
						<h1 className="text-2xl md:text-3xl font-extrabold text-[#FFD875] text-center lg:text-left">
							{category.name}
						</h1>
						<p className="text-sm text-gray-400 text-center lg:text-left">
							<span>{category?.anotherName}</span>
						</p>
						<p className="text-sm text-gray-400 text-center lg:text-left">
							<span className="font-semibold text-[#FFD875]">22.1M</span> Lượt
							xem | Cập nhật lúc{" "}
							<span className="text-[#FFD875]">{category.hour || "10h"}</span>{" "}
							mỗi {category?.week?.name || "ngày"}
						</p>

						<div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-gray-300">
							{category.isMovie === "drama" && (
								<div className="flex items-center">
									<span className="font-semibold">Tổng:</span>
									<Badge
										variant="secondary"
										className="ml-2 bg-[#FFD875] text-black"
									>
										{category?.sumSeri || "0"} Tập
									</Badge>
								</div>
							)}
							<div className="flex items-center">
								<span className="font-semibold">Thời Lượng:</span>
								<Badge
									variant="secondary"
									className="ml-2 bg-[#4c4c4c] text-white"
								>
									{category?.time || "N/A"}
								</Badge>
							</div>
						</div>

						<div className="flex flex-wrap justify-center lg:justify-start gap-2 items-center">
							<span className="text-sm font-semibold">Thể Loại:</span>
							<span className="bg-[#4c4c4c] text-[#FFD875] text-xs font-medium px-3 py-1 rounded-md">
								Anime
							</span>
							<span className="bg-[#4c4c4c] text-gray-300 text-xs font-medium px-3 py-1 rounded-md">
								{category.type || "N/A"}
							</span>
						</div>

						{/* Đánh giá */}
						<div className="flex items-center justify-center lg:justify-start gap-2 md:gap-0">
							<span className="text-gray-400 font-semibold">Đánh giá: </span>
							<div className="md:flex block text-center">
								<div className="flex md:ml-3 ">
									{[...Array(10)].map((_, i) => (
										<svg
											key={i}
											xmlns="http://www.w3.org/2000/svg"
											className={`h-5 w-5 ${i < 8 ? "text-[#FFD875]" : "text-gray-600"
												}`}
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<span className="ml-2 text-sm text-gray-400">
									(10 điểm / 11 lượt)
								</span>
							</div>
						</div>

						{category.isMovie !== "drama" && (
							<MVLink
								prefetch={false}
								to={`/d/${category?.products[category.products.length - 1]?.slug
									}`}
							>
								<button className="bg-gradient-to-r from-[#FFD875] to-[#ffd041] hover:from-[#ffc107] hover:to-[#FFD875] mt-5 w-full lg:w-auto text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
									► Xem Ngay
								</button>
							</MVLink>
						)}

						<SeriNumberMovie data={category} />
					</div>
				</div>

				{/* Nội dung phim */}
				<div className="mt-6">
					<h2 className="text-xl font-bold mb-2 text-[#FFD875] text-center lg:text-left">
						Nội dung phim
					</h2>
					<div className="bg-[#1a1a1f] p-4 rounded-lg shadow-inner">
						<ShowDescriptions content={category.des} />
					</div>
				</div>

				<div className="border-t border-gray-700 mt-4 pt-3 flex items-center">
					<span className="text-gray-300 text-sm font-bold">Chia sẻ</span>
					<span className="text-white font-semibold ml-1">2</span>
					<div className="flex items-center gap-2 ml-3">
						<a href="#" className="bg-[#1a1a1f] hover:bg-[#26262c] p-2 rounded transition-colors">
							<FaFacebookF className="text-[#FFD875] w-4 h-4" />
						</a>
						<a href="#" className="bg-[#1a1a1f] hover:bg-[#26262c] p-2 rounded transition-colors">
							<FaTwitter className="text-[#FFD875] w-4 h-4" />
						</a>
						<a href="#" className="bg-[#1a1a1f] hover:bg-[#26262c] p-2 rounded transition-colors">
							<FaPinterestP className="text-[#FFD875] w-4 h-4" />
						</a>
						<a href="#" className="bg-[#1a1a1f] hover:bg-[#26262c] p-2 rounded transition-colors">
							<FaWhatsapp className="text-[#FFD875] w-4 h-4" />
						</a>
					</div>
				</div>
				<CommentSection />

			</div>
			<NominatedFilm seriesId={category?.relatedSeasons} categoryId={category?._id} />
		</>
	)
}
export default CategoryEpisode