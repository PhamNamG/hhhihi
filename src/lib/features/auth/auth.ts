import { createSlice } from "@reduxjs/toolkit";
import { loginForm, resgisterLogin, uploadImage } from "./thunkActions";
const userSlice = createSlice({
  name: "user",
  initialState: <any>{
    value: [],
    cartUser: [],
    isLoading: false,
    error: false,
    login: {},
    userInfo: null,
    user: {},
    isLogin: false,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");
      state.user = {};
      state.userInfo = null;
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resgisterLogin.fulfilled, (state, action) => {
        state.error = false;
        state.value = action.payload.newUser;
      })
      .addCase(resgisterLogin.rejected, (state, action) => {
        state.error = true;
      });

    builder
      .addCase(loginForm.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginForm.fulfilled, (state, action) => {
        localStorage.setItem("token", JSON.stringify(action.payload));
        localStorage.setItem("isLogin", "true");
        state.error = false;
        state.isLoading = false;
        state.user = action.payload.user;
        state.isLogin = true;
        state.userInfo = action.payload.user;
      })
      .addCase(loginForm.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    
      builder
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(uploadImage.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { logout } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
