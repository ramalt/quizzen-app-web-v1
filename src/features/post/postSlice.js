import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Api/axios";

const initialState = {
  loading: true,
  posts: [],
  currentPost: null,
  currentPostAnswers: [],
};

export const getPosts = createAsyncThunk("getPosts", async () => {
  const { data } = await axios.get("http://localhost:5174/api/question");

  return data.data;
});

export const getPostById = createAsyncThunk("getPostById", async (qId) => {
  const { data } = await axios.get(`http://localhost:5174/api/question/${qId}`);

  return data.data;
});

export const getPostAnswers = createAsyncThunk(
  "getPostAnswers",
  async (qId) => {
    const { data } = await axios.get(
      `http://localhost:5174/api/Answer?questionId=${qId}`
    );

    return data.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.currentPost = action.payload;
        state.loading = false;
      })
      .addCase(getPostAnswers.fulfilled, (state, action) => {
        state.currentPostAnswers = action.payload;
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
