"use client";

import { Icategory } from "@/interfaces/category";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getAllcate } from "@/lib/features/categorys/thunkActions";
import LoadingUsagyuuun from "../Loading";
import RecentlyUpdated from "../RecentlyUpdated";
import LoadmorePagination from "@/sections/pagination/loadmore-pagination";
export type CategoryLoadmore = {
	data: Icategory[];
	totalCount: number;
	totalPages: number;
};

const LoadmoreComponent = () => {
	const dispatch = useAppDispatch();
	const total = Math.round(44 / 24);
	const [page, setPage] = useState(1);
	const pages = Array(total)
		.fill(null)
		.map((_, index) => index + 1);
	const handleChangePage = (page: number) => {
		setPage(page);
	};
	const handleNextPage = () => {
		setPage((page) => page + 1);
	};
	const handlePreviosPage = () => {
		setPage((page) => page - 1);
	};
	const categorys = useAppSelector((state) => state.category.category);
	const isLoading = useAppSelector((state) => state.category.isLoading);

	useEffect(() => {
		dispatch(getAllcate(page));
	}, [page]);

	if (isLoading) {
		return <LoadingUsagyuuun />;
	}

	return (
		<>
			<RecentlyUpdated title="Phim" data={categorys.data} loadmore="" />
			<LoadmorePagination
				page={page}
				handleChangePage={handleChangePage}
				handlePreviosPage={handlePreviosPage}
				handleNextPage={handleNextPage}
				total={total}
				pages={pages}
			/>
		</>
	);
};

export default LoadmoreComponent;
