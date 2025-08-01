//AsyncThunk giúp mình chờ dữ liệu xong mới render ra user
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

//AsyncThunk có 2 đối số: 1 là tên "", 2 là 1 arrow function
export const fetchListMovie = createAsyncThunk(
  "listMovie/fetchData",
  async (__dirname, { rejectedWithValue }) => {
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return result.data.content;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

const listMovieSlice = createSlice({
  name: "listMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default listMovieSlice.reducer;
