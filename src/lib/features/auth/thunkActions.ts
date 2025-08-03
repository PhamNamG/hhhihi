import { editImageUser, login, resgister } from "@/sevices/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const resgisterLogin = createAsyncThunk(
  "user/login",
  async (payload: any) => {
    const { data } = await resgister(payload);
    return data;
  }
);
export const loginForm = createAsyncThunk(
  "user/signin",
  async (payload: any) => {
    const { data } = await login(payload);
    return data;
  }
);
export const uploadImage = createAsyncThunk(
  "uploadImage",
  async ({ id, formData }: any) => {
    const { data }: any = await editImageUser(id, formData);
    return data;
  }
);
