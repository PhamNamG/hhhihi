import { createSlice, current } from "@reduxjs/toolkit";
import {
  getAllcate,
  // getAllCategoryNotReqSlice,
  getCateSlice,
  getReleasesCategorys,
  // addCateGorySlice,
  // updateCatgorySlice,
  // deleteCategorySlice,
} from "./thunkActions";
import { isCategorysSlice } from "../../../interfaces/category";
const state: isCategorysSlice = {
  category: {
    data: [],
    totalCount: 0,
    totalPages: 0,
  },
  isLoading: false,
  isError: false,
  categoryNotReqId: [],
  details: {},
  releases: [],
};
const categorySlice = createSlice({
  name: "category",
  initialState: state,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllcate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getAllcate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllcate.rejected, (state, action) => {
        state.isError = true;
      });

    builder
      .addCase(getReleasesCategorys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.releases = action.payload;
      })
      .addCase(getReleasesCategorys.pending, (state, action) => {
        state.isLoading = true;
      })

    // builder
    //   .addCase(getAllCategoryNotReqSlice.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.categoryNotReqId = action.payload;
    //   })
    //   .addCase(getAllCategoryNotReqSlice.pending, (state, action) => {
    //     state.isLoading = true;
    //   });

    // builder.addCase(addCateGorySlice.fulfilled, (state, action) => {
    //   state.category.data = state.category.data.concat(action.payload);
    // });
    // builder.addCase(deleteCategorySlice.fulfilled, (state, action) => {
    //   state.category.data = state.category.data.filter(
    //     (item: any) => item._id !== action.payload._id
    //   );
    // });
    // builder.addCase(updateCatgorySlice.fulfilled, (state, action) => {
    //   state.category.data.push(action.payload);
    // });
    // builder
    //   .addCase(getCateSlice.fulfilled, (state, action) => {
    //     state.details = action.payload;
    //     state.isLoading = false;
    //   })
    //   .addCase(getCateSlice.pending, (state, action) => {
    //     state.isLoading = true;
    //   });
  },
});

export default categorySlice.reducer;
