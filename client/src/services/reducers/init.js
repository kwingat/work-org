import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  devComp: null,
  uatStart: null,
  uatComp: null,
  implement: null,
};

const operationSlice = createSlice({
  name: "operation",
  initialState,
  reducers: {},
});

export default operationSlice.reducer;
