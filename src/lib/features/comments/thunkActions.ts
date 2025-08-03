import {
  addComment,
  deleteComent,
  getAllCommentByCategory,
} from "@/sevices/comments";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCommentSlice = createAsyncThunk(
  "getAllCommentSlice",
  async (id: any) => {
    const { data }: any = await getAllCommentByCategory(id);
    return data;
  }
);

export const addCommentSlice = createAsyncThunk(
  "addCommentSlice",
  async (dataCm: any) => {
    const { data }: any = await addComment(dataCm.categoryId, dataCm);
    return data;
  }
);

export const deleteCommentSlice = createAsyncThunk(
  "deleteComment",
  async (dataId: any) => {
    const { data }: any = await deleteComent(dataId);
    return data;
  }
);
