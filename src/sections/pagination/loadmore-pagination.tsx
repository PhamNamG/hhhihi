"use client";

import Paginations from "@/components/Paginations";
import { ChevronLeft, ChevronRight } from "lucide-react";

type LoadmorePaginationProps = {
	page: number;
	handleChangePage: (page: number) => void;
	handlePreviosPage: () => void;
	handleNextPage: () => void;
	total: number;
	pages: number[];
};

const LoadmorePagination = ({
	page,
	handleChangePage,
	handlePreviosPage,
	handleNextPage,
	total,
	pages,
}: LoadmorePaginationProps) => {
	return (
		<Paginations
			page={page}
			total={total}
			pages={pages}
			onPageChange={handleChangePage}
			onPreviousPage={handlePreviosPage}
			onNextPage={handleNextPage}
		/>
	);
};

export default LoadmorePagination;


