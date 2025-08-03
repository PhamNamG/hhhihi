"use client";
import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import {
  getAllcate,
  getAllCategoryLatest,
  getCateSlice,
} from "@/lib/features/categorys/thunkActions";
import { Icategory } from "@/interfaces/category";

type DataTypes = "products" | "categorys" | "SEEALL" | "DETAIL";
export type CategoryLoadmore = {
  data: Icategory[];
  totalCount: number;
  totalPages: number;
};
const defaultCategoryLoadmore: CategoryLoadmore = {
  data: [],
  totalCount: 0,
  totalPages: 0,
};
const useAsyncData = (type: DataTypes, page?: any, id?: any) => {
  const dispatch = useAppDispatch();

  const dataFromStore: any = useAppSelector((state) => {
    if (type === "categorys") return state.category.category;
    if (type === "SEEALL") return state.category.category;
    if (type === "DETAIL") return state.category.details;
    return defaultCategoryLoadmore;
  });

  const { data, error, isLoading } = useSWR(
    dataFromStore?.data
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}?page=${page}`
      : null,
    {
      fetcher: async () => {
        if (type === "categorys") {
          const result = await dispatch(getAllCategoryLatest());
          return result.payload?.data;
        }
        if (type === "SEEALL") {
          const result = await dispatch(getAllcate(page));
          return result.payload?.data;
        }
        if (type === "DETAIL") {
          const result = await dispatch(getCateSlice(id));
          return result.payload?.data;
        }
      },
      revalidateOnFocus: false,
    }
  );
  useEffect(() => {
    if (data && type === "categorys") {
      dispatch({ type: "categorys/setCategorys", payload: data });
    }
    if (data && type === "SEEALL") {
      dispatch({ type: "categorys/setCategorysSeeAll", payload: data });
    }
    if (data && type === "DETAIL") {
      dispatch({ type: "categorys/detail", payload: data });
    }
  }, [data, dispatch, type]);
  return {
    data: dataFromStore,
    isLoading: isLoading,
    isError: error,
  };
};

export default useAsyncData;
