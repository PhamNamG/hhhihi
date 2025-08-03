import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addCommentSlice,
  deleteCommentSlice,
  getAllCommentSlice,
} from "./thunkActions";

interface CommentState {
  value: Comment[];
  isLoading: boolean;
}
interface Comment {
  id: string;
  user: string;
  commentContent: string;
}
const initialState: CommentState = {
  value: [],
  isLoading: true,
};
const commment = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCommentSlice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCommentSlice.fulfilled, (state, action) => {
      state.value = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(
      addCommentSlice.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.value.unshift(action.payload.data);
      }
    );
    builder.addCase(deleteCommentSlice.fulfilled, (state, action) => {
      state.value = state.value.filter(
        (item: any) => item._id !== action.payload._id
      );
    });
  },
});

export default commment.reducer;
